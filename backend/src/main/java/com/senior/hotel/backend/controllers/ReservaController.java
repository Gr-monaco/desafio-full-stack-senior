package com.senior.hotel.backend.controllers;

import com.senior.hotel.backend.DTO.ReservaDTO;
import com.senior.hotel.backend.services.ReservaServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("reserva")
public class ReservaController {

    @Autowired
    private ReservaServices reservaServices;

    @PostMapping("")
    public void cadastraReserva(@RequestBody ReservaDTO reserva){
        reservaServices.persisteEntidade(reserva);
    }
}
