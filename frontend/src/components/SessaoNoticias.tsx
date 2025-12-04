import { useEffect, useState } from "react";
import NoticiaDaSessao from "./NoticiaDaSessao"

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

interface Topico {
id: number;
nome: string; 
}

interface SubtituloConteudo {
titulo: string; 
texto: string; 
}

interface ConteudoMateria {
subtitulos: SubtituloConteudo[];
textoPrincipal: string; 
}

export interface SessaoNoticiasProps {
    filtroTopicoId?: number | null; 
}

function SessaoNoticias({filtroTopicoId}: SessaoNoticiasProps) {

    const API_URL_MATERIAS = 'http://localhost:8080/materias';
    const [materias, setMaterias] = useState<Materia[]>([]);
    
    const QUANTIDADE_MATERIAS = 4;
    const [contagemVisivel, setContagemVisivel] = useState(QUANTIDADE_MATERIAS); 

    const handleCarregarMais = () => {
        setContagemVisivel(prevCount => prevCount + QUANTIDADE_MATERIAS);
    };
    const temMais = contagemVisivel < materias.length;

    useEffect(() =>{
        const buscarMaterias = async () => {
            try {
                const resposta = await fetch(API_URL_MATERIAS);
                if (!resposta.ok) {
                    throw new Error(`Erro na API: ${resposta.statusText} `)
                }
                
                const dadosCompletos: Materia[] = await resposta.json();

                const dadosFiltrados = filtroTopicoId ? dadosCompletos.filter(m => m.topico.id === filtroTopicoId) : dadosCompletos;

                // ordenando por data!!
                const dadosOrdenados = dadosFiltrados.sort((a, b) => {
                    const dataA = new Date(a.dataPublicacao);
                    const dataB = new Date(b.dataPublicacao);

                    return dataB.getTime() - dataA.getTime();
                });

                setMaterias(dadosOrdenados);
                console.log(dadosOrdenados)
            } catch {
                console.error("Não foi possível buscar os tópicos! ");
            }
        };

        buscarMaterias();
    }, [filtroTopicoId]);

    return (
        <div id="sessao-noticias" className="flex flex-col justify-center items-center">

            <div className="flex flex-row items-center justify-center m-4">
                <p className="font-semibold tracking-tight text-lg"> Últimas notícias </p>
                <div className="bg-[#DF1E26] w-[240px] h-[0.5px] ml-4"> </div>
            </div>

            <div className="grid grid-cols-2 gap-4 px-4">
                {materias.slice(0, contagemVisivel).map((materia) => (
                    <NoticiaDaSessao key={materia.id} materia={materia}></NoticiaDaSessao>
                ))}

            </div>
            
            {temMais && (
                <button
                onClick={handleCarregarMais}
                className="my-3 px-5 py-1 rounded-full bg-[#DF1E26] text-white text-md">
                    VER MAIS
                </button>
            )}
        </div>
    )
}

export default SessaoNoticias