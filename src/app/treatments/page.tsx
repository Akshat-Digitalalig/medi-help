"use client";
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Treatments } from "./Treatment";
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="bg-[#e1f5ff] flex flex-col items-center pt-6 pb-8 px-4 rounded-md w-full mx-auto">
        <Image src={'/icons/treatment.webp'} width={200} height={200} alt="treatment" />
        <h2 className="text-3xl font-bold text-center text-myblue">
          Are You Looking For Treatment In India?
        </h2>
      </div>
      
      <div className='mx-2 md:mx-16 my-10'>
        <Accordion type="single" collapsible className="grid grid-cols-1 md:grid-cols-3 gap-x-6">
          {Treatments.map((treatment, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="font-semibold text-start">
                <div className='flex gap-x-4'>
                <span className='h-12 w-12'> {treatment.icon}</span>
                <div className='w-64'> <h1 className='0'> {treatment.name}</h1>
                <p className='text-xs text-gray-600'>{treatment.description}</p></div>
                
                </div>
             
              </AccordionTrigger>
              <AccordionContent>
                <ul>
                  {treatment.sublinks.map((sublink, subIndex) => (
                    <li key={subIndex} className="py-1">
                      <Link
                        href={sublink.link}
                        
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:bg-myblue/20 underline"
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
