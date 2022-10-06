import Image from "next/image";

const Top = () => {

    const laptop = "/computer.png";

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse gap-8 md:mt-2">
                <div className="md:mt-[4rem] md:w-1/2 w-full md:pt-6">
                    <h1 className="text-4xl md:w-[25rem] font-bold">Parceiro que ajuda o seu negócio a competir nos canais digitais</h1> 
                    <p className="mt-4 mb-4 md:w-96 text-justify font-medium">
                        Para acompanhar seu público, cada vez mais empresas
                        estão apostando na criação de canais digitais de relacionamento
                        com o cliente.
                    </p>
                    <p className="mb-4 md:w-96 text-justify font-medium" >
                        A presença online é muito mais do que ter um website na internet:
                        É preciso construir autoridade e credibilidade de uma empresa
                        tornando-se referência na área.
                    </p>
                    <p className="mb-4 md:w-96 text-justify font-medium" >
                        As Páginas Amarelas podem ajudá-lo na criação do seu website através
                        de pacotes que vão ao encontro das suas necessidades.
                    </p>
                </div>
                <div className="md:w-1/2 w-full">
                    <Image src={laptop} width={1090} height={1060} className="object-contain"/>
                </div>
            </div>

        </div>
    )

}

export default Top;