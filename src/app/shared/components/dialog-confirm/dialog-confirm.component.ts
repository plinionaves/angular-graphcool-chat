import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { DialogConfirmData } from './dialog-confirm-data.interface';

@Component({
  selector: 'app-dialog-confirm',
  template: `
    <h1 mat-dialog-title>{{ data.title }}</h1>

    <mat-dialog-content>{{ data.message }}</mat-dialog-content>

    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false" cdkFocusInitial>No</button>
      <button mat-button [mat-dialog-close]="true">Yes</button>
    </mat-dialog-actions>
  `,
  styles: []
})
export class DialogConfirmComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogConfirmData,
    private dialogRef: MatDialogRef<DialogConfirmComponent>
  ) { }

  ngOnInit(): void {
    this.dialogRef.disableClose = (this.data.disableClose !== undefined) ? this.data.disableClose : true;
  }

}
