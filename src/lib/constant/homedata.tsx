import { Microscope, ShieldPlus, Stethoscope } from "lucide-react";

export  const benefitOne = {
    title: "Why Choose MediHelp",
    desc: "MediHelp Global offers a comprehensive suite of services designed to facilitate seamless medical care for international patients. Key benefits include:",
    image: '/doctor-consult-illustration.svg',
    bullets: [
      {
        title: "Seamless International Medical Travel",
        desc: "From free visa assistance to airport pickup & drop, MediHelp Global makes your medical journey stress-free.",
        icon: <ShieldPlus />,
      },
      {
        title: "Trusted Access to Top Hospitals & Doctors",
        desc: "Connect with accredited hospitals and specialist doctors across India.",
        icon: <Microscope />,
      },
      {
        title: "24/7 Support with Multilingual Assistance",
        desc: "Enjoy round-the-clock support and free translator services so language and time zones are never a barrier to your healing journey.",
        icon: <Stethoscope />,
      },
    ],
  };