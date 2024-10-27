"use client";
import { BriefcaseBusiness, BriefcaseMedical, MapPin, Phone, UserPlus } from "lucide-react"
import Image from "next/image"
import { Doctor } from "@/types/doctors"
import { useRouter} from "next/navigation"
interface DoctorCardProps {
    doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
    const router = useRouter()
    return (
      <div  onClick={() => router.push(`/doctors/${doctor.id}`)} className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-blue-200 my-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 p-3">
            <Image
              onClick={() => router.push(`/doctors/${doctor.id}`)}
              src={doctor.image}
              alt={doctor.name}
              width={700}
              height={900}
              className="w-full h-full rounded-xl object-cover object-center"
            />
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-xs text-gray-600 flex flex-col items-center">
                
              </div>
              <div className="text-xs text-gray-600 flex flex-col items-center">
                
              </div>
             
            </div>
          </div>
          <div className="w-full md:w-2/3 p-6">
            <div className="flex justify-between flex-col items-start">
              <h2 onClick={() => router.push(`/doctors/${doctor.id}`)} className="text-2xl font-bold text-gray-800 hover:underline cursor-pointer">{doctor.name}</h2>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500 text-lg">★★★★☆</span>
                <span className="text-gray-600">({(doctor.reviews).length} Ratings)</span>
              </div>
              <div className="text-xs text-gray-600 flex my-1  gap-x-2 items-start">
                <MapPin />
                <div>
                  <p className="text-xs font-semibold"> Location</p>
                  <p className="text-center">{doctor.workingAt}</p>
                </div>
              </div>
              <div className="text-xs text-gray-600 flex  my-1  gap-x-2 items-start">
              <BriefcaseBusiness />
                <div>
                  <p className="text-xs font-semibold "> Experience</p>
                  <p className="">{doctor.experience}</p>
                </div>
              </div>
              <div className="text-xs text-gray-600 flex  my-1  gap-x-2 items-start">
              <BriefcaseMedical />
                <div>
                  <p className="text-xs font-semibold "> Specialty</p>
                  <div className=" ">
                  {doctor.specialInterests.map((specialInterest, index) => (
                        <p key={index} className="inline-block bg-blue-100 text-blue-800 mx-1 text-xs  font-semibold px-2 py-1 rounded mt-2">
                            {specialInterest}
                        </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 hidden md:block text-sm mt-4">
            {doctor.about.items[0].content}               
            </p>
        
            <div className="flex space-x-4 mt-6">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex gap-1 leading-none flex-col md:flex-row items-center">
                <UserPlus /> Book Appointment
              </button>
              <button className="bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 flex gap-1 leading-none flex-col md:flex-row items-center">
                <Phone /> WhatsApp Us
              </button>
             
            </div>
          </div>
        </div>
      </div>
    )
  }

export default DoctorCard