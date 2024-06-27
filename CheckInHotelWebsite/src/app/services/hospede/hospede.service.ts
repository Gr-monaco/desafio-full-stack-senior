import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HospedeModel } from '../../models/hospede.model';
import { environment } from '../../../enviroment/enviroment'; 

@Injectable({
  providedIn: 'root'
})
export class HospedeService {

  baseBackendURL: string = environment.backendURL;

  constructor(private http: HttpClient) { }

  cadastraCliente(hospede: HospedeModel): Observable<Object>{
    const headers = {'content-type':'application/json'}
    return this.http.post(this.baseBackendURL+"hospede", hospede, {'headers' : headers});
  } 
}
