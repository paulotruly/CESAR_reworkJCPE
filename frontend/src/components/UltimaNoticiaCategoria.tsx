import type { Materia, Topico } from '../pages/Home';
import { Link } from 'react-router-dom';

interface UltimaNoticiaProps {
    materia: Materia;
}

function UltimaNoticiaCategoria({ materia }: UltimaNoticiaProps) {

    const { id, imagem, topico } = materia;

    return (
        <Link to={`/noticias/${id}`}>
        <div className="flex flex-col">
            <div className="relative flex flex-col justify-center items-center md:justify-start lg:justify-start">
                <img
                    className="bg-black/40 w-full h-40 overflow-hidden object-cover"
                    src={imagem}
                    alt="" />

                <div className="absolute flex flex-col w-full px-4 mt-2 bottom-6 left-0 z-30">
                    <p className="text-left text-xl text-white font-bold leading-tight mb-2"> {topico.nome} </p>
                </div>

                <div className="absolute bg-linear-to-t from-black to-transparent w-full h-full bottom-0 top-0"> </div>
            </div>

            <div className="flex flex-col justify-center items-center my-3">
                <p className="text-[11px] text-gray-400"> Publicidade </p>
                <div className="h-10 w-100 mx-3 bg-yellow-100"></div>
            </div>
        </div>
        </Link>
    )
}

export default UltimaNoticiaCategoria