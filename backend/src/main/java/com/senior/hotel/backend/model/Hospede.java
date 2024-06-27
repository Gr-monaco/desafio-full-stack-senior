package com.senior.hotel.backend.model;

import jakarta.persistence.*;

@Entity
public class Hospede {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @Column(unique=true)
    private String documento;

    private String telefone;

    public Hospede() {
    }

    public Hospede(Long id, String nome, String documento, String telefone, String mudado) {
        this.id = id;
        this.nome = nome;
        this.documento = documento;
        this.telefone = telefone;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDocumento() {
        return documento;
    }

    public void setDocumento(String documento) {
        this.documento = documento;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    @Override
    public String toString() {
        return "Hospede{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", documento='" + documento + '\'' +
                ", telefone='" + telefone + '\'' +
                '}';
    }

}
