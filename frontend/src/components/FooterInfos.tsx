function FooterInfos() {

    return (
        <div className="bg-[#DF1E26] flex flex-col justify-between items-center w-full h-auto py-6">
            
            <img
                className="w-auto h-16 mb-2 mt-2"
                src="https://blogdomagno.com.br/wp-content/uploads/2024/07/1_logo_jc-27530572.png"
                alt=""
            />

            <div className="flex flex-col text-white font-semibold p-2 gap-2 text-center">
                <a href=""> Política </a>
                <a href=""> Mundo </a>
                <a href=""> Economia </a>
                <a href=""> Ciência e Tecnologia </a>
                <a href=""> Negócios </a>
            </div>

            <div className="grid grid-cols-2 w-full h-auto mt-6">
                <div className="flex flex-col gap-1 py-6 justify-center items-center text-white font-light">
                    <a href=""> Política de privicidade </a>
                    <a href=""> Data policy </a>
                    <a href=""> Acessibilidade </a>
                </div>

                <div className="flex flex-col gap-1 py-6 justify-center items-center text-white font-light">
                    <a href=""> Termos de serviço </a>
                    <a href=""> Copyright police </a>
                    <a href=""> Ajuda </a>
                </div>

                <div className="flex justify-center items-center col-span-2 text-white font-light mt-1">
                    <p> © 2025 JCPE. Todos os direitos reservados. </p>
                </div>
            </div>

        </div>
    )
}

export default FooterInfos