import { BrainIcon, SpineIcon, CardiologyIcon, TransplantIcon, OncologyIcon, OrthopedicIcon,  CosmeticSurgeryIcon, UrologyIcon, GynecologyIcon, ReproductiveMedicineIcon } from '@/components/icons';


export const allSubTreatmentLinks = () => {

  const sublinks = Treatments.map((treatment) => {
    return treatment.sublinks;
  });
  return sublinks.flat();
}


export const Treatments = [
  {
    name: "IVF",
    icon: <ReproductiveMedicineIcon />, // Replace with an appropriate icon
    description: "Advanced fertility treatments and reproductive health services.",
    category: "ivf",
    sublinks: [
      {
        name: "IVF Procedure",
        link: "ivf-procedure"
      }
    ]
  },
  {
    name: "Neurosurgery",
    icon: <BrainIcon />,
    description: "Comprehensive neurosurgical procedures for various brain conditions.",
    category: "neurosurgery",
    sublinks: [
      {
        name: "Brain Tumor Surgery",
        link: "brain-tumor-surgery"
      },
      {
        name: "Pituitary Tumor Treatment",
        link: "pituitary-tumor-treatment"
      },
      {
        name: "Trans Nasal Trans Sphenoidal Surgery",
        link: "trans-nasal-trans-sphenoidal-surgery"
      },
      {
        name: "Deep Brain Stimulation Surgery",
        link: "deep-brain-stimulation-surgery"
      },
      {
        name: "Burr Hole Surgery",
        link: "burr-hole-surgery"
      },
      {
        name: "Craniotomy Surgery",
        link: "craniotomy-surgery"
      },
      {
        name: "VP Shunt Surgery",
        link: "vp-shunt-surgery"
      },
      {
        name: "Brain AVM Surgery",
        link: "brain-avm-surgery"
      },
      {
        name: "Brain Aneurysm Surgery",
        link: "brain-aneurysm-surgery"
      }
    ]
  },
  
  {
    name: "Spine Surgery",
    icon: <SpineIcon />,
    description: "Advanced surgical treatments for spine-related disorders.",
    category: "spine",
    sublinks: [
      {
        name: "Brachial Plexus Injuries Surgery",
        link: "brachial-plexus-injuries-surgery"
      },
      {
        name: "Microdiscectomy Surgery",
        link: "microdiscectomy-surgery"
      },
      {
        name: "Scoliosis Surgery",
        link: "scoliosis-surgery"
      },
      {
        name: "Kyphoplasty Surgery",
        link: "kyphoplasty-surgery"
      },
      {
        name: "Laminectomy Surgery",
        link: "laminectomy-surgery"
      },
      {
        name: "Transforaminal Lumbar Interbody Fusion Surgery (TLIF)",
        link: "tlif-surgery"
      },
      {
        name: "Anterior Cervical Discectomy Surgery (ACDF)",
        link: "acdf-surgery"
      },
      {
        name: "Posterior Lumbar Interbody Fusion (PLIF) Surgery",
        link: "plif-surgery"
      },
      {
        name: "Spinal Decompression Surgery",
        link: "spinal-decompression-surgery"
      },
      {
        name: "Spinal Tumor Treatment",
        link: "spinal-tumor-treatment"
      }
    ]
  },
  
  {
    name: "Cardiology",
    icon: <CardiologyIcon />,
    description: "Minimally invasive procedures for heart-related conditions.",
    category: "cardiology",
    sublinks: [
      {
        name: "EPS & RF Ablation Treatment",
        link: "eps-rf-ablation-treatment"
      },
      {
        name: "AICD Device Implantation (Arrhythmia Treatment)",
        link: "aicd-device-implantation"
      },
      {
        name: "PTCA (Angioplasty Surgery)",
        link: "ptca-angioplasty-surgery"
      },
      {
        name: "TAVI Surgery",
        link: "tavi-surgery"
      },
      {
        name: "Pacemaker Implantation Surgery",
        link: "pacemaker-implantation-surgery"
      },
      {
        name: "Tetralogy of Fallot Repair",
        link: "tetralogy-of-fallot-repair"
      },
      {
        name: "ASD Closure",
        link: "asd-closure"
      },
      {
        name: "Arterial Switch Surgery",
        link: "arterial-switch-surgery"
      },
      {
        name: " Bidirectional Glenn On Bypass surgery",
        link: "bd-glenn-on-bypass"
      },
      {
        name: "Bentall Surgery",
        link: "bentall-surgery"
      },
      {
        name: "BT Shunt with Bypass Surgery",
        link: "bt-shunt-with-bypass"
      },
      {
        name: "Fontan Procedure",
        link: "fontan-procedure"
      },
      {
        name: "PDA Closure",
        link: "pda-closure"
      },
      {
        name: "VSD Closure",
        link: "vsd-closure"
      },
      {
        name: "Coronary Artery Bypass Graft (CABG)",
        link: "coronary-artery-bypass-graft"
      },
      {
        name: "Minimally Invasive Cardiac Surgery (CABG)",
        link: "minimally-invasive-cardiac-surgery"
      },
      {
        name: "MICS Valve Replacement Surgery",
        link: "mics-valve-replacement-surgery"
      },
      {
        name: "Double Valve Replacement (DVR)",
        link: "double-valve-replacement"
      },
      {
        name: "Valve Replacement",
        link: "valve-replacement"
      },
      {
        name: "Bentall Surgery",
        link: "bentall-surgery"
      }
    ]
  },
  
  {
    name: "Liver Transplant",
    icon: <TransplantIcon />,
    description: "Comprehensive organ transplant services with high success rates.",
    category: "liver",
    sublinks: [
      {
        name: "Liver Transplant Treatment",
        link: "liver-transplant-treatment"
      }
    ]
  },
  {
    name: "Liver Transplant",
    icon: <TransplantIcon />,
    description: "Comprehensive organ transplant services with high success rates.",
    category: "kidney",
    sublinks: [
      {
        name: "Kidney Transplant Surgery",
        link: "kidney-transplant-surgery"
      }
    ]
  },
  {
    name: "Oncology",
    icon: <OncologyIcon />,
    description: "Advanced surgical treatments for various cancers.",
    category: "oncology",
    sublinks: [
      {
        name: "Breast Cancer Treatment",
        link: "breast-cancer-treatment"
      },
      {
        name: "Osteosarcoma Surgery",
        link: "osteosarcoma-surgery"
      },
      {
        name: "Tibial Sarcoma (Tibiyasarcoma)",
        link: "tibial-sarcoma"
      },
      {
        name: "Ewing’s Sarcoma Treatment",
        link: "ewings-sarcoma-treatment"
      },
      {
        name: "Brain Tumor Treatment",
        link: "brain-tumor-treatment"
      },
      {
        name: "Chemotherapy",
        link: "chemotherapy"
      },
      {
        name: "Radiation Therapy",
        link: "radiation-therapy"
      },
      {
        name: "Chondrosarcoma Treatment",
        link: "chondrosarcoma-treatment"
      },
      {
        name: "Bone Cancer Treatment",
        link: "bone-cancer-treatment"
      },
      {
        name: "Lung Cancer Treatment",
        link: "lung-cancer-treatment"
      },
      {
        name: "Prostate Cancer Treatment",
        link: "prostate-cancer-treatment"
      },
      {
        name: "Cervical Cancer Treatment",
        link: "cervical-cancer-treatment"
      },
      {
        name: "Liver Cancer Treatment",
        link: "liver-cancer-treatment"
      },
      {
        name: "Ovarian Cancer Treatment",
        link: "ovarian-cancer-treatment"
      },
      {
        name: "Colon Cancer Treatment",
        link: "colon-cancer-treatment"
      },
      {
        name: "Stomach Cancer Treatment",
        link: "stomach-cancer-treatment"
      },
      {
        name: "HIPEC Treatment",
        link: "HIPEC-treatment"
      },
      {
        name: "Pancreatic Cancer Treatment",
        link: "pancreatic-cancer-treatment"
      },
      {
        name: "Radio active Iodine Therapy",
        link: "radio-active-iodine-therapy"
      },
      {
        name: "Latest Ratiantion Therapy for Cancer",
        link: "latest-radiation-therapy"
      }
    ]
  },
  {
    name: "Orthopedics",
    icon: <OrthopedicIcon />, // Replace with an appropriate icon
    description: "Advanced surgical and non-surgical treatments for bone and joint conditions.",
    category: "orthopedics",
    sublinks: [
      {
        name: " Robotic Hip Replacement Surgery",
        link: "hip-replacement-surgery"
      },
      {
        name: "Robotic Knee Replacement Surgery",
        link: "knee-replacement-surgery"
      },
      {
        name: "Shoulder Replacement Surgery",
        link: "shoulder-replacement-surgery"
      },
      {
        name: "Arthroscopy Surgery",
        link: "arthroscopy-surgery"
      },
      {
        name: "Total Knee Replacement (TKR)",
        link: "total-knee-replacement"
      },
      {
        name: "Total Hip Replacement (THR)",
        link: "total-hip-replacement"
      },

    ]
  },
  {
    name: "Cosmetic Surgery",
    icon: <CosmeticSurgeryIcon />, // Replace with an appropriate icon
    description: "Enhance appearance and function with expert cosmetic and reconstructive procedures.",
    category: "cosmetic",
    sublinks: [
      {
        name: "Male to Female Sex Change Surgery",
        link: "male-to-female-sex-change-surgery"
      },

    ]
  },
  {
    name: "Urology",
    icon: <UrologyIcon />, // Replace with an appropriate icon
    description: "Comprehensive urological treatments addressing various conditions and disorders.",
    category: "urology",
    sublinks: [
      {
        name: "Erectile Dysfunction Treatments",
        link: "erectile-dysfunction-treatments"
      },
      {
        name: "Robotic Bladder Diverticulectomy",
        link: "robotic-bladder-diverticulectomy"
      },
      {
        name: "Penile Implant",
        link: "penile-implant"
      }
    ]
  },
  {
    name: "Gynecology",
    icon: <GynecologyIcon />, // Replace with an appropriate icon
    description: "Comprehensive women's health services, including surgical and non-surgical treatments.",
    category: "gynecology",
    sublinks: [
      {
        name: "Gynecology Treatments",
        link: "gynecology-treatments"
      }
    ]
  }


];



