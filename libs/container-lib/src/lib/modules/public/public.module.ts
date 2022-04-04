import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, MatCardModule, RouterModule],
  exports: [LandingComponent],
})
export class PublicModule {}
