import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Data, RouterModule } from '@angular/router';
import { ReservaService } from '../../services/reserva/reserva.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogAvisoComponent } from '../dialog-aviso/dialog-aviso.component';
import { DialogData } from '../../models/dialogData.model';

@Component({
  selector: 'app-detalhes-reserva',
  standalone: true,
  imports: [
    MatInputModule, 
    MatFormFieldModule, 
    ReactiveFormsModule, 
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatCheckboxModule,
    CommonModule,
    RouterModule
  ],
  providers: [provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
  templateUrl: './detalhes-reserva.component.html',
  styleUrl: './detalhes-reserva.component.css'
})
export class DetalhesReservaComponent {
  reservaForm: FormGroup = new FormGroup({
    nomeHospede: new FormControl({value:'', disabled: true}),
    numeroQuarto: new FormControl({value:'', disabled: true}),
    dataEntradaSaida: new FormGroup({
      dataEntrada: new FormControl({value:'', disabled: true}),
      dataSaida: new FormControl({value:'', disabled: true})
    }),
    necessitaEstacionamento: new FormControl({value:false, disabled:true}),
    checkIn: new FormControl({value: false, disabled: true}),
    checkOut: new FormControl({value: false, disabled: true})
  })

  idReserva: number = 0;

  /*https://www.scaler.com/topics/angular/getting-route-information-in-a-component-in-angular/ */
  constructor(private route: ActivatedRoute, private reservaService: ReservaService,
    private changeDetection: ChangeDetectorRef, public dialog: MatDialog){
    }

/*
 * Novamente,o ideal seria implementar um Route Guard.
 */
  ngOnInit(){
    console.log(this.route.snapshot.queryParamMap)
    //Não é o ideal também, pode dar erro
    this.idReserva = Number(this.route.snapshot.queryParamMap.get('id'));
    this.reservaService.buscaReserva(this.idReserva).subscribe({next: (reserva) => {
      this.reservaForm.get('nomeHospede')?.setValue(reserva.hospede.nome);
      this.reservaForm.get('numeroQuarto')?.setValue(reserva.numeroQuarto);
      this.getDataEntradaSaida.get('dataEntrada')?.setValue(reserva.dataEntradaSaida.dataEntrada);
      this.getDataEntradaSaida.get('dataSaida')?.setValue(reserva.dataEntradaSaida.dataSaida);
      this.reservaForm.get("checkIn")?.setValue(reserva.checkIn);
      this.reservaForm.get("checkOut")?.setValue(reserva.checkOut);
      this.reservaForm.get("necessitaEstacionamento")?.setValue(reserva.necessitaEstacionamento);
      this.changeDetection.detectChanges();
    }})
  }

  get getDataEntradaSaida(): FormGroup {
    return this.reservaForm.controls['dataEntradaSaida'] as FormGroup;
 }

  realizaCheckIn(): void{
    const now = new Date();

    const passouHorario = now.getHours() >= 21; //seria legal colocar como constante de ambiente

    if(!passouHorario){
      let mensagemDialog :String = "O horarío de CheckIn está adiantado.Deseja prosseguir?" 
      const dialogRef = this.dialog.open(DialogAvisoComponent, 
        {data: {mensagem: mensagemDialog, prosseguir: false}})

        dialogRef.afterClosed().subscribe(resultado => {
          let dataRetornada: DialogData = resultado as DialogData
          if(dataRetornada.prosseguir){
            this.efetuaCheckIn()
          }
        })
    }else{
      this.efetuaCheckIn()
    }
  }

  efetuaCheckIn(): void{
    this.reservaService.realizaCheckIn(this.idReserva).subscribe({next: (obj) => {
      this.refresh();
    }})
  }

  realizaCheckOut(): void {
    const now = new Date();

    const passouHorario = now.getHours() <= 12; //seria legal colocar como constante de ambiente
    let aplicarMulta: boolean = false;
    if(!passouHorario){
      aplicarMulta=true;
      let mensagemDialog :String = "O horário de CheckOut está atrasado.Será aplicado um acréssimo de 50% da diária" 
      const dialogRef = this.dialog.open(DialogAvisoComponent, 
        {data: {mensagem: mensagemDialog, aviso:true}})
        dialogRef.afterClosed().subscribe(resultado => {
          this.efetuaCheckOut(aplicarMulta)
      })    }else{
        this.efetuaCheckOut(aplicarMulta)

      }
  }

  efetuaCheckOut(aplicarMulta: boolean): void{
    let valorDiaria: number = 0;
    this.reservaService.realizaCalculoDiarias(this.idReserva, aplicarMulta).subscribe({next: (res) => {
      let mensagemDialog :String = "Valor a ser pago: " + res.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})
      const dialogRef = this.dialog.open(DialogAvisoComponent, 
        {data: {mensagem: mensagemDialog, aviso:true}})

        dialogRef.afterClosed().subscribe(resultado => {
          this.reservaService.realizaCheckOut(this.idReserva).subscribe({next: (obj) => {
            this.refresh();
          }})
        })
    }})
  }

  refresh(): void {
    window.location.reload();
  }
}
