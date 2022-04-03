import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '@ng-games/container-lib';

const appRoutes: Routes = [
  { path: 'landing', component: LandingComponent },
  {
    path: 'code-master',
    loadChildren: () =>
      import('mastermind/Module').then((m) => m.RemoteEntryModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '/landing' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
