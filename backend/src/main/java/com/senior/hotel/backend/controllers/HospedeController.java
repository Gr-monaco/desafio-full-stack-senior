package com.senior.hotel.backend.controllers;

import com.senior.hotel.backend.model.Hospede;
import com.senior.hotel.backend.services.HospedeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("hospede")
public class HospedeController {

    @Autowired
    private HospedeServices hospedeServices;

    @PostMapping("")
    public ResponseEntity<?> cadastraHospede(@RequestBody Hospede hospede){
        Hospede hospedePersistido = hospedeServices.persisteHospede(hospede);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }


}
