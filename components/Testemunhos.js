import Image from "next/image";

const Testemunhos = () => {
    const profile = "/profile.jpg";

    return (
        <div className="hidden mx-auto">
            <h4 className="text-3xl font-bold text-center p-10">Costumer Testimonials</h4>
            
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
            </div>
        </div>
    );
}

export default Testemunhos;