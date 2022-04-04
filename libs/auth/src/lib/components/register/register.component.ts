import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Input() registerForm: FormGroup | undefined;
  @Output() register = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  submit() {
    this.register.emit(true);
  }
}
