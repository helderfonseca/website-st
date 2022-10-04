import Image from "next/image";

const Top = () => {

    const laptop = "/computer.png";

    return (
        <div className="p-20">
            <div className="flex justify-between">
                <div>
                <h1 className="text-4xl w-[25rem] "><strong>Parceiro que ajuda o seu negócio a competir nos canais digitais</strong></h1> 

                <p className="mt-4 mb-4 w-96 text-justify font-medium">
                    Para acompanhar seu público, cada vez mais empresas
                    estão apostando na criação de canais digitais de relacionamento
                    com o cliente.
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

                <Image src={laptop} width={612} height={612} className=""/>
            </div>

        </div>
    )

}

export default Top;