package com.example.demo.loader;

import com.example.demo.entities.Topico;
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
        if (topicoRepository.findByNome("Saúde").isEmpty()) {
            topicoRepository.save(new Topico("Saúde"));
        }
        if (topicoRepository.findByNome("Educação").isEmpty()) {
            topicoRepository.save(new Topico("Educação"));
        }
        // exemplo de como adicionar um novo tópico
        if (topicoRepository.findByNome("Mobilidade").isEmpty()) {
            topicoRepository.save(new Topico("Mobilidade"));
        }
        if (topicoRepository.findByNome("Esportes").isEmpty()) {
            topicoRepository.save(new Topico("Esportes"));
        }
        if (topicoRepository.findByNome("Inovação").isEmpty()) {
            topicoRepository.save(new Topico("Inovação"));
        }
        if (topicoRepository.findByNome("Política").isEmpty()) {
            topicoRepository.save(new Topico("Política"));
        }
    }
}