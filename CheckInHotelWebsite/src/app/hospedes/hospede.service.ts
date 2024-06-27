import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospedeService {

  //Não é o ideal isto aqui...
  //Ver como implementar variaveis globais
  //Não esqueça de pelo menos de apontar na porta padrão do postgres
  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  cadastraCliente(corpoReq: String){
    const headers = {'content-type':'application/json'}
    console.log(corpoReq)
    this.http.post(this.baseURL+"hospede", corpoReq, {'headers':headers}).subscribe();
  } 
}
