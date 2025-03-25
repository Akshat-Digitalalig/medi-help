"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Building, MapPin, MapPinHouse } from "lucide-react";
import { countryData } from "@/components/HomeComponent/HeroSearchBar";

const SearchDoctors = () => {
  return (
    <div className="bg-primary flex flex-col items-center pt-6 pb-8 px-4 rounded-md w-full mx-auto">
      <h2 className="text-3xl font-bold text-center my-text">Find Your Ideal Doctor</h2>
      <SearchBar />
    </div>
  );
};

export default SearchDoctors;

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCountry, setSelectedCountry] = useState<keyof typeof countryData>("India");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  // Update state from query parameters
  useEffect(() => {
    const country = searchParams.get("country") as keyof typeof countryData;
    const city = searchParams.get("city") || "";
    const department = searchParams.get("department") || "";

    if (country && countryData[country]) {
      setSelectedCountry(country);
    }
    if (city) {
      setSelectedCity(city);
    }
    if (department) {
      setSelectedDepartment(department);
    }
  }, [searchParams]);

  const handleSearch = () => {
    const query: Record<string, string> = {
      country: String(selectedCountry),
    };
    if (selectedCity) query.city = selectedCity;
    if (selectedDepartment) query.department = selectedDepartment;

    const queryString = new URLSearchParams(query).toString();
    router.push(`/doctors?${queryString}`);
  };

  return (
    <div className="flex flex-col items-center pt-6 pb-10 px-4 rounded-md w-full mx-auto ">
      <div className="flex font-semibold max-w-3xl flex-col sm:flex-row gap-2 md:items-center w-full bg-white p-3 rounded-xl border-myblue border-4 md:rounded-full font-sans">
        {/* Country Selection */}
        <div className="flex items-center w-full">
          <MapPin size={24} className="my-text" />
          <select
            className="flex-1 p-2 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-950"
            value={selectedCountry}
            onChange={(e) => {
              setSelectedCountry(e.target.value as keyof typeof countryData);
              setSelectedCity("");
              setSelectedDepartment("");
            }}
          >
            {Object.keys(countryData).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* City Selection */}
        <div className="flex items-center w-full">
          <MapPinHouse size={24} className="my-text" />
          <select
            className="flex-1 p-2 rounded bg-transparent border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-950"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">All Cities</option>
            {countryData[selectedCountry].cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Department Selection */}
        <div className="flex items-center w-full">
          <Building size={24} className="my-text" />
          <select
            className="flex-1 p-2 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-myblue"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="">All Departments</option>
            {countryData[selectedCountry].departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="p-2 bg-button-sec text-white rounded-full px-6 hover:bg-myblue/70 transition-colors"
        >
          Search
        </button>
      </div>
    </div>
  );
};
