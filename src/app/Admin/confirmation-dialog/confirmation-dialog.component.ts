import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <div class="confirmation-dialog-container">
      <h2 mat-dialog-title>{{ data }}</h2>
      <div mat-dialog-actions>
        <button mat-button class="cancel-button" [mat-dialog-close]="false">Cancel</button>
        <button mat-button class="delete-button" [mat-dialog-close]="true">Delete</button>
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
        background-color: #e6361f;
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

      .delete-button {
        color: #fff;
        background-color: #f44336;
      }
    `,
  ],
})
export class ConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
