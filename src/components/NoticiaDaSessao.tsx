function NoticiaDaSessao() {

    return (
        <div className="flex flex-col h-auto">
            <div className="relative flex flex-col h-30 w-full rounded-lg bg-black/15">
            </div>

            <div className="flex flex-col w-auto my-2 p-1">
                <p className="text-left text-[#DF1E26] font-semibold text-[10px] mb-1"> CATEGORIA </p>
                <p className="text-left text-[16px] font-semibold leading-tight tracking-tight text-black"> Título da notícia por extenso </p>
            </div>
        </div>
    )
}

export default NoticiaDaSessao