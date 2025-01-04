"use client";
import { BriefcaseBusiness, BriefcaseMedical, MapPin, Phone, UserPlus } from "lucide-react"
import Image from "next/image"
import { Doctor } from "@/types/doctors"
import { useRouter } from "next/navigation"
import { TrucanteText } from "@/lib/utils";
interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const router = useRouter()
  if (!doctor) {
    return <div>Doctor data not available</div>;
  }
  return (
    <div onClick={() => router.push(`/doctors/${doctor.id}`)} className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-blue-200 my-4">
      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-1/4 p-2 flex justify-center md:justify-start  ">
          <Image
            onClick={() => router.push(`/doctors/${doctor.id}`)}
            src={doctor.image}
            alt={doctor.name}
            width={800}
            height={100}
            className="w-full h-96 md:h-60 rounded-xl object-cover object-center"
          />
        </div>
        <div className="w-full md:w-2/3 p-6">
          <div className="flex justify-between flex-col items-start">
            <div className="flex justify-between w-full">
              <h2 onClick={() => router.push(`/doctors/${doctor.id}`)} className="text-2xl font-bold text-gray-800 hover:underline cursor-pointer">{doctor.name}</h2>
              <div className="hidden md:flex gap-x-2">
                <button className="bg-red-500 text-white px-3 py-2 text-xs rounded-lg hover:bg-red-600 flex gap-1 leading-none flex-col md:flex-row items-center">
                  <UserPlus size={18} />
                </button>
                <button className="bg-green-500 text-white px-3 py-2 text-xs rounded-lg hover:bg-green-600 flex gap-1 leading-none flex-col md:flex-row items-center">
                  <Phone size={18} />
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500 text-lg">★★★★☆</span>
              <span className="text-gray-600">({(doctor?.reviews?.length ?? 4)} Ratings)</span>
            </div>
            <div className="text-xs text-gray-600 flex my-1  gap-x-2 items-start">
              <MapPin />
              <div>
                <p className="text-xs font-semibold"> Location</p>
                <p className="">{doctor?.workingAt}</p>
              </div>
            </div>
            <div className="text-xs text-gray-600 flex justify-center my-1  gap-x-2 items-center">
              <BriefcaseBusiness />
              <div>
                <p className="text-sm font-semibold "> {doctor.yearsOfExperience}+ Experience</p>
              </div>
            </div>
            <div className="text-xs text-gray-600 flex  my-1  gap-x-2 items-center">
              <BriefcaseMedical />
              <div>
                <p className="inline-block bg-blue-100 text-blue-800 mx-1 text-xs  font-semibold px-2 py-1 rounded ">
                  {TrucanteText(doctor?.designation, 34)} 
                </p>

              </div>
            </div>
          </div>
          <p className="text-gray-700 hidden md:block text-sm mt-4">
            {doctor?.about?.items[0]?.content &&
              TrucanteText(doctor.about.items[0].content, 140)}
          </p>

          <div className="flex md:hidden space-x-4 mt-6">
            <button className="bg-red-500 text-white px-3 py-2 text-xs rounded-lg hover:bg-red-600 flex gap-1 leading-none flex-col md:flex-row items-center">
              <UserPlus size={18} /> Book Appointment
            </button>
            <button className="bg-green-500 text-white px-3 py-2 text-xs rounded-lg hover:bg-green-600 flex gap-1 leading-none flex-col md:flex-row items-center">
              <Phone size={18} /> WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorCard