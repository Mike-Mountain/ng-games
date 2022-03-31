import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastermindContainerComponent } from './components/mastermind-container/mastermind-container.component';
import { RouterModule, Routes } from '@angular/router';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ToolbarService } from '@ng-games/container-lib';

const routes: Routes = [{ path: '', component: MastermindContainerComponent }];

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [MastermindContainerComponent, GameBoardComponent],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
    ToolbarService,
  ],
})
export class MastermindLibModule {}
