import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudgetTrackerComponent } from './pages/budget-tracker/budget-tracker.component';

const routes: Routes = [
  {
    path: '',
    component: BudgetTrackerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetTrackerRoutingModule { }
