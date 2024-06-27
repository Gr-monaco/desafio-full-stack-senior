package com.senior.hotel.backend.repository;

import com.senior.hotel.backend.model.Hospede;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HospedeRepository extends PagingAndSortingRepository<Hospede, Long>, CrudRepository<Hospede, Long> {

    boolean existsHospedeByDocumento(String documento);
}
