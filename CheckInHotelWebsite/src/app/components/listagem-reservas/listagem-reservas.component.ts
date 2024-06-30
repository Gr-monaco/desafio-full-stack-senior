import { Component, ChangeDetectorRef } from '@angular/core';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { ReservaService } from '../../services/reserva/reserva.service';
import { ReservaCompletaModel, ReservaModel } from '../../models/reserva.model';
import { NgFor } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Pageable } from '../../models/pageable.model';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-listagem-reservas',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatCardModule,
    NgFor,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  templateUrl: './listagem-reservas.component.html',
  styleUrl: './listagem-reservas.component.css'
})
export class ListagemReservasComponent {
  /*Seria legal ver internacionalização do paginator para deixar em pt-br*/

  detalhesPaginacao: Pageable;
  reservas:ReservaCompletaModel[];
  colunasParaExibir = ['nome','telefone','numeroQuarto','checkin','checkout', 'acao']

  constructor(private reservaService: ReservaService, private changeDetection: ChangeDetectorRef){
    this.reservas = []
    this.detalhesPaginacao = {number:0,totalElements:0, totalPages:0, size:0}
  }

/*
 * O ideal seria implementar um Route Guard.
 */
  ngOnInit(){
    this.atualizaReservas(0,5)
  }	
  
  handlePageEvent(event: PageEvent){
    this.atualizaReservas(event.pageIndex, event.pageSize)

    this.changeDetection.detectChanges();

  }

  atualizaReservas(indexPagina: number, tamanhoPagina: number){
    this.reservaService.buscaReservas(indexPagina,tamanhoPagina).subscribe({error: (err) => {
      /**
       * TODO: Tratamento de erros...
       */
      console.log("Erro ao buscar reservas");
    }, next: (v) => {
       this.reservas = v.content
       this.detalhesPaginacao = v.page
       console.log(v)
       this.changeDetection.detectChanges();
    }})
  }
}
