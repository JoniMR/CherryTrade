import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    MaterialModule
  ],
  exports: [
    IndexComponent
  ]
})
export class IndexModule { }
