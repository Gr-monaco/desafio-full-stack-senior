package com.senior.hotel.backend.DTO;

import java.util.Date;

public class DataEntradaSaidaDTO {
    private Date dataEntrada;

    private Date dataSaida;

    public DataEntradaSaidaDTO() {
    }

    public DataEntradaSaidaDTO(Date dataEntrada, Date dataSaida) {
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

    @Override
    public String toString() {
        return "DataEntradaSaidaDTO{" +
                "dataEntrada=" + dataEntrada +
                ", dataSaida=" + dataSaida +
                '}';
    }
}
