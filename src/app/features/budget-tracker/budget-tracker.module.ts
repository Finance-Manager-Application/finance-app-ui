import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared.module';

import { BudgetTrackerRoutingModule } from './budget-tracker-routing.module';
import { BudgetTrackerComponent } from './pages/budget-tracker/budget-tracker.component';

@NgModule({
  declarations: [BudgetTrackerComponent],
  imports: [
    CommonModule,
    BudgetTrackerRoutingModule,
    SharedModule
  ]
})
export class BudgetTrackerModule { }
