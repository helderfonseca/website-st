import Image from "next/image";

const Top = () => {

    const laptop = "/black-friday.png";

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse md:gap-16 gap-8 text-[#f8f8ff]">
                <div className="md:w-1/2 w-full md:mt-24">
                    <h1 className="text-4xl md:w-[25rem]"><strong>Parceiro que ajuda o seu negócio a competir nos canais digitais </strong></h1> 
                    <p className="mt-4 mb-4 md:w-96 text-3xl font-light italic">
                       Casa arrumada tem outra pinta! Aproveite e <span className="font-bold">tenha o seu Web Site.</span>
                    </p>
                    <p className="mt-4 mb-4 md:w-96 text-justify font-medium">
                        Para acompanhar seu público, cada vez mais empresas estão apostando na criação de canais digitais de relacionamento com o cliente.
                    </p>
                    <p className="mb-4 md:w-96 text-justify font-medium" >
                        A presença online é muito mais do que ter um website na internet: é preciso construir autoridade e credibilidade de uma empresa, tornando-se referência na área.
                    </p>
                    <p className="mb-4 md:w-96 text-justify font-medium" >
                        As Páginas Amarelas podem ajudá-lo na criação do seu website, através de pacotes que vão ao encontro das suas necessidades. 
                    </p>
                </div>
                
                <Image src={laptop} width={1090} height={1000} alt="Black Friday" className="object-contain md:w-1/2 w-full" />
            </div>
        </div>
    )

}

export default Top;