// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class CustomersRoutingModule { }



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
