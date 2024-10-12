import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-message',
  templateUrl: './confirmation-message.component.html',
  styleUrls: ['./confirmation-message.component.css']
})
export class ConfirmationMessageComponent {
  msg?: string
  btn?: string = 'accept'

  constructor(public dialogRef: MatDialogRef<ConfirmationMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.msg = data.msg;
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
