package com.example.demo.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embeddable;

@Embeddable
public class ConteudoMateria {

    @JsonProperty("textoPrincipal")
    private String textoPrincipal;
    @ElementCollection
    private List<ItemSubtitulo> subtitulos; //

    public ConteudoMateria() {

    }

    public ConteudoMateria(String textoPrincipal, List<ItemSubtitulo> subtitulos) {
        this.textoPrincipal = textoPrincipal;
        this.subtitulos = subtitulos;
    }

    // getters e setters
    public String getTextoPrincipal() {
        return textoPrincipal;
    }
    public void setTextoPrincipal(String textoPrincipal) {
        this.textoPrincipal = textoPrincipal;
    }
    public List<ItemSubtitulo> getSubtitulos() {
        return subtitulos;
    }
    public void setSubtitulos(List<ItemSubtitulo> subtitulos) {
        this.subtitulos = subtitulos;
    }
    
}