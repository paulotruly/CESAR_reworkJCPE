package com.example.demo.services;

import com.example.demo.entities.Topico;
import com.example.demo.repository.TopicoRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class TopicoService {

    private final TopicoRepository topicoRepository;

    public TopicoService(TopicoRepository topicoRepository) {
        this.topicoRepository = topicoRepository;
    }

    // já que o usuário nao vai poder criar topicos, aqui só vai
    // buscar os tópicos já existentes
    public List<Topico> findAll() {
        return topicoRepository.findAll();
    }

    public Optional<Topico> findById(Long id) {
        return topicoRepository.findById(id);
    }
}