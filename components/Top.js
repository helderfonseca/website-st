import Image from "next/image";

const Top = () => {

    const laptop = "/computer.png";

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse md:gap-16 gap-8">
                <div className="md:w-1/2 w-full md:mt-24">
                    <h1 className="text-4xl md:w-[25rem]"><strong>A Partner that helps your business compete on digital channels</strong></h1> 

                    <p className="mt-4 mb-4 md:w-96 text-justify font-medium">
                    To keep up with audience, more and more companies are betting on the creation of digital customer relationship channels 
                    </p>
                    <p className="mb-4 md:w-96 text-justify font-medium" >
                        The online presence is much more than having a website on the internet:
                        it is necessary to build authority and credibility of a company, becoming a reference in your area
                    </p>
                    <p className="mb-4 md:w-96 text-justify font-medium" >
                        Yellow Pages can help you create your Website through packages that meet your needs.
                    </p>
                </div>
                
                <Image src={laptop} width={1090} height={1090} alt="computer" className="objecct-cover md:w-1/2 w-full" />
            </div>
        </div>
    )

}

export default Top;