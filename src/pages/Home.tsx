import UltimaNoticia from "../components/UltimaNoticia"
import SessaoNoticias from "../components/SessaoNoticias"

function Home() {

    return (
        <div className="min-h-screen">
            <UltimaNoticia></UltimaNoticia>
            <SessaoNoticias></SessaoNoticias>
        </div>
    )
}

export default Home