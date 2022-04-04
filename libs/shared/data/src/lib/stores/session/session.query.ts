import { Injectable } from '@angular/core';
import { Query, toBoolean } from "@datorama/akita";
import { SessionStore } from './session.store';
import { Session } from './session.model';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<Session> {
  public isLoggedIn$ = this.select(session => toBoolean(session.token));
  constructor(protected override store: SessionStore) {
    super(store);
  }
}
