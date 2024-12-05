"use client";
import DoctorCard from '@/components/DoctorsPageComponents/DoctorListCard'
import SearchDoctors from '@/components/DoctorsPageComponents/DoctorSearch'
import FAQ from '@/components/HomeComponent/FAQ'
import GetFreeConsult from '@/components/ReusableComponents/GetFreeConsult'
import ListOfFeature from '@/components/Universal/ListOfFeature'
import { doctors } from "@/lib/constant/Doctors"
import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'

export default function Page() {
  

 


  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className='max-w-screen-2xl mx-auto'>
      <SearchDoctors />
      <div className="main flex flex-col-reverse mx-8 md:flex-row">
        <div className="mx-2 my-4">
          <GetFreeConsult />
        </div>
        <DoctorList />       
      </div>
      <div className='mx-10 pb-5'>
        <ListOfFeature />
      </div>
      <div className='mx-10 pb-5'>
        <FAQ />
        </div>
    </div>
    </Suspense>
  )
}

const DoctorList = () => {
  const searchParams = useSearchParams();
  const departmentParam = searchParams.get('department');
  const doctorsList = () => {
    if (departmentParam == undefined) return doctors;
    return doctors.filter(doctor => 
      doctor?.tags?.some(tag => tag.toLowerCase().includes(departmentParam.toLowerCase()))
    );
  }
  const filteredDoctors  = doctorsList();
  return (
    <div className="w-full my-4 h-auto">
    <h1 className="text-xl font-bold my-4 mx-6">Show Results {filteredDoctors.length}</h1>
    <div>
      {filteredDoctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  </div> 
  )
}