import { Component } from '@angular/core';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReservaService } from '../../services/reserva/reserva.service';
import { ReservaModel } from '../../models/reserva.model';
import { validaCPF } from '../../utils/cpf.utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reserva',
  standalone: true,
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    provideNgxMask()

  ],
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    NgxMaskDirective,
    MatCheckboxModule,
    CommonModule
  ],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent {

  numeroDeQuartos: Array<number>

  reservaForm: FormGroup = new FormGroup({
    documentoHospede: new FormControl('', [Validators.required, validaCPF()]),
    numeroQuarto: new FormControl(''),
    dataEntradaSaida: new FormGroup({
      dataEntrada: new FormControl(''),
      dataSaida: new FormControl('')
    }),
    necessitaEstacionamento: new FormControl(false)
  })

  constructor(private reservaService: ReservaService){
    this.numeroDeQuartos = Array(5).fill('').map((x,i)=>i+1); // [0,1,2,3,4]
  }

  get getDataEntradaSaida() {
    return this.reservaForm.controls['dataEntradaSaida'] as FormGroup;
 }

 get getDocumentoHospede(){
  return this.reservaForm.get('documentoHospede');
  }

  onSubmit(){
    this.reservaService.cadastraReserva(this.reservaForm.value as ReservaModel).subscribe()
  }
}
