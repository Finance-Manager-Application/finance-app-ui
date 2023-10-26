import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-right-modal',
  templateUrl: './right-modal.component.html',
  styleUrls: ['./right-modal.component.css']
})
export class RightModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RightModalComponent>
  ) { }

  closeModalRight(): void {
    this.dialogRef.close();
  }

  onClickOutside(event: MouseEvent): void {
    const modalContent = event.target as HTMLElement;
    if (modalContent.classList.contains('modal-right')) {
      this.closeModalRight();
    }
  }

  ngOnInit(): void {
  }

}
