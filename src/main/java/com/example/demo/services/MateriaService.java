package com.example.demo.services;

import com.example.demo.entities.Materia;
import com.example.demo.repository.MateriaRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class MateriaService {

    private final MateriaRepository materiaRepository;

    // construtor
    public MateriaService(MateriaRepository materiaRepository) {
        this.materiaRepository = materiaRepository;
    }

    // método
    // ele usa a materia como parâmetro e usa o método save
    // para persistir o objeto no banco de dados
    public Materia salvarMateria(Materia materia) {

        if (materia.getTitulo() == null || materia.getTitulo().isEmpty()) {
            throw new IllegalArgumentException("O título da matéria não pode ser nulo!");
        }

        if (materia.getLegenda() == null || materia.getLegenda().isEmpty()) {
            throw new IllegalArgumentException("A legenda não pode ser nula!");
        }

        if (materia.getAutor() == null || materia.getAutor().isEmpty()) {
            throw new IllegalArgumentException("O autor não pode ser nulo!");
        }
        
        // isEmpty não se aplica aqui porque o Conteudo é um objeto
        if (materia.getConteudo() == null) {
            throw new IllegalArgumentException("O conteúdo da matéria não pode ser nulo!");
        }

        // preenche a data da publicação
        materia.setDataPublicacao(LocalDateTime.now());

        // salva a matéria no banco de dados
        return materiaRepository.save(materia);
    }

    public List<Materia> findByTopicoId(Long topicoId) {
        return materiaRepository.findByTopicoId(topicoId);
    }
}