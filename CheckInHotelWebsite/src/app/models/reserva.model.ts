import { HospedeModel } from "./hospede.model";

class DataEntradaSaida {
  dataEntrada: Date
  dataSaida: Date

  constructor(dataEntrada: Date, dataSaida: Date) {
    this.dataEntrada = dataEntrada;
    this.dataSaida = dataSaida;
  }
}

/* Isso aqui não é o ideal vendo agora */
export class ReservaModel {
  documentoHospede: string
  numeroQuarto: string
  dataEntradaSaida: DataEntradaSaida

  constructor(documentoHospede: string, numeroQuarto: string, dataEntrada: Date, dataSaida: Date){
    this.documentoHospede = documentoHospede;
    this.numeroQuarto = numeroQuarto;
    this.dataEntradaSaida = new DataEntradaSaida(dataEntrada, dataSaida)
  }
}

export class ReservaCompletaModel {
  checkIn: boolean
  checkOut: boolean
  dataEntradaSaida: DataEntradaSaida
  hospede: HospedeModel
  necessitaEstacionamento: boolean
  numeroQuarto: number

  constructor(checkIn: boolean, checkOut: boolean, dataEntradaSaida: DataEntradaSaida, hospede: HospedeModel,
    necessitaEstacionamento: boolean, numeroQuarto: number){
      this.checkIn = checkIn
      this.checkOut = checkOut
      this.dataEntradaSaida = dataEntradaSaida
      this.hospede = hospede
      this.necessitaEstacionamento = necessitaEstacionamento
      this.numeroQuarto = numeroQuarto

    }

}
