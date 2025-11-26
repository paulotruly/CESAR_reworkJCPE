package com.example.demo.entities;

import jakarta.persistence.Embeddable;

@Embeddable
public class ItemSubtitulo {
    
    private String titulo;
    private String texto;

    public ItemSubtitulo() {
    }

    public ItemSubtitulo(String titulo, String texto) {
        this.titulo = titulo;
        this.texto = texto;
    }

    // Getters e Setters
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public String getTexto() {
        return texto;
    }
    public void setTexto(String texto) {
        this.texto = texto;
    }
}