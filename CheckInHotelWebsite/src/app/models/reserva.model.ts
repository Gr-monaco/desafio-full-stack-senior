class DataEntradaSaida {
  dataEntrada: Date
  dataSaida: Date

  constructor(dataEntrada: Date, dataSaida: Date) {
    this.dataEntrada = dataEntrada;
    this.dataSaida = dataSaida;
  }
}

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

