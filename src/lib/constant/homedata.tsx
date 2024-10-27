import { Microscope, ShieldPlus, Stethoscope } from "lucide-react";

export  const benefitOne = {
    title: "Highlight your benefits",
    desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
    image: '/doctor-consult-illustration.svg',
    bullets: [
      {
        title: "Understand your customers",
        desc: "Then explain the first point breifly in one or two lines.",
        icon: <ShieldPlus />,
      },
      {
        title: "Improve acquisition",
        desc: "Here you can add the next benefit point.",
        icon: <Microscope />,
      },
      {
        title: "Drive customer retention",
        desc: "This will be your last bullet point in this section.",
        icon: <Stethoscope />,
      },
    ],
  };