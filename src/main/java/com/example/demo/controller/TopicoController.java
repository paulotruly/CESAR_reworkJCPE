package com.example.demo.controller;

import com.example.demo.exceptions.ResourceNotFoundException;
import com.example.demo.entities.Materia;
import com.example.demo.entities.Topico;
import com.example.demo.services.MateriaService;
import com.example.demo.services.TopicoService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

// indica ao spring que essa é uma classe controladora que lida com requisições http e retorna dados no formato JSON
@RestController
@RequestMapping("/topicos") // o caminho base para todos os endpoints deste controlador
public class TopicoController {

    // aqui vamos injetar o repositorio
    // a gente chama a matéria porque precisamos que o controlador de Topico lide com tudo com o que ele esta relacionado
    private final TopicoService topicoService;
    private final MateriaService materiaService;

    public TopicoController(TopicoService topicoService, MateriaService materiaService) {
        this.topicoService = topicoService;
        this.materiaService = materiaService;
    }

    // criando endpoints
    @GetMapping("/{id}")
    public Topico getTopicoPorId(@PathVariable Long id) {
        return topicoService.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Tópico não encontrado!"));
    }

    @GetMapping("/{id}/materias")
    public List<Materia> getMateriasDoTopico(@PathVariable("id") Long topicoId) {
        return materiaService.findByTopicoId(topicoId);
    }
}