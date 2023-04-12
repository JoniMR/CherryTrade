import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/public/user/components/login/login.component';
import { RegisterComponent } from 'src/app/public/user/components/register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public login: boolean = false;
  user: string | null = sessionStorage.getItem('user');

  constructor(public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
  }

  openLogin() {
    this.dialog
      .open(LoginComponent)
      .afterClosed()
      .subscribe((res) => {
        if ( res===true && this.user != null) {
          console.log(this.login);
          this.login = true;
          console.log(this.login);
        }
      })
  }

  openRegister() {
    this.dialog.open(RegisterComponent);
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
}

  logout() {
    sessionStorage.removeItem("user");
    this.login = false;
    this.router.navigate(['']);
  }
}
