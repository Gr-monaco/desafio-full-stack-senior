package com.senior.hotel.backend.controllers;

import com.senior.hotel.backend.DTO.ReservaDTO;
import com.senior.hotel.backend.model.Reserva;
import com.senior.hotel.backend.services.ReservaServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("reserva")
public class ReservaController {

    @Autowired
    private ReservaServices reservaServices;

    @PostMapping("")
    public void cadastraReserva(@RequestBody ReservaDTO reserva){
        reservaServices.persisteEntidade(reserva);
    }

    @GetMapping("")
    public Page<Reserva> getHospedes(@RequestParam int page, @RequestParam int size){
        return this.reservaServices.getReservas(page, size);
    }
}
