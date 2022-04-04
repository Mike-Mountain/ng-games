import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export enum AuthAction {
  LOGIN = 'Login',
  REGISTER = 'Register',
  FORGOT = 'Forgot Password',
  RESET = 'Reset Password',
}

export interface AuthConfig {
  action: AuthAction;
}

export function createLoginForm(formBuilder: FormBuilder): FormGroup {
  return formBuilder.group({
    email: ['', Validators.compose([Validators.email, Validators.required])],
    password: ['', Validators.required],
  });
}

export function createRegisterForm(formBuilder: FormBuilder): FormGroup {
  return formBuilder.group({
    email: ['', Validators.compose([Validators.email, Validators.required])],
    username: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
}
