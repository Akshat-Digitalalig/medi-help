import DoctorCard from '@/components/DoctorsPageComponents/DoctorListCard'
import SearchDoctors from '@/components/DoctorsPageComponents/DoctorSearch'
import FAQ from '@/components/HomeComponent/FAQ'
import GetFreeConsult from '@/components/ReusableComponents/GetFreeConsult'
import ListOfFeature from '@/components/Universal/ListOfFeature'
import { doctors } from "@/lib/constant/Doctors"
import React from 'react'

export default function Page() {

  

  return (
    <div>
      <SearchDoctors />
      <div className="main flex flex-col-reverse mx-8 md:flex-row">
        <div className="mx-2 my-4">
          <GetFreeConsult />
        </div>
        <div className="w-full my-4 h-auto">
          <h1 className="text-xl font-bold my-4 mx-6">Show Results</h1>
          <div>
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>        
      </div>
      <div className='mx-10 pb-5'>
        <ListOfFeature />
      </div>
      <div className='mx-10 pb-5'>
        <FAQ />
        </div>
    </div>
  )
}
