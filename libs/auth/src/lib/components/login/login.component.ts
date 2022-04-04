import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() authForm: FormGroup | undefined;
  @Output() login = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  submit() {
    this.login.emit(true);
  }
}
