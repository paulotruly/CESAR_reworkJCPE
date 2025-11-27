import { MenuIcon } from "../assets/MenuIcon"
import { SearchIcon } from "../assets/SearchIcon"

function Header() {

    return (
        <div>
            <div className="flex flex-row items-center h-16 p-4 bg-[#DF1E26]">
                <img
                    className="mr-auto w-auto h-[45px]"
                    src="https://jc.uol.com.br/img/edicao.png"
                    alt=""
                />

                <img
                    className="ml-6 w-auto h-10"
                    src="https://blogdomagno.com.br/wp-content/uploads/2024/07/1_logo_jc-27530572.png"
                    alt=""
                />

                <nav className="ml-auto flex flex-row gap-4">
                    <a href="">
                        <MenuIcon width={25}></MenuIcon>
                    </a>
                    <a href="">
                        <SearchIcon width={25}></SearchIcon>
                    </a>
                </nav>
            </div>

            <div className="group flex flex-row items-center justify-center w-full h-auto text-[13px] bg-[#F1F0F0] gap-5">
                <a className="text-[#DF1E26] hover:bg-[#DF1E26] hover:text-white" href=""> Política </a>
                <a className="text-[#DF1E16] hover:bg-[#DF1E26] hover:text-white" href=""> Mundo </a>
                <a className="text-[#DF1E16] hover:bg-[#DF1E26] hover:text-white" href=""> Economia </a>
                <a className="text-[#DF1E16] hover:bg-[#DF1E26] hover:text-white" href=""> Ciência e Tecnologia </a>

                <button className="text-[#DF1E26] text-right p-2 font-semibold hover:bg-[#DF1E26] hover:text-white"> Mais </button>
            </div>

            <div className="flex flex-row items-center bg-white w-full h-auto p-4 text-[13px]">

                <div className="flex flex-row items-center text-[#DF1E26] w-1/3">
                    <p className="font-semibold tracking-tighter text-[14px]"> 11:40  - QUI </p>
                </div>

                <div className="flex items-center justify-between w-2/3">
                    <a className="text-black" href=""> Esportes </a>
                    <a className="text-black" href=""> Cultura </a>
                    <a className="text-black" href=""> Saúde </a>
                    <a className="text-black" href=""> Política </a>
                    <a className="text-black font-extrabold" href=""> + </a>
                </div>

            </div>

        </div>
    )
}

export default Header