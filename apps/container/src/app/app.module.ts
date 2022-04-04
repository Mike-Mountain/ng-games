import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CtrLayoutModule } from '@ng-games/container-lib';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    CtrLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' },
    },
  ],
})
export class AppModule {}
