import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroment/enviroment'; 
import { ReservaModel } from '../../models/reserva.model';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  baseBackendURL: string = environment.backendURL;

  constructor(private http: HttpClient) { 
  }

  cadastraReserva(reserva: ReservaModel): Observable<Object>{
    const headers = {'content-type':'application/json'}
    return this.http.post(this.baseBackendURL+"reserva", reserva, {'headers' : headers});
  } 
}
