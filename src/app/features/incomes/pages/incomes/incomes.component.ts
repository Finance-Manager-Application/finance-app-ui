import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CenterModalComponent } from '../../../../components/center-modal/center-modal.component';
import { RightModalComponent } from '../../../../components/right-modal/right-modal.component';


@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css']
})
export class IncomesComponent implements OnInit {

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

}