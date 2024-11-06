import Head from 'next/head';
import { Benefits } from "@/components/HomeComponent/Benefits";
import FAQ from "@/components/HomeComponent/FAQ";
import Hero from "@/components/HomeComponent/Hero";
import MultiSpecialtyFocus from "@/components/HomeComponent/MultiSpecialtyFocus";
import State from "@/components/HomeComponent/State";
import TopMedicalDestinations from "@/components/HomeComponent/TopMedicalDestinations";
import GetFree from "@/components/ui/GetFree";
import Whatsapp from "@/components/ui/Whatsapp";
import { benefitOne } from "@/lib/constant/homedata"
import Testimonials from "@/components/HomeComponent/testimonials"
import Services from '@/components/HomeComponent/Services';
import Heading from '@/components/Universal/heading';
import Image from 'next/image';

export default function Home() {
  
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Head>
        <title>Multi-Specialty Hospital Services</title>
        <meta name="description" content="Top multi-specialty hospital offering oncology, cardiology, neurosurgery, and more with world-class facilities." />
        <meta name="keywords" content="oncology, cardiology, neurosurgery, hospital, healthcare, treatments" />
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Head>
      <Hero />
      <Benefits data={benefitOne}/>
      <TopMedicalDestinations />
      <MultiSpecialtyFocus />
      <div className="flex justify-center items-center h-20 ">
        <GetFree />
        <Whatsapp />
      </div>
      <div className='flex justify-center items-center px-6 md:px-10 '>
        <div className='bg-[#240f6a] text-[#8c6df7] flex justify-around overflow-hidden items-center rounded-2xl h-56 w-full '>
          <div className='pl-4'>
          <h1 className='text-xl md:text-4xl leading-none font-bold'>Do You Want Free Consultant</h1>
          <h1 className='text-xl leading-none md:text-6xl font-bold text-white'>With Top Doctors</h1>
          </div>
          <Image src={'/doctors.webp'} alt="Free Consult" className=''  height={190} width={190} />
        </div>
      </div>
      <Services />
      <div className='flex justify-center items-center px-6 md:px-10 mb-4 '>
        <div className='bg-[#240f6a] text-[#8c6df7] flex  justify-around overflow-hidden items-center rounded-2xl h-56 w-full '>
          <div className='pl-4'>
          <h1 className='text-xl md:text-4xl leading-none font-bold'>Connect!</h1>
          <h1 className='text-xl leading-none md:text-6xl font-bold text-white'>With Top Hospitals</h1>
          </div>
          <Image src={'/hospital.webp'} alt="Free Consult" className=''  height={240} width={240} />
        </div>
      </div>
      <Heading>Testimonials</Heading>
      <Testimonials />
      <State />
      <FAQ />
    </div>
  );
}
