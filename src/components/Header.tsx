import { useEffect, useState } from "react";
import { MenuIcon } from "../assets/MenuIcon"
import { SearchIcon } from "../assets/SearchIcon"

interface Topico {
    id: number;
    nome: string;
}

interface NoticiaCompleta {
    dataPublicacao: string;
    topico: { id: number; nome: string }; 
}

interface Materia {
    dataPublicacao: string;
    topicoId: number;
    topicoNome: string;
}

function Header() {
    const [topicos, setTopicos] = useState<Topico[]>([]);
    const [materias, setMaterias] = useState<Materia[]>([]);
    const API_URL_TOPICOS = 'http://localhost:8080/topicos';
    const API_URL_MATERIAS = 'http://localhost:8080/materias';

    const [mostrarCategorias, setMostrarCategorias] = useState<boolean>(false);
    const [botaoMais, setBotaoMais] = useState<boolean>(true);
    const [mostrarRecentes, setMostrarRecentes] = useState<boolean>(false);
    const [botaoMaisRecentes, setBotaoMaisRecentes] = useState<boolean>(true);

    useEffect(() =>{
        const buscarTopicos = async () => {
            try {
                const resposta = await fetch(API_URL_TOPICOS);
                if (!resposta.ok) {
                    throw new Error(`Erro na API: ${resposta.statusText} `)
                }
                
                const dados: Topico[] = await resposta.json();
                setTopicos(dados);
            } catch {
                console.error("Não foi possível buscar os tópicos! ");
            }
        };

        buscarTopicos();
    }, []);
    
    useEffect(() => {
        const buscarHorarios = async () => {
            try {
                const resposta = await fetch(API_URL_MATERIAS);
                if (!resposta.ok) {
                    throw new Error(`Erro na API: ${resposta.statusText} `)
                }

                const dadosCompletos: NoticiaCompleta[] = await resposta.json();

                const dadosProcessados: Materia[] = dadosCompletos.map(noticia => ({
                    dataPublicacao: noticia.dataPublicacao,
                    topicoId: noticia.topico.id,
                    topicoNome: noticia.topico.nome
                }));

                // ordenando por data!!
                const dadosOrdenados = dadosProcessados.sort((a, b) => {
                    const dataA = new Date(a.dataPublicacao);
                    const dataB = new Date(b.dataPublicacao);

                    return dataB.getTime() - dataA.getTime();
                });

                console.log(dadosOrdenados);
                setMaterias(dadosOrdenados);
            } catch {
                console.error("Não foi possível buscar os tópicos! ");
            }
        };
        buscarHorarios()
    }, []);


    return (
        <div>
            <div className="flex flex-row items-center h-16 p-4 bg-[#DF1E26]">
                <img
                    className="mr-auto w-auto h-[45px]"
                    src="https://jc.uol.com.br/img/edicao.png"
                    alt=""
                />

                <img
                    className="ml-6 w-auto h-10"
                    src="https://blogdomagno.com.br/wp-content/uploads/2024/07/1_logo_jc-27530572.png"
                    alt=""
                />

                <nav className="ml-auto flex flex-row gap-4">
                    <a href="">
                        <MenuIcon width={25}></MenuIcon>
                    </a>
                    <a href="">
                        <SearchIcon width={25}></SearchIcon>
                    </a>
                </nav>
            </div>

            

            {/* BARRA DE NAVAGEÇÃO PRINCIPAL */}
            <div className="group flex flex-row items-center justify-center w-full h-auto text-[13px] bg-[#f0f1f0]">

                {topicos.slice(0,4).map((topico) => (
                    <a 
                        key={topico.id}
                        className="text-[#DF1E26] hover:bg-[#DF1E26] p-3 hover:text-white" 
                        href=""
                    >
                        {topico.nome}
                    </a>
                ))}

                {botaoMais && (
                <button
                onClick={() => {
                    setMostrarCategorias(!mostrarCategorias);
                    setBotaoMais(!botaoMais);
                }}
                className="text-[#DF1E26] text-right font-semibold hover:bg-[#DF1E26] hover:text-white p-3">
                    Mais
                </button>
                )}

            </div>

            {mostrarCategorias && (  
            <div className="group flex flex-row items-center justify-center w-full h-auto text-[13px] bg-[#F1F0F0] gap-2">
                
                {topicos.slice(4).map((topico) => (
                    <a 
                        key={topico.id}
                        className="text-[#DF1E26] hover:bg-[#DF1E26] hover:text-white  p-3" 
                        href=""
                    >
                        {topico.nome}
                    </a>
                ))}

                <button
                onClick={() => {
                    setMostrarCategorias(!mostrarCategorias);
                    setBotaoMais(!botaoMais)
                }}
                className="text-[#DF1E26] text-right font-semibold hover:bg-[#DF1E26] hover:text-white p-3">
                    Menos
                </button>

            </div>
            )}
            



            {/* BARRA DE NAVAGEÇÃO RECENTES */}
            <div className="flex flex-row items-center justify-center bg-white w-full h-auto p-2 gap-2 text-[13px]">
                <div className="h-6 mr-1 flex flex-row items-center text-[#DF1E26]">
                    <p className="font-semibold tracking-tighter text-[14px]"> 11:40  - QUI </p>
                </div>

                <div className="h-6 flex items-center gap-4 ">
                    {materias.slice(0, 4).map((materia) => (
                        <a
                        key={materia.topicoId}
                        className="text-black"
                        href="">
                            {materia.topicoNome}
                        </a>
                    ))}
                </div>
                
                {botaoMaisRecentes && (
                <button
                onClick={() => {
                    setMostrarRecentes(!mostrarRecentes);
                    setBotaoMaisRecentes(!botaoMaisRecentes)
                }}
                className="h-6 flex items-center mx-2 px-1 font-bold text-black text-[16px]"
                >
                +
                </button>
                )}
            </div>

            {mostrarRecentes && (
            <div className="flex flex-row items-center justify-center bg-white w-full h-auto pb-4 px-4 text-[13px]">
                <div className="h-6 flex items-center gap-4">
                    {materias.slice(4).map((materia) => (
                        <a
                        key={materia.topicoId}
                        className="text-black"
                        href="">
                            {materia.topicoNome}
                        </a>
                    ))}
                </div>

                <button
                onClick={() => {
                    setMostrarRecentes(!mostrarRecentes);
                    setBotaoMaisRecentes(!botaoMaisRecentes)
                }}
                className="h-6 flex items-center mx-2 px-1 font-bold text-black text-[16px]"
                >
                -
                </button>
            </div>
            )}

        </div>
    )
}

export default Header