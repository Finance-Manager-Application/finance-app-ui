import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared.module';

import { SavingsTrackerRoutingModule } from './savings-tracker-routing.module';
import { SavingsTrackerComponent } from './pages/savings-tracker/savings-tracker.component';

@NgModule({
  declarations: [SavingsTrackerComponent],
  imports: [
    CommonModule,
    SavingsTrackerRoutingModule,
    SharedModule
  ]
})
export class SavingsTrackerModule { }
