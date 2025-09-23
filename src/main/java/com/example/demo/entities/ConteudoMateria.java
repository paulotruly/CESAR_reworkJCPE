package com.example.demo.entities;

import java.util.List;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embeddable;

@Embeddable
public class ConteudoMateria {

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
    
    @Embeddable 
    public static class ItemSubtitulo {
        private String titulo;
        private String texto;

        public ItemSubtitulo() {
            
        }

        public ItemSubtitulo(String titulo, String texto) {
            this.titulo = titulo;
            this.texto = texto;
        }

        // getters e setters
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
}