import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('@ng-games/libs/mastermind/mastermind-lib.module').then(
            (m) => m.MastermindLibModule
          ),
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
