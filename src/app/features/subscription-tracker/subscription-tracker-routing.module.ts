import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionTrackerComponent } from './pages/subscription-tracker/subscription-tracker.component';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionTrackerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionTrackerRoutingModule { }
