import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructionsComponent } from './components/instructions/instructions.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InstructionsComponent],
  exports: [InstructionsComponent],
})
export class GameInstructionsModule {}
