package com.senior.hotel.backend.services;

import com.senior.hotel.backend.DTO.DataEntradaSaidaDTO;
import com.senior.hotel.backend.DTO.ReservaDTO;
import com.senior.hotel.backend.exceptions.DTOValidationException;
import com.senior.hotel.backend.model.Hospede;
import com.senior.hotel.backend.model.Reserva;
import com.senior.hotel.backend.model.embeddable.DataEntradaSaida;
import com.senior.hotel.backend.repository.HospedeRepository;
import com.senior.hotel.backend.repository.ReservaRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

import java.util.HashMap;
import java.util.Map;

@Service
public class ReservaServices {

    @Autowired
    private HospedeRepository hospedeRepository;

    @Autowired
    private ReservaRespository reservaRespository;

    public void persisteEntidade(ReservaDTO reservaDTO){
        //validaDTO(reservaDTO);

        Reserva reserva = new Reserva();
        reserva.setNumeroQuarto(reservaDTO.getNumeroQuarto());

        DataEntradaSaida dataEntradaSaida = new DataEntradaSaida();
        dataEntradaSaida.setDataEntrada(reservaDTO.getDataEntradaSaida().getDataEntrada());
        dataEntradaSaida.setDataSaida(reservaDTO.getDataEntradaSaida().getDataSaida());
        reserva.setDataEntradaSaida(dataEntradaSaida);

        reserva.setNecessitaEstacionamento(reservaDTO.isNecessitaEstacionamento());
        
        Hospede hospede = hospedeRepository.findByDocumento(reservaDTO.getDocumentoHospede());
        reserva.setHospede(hospede);

        this.reservaRespository.save(reserva);
    }
    private void validaDTO(ReservaDTO reservaDTO){
        //Talvez devo refatorar como é feita validação
        //A forma anterior que eu estava fazendo eram muitos if dentro de if
        Map<String, String> errosValidacao = new HashMap<>();

        String documentoHospede = reservaDTO.getDocumentoHospede();

        if (documentoHospede == null) {
            errosValidacao.put("documentoHospede", "Documento não informado");
            throw new DTOValidationException(errosValidacao);
        }

        Hospede hospede = hospedeRepository.findByDocumento(documentoHospede);
        if (hospede == null) {
            errosValidacao.put("documentoHospede", "Hospede não encontrado");
            throw new DTOValidationException(errosValidacao);
        }

        Reserva reservaNaoFinalizada = reservaRespository.existeReservaByHospedeDocumento(hospede.getDocumento());
        if (reservaNaoFinalizada != null) {
            errosValidacao.put("documentoHospede", "Hospede tem reserva não finalizada");
            throw new DTOValidationException(errosValidacao);
        }

    }
}
