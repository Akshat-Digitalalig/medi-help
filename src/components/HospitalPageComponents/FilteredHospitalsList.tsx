"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import HospitalCard from './HospitalListCard';
import { hospitalData } from "@/lib/constant/Hospital";

const FilteredHospitalsList = () => {
  const searchParams = useSearchParams();
  const countryParam = searchParams.get('country');

  const filteredHospitals = hospitalData.filter((hospital) => {
    const isCountryMatch = !countryParam || hospital.address.country === countryParam;
    return isCountryMatch ;
  });

  return (
    <div>
      {filteredHospitals.map((hospital, index) => (
        <HospitalCard key={index} hospital={hospital} />
      ))}
    </div>
  );
};

export default FilteredHospitalsList;
