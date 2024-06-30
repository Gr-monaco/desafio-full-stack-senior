package com.senior.hotel.backend.exceptionHandler;

import com.senior.hotel.backend.exceptions.DTOValidationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class DTOExceptionHandler extends ResponseEntityExceptionHandler {

    //Por enquanto vou usar essa classe, mas é possivel generalizar o DTO e o Entity Exceptions, boa parte do código
    //é reutilizado.
    @ExceptionHandler(value = DTOValidationException.class)
    protected ResponseEntity<Object> handleEntityException(DTOValidationException ex, WebRequest request){
        return handleExceptionInternal(ex, ex.getEntityErrorsList(),
                new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }
}
