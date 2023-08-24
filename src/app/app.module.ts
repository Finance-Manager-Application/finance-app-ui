import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './features/login/login.module';
import { ExpenseTrackerModule } from './features/expense-tracker/expense-tracker.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { SharedModule } from './components/shared.module';
import { AccountsModule } from './features/accounts/accounts.module';
import { IncomesModule } from './features/incomes/incomes.module';
import { FinanceTrackerModule } from './features/finance-tracker/finance-tracker.module';
import { BudgetTrackerModule } from './features/budget-tracker/budget-tracker.module';
import { SubscriptionTrackerModule } from './features/subscription-tracker/subscription-tracker.module';
import { SavingsTrackerModule } from './features/savings-tracker/savings-tracker.module';
import { MonthlyReportsModule } from './features/monthly-reports/monthly-reports.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ExpenseTrackerModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    DashboardModule,
    SharedModule,
    AccountsModule,
    IncomesModule,
    FinanceTrackerModule,
    BudgetTrackerModule,
    SubscriptionTrackerModule,
    SavingsTrackerModule,
    MonthlyReportsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
