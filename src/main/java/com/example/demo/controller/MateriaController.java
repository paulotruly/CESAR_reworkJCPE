package com.example.demo.controller;

import com.example.demo.entities.Materia;
import com.example.demo.repository.MateriaRepository;
import com.example.demo.services.MateriaService;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/materias")
public class MateriaController {
    private final MateriaRepository materiaRepository;
    private final MateriaService materiaService;

    public MateriaController(MateriaRepository materiaRepository, MateriaService materiaService) {
        this.materiaRepository = materiaRepository;
        this.materiaService = materiaService;
    }

    // adicionando endpoints
    @GetMapping
    public List<Materia> getAllMaterias() {
        return materiaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Materia> getMateriaById(@PathVariable Long id) {
        return materiaRepository.findById(id);
    }

    // criar matéria nova
    @PostMapping
    public Materia createMateria(@RequestBody Materia materia, @RequestParam Long topicoId) {
        return materiaService.salvarMateria(materia, topicoId);
    }

    // editar matéria existente
    @PutMapping("/{id}")
    public Materia updateMateria(@PathVariable Long id, @RequestBody Materia materiaAtualizada, @RequestParam Long topicoId) {
        materiaAtualizada.setId(id);
        return materiaService.salvarMateria(materiaAtualizada, topicoId);
    }

    // apagar matéria pelo id dela
    @DeleteMapping("/{id}")
    public void deleteMateria(@PathVariable Long id) {
        materiaRepository.deleteById(id);
    }
}