import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  name: FormControl;
  firstSurname: FormControl;
  secondSurname: FormControl;
  birthdate: FormControl;
  email: FormControl;
  password: FormControl;
  errorMsg: string;
  hide = true;

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<RegisterComponent>) {
    this.name = new FormControl('', [Validators.required]);
    this.firstSurname = new FormControl('', [Validators.required]);
    this.secondSurname = new FormControl('');
    this.birthdate = new FormControl('', [Validators.required, Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {}

  handleError(error: any) {
    if (error.status === 500) {
      this.errorMsg = 'Failed to register';
    }
  }

  getErrorName() {
    if (this.name.hasError('required')) {
      return 'Enter your name';
    }
    return this.name.hasError('name') ? 'Name not valid' : '';
  }

  getErrorFirstSurname() {
    if (this.firstSurname.hasError('required')) {
      return 'Enter your first surname';
    }
    return this.firstSurname.hasError('firstSurname') ? 'First surname not valid' : '';
  }

  getErrorBirthDate() {
    if (this.birthdate.hasError('required')) {
      return 'Enter your birth date';
    }
    return this.birthdate.hasError('birthdate') ? 'Birth date not valid' : '';
  }

  getErrorEmail() {
    if (this.email.hasError('required')) {
      return 'Enter your email';
    }
    return this.email.hasError('email') ? 'Email address not valid' : '';
  }

  openLogin() {
    this.dialog.open(LoginComponent);
    this.dialogRef.close();
  }
}
