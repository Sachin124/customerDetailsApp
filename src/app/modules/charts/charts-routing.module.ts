import { Routes } from '@angular/router';
import { BasicLineComponent } from './basic-line/basic-line.component';
import { AjaxLoadedComponent } from './ajax-loaded/ajax-loaded.component';
import { BasicAreaComponent } from './basic-area/basic-area.component';

export const ChartsRouting: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
  {
    path: '',
    children: [{
      path: 'basic-line',
      component: BasicLineComponent
    },
    {
      path: 'ajax-loaded',
      component: AjaxLoadedComponent
    },
    {
      path: 'basic-area',
      component: BasicAreaComponent
    }]
  }   
];
