import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavingsTrackerComponent } from './pages/savings-tracker/savings-tracker.component';

const routes: Routes = [
  {
    path: '',
    component: SavingsTrackerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavingsTrackerRoutingModule { }
