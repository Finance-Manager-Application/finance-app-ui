import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ExpenseTrackerComponent } from './expense-tracker/expense-tracker.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './features/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ExpenseTrackerComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
