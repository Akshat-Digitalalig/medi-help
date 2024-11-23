import { Doctor } from "@/types/doctors";

export const doctors: Doctor[] = [
  
  {
    id: "dr-sanjiv-saigal-hepatology",
    name: "Dr. Sanjiv Saigal",
    yearsOfExperience: 30,
    designation: "Director, MBBS, MD",
    image: "/doctors/dr-sanjiv-saigal-hepatology.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "ck-birla-hospital-gurgaon",
    about: {
      title: "About Dr. Sanjiv Saigal",
      items: [
        {
          content:
            "A trained Hepatologist, has spearheaded the medical team of liver transplantation in the largest liver transplant program in India for over a decade",
        },
        {
          content:
            "Performed 1500 liver transplants, including both cadaveric and living donor liver transplants",
        },
        {
          content:
            "Perform about 25 liver transplants every month with a success rate of over 90%",
        },
        {
          content:
            "Expertise in Liver Transplantation (Transplant Hepatology), Acute Liver Failure, Viral Hepatitis, Alcoholic Liver Disease, Liver Cancer & Drug Induced Liver Disease",
        },
        {
          content:
            "Published over 130 presentations in national and international forums",
        },
        {
          content:
            "Received numerous awards including the Calcutta University Gold Medal, National Pfizer award, INLAKS Fellowship in liver transplantation in King's College Hospital, London etc",
        },
        {
          content:
            "Member of Royal College of Physicians (MRCP) and Member of National Academy of Medical Sciences (MAMS)",
        },
      ],
    },
    specialties: [
      "Liver Transplantation (Transplant Hepatology)",
      "Acute Liver Failure",
      "Viral Hepatitis",
      "Alcoholic Liver Disease",
      "Liver Cancer & Drug Induced Liver Disease",
    ],
    skilledAt: ["Liver Transplant"],
    specialInterests: ["Liver Transplantation (Transplant Hepatology)"],
    education: [
      "MBBS, 1989, Royal College of Physicians, London",
      "MD, 1994, Institute of Medical Education and Research",
      "MRCP, 1996, Royal College of Physicians, London",
      "MRCP, 1999, Royal College of Physicians, London",
      "DM, 1998, G.B Pant University of Agri & Tech.",
      "DNB, 1996, National Borad of Examinations Ministry of Health Government of India",
    ],
    experience: [
      "Director, Medanta - The Medicity, Gurgaon",
      "Consultant, Sir Ganga Ram Hospital, New Delhi",
      "Consultant, King's College Hospital, London, United Kingdom",
      "Consultant, G.B Pant Hospital",
    ],
    awards: [],
    reviews: [
      {
        name: "Anjali Sharma",
        date: "2024-10-01",
        rating: 5,
        content:
          "Dr. Aruna Kalra is an amazing gynecologist. She made me feel comfortable during the entire process and provided excellent care.",
      },
      {
        name: "Ravi Verma",
        date: "2024-09-15",
        rating: 4,
        content:
          "Highly skilled and knowledgeable. She took time to explain everything clearly and was very supportive throughout.",
      },
    ],
  },
  
  {
    id: "dr-rajeev-sood",
    name: "Dr. Rajeev Sood",
    yearsOfExperience: 36,
    designation: "Chairman, Urologist",
    image: "/doctors/dr-rajeev-sood.webp",
    workingAt: "Marengo Asia Hospitals, Faridabad",
    hospitalId: "marengo-asia-hospitals-faridabad",
    about: {
      title: "About Dr. Rajeev Sood",
      items: [
        {
          content:
            "Dr. Rajeev Sood is a Urologist with over 36 years of experience.",
        },
        {
          content:
            "He was awarded the Vishisht Seva Medal by the President of India for his outstanding performance.",
        },
        {
          content:
            "Dr. Sood has expertise in treating Urologic oncology, Bladder prolapse, Cancers, Enlarged prostate, Erectile dysfunction, Peyronie’s disease, interstitial cystitis, Kidney and ureteral stones, Prostatitis, Undescended testes, Urethral stricture, and Pediatric urology.",
        },
        {
          content:
            "He has performed more than 3000 kidney transplants during his tenure in the Armed Forces.",
        },
        {
          content:
            "Dr. Sood has been invited to various seminars and conferences, including as a Guest Lecturer at Expanse Urology and Green Light Laser Vapo-Incision Prostate held in Malaysia and Hong Kong.",
        },
        {
          content:
            "He has been active in the academic field and has been faculty at numerous Indian and International conferences and operative workshops, with numerous publications to his credit.",
        },
      ],
    },
    specialties: [
      "Urologic Oncology",
      "Bladder Prolapse",
      "Enlarged Prostate",
      "Erectile Dysfunction",
      "Peyronie’s Disease",
      "Interstitial Cystitis",
      "Kidney and Ureteral Stones",
      "Prostatitis",
      "Undescended Testes",
      "Urethral Stricture",
      "Pediatric Urology",
    ],
    skilledAt: [
      "Prostatectomy",
      "Penile Prosthesis Implantation",
      "Radical Nephrectomy",
      "Radical Prostatectomy",
      "Removal of Kidney Stones",
      "TURP",
      "Urethroplasty",
      "Erectile Dysfunction Treatment",
    ],
    specialInterests: [
      "Urinary Tract Infection (UTI)",
      "Minimally Invasive Urology",
      "Vasectomy",
      "Transurethral Incision of The Prostate (TUIP)",
      "Liver Disease Treatment",
      "Green Laser",
      "HoLEP Prostate Surgery",
      "Robot-assisted Laparoscopic Surgery",
    ],
    education: [
      "MBBS, Armed Forces Medical College",
      "MS, Armed Forces Medical College",
      "MCh, All India Institute of Medical Sciences (AIIMS)",
      "DNB, National Board of Examinations",
    ],
    experience: [
      "Consultant, Command Hospital, Lucknow",
      "Consultant, Military Hospital Panagarh, West Bengal",
      "Senior Consultant, Max Super Speciality Hospital, Saket, New Delhi",
      "Director, Fortis Flt. Lt. Rajan Dhall Hospital, Vasant Kunj, New Delhi",
      "Director, Sanar International Hospital",
      "Chairman, Marengo Asia Healthcare",
    ],
    awards: [
      "Vishisht Seva Medal by the President of India",
      "Gold medals during MBBS, MS, and MCh studies",
    ],
    reviews: [
      {
        name: "Mahendra",
        date: "2024-10-01",
        rating: 5,
        content:
          "I needed a kidney transplant, and my wife donated hers with the help of Dr. Rajeev Sood in a foreign country. He is my saviour and I am forever grateful to him.",
      },
    ],
  },

  {
    id: "dr-kulbhushan-singh-dagar",
    name: "Dr. Kulbhushan Singh Dagar",
    yearsOfExperience: 37,
    designation: "Chief Cardiac Surgeon",
    image: "/doctors/dr-kulbhushan-singh-dagar.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket-new-delhi",
    about: {
      title: "About Dr. Kulbhushan Singh Dagar",
      items: [
        {
          content:
            "Dr. Kulbhushan Singh Dagar is a renowned Cardiac Surgeon with over 37 years of experience.",
        },
        {
          content:
            "He specializes in treating all kinds of congenital cardiac defects in both newborns and children.",
        },
        {
          content:
            "Dr. Dagar completed his MBBS in 1987 and MS in General Surgery from S N Medical College & Hospital, Agra University, in 1991.",
        },
        {
          content:
            "He pursued an M.Ch in Cardiothoracic and Vascular Surgery at GB Pant Hospital, University of Delhi, in 1994.",
        },
        {
          content:
            "Dr. Dagar received the 1st Prize for his work on the 'Management of Cardiopulmonary Bypass in Infants with Sickle Cell Disease' at the International Society of Certified Electronics Technicians (ISCET).",
        },
        {
          content:
            "He has published extensively in both national and international journals.",
        },
      ],
    },
    specialties: [
      "Artificial Heart Valve Surgery",
      "Bypass Surgery",
      "Cardiomyoplasty",
      "Heart Transplant",
      "Stent Placement",
    ],
    skilledAt: [
      "Angioplasty and Stent Placement",
      "Tetralogy of Fallot Repair",
      "Ventricular Septal Defect (VSD) Treatment",
      "Hip Arthroscopy",
      "Epilepsy Treatment",
      "Hydrocephalus Treatment",
      "Spina Bifida Treatment",
      "Cleft Palate Surgery",
      "Hydrocele Surgery",
      "Varicocele (Scrotum Varicose Veins) Treatment",
      "Pediatric Liver Transplant Surgery",
    ],
    specialInterests: [
      "Congenital Heart Disease",
      "Pediatric Cardiac Surgery",
      "Cardiopulmonary Bypass Management",
    ],
    education: [
      "MBBS, 1987, S N Medical College & Hospital, Agra University",
      "MS in General Surgery, 1991, S N Medical College & Hospital, Agra University",
      "M.Ch in Cardiothoracic and Vascular Surgery, 1994, GB Pant Hospital, University of Delhi",
    ],
    experience: [
      "Chief Cardiac Surgeon, Max Super Speciality Hospital, Saket, New Delhi",
    ],
    awards: [
      "1st Prize for Management of Cardiopulmonary Bypass in Infants with Sickle Cell Disease at ISCET",
    ],
    reviews: [
      {
        name: "Ananya Sharma",
        date: "2024-10-15",
        rating: 5,
        content:
          "Dr. Dagar performed a complex heart surgery on my newborn with utmost precision. His expertise and compassionate care were truly commendable.",
      },
      {
        name: "Rohit Verma",
        date: "2024-09-20",
        rating: 5,
        content:
          "We are grateful to Dr. Kulbhushan Singh Dagar for successfully treating our child's congenital heart defect. His dedication and skill are unparalleled.",
      },
    ],
  },

  {
    id: "dr-viveka-kumar",
    name: "Dr. Viveka Kumar",
    yearsOfExperience: 25,
    designation:
      "Vice Chairman & Chief of Cath Labs (Pan Max) - Cardiac Sciences",
    image: "/doctors/dr-viveka-kumar.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Dr. Viveka Kumar",
      items: [
        {
          content:
            "Dr. Viveka Kumar is an interventional cardiologist with more than 25 years of experience in Cardiology.",
        },
        {
          content:
            "He specializes in advanced cardiac care including structural heart interventions, device-based therapy, and complex angioplasties.",
        },
        {
          content:
            "He is known for his expertise in TAVR, Mitra Clip, and Structural Heart Fellowship programs in the USA and Europe.",
        },
        {
          content:
            "Dr. Viveka has been honored by the Iraq Government for his contributions to cardiac services.",
        },
      ],
    },
    specialties: [
      "Interventional Cardiology",
      "Structural Heart Interventions",
      "Device-Based Therapy",
      "Complex Angioplasties",
    ],
    skilledAt: [
      "TAVR",
      "TMVR",
      "Mitra Clip",
      "Pacemaker Implantation",
      "CRT-P",
      "CRT-D",
      "AICD",
      "ICD",
    ],
    specialInterests: [
      "Structural Heart Interventions",
      "Advanced Electrophysiology",
      "Complex Cardiac Procedures",
    ],
    education: [
      "St. George Hospital, London (UK) - Interventional Cardiology & EP",
      "Southampton University Hospital, Southampton (UK) - Interventional Cardiology & EP",
      "TAVR, Mitra Clip & Structural Heart Fellowship in the USA, Europe & Denmark",
      "FSCAL - Society for Cardiovascular Angiography and Interventions",
      "FACC - American College of Cardiology",
      "FESC - European Society of Cardiology",
      "FSAICS - Fellow of Southeast Asian International Cardiovascular Society",
      "MRHS - Member of the Royal Hospital Society",
      "FRCP (Edin)",
      "LPS Institute of Cardiology, Kanpur",
      "Banaras Hindu University, Varanasi, Uttar Pradesh",
    ],
    experience: [
      "Vice Chairman & Chief of Cath Labs, Max Super Speciality Hospital, Saket, New Delhi",
      "More than 25 years of Interventional Cardiology experience",
    ],
    awards: [
      "Chikitsa Ratna Award, DMA",
      "Vidya Ratna Award, Kanpur University (2010)",
      "International Award of Excellence in Cardiology - Mysore",
      "Mithila Samman from Lt. Shri Arun Jaitley (Former Minister of Finance & Corporate Affairs)",
      "Dr. K Sharan Cardiology Excellence Award by IMA",
      "Life Time Achievement Award by Indian Society of Gastroenterology",
    ],
    reviews: [],
  },
 
  {
    id: "dr-akshay-tiwari",
    name: "Dr. Akshay Tiwari",
    yearsOfExperience: 20,
    designation: "Senior Director - Musculoskeletal Oncology",
    image: "/doctors/dr-akshay-tiwari.webp",
    workingAt:
      "Max Super Speciality Hospital, Saket, and Max Super Speciality Hospital, Shalimar Bagh",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Dr. Akshay Tiwari",
      items: [
        {
          content:
            "Dr. Akshay Tiwari is a Senior Director specializing in Musculoskeletal Oncology.",
        },
        {
          content:
            "He is highly trained in Musculoskeletal Surgical Oncology with international experience.",
        },
      ],
    },
    specialties: [
      "Cancer Care/Oncology",
      "Musculoskeletal Surgical Oncology",
      "Musculoskeletal Oncology",
      "Pediatric Oncology",
      "Surgical Oncology",
    ],
    skilledAt: [
      "Cancer Care / Oncology",
      "Musculoskeletal Oncology",
      "Paediatric (Ped) Oncology",
      "Surgical Oncology",
      "Musculoskeletal Surgical Oncology",
    ],
    specialInterests: [],
    education: [
      "Fellowship in Musculoskeletal Oncology - Rizzoli Orthopedic Institute, Italy",
      "Diploma in Tissue Banking, Singapore",
      "Bone and Soft Tissue Unit, Tata Memorial Hospital, Mumbai",
      "MS Orthopedics - Lady Hardinge Medical College, Delhi",
      "MBBS, RG Kar Medical College, Kolkata",
    ],
    experience: [
      "Senior Resident (Orthopedics) - Lady Hardinge Medical College and Associated Hospitals",
      "Bone and Soft Tissue Unit, Tata Memorial Hospital, Mumbai",
      "Orthopedic Oncologist - Rajiv Gandhi Cancer Institute, Delhi",
    ],
    awards: [
      "Governor's Medal for topping in third professional MBBS exams",
      "Gold Medal for highest marks in Anatomy in first professional MBBS exams",
      "First runner-up in semi-finals in All India Medi Mind Quiz",
      "Awarded a Fellowship in Orthopedic Oncology by Delhi Orthopedic Association at Tata Memorial Hospital, Mumbai",
      "Best Published Paper award at RGCON, 2011",
      "Best Paper Award at ICC, 2013",
    ],
    reviews: [],
  },
  {
    id: "dr-rajesh-kumar-verma",
    name: "Dr. Rajesh Kumar Verma",
    yearsOfExperience: 12,
    designation: "Director - Orthopedics, Trauma & Spine Surgery",
    image: "/doctors/dr-rajesh-kumar-verma.webp",
    workingAt: "Marengo Asia Hospitals, Gurugram (NCR)",
    hospitalId: "marengo-asia-hospitals-gurugram",
    about: {
      title: "About Dr. Rajesh Kumar Verma",
      items: [
        {
          content: "Dr. Rajesh Kumar Verma is a renowned specialist in Orthopedics, Trauma, and Spine Surgery.",
        },
        {
          content: "Dr. Rajesh Kumar Verma has nurtured his skills in treating spinal disorders for the last 29 years and has emerged as a boon for those who suffer from complex bone, joint and spine disorders. It is his dedication towards his patients and his commitment to his chosen field of work that has earned him his recognition today."
        },
        {
          content: "He performed the maximum number of percutaneous spine surgeries like Kyphoplasty, Disc Excisions using state-of-the-art Joimax TESSY's system, Nucleoplasty, SpineJet Hydrodiscectomy and Pain Management procedures using radiofrequency techniques."
        },
        {
          content:"Dr. Rajesh Kumar Verma has been a part of more than 24000 surgical cases, personally performing over 15,000 surgeries, including all types of Spine surgeries, Joint Replacements, Pediatric Orthopedics and Complex Trauma Surgeries."
        }

      ]
    },
    specialties: [
      "Scoliosis & Kyphosis Deformity Surgery",
      "3D Computer Navigated Spine & Joint Replacements",
      "Endoscopic & Minimally Invasive Spine Surgery",
      "Motion Preservation & Disc Replacement Surgery",
      "Pain Management Radio Frequency Procedures for Back & Neck Pain",
      "Complex Trauma, Revision Trauma, Spine Trauma and Pelvic Acetabular Surgeries"
    ],
    skilledAt: [
      "Spine Surgery",
      "Trauma Surgery",
      "Joint Replacements"
    ],
    specialInterests: [],
    education: [
      "MS (Ortho), FRSH, FIAO (USA), AO Fellowship Trauma, Denver",
      "USA Fellowship Spine Surgery, Seoul, South Korea",
      "AO International Trauma Fellowship at Denver Health Medical Centre & Rocky Mountain Regional",
      "Trauma Centre, Denver, Colorado USA",
      "Fellowship Spine Surgery at Severance Spine Centre, Yonsei University, Seoul, South Korea",
      "Fellowship Endoscopic and Minimally Invasive Spine Surgery at Nanoori Hospital, Suwon, South Korea",
      "Observership for Knee And Hip Joint Replacement at Prince Charles and Northpoint Hospital, Brisbane, Queensland, Australia",
      "Observership Endoscopic Spine Surgery at Netherlands and Munich, Germany"
    ],
    experience: [
      "Director & Senior Consultant - Narayana Superspeciality Hospital, Gurugram, Jan 2018 to Jan 2022",
      "Head Orthopedics, Director Trauma & Spine Surgery, Artemis Health Institute, 2009 to 2018",
      "Paras Hospital, Columbia Asia Hospital, Umkal Hospital, 2002 to 2009",
      "Registrar at PGIMS, LHMC & RML Hospitals, New Delhi, 1994 to 2000"
    ],
    awards: [
      "Awarded Best Orthopaedic Surgeon in Gurugram 2010 by Big Brands Research Group",
      "Awarded Best Spine Surgeon in NCR New Delhi 2013 by Big Brands & Times Research Media Group",
      "Awarded Best Spine Surgeon 2016 by Times Media International, NCR"
    ],
    reviews: []
  },
  {
    id: "dr-aman-gupta",
    name: "Dr. Aman Gupta",
    yearsOfExperience: 24,
    designation: "Clinical Director - Urology",
    image: "/doctors/dr-aman-gupta.webp",
    workingAt: "Marengo Asia Hospitals, Gurugram (NCR)",
    hospitalId: "marengo-asia-hospitals-gurugram",
    about: {
      title: "About Dr. Aman Gupta",
      items: [
        {
          content: "Dr. Aman Gupta is Clinical Director specializing in Urology, Andrology, Robotic & Kidney Transplant Surgery at Marengo Asia Hospitals, Gurugram"
        },
        {
          content:" With 24 years of experience and more than 15,000 surgeries, he is an expert in his field"
        },
        {
          content: "He has been HOD at Fortis Hospital, Vasant Kunj, for 15 years, performing complex surgeries across specialties"
        },
        {
          content: "Dr. Aman Gupta speaks five languages (Bengali, Gujarati, Punjabi, Hindi, and English) and has treated patients from India and countries like Tanzania, Kenya, Myanmar, Uzbekistan, Afghanistan, Nepal, Pakistan, and more"
        },
        {
          content: "He has authored three books and delivered over 100 lectures in India and internationally"
        }
      ]
    },
    specialties: [
      "Laser Stone and Prostate Surgery",
      "Kidney Transplant",
      "Laparoscopic Surgery",
      "Andrology and Male Infertility",
      "Reconstructive Urology",
      "Urology Cancer Surgeries",
      "Robotic Surgery"
    ],
    skilledAt: [
      "Robotic-Assisted Urology Procedures",
      "Kidney and Prostate Laser Surgery",
      "Male Infertility Treatments"
    ],
    specialInterests: [
      "Laparoscopic and Minimally Invasive Urology",
      "Advanced Kidney Transplant Techniques"
    ],
    education: [
      "MBBS, MS, MCh (Urology & Kidney Transplant)",
      "FACS (Fellow American College of Surgeons)",
      "MINT (Robotic Surgery), Harvard Medical School, USA"
    ],
    experience: [
      "Ex HOD, Fortis Hospital, Vasant Kunj, Delhi",
      "Visiting Surgeon - Tanzania, Nairobi, Uzbekistan, Congo",
     " Over 15,000 surgeries performed during a 24-year career"
    ],
    awards: [
     " All India MCh Entrance Exam Rank 1",
     " University Rank 1, MCh Exam",
      "University Rank 2, MS General Surgery",
     " Authored three books",
     " Delivered over 100 lectures in India and internationally"
    ],
    reviews: []
  },
  {
    id: "prof-dr-vk-jain-neurosurgery",
    name: "Prof. (Dr.) V.K. Jain",
    yearsOfExperience: 43,
    designation: "Principal Director - Department of Neurosurgery",
    image: "/doctors/prof-dr-vk-jain.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      "title": "About Prof. (Dr.) V.K. Jain",
      "items": [
        {
          "content": "Prof. (Dr.) V.K. Jain is a distinguished neurosurgeon with over 43 years of experience."
        },
        {
          "content": "He currently serves as the Principal Director of the Department of Neurosurgery at Max Super Speciality Hospital, Saket, New Delhi."
        },
        {
          "content": "Dr. Jain has held prominent positions, including Chairman of Neurosurgery at Sir Ganga Ram Hospital and Professor at SGPGIMS, Lucknow."
        },
        {
          "content": "He has been a visiting fellow and professor at esteemed institutions in Germany, Switzerland, and Japan."
        },
        {
          "content": "Dr. Jain has authored numerous publications and a book titled 'Craniovertebral Junction Anomalies – The Indian Experience.'"
        },
        {
          "content": "He has received several awards and has been a past president of multiple neurological societies in India."
        }
      ]
    },
    specialties: [
      "Neurosciences",
      "Neurosurgery",
      "Spine Surgery"
    ],
    skilledAt: [
      "Spine Surgery",
      "Cerebro-Vascular Surgery",
      "Base of Skull Surgery",
      "Intraventricular Tumour Surgery",
      "Craniovertebral Junction Surgery"
    ],
    specialInterests: [
      "Spine Surgery",
      "Cerebro-Vascular Surgery",
      "Base of Skull Surgery"
    ],
    education: [
      "MCh (Neurosurgery), NIMHANS, Bangalore, 1981",
      "MBBS, King George Medical College, Lucknow, 1974"
    ],
    experience: [
      "Principal Director - Department of Neurosurgery, Max Super Speciality Hospital, Saket, New Delhi",
      "Chairman Neurosurgery, Sir Ganga Ram Hospital, February 2010 onwards",
      "Professor at SGPGIMS, Lucknow, April 1999 to February 2010",
      "Visiting Fellow, Hannover, Germany, July 2001",
      "Visiting Professor at University Hospital of Geneva, Switzerland, June 2001",
      "Visiting Professor at Fujita Gakuen Health University, Japan, May 1999",
      "Additional Professor at SGPGIMS, Lucknow, September 1987 to April 1999",
      "Associate Professor at NIMHANS, Bangalore, December 1984 to September 1987",
      "Assistant Professor at NIMHANS, Bangalore, September 1981 to December 1984"
    ],
    awards: [
      "Described new entity of Benign Subarachnoid Hemorrhage",
      "Described new technique for Surgery of Atlanto Axial Dislocation",
      "Past President of Neurological Society of India",
      "Past President of Skull Base Surgery Society of India",
      "Past President of Indian Society of Cerebro-Vascular Surgery",
      "Past President of NeuroTrauma Society of India",
      "Past President of UP NeuroScience Society",
      "Past Vice-President of Asian Congress of Neurosurgery"
    ],
    reviews: []
  },
  {
    id: "dr-balbir-singh",
    name: "Dr. Balbir Singh",
    yearsOfExperience: 33,
    designation: "Chairman & Head - Cardiology, Max Healthcare",
    image: "/doctors/dr-balbir-singh.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Dr. Balbir Singh",
      items: [
        {
          content: "Dr. Balbir Singh is the Chairman & Head of Cardiology at Max Healthcare, overseeing the entire cardiology department across all Max hospitals."
        },
        {
          content: "He joined Max Healthcare in November 2019 after serving as Chairman of Interventional Cardiology and Electrophysiology at Medanta Hospital."
        },
        {
          content: "Dr. Singh was awarded the Padma Shri, India's fourth-highest civilian honor, in 2007."
        },
        {
          content: "He has received numerous accolades, including the Best Operator award at India Live and the prestigious Golden Hand Award at AICT Singapore in 2012."
        },
        {
          content: "Dr. Singh is a graduate and postgraduate from Maulana Azad Medical College, New Delhi, and has held a faculty position at AIIMS, New Delhi."
        }
      ]
    },
    specialties: [
      "Cardiac Sciences",
      "Cardiology",
      "Cardiac Electrophysiology-Pacemaker",
      "Interventional Cardiology"
    ],
    skilledAt: [
      "Interventional Cardiology",
      "Cardiac Electrophysiology",
      "Pacemaker Implantation"
    ],
    specialInterests: [
      "Complex Arrhythmia Management",
      "Advanced Cardiac Interventions"
    ],
    education: [
      "MBBS, Maulana Azad Medical College, New Delhi",
      "MD in Internal Medicine, Maulana Azad Medical College, New Delhi",
      "DM in Cardiology, Govind Ballabh Pant Hospital, New Delhi",
      "Fellowship, American College of Cardiology, USA, 2005"
    ],
    experience: [
      "Chairman & Head - Cardiology, Max Healthcare",
      "Chairman of Interventional Cardiology and Electrophysiology, Medanta Hospital (2009-2019)",
      "Senior Consultant, Apollo Hospital (2007-2009)",
      "Principal Consultant, Fortis Heart Institute & Research Center (2004-2007)",
      "Senior Consultant, Batra Hospital (1998-2004)",
      "Senior Professor, AIIMS (1993-1997)"
    ],
    awards: [
      "Padma Shri Award, 2007",
      "Best Operator at India Live 2016",
      "Golden Hand Award at AICT, Singapore, 2012",
      "Best Late-Breaking Trial at APHRS, Taiwan, 2018"
    ],
    reviews: []
  },
  {
    id: "dr-sunil-choudhary",
    name: "Dr. Sunil Choudhary",
    yearsOfExperience: 29,
    designation: "Principal Director & Chief of Plastic Surgery",
    image: "/doctors/dr-sunil-choudhary.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Dr. Sunil Choudhary",
      items: [
        {
          content: "Dr. Sunil Choudhary is the Principal Director & Chief of Plastic Surgery at Max Institute of Reconstructive, Aesthetic, Cleft & Craniofacial Surgery."
        },
        {
          content: "He has over 29 years of experience in the field of aesthetic and reconstructive surgery."
        },
        {
          content: "Dr. Choudhary specializes in procedures such as facial reanimation, flap surgery, and non-surgical rejuvenation techniques like Thermi RF."
        },
        {
          content: "He has been instrumental in introducing advanced surgical techniques and technologies in aesthetic and reconstructive surgery."
        },
        {
          content: "Dr. Choudhary has contributed to various medical publications and has been actively involved in training and mentoring upcoming surgeons."
        }
      ]
    },
    specialties: [
      "Aesthetic and Reconstructive Surgery",
      "Cleft and Craniofacial Surgery"
    ],
    skilledAt: [
      "Facial Reanimation",
      "Flap Surgery",
      "Non-Surgical Rejuvenation"
    ],
    specialInterests: [
      "Thermi RF",
      "Craniofacial Anomalies",
      "Microsurgical Reconstruction"
    ],
    education: [
      "MBBS",
      "MS in General Surgery",
      "MCh in Plastic Surgery"
    ],
    experience: [
      "Principal Director & Chief of Plastic Surgery at Max Institute of Reconstructive, Aesthetic, Cleft & Craniofacial Surgery",
      "Senior Consultant at leading hospitals in India and abroad"
    ],
    awards: [
      "Recognized for contributions to aesthetic and reconstructive surgery",
      "Recipient of multiple awards for excellence in surgical practice"
    ],
    reviews: []
  },
  {
    id: "dr-harit-chaturvedi",
    name: "Dr. Harit Chaturvedi",
    yearsOfExperience: 34,
    designation: "Chairman - Max Institute of Cancer Care",
    image: "/doctors/dr-harit-chaturvedi.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Dr. Harit Chaturvedi",
      items: [
        {
          content: "Dr. Harit Chaturvedi is the Chairman of the Max Institute of Cancer Care, leading one of the largest oncology programs in India."
        },
        {
          content: "He joined Max Healthcare in 2009 and has been instrumental in nurturing young talent, earning a reputation as a teacher and mentor."
        },
        {
          content: "Dr. Chaturvedi has performed surgeries at live workshops and presented his work at national and international conferences."
        },
        {
          content: "He has numerous publications in peer-reviewed journals, contributing significantly to the field of oncology."
        }
      ]
    },
    specialties: [
      "Cancer Care / Oncology",
      "Thoracic Oncology",
      "Surgical Oncology",
      "Robotic Surgery",
      "Head & Neck Oncology",
      "Breast Cancer"
    ],
    skilledAt: [
      "Oncological Surgeries",
      "Robotic-Assisted Surgeries",
      "Breast Cancer Treatment",
      "Head & Neck Cancer Treatment"
    ],
    specialInterests: [
      "Advancements in Surgical Oncology",
      "Mentoring Upcoming Oncologists",
      "Clinical Research in Cancer Care"
    ],
    education: [
      "MBBS, G.S.V.M. Medical College, Kanpur, U.P.",
      "MS (General Surgery), G.S.V.M. Medical College, Kanpur, U.P.",
      "M.Ch. (Surgical Oncology), Cancer Institute, Tamil Nadu Dr. M.G.R. Medical University, Chennai, Tamil Nadu"
    ],
    experience: [
      "Chairman - Max Institute of Cancer Care",
      "Former Executive Member, Indian Association of Surgical Oncologists",
      "President-Elect, Indian Association of Surgical Oncology",
      "President, Oncology Forum",
      "Founder President, Core Cancer Foundation"
    ],
    awards: [
      "Immediate Past President, Indian Society of Oncology",
      "Recognized for contributions to oncology at national and international platforms"
    ],
    reviews: []
  },
  {
    id: "dr-ambrish-mithal",
    name: "Dr. Ambrish Mithal",
    yearsOfExperience: 36,
    designation: "Chairman & Head - Endocrinology & Diabetes, Max Healthcare",
    image: "/doctors/dr-ambrish-mithal.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Dr. Ambrish Mithal",
      items: [
        {
          content: "Dr. Ambrish Mithal is the Chairman & Head of Endocrinology and Diabetes at Max Healthcare, leading the department across all Max hospitals."
        },
        {
          content: "He joined Max Healthcare in December 2019 after serving as Chairman of the Division of Endocrinology and Diabetes at Medanta the Medicity."
        },
        {
          content: "Dr. Mithal has been instrumental in establishing the first bone density measurement system (DEXA) in India and has played a pivotal role in creating public awareness about osteoporosis."
        },
        {
          content: "He has been honored with several awards, including the Padma Bhushan in 2015 and the Dr. B.C. Roy Award in 2017."
        },
        {
          content: "Dr. Mithal has over 200 publications in peer-reviewed journals and has been a faculty member at various national and international conferences."
        }
      ]
    },
    specialties: [
      "Endocrinology",
      "Diabetes",
      "Osteoporosis",
      "Thyroid Disorders"
    ],
    skilledAt: [
      "Management of Diabetes",
      "Treatment of Osteoporosis",
      "Thyroid Disorder Management",
      "Hormonal Imbalances"
    ],
    specialInterests: [
      "Bone and Mineral Metabolism",
      "Diabetes Management",
      "Thyroid Diseases"
    ],
    education: [
      "MBBS, Kanpur University, 1980",
      "MD in Medicine, Kanpur University, 1984",
      "DM in Endocrinology, All India Institute of Medical Sciences (AIIMS), New Delhi, 1987",
      "Fogarty Fellowship, Harvard Medical School, USA, 1993-94"
    ],
    experience: [
      "Chairman & Head - Endocrinology & Diabetes, Max Healthcare (2019-Present)",
      "Chairman, Division of Endocrinology and Diabetes, Medanta the Medicity (2009-2019)",
      "Senior Consultant, Apollo Hospital, New Delhi",
      "Faculty, Sanjay Gandhi Post Graduate Institute of Medical Sciences, Lucknow"
    ],
    awards: [
      "Padma Bhushan, 2015",
      "Dr. B.C. Roy Award, 2017",
      "IOF President’s Award, 2016",
      "IMA Distinguished Service Award, 2014"
    ],
    reviews: []
  },
  
  {
    id: "dr-manjit-singh-paul",
    name: "Dr. Manjit Singh Paul",
    yearsOfExperience: 46,
    designation: "Director",
    image: "/doctors/dr-manjit-singh-paul.webp",
    workingAt: "Max Multi Speciality Hospital, Panchsheel Park ",
    hospitalId: "max-multi-speciality-hospital-panchsheel-park",
    about: {
      title: "About Dr. Manjit Singh Paul",
      items: [
        {
          content:
            "Dr. Manjit Singh Paul is a gastroenterologist with over 46 years of experience.",
          isHighlighted: true,
        },
        {
          content:
            "He is a life member of the Association of Physicians of India and the Indian Society of Gastroenterology, and a member of the Delhi Chapter of the Association of Physicians.",
        },
        {
          content:
            "He has vast teaching experience and has taught at the Armed Forces (R & R) & Base Hospital, New Delhi.",
        },
        {
          content: "He is a recipient of various awards and honors.",
        },
      ],
    },
    specialties: ["Gastroenterology"],
    skilledAt: [
      "Colonoscopy",
      "Endoscopy",
      "Endoscopic Retrograde Cholangiopancreatography",
      "Luminal Gastroenterology",
      "Stent Placement in Esophagus, Biliary, and Pancreatic Tracts",
    ],
    specialInterests: [
      "Colonoscopy",
      "Endoscopic Retrograde Cholangiopancreatography",
      "Luminal Gastroenterology",
      "Stent Placement in Esophagus, Biliary, and Pancreatic Tracts",
    ],
    education: [
      "MBBS from the University of Pune, Pune",
      "MD in General Medicine from Army Hospital Research and Referral, New Delhi",
      "DM in Gastroenterology from Post Graduate Institute of Medical Education and Research, Chandigarh",
    ],
    experience: [
      "Consultant at Sir Ganga Ram Hospital, New Delhi",
      "Consultant at Holy Angel Hospital, Delhi",
      "Head of Department at Tertiary Care Hospitals, Armed Forces",
    ],
    awards: [],
    reviews: [],
  },
];
