import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-mission-confirmation-dialog',
  templateUrl: 'create-mission-confirmation-dialog.component.html',
  styleUrls: ['create-mission-confirmation-dialog.component.css'],
  encapsulation: ViewEncapsulation.None 
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
