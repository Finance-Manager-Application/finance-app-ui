import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-center-modal',
  templateUrl: './center-modal.component.html',
  styleUrls: ['./center-modal.component.css']
})
export class CenterModalComponent implements OnInit {
  accountForm: FormGroup;
  previousValue = '';
  touchedFields: string[] = [];
  isLoading = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  isSaveClicked = false

  account_id: any;

  constructor(
    public dialogRef: MatDialogRef<CenterModalComponent>,
    private accountService: AccountService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.account_id = data.account_id;
    this.accountForm = new FormGroup({
      account_name: new FormControl('', Validators.required),
      current_balance: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d+(\.\d{1,2})?$/)
      ]),
    });

    if (this.account_id) {
      this.accountService.getAccount(this.account_id).subscribe(
        (response) => {
          if (response && response.data) {
            const accountData = response.data;
            this.accountForm.patchValue({
              account_name: accountData.name,
              current_balance: accountData.current_balance,
            });
          }
        },
        (error) => {
          console.error('Error fetching account data:', error);
        }
      );
    }
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  validBalance(event: any): void {
    const inputVal = event.target.value;
    this.accountForm.get('current_balance').setValue(inputVal);
    if (!/^(\d+(\.\d{1,2})?)?$/.test(inputVal)) {
      this.accountForm.get('current_balance').setErrors({ invalidValue: true });
    } else {
      this.accountForm.get('current_balance').setErrors(null);
    }
  }

  markFieldAsTouched(fieldName: string) {
    if (!this.touchedFields.includes(fieldName)) {
      this.touchedFields.push(fieldName);
    }
  }

  isFieldTouched(fieldName: string): boolean {
    return this.touchedFields.includes(fieldName);
  }

  async addAccount() {
    //this.accountForm.get('current_balance').markAsTouched();
    if (this.accountForm.valid) {
      const payload = {
        name: this.accountForm.get('account_name').value,
        current_balance: this.accountForm.get('current_balance').value,
        user_id: localStorage.getItem('userId'),
        icon: null
      };
      this.isLoading = true;
      this.isSaveClicked = true;
      if (this.account_id) {
        try {
          const response = await this.accountService.updateAccount(payload, this.account_id);
          this.successMessage = 'Account has been edited successfully!';
        } catch (error) {
          this.errorMessage = 'Error editing account. Please try again or contact administrator.';
        }
      } else {
        try {
          const response = await this.accountService.addAccount(payload);
          this.successMessage = 'Account has been added successfully!';
        } catch (error) {
          this.errorMessage = 'Error adding account. Please try again or contact administrator.';
        }
      }
      this.isLoading = false;
    }
  }

}
