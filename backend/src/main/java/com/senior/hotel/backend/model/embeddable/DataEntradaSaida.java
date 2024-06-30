package com.senior.hotel.backend.model.embeddable;

import jakarta.persistence.Embeddable;

import java.util.Date;

@Embeddable
public class DataEntradaSaida {

    private Date dataEntrada;

    private Date dataSaida;

    public DataEntradaSaida() {
    }

    public DataEntradaSaida(Date dataEntrada, Date dataSaida) {
        this.dataEntrada = dataEntrada;
        this.dataSaida = dataSaida;
    }

    public Date getDataEntrada() {
        return dataEntrada;
    }

    public void setDataEntrada(Date dataEntrada) {
        this.dataEntrada = dataEntrada;
    }

    public Date getDataSaida() {
        return dataSaida;
    }

    public void setDataSaida(Date dataSaida) {
        this.dataSaida = dataSaida;
    }

}
