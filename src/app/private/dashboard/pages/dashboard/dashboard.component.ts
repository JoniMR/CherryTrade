import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  showFiller = false;
  showSpinner = false;

  userString = sessionStorage.getItem('user');
  userObject = JSON.parse(this.userString ?? '{}');
  
  user_id = this.userObject.user_id;
  username = this.userObject.username;
  surname1 = this.userObject.surname1;
  surname2 = this.userObject.surname2;
  birthdate = this.userObject.birthdate;
  email = this.userObject.email;
  img = this.userObject.img;
  funds = this.userObject.funds;

  constructor() {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 1000);
  }
}