import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ExpenseTrackerComponent } from './expense-tracker/expense-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ExpenseTrackerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
