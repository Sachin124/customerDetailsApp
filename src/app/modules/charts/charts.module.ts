import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRouting } from './charts-routing.module';
import { BasicLineComponent } from './basic-line/basic-line.component';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { AjaxLoadedComponent } from './ajax-loaded/ajax-loaded.component';
import { BasicAreaComponent } from './basic-area/basic-area.component';
@NgModule({
  imports: [
    CommonModule,
   RouterModule.forChild(ChartsRouting),
   HighchartsChartModule
  ],
  declarations: [BasicLineComponent, AjaxLoadedComponent, BasicAreaComponent]
})
export class ChartsModule { }
