import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared.module';

import { FinanceTrackerRoutingModule } from './finance-tracker-routing.module';
import { FinanceTrackerComponent } from './pages/finance-tracker/finance-tracker.component';


@NgModule({
  declarations: [FinanceTrackerComponent],
  imports: [
    CommonModule,
    FinanceTrackerRoutingModule,
    SharedModule
  ]
})
export class FinanceTrackerModule { }
