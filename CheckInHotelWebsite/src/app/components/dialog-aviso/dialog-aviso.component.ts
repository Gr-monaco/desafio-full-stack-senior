import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { DialogData } from '../../models/dialogData.model';
import { Data } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-aviso',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    CommonModule
  ],
  templateUrl: './dialog-aviso.component.html',
  styleUrl: './dialog-aviso.component.css'
})
export class DialogAvisoComponent {

  constructor(public dialogRef: MatDialogRef<DialogAvisoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ){
    console.log(data)
  }

  prosseguir(resposta:boolean){
    this.data.prosseguir=resposta;
    this.dialogRef.close(this.data as DialogData);
  }
}
