import Image from "next/image";

const Testemunhos = () => {
    const profile = "/profile.jpg";

    return (
<<<<<<< HEAD
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
=======
        <div className="mx-auto">
            <h4 className="text-3xl font-bold text-center p-10">Testemunho de clientes</h4>
            
            <div className="flex md:flex-row flex-col justify-center items-center gap-8 mt-8 pl-20">

                <div className="flex flex-row gap-4">
                    <div className="">
                        <Image src={profile} width={150} height={150} alt="Profile" className="rounded border-[#FBED04] border-4"/> 
                    </div>
                    <div className="md:self-start">
                        <p className="font-semibold">Maria Sousa</p>
                        <p className="text-gray-400 text-xs">CEO da blast enterprise</p>
                        <p className="text-xs w-2/3 mt-2 pt-1">client and server successfully in 105 ms. client and server successfully in 105 ms</p>
                    </div>
                </div> 


                <div className="flex flex-row gap-4">
                    <div className="">
                        <Image src={profile} width={150} height={150} alt="Profile" className="rounded border-[#FBED04] border-4"/> 
                    </div>
                    <div className="md:self-start">
                        <p className="font-semibold">Maria Sousa</p>
                        <p className="text-gray-400 text-xs">CEO da blast enterprise</p>
                        <p className="text-xs w-2/3 mt-2 pt-1">client and server successfully in 105 ms. client and server successfully in 105 ms</p>
                    </div>
                </div> 


                <div className="flex flex-row gap-4">
                    <div className="">
                        <Image src={profile} width={150} height={150} alt="Profile" className="rounded border-[#FBED04] border-4"/> 
                    </div>
                    <div className="md:self-start">
                        <p className="font-semibold">Maria Sousa</p>
                        <p className="text-gray-400 text-xs">CEO da blast enterprise</p>
                        <p className="text-xs w-2/3 mt-2 pt-1">client and server successfully in 105 ms. client and server successfully in 105 ms</p>
                    </div>
                </div> 
>>>>>>> c9595bc9aaf188258b6b3099a6ca487f36b7931a
            </div>
        </div>
    );
}

export default Testemunhos;