package com.senior.hotel.backend.repository;

import com.senior.hotel.backend.model.Reserva;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservaRespository extends PagingAndSortingRepository<Reserva, Long>, CrudRepository<Reserva, Long> {

    @Query( "select r from Reserva r " +
            "   where " +
            "       r.hospede.documento = :documento" +
            "   and" +
            "       r.checkOut = false")
    Reserva existeReservaByHospedeDocumento(@Param("documento") String  documentoHospede);
}
