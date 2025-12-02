import SessaoNoticias from "../components/SessaoNoticias";
import UltimaNoticiaCategoria from "../components/UltimaNoticiaCategoria";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export interface Materia {
  id: number;
  titulo: string;
  legenda: string;
  autor: string;
  imagem: string;
  dataPublicacao: string; 
  conteudo: ConteudoMateria;
  topico: Topico;
}

export interface Topico {
  id: number;
  nome: string; 
}

export interface SubtituloConteudo {
  titulo: string; 
  texto: string; 
}

export interface ConteudoMateria {
  subtitulos: SubtituloConteudo[];
  textoPrincipal: string; 
}

export interface UltimaNoticiaProps {
    materia: Materia | null;
}

interface CategoriaRouteParams {
    id?: string;
    [key: string]: string | undefined;
}

function Categoria() {

        const { id } = useParams<CategoriaRouteParams>();

        const API_URL_MATERIAS = 'http://localhost:8080/materias';
        const [materias, setMaterias] = useState<Materia[]>([]);

        const filtroTopicoId = id ? parseInt(id) : null;
    
        useEffect(() => {
            const buscarEManterMaterias = async () => {
                try {
                    const resposta = await fetch(API_URL_MATERIAS);
                    if (!resposta.ok) {
                        throw new Error(`Erro na API: ${resposta.statusText}`);
                    }
                    
                    const dadosCompletos: Materia[] = await resposta.json();

                    const dadosFiltrados = filtroTopicoId 
                    ? dadosCompletos.filter(m => m.topico.id === filtroTopicoId)
                    : dadosCompletos;
                    
                    const dadosOrdenados = [...dadosFiltrados].sort((a, b) => {
                        return new Date(b.dataPublicacao).getTime() - new Date(a.dataPublicacao).getTime();
                    });
    
                    setMaterias(dadosOrdenados);
                } catch (error) {
                    console.error("Não foi possível buscar as matérias!", error);
                }
            };
            buscarEManterMaterias();
        }, []);

        const ultimaNoticia = materias.length > 0 ? materias[0] : null;

    return (
            <div className="flex flex-col my-4">
                {ultimaNoticia &&
                    <UltimaNoticiaCategoria materia={ultimaNoticia}
                />}

                <SessaoNoticias filtroTopicoId={filtroTopicoId}></SessaoNoticias>

            </div>
    )
}

export default Categoria
