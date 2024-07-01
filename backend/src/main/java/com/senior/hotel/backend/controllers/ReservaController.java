package com.senior.hotel.backend.controllers;

import com.senior.hotel.backend.DTO.ReservaDTO;
import com.senior.hotel.backend.model.Reserva;
import com.senior.hotel.backend.services.ReservaServices;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("reserva")
public class ReservaController {

    @Autowired
    private ReservaServices reservaServices;

    @PostMapping("")
    public ResponseEntity<?> cadastraReserva(@RequestBody ReservaDTO reserva){
        reservaServices.persisteEntidade(reserva);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @GetMapping("")
    public Page<Reserva> getReservas(@RequestParam int page, @RequestParam int size){
        return this.reservaServices.getReservas(page, size);
    }

    @GetMapping("/detalhesReserva")
    public Reserva getReservaById(@RequestParam long id){
        return this.reservaServices.getReserva(id);
    }

    @PatchMapping("/realizarCheckIn")
    public ResponseEntity<?> realizarCheckInById(@RequestParam long id){
        this.reservaServices.realizaCheckIn(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PatchMapping("/realizarCheckOut")
    public ResponseEntity<?> realizaCheckOutById(@RequestParam long id){
        this.reservaServices.realizaCheckOut(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @GetMapping("/realizarCalculoDiarias")
    public BigDecimal realizarCalculoDiarias(@RequestParam long id, @RequestParam boolean aplicarMultaAtraso){
        return this.reservaServices.realizaCalculoDiarias(id, aplicarMultaAtraso);
    }
}
