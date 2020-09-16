import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'popup-confirm',
  template: `
        <h2 mat-dialog-title>Atenção</h2>
        <mat-dialog-content><p>{{ message }}</p></mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button cdkFocusInitial mat-dialog-close>Cancelar</button>
            <button mat-button [mat-dialog-close]="true">Ok</button>
        </mat-dialog-actions>
        `
})
export class PopupComponent {
    message: string;
    constructor(
        public dialogRef: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
            this.message = data.message;
    }
}