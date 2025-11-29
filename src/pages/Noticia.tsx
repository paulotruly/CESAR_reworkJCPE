import { ChatBubbleIcon } from "../assets/ChatBubbleIcon"
import { SaveIcon } from "../assets/SaveIcon"
import { ShareIcon } from "../assets/ShareIcon"
import Subtopicos from "../components/Subtopicos";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Materia } from "./Home";

const API_URL_BASE = 'http://localhost:8080/materias';

function Noticia() {

    const { id } = useParams<{id: string}>();

    const [materiaDetalhe, setMateriaDetalhe] = useState<Materia | null>(null);

    useEffect(() => {
        if (!id) return; 

        const buscarMateria = async () => {
            try {
                const resposta = await fetch(`${API_URL_BASE}/${id}`);
                
                if (!resposta.ok) {
                    throw new Error(`Falha ao buscar notícia. Status: ${resposta.status}`);
                }
                
                const dados: Materia = await resposta.json();
                
                setMateriaDetalhe(dados); 
            } catch (e) {
                console.error("Erro na busca:", e);
            } 
        };

        buscarMateria();
    }, [id]);

    return (
        <div className="relative">

            <div className="absolute top-14 right-2 flex flex-col items-center gap-2 z-30">
                    <div className="bg-[#F5F5F5] rounded-full flex justify-center items-center p-2">
                        <ChatBubbleIcon></ChatBubbleIcon>
                    </div>

                    <div className="bg-[#F5F5F5] rounded-full flex justify-center items-center p-2">
                        <ShareIcon></ShareIcon>
                    </div>

                    <div className="bg-[#F5F5F5] rounded-full flex justify-center items-center p-2">
                        <SaveIcon></SaveIcon>
                    </div>
            </div>

            {/* BARRA DA CATEGORIA */}
            <div className="bg-white w-full h-10 relative flex flex-row items-center pl-3 p-1">
                <p className="before:content-['NOTÍCIA_'] before:text-red-500 font-semibold text-sm">| {materiaDetalhe?.topico.nome}</p>
            </div>

            {/* DIV DA IMAGEM PRINCIPAL  */}
            <div className="h-[250px] w-full bg-green-400 overflow-hidden relative flex items-center justify-center">
                <img src={materiaDetalhe?.imagem} alt=""
                     className="object-cover w-full h-full"/>
                {/* publicidade */}
                <div className="absolute bottom-4 bg-gray-200 w-2/3 h-8 flex justify-center items-center text-gray-400 text-sm"> publicidade </div>
            </div>

            <div className="w-full h-auto flex flex-col">
                {/* TÍTULO DA MATÉRIA */}
                <h3 className="text-xl font-bold mx-6 mt-4 mb-3 text-justify leading-tight">
                    {materiaDetalhe?.titulo}
                </h3>

                {/* INFORMAÇÕES E CRÉDITOS */}
                <div className="flex flex-row justify-between items-center gap-8 text-[12px] mt-2 mb-6 mx-6 text-gray-500">
                    <p>por {materiaDetalhe?.autor}</p>
                    <p>30 min atrás</p>
                    <p>2 min de leitura</p>
                </div>

                <div className="text-left pl-2 mx-7 mb-4 text-sm border-l-2 border-red-500 font-light">
                    <p>
                        {materiaDetalhe?.legenda}
                    </p>
                </div>
            </div>

            {/* CONTEÚDO */}
            <div className="relative mx-6 text-md mt-4 mb-6">
                <span className="float-right h-[200px] w-[150px] ml-4 mb-5 bg-gray-200 text-gray-400 flex justify-center items-center">
                    publicidade
                </span>

                <p className="text-left text-black text-md">
                    {materiaDetalhe?.conteudo.textoPrincipal}
                </p>

                {/* SUBTÓPICOS */}
                {materiaDetalhe?.conteudo.subtitulos.map((sub, index) => (
                    <Subtopicos
                    key={index}
                    titulo={sub.titulo}
                    texto={sub.texto}
                    >
                    </Subtopicos>
                ))}
            </div>
            
        </div>
    )
}

export default Noticia
