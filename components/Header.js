import Image from "next/image";

const Header = () => {
    const logo = "/logo_pa.png";

    return (
<<<<<<< HEAD


        <header className="pl-24 pt-10">
            <Image src={logo} width={50} height={50}></Image>

=======
        <header className="md:pl-16 pt-10">
            <Image src={logo} width={50} height={50}></Image>
>>>>>>> c9595bc9aaf188258b6b3099a6ca487f36b7931a
        </header>
    )
};

export default Header;