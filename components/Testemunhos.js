import Image from "next/image";

const Testemunhos = () => {
    const profile = "/profile.jpg";

    return (
        <div>
            <strong><h4 className="text-3xl text-center p-20">Testemunho de clientes</h4></strong>
            
        <div className="flex justify-center pb-[5rem]">

            <div className="rounded-lg ">
                <Image src={profile} width={100} height={100} className="rounded-lg"/> 
            </div>
            <div className="ml-4 mr-10">
                <p className="font-semibold">José Manel</p>
                <p className="italic text-gray-400 font-semibold">CEO da blast enterprise</p>
                <p className="w-[18rem] mt-2 font-medium">client and server successfully in 105 ms. client and server successfully in 105 ms</p>
            </div>


            <div className="rounded-lg">
                <Image src={profile} width={100} height={100} className="rounded-lg" /> 
            </div>
            <div className="ml-4 mr-10  ">
                <p className="font-semibold">Maria Joana</p>
                <p className="italic text-gray-400 font-semibold">Diretora adjunto da Fuel Ink.</p>
                <p className="w-[18rem] mt-2 font-medium">client and server successfully in 105 ms. client and server successfully in 105 ms</p>
            </div>


            <div className="rounded-lg">
                <Image src={profile} width={100} height={100} className="rounded-lg"/> 
            </div>
            <div className="ml-4">
                <p className="font-semibold">Fuel Helas</p>
                <p className="italic text-gray-400 font-semibold">PCA da Sitie Corp</p>
                <p className="w-[18rem] mt-2 font-medium">client and server successfully in 105 ms. client and server successfully in 105 ms</p>
            </div>
            </div>
        </div>
    );
}

export default Testemunhos;