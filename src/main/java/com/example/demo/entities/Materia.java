package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;
import java.time.LocalDateTime;

@Entity
@Table(name = "materia")

public class Materia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // atribuir chaves primárias para a entidade usando uma coluna de identidade do banco de dados
    private Long id;
    private String titulo;
    private String legenda;
    private String autor;
    private String imagem;
    private LocalDateTime dataPublicacao;
    @Convert(converter = ConteudoMateriaConverter.class)
    @Column(columnDefinition = "TEXT")
    private ConteudoMateria conteudo;
    @ManyToOne
    @JoinColumn(name = "topico_id") // coluna da chave estrangeira
    private Topico topico; // guarda chave estrangeira do id de topico

    // o JPA precisa de um construtor vazio para conseguir criar o objeto
    public Materia() {
    }

    public Materia(String titulo, String legenda, String autor, String imagem, LocalDateTime dataPublicacao, ConteudoMateria conteudo, Topico topico){
        this.titulo = titulo;
        this.legenda = legenda;
        this.autor = autor;
        this.imagem = imagem;
        this.dataPublicacao = dataPublicacao;
        this.conteudo = conteudo;
        this.topico = topico;
    }   

    // getters e setters

    public Long getId() {
        return id;
    }
    public String getTitulo() {
        return titulo;
    }
    public String getLegenda() {
        return legenda;
    }
    public String getAutor() {
        return autor;
    }
    public String getImagem() {
        return imagem;
    }
    public ConteudoMateria getConteudo() {
        return conteudo;
    }
    public LocalDateTime getDataPublicacao() {
        return dataPublicacao;
    }
    public Topico getTopico() {
        return topico;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public void setLegenda(String legenda) {
        this.legenda = legenda;
    }
    public void setAutor(String autor) {
        this.autor = autor;
    }
    public void setImagem(String imagem) {
        this.imagem = imagem;
    }
    public void setDataPublicacao(LocalDateTime dataPublicacao) {
        this.dataPublicacao = dataPublicacao;
    }
    public void setConteudo(ConteudoMateria conteudo) {
        this.conteudo = conteudo;
    }
    public void setTopico(Topico topico) {
        this.topico = topico;
    }
}
