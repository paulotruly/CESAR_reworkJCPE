function UltimaNoticia() {

    return (
        <div className="relative flex flex-col justify-center items-center md:justify-start lg:justify-start">
            <img
                className="bg-black/40 w-full h-60 overflow-hidden object-contain"
                src=""
                alt="" />

            <div className="absolute top-5 left-4 text-white text-[10px] z-20">
                <p> DESTAQUES </p>
            </div>

            <div className="absolute flex flex-col w-full px-4 mt-2 bottom-6 left-0 z-30">
                <div className="w-fit inline-block bg-[#DF1E26] px-2 py-1 rounded-lg mb-1">
                    <p className="text-white font-semibold text-[10px]"> CATEGORIA </p>
                </div>
                <p className="text-left text-2xl text-white font-bold"> Título da matéria </p>
                <p className="text-left mt-1 text-white font-normal text-[11px]"> Descrição curta da matéria </p>

                <div className="flex justify-center items-center text-sm w-full bg-red-100 text-red-300 h-10 mt-4"> publicidade </div>
            </div>

            <div className="absolute bg-gradient-to-t from-black to-transparent w-full h-full bottom-0 top-0"> </div>

        </div>
    )
}

export default UltimaNoticia