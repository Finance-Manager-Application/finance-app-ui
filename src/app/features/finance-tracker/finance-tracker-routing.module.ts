import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanceTrackerComponent } from './pages/finance-tracker/finance-tracker.component';

const routes: Routes = [
  {
    path: '',
    component: FinanceTrackerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceTrackerRoutingModule { }
