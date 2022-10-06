import Image from "next/image";

const Top = () => {

    const laptop = "/computer.png";

    return (
        <div className="p-20">
            <div className="flex justify-between">
                <div className="md:w-1/2">
                <h1 className="text-4xl w-[25rem]"><strong>A Partner that helps your business compete on digital channels</strong></h1> 

                <p className="mt-4 mb-4 w-96 text-justify font-medium">
                   To keep up with audience, more and more companies are betting on the creation of digital customer relationship channels 
                </p>
                <p className="mb-4 w-96 text-justify font-medium" >
                    The online presence is much more than having a website on the internet:
                     it is necessary to build authority and credibility of a company, becoming a reference in your area
                </p>
                <p className="mb-4 w-96 text-justify font-medium" >
                    Yellow Pages can help you create your Website through packages that meet your needs.
                </p>

                </div>

                <Image src={laptop} width={612} height={612} className="w-1/2"/>

            </div>

        </div>
    )

}

export default Top;