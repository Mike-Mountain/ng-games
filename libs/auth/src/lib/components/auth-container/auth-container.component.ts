import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  AuthAction,
  AuthConfig,
  createLoginForm,
  createRegisterForm,
} from '../../models/auth-config.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'auth-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss'],
})
export class AuthContainerComponent implements OnInit {
  public authConfig: AuthConfig;
  public action = AuthAction;
  public authForm: FormGroup | undefined;

  constructor(
    public dialogRef: MatDialogRef<AuthContainerComponent>,
    @Inject(MAT_DIALOG_DATA) private data: AuthConfig,
    private formBuilder: FormBuilder
  ) {
    this.authConfig = data;
  }

  ngOnInit(): void {
    switch (this.authConfig.action) {
      case AuthAction.LOGIN:
        this.authForm = createLoginForm(this.formBuilder);
        break;
      case AuthAction.REGISTER:
        this.authForm = createRegisterForm(this.formBuilder);
        break;
      default:
        break;
    }
  }

  login() {
    console.log(this.authForm?.value);
  }
}
