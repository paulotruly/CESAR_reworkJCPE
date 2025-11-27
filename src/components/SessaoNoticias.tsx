import NoticiaDaSessao from "./NoticiaDaSessao"

function SessaoNoticias() {

    return (
        <div className="flex flex-col justify-center items-center">

            <div className="flex flex-row items-center justify-center m-4">
                <p className="font-semibold tracking-tight text-lg"> Últimas notícias </p>
                <div className="bg-[#DF1E26] w-[240px] h-[0.5px] ml-4"> </div>
            </div>

            <div className="grid grid-cols-2 gap-4 px-4">
                <NoticiaDaSessao></NoticiaDaSessao>
                <NoticiaDaSessao></NoticiaDaSessao>
                <NoticiaDaSessao></NoticiaDaSessao>
                <NoticiaDaSessao></NoticiaDaSessao>
            </div>

            <button className="my-3 px-5 py-1 rounded-full bg-[#DF1E26] text-white text-md"> VER MAIS </button>
        </div>
    )
}

export default SessaoNoticias