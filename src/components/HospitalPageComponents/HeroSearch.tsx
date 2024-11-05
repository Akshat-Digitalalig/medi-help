"use client";
import { useState } from 'react';
import { Building, MapPin, MapPinHouse } from 'lucide-react';

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
 
  return (
    <div className="bg-[#e1f5ff] flex flex-col items-center pt-6 pb-8 px-4 rounded-md w-full mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800">Find Your Ideal Hospital</h2>
      <SearchBar />
    </div>
  );
};

export default SearchHospitals;


const SearchBar = () => {
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
      console.log(queryString)

  };

  return (
      <div className="flex flex-col items-center pt-6 pb-10  px-4 rounded-md w-full mx-auto">

          <div className="flex text-indigo-950 font-semibold  max-w-3xl flex-col sm:flex-row gap-2 md:items-center w-full border-[5px] border-indigo-950 bg-white p-3 rounded-xl md:rounded-full font-sans">
              <div className='flex items-center w-full '>
                  <MapPin size={24} className="text-indigo-950" />
                  <select
                      className="flex-1 p-2 rounded  focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                  </select>
              </div>
              <div className='flex items-center  w-full'>
                  <MapPinHouse size={24} className="text-indigo-950" />
                  <select
                      className="flex-1 p-2 rounded border-transparent focus:outline-none focus:ring-2  focus:ring-blue-500"
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
              </div>
              <div className='flex items-center w-full'>
                  <Building size={24} className="text-indigo-950" />
                  <select
                      className="flex-1 p-2 rounded  focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              </div>
              <button
                  onClick={handleSearch}
                  className="p-2 bg-indigo-950 text-white rounded-full px-6 hover:bg-indigo-900 transition-colors"
              >
                  Search
              </button>
          </div>

      </div>
  )
}