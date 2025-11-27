import NoticiaDaSessao from "./NoticiaDaSessao"

function SessaoNoticias() {

    return (
        <div className="flex flex-col">

            <div className="flex flex-row items-center justify-center m-4">
                <p className="font-semibold tracking-tight text-lg"> Últimas notícias </p>
                <div className="bg-[#DF1E26] w-[240px] h-[0.5px] ml-4"> </div>
            </div>

            <div className="grid grid-cols-2 gap-4 px-4">
                <NoticiaDaSessao></NoticiaDaSessao>
                <NoticiaDaSessao></NoticiaDaSessao>
                <NoticiaDaSessao></NoticiaDaSessao>
                <div className="flex justify-center items-center bg-blue-100 text-blue-300 rounded-lg"> publicidade </div>
                <NoticiaDaSessao></NoticiaDaSessao>
                <NoticiaDaSessao></NoticiaDaSessao>
                <NoticiaDaSessao></NoticiaDaSessao>
                <NoticiaDaSessao></NoticiaDaSessao>
            </div>
        </div>
    )
}

export default SessaoNoticias