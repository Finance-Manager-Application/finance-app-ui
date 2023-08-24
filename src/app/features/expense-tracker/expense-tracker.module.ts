import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared.module';

import { ExpenseTrackerRoutingModule } from './expense-tracker-routing.module';
import { ExpenseTrackerComponent } from './pages/expense-tracker/expense-tracker.component';

@NgModule({
  declarations: [ExpenseTrackerComponent],
  imports: [
    CommonModule,
    ExpenseTrackerRoutingModule,
    SharedModule
  ]
})
export class ExpenseTrackerModule { }
