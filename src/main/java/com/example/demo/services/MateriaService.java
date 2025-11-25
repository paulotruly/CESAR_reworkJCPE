package com.example.demo.services;

import com.example.demo.entities.Materia;
import com.example.demo.entities.Topico;
import com.example.demo.repository.MateriaRepository;
import com.example.demo.repository.TopicoRepository;

import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class MateriaService {

    private final MateriaRepository materiaRepository;
    private final TopicoRepository topicoRepository;

    // construtor
    public MateriaService(MateriaRepository materiaRepository, TopicoRepository topicoRepository) {
        this.materiaRepository = materiaRepository;
        this.topicoRepository = topicoRepository;
    }

    // método
    // ele usa a materia como parâmetro e usa o método save
    // para persistir o objeto no banco de dados
    public Materia salvarMateria(Materia materia, long topicoId) {

        if (materia.getTitulo() == null || materia.getTitulo().isEmpty()) {
            throw new IllegalArgumentException("O título da matéria não pode ser nulo!");
        }

        if (materia.getLegenda() == null || materia.getLegenda().isEmpty()) {
            throw new IllegalArgumentException("A legenda não pode ser nula!");
        }

        if (materia.getAutor() == null || materia.getAutor().isEmpty()) {
            throw new IllegalArgumentException("O autor não pode ser nulo!");
        }

        if (materia.getImagem() == null || materia.getImagem().isEmpty()) {
            throw new IllegalArgumentException("O link da imagem não pode ser nulo!");
        }

        // isEmpty não se aplica aqui porque o Conteudo é um objeto
        if (materia.getConteudo() == null) {
            throw new IllegalArgumentException("O conteúdo da matéria não pode ser nulo!");
        }

        // obriga e busca o código pelo ID
        Topico topico = topicoRepository.findById(topicoId).orElseThrow(() -> new IllegalArgumentException("O tópico " + topicoId + "não existe!"));
        materia.setTopico(topico); // associando o objeto tópico encontrado à matéria

        // preenche a data da publicação
        materia.setDataPublicacao(LocalDateTime.now());

        // salva a matéria no banco de dados
        return materiaRepository.save(materia);
    }

    public List<Materia> findByTopicoId(Long topicoId) {
        return materiaRepository.findByTopicoId(topicoId);
    }
}