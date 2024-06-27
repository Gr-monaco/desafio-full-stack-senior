package com.senior.hotel.backend.exceptionHandler;

import com.senior.hotel.backend.exceptions.EntityValidationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class EntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = EntityValidationException.class)
    protected ResponseEntity<Object> handleEntityException(EntityValidationException ex, WebRequest request){
        return handleExceptionInternal(ex, ex.getEntityErrorsList(),
                new HttpHeaders(), HttpStatus.CONFLICT, request);
    }
}
