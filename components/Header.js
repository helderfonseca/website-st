import Image from "next/image";

const Header = () => {
    const logo = "/logo_pa.png";

    return (


        <header className="pl-24 pt-10">
            <Image src={logo} width={50} height={50}></Image>

        </header>
    )
};

export default Header;