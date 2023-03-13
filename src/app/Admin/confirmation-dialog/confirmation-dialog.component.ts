import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h2 mat-dialog-title>{{ data }}</h2>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false">Cancel</button>
      <button mat-button [mat-dialog-close]="true">Delete</button>
    </div>
  `,
  styles: [`
    mat-dialog-actions {
      display: flex;
      justify-content: flex-end;
    }
  `]
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
