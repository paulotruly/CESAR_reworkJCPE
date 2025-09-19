package com.example.demo.repository;

import com.example.demo.entity.Topico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TopicoRepository extends JpaRepository<Topico, Long> {
// criando uma interface para entidade Topico aonde o ID dela é do tipo Long
    Optional<Topico> findByNome(String nome);
}