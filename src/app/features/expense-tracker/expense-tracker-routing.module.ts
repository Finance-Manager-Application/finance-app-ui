import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseTrackerComponent } from './pages/expense-tracker/expense-tracker.component';

const routes: Routes = [
  {
    path: '',
    component: ExpenseTrackerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseTrackerRoutingModule { }
