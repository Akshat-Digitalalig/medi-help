"use client";
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
// import { Star } from "lucide-react" 
import { doctors } from "@/lib/constant/Doctors";
import Image from "next/image";
// import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";


export default  function DoctorsCarousel() {
	// const [autoplay] = React.useState(() => Autoplay({ delay: 3000, stopOnInteraction: false }));
    const reviews = doctors.slice(1, 7)

    return (
        <div className="flex justify-center my-4 pb-4 mt-6 "> 
            <Carousel
			//  plugins={[autoplay]}
                opts={{
                    align: "center",
					loop: true,
                }}
                className="w-full max-w-6xl"
				// plugins={[
				// 	Autoplay({
				// 	  delay: 2000,
				// 	}),
				//   ]}
            >
                <CarouselContent>
                    {reviews.map((item, index) => (
                        <CarouselItem key={index} className="basis-80 md:basis-1/4">
                            
                                <Card className=" rounded h-full cursor-pointer ">
                                    <CardContent className="flex flex-col items-center justify-evenly p-6">
                                        <div className="flex items-center gap-x-4">
											<Image src={item.image} alt={item.name} className='rounded-full h-32 w-32 object-contain' width={100} height={100} />
                                            
                                           
                                        </div>
										<h1 className="text-base leading-none mt-2  text-center font-semibold">{item.name}</h1>
{/* 
                                        <div className="flex mt-2">
                                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                                <Star key={starIndex} className="h-4 w-4 text-yellow-500" />
                                            ))}
                                        </div> */}
                                        <p className="mt-2 text-center  inline-block bg-blue-100 text-blue-800 mx-1 text-xs  font-semibold px-2 py-1 rounded ">{item.designation}</p>

                                        <Link href={`/doctors/${item.id}`} className="items-center mt-2 justify-center mx-2 leading-none text-xs font-semibold bg-myred gap-1 px-2 md:px-4 py-2 cursor-pointer text-white  rounded-md hover:bg-white hover:text-myred hover:border-myred border-2 duration-300" >Get Consults</Link>
                                    </CardContent>
                                </Card>
                         
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="md:flex hidden" />
                <CarouselNext  className="md:flex hidden"/>
            </Carousel>
        </div>
    )
}
