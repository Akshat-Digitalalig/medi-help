import { Benefits } from "@/components/HomeComponent/Benefits";
import FAQ from "@/components/HomeComponent/FAQ";
import Hero from "@/components/HomeComponent/Hero";
import MultiSpecialtyFocus from "@/components/HomeComponent/MultiSpecialtyFocus";
import State from "@/components/HomeComponent/State";
import TopMedicalDestinations from "@/components/HomeComponent/TopMedicalDestinations";
import GetFree from "@/components/ui/GetFree";
import Whatsapp from "@/components/ui/Whatsapp";
import { benefitOne } from "@/lib/constant/homedata"

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Hero />
      <Benefits data={benefitOne} />
      <TopMedicalDestinations />
      <MultiSpecialtyFocus />
      <div className="flex justify-center items-center h-20 ">
        <GetFree />
        <Whatsapp />
      </div>
      <State />
      <FAQ />
    </div>
  );
}
