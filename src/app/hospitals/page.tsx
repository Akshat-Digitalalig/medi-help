"use client";
import FAQ from '@/components/HomeComponent/FAQ';
import SearchHospitals from '@/components/HospitalPageComponents/HeroSearch';
import GetFreeConsult from '@/components/ReusableComponents/GetFreeConsult';
import ListOfFeature from '@/components/Universal/ListOfFeature';
import React from 'react';
import FilteredHospitalsList from '@/components/HospitalPageComponents/FilteredHospitalsList';

export default function Page() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <SearchHospitals />
      <div className="main flex flex-col-reverse mx-8 md:flex-row">
        <div className="mx-2 my-4">
          <GetFreeConsult />
        </div>
        <div className="w-full my-4 h-auto">
          <h1 className="text-xl font-bold my-4 mx-6">Show Results</h1>
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
  );
}
