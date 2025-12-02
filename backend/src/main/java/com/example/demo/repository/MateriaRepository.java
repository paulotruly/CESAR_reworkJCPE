package com.example.demo.repository;

import java.util.List;
import com.example.demo.entities.Materia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MateriaRepository extends JpaRepository<Materia, Long> {
// criando uma interface para entidade Materia aonde o ID dela é do tipo Long
    
    List<Materia> findByTopicoId(Long topicoId);
}