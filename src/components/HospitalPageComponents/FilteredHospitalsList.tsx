"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import HospitalCard from "./HospitalListCard";
import { hospitalData } from "@/lib/constant/Hospital";

const FilteredHospitalsList = () => {
  const searchParams = useSearchParams();
  const cityParam = searchParams.get("city");
  const departmentParam = searchParams.get("department");

  const filteredHospitals = () => {
    if (searchParams.size === 0) return hospitalData;

    return hospitalData.filter((hospital) => {
      const matchesDepartment =
        departmentParam === "all" ||
        !departmentParam ||
        hospital.departments?.some((department) =>
          department.toLowerCase().includes(departmentParam.toLowerCase())
        );

      const matchesCity =
        cityParam === "all" ||
        !cityParam ||
        hospital.address.city?.toLowerCase().includes(cityParam.toLowerCase());

      return matchesDepartment && matchesCity;
    });
  };

  const filteredHospital = filteredHospitals();

  return (
    <div className="hospital-list">
      <h1 className="text-xl font-bold my-4 mx-4">Show Results {filteredHospital.length}</h1>
      {filteredHospital.length > 0 ? (
        filteredHospital.map((hospital, index) => (
          <HospitalCard key={index} hospital={hospital} />
        ))
      ) : (
        <p className="text-center text-gray-500">No hospitals found matching the selected filters.</p>
      )}
    </div>
  );
};

export default FilteredHospitalsList;
