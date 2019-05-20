import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(CustomersRoutingModule)    
  ],
  declarations: [AddCustomersComponent, ViewCustomersComponent, CustomerDetailsComponent, CustomerOrdersComponent]
})
export class CustomersModule { }
