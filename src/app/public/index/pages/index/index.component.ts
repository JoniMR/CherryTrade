import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/public/user/components/login/login.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  login: boolean = false;
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
          this.login = true;
        }
      })
  }
}
