import Image from "next/image";

const Header = () => {
    const logo = "/logo_pa.png";

    return (
        <header className="md:pl-8 pt-10">
            <Image src={logo} width={50} height={50} alt="Logo"></Image>
        </header>
    )
};

export default Header;