import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutes } from './dashboard-routing.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        FormsModule
    ],
    declarations: [DashboardComponent],
    exports: [
        RouterModule
      ]
})

export class DashboardModule {}
