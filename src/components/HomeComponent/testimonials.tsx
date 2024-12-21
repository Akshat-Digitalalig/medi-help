import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react" // Assuming you have a Star icon component

export default function Testimonials() {
    const reviews = [
        {
            name: "John Doe",
            review: "This service was exceptional! I would recommend it to anyone looking for quality.",
        },
        {
            name: "Jane Smith",
            review: "Fantastic experience! The team was very professional and attentive.",
        },
        {
            name: "Alice Johnson",
            review: "Amazing quality and great support. Will definitely return for more!",
        },
        {
            name: "Bob Brown",
            review: "A wonderful experience from start to finish. Highly recommend!",
        },
        {
            name: "Charlie Green",
            review: "Very pleased with my purchase. Excellent customer service!",
        },
    ];

    return (
        <div className="flex justify-center "> 
            <Carousel
                opts={{
                    align: "center",
                }}
                className="w-full max-w-6xl"
            >
                <CarouselContent>
                    {reviews.map((item, index) => (
                        <CarouselItem key={index} className="basis-80 md:basis-1/3 ">
                            
                                <Card className="">
                                    <CardContent className="flex flex-col items-center justify-center p-6">
                                        <div className="flex items-center gap-x-4">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <h1 className="text-lg font-semibold">{item.name}</h1>
                                        </div>
                                        <div className="flex mt-2">
                                            {Array.from({ length: 5 }).map((_, starIndex) => (
                                                <Star key={starIndex} className="h-4 w-4 text-yellow-500" />
                                            ))}
                                        </div>
                                        <p className="mt-2 text-center text-sm text-gray-700">{item.review}</p>
                                    </CardContent>
                                </Card>
                         
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="md:block hidden" />
                <CarouselNext  className="md:block hidden"/>
            </Carousel>
        </div>
    )
}
