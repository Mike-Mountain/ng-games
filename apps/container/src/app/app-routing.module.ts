import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'code-master',
    loadChildren: () =>
      import('mastermind/Module').then((m) => m.RemoteEntryModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '/code-master' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
