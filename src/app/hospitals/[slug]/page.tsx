"use client"
import React from 'react'
import { hospitalData } from "@/lib/constant/Hospital"
import Image from 'next/image'
import { MapPin } from 'lucide-react'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useParams } from 'next/navigation'
import { Hospital } from '@/types/hospital'

// interface DoctorCardProps {
//     image: string;
//     name: string;
//     specialty: string;
//     rating: number;
//     ratingCount: number;
//     experience: number;
// }

export default function Page() {
    const { slug } = useParams()

    const hospital = hospitalData.find((hospital: Hospital) => hospital.id === slug);
    return (
        <div className='max-w-7xl mx-auto'>

            <div className="flex flex-col md:flex-row items-center md:items-start p-4 bg-white   mx-auto">
                <div className="flex-shrink-0">
                    <Image
                        height={600}
                        width={600}
                        src={hospital?.mainImage || ""}
                        alt={hospital?.name || ""}
                        className="w-90 h-64 md:w-80 md:h-72 rounded-xl object-cover mb-4 md:mb-0"
                    />
                </div>
                <div className="flex flex-col md:flex-row justify-between w-full md:ml-6">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold">{hospital?.name} <span className="text-green-600">&#x2714;</span></h2>
                        <p className="text-gray-600 flex gap-x-1 my-1"> <span><MapPin /></span>{hospital?.address.fullAddress}</p>
                        <p className="text-gray-700">
                            Location <span className="font-semibold">{hospital?.address.country}</span>
                        </p>
                        <p className="text-gray-600 ">Establish :<span className="font-semibold">{hospital?.established}</span></p>
                        <p className="text-gray-600 ">Number Of Beds :<span className="font-semibold">{hospital?.numberOfBeds}</span></p>
                        {hospital?.specialties.map((specialty, index) => (
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
                <h1 className='text-start font-black text-2xl my-4'>About Us</h1>
                <div>
                    {hospital?.about.items.map((item, index) => (
                        <div key={index}>
                            <p className={`text-gray-700 flex gap-x-1 items-start ${item.subItems ? "font-semibold" :" "} max-w-4xl my-2`}>
                                <span className="text-green-500">&#x2714;</span>
                                {item.content}
                            </p>

                            {item.subItems?.map((subItem, subIndex) => (
                                <p key={`${index}-${subIndex}`} className="text-gray-700 flex text-sm  gap-x-1 items-start max-w-4xl my-2">
                                    <span className="px-4 ">●</span>
                                    {subItem}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
                <h1 className='text-start font-black text-2xl my-4'>Infrastructure</h1>
                <h1 className='text-start font-black  my-1'>The expertise of {hospital?.name} in the following areas</h1>
                <div className='flex flex-wrap gap-2'>
                    {hospital?.infrastructure.map((infrastructure, index) => (
                        <span key={index} className="inline-block bg-blue-100 text-blue-800 mx-1 text-sm  font-semibold px-2 py-1 rounded mt-2">
                            {infrastructure}
                        </span>
                    ))}
                </div>
                <h1 className='text-start font-black text-xl mt-3'>Team and Specialities</h1>
                <div className='grid grid-cols-2'>
                    {/* {hospital?.specialties.map((item, index) => (
                        <p key={index} className="text-gray-700 font-semibold flex gap-x-1 items-start max-w-4xl my-2"><span className='text-green-500'> &#x2714;</span>{item}</p>
                    ))} */}
                </div>
                {/* <Tabs defaultValue="education" className="w-[400px] my-2 pb-10">
                    <TabsList className='bg-blue-600/20  mb-2'>
                        <TabsTrigger  className='font-semibold' value="education">education</TabsTrigger>
                        <TabsTrigger className='font-semibold' value="experience">experience</TabsTrigger>
                        <TabsTrigger className='font-semibold' value="awards">awards</TabsTrigger>
                    </TabsList>
                    <TabsContent value="education">
                        <div>
                            {hospital.education.map((item, index) => (
                                <p key={index} className="text-gray-700 font-semibold flex gap-x-1 text-sm items-start max-w-4xl my-2"><span className='text-green-500'> &#x2714;</span>{item}</p>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="experience">
                        <div>
                            {hospital.experience.map((item, index) => (
                                <p key={index} className="text-gray-700 font-semibold flex gap-x-1 text-sm items-start max-w-4xl my-2"><span className='text-green-500'> &#x2714;</span>{item}</p>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="awards">
                        <div>
                            {hospital.awards.map((item, index) => (
                                <p key={index} className="text-gray-700 font-semibold flex gap-x-1 text-sm items-start max-w-4xl my-2"><span className='text-green-500'> &#x2714;</span>{item}</p>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs> */}
            </div>

        </div>
    )
}


// const DoctorCard: React.FC<DoctorCardProps> = ({ image, name, specialty, rating, ratingCount, experience }) => {
//     return (
//         <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 max-w-xs flex flex-col items-center text-center">
//             <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover mb-2" />
//             <h2 className="text-lg font-semibold">{name}</h2>
//             <p className="text-sm text-gray-500">{specialty}</p>
            
//             <div className="flex items-center my-2">
//                 <div className="flex items-center">
//                     <span className="text-yellow-400">★</span>
//                     <span className="text-yellow-400">★</span>
//                     <span className="text-yellow-400">★</span>
//                     <span className="text-yellow-400">★</span>
//                     <span className="text-yellow-400">★</span>
//                 </div>
//                 <p className="text-sm text-gray-600 ml-2">
//                     {rating.toFixed(1)} <span className="text-gray-400">({ratingCount} Ratings)</span>
//                 </p>
//             </div>

//             <p className="text-sm font-semibold text-gray-700 mb-4">{experience} years of experience</p>

//             <div className="flex space-x-2 w-full">
//                 <button className="bg-red-500 text-white py-2 px-4 rounded-lg w-full hover:bg-red-600 transition">
//                     Book Appointment
//                 </button>
//                 <button className="bg-green-500 text-white py-2 px-4 rounded-lg w-full hover:bg-green-600 transition">
//                     Whatsapp Us
//                 </button>
//             </div>
//         </div>
//     );
// };

