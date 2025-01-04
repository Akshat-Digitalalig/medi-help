"use client";
import React, { useState } from 'react'
import { Building, MapPin, MapPinHouse } from 'lucide-react'
import { useRouter } from 'next/navigation';

export interface CountryData {
    [key: string]: {
        cities: string[];
        departments: string[];
    };
}

export const countryData: CountryData = {
    "India": {
        cities: [
            "Delhi", "Gurgaon", "Noida",  "Faridabad", "Ghaziabad",
            "Kolkata",  "Ahmedabad", "Jaipur", "Mumbai", 
        ],
        departments: [
            "Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Oncology",
            "Nephrology", "Urology", "Gastroenterology", "ENT (Ear, Nose, Throat)", "Gynecology",
            "General Surgery", "Plastic Surgery", "Ophthalmology", "Radiology", "Anesthesiology",
            "Critical Care", "Emergency Medicine", "Endocrinology", "Pulmonology", "Hematology"
        ]
    }
};

const SearchBar = () => {
    const [selectedCountry, setSelectedCountry] = useState<keyof typeof countryData>("India");
    const [selectedCity, setSelectedCity] = useState("all");
    const [selectedDepartment, setSelectedDepartment] = useState("all");
    const router = useRouter();

    const handleSearch = () => {
        const query = {
            country: selectedCountry,
            city: selectedCity || "all",
            department: selectedDepartment || "all",
        };
        const queryString = new URLSearchParams(query as Record<string, string>).toString();
        router.push(`/hospitals?${queryString}`);
    };

    return (
        <div className="flex flex-col items-center pt-6 pb-10 px-4 rounded-md w-full mx-auto">
            <div className="flex font-semibold max-w-3xl flex-col sm:flex-row gap-2 md:items-center w-full bg-white p-3 rounded-xl md:rounded-full font-sans">
                <div className='flex items-center  w-full'>
                    <MapPin size={24} className="text-myblue" />
                    <select
                        className="flex-1 p-2 rounded  bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-950"
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
                    <MapPinHouse size={24} className="text-myblue" />
                    <select
                        className="flex-1 p-2 rounded bg-transparent border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-950"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                    >
                        <option value="all">All Cities</option>
                        {countryData[selectedCountry].cities.map((city) => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                </div>

                <div className='flex items-center w-full'>
                    <Building size={24} className="text-myblue" />
                    <select
                        className="flex-1 p-2 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-mytext-myblue"
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                    >
                        <option value="all">All Departments</option>
                        {countryData[selectedCountry].departments.map((department) => (
                            <option key={department} value={department}>{department}</option>
                        ))}
                    </select>
                </div>

                <button
                    onClick={handleSearch}
                    className="p-2 bg-myblue text-white rounded-full px-6 hover:bg-myblue/70 transition-colors"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
