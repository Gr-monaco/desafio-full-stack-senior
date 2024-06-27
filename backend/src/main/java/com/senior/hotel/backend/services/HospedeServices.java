package com.senior.hotel.backend.services;

import com.senior.hotel.backend.exceptions.EntityValidationException;
import com.senior.hotel.backend.model.Hospede;
import com.senior.hotel.backend.repository.HospedeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class HospedeServices {

    @Autowired
    private HospedeRepository hospedeRepository;

    /**
     * Persiste o Hospede informado.
     * @param hospede
     *  O hospede a ser informado.
     * @return
     *  O Hospede já persistido no banco de dados.
     */
    public Hospede persisteHospede(Hospede hospede){
        entidadeValida(hospede);
    return hospedeRepository.save(hospede);
    }

    /**
     * Realiza validações para da Entidade Hospede
     * @param hospede
     *  Hospede a ser validado.
     */
    private void entidadeValida(Hospede hospede){
        Map<String, String> errosValidacao = new HashMap<>();

        if(hospedeRepository.existsHospedeByDocumento(hospede.getDocumento())){
            errosValidacao.put("documento", "Documento já registrado");
        }

        if(errosValidacao.size() > 0){
            throw new EntityValidationException(errosValidacao);
        }
    }
}
