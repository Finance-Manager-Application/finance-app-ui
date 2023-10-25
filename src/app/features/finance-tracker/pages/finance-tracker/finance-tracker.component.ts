import { Component, HostListener, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CenterModalComponent } from '../../../../components/center-modal/center-modal.component';
import { RightModalComponent } from '../../../../components/right-modal/right-modal.component';

@Component({
  selector: 'app-finance-tracker',
  templateUrl: './finance-tracker.component.html',
  styleUrls: ['./finance-tracker.component.scss']
})
export class FinanceTrackerComponent implements OnInit {

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
      panelClass: 'right-modal-class'
    });
  }

  toggleSidebar() {
    this.sidebarCompressed = !this.sidebarCompressed;
  }

    

}
