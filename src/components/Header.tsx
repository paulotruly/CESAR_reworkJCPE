import { useEffect, useState } from "react";
import { MenuIcon } from "../assets/MenuIcon"
import { SearchIcon } from "../assets/SearchIcon"

interface Topico {
    id: number;
    nome: string;
}

function Header() {
    //                            definindo estado inicial
    const [topicos, setTopicos] = useState<Topico[]>([]);
    const API_URL = 'http://localhost:8080/topicos';

    const [mostrarCategorias, setMostrarCategorias] = useState<boolean>(false);
    const [botaoMais, setBotaoMais] = useState<boolean>(true);

    // BUSCANDO TÓPICOS DA API
    useEffect(() =>{
        const buscarTopicos = async () => {
            try {
                const resposta = await fetch(API_URL);
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

            


            <div className="group flex flex-row items-center justify-center w-full h-auto text-[13px] bg-[#f0f1f0] p-3 gap-6">

                {topicos.slice(0,4).map((topico) => (
                    <a 
                        key={topico.id}
                        className="text-[#DF1E26] hover:bg-[#DF1E26] hover:text-white" 
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
                className="text-[#DF1E26] text-right font-semibold hover:bg-[#DF1E26] hover:text-white">
                    Mais
                </button>
                )}

            </div>

            {mostrarCategorias && (  
            <div className="group flex flex-row items-center justify-center w-full h-auto text-[13px] bg-[#F1F0F0] p-3 gap-5">
                
                {topicos.slice(4).map((topico) => (
                    <a 
                        key={topico.id}
                        className="text-[#DF1E26] hover:bg-[#DF1E26] hover:text-white" 
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
                className="text-[#DF1E26] text-right font-semibold hover:bg-[#DF1E26] hover:text-white">
                    Menos
                </button>

            </div>
            )}
            




            <div className="flex flex-row items-center bg-white w-full h-auto p-4 text-[13px]">

                <div className="flex flex-row items-center text-[#DF1E26] w-1/3">
                    <p className="font-semibold tracking-tighter text-[14px]"> 11:40  - QUI </p>
                </div>

                <div className="flex items-center justify-between w-2/3">
                    <a className="text-black" href=""> Esportes </a>
                    <a className="text-black" href=""> Cultura </a>
                    <a className="text-black" href=""> Saúde </a>
                    <a className="text-black" href=""> Política </a>
                    <a className="text-black font-extrabold" href=""> + </a>
                </div>

            </div>

        </div>
    )
}

export default Header