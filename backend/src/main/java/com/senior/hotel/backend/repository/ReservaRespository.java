package com.senior.hotel.backend.repository;

import com.senior.hotel.backend.model.Reserva;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
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
    Reserva existeReservaByHospedeDocumento(@Param("documento") String documentoHospede);
    @Transactional
    @Modifying
    @Query("update Reserva r set r.checkIn = true where r.id = :id")
    void setCheckInAsTrue(@Param("id") long id);

    @Transactional
    @Modifying
    @Query("update Reserva r set r.checkOut = true where r.id = :id")
    void setCheckOutAsTrue(@Param("id") long id);
}
