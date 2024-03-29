import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { TableService } from '../../services/table.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss'],
})
export class BuyComponent implements OnInit {
  quantity: FormControl;
  errorMsg: string;

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

  crypto_id: string;
  crypto_name: string;
  value: number;
  icon: string;
  asset: string;
  stock: number;

  cryptoQuantity: number;
  total: number;
  calc: boolean = false;

  finalCalc: number;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<BuyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.quantity = new FormControl('', [Validators.required]);
    (this.crypto_id = data.crypto_id),
      (this.crypto_name = data.crypto_name),
      (this.value = data.value),
      (this.icon = data.icon),
      (this.asset = data.asset),
      (this.stock = data.stock);
  }

  ngOnInit(): void {
    this.quantity.valueChanges.subscribe(() => {
      this.calculateBuy();
    });
  }

  handleError(error: any) {
    if (error.status === 500) {
      this.errorMsg = 'Failed to register';
    }
  }

  getErrorQuantity() {
    if (this.quantity.hasError('required')) {
      return 'Enter a quantity';
    }
    return this.quantity.hasError('quantity') ? 'Quantity not valid' : '';
  }

  calculateBuy() {
    const quantityValue = this.quantity.value;
    if (!isNaN(quantityValue) && quantityValue > 0) {
      this.cryptoQuantity = quantityValue;
      this.total = this.cryptoQuantity * this.value;
      this.total = Math.round(this.total * 100) / 100
      this.calc = true;
      this.finalCalc = this.funds - this.total;
      this.finalCalc = Math.round(this.finalCalc * 100) / 100
    }
  }
}

