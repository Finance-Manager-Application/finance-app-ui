import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared.module';

import { MonthlyReportsRoutingModule } from './monthly-reports-routing.module';
import { MonthlyReportsComponent } from './pages/monthly-reports/monthly-reports.component';

@NgModule({
  declarations: [MonthlyReportsComponent],
  imports: [
    CommonModule,
    MonthlyReportsRoutingModule,
    SharedModule
  ]
})
export class MonthlyReportsModule { }
