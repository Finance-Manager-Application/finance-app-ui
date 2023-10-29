import { Component, HostListener, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CenterModalComponent } from '../../../../components/center-modal/center-modal.component';
import { RightModalComponent } from '../../../../components/right-modal/right-modal.component';
import { IconPickerComponent } from '../../../../components/icon-picker/icon-picker.component';
import { AccountService } from '../../../../services/account.service';

@Component({
  selector: 'app-finance-tracker',
  templateUrl: './finance-tracker.component.html',
  styleUrls: ['./finance-tracker.component.scss']
})
export class FinanceTrackerComponent implements OnInit, AfterViewInit {

  sidebarCompressed: boolean = false;
  accounts: any[] = [];
  userId: string | null = localStorage.getItem('userId');

  @ViewChild(IconPickerComponent, { static: false }) iconPicker: IconPickerComponent;

  constructor(public dialog: MatDialog,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.getAllAccounts();
  }

  ngAfterViewInit(): void {
    this.toggleIconPicker();
  }

  openModal(account_id?: any) {
    const dialog = this.dialog.open(CenterModalComponent, {
      width: '70%',
      height: '90%',
      data: { account_id }
    });

    dialog.afterClosed().subscribe(() => {
      this.getAllAccounts();
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

  toggleIconPicker(event?: MouseEvent) {
    if (this.iconPicker) {
      this.iconPicker.toggleIconPicker(event);
      console.log('Toggling icon picker');
    } else {
      console.log('iconPicker is not defined yet.');
    }
  }

  toggleSidebar() {
    this.sidebarCompressed = !this.sidebarCompressed;
  }

  getAllAccounts() {
    if (this.userId) {
      this.accountService.getAllAccounts(this.userId).subscribe(
        (response) => {
          if (response && response.data) {
            this.accounts = response.data;
          }
        },
        (error) => {
          console.error('Error fetching accounts:', error);
        }
      );
    }
  }
}
