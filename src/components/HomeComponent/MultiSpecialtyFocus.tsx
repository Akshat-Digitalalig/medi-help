import Image from 'next/image'
import React from 'react'

const medicalServices = [
    {
      title: "Oncology",
      description: "Advanced cancer treatments with proven results.",
      imgPath: "/icons/oncology.webp"
    },
    {
      title: "Neurosurgery",
      description: "The specialty of neurosurgical care includes both adult and pediatric patients.",
      imgPath: "/icons/neuro.webp"
    },
    {
      title: "Spine Surgery",
      description: "Precision spine surgeries for better mobility.",
      imgPath: "/icons/spine.webp"
    },
    {
      title: "Cardiology",
      description: "World-class heart care for adults and children.",
      imgPath: "/icons/cardo.webp"
    },
    {
      title: "Orthopedics",
      description: "Expert joint replacements and bone deformities solutions.",
      imgPath: "/icons/ortho.webp"
    },
    {
      title: "Liver Transplant",
      description: "Liver transplant procedures of varying complexity.",
      imgPath: "/icons/liver.webp"
    },
    {
      title: "Kidney Transplant",
      description: "Expert renal care and transplants.",
      imgPath: "/icons/kidney.webp"
    },
    {
      title: "Bone Marrow",
      description: "Bone marrow transplant options for matched and non-matched donors.",
      imgPath: "/icons/bonemarrow.webp"
    },
    {
      title: "Urology",
      description: "Expert care for urinary tract problems.",
      imgPath: "/icons/urology.webp"
      
    },
    {
      title: "Plumonology",
      description: "Specialized care for lung diseases.",
      imgPath: "/icons/pulmonology.webp"
    },
    {
      title: "Gynecology",
      description: "Specialized women's health services.",
      imgPath: "/icons/gynecology.png"
    },
    {
      title: "Cosmetic",
      description: "Aesthetic procedures for a new you.",
      imgPath: "/icons/spots.png"
    },
    {
      title: "Weight Loss",
      description: "Effective bariatric surgery options.",
      imgPath: "/icons/slime.webp"
    },
    {
      title: "IVF",
      description: "Leading fertility treatments with high success.",
      imgPath: "/icons/ivf.webp"
    },
   

    
  ];
  
export default function MultiSpecialtyFocus() {
    return (
        <div className='flex flex-col justify-center items-center  '>
            <h1 className='font-bold text-2xl my-6'>Multi-Specialty Focus</h1>
            <p className='text-sm w-[80vw] text-center'>We cover all medical needs, from hair transplants to heart transplants.</p>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mx-4 gap-6 my-4 '>
                {medicalServices.map((ms, index) => (
                    <div key={index} className=' flex py-2 flex-col  items-center md:py-3 px-2 md:px-3 gap-x-2 rounded-lg w-full shadow bg-light'>
                        <Image src={ms.imgPath} height={60} width={60} alt={ms.title} />
                       <div>
                       <p className='font-semibold text-lg text-myblue text-center'>{ms.title}</p>
                       <p className=' text-xs hidden md:block text-center'>{ms.description}</p>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    )   

}
