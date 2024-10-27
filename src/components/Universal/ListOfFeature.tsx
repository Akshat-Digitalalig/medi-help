import { HandCoins, HeartHandshake, Hospital, Languages, Star } from 'lucide-react';
import React from 'react'

export default function ListOfFeature() {
    const topMedicalOpinions = [
        {
          title: "Comprehensive List of Hospitals",
          description: "Wide range of hospitals from multiple countries for you to choose as per your need",
          icon: <Hospital /> 
        },
        {
          title: "Expert Guidance and Support",
          description: "Access to a team of medical coordinators who assist you throughout the process, from initial consultation to post-treatment follow-up",
          icon: <HeartHandshake />
        },
        {
          title: "Language Support",
          description: "Multilingual support to help bridge communication gaps",
          icon: <Languages /> 
        },
        {
          title: "Patient Reviews and Ratings",
          description: "Real feedback from past patients, enabling you to make decisions based on the experiences of others",
          icon: <Star /> 
        },
        {
          title: "Transparency in Pricing",
          description: "Detailed information on treatment costs, helping you make informed decisions without hidden fees or surprises",
          icon: <HandCoins /> 
        }
      ];
      
      
  return (
    <div>
        <h1 className='text-start font-black text-2xl my-4'>Top Medical Opinions</h1>
        <div className="flex  flex-col gap-y-2">
            {topMedicalOpinions.map((feature, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start md:items-center  gap-x-2 p-4 bg-white rounded-lg border-blue-600 border-[1px]">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-800 rounded-full">
                {feature.icon}
                </div>
                <div>
                <h3 className="text-lg text-blue-800 font-semibold mt-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base mt-2 leading-4 md:leading-normal ">{feature.description}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}
