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
        <div className="mx-2  md:w-[40%]">
                <div className="sticky -top-10 scale-90">
                  <GetFreeConsult />
                </div>
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
  const cityParam = searchParams.get("city");
  const departmentParam = searchParams.get('department');
  const doctorsList = () => {
    if (searchParams.size === 0) return doctors;
   
       return doctors.filter((doctor) => {
         const matchesDepartment =
           departmentParam === "all" ||
           !departmentParam ||
           doctor?.tags?.some(tag => tag.toLowerCase().includes(departmentParam.toLowerCase()))
   
         const matchesCity =
           cityParam === "all" ||
           !cityParam ||
           doctor?.tags?.some(tag => tag.toLowerCase().includes(cityParam.toLowerCase()))
   
         return matchesDepartment && matchesCity;
       });
  }
  const filteredDoctors  = doctorsList();
  return (
    <div className="w-full my-4 h-auto">
    <h1 className="text-xl font-bold my-4 ">Show Results {filteredDoctors.length}</h1>
    <div>
      {filteredDoctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  </div> 
  )
}