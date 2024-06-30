package com.senior.hotel.backend.model;
import com.senior.hotel.backend.model.embeddable.DataEntradaSaida;
import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;

@Entity
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Integer numeroQuarto;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Hospede hospede;

    @Embedded
    private DataEntradaSaida dataEntradaSaida;

    private Boolean necessitaEstacionamento = false;

    private Boolean checkIn = false;

    private Boolean checkOut = false;

    public Reserva() {

    }

    public Reserva(Long id, Integer numeroQuarto, Hospede hospede, DataEntradaSaida dataEntradaSaida,
                   Boolean necessitaEstacionamento, Boolean checkIn, Boolean checkOut) {
        this.id = id;
        this.numeroQuarto = numeroQuarto;
        this.hospede = hospede;
        this.dataEntradaSaida = dataEntradaSaida;
        this.necessitaEstacionamento = necessitaEstacionamento;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNumeroQuarto() {
        return numeroQuarto;
    }

    public void setNumeroQuarto(Integer numeroQuarto) {
        this.numeroQuarto = numeroQuarto;
    }

    public Hospede getHospede() {
        return hospede;
    }

    public void setHospede(Hospede hospede) {
        this.hospede = hospede;
    }

    public DataEntradaSaida getDataEntradaSaida() {
        return dataEntradaSaida;
    }

    public void setDataEntradaSaida(DataEntradaSaida dataEntradaSaida) {
        this.dataEntradaSaida = dataEntradaSaida;
    }

    public Boolean getNecessitaEstacionamento() {
        return necessitaEstacionamento;
    }

    public void setNecessitaEstacionamento(Boolean necessitaEstacionamento) {
        this.necessitaEstacionamento = necessitaEstacionamento;
    }

    public Boolean getCheckIn() {
        return checkIn;
    }

    public void setCheckIn(Boolean checkIn) {
        this.checkIn = checkIn;
    }

    public Boolean getCheckOut() {
        return checkOut;
    }

    public void setCheckOut(Boolean checkOut) {
        this.checkOut = checkOut;
    }
}

