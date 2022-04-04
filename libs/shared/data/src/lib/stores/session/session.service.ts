import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { defer, from, map, tap } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { createSession, createUser } from './session.model';

@Injectable({ providedIn: 'root' })
export class SessionService {
  collection: AngularFirestoreCollection;

  constructor(
    private sessionStore: SessionStore,
    private auth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this.collection = afs.collection('users');
  }

  login(data: { email: string; password: string }) {
    return defer(() =>
      from(
        this.auth.signInWithEmailAndPassword(data.email, data.password)
      ).pipe(
        tap((data: any) => {
          this.sessionStore.update({
            user: createUser(data.user),
            token: data.user.multiFactor.user.accessToken,
          });
        })
      )
    );
  }

  register(data: { email: string; username: string; password: string }) {
    return defer(() =>
      from(
        this.auth.createUserWithEmailAndPassword(data.email, data.password)
      ).pipe(
        map((data) => createUser(data.user)),
        tap((user) => {
          if (user) {
            this.collection
              .doc(user.id)
              .set(user)
              .then(() => {
                this.login(data).subscribe();
              });
          }
        })
      )
    );
  }

  logout() {
    this.sessionStore.update(createSession());
  }
}
