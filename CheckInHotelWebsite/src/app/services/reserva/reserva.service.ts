import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroment/enviroment'; 
import { ReservaCompletaModel, ReservaModel } from '../../models/reserva.model';
import { ReservaResponsePage } from '../../models/reservaResponsePage.model';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private baseBackendURL: string = environment.backendURL;

  constructor(private http: HttpClient) { 
  }

  headers = {'content-type':'application/json'}

  cadastraReserva(reserva: ReservaModel): Observable<Object>{
    return this.http.post(this.baseBackendURL+"reserva", reserva, {'headers' : this.headers});
  } 

  buscaReservas(pagina: number, quantidadePorPagina: number): Observable<ReservaResponsePage> {
    const params = {'page':pagina, 'size':quantidadePorPagina};
    return this.http.get<ReservaResponsePage>(this.baseBackendURL+"reserva", {'headers':this.headers, 'params': params})
  }

  buscaReserva(id: number): Observable<ReservaCompletaModel>{
    const params = {'id': id}
    return this.http.get<ReservaCompletaModel>(this.baseBackendURL+"reserva/detalhesReserva", {'headers': this.headers, 'params': params})
  }

  realizaCheckIn(id: number): Observable<Object>{
    const params = {'id': id}
    return this.http.patch<Object>(this.baseBackendURL+"reserva/realizarCheckIn",{},
      {
        'headers': this.headers,
        'params': params
      }
    )
  }

  realizaCheckOut(id: number): Observable<Object>{
    const params = {'id': id}
    return this.http.patch<Object>(this.baseBackendURL+"reserva/realizarCheckOut",{},
      {
        'headers': this.headers,
        'params': params
      }
    )
  }

  realizaCalculoDiarias(id: number, aplicaMulta: boolean): Observable<Number>{
    const params = {
      'id': id,
      "aplicarMultaAtraso": aplicaMulta
    }
    return this.http.get<Number>(this.baseBackendURL+"reserva/realizarCalculoDiarias",
      {
        'headers': this.headers,
        'params': params
      }
    )
  }
}
