import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared.module';

import { IncomesRoutingModule } from './incomes-routing.module';
import { IncomesComponent } from './pages/incomes/incomes.component';

@NgModule({
  declarations: [IncomesComponent],
  imports: [
    CommonModule,
    IncomesRoutingModule,
    SharedModule
  ]
})
export class IncomesModule { }
