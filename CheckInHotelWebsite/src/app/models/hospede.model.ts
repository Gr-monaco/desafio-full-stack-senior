export class HospedeModel {
  nome: string
  documento: string
  telefone: string

  constructor(nome: string, documento: string, telefone: string){
    this.nome = nome;
    this.documento = documento;
    this.telefone = telefone;
  }
}