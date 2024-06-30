import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroment/enviroment'; 
import { ReservaModel } from '../../models/reserva.model';
import { ReservaResponsePage } from '../../models/reservaResponsePage.model';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private baseBackendURL: string = environment.backendURL;

  constructor(private http: HttpClient) { 
  }

  cadastraReserva(reserva: ReservaModel): Observable<Object>{
    const headers = {'content-type':'application/json'}
    return this.http.post(this.baseBackendURL+"reserva", reserva, {'headers' : headers});
  } 

  buscaReservas(pagina: number, quantidadePorPagina: number): Observable<ReservaResponsePage> {
    const headers = {'content-type':'application/json'}
    const params = {'page':pagina, 'size':quantidadePorPagina};
    return this.http.get<ReservaResponsePage>(this.baseBackendURL+"reserva", {'headers':headers, 'params': params})
  }
}
