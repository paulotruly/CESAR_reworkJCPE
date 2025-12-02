package com.example.demo.controller;

import com.example.demo.entities.Materia;
import com.example.demo.services.MateriaService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/materias")
public class MateriaController {
    private final MateriaService materiaService;

    public MateriaController(MateriaService materiaService) {
        this.materiaService = materiaService;
    }

    // adicionando endpoints
    @GetMapping
    public ResponseEntity<List<Materia>> getAllMaterias() {
        return ResponseEntity.ok(materiaService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Materia> getMateriaById(@PathVariable Long id) {
        return ResponseEntity.ok(materiaService.findById(id));
    }

    // criar matéria nova
    @PostMapping
    public ResponseEntity<Materia> createMateria(@RequestBody Materia materia, @RequestParam Long topicoId) {
        Materia novaMateria = materiaService.salvarMateria(materia, topicoId);
        return ResponseEntity.status(201).body(novaMateria);
    }

    // editar matéria existente
    @PutMapping("/{id}")
    public ResponseEntity<Materia> updateMateria(
        @PathVariable Long id, 
        @RequestBody Materia materiaAtualizada, 
        @RequestParam Long topicoId
    ) {
        Materia updatedMateria = materiaService.updateMateria(id, materiaAtualizada, topicoId);
        return ResponseEntity.ok(updatedMateria);
    }

    // apagar matéria pelo id dela
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMateria(@PathVariable Long id) {
        materiaService.deleteById(id);
        return ResponseEntity.noContent().build(); 
    }
}