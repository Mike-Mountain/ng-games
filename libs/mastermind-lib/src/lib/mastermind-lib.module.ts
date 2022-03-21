import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastermindContainerComponent } from './components/mastermind-container/mastermind-container.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: MastermindContainerComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [MastermindContainerComponent],
})
export class MastermindLibModule {}
