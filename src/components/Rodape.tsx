import FooterInfos from "./FooterInfos"
import FooterProdutos from "./FooterProdutos"

function Rodape() {

    return (
        <div className="flex flex-col">
            <FooterProdutos></FooterProdutos>
            <FooterInfos></FooterInfos>
        </div>
    )
}

export default Rodape