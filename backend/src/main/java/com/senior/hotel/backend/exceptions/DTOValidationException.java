package com.senior.hotel.backend.exceptions;

import java.util.Map;

public class DTOValidationException extends RuntimeException{
    private Map<String, String> entityErrorsList;

    public DTOValidationException(Map<String, String> entityErrorsList) {
        this.entityErrorsList = entityErrorsList;
    }

    public Map<String, String> getEntityErrorsList() {
        return entityErrorsList;
    }

    public void setEntityErrorsList(Map<String, String> entityErrorsList) {
        this.entityErrorsList = entityErrorsList;
    }
}
