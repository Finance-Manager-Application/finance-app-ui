import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { SidenavComponent } from './sidenav/sidenav.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    SidenavComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [SidenavComponent],
})
export class SharedModule { }
