import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
// import {} from './modules/customers/customers.module'
export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'customers',
                loadChildren: './modules/customers/customers.module#CustomersModule'
            }
        ]
    }
];