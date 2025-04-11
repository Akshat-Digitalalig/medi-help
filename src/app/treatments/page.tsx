"use client";
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Treatments } from "./Treatment";
import Link from 'next/link';
import { ClipboardPlus, Hospital } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Page() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div style={{ backgroundImage: `url('/123.jpg')` }} className="flex flex-col items-center pt-6 w-full h-[65vh] sm:h-[45vh] md:h-[50vh] mx-auto bg-cover bg-center relative">
      {/* Overlay or content container */}
      <div className="absolute inset-0 bg-black opacity-[0.4]"></div> {/* Optional overlay */}
        <h2 className="text-3xl font-bold text-center mb-3 text-white relative mt-[100px]">
          Are You Looking For Treatment In India?
        </h2>
        <SearchBar />
      </div>
      
      <div className='mx-2 md:mx-16 my-10'>
        <Accordion type="single" collapsible className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
          {Treatments.map((treatment, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="font-semibold text-start">
                <div className='flex gap-x-4'>
                <span className='h-12 w-12'> {treatment.icon}</span>
                <div className='w-64'> <h1 className='0'> {treatment.name}</h1>
                <p className='text-xs text-gray-600'>{treatment.description}</p></div>
          
                </div>
             
              </AccordionTrigger>
              <AccordionContent >
                <ul>
                  {treatment.sublinks.map((sublink, subIndex) => (
                    <li key={subIndex} className="py-1 flex gap-x-2 pl-2  rounded-lg my-2 items-center">
                      <ClipboardPlus className='text-myblue'  />
                      <Link
                        href={sublink.link}
                        
                        rel="noopener noreferrer"
                        className=" font-semibold hover:text-black "
                      >
                        {sublink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}



const SearchBar = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(""); // State for selected treatment
  const [selectedSublink, setSelectedSublink] = useState(""); // State for selected sublink
  const router = useRouter(); // To programmatically navigate to the sublink page

  const handleSearch = () => {
    if (selectedSublink) {
      router.push(selectedSublink); // Navigate to the sublink page
    } else {
      alert("Please select a valid sublink.");
    }
  };

  return (
    <div className="flex font-semibold max-w-3xl flex-col sm:flex-row gap-2 md:items-center w-full bg-white p-3 rounded-xl border-white border-4 md:rounded-full font-sans relative">
      {/* Treatment Dropdown */}
      <div className="flex items-center w-full">
      <Hospital size={24} className="my-text" />
        <select
          className="flex-1 p-2 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-950"
          value={selectedTreatment}
          onChange={(e) => {
            setSelectedTreatment(e.target.value);
            setSelectedSublink(""); // Reset sublink when treatment changes
          }}
        >
          <option value="">Select Treatment</option>
          {Treatments.map((treatment, index) => (
            <option key={index} value={treatment.name}>
              {treatment.name}
            </option>
          ))}
        </select>
      </div>

      {/* Sublink Dropdown */}
      <div className="flex items-center w-full">
      <ClipboardPlus  size={24} className="my-text" />
        <select
          className="flex-1 p-2 rounded bg-transparent w-40 border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-950"
          value={selectedSublink}
          onChange={(e) => setSelectedSublink(e.target.value)}
          disabled={!selectedTreatment} // Disable sublink dropdown if no treatment is selected
        >
          <option value="">Select Sublink</option>
          {selectedTreatment &&
            Treatments.find((treatment) => treatment.name === selectedTreatment)?.sublinks.map(
              (sublink, index) => (
                <option className='w-20' key={index} value={sublink.link}>
                  {sublink.name}
                </option>
              )
            )}
        </select>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="p-2 bg-button-sec text-white rounded-full px-6 hover:bg-myblue/70 transition-colors"
        disabled={!selectedSublink} // Disable button if no sublink is selected
      >
        Search
      </button>
    </div>
  );
};



