import Image from 'next/image'
import React from 'react'
import { AboutPageData } from "@/lib/constant/AboutPageData"
import { Mail, MapPin, Phone } from 'lucide-react'

export default function page() {

    return (
        <>
            <section className="min-h-80 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden  bg-gray-100 py-16 shadow-lg md:py-20 ">

                <Image src={AboutPageData.mainImage} height={1200} width={1200} loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full bg-top brightness-50 w-full object-cover object-center" />

                <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-[#4288fe] to-[#6817f7] mix-blend-multiply"></div>

                <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
                    <p className="mb-4 text-center  text-blue-500 text-3xl font-semibold md:mb-4">About Us</p>
                    <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-6 md:text-6xl">{AboutPageData.title}</h1>

                    <div className="flex w-full flex-col items-center justify-center">
                    <div className='flex gap-x-2 mt-2 items-center mb-6'>
                                <Phone size={34} className="text-white" />
                                <h1 className='text-white font-bold text-4xl'>{AboutPageData.contact.phone}</h1>
                            </div>
                        <div className="flex items-center gap-4  justify-center">
                            {AboutPageData.social.map((item, index) => (
                                <div key={index} className="social-button">
                                    <button className="relative w-12 h-12 rounded-full group">
                                        <div
                                            className="floater w-full h-full absolute top-0 left-0 bg-blue-600 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                                        ></div>
                                        <div
                                            className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-600 text-white rounded-full"
                                        >
                                            {item.icon}
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                            
                           
                            <div className='flex gap-x-2 mt-2 items-center'>
                                <Mail size={24} className="text-white" />
                                <h1 className='text-white font-bold text-xl'>{AboutPageData.contact.email}</h1>
                            </div>
                            <div className='flex gap-x-2 mt-2 items-center'>
                                <MapPin size={24} className="text-white" />
                                <h1 className='text-white font-bold text-xl'>Address :{AboutPageData.contact.address}</h1>
                            </div>
                    </div>
                </div>
            </section>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                        <div>
                            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                                <Image src="https://images.pexels.com/photos/7213605/pexels-photo-7213605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={900} width={700} loading="lazy" alt="Photo by Martin Sanchez" className="h-full w-full object-cover object-center" />
                            </div>
                        </div>

                        <div className="md:pt-8">
                            <p className="text-center font-bold text-indigo-500 md:text-left">Who we are</p>

                            {AboutPageData.about.map((item, index) => (
                                <div className='' key={index}>
                                    <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">{item.title}</h1>
                                    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                                        {item.content}
                                    </p>
                                </div>
                            ))}
                          </div>
                    </div>
                </div>
            </div>
        </>
    )
}
