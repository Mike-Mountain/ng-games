import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSettingsComponent } from './components/game-settings/game-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  declarations: [GameSettingsComponent],
  exports: [GameSettingsComponent],
})
export class SharedGameSettingsModule {}
