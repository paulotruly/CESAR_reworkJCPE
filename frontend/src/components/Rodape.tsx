import FooterInfos from "./FooterInfos"
import FooterProdutos from "./FooterProdutos"

function Rodape() {

    return (
        <div className="flex flex-col">

            <div className="flex flex-row items-center justify-center mt-3">
                <p className="font-semibold tracking-tight text-lg"> Nossos produtos </p>
                <div className="bg-[#DF1E26] w-[240px] h-[0.5px] ml-4"> </div>
            </div>

            <FooterProdutos></FooterProdutos>
            <FooterInfos></FooterInfos>
        </div>
    )
}

export default Rodape