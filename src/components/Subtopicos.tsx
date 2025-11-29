interface SubtopicosProps {
    titulo: string;
    texto: string;
}

function Subtopicos({titulo, texto}: SubtopicosProps) {

    return (
       <div className="flex flex-col my-4">
            <h5 className="text-lg font-bold text-black text-left mb-1"> {titulo} </h5>
            <p className="text-left"> {texto} </p>
        </div>
    )
}

export default Subtopicos