package com.example.demo.loader;

import com.example.demo.entity.Topico;
import com.example.demo.repository.TopicoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class TopicoDataLoader implements CommandLineRunner{
    private final TopicoRepository topicoRepository;

    public TopicoDataLoader(TopicoRepository topicoRepository) {
        this.topicoRepository = topicoRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // verifica e cria o tópico
        if (topicoRepository.findByNome("Segurança").isEmpty()) {
            topicoRepository.save(new Topico("Segurança"));
        }
        if (topicoRepository.findByNome("Saúde e Bem Estar").isEmpty()) {
            topicoRepository.save(new Topico("Saúde e Bem Estar"));
        }
        if (topicoRepository.findByNome("Enem e Educação").isEmpty()) {
            topicoRepository.save(new Topico("Enem e Educação"));
        }
        // exemplo de como adicionar um novo tópico
        if (topicoRepository.findByNome("Mobilidade").isEmpty()) {
            topicoRepository.save(new Topico("Mobilidade"));
        }
    }
}