package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "topico")

public class Topico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // atribuir chaves primárias para a entidade usando uma coluna de identidade do banco de dados
    private Long id;
    private String nome;
    @OneToMany(mappedBy = "topico")
    private List<Materia> materias;

    // o JPA precisa de um construtor vazio para conseguir criar o objeto
    public Topico() {
    }

    public Topico(String nome){
        this.nome = nome;
    }

    // getters e setters

    public Long getId() {
        return id;
    }
    public String getNome() {
        return nome;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
}
