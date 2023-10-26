import { Component, HostListener, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CenterModalComponent } from '../../../../components/center-modal/center-modal.component';
import { RightModalComponent } from '../../../../components/right-modal/right-modal.component';
import { IconPickerComponent } from '../../../../components/icon-picker/icon-picker.component';

@Component({
  selector: 'app-budget-tracker',
  templateUrl: './budget-tracker.component.html',
  styleUrls: ['./budget-tracker.component.scss']
})
export class BudgetTrackerComponent implements OnInit {

  sidebarCompressed: boolean = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openModal() {
    this.dialog.open(CenterModalComponent, {
      width: '70%',
      height: '90%',
    });
  }

  openModalRight() {
    this.dialog.open(RightModalComponent, {
      width: '100%',
      height: '100%',
      panelClass: 'right-modal-class',
      hasBackdrop: true,
      disableClose: false
    });
  }


  toggleSidebar() {
    this.sidebarCompressed = !this.sidebarCompressed;
  }

    

}
