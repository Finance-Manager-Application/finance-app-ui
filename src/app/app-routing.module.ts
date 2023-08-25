import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';

//MODULES
import { LoginModule } from './features/login/login.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'accounts',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/accounts/accounts.module').then((m) => m.AccountsModule)
  },
  {
    path: 'incomes',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/incomes/incomes.module').then((m) => m.IncomesModule)
  },
  {
    path: 'expense-tracker',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/expense-tracker/expense-tracker.module').then((m) => m.ExpenseTrackerModule)
  },
  {
    path: 'finance-tracker',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/finance-tracker/finance-tracker.module').then((m) => m.FinanceTrackerModule)
  },
  {
    path: 'budget-tracker',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/budget-tracker/budget-tracker.module').then((m) => m.BudgetTrackerModule)
  },
  {
    path: 'subscription-tracker',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/subscription-tracker/subscription-tracker.module').then((m) => m.SubscriptionTrackerModule)
  },
  {
    path: 'savings-tracker',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/savings-tracker/savings-tracker.module').then((m) => m.SavingsTrackerModule)
  },
  {
    path: 'monthly-reports',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/monthly-reports/monthly-reports.module').then((m) => m.MonthlyReportsModule)
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    LoginModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
