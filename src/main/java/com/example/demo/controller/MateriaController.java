package com.example.demo.controller;

import com.example.demo.entities.Materia;
import com.example.demo.repository.MateriaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/materias")
public class MateriaController {
    private final MateriaRepository materiaRepository;

    public MateriaController(MateriaRepository materiaRepository) {
        this.materiaRepository = materiaRepository;
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
    public Materia createMateria(@RequestBody Materia materia) {
        return materiaRepository.save(materia);
    }

    // editar matéria existente
    @PutMapping("/{id}")
    public Materia updateMateria(@PathVariable Long id, @RequestBody Materia materiaAtualizada) {
        if (materiaRepository.existsById(id)) { // verifica se a matéria existe
            materiaAtualizada.setId(id); // garante que o id da matéria seja o mesmo da que for atualizada
            return materiaRepository.save(materiaAtualizada)
        }
        return null;
    }

    // apagar matéria pelo id dela
    @DeleteMapping("/{id}")
    public void deleteMateria(@PathVariable Long id) {
        materiaRepository.deleteById(id);
    }
}