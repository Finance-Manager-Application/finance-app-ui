import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared.module';

import { SubscriptionTrackerRoutingModule } from './subscription-tracker-routing.module';
import { SubscriptionTrackerComponent } from './pages/subscription-tracker/subscription-tracker.component';

@NgModule({
  declarations: [SubscriptionTrackerComponent],
  imports: [
    CommonModule,
    SubscriptionTrackerRoutingModule,
    SharedModule
  ]
})
export class SubscriptionTrackerModule { }
