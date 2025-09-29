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
import Image from "next/image";

export default function Testimonials() {
    const videoList = [
        {
            src:'https://res.cloudinary.com/dgt9qochj/video/upload/v1744370829/e3veivwkgc4blw5l2tjq.mp4',
            poster: '/poster/poster1.jpg',
            name: "Hillary Guuillianne Herma",
            country: "Seychelles",
            flag:"/icons/seychelles.png"
        },
        {
            src:'https://res.cloudinary.com/dgt9qochj/video/upload/v1744370830/iorcjy7kgulrs5ixdb0u.mp4',
            poster: '/poster/poster2.jpg',
            name: "Aurelina Mica",
            country: "Seychelles",
            flag:"/icons/seychelles.png"
        },
        {
            src:'https://res.cloudinary.com/dgt9qochj/video/upload/v1745171460/WhatsApp_Video_2025-04-19_at_17.41.20_93fa7607_q9trny.mp4',
            poster: '/poster/poster3.jpg',
            name: "Adenike Bamidele Kareem",
            country: "Nigeria",
            flag:"/icons/nigeria.png"
        },
        {
            src:'https://res.cloudinary.com/dgt9qochj/video/upload/v1744370835/lmuj2hyalnpdeiimfycl.mp4',
            poster: '/poster/poster4.jpg',
            name: "Omowunim Omolabake Eyide",
            country: "Nigeria",
            flag:"/icons/nigeria.png"
        },
    ];
    const reviews = [
        {
            name: "Amina Yusuf, Nigeria",
            review: "From visa support to doctor appointments, everything was perfectly arranged. I’m so thankful for their team!",
            rating: 4,
            img: 'https://theforumpractice.com/wp-content/uploads/2020/08/placeholder-female.png'
        },
        {
            name: "Dmitry Ivanov, Russia",
            review: "The translator helped me understand everything, and the hospital was excellent. MediHelp truly cared.",
            rating: 5,
            img: 'https://www.gavinpublishers.com/admin/assets/editors_image/1518861448picture510058182.jpg'
        },
        {
            name: "Shivani Deshmukh, Nagpur",
            review: "We were worried about hidden costs, but MediHelp was upfront and clear. Great support throughout my treatment.",
            rating: 4,
            img: 'https://theforumpractice.com/wp-content/uploads/2020/08/placeholder-female.png'
        },
        {
            name: "Rajiv Perera, Sri Lanka",
            review: "I had a heart procedure in India through MediHelp. The doctors were amazing, and the process was well-managed.",
            rating: 3,
            img: 'https://www.gavinpublishers.com/admin/assets/editors_image/1518861448picture510058182.jpg'
        },
        {
            name: "Ramesh Iyer, Chennai, India",
            review: "I needed knee replacement surgery in Chennai. MediHelp got me the best doctor and made the process simple and affordable.",
            rating: 4,
            img: 'https://www.gavinpublishers.com/admin/assets/editors_image/1518861448picture510058182.jpg'
        }
    ];

    return (
        <>
            <div className="flex justify-center">
                <Carousel
                    opts={{
                        align: "center",
                    }}
                    className="w-full max-w-6xl relative"
                >
                    <CarouselContent>
                        {reviews.map((item, index) => (
                            <CarouselItem key={index} className="basis-80 md:basis-1/3 ">

                                <Card className="">
                                    <CardContent className="flex flex-col items-center justify-center p-6">
                                        <div className="flex items-center gap-x-4">
                                            <Avatar>
                                                <AvatarImage src={item.img} />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <h1 className="text-lg font-semibold">{item.name}</h1>
                                        </div>
                                        <div className="flex mt-1">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <span key={index} className="text-yellow-500 text-xl">
                                                    {index < item.rating ? '★' : '☆'}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="mt-1 text-center text-sm text-gray-700">{item.review}</p>
                                    </CardContent>
                                </Card>

                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="md:block hidden" />
                    <CarouselNext className="md:block hidden" />
                </Carousel>
            </div>

            <section className="py-12 px-[2rem] m:px-[7rem] lg:px-[10rem] xl:px-[12rem] mt-5">
                <h2 className="text-xl lg:text-3xl font-bold text-center mb-8">Real Stories from Our Patients</h2>
                <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
                    {videoList.map((item, index) => (
                        <div key={index} className="w-full rounded-lg overflow-hidden shadow-md">
                            <video
                                controlsList="nodownload"
                                src={item.src}
                                poster={item.poster}
                                controls
                                className="w-full aspect-[3/4] object-cover"
                                preload="metadata"
                            />
                            <div className="mt-1">
                                <p className="text-center font-semibold">{item.name}</p>
                                <div className="flex items-center justify-center gap-2 mt-2 mb-2">
                                    <Image src={item.flag} height={20} width={20} alt={item.country} />
                                    <p className="text-center">{item.country}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
