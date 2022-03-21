import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastermindContainerComponent } from './components/mastermind-container/mastermind-container.component';
import { RouterModule, Routes } from '@angular/router';
import { GameBoardComponent } from './components/game-board/game-board.component';

const routes: Routes = [{ path: '', component: MastermindContainerComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [MastermindContainerComponent, GameBoardComponent],
})
export class MastermindLibModule {}
