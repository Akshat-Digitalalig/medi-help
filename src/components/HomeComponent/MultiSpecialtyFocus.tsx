import Image from 'next/image'
import React from 'react'

const medicalServices = [
    {
      title: "Oncology",
      description: "Advanced cancer treatments with proven results.",
      imgPath: "https://cdn-icons-png.flaticon.com/128/8358/8358513.png"
    },
    {
      title: "Neurosurgery",
      description: "The specialty of neurosurgical care includes both adult and pediatric patients.",
      imgPath: "https://cdn-icons-png.flaticon.com/128/10290/10290132.png"
    },
    {
      title: "Spine Surgery",
      description: "Precision spine surgeries for better mobility.",
      imgPath: "https://cdn-icons-png.flaticon.com/128/5198/5198706.png"
    },
    {
      title: "Cardiology",
      description: "World-class heart care for adults and children.",
      imgPath: "https://cdn-icons-png.flaticon.com/128/10154/10154414.png"
    },
    {
      title: "Orthopedics",
      description: "Expert joint replacements and bone deformities solutions.",
      imgPath: "https://cdn-icons-png.flaticon.com/128/7350/7350861.png"
    },
    {
      title: "IVF",
      description: "Leading fertility treatments with high success.",
      imgPath: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/department/Oncology.svg"
    },
    {
      title: "Gynecology",
      description: "Specialized women's health services.",
      imgPath: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/department/Oncology.svg"
    },
    {
      title: "Cosmetic",
      description: "Aesthetic procedures for a new you.",
      imgPath: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/department/Oncology.svg"
    },
    {
      title: "Weight Loss",
      description: "Effective bariatric surgery options.",
      imgPath: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/department/Oncology.svg"
    },
    {
      title: "Liver Transplant",
      description: "Liver transplant procedures of varying complexity.",
      imgPath: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/department/Oncology.svg"
    },
    {
      title: "Kidney Transplant",
      description: "Expert renal care and transplants.",
      imgPath: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/department/Oncology.svg"
    },
    {
      title: "Bone Marrow",
      description: "Bone marrow transplant options for matched and non-matched donors.",
      imgPath: "https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/department/Oncology.svg"
    }
  ];
  
export default function MultiSpecialtyFocus() {
    return (
        <div className='flex flex-col justify-center items-center bg-sky-100 '>
            <h1 className='font-bold text-2xl my-6'>Multi-Specialty Focus</h1>
            <p className='text-sm w-[80vw] text-center'>We cover all medical needs, from hair transplants to heart transplants.</p>
            <div className='grid grid-cols-2 md:grid-cols-3 mx-4 gap-6 my-4 '>
                {medicalServices.map((ms, index) => (
                    <div key={index} className=' flex py-2 flex-col md:flex-row  items-center md:py-3 px-2 md:px-3 gap-x-2 rounded-lg w-full bg-white'>
                        <Image src={ms.imgPath} height={60} width={60} alt={ms.title} />
                       <div>
                       <p className='font-semibold text-lg'>{ms.title}</p>
                       <p className=' text-sm hidden md:block'>{ms.description}</p>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    )   

}
