import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-mission-confirmation-dialog',
  template: `
    <div class="confirmation-dialog-container">
      <h2 mat-dialog-title>{{ data }}</h2>
      <div mat-dialog-actions>
        <button mat-button class="cancel-button" [mat-dialog-close]="false">Cancel</button>
        <button mat-button class="confirm-button" [mat-dialog-close]="true">Confirm</button>
      </div>
    </div>
  `,
  styles: [
    `
      .confirmation-dialog-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #4caf50;
        padding: 20px;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        width: 300px;
      }

      h2 {
        margin: 0;
        font-size: 20px;
        color: white;
      }

      mat-dialog-actions {
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
      }

      .cancel-button {
        color: #fff;
        background-color: #bdbdbd;
      }

      .confirm-button {
        color: #fff;
        background-color: green;
      }
    `,
  ],
})

export class CreateMissionConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateMissionConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
