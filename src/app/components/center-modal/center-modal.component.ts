import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-center-modal',
  templateUrl: './center-modal.component.html',
  styleUrls: ['./center-modal.component.css']
})
export class CenterModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CenterModalComponent>
  ) { }

  closeModal(): void {
    this.dialogRef.close();
  }
 
  ngOnInit(): void {
  }

}
