import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BuyComponent } from './components/buy/buy.component';
import { SellComponent } from './components/sell/sell.component';

@NgModule({
  declarations: [
    ListComponent,
    SearchComponent,
    DashboardComponent,
    BuyComponent,
    SellComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    SharedModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
