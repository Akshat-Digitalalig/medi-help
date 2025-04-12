"use client";
import FAQ from '@/components/HomeComponent/FAQ';
import SearchHospitals from '@/components/HospitalPageComponents/HeroSearch';
import GetFreeConsult from '@/components/ReusableComponents/GetFreeConsult';
import ListOfFeature from '@/components/Universal/ListOfFeature';
import React, { Suspense } from 'react';
import FilteredHospitalsList from '@/components/HospitalPageComponents/FilteredHospitalsList';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="max-w-screen-2xl mx-auto">
      <SearchHospitals />
      <div className="main flex flex-col-reverse mx-4 md:flex-row">
        <div className="mx-2  md:w-[40%]">
          <div className="sticky -top-10 scale-90">
            <GetFreeConsult />
          </div>
        </div>
        <div className="w-full my-4 h-auto">
          {/* <h1 className="text-xl font-bold my-4 mx-6">Show Results</h1> */}
          <FilteredHospitalsList />
        </div>
      </div>
      <div className="mx-10 pb-5">
        <ListOfFeature />
      </div>
      <div className="mx-10 pb-5">
        <FAQ />
      </div>
    </div>
    </Suspense>
  );
}


