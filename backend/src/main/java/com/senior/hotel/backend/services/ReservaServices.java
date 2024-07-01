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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestParam;

import java.math.BigDecimal;
import java.util.*;

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

    public Page<Reserva> getReservas(int page, int size){
        return this.reservaRespository.findAll(PageRequest.of(page, size, Sort.by("hospede.nome")));
    }

    public Reserva getReserva(Long id){
        Reserva retorno = null;

        Optional<Reserva> reserva = reservaRespository.findById(id);
        if(reserva.isPresent()){
            retorno = reserva.get();
        }

        return retorno;
    }

    public void realizaCheckIn(long id){
        this.reservaRespository.setCheckInAsTrue(id);
    }

    public void realizaCheckOut(long id){
        this.reservaRespository.setCheckOutAsTrue(id);
    }

    public BigDecimal realizaCalculoDiarias(long id, boolean aplicarMultaAtraso){
        Optional<Reserva> reservaOptional = this.reservaRespository.findById(id);

        if(reservaOptional.isEmpty()){
            //Ideal seria lançar exception
            return null;
        }

        Reserva reserva = reservaOptional.get();

        Date dataEntrada = reserva.getDataEntradaSaida().getDataEntrada();
        Date dataSaida = reserva.getDataEntradaSaida().getDataSaida();

        Calendar entrada = Calendar.getInstance();
        entrada.setTime(dataEntrada);
        Calendar saida = Calendar.getInstance();
        saida.setTime(dataSaida);

        boolean necessitaEstacionamento = reserva.getNecessitaEstacionamento();
        int diasFimDeSemana = 0;
        int diasDeSemana = 0;
        do {
            if(entrada.get(Calendar.DAY_OF_WEEK) == Calendar.SATURDAY
            || entrada.get(Calendar.DAY_OF_WEEK) == Calendar.SUNDAY){
                ++diasFimDeSemana;
            }else{
                ++diasDeSemana;
            }
            entrada.add(Calendar.DAY_OF_MONTH,1);
        }while (!saida.before(entrada));

        BigDecimal diariasFimDeSemana = BigDecimal.valueOf(diasFimDeSemana* 180L);
        BigDecimal diariasDiasDeSemana = BigDecimal.valueOf(diasDeSemana* 120L);

        if(necessitaEstacionamento){
            diariasFimDeSemana = diariasFimDeSemana.add(BigDecimal.valueOf(diasFimDeSemana* 20L));
            diariasDiasDeSemana = diariasDiasDeSemana.add(BigDecimal.valueOf(diasDeSemana* 15L));
        }

        BigDecimal valorMulta = BigDecimal.ZERO;
        if(aplicarMultaAtraso){
            if(saida.get(Calendar.DAY_OF_WEEK) == Calendar.SATURDAY
                    || saida.get(Calendar.DAY_OF_WEEK) == Calendar.SUNDAY){
                valorMulta = BigDecimal.valueOf(180L* 0.5);
            }else{
                valorMulta = BigDecimal.valueOf(120L* 0.5);
            }
        }

        return diariasDiasDeSemana.add(diariasFimDeSemana).add(valorMulta);
    }

}
