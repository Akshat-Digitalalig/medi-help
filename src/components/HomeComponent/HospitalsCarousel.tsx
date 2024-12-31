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
import { hospitalData } from "@/lib/constant/Hospital"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";


export default function HospitalsCarousel() {
    const router = useRouter()
    const [autoplay] = React.useState(() => Autoplay({ delay: 3000, stopOnInteraction: false }));

    const reviews = hospitalData.slice(1, 7)

    return (
        <div className="flex justify-center my-4 pb-4 mt-6 "> 
            <Carousel
                 plugins={[autoplay]}
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="w-full max-w-6xl"
            >
                <CarouselContent>
                    {reviews.map((item, index) => (
                        <CarouselItem key={index} className="basis-80 md:basis-1/4">
                            
                                <Card onClick={() => router.push(`/hospitals/${item.id}`)} className=" h-full cursor-pointer rounded ">
                                    <CardContent className="flex flex-col items-center justify-center p-4">
                                        <div className="flex items-center gap-x-4">
											<Image src={item.mainImage} alt={item.name} className='h-40 w-80 rounded-xl object-cover' width={400} height={400} />
                                            
                                           
                                        </div>
										<h1 className="text-base leading-tight text-center mt-2 font-semibold">{item.name}</h1>

                                        <div className="flex mt-2">
                                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                                <Star key={starIndex} className="h-4 w-4 text-yellow-500" />
                                            ))}
                                        </div>
                                        <p className="mt-2 text-center  inline-block bg-blue-100 text-blue-800 mx-1 text-xs  font-semibold px-2 py-1 rounded ">{item.address.city}, {item.address.country} </p>
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
