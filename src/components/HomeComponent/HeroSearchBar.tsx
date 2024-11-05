"use client";
import React, { useState } from 'react'
import { Building, MapPin, MapPinHouse } from 'lucide-react'
import { useRouter } from 'next/navigation';

interface CountryData {
    [key: string]: {
        cities: string[];
        departments: string[];
    };
}

const countryData: CountryData = {
    "India": {
        cities: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"],
        departments: ["Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Oncology"]
    },
    
};



const SearchBar = () => {
    const [selectedCountry, setSelectedCountry] = useState("India");
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        const query = {
            country: selectedCountry,
            city: selectedCity || undefined,
            department: selectedDepartment || undefined,
        };
        const queryString = new URLSearchParams(query as Record<string, string>).toString();
       router.push(`/hospitals?${queryString}`);
    };

    return (
        <div className="flex flex-col items-center pt-6 pb-10 px-4 rounded-md w-full mx-auto">
            <div className="flex font-semibold max-w-3xl flex-col sm:flex-row gap-2 md:items-center w-full bg-white p-3 rounded-xl md:rounded-full font-sans">
                <div className='flex items-center  w-full'>
                    <MapPin size={24} className="text-indigo-950" />
                    <select
                        className="flex-1 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-950"
                        value={selectedCountry}
                        onChange={(e) => {
                            setSelectedCountry(e.target.value);
                            setSelectedCity("");
                            setSelectedDepartment("");
                        }}
                    >
                        {Object.keys(countryData).map((country) => (
                            <option key={country} value={country}>{country}</option>
                        ))}
                    </select>
                </div>

                <div className='flex items-center w-full'>
                    <MapPinHouse size={24} className="text-indigo-950" />
                    <select
                        className="flex-1 p-2 rounded border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-950"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                    >
                        <option value="">All Cities</option>
                        {countryData[selectedCountry].cities.map((city) => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                </div>

                <div className='flex items-center w-full'>
                    <Building size={24} className="text-indigo-950" />
                    <select
                        className="flex-1 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-950"
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                    >
                        <option value="">All Departments</option>
                        {countryData[selectedCountry].departments.map((department) => (
                            <option key={department} value={department}>{department}</option>
                        ))}
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
    );
};

export default SearchBar;
