import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: FormControl;
  password: FormControl;
  errorMsg: string;
  hide = true;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<LoginComponent>,
    private loginService: LoginService
  ) {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {}

  handleError(error: any) {
    if (error.status === 500) {
      this.errorMsg = 'User not found';
    }
  }

  getErrorEmail() {
    if (this.email.hasError('required')) {
      return 'Enter your email';
    }
    return this.email.hasError('email') ? 'Email address not valid' : '';
  }

  openRegister() {
    this.dialog.open(RegisterComponent);
    this.dialogRef.close();
  }

  login() {
    console.log(this.email.value + ', ' + this.password.value);
    this.loginService
      .getUserbyEmailAndPassword(this.email.value, this.password.value)
      .subscribe(
        (data) => {
          if (data.user_id) {
            sessionStorage.setItem('user', JSON.stringify(data));
            this.dialogRef.close(true);
          }
        },
        (err) => {
          this.handleError(err);
        }
      );
  }
}
