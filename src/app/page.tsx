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
      <Services />
      <Heading>Testimonials</Heading>
      <Testimonials />
      <State />
      <FAQ />
    </div>
  );
}
