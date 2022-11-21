import Image from "next/image";
import Form from "./Form";
import laptop from '/public/black-friday.png'

const Top = () => {

    //const laptop = "/black-friday.png";

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse gap-8 md:gap-18 mt-6 text-[#f8f8ff] justify-center items-center">
                <div className="md:w-1/2 w-full self-center pb-10 md:pb-0">
                    {/*<h1 className="text-4xl md:w-[25rem]"><strong>Parceiro que ajuda o seu negócio a competir nos canais digitais </strong></h1> 
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
                    </p>*/}
                    <Form />
                </div>
                
                <div className="md:w-1/2 w-full self-center">    
                    <Image src={laptop} alt="Black Friday" className="object-contain" layout="responsive" priority />
                </div>    
            </div>
        </div>
    )

}

export default Top;