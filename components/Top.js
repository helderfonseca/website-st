import Image from "next/image";

const Top = () => {

    const laptop = "/computer.png";

    return (
        <div className="p-20">
            <div className="flex justify-between">
                <div className="md:w-1/2">
                <h1 className="text-4xl w-[25rem]"><strong>Partner that helps your business compete on digital channels</strong></h1> 

                <p className="mt-4 mb-4 w-96 text-justify font-medium">
                   To keep up with their audience, more and more companies are betting on creating digital customer relationship channels. 
                </p>
                <p className="mb-4 w-96 text-justify font-medium" >
                    A presença online é muito mais do que ter um website na internet:
                    É preciso construir autoridade e credibilidade de uma empresa
                    tornando-se referência na área.
                </p>
                <p className="mb-4 w-96 text-justify font-medium" >
                    As Páginas Amarelas podem ajudá-lo na criação do seu website através
                    de pacotes que vão ao encontro das suas necessidades.
                </p>

                </div>

                <Image src={laptop} width={612} height={612} className="w-1/2"/>

            </div>

        </div>
    )

}

export default Top;