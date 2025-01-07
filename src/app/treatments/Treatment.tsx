import { RoboticIcon, BrainIcon, SpineIcon, CardiologyIcon, TransplantIcon, OncologyIcon, GeneralSurgeryIcon, VascularSurgeryIcon, DentalSurgeryIcon, OrthopedicIcon,  CosmeticSurgeryIcon, PediatricCardiologyIcon, ENTIcon, EyeIcon,  HeartIcon, UrologyIcon, GynecologyIcon, ReproductiveMedicineIcon } from '@/components/icons';


export const allSubTreatmentLinks = () => {

  const sublinks = Treatments.map((treatment) => {
    return treatment.sublinks;
  });
  return sublinks.flat();
}


export const Treatments = [
  {
    name: "Robotic Surgery",
    icon: <RoboticIcon />,
    description: "Advanced minimally invasive surgeries using robotic technology for precision and faster recovery.",
    sublinks: [
      {
        name: "Robotic Thyroidectomy Surgery",
        link: "/treatments/robotic-thyroidectomy",
      },
      {
        name: "Robotic Prostatectomy",
        link: "/treatments/robotic-prostatectomy"
      },
      {
        name: "Robotic Sleep Apnea Surgery",
        link: "/treatments/robotic-sleep-apnea-surgery"
      },
      {
        name: "Robotic Lung Cancer Treatment and Surgery",
        link: "/treatments/robotic-lung-cancer-surgery"
      },
      {
        name: "Robotic CABG",
        link: "/treatments/robotic-cabg"
      },
      {
        name: "Robotic Hip Replacement Surgery",
        link: "/treatments/robotic-hip-replacement"
      },
      {
        name: "Robotic Knee Replacement",
        link: "/treatments/robotic-knee-replacement"
      },
      {
        name: "Robotic Femtosecond Laser Cataract Surgery",
        link: "/treatments/robotic-femtosecond-laser-cataract-surgery"
      }
    ]
  },
  {
    name: "Brain Surgery",
    icon: <BrainIcon />,
    description: "Comprehensive neurosurgical procedures for various brain conditions.",
    sublinks: [
      {
        name: "Brain Tumor Surgery",
        link: "/treatments/brain-tumor-surgery"
      },
      {
        name: "Pituitary Tumor Treatment",
        link: "/treatments/pituitary-tumor-treatment"
      },
      {
        name: "Trans Nasal Trans Sphenoidal Surgery",
        link: "/treatments/trans-nasal-trans-sphenoidal-surgery"
      },
      {
        name: "Deep Brain Stimulation Surgery",
        link: "/treatments/deep-brain-stimulation-surgery"
      },
      {
        name: "Burr Hole Surgery",
        link: "/treatments/burr-hole-surgery"
      },
      {
        name: "Craniotomy Surgery",
        link: "/treatments/craniotomy-surgery"
      },
      {
        name: "VP Shunt Surgery",
        link: "/treatments/vp-shunt-surgery"
      },
      {
        name: "Brain AVM Surgery",
        link: "/treatments/brain-avm-surgery"
      },
      {
        name: "Brain Aneurysm Surgery",
        link: "/treatments/brain-aneurysm-surgery"
      }
    ]
  },
  {
    name: "Spine Surgery",
    icon: <SpineIcon />,
    description: "Advanced surgical treatments for spine-related disorders.",
    sublinks: [
      {
        name: "Brachial Plexus Injuries Surgery",
        link: "/treatments/brachial-plexus-injuries-surgery"
      },
      {
        name: "Microdiscectomy Surgery",
        link: "/treatments/microdiscectomy-surgery"
      },
      {
        name: "Scoliosis Surgery",
        link: "/treatments/scoliosis-surgery"
      },
      {
        name: "Kyphoplasty Surgery",
        link: "/treatments/kyphoplasty-surgery"
      },
      {
        name: "Laminectomy Surgery",
        link: "/treatments/laminectomy-surgery"
      },
      {
        name: "Transforaminal Lumbar Interbody Fusion Surgery (TLIF)",
        link: "/treatments/tlif-surgery"
      },
      {
        name: "Anterior Cervical Discectomy Surgery (ACDF)",
        link: "/treatments/acdf-surgery"
      },
      {
        name: "Posterior Lumbar Interbody Fusion (PLIF) Surgery",
        link: "/treatments/plif-surgery"
      },
      {
        name: "Spinal Decompression Surgery",
        link: "/treatments/spinal-decompression-surgery"
      },
      {
        name: "Spinal Tumor Treatment",
        link: "/treatments/spinal-tumor-treatment"
      }
    ]
  },
  {
    name: "Interventional Cardiology",
    icon: <CardiologyIcon />,
    description: "Minimally invasive procedures for heart-related conditions.",
    sublinks: [
      {
        name: "EPS & RF Ablation Treatment",
        link: "/treatments/eps-rf-ablation-treatment"
      },
      {
        name: "AICD Device Implantation (Arrhythmia Treatment)",
        link: "/treatments/aicd-device-implantation"
      },
      {
        name: "PTCA (Angioplasty Surgery)",
        link: "/treatments/ptca-angioplasty-surgery"
      },
      {
        name: "TAVI Surgery",
        link: "/treatments/tavi-surgery"
      },
      {
        name: "Pacemaker Implantation Surgery",
        link: "/treatments/pacemaker-implantation-surgery"
      }
    ]
  },
  {
    name: "Organ Transplant",
    icon: <TransplantIcon />,
    description: "Comprehensive organ transplant services with high success rates.",
    sublinks: [
      {
        name: "Liver Transplant Treatment",
        link: "/treatments/liver-transplant-treatment"
      },
      {
        name: "Bone Marrow Transplant",
        link: "/treatments/bone-marrow-transplant"
      },
      {
        name: "Pediatric Liver Transplant Surgery",
        link: "/treatments/pediatric-liver-transplant-surgery"
      },
      {
        name: "Kidney Transplant Surgery",
        link: "/treatments/kidney-transplant-surgery"
      },
      {
        name: "Corneal Transplant Surgery",
        link: "/treatments/corneal-transplant-surgery"
      }
    ]
  },
  {
    name: "Surgical Oncology",
    icon: <OncologyIcon />,
    description: "Advanced surgical treatments for various cancers.",
    sublinks: [
      {
        name: "Breast Cancer Treatment",
        link: "/treatments/breast-cancer-treatment"
      },
      {
        name: "Osteosarcoma Surgery",
        link: "/treatments/osteosarcoma-surgery"
      },
      {
        name: "Ewing’s Sarcoma Treatment",
        link: "/treatments/ewings-sarcoma-treatment"
      },
      {
        name: "Chondrosarcoma Treatment",
        link: "/treatments/chondrosarcoma-treatment"
      },
      {
        name: "Bone Cancer Treatment",
        link: "/treatments/bone-cancer-treatment"
      },
      {
        name: "Lung Cancer Treatment",
        link: "/treatments/lung-cancer-treatment"
      },
      {
        name: "Prostate Cancer Treatment",
        link: "/treatments/prostate-cancer-treatment"
      },
      {
        name: "Cervical Cancer Treatment",
        link: "/treatments/cervical-cancer-treatment"
      },
      {
        name: "Liver Cancer Treatment",
        link: "/treatments/liver-cancer-treatment"
      },
      {
        name: "Ovarian Cancer Treatment",
        link: "/treatments/ovarian-cancer-treatment"
      },
      {
        name: "Colon Cancer Treatment",
        link: "/treatments/colon-cancer-treatment"
      },
      {
        name: "Stomach Cancer Treatment",
        link: "/treatments/stomach-cancer-treatment"
      },
      {
        name: "HIPEC Treatment",
        link: "/treatments/HIPEC-treatment"
      },
      {
        name: "Pancreatic Cancer Treatment",
        link: "/treatments/pancreatic-cancer-treatment"
      },
      {
        name: "Radio active Iodine Therapy",
        link: "/treatments/radio-active-iodine-therapy"
      },
      {
        name: "Latest Ratiantion Therapy for Cancer",
        link: "/treatments/latest-radiation-therapy"
      }
    ]
  },
  {
    name: "General Surgery",
    icon: <GeneralSurgeryIcon />,
    description: "Surgical treatments for common conditions requiring expert care.",
    sublinks: [
      {
        name: "General Surgery",
        link: "/treatments/general-surgery"
      },

    ]
  },
  {
    name: "Vascular Surgery",
    icon: <VascularSurgeryIcon />,
    description: "Specialized treatments for vascular diseases and conditions.",
    sublinks: [
      {
        name: "Vascular Surgery",
        link: "/treatments/vascular-surgery"
      },

    ]
  },
  {
    name: "Dental Surgery",
    icon: <DentalSurgeryIcon />,
    description: "Comprehensive dental surgeries for functional and cosmetic needs.",
    sublinks: [
      {
        name: "Dental Surgery",
        link: "/treatments/dental-surgery"
      },

    ]
  },
  {
    name: "Orthopedics",
    icon: <OrthopedicIcon />, // Replace with an appropriate icon
    description: "Advanced surgical and non-surgical treatments for bone and joint conditions.",
    sublinks: [
      {
        name: " Robotic Hip Replacement Surgery",
        link: "/treatments/hip-replacement-surgery"
      },
      {
        name: "Robotic Knee Replacement Surgery",
        link: "/treatments/knee-replacement-surgery"
      },
      {
        name: "Shoulder Replacement Surgery",
        link: "/treatments/shoulder-replacement-surgery"
      },
      {
        name: "Arthroscopy Surgery",
        link: "/treatments/arthroscopy-surgery"
      },

    ]
  },
  // {
  //   name: "Gastroenterology",
  //   icon: <GastroenterologyIcon />, // Replace with an appropriate icon
  //   description: "Expert diagnosis and treatment for digestive system disorders.",
  //   sublinks: [
  //     {
  //       name: "Endoscopy",
  //       link: "/treatments/endoscopy"
  //     },
  //     {
  //       name: "Colonoscopy",
  //       link: "/treatments/colonoscopy"
  //     },
  //     {
  //       name: "Liver Biopsy",
  //       link: "/treatments/liver-biopsy"
  //     },
  //     {
  //       name: "Pancreatitis Treatment",
  //       link: "/treatments/pancreatitis-treatment"
  //     },
  //     {
  //       name: "Hepatitis Treatment",
  //       link: "/treatments/hepatitis-treatment"
  //     },
  //     {
  //       name: "Crohn’s Disease Treatment",
  //       link: "/treatments/crohns-disease-treatment"
  //     },
  //     {
  //       name: "Ulcerative Colitis Treatment",
  //       link: "/treatments/ulcerative-colitis-treatment"
  //     }
  //   ]
  // },
  {
    name: "Cosmetic Surgery",
    icon: <CosmeticSurgeryIcon />, // Replace with an appropriate icon
    description: "Enhance appearance and function with expert cosmetic and reconstructive procedures.",
    sublinks: [
      {
        name: "Male to Female Sex Change Surgery",
        link: "/treatments/male-to-female-sex-change-surgery"
      },

    ]
  },
  {
    name: "Pediatric Cardiology",
    icon: <PediatricCardiologyIcon />, // Replace with an appropriate icon
    description: "Specialized heart care for children with congenital and acquired heart conditions.",
    sublinks: [
      {
        name: "Tetralogy of Fallot Repair",
        link: "/treatments/tetralogy-of-fallot-repair"
      },
      {
        name: "ASD Closure",
        link: "/treatments/asd-closure"
      },
      {
        name: "Arterial Switch Surgery",
        link: "/treatments/arterial-switch-surgery"
      },
      {
        name: " Bidirectional Glenn On Bypass surgery",
        link: "/treatments/bd-glenn-on-bypass"
      },
      {
        name: "Bentall Surgery",
        link: "/treatments/bentall-surgery"
      },
      {
        name: "BT Shunt with Bypass Surgery",
        link: "/treatments/bt-shunt-with-bypass"
      },
      {
        name: "Fontan Procedure",
        link: "/treatments/fontan-procedure"
      },
      {
        name: "PDA Closure",
        link: "/treatments/pda-closure"
      },
      {
        name: "VSD Closure",
        link: "/treatments/vsd-closure"
      }
    ]
  },
  {
    name: "ENT Surgery",
    icon: <ENTIcon />, // Replace with an appropriate icon
    description: "Comprehensive treatment for ear, nose, and throat conditions.",
    sublinks: [
      {
        name: "Cochlear Implant Surgery",
        link: "/treatments/vsd-closure"
      }
    ]
  },
  // {
  //   name: "Ophthalmology",
  //   icon: <EyeIcon />, // Replace with an appropriate icon
  //   description: "Expert care for vision and eye-related disorders.",
  //   sublinks: [
  //     {
  //       name: "Cataract Surgery",
  //       link: "/treatments/cataract-surgery"
  //     },
  //     {
  //       name: "LASIK Eye Surgery",
  //       link: "/treatments/lasik-eye-surgery"
  //     },
  //     {
  //       name: "Glaucoma Surgery",
  //       link: "/treatments/glaucoma-surgery"
  //     },
  //     {
  //       name: "Retinal Detachment Surgery",
  //       link: "/treatments/retinal-detachment-surgery"
  //     },
  //     {
  //       name: "Corneal Transplant Surgery",
  //       link: "/treatments/corneal-transplant-surgery"
  //     }
  //   ]
  // },
  // {
  //   name: "Pulmonology",
  //   icon: <LungIcon />, // Replace with an appropriate icon
  //   description: "Comprehensive care for lung and respiratory disorders.",
  //   sublinks: [
  //     {
  //       name: "Sleep Apnea Treatment",
  //       link: "/treatments/sleep-apnea-treatment"
  //     },
  //     {
  //       name: "Lung Cancer Surgery",
  //       link: "/treatments/lung-cancer-surgery"
  //     },
  //     {
  //       name: "Bronchoscopy",
  //       link: "/treatments/bronchoscopy"
  //     },
  //     {
  //       name: "Pulmonary Fibrosis Treatment",
  //       link: "/treatments/pulmonary-fibrosis-treatment"
  //     }
  //   ]
  // },
  {
    name: "Eye Surgery",
    icon: <EyeIcon />, // Replace with an appropriate icon
    description: "Advanced surgical procedures for various eye conditions to restore and enhance vision.",
    sublinks: [
      {
        name: "Contoura Super Vision Surgery",
        link: "/treatments/contoura-super-vision-surgery"
      },
      {
        name: "Robotic Femtosecond Laser Cataract Surgery",
        link: "/treatments/robotic-femtosecond-laser-cataract-surgery"
      },
      {
        name: "Retinal Detachment Surgery",
        link: "/treatments/retinal-detachment-surgery"
      },
      {
        name: "Squint Surgery",
        link: "/treatments/squint-surgery"
      },
      {
        name: "Ptosis Surgery",
        link: "/treatments/ptosis-surgery"
      },
      {
        name: "Vitrectomy Surgery",
        link: "/treatments/vitrectomy-surgery"
      }
    ]
  },
  {
    name: "Heart Surgery",
    icon: <HeartIcon />, // Replace with an appropriate icon
    description: "Comprehensive cardiac surgical services for various heart conditions.",
    sublinks: [
      {
        name: "Coronary Artery Bypass Graft (CABG)",
        link: "/treatments/coronary-artery-bypass-graft"
      },
      {
        name: "Minimally Invasive Cardiac Surgery (CABG)",
        link: "/treatments/minimally-invasive-cardiac-surgery"
      },
      {
        name: "MICS Valve Replacement Surgery",
        link: "/treatments/mics-valve-replacement-surgery"
      },
      {
        name: "Double Valve Replacement (DVR)",
        link: "/treatments/double-valve-replacement"
      },
      {
        name: "Valve Replacement",
        link: "/treatments/valve-replacement"
      },
      {
        name: "Bentall Surgery",
        link: "/treatments/bentall-surgery"
      }
    ]
  },
  {
    name: "Urology",
    icon: <UrologyIcon />, // Replace with an appropriate icon
    description: "Comprehensive urological treatments addressing various conditions and disorders.",
    sublinks: [
      {
        name: "Erectile Dysfunction Treatments",
        link: "/treatments/erectile-dysfunction-treatments"
      },
      {
        name: "Penile Implant",
        link: "/treatments/penile-implant"
      }
    ]
  },
  {
    name: "Gynecology",
    icon: <GynecologyIcon />, // Replace with an appropriate icon
    description: "Comprehensive women's health services, including surgical and non-surgical treatments.",
    sublinks: [
      {
        name: "Gynecology Treatments",
        link: "/treatments/gynecology-treatments"
      }
    ]
  },
  {
    name: "Reproductive Medicine",
    icon: <ReproductiveMedicineIcon />, // Replace with an appropriate icon
    description: "Advanced fertility treatments and reproductive health services.",
    sublinks: [
      {
        name: "IVF Procedure",
        link: "/treatments/ivf-procedure"
      },
      {
        name: "Male Infertility Treatment",
        link: "/treatments/male-infertility-treatment"
      },
      {
        name: "Female Infertility Treatment",
        link: "/treatments/female-infertility-treatment"
      }
    ]
  }


];



