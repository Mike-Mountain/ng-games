import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { AuthContainerComponent } from '../../components/auth-container/auth-container.component';

@Injectable({
  providedIn: 'root',
})
export class AuthDialogService {
  constructor(private dialog: MatDialog) {}

  openAuthDialog(
    config?: MatDialogConfig
  ): MatDialogRef<AuthContainerComponent> {
    return this.dialog.open(AuthContainerComponent, config);
  }
}
