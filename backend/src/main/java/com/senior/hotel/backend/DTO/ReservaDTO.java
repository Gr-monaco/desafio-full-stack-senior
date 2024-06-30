package com.senior.hotel.backend.DTO;

public class ReservaDTO {
    private String documentoHospede;

    private Integer numeroQuarto;

    private DataEntradaSaidaDTO dataEntradaSaida;

    private boolean necessitaEstacionamento;

    public ReservaDTO() {
    }

    public ReservaDTO(String documentoHospede, Integer numeroQuarto, DataEntradaSaidaDTO dataEntradaSaida,
                      boolean necessitaEstacionamento) {
        this.documentoHospede = documentoHospede;
        this.numeroQuarto = numeroQuarto;
        this.dataEntradaSaida = dataEntradaSaida;
        this.necessitaEstacionamento = necessitaEstacionamento;
    }

    public String getDocumentoHospede() {
        return documentoHospede;
    }

    public void setDocumentoHospede(String documentoHospede) {
        this.documentoHospede = documentoHospede;
    }

    public Integer getNumeroQuarto() {
        return numeroQuarto;
    }

    public void setNumeroQuarto(Integer numeroQuarto) {
        this.numeroQuarto = numeroQuarto;
    }

    public DataEntradaSaidaDTO getDataEntradaSaida() {
        return dataEntradaSaida;
    }

    public void setDataEntradaSaida(DataEntradaSaidaDTO dataEntradaSaida) {
        this.dataEntradaSaida = dataEntradaSaida;
    }

    public boolean isNecessitaEstacionamento() {
        return necessitaEstacionamento;
    }

    public void setNecessitaEstacionamento(boolean necessitaEstacionamento) {
        this.necessitaEstacionamento = necessitaEstacionamento;
    }

    @Override
    public String toString() {
        return "ReservaDTO{" +
                "documentoHospede='" + documentoHospede + '\'' +
                ", numeroQuarto=" + numeroQuarto +
                ", dataEntradaSaida=" + dataEntradaSaida +
                ", necessitaEstacionamento=" + necessitaEstacionamento +
                '}';
    }
}
