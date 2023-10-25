import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { SidenavComponent } from './sidenav/sidenav.component';
import { LogoutComponent } from './logout/logout.component';
import { CenterModalComponent } from './center-modal/center-modal.component';
import { RightModalComponent } from './right-modal/right-modal.component';
import { IconPickerComponent } from './icon-picker/icon-picker.component';

@NgModule({
  declarations: [
    SidenavComponent,
    LogoutComponent,
    CenterModalComponent,
    RightModalComponent,
    IconPickerComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [SidenavComponent],
})
export class SharedModule { }
