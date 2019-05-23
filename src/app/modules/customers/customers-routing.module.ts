import { Routes } from '@angular/router';
import { ViewCustomersComponent } from './view-customers/view-customers.component';

export const CustomersRoutingModule: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
  {
    path: '',
    children: [{
      path: '',
      component: ViewCustomersComponent
    }]
  }   
];
