"use client";
import { Hospital } from "@/types/hospital";
import { BedSingle, BriefcaseMedical, CalendarCheck2, ClipboardPlus, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import React from "react";
import { useRouter } from "next/navigation";
import { useSendWhatsApp } from "@/hooks/useSendWhatsApp";

interface HospitalCardProps {
  hospital: Hospital;
}
const HospitalCard: React.FC<HospitalCardProps> = ({ hospital }) => {
  const router = useRouter();
  const send = useSendWhatsApp();
  const handleBooking = () => {
    // Ensure the query parameter is safely encoded
    const hospitalName = encodeURIComponent(hospital?.name || "");
    router.push(`/consult-online?hospital=${hospitalName}`);
  };
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border cursor-pointer border-blue-200 my-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-3">
          <Image
            onClick={() => router.push(`/hospitals/${hospital.id}`)}
            src={hospital.mainImage}
            alt={hospital.name}
            width={300}
            height={200}
            className="w-full h-56 rounded-xl object-cover"
          />
          <div className="grid grid-cols-2 gap-2 mt-6">
            <div className=" text-xs text-gray-600 bg-gray-100 py-2 rounded-lg flex flex-col items-center ">
              <CalendarCheck2 />
              <div>
                <p className="text-xs font-semibold text-center" > Established</p>
                <p className='text-center'>{hospital.established}</p>
              </div>
            </div>
            <div className=" text-xs text-gray-600 bg-gray-100 py-2 rounded-lg  flex flex-col items-center">
              <BedSingle />
              <div>
                <p className="text-xs font-semibold text-center" > Number of Beds</p>
                <p className='text-center'>{hospital.numberOfBeds}</p>
              </div>
            </div>
            <div className=" text-xs text-gray-600 bg-gray-100 py-2 rounded-lg  flex flex-col items-center">
              <BriefcaseMedical />
              <div>
                <p className="text-xs font-semibold text-center" > Specialty</p>
                <p className='text-center'>{hospital.specialties.length}</p>
              </div>
            </div>
            <div className=" text-xs text-gray-600 bg-gray-100 py-2 rounded-lg  flex flex-col items-center">
              <MapPin />
              <div>
                <p className="text-xs font-semibold text-center" > Location</p>
                <p className='text-center'>{hospital.address.city}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 p-6">
          <div className="flex justify-between flex-col items-start">
            <h2 onClick={() => router.push(`/hospitals/${hospital.id}`)} className="text-2xl font-bold text-gray-800 cursor-pointer hover:underline">{hospital.name}</h2>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500 text-lg">★★★★☆</span>
              <span className="text-gray-600">({hospital.reviews.length} Ratings)</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <Image src="https://d1ea147o02h74h.cloudfront.net/accreditations_83.png" height={20} width={20} alt="Award" className="w-8 h-8" />
            <Image src="https://d1ea147o02h74h.cloudfront.net/accreditations_85.png" height={20} width={20} alt="Certification" className="w-8 h-8" />
          </div>
          {hospital?.teamSpecialties.map((specialty, index) => (
            <span key={index} className=" hidden md:inline-block  bg-blue-100 text-blue-800 mx-1 text-sm font-medium px-2 py-1 rounded mt-2">
              {specialty}
            </span>

          ))}
          <p className="text-gray-700 hidden md:block  text-sm mt-4">
            {hospital.about.items[0].content}, {hospital.about.items[1].content}
          </p>
          <div onClick={() => router.push(`/hospitals/${hospital.id}`)} className="mt-4 text-blue-600 cursor-pointer">Show More</div>

          <div className="flex space-x-2 mt-4">
            <button onClick={handleBooking} className="bg-red-500 text-xs md:text-sm text-white w-full md:w-fit py-2 rounded-lg px-3 hover:bg-red-600 flex gap-1 leading-none flex-col md:flex-row items-center"> <ClipboardPlus size={17} /> Book Appointment</button>
            <button onClick={() => send({
              message: `Hello, I would like to know more about ${hospital?.name}`,
            })} className="bg-green-500 text-white px-3 w-full md:w-fit py-3 text-xs md:text-sm  rounded-lg hover:bg-green-600 flex gap-1 leading-none flex-col md:flex-row items-center"> <Phone size={17} /> WhatsApp Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HospitalCard
