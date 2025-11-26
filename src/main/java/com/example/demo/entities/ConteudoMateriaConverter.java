package com.example.demo.entities;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = false)
public class ConteudoMateriaConverter implements AttributeConverter<ConteudoMateria, String> {

    private static final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(ConteudoMateria meta) {
        try {
            // converte o objeto java para string JSON
            return objectMapper.writeValueAsString(meta);
        } catch (JsonProcessingException ex) {
            // em caso de erro na serialização
            return null;
        }
    }

    @Override
    public ConteudoMateria convertToEntityAttribute(String dbData) {
        if (dbData == null) {
            return null;
        }
        try {
            return objectMapper.readValue(dbData, ConteudoMateria.class);
        } catch (JsonProcessingException ex) {
            // ⬅️ CRÍTICO: Loga a string JSON que está causando o erro
            System.err.println("--- DADO JSON PROBLEMÁTICO: ---");
            System.err.println(dbData); 
            System.err.println("------------------------------------");
            System.err.println("ERRO na Desserialização JSON. Causa: " + ex.getMessage());
            ex.printStackTrace(); 
            return null;
        }
    }

}