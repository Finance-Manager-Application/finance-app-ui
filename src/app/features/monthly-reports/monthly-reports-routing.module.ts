import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthlyReportsComponent } from './pages/monthly-reports/monthly-reports.component';

const routes: Routes = [
  {
    path: '',
    component: MonthlyReportsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonthlyReportsRoutingModule { }
