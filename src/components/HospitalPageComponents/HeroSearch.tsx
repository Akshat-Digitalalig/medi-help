"use client";
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const hospitals = [
  { id: 1, name: 'City Hospital', city: 'Mumbai', department: 'Cardiology' },
  { id: 2, name: 'Global Health Clinic', city: 'Delhi', department: 'Neurology' },
  { id: 3, name: 'Sunrise Hospital', city: 'Bangalore', department: 'Orthopedics' },
  { id: 4, name: 'Care Hospital', city: 'Hyderabad', department: 'Pediatrics' },
  { id: 5, name: 'Apollo Clinic', city: 'Chennai', department: 'Oncology' },
];

interface QueryParams {
  country: string;
  city?: string;
  department?: string;
}
const SearchHospitals = () => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState('India');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const handleSearch = () => {
    const query: QueryParams = {
      country: selectedCountry,
      city: selectedCity || undefined,
      department: selectedDepartment || undefined, 
    };
  
    const queryString = new URLSearchParams(query as unknown as Record<string, string>).toString();
    router.push(`/hospitals?${queryString}`);
  };

  return (
    <div className="hgradient flex flex-col items-center pt-6 pb-10 px-4 rounded-md w-full mx-auto">
      <h2 className="text-2xl font-semibold text-center text-gray-800">Find Your Ideal Hospital</h2>
      <Image src={'/hospital.webp'} height={200} width={200} alt='hospital' />
      <div className="flex flex-col max-w-3xl sm:flex-row gap-4 w-full bg-indigo-950 p-3 rounded-lg font-sans">
        <select
          className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        <select
          className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">All Cities</option>
          {Array.from(new Set(hospitals.map((hospital) => hospital.city))).map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
        <select
          className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option value="">All Departments</option>
          {Array.from(new Set(hospitals.map((hospital) => hospital.department))).map(
            (department, index) => (
              <option key={index} value={department}>
                {department}
              </option>
            )
          )}
        </select>
        <button
          onClick={handleSearch}
          className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchHospitals;
