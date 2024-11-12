"use client"
import React from 'react'
import { doctors } from "@/lib/constant/Doctors"
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useParams } from 'next/navigation'


export default function Page() {
    const { slug } = useParams()
    const doctor = doctors.find((doctor) => doctor.id === slug)
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="flex flex-col md:flex-row items-center md:items-start p-4 bg-white   mx-auto">
                <div className="flex-shrink-0">
                    <Image
                        height={600}
                        width={200}
                        src={doctor?.image || ""}
                        alt={doctor?.name || ""}
                        className="w-56 h-64 md:w-56 md:h-72 rounded-xl object-cover mb-4 md:mb-0"
                    />
                </div>
                <div className="flex flex-col md:flex-row justify-between w-full md:ml-6">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold">{doctor?.name} <span className="text-green-600">✅</span></h2>
                        <p className="text-gray-600">{doctor?.designation}</p>

                        <p className="text-gray-600 mt-2">{doctor?.yearsOfExperience} years of overall experience</p>
                        <p className="text-gray-700">
                            Works at <span className="font-semibold">{doctor?.workingAt}</span>
                        </p>
                        {doctor?.specialties.map((specialty, index) => (
                            <span key={index} className="inline-block bg-blue-100 text-blue-800 mx-1 text-sm font-medium px-2 py-1 rounded mt-2">
                                {specialty}
                            </span>

                        ))}
                        <div className="mt-4">
                            <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 focus:outline-none">
                                &#x1F4C5; Schedule
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col mt-4 md:mt-0 md:ml-4 space-y-2">
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none">
                         Book Appointment
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none ">

                            WhatsApp Us
                        </button>
                    </div>
                </div>
            </div>
            <div className=' my-2 mx-4'>
                <h1 className='text-start font-black text-2xl my-4'>AbooutUs</h1>
                <div>
                    {doctor?.about.items.map((item, index) => (
                        <p key={index} className="text-gray-700 flex gap-x-1 items-start max-w-4xl my-2"><span className='text-green-500'> &#x2714;</span>{item.content}</p>
                    ))}
                </div>
                <h1 className='text-start font-black text-2xl my-4'>Special Interest</h1>
                <h1 className='text-start font-black  my-1'>The expertise of {doctor?.name} in the following areas</h1>
                <div className='flex flex-wrap gap-2'>
                    {doctor?.specialInterests.map((specialInterest, index) => (
                        <span key={index} className="inline-block bg-blue-100 text-blue-800 mx-1 text-sm  font-semibold px-2 py-1 rounded mt-2">
                            {specialInterest}
                        </span>
                    ))}
                </div>
                <h1 className='text-start font-black text-xl mt-3'>Skilled At</h1>
                <div className='grid grid-cols-2'>
                    {doctor?.skilledAt.map((item, index) => (
                        <p key={index} className="text-gray-700 font-semibold flex gap-x-1 items-start max-w-4xl my-2"><span className='text-green-500'> &#x2714;</span>{item}</p>
                    ))}
                </div>
                <Tabs defaultValue="education" className="w-[400px] my-2 pb-10">
                    <TabsList className='bg-blue-600/20  mb-2'>
                        <TabsTrigger  className='font-semibold' value="education">Education</TabsTrigger>
                        <TabsTrigger className='font-semibold' value="experience">Experience</TabsTrigger>
                        <TabsTrigger className='font-semibold' value="awards">Awards</TabsTrigger>
                    </TabsList>
                    <TabsContent value="education">
                        <div>
                            {doctor?.education.map((item, index) => (
                                <p key={index} className="text-gray-700 font-semibold flex gap-x-1 text-sm items-start max-w-4xl my-2"><span className='text-green-500'> &#x2714;</span>{item}</p>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="experience">
                        <div>
                            {doctor?.experience.map((item, index) => (
                                <p key={index} className="text-gray-700 font-semibold flex gap-x-1 text-sm items-start max-w-4xl my-2"><span className='text-green-500'> &#x2714;</span>{item}</p>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="awards">
                        <div>
                            {doctor?.awards.map((item, index) => (
                                <p key={index} className="text-gray-700 font-semibold flex gap-x-1 text-sm items-start max-w-4xl my-2"><span className='text-green-500'> &#x2714;</span>{item}</p>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

        </div>
    )
}
