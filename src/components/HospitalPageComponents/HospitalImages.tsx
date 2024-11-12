import * as React from "react"
import { Card } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"

interface HospitalImageProps {
    ImgArray: string[]
}


export function HospitalImage({ ImgArray }: HospitalImageProps) {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-4xl"
        >
            <CarouselContent>
                {ImgArray.map((str, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <Card>
                            <Image src={str} width={900} height={900} className="rounded-md" alt="Image" />
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>

        </Carousel>
    )
}
