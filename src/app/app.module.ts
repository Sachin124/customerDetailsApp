import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routing.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarModule } from './shared/sidebar/sidebar.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    NavbarModule,
    RouterModule.forRoot(AppRoutes, {onSameUrlNavigation: 'reload'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

