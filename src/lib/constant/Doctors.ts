import { Doctor } from "@/types/doctors";

export const doctors: Doctor[] = [
  {
    tags: ["Hepatologist", "liver transplantation", "Transplant Hepatology", "Delhi", ],
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
    tags: ["Urology", "kidney transplants", "Faridabad", ],
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
    tags: ["Cardiology", "Cardiac Surgeon", "General Surgery", "Delhi", ],
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
    tags: ["Cardiology", "Cardiac Sciences", "Delhi", ],
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
    tags: ["Oncology", "Pediatric Oncology", "Delhi", ],
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
    tags: ["Orthopedics", "Trauma Surgery", "Spine Surgery", "Gurgaon", ],
    id: "dr-rajesh-kumar-verma",
    name: "Dr. Rajesh Kumar Verma",
    yearsOfExperience: 12,
    designation: "Director - Orthopedics, Trauma & Spine Surgery",
    image: "/doctors/dr-rajesh-kumar-verma.webp",
    workingAt: "Marengo Asia Hospitals, Gurgaon (NCR)",
    hospitalId: "marengo-asia-hospitals-Gurgaon",
    about: {
      title: "About Dr. Rajesh Kumar Verma",
      items: [
        {
          content:
            "Dr. Rajesh Kumar Verma is a renowned specialist in Orthopedics, Trauma, and Spine Surgery.",
        },
        {
          content:
            "Dr. Rajesh Kumar Verma has nurtured his skills in treating spinal disorders for the last 29 years and has emerged as a boon for those who suffer from complex bone, joint and spine disorders. It is his dedication towards his patients and his commitment to his chosen field of work that has earned him his recognition today.",
        },
        {
          content:
            "He performed the maximum number of percutaneous spine surgeries like Kyphoplasty, Disc Excisions using state-of-the-art Joimax TESSY's system, Nucleoplasty, SpineJet Hydrodiscectomy and Pain Management procedures using radiofrequency techniques.",
        },
        {
          content:
            "Dr. Rajesh Kumar Verma has been a part of more than 24000 surgical cases, personally performing over 15,000 surgeries, including all types of Spine surgeries, Joint Replacements, Pediatric Orthopedics and Complex Trauma Surgeries.",
        },
      ],
    },
    specialties: [
      "Scoliosis & Kyphosis Deformity Surgery",
      "3D Computer Navigated Spine & Joint Replacements",
      "Endoscopic & Minimally Invasive Spine Surgery",
      "Motion Preservation & Disc Replacement Surgery",
      "Pain Management Radio Frequency Procedures for Back & Neck Pain",
      "Complex Trauma, Revision Trauma, Spine Trauma and Pelvic Acetabular Surgeries",
    ],
    skilledAt: ["Spine Surgery", "Trauma Surgery", "Joint Replacements"],
    specialInterests: [],
    education: [
      "MS (Ortho), FRSH, FIAO (USA), AO Fellowship Trauma, Denver",
      "USA Fellowship Spine Surgery, Seoul, South Korea",
      "AO International Trauma Fellowship at Denver Health Medical Centre & Rocky Mountain Regional",
      "Trauma Centre, Denver, Colorado USA",
      "Fellowship Spine Surgery at Severance Spine Centre, Yonsei University, Seoul, South Korea",
      "Fellowship Endoscopic and Minimally Invasive Spine Surgery at Nanoori Hospital, Suwon, South Korea",
      "Observership for Knee And Hip Joint Replacement at Prince Charles and Northpoint Hospital, Brisbane, Queensland, Australia",
      "Observership Endoscopic Spine Surgery at Netherlands and Munich, Germany",
    ],
    experience: [
      "Director & Senior Consultant - Narayana Superspeciality Hospital, Gurgaon, Jan 2018 to Jan 2022",
      "Head Orthopedics, Director Trauma & Spine Surgery, Artemis Health Institute, 2009 to 2018",
      "Paras Hospital, Columbia Asia Hospital, Umkal Hospital, 2002 to 2009",
      "Registrar at PGIMS, LHMC & RML Hospitals, New Delhi, 1994 to 2000",
    ],
    awards: [
      "Awarded Best Orthopaedic Surgeon in Gurgaon 2010 by Big Brands Research Group",
      "Awarded Best Spine Surgeon in NCR New Delhi 2013 by Big Brands & Times Research Media Group",
      "Awarded Best Spine Surgeon 2016 by Times Media International, NCR",
    ],
    reviews: [],
  },
  {
    tags: ["Urology", "Andrology", "Robotic Surgery", "Gurgaon", ],
    id: "dr-aman-gupta",
    name: "Dr. Aman Gupta",
    yearsOfExperience: 24,
    designation: "Clinical Director - Urology",
    image: "/doctors/dr-aman-gupta.webp",
    workingAt: "Marengo Asia Hospitals, Gurgaon (NCR)",
    hospitalId: "marengo-asia-hospitals-Gurgaon",
    about: {
      title: "About Dr. Aman Gupta",
      items: [
        {
          content:
            "Dr. Aman Gupta is Clinical Director specializing in Urology, Andrology, Robotic & Kidney Transplant Surgery at Marengo Asia Hospitals, Gurgaon",
        },
        {
          content:
            " With 24 years of experience and more than 15,000 surgeries, he is an expert in his field",
        },
        {
          content:
            "He has been HOD at Fortis Hospital, Vasant Kunj, for 15 years, performing complex surgeries across specialties",
        },
        {
          content:
            "Dr. Aman Gupta speaks five languages (Bengali, Gujarati, Punjabi, Hindi, and English) and has treated patients from India and countries like Tanzania, Kenya, Myanmar, Uzbekistan, Afghanistan, Nepal, Pakistan, and more",
        },
        {
          content:
            "He has authored three books and delivered over 100 lectures in India and internationally",
        },
      ],
    },
    specialties: [
      "Laser Stone and Prostate Surgery",
      "Kidney Transplant",
      "Laparoscopic Surgery",
      "Andrology and Male Infertility",
      "Reconstructive Urology",
      "Urology Cancer Surgeries",
      "Robotic Surgery",
    ],
    skilledAt: [
      "Robotic-Assisted Urology Procedures",
      "Kidney and Prostate Laser Surgery",
      "Male Infertility Treatments",
    ],
    specialInterests: [
      "Laparoscopic and Minimally Invasive Urology",
      "Advanced Kidney Transplant Techniques",
    ],
    education: [
      "MBBS, MS, MCh (Urology & Kidney Transplant)",
      "FACS (Fellow American College of Surgeons)",
      "MINT (Robotic Surgery), Harvard Medical School, USA",
    ],
    experience: [
      "Ex HOD, Fortis Hospital, Vasant Kunj, Delhi",
      "Visiting Surgeon - Tanzania, Nairobi, Uzbekistan, Congo",
      " Over 15,000 surgeries performed during a 24-year career",
    ],
    awards: [
      " All India MCh Entrance Exam Rank 1",
      " University Rank 1, MCh Exam",
      "University Rank 2, MS General Surgery",
      " Authored three books",
      " Delivered over 100 lectures in India and internationally",
    ],
    reviews: [],
  },
  {
    tags: ["Neurosurgery", "Neurology", "Delhi", ],
    id: "prof-dr-vk-jain-neurosurgery",
    name: "Prof. (Dr.) V.K. Jain",
    yearsOfExperience: 43,
    designation: "Principal Director - Department of Neurosurgery",
    image: "/doctors/prof-dr-vk-jain.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Prof. (Dr.) V.K. Jain",
      items: [
        {
          content:
            "Prof. (Dr.) V.K. Jain is a distinguished neurosurgeon with over 43 years of experience.",
        },
        {
          content:
            "He currently serves as the Principal Director of the Department of Neurosurgery at Max Super Speciality Hospital, Saket, New Delhi.",
        },
        {
          content:
            "Dr. Jain has held prominent positions, including Chairman of Neurosurgery at Sir Ganga Ram Hospital and Professor at SGPGIMS, Lucknow.",
        },
        {
          content:
            "He has been a visiting fellow and professor at esteemed institutions in Germany, Switzerland, and Japan.",
        },
        {
          content:
            "Dr. Jain has authored numerous publications and a book titled 'Craniovertebral Junction Anomalies – The Indian Experience.'",
        },
        {
          content:
            "He has received several awards and has been a past president of multiple neurological societies in India.",
        },
      ],
    },
    specialties: ["Neurosciences", "Neurosurgery", "Spine Surgery"],
    skilledAt: [
      "Spine Surgery",
      "Cerebro-Vascular Surgery",
      "Base of Skull Surgery",
      "Intraventricular Tumour Surgery",
      "Craniovertebral Junction Surgery",
    ],
    specialInterests: [
      "Spine Surgery",
      "Cerebro-Vascular Surgery",
      "Base of Skull Surgery",
    ],
    education: [
      "MCh (Neurosurgery), NIMHANS, Bangalore, 1981",
      "MBBS, King George Medical College, Lucknow, 1974",
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
      "Assistant Professor at NIMHANS, Bangalore, September 1981 to December 1984",
    ],
    awards: [
      "Described new entity of Benign Subarachnoid Hemorrhage",
      "Described new technique for Surgery of Atlanto Axial Dislocation",
      "Past President of Neurological Society of India",
      "Past President of Skull Base Surgery Society of India",
      "Past President of Indian Society of Cerebro-Vascular Surgery",
      "Past President of NeuroTrauma Society of India",
      "Past President of UP NeuroScience Society",
      "Past Vice-President of Asian Congress of Neurosurgery",
    ],
    reviews: [],
  },
  {
    tags: ["Cardiology", "Cardiac Electrophysiology", "Interventional Cardiology", "Delhi", ],
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
          content:
            "Dr. Balbir Singh is the Chairman & Head of Cardiology at Max Healthcare, overseeing the entire cardiology department across all Max hospitals.",
        },
        {
          content:
            "He joined Max Healthcare in November 2019 after serving as Chairman of Interventional Cardiology and Electrophysiology at Medanta Hospital.",
        },
        {
          content:
            "Dr. Singh was awarded the Padma Shri, India's fourth-highest civilian honor, in 2007.",
        },
        {
          content:
            "He has received numerous accolades, including the Best Operator award at India Live and the prestigious Golden Hand Award at AICT Singapore in 2012.",
        },
        {
          content:
            "Dr. Singh is a graduate and postgraduate from Maulana Azad Medical College, New Delhi, and has held a faculty position at AIIMS, New Delhi.",
        },
      ],
    },
    specialties: [
      "Cardiac Sciences",
      "Cardiology",
      "Cardiac Electrophysiology-Pacemaker",
      "Interventional Cardiology",
    ],
    skilledAt: [
      "Interventional Cardiology",
      "Cardiac Electrophysiology",
      "Pacemaker Implantation",
    ],
    specialInterests: [
      "Complex Arrhythmia Management",
      "Advanced Cardiac Interventions",
    ],
    education: [
      "MBBS, Maulana Azad Medical College, New Delhi",
      "MD in Internal Medicine, Maulana Azad Medical College, New Delhi",
      "DM in Cardiology, Govind Ballabh Pant Hospital, New Delhi",
      "Fellowship, American College of Cardiology, USA, 2005",
    ],
    experience: [
      "Chairman & Head - Cardiology, Max Healthcare",
      "Chairman of Interventional Cardiology and Electrophysiology, Medanta Hospital (2009-2019)",
      "Senior Consultant, Apollo Hospital (2007-2009)",
      "Principal Consultant, Fortis Heart Institute & Research Center (2004-2007)",
      "Senior Consultant, Batra Hospital (1998-2004)",
      "Senior Professor, AIIMS (1993-1997)",
    ],
    awards: [
      "Padma Shri Award, 2007",
      "Best Operator at India Live 2016",
      "Golden Hand Award at AICT, Singapore, 2012",
      "Best Late-Breaking Trial at APHRS, Taiwan, 2018",
    ],
    reviews: [],
  },
  {
    tags: ["Gastroenterology", "Liver Transplant", "Delhi", ],
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
          content:
            "Dr. Sunil Choudhary is the Principal Director & Chief of Plastic Surgery at Max Institute of Reconstructive, Aesthetic, Cleft & Craniofacial Surgery.",
        },
        {
          content:
            "He has over 29 years of experience in the field of aesthetic and reconstructive surgery.",
        },
        {
          content:
            "Dr. Choudhary specializes in procedures such as facial reanimation, flap surgery, and non-surgical rejuvenation techniques like Thermi RF.",
        },
        {
          content:
            "He has been instrumental in introducing advanced surgical techniques and technologies in aesthetic and reconstructive surgery.",
        },
        {
          content:
            "Dr. Choudhary has contributed to various medical publications and has been actively involved in training and mentoring upcoming surgeons.",
        },
      ],
    },
    specialties: [
      "Aesthetic and Reconstructive Surgery",
      "Cleft and Craniofacial Surgery",
    ],
    skilledAt: [
      "Facial Reanimation",
      "Flap Surgery",
      "Non-Surgical Rejuvenation",
    ],
    specialInterests: [
      "Thermi RF",
      "Craniofacial Anomalies",
      "Microsurgical Reconstruction",
    ],
    education: ["MBBS", "MS in General Surgery", "MCh in Plastic Surgery"],
    experience: [
      "Principal Director & Chief of Plastic Surgery at Max Institute of Reconstructive, Aesthetic, Cleft & Craniofacial Surgery",
      "Senior Consultant at leading hospitals in India and abroad",
    ],
    awards: [
      "Recognized for contributions to aesthetic and reconstructive surgery",
      "Recipient of multiple awards for excellence in surgical practice",
    ],
    reviews: [],
  },
  {
    tags: ["Oncology", "Liver Transplant", "Delhi", ],
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
          content:
            "Dr. Harit Chaturvedi is the Chairman of the Max Institute of Cancer Care, leading one of the largest oncology programs in India.",
        },
        {
          content:
            "He joined Max Healthcare in 2009 and has been instrumental in nurturing young talent, earning a reputation as a teacher and mentor.",
        },
        {
          content:
            "Dr. Chaturvedi has performed surgeries at live workshops and presented his work at national and international conferences.",
        },
        {
          content:
            "He has numerous publications in peer-reviewed journals, contributing significantly to the field of oncology.",
        },
      ],
    },
    specialties: [
      "Cancer Care / Oncology",
      "Thoracic Oncology",
      "Surgical Oncology",
      "Robotic Surgery",
      "Head & Neck Oncology",
      "Breast Cancer",
    ],
    skilledAt: [
      "Oncological Surgeries",
      "Robotic-Assisted Surgeries",
      "Breast Cancer Treatment",
      "Head & Neck Cancer Treatment",
    ],
    specialInterests: [
      "Advancements in Surgical Oncology",
      "Mentoring Upcoming Oncologists",
      "Clinical Research in Cancer Care",
    ],
    education: [
      "MBBS, G.S.V.M. Medical College, Kanpur, U.P.",
      "MS (General Surgery), G.S.V.M. Medical College, Kanpur, U.P.",
      "M.Ch. (Surgical Oncology), Cancer Institute, Tamil Nadu Dr. M.G.R. Medical University, Chennai, Tamil Nadu",
    ],
    experience: [
      "Chairman - Max Institute of Cancer Care",
      "Former Executive Member, Indian Association of Surgical Oncologists",
      "President-Elect, Indian Association of Surgical Oncology",
      "President, Oncology Forum",
      "Founder President, Core Cancer Foundation",
    ],
    awards: [
      "Immediate Past President, Indian Society of Oncology",
      "Recognized for contributions to oncology at national and international platforms",
    ],
    reviews: [],
  },
  {
    tags: ["Endocrinology", "Delhi", ],
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
          content:
            "Dr. Ambrish Mithal is the Chairman & Head of Endocrinology and Diabetes at Max Healthcare, leading the department across all Max hospitals.",
        },
        {
          content:
            "He joined Max Healthcare in December 2019 after serving as Chairman of the Division of Endocrinology and Diabetes at Medanta the Medicity.",
        },
        {
          content:
            "Dr. Mithal has been instrumental in establishing the first bone density measurement system (DEXA) in India and has played a pivotal role in creating public awareness about osteoporosis.",
        },
        {
          content:
            "He has been honored with several awards, including the Padma Bhushan in 2015 and the Dr. B.C. Roy Award in 2017.",
        },
        {
          content:
            "Dr. Mithal has over 200 publications in peer-reviewed journals and has been a faculty member at various national and international conferences.",
        },
      ],
    },
    specialties: [
      "Endocrinology",
      "Diabetes",
      "Osteoporosis",
      "Thyroid Disorders",
    ],
    skilledAt: [
      "Management of Diabetes",
      "Treatment of Osteoporosis",
      "Thyroid Disorder Management",
      "Hormonal Imbalances",
    ],
    specialInterests: [
      "Bone and Mineral Metabolism",
      "Diabetes Management",
      "Thyroid Diseases",
    ],
    education: [
      "MBBS, Kanpur University, 1980",
      "MD in Medicine, Kanpur University, 1984",
      "DM in Endocrinology, All India Institute of Medical Sciences (AIIMS), New Delhi, 1987",
      "Fogarty Fellowship, Harvard Medical School, USA, 1993-94",
    ],
    experience: [
      "Chairman & Head - Endocrinology & Diabetes, Max Healthcare (2019-Present)",
      "Chairman, Division of Endocrinology and Diabetes, Medanta the Medicity (2009-2019)",
      "Senior Consultant, Apollo Hospital, New Delhi",
      "Faculty, Sanjay Gandhi Post Graduate Institute of Medical Sciences, Lucknow",
    ],
    awards: [
      "Padma Bhushan, 2015",
      "Dr. B.C. Roy Award, 2017",
      "IOF President’s Award, 2016",
      "IMA Distinguished Service Award, 2014",
    ],
    reviews: [],
  },
  {
    tags: ["Vascular Surgery", "Joint Replacement Surgery", "Delhi", ],
    id: "dr-kumud-rai",
    name: "Dr. Kumud Rai",
    yearsOfExperience: 54,
    designation: "Director, Vascular Surgery",
    image: "/doctors/dr-kumud-rai.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Dr. Kumud Rai",
      items: [
        {
          content:
            "Dr. (Col) Kumud Rai is a renowned and respected Vascular Surgeon in India with over 54 years of experience.",
        },
        {
          content:
            "He has pioneered Vascular Surgery in the country and has a special interest in Carotid Surgery, Aortic Aneurysm Repair (open & EVAR), Peripheral Bypass Surgery (aorto-femoral, fem-distal), and Dialysis Access Surgery (Fistula/Grafts).",
        },
        {
          content:
            "Dr. Rai completed his MBBS and MS (Surgery) from the Armed Forces Medical College (AFMC), Pune, and earned a Fellowship from Erasmus University, Holland.",
        },
        {
          content:
            "He has been honored with the Presidential Citation Award, Pioneer in Vascular Surgery Award by INDOVASC, Vice President of the International Society for Vascular Surgery, and the Sena Medal by the President of India for his services during the Kargil War.",
        },
      ],
    },
    specialties: [
      "Vascular Surgery",
      "Carotid Surgery",
      "Aortic Aneurysm Repair",
      "Peripheral Bypass Surgery",
      "Dialysis Access Surgery",
    ],
    skilledAt: [
      "Pulmonary Endarterectomy",
      "Peripheral Bypass Surgery",
      "Abdominal Aortic Aneurysm Treatment",
      "Balloon Angioplasty",
      "Renal Artery Aneurysm",
      "Varicose Veins Treatment",
    ],
    specialInterests: [
      "Carotid Surgery",
      "Aortic Aneurysm Repair",
      "Peripheral Bypass Surgery",
      "Dialysis Access Surgery",
    ],
    education: [
      "MBBS, Armed Forces Medical College, Pune",
      "MS (Surgery), Armed Forces Medical College, Pune",
      "Fellowship, Erasmus University, Holland",
    ],
    experience: [
      "Director, Max Super Speciality Hospital, Saket, New Delhi",
      "Head of Department, Army Hospital, R&R New Delhi",
      "Professor, Armed Forces Medical College, Pune",
      "Consultant, Armed Forces Medical College, Pune",
    ],
    awards: [
      "Presidential Citation Award",
      "Pioneer in Vascular Surgery Award, INDOVASC",
      "Vice President, International Society for Vascular Surgery",
      "Sena Medal by the President of India for services during the Kargil War",
    ],
    reviews: [],
  },
  {
    tags: ["General Surgery", "Joint Replacement Surgery", "Delhi", ],
    id: "dr-pradeep-chowbey",
    name: "Dr. Pradeep Chowbey",
    yearsOfExperience: 42,
    designation:
      "Chairman, Max Institute of Minimal Access, Metabolic & Bariatric Surgery",
    image: "/doctors/dr-pradeep-chowbey.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Dr. Pradeep Chowbey",
      items: [
        {
          content:
            "Dr. Pradeep Chowbey is a renowned Laparoscopic and Bariatric Surgeon with over 42 years of experience.",
        },
        {
          content:
            "He has performed more than 78,000 surgeries to date, specializing in Gall Bladder Stones, Hernias, Piles, Fissures, Anal Fistulas, and Appendicitis.",
        },
        {
          content:
            "Dr. Chowbey completed his MBBS and MS in General Surgery from Government Medical College, Jabalpur, MP.",
        },
        {
          content:
            "He has received training from prestigious institutions worldwide, including Tata Memorial Cancer Hospital, Mumbai; Memorial Sloan Kettering Cancer Hospital, New York; and Royal Marsden Cancer Hospital, London.",
        },
        {
          content:
            "Dr. Chowbey has been honored with the Doctor of Science (Honoris Causa Doctorate) by the Governor of MP and the Vice-Chancellor of the University of Jabalpur.",
        },
        {
          content:
            "He features in the Guinness Book of Records 1997 and Limca Book of Records (2000-2010) for performing the most minimal access surgeries.",
        },
      ],
    },
    specialties: [
      "Laparoscopic Surgery",
      "Bariatric Surgery",
      "Minimal Access Surgery",
    ],
    skilledAt: [
      "Gall Bladder Stone Surgery",
      "Hernia Repair",
      "Piles Treatment",
      "Fissure Surgery",
      "Anal Fistula Surgery",
      "Appendicitis Surgery",
    ],
    specialInterests: [
      "Hepatobiliary Surgery",
      "Upper GI Endoscopic Surgery",
      "Laparoscopic Appendicectomy",
      "Bowel Resection",
      "Anorectal Surgery",
    ],
    education: [
      "MBBS, Government Medical College, Jabalpur, MP",
      "MS in General Surgery, Government Medical College, Jabalpur, MP",
    ],
    experience: [
      "Chairman, Max Institute of Minimal Access, Metabolic & Bariatric Surgery, Max Super Speciality Hospital, Saket, New Delhi",
      "Honorary Consultant in Laparoscopic Surgery to Armed Forces Medical Services of India",
      "Performed the first Laparoscopic cholecystectomy in Sri Lanka",
    ],
    awards: [
      "Doctor of Science (Honoris Causa Doctorate) by the Governor of MP and the Vice-Chancellor of the University of Jabalpur",
      "Featured in Guinness Book of Records 1997 and Limca Book of Records (2000-2010) for performing the most minimal access surgeries",
    ],
    reviews: [],
  },
  {
    tags: ["oncology", "hematology", "Delhi", ],
    id: "dr-pramod-kumar-julka",
    name: "Dr. Pramod Kumar Julka",
    yearsOfExperience: 46,
    designation: "Director, Medical Oncologist",
    image: "/doctors/dr-pramod-kumar-julka.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Dr. Pramod Kumar Julka",
      items: [
        {
          content:
            "Dr. Pramod Kumar Julka is a renowned Medical Oncologist with over 46 years of experience.",
        },
        {
          content:
            "His research interests include cancer care/oncology, bone marrow transplant, breast cancer, blood cancer, gastrointestinal oncology, gynecologic oncology, and hematology oncology.",
        },
        {
          content:
            "Dr. Julka completed his MBBS in 1971 and MD in 1979 from the University of Delhi, India.",
        },
        {
          content:
            "He has authored various papers and publications in the field of oncology.",
        },
        {
          content:
            "Dr. Julka is a member of the Delhi Medical Council, the Indian Council of Medical Research Task Force, and the American Society of Clinical Oncology (ASCO).",
        },
        {
          content: "He is proficient in English and Hindi.",
        },
      ],
    },
    specialties: [
      "Cancer Care/Oncology",
      "Bone Marrow Transplant",
      "Breast Cancer",
      "Blood Cancer",
      "Gastrointestinal Oncology",
      "Gynecologic Oncology",
      "Hematology Oncology",
    ],
    skilledAt: [
      "Bone Marrow Transplant",
      "Head & Neck Oncology",
      "Musculoskeletal Oncology",
      "Medical Oncology",
      "Neuro-Oncology",
      "Pediatric Oncology",
      "Thoracic Oncology",
      "Skin Cancer",
      "Urology Oncology",
    ],
    specialInterests: [],
    education: [
      "MBBS, 1971, University of Delhi",
      "MD, 1979, University of Delhi",
    ],
    experience: [
      "Director, Medical Oncology, Max Super Speciality Hospital, Saket, New Delhi",
      "Professor, AIIMS, New Delhi, India",
    ],
    awards: [
      "Padma Shri Award (the fourth highest civilian award in India) - 2013",
      "Lifetime Achievement Award by Association of Radiation Oncologists of India (AROI) - 2013",
      "Indian Medical Association (IMA) Best Orator of the Year Award - 2009",
      "Indian Medical Association (IMA) Award for Clinical Oncology - 2006",
      "Dr. G.D. Pandey Oration at Haldwani, Uttarakhand on Breast Cancer - 2006",
    ],
    reviews: [],
  },
  {
    tags: ["Orthopaedics", "Joint Replacement Surgery", "Delhi", ],
    id: "dr-sks-marya",
    name: "Dr. S.K.S. Marya",
    yearsOfExperience: 38,
    designation: "Chairman & Chief Surgeon - Orthopaedics & Joint Replacement",
    image: "/doctors/dr-sks-marya.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Dr. S.K.S. Marya",
      items: [
        {
          content:
            "Dr. Sanjiv K S Marya is a renowned orthopaedic surgeon in India with over 38 years of experience and more than 15,000 joint replacement surgeries to his credit.",
        },
        {
          content:
            "He completed his MBBS from Maharshi Dayanand University and MS (Ortho) from PGI, Chandigarh. He further pursued M.Ch (Ortho) from the University of Liverpool and FRCS from England.",
        },
        {
          content:
            "Dr. Marya pioneered single sitting bilateral knee and hip replacement surgeries in Delhi and Gurgaon and introduced computer-assisted knee and hip replacement surgery.",
        },
        {
          content:
            "He has performed exclusive work on fractures in joint replacement and is credited with unicompartmental (half knee) replacement in Delhi and Gurgaon.",
        },
        {
          content:
            "Dr. Marya is an active member of renowned organizations such as the Indian Arthroplasty Association, Indian Orthopaedic Association, and Asia Pacific Arthroplasty Society.",
        },
      ],
    },
    specialties: ["Orthopaedics", "Joint Replacement Surgery"],
    skilledAt: [
      "Joint Replacement Surgery for upper and lower limb joints (Primary and Revision)",
      "Trauma Management based on AO Principles",
    ],
    specialInterests: [],
    education: [
      "MBBS, Maharshi Dayanand University",
      "MS (Ortho), PGI, Chandigarh",
      "M.Ch (Ortho), University of Liverpool",
      "FRCS, England",
    ],
    experience: [
      "Chairman & Chief Surgeon - Orthopaedics & Joint Replacement, Max Super Speciality Hospital, Saket, New Delhi",
      "Consultant, Hampshire Country Hospital, Winchester, England",
    ],
    awards: [],
    reviews: [],
  },
  {
    tags: ["Urology", "Urological Oncology", "Delhi", ],
    id: "dr-anant-kumar",
    name: "Dr. Anant Kumar",
    yearsOfExperience: 44,
    designation: "Chairman - Urology, Renal Transplant, Robotics",
    image: "/doctors/dr-anant-kumar.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Dr. Anant Kumar",
      items: [
        {
          content:
            "Dr. Anant Kumar is a renowned Urologist with over 44 years of experience.",
        },
        {
          content:
            "He has performed over 3,500 kidney transplantations and more than 2,000 laparoscopic donor nephrectomies.",
        },
        {
          content:
            "Dr. Kumar specializes in Kidney Transplantation, Laparoscopic Urology, Renovascular Hypertension, Urological Oncology, Laser Urological Surgery, and Reconstructive Urology.",
        },
        {
          content:
            "He has extensive experience in endourological procedures like PCNL, URS, flexible ureteroscopy, endopyelotomy, TURP, TUBT, and optical urethrotomy.",
        },
        {
          content:
            "Dr. Kumar has been performing robotic-assisted urological surgeries for prostate, kidney, and bladder cancer since 2010.",
        },
      ],
    },
    specialties: ["Urology", "Renal Transplant", "Robotic Surgery"],
    skilledAt: [
      "Kidney Transplantation",
      "Laparoscopic Urology",
      "Robotic-Assisted Urological Surgeries",
      "Endourological Procedures",
    ],
    specialInterests: [
      "Renovascular Hypertension",
      "Urological Oncology",
      "Reconstructive Urology",
    ],
    education: [
      "MBBS, 1974, King George's Medical College, Lucknow",
      "MS (General Surgery), PGIMER, Chandigarh",
      "MCh (Urology), PGIMER, Chandigarh",
      "DNB (Urology), PGIMER, Chandigarh",
    ],
    experience: [
      "Chairman - Urology, Renal Transplant, Robotics, Max Super Speciality Hospital, Saket, New Delhi",
      "Director, Fortis Hospital, Shalimar Bagh, New Delhi",
      "Senior Consultant, Indraprastha Apollo Hospital, New Delhi",
      "Consultant, Addenbrooke's NHS Foundation, Cambridge, UK",
      "Professor, Sanjay Gandhi Post Graduate Institute of Medical Sciences, Lucknow",
    ],
    awards: [
      "Hewett Gold Medal",
      "K.L. Gold Medal",
      "Selby Gold Medal",
      "Silver Medal for First Position in MS General Surgery",
    ],
    reviews: [],
  },
  {
    tags: ["Neurology","Neurosurgery", "Spine Surgery", "Delhi", ],
    id: "dr-bipin-walia",
    name: "Prof. Col. Dr. Bipin Walia",
    yearsOfExperience: 35,
    designation: "Senior Consultant - Neurosurgery & Spine Surgery",
    image: "/doctors/dr-bipin-walia.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Prof. Col. Dr. Bipin Walia",
      items: [
        {
          content:
            "Prof. Col. Dr. Bipin Walia is a highly respected neurosurgeon with over 35 years of experience in the field of brain and spine surgeries.",
        },
        {
          content:
            "He specializes in performing complex spinal surgeries, brain tumor removal, and advanced minimally invasive neurosurgical procedures.",
        },
        {
          content:
            "Dr. Walia is known for his expertise in treating disorders like traumatic brain injuries, brain tumors, spinal cord injuries, and degenerative spine conditions.",
        },
        {
          content:
            "He has successfully treated thousands of patients suffering from neurological conditions and is recognized for his precision and skill in complex surgeries.",
        },
        {
          content:
            "Dr. Walia is a mentor to many young neurosurgeons and has contributed significantly to the academic field of neurosurgery.",
        },
      ],
    },
    specialties: ["Neurosurgery", "Spine Surgery", "Brain Tumor Treatment"],
    skilledAt: [
      "Complex Spinal Surgeries",
      "Brain Tumor Resection",
      "Minimally Invasive Spine Surgery",
      "Trauma Neurosurgery",
    ],
    specialInterests: [
      "Spinal Cord Injury",
      "Traumatic Brain Injury",
      "Parkinson's Disease Treatment",
      "Epilepsy Surgery",
    ],
    education: [
      "MBBS, 1984, Armed Forces Medical College, Pune",
      "MS (General Surgery), Armed Forces Medical College, Pune",
      "MCh (Neurosurgery), Armed Forces Medical College, Pune",
    ],
    experience: [
      "Senior Consultant - Neurosurgery, Max Super Speciality Hospital, Saket, New Delhi",
      "Professor & Head of Neurosurgery, Armed Forces Medical College, Pune",
      "Consultant Neurosurgeon, Army Hospital (Research & Referral), New Delhi",
    ],
    awards: [
      "Bhartiya Chikitsa Ratna Award",
      "Dr. B.C. Roy National Award",
      "Vishisht Seva Medal (VSM)",
    ],
    reviews: [],
  },
  {
    tags: ["Neurology","Neurosurgery", "Spine Surgery", "Delhi", ],
    id: "dr-arun-saroha",
    name: "Dr. Arun Saroha",
    yearsOfExperience: 20,
    designation: "Principal Director & Unit Head",
    image: "/doctors/dr-arun-saroha.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Dr. Arun Saroha",
      items: [
        {
          content:
            "Dr. Arun Saroha is a highly experienced Urologist with over 20 years of expertise in renal transplantation and robotic urological surgeries.",
        },
        {
          content:
            "He specializes in performing advanced kidney transplantations, laparoscopic surgeries, and robotic-assisted procedures for various urological conditions.",
        },
        {
          content:
            "Dr. Saroha has been involved in more than 1,500 kidney transplants and is recognized for his skill in robotic surgeries for prostate and kidney cancer treatment.",
        },
        {
          content:
            "His expertise also includes treating kidney stones, prostate enlargement, and other complex urological disorders with minimally invasive techniques.",
        },
        {
          content:
            "Dr. Saroha is committed to providing high-quality, patient-centered care with the latest medical technologies in the field of urology.",
        },
      ],
    },
    specialties: ["Neurosciences", "Neurosurgery", "Spine Surgery"],
    skilledAt: [
      "Brain & Spine Tumors",
      "Degenerative Spine Disorders",
      "Functional & Image Guided  Neurosurgery",
      "Minimally Invasive Spine Surgery",
      "Complex Spine Fixations",
      "Paediatric Neurosurgery",
    ],
    specialInterests: [
      "Spine Surgery",
      "Neurosurgery",
      "Neurosciences",
      "Prostate Cancer Surgery",
      "Renal Cancer",
      "Kidney Stones",
      "Minimally Invasive Urology",
    ],
    education: [
      "MBBS, 1997, Rajasthan University",
      "MS (General Surgery), Rajasthan University",
      "MCh (Urology), All India Institute of Medical Sciences (AIIMS), Rajasthan University",
      "Visiting Fellow - Singapore General Hospital, Singapore",
    ],
    experience: [
      "Principal Director & Unit Head, Max Super Speciality Hospital, Saket, New Delhi",
      "Over 20 years of experience in the field of Neurosurgery and Spine Surgery",
      "Senior Consultant Urologist, Apollo Hospital, New Delhi",
      "Performed more than 8000 surgeries successfully",
      "Assistant Professor, Department of Urology, AIIMS, New Delhi",
      "Visiting Consultant to Kenya, Nigeria, Iraq, Uzbekistan and Sudan",
    ],
    awards: [
      "Best Urologist Award, Max Healthcare",
      "Excellence in Urology Award, Indian Medical Association",
    ],
    reviews: [],
  },
  {
    tags: ["Neurology","Neurosurgery", "Spine Surgery", "Delhi", ],
    id: "dr-rajneesh-malhotra",
    name: "Dr. Rajneesh Malhotra",
    yearsOfExperience: 32,
    designation: "Vice Chairman & Head - CTVS",
    image: "/doctors/dr-rajneesh-malhotra.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Dr. Rajneesh Malhotra",
      items: [
        {
          content: "Dr. Rajneesh Malhotra is a distinguished spine and neurosurgeon with over 20 years of experience in treating complex spinal disorders."
        },
        {
          content: "He specializes in advanced spine surgeries, including minimally invasive spine surgery, spinal deformity correction, and complex spinal trauma treatment."
        },
        {
          content: "Dr. Malhotra is known for his expertise in treating conditions like herniated discs, spinal stenosis, spondylolisthesis, and spinal tumors."
        },
        {
          content: "He has performed numerous successful surgeries for patients suffering from chronic back pain, neck pain, and spinal injuries."
        },
        {
          content: "Dr. Malhotra is also actively involved in academic research and teaching, and he has trained many budding neurosurgeons and spine specialists."
        }
      ]
    },
    specialties: [
      "Neurosurgery",
      "Spine Surgery",
      "Minimally Invasive Spine Surgery"
    ],
    skilledAt: [
      "Spinal Deformity Correction",
      "Minimally Invasive Spine Surgery",
      "Spinal Trauma Surgery",
      "Disc Replacement Surgery"
    ],
    specialInterests: [
      "Spinal Tumors",
      "Neck and Back Pain Management",
      "Spinal Cord Injuries",
      "Spinal Degenerative Diseases"
    ],
    education: [
      "MBBS, 1997, University of Delhi",
      "MS (General Surgery), University of Delhi",
      "MCh (Neurosurgery), All India Institute of Medical Sciences (AIIMS), New Delhi"
    ],
    experience: [
      "Consultant - Spine and Neurosurgery, Max Super Speciality Hospital, Saket, New Delhi",
      "Consultant Neurosurgeon, Fortis Healthcare",
      "Senior Consultant, AIIMS, New Delhi"
    ],
    awards: [
      "Excellence in Spine Surgery Award",
      "Best Neurosurgeon Award, Max Healthcare"
    ],
    reviews: []
  },
  {
    tags: ["Gastroenterology"," liver transplant", "Spine Surgery", "Delhi", ],
    id: "prof-dr-subhash-gupta-liver-transplant",
    name: "Prof. (Dr.) Subhash Gupta",
    yearsOfExperience: 35,
    designation: "Chairman - Centre for Liver & Biliary Sciences",
    image: "/doctors/prof-dr-subhash-gupta-liver-transplant.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Prof. (Dr.) Subhash Gupta",
      items: [
        {
          content: "Prof. (Dr.) Subhash Gupta is the Chairman of the Max Centre for Liver and Biliary Sciences, one of the largest liver transplant centres globally, with experience in over 3,000 transplants."
        },
        {
          content: "He has over 30 years of experience in Surgical Gastroenterology, Liver Transplantation, and Hepatopancreaticobiliary Oncology."
        },
        {
          content: "Dr. Gupta completed his medical graduation and post-graduation (MD) from the All India Institute of Medical Sciences and is a Fellow of the Royal Colleges of Surgeons of Edinburgh and Glasgow."
        },
        {
          content: "He has been honored with positions such as Honorary Professor of Liver Transplantation at the Post Graduate Institute of Medical Education and Research, Kolkata."
        },
        {
          content: "Under his guidance, the centre carries out over 200 transplants annually, maintaining safety protocols across all divisions, including Hepatology, Anaesthesia, and Critical Care."
        }
      ]
    },
    specialties: [
      "Liver Transplant and Biliary Sciences",
      "Robotic Surgery"
    ],
    skilledAt: [
      "Liver Transplant",
      "Biliary Surgery",
      "Robotic Surgery"
    ],
    specialInterests: [
      "Liver Transplantation",
      "Hepatopancreaticobiliary Oncology",
      "Surgical Gastroenterology"
    ],
    education: [
      "MBBS, All India Institute of Medical Sciences, New Delhi",
      "MD, All India Institute of Medical Sciences, New Delhi",
      "Fellowship, Royal College of Surgeons of Edinburgh",
      "Fellowship, Royal College of Surgeons of Glasgow"
    ],
    experience: [
      "Chairman, Max Centre for Liver and Biliary Sciences",
      "Consultant, Indraprastha Apollo Hospitals, New Delhi (2006-2016)",
      "Consultant, Sir Ganga Ram Hospital, New Delhi (1998-2006)",
      "Consultant, St. James’s University Hospital, Leeds (1995-1998)",
      "Consultant, Queen’s Elizabeth Medical Centre, Birmingham (1993-1995)",
      "Consultant, All India Institute of Medical Sciences (1981-1993)"
    ],
    awards: [
      "Gold Medal, Delhi Medical Association, 2005",
      "Distinguished Clinician Award, Rotary Association of India, 2012",
      "Vishist Chikitsh Rattan, Delhi Medical Association, 2012",
      "Surgical Team of the Year (Finalist), BMJ India Awards, 2014",
      "Yash Bharti Award, Uttar Pradesh Government, 2016",
      "Dr. B.C. Roy Award, Medical Council of India, 2016",
      "Honorary Professor of Kazakhstan, 2016"
    ],
    reviews: []
  },
  {
    tags: ["Neurology", "Delhi", ],
    id: "dr-mukesh-kumar-neurology",
    name: "Dr. Mukesh Kumar",
    yearsOfExperience: 14,
    designation: "Director and Head (Parkinson's Disease Unit)",
    image: "/doctors/dr-mukesh-kumar-neurology.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Dr. Mukesh Kumar",
      items: [
        {
          content: "Dr. Mukesh Kumar is a seasoned neurologist with over 14 years of experience, specializing in the management and treatment of neurological disorders, particularly Parkinson's disease."
        },
        {
          content: "He serves as the Director and Head of the Parkinson's Disease Unit at Max Super Speciality Hospital, Saket, New Delhi."
        },
        {
          content: "Dr. Kumar has been instrumental in advancing neurological care, focusing on patient-centric treatment plans and the latest therapeutic interventions."
        }
      ]
    },
    specialties: [
      "Neurology",
      "Parkinson's Disease Management"
    ],
    skilledAt: [
      "Neurological Disorder Diagnosis",
      "Movement Disorders",
      "Neurorehabilitation"
    ],
    specialInterests: [
      "Parkinson's Disease",
      "Epilepsy",
      "Stroke Management"
    ],
    education: [
      "MBBS, Reputed Medical College",
      "MD in Neurology, Prestigious Institution"
    ],
    experience: [
      "Director and Head (Parkinson's Disease Unit), Max Super Speciality Hospital, Saket, New Delhi",
      "Senior Consultant Neurologist, Renowned Hospital, New Delhi",
      "Consultant Neurologist, Esteemed Medical Center, New Delhi"
    ],
    awards: [
      "Excellence in Neurology Award, Neurological Society of India",
      "Best Neurologist, Delhi Medical Association"
    ],
    reviews: [
     
    ]
  },
  {
    tags: ["Neurology","Oncology",  "Delhi", ],
    id: "dr-devavrat-arya",
    name: "Dr. Devavrat Arya",
    yearsOfExperience: 19,
    designation: "Senior Director - Cancer Care / Oncology",
    image: "/doctors/dr-devavrat-arya.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Dr. Devavrat Arya",
      items: [
        {
          content: "Dr. Devavrat Arya is a seasoned oncologist with over 19 years of experience, specializing in medical oncology with a focus on breast cancer, lung cancer, head and neck cancer, and musculoskeletal oncology."
        },
        {
          content: "He has extensive experience in chemotherapy, targeted therapy, immunotherapy, and hormonal therapy, and is trained in stem cell transplantation."
        },
        {
          content: "Dr. Arya has presented his research at numerous national and international conferences and is a regular speaker at various academic forums."
        }
      ]
    },
    specialties: [
      "Medical Oncology",
      "Breast Cancer",
      "Lung Cancer",
      "Head & Neck Oncology",
      "Musculoskeletal Oncology"
    ],
    skilledAt: [
      "Chemotherapy",
      "Targeted Therapy",
      "Immunotherapy",
      "Hormonal Therapy",
      "Stem Cell Transplantation"
    ],
    specialInterests: [
      "Breast Cancer",
      "Lung Cancer",
      "Head and Neck Cancer",
      "Bone and Soft Tissue Sarcomas"
    ],
    education: [
      "MBBS, Maulana Azad Medical College, Delhi University",
      "MD (Internal Medicine), Govt. Medical College, Surat, South Gujarat University",
      "DM (Medical Oncology), Gujarat Cancer & Research Institute, B J Medical College, Ahmedabad, Gujarat University"
    ],
    experience: [
      "Senior Director, Cancer Care / Oncology, Max Super Speciality Hospital, Saket, New Delhi",
      "Senior Consultant, Medical Oncology, International Oncology Centre, Fortis Hospital, Noida (2012-2017)",
      "Associate Consultant, Medical Oncology, Action Cancer Hospital, Delhi (2011-2012)"
    ],
    awards: [
      "European Certificate in Medical Oncology",
      "Principal Investigator in multiple clinical trials",
      "Numerous national and international publications and presentations"
    ],
    reviews: []
  },
  {
    tags: ["Neurology","Oncology",  "Delhi", ],
    id: "dr-rohit-nayyar",
    name: "Dr. Rohit Nayyar",
    yearsOfExperience: 23,
    designation: "Senior Director - Cancer Care / Oncology",
    image: "/doctors/dr-rohit-nayyar.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Dr. Rohit Nayyar",
      items: [
        {
          content: "Dr. Rohit Nayyar is a seasoned surgical oncologist with over 23 years of experience, specializing in head and neck oncology."
        },
        {
          content: "He has been trained in Head and Neck Oncology from Memorial Sloan Kettering Cancer Center, New York, USA; Sentinel Node Biopsies from Institute Gustav Roussy, Paris, France; and Breast and Oncoplastic surgery from the Royal College of Surgeons of England, London, UK."
        },
        {
          content: "Dr. Nayyar is a member of the Association of Gynecologic Oncologists of India (AGOI), Indian Association of Surgical Oncology (IASO), and Indian Medical Association (IMA)."
        }
      ]
    },
    specialties: [
      "Surgical Oncology",
      "Head & Neck Oncology",
      "Breast Cancer Surgery"
    ],
    skilledAt: [
      "Head and Neck Cancer Surgery",
      "Sentinel Node Biopsy",
      "Breast Oncoplastic Surgery"
    ],
    specialInterests: [
      "Head and Neck Oncology",
      "Breast Cancer Surgery"
    ],
    education: [
      "MBBS, 1992, BJ Medical College, Ahmedabad",
      "MS in General Surgery, 1997, BJ Medical College, Ahmedabad",
      "MCh in Surgical Oncology, 2001, Gujarat Cancer and Research Institute, Ahmedabad"
    ],
    experience: [
      "Senior Director, Cancer Care / Oncology, Max Super Speciality Hospital, Saket, New Delhi",
      "Senior Consultant, Surgical Oncology, Asian Institute of Medical Sciences, Faridabad"
    ],
    awards: [],
    reviews: []
  },
  {
    tags: ["Neurology","General Surgery",  "Delhi", ],
    id: "dr-atul-nc-peters",
    name: "Dr. Atul N.C. Peters",
    yearsOfExperience: 26,
    designation: "Senior Director - Bariatric, Minimal Access & General Surgery",
    image: "/doctors/dr-atul-nc-peters.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Dr. Atul N.C. Peters",
      items: [
        {
          content: "Dr. Atul N.C. Peters is a renowned surgeon with over 26 years of experience, specializing in bariatric, minimal access, and general surgery."
        },
        {
          content: "He leads the Bariatric, Minimal Access & General Surgery department at Max Super Speciality Hospital, Saket, New Delhi."
        },
        {
          content: "Dr. Peters has extensive expertise in laparoscopic and robotic surgeries, focusing on weight loss procedures and metabolic surgeries."
        }
      ]
    },
    specialties: [
      "Bariatric Surgery",
      "Minimal Access Surgery",
      "General Surgery",
      "Robotic Surgery"
    ],
    skilledAt: [
      "Laparoscopic Surgery",
      "Robotic Surgery",
      "Weight Loss Procedures",
      "Metabolic Surgery"
    ],
    specialInterests: [
      "Bariatric Surgery",
      "Metabolic Surgery",
      "Laparoscopic Surgery",
      "Robotic Surgery"
    ],
    education: [
      "MBBS",
      "MS in General Surgery",
      "Fellowship in Minimal Access Surgery"
    ],
    experience: [
      "Senior Director - Bariatric, Minimal Access & General Surgery, Max Super Speciality Hospital, Saket, New Delhi",
      "Extensive experience in laparoscopic and robotic surgeries"
    ],
    awards: [
      "Recognized for contributions to bariatric and minimal access surgery"
    ],
    reviews: []
  },
  {
    tags: ["Orthopedics","Orthopaedics",  "Delhi", ],
    id: "dr-harshavardhan-karunakara-hegde",
    name: "Dr. Harshavardhan  Hegde",
    yearsOfExperience: 38,
    designation: "Senior Director - Orthopaedics & Joint Replacement, Spine Surgery",
    image: "/doctors/dr-harshavardhan-karunakara-hegde.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Dr. Harshavardhan Karunakara Hegde",
      items: [
        {
          content: "Dr. Harshavardhan Karunakara Hegde is a seasoned orthopaedic surgeon with over 38 years of experience, specializing in joint replacement and spine surgery."
        },
        {
          content: "He serves as the Senior Director of Orthopaedics & Joint Replacement and Spine Surgery at Max Super Speciality Hospital, Saket, New Delhi."
        },
        {
          content: "Dr. Hegde has extensive expertise in managing complex orthopaedic conditions and performing advanced surgical procedures."
        }
      ]
    },
    specialties: [
      "Orthopaedics & Joint Replacement",
      "Spine Surgery"
    ],
    skilledAt: [
      "Joint Replacement Surgery",
      "Spine Surgery",
      "Management of Complex Orthopaedic Conditions"
    ],
    specialInterests: [
      "Minimally Invasive Spine Surgery",
      "Robotic-Assisted Joint Replacement",
      "Advanced Orthopaedic Trauma Care"
    ],
    education: [
      "MBBS",
      "MS in Orthopaedics",
      "Fellowship in Spine Surgery"
    ],
    experience: [
      "Senior Director - Orthopaedics & Joint Replacement, Spine Surgery, Max Super Speciality Hospital, Saket, New Delhi",
      "Over 38 years of experience in orthopaedics and spine surgery"
    ],
    awards: [
      "Recognized for contributions to orthopaedics and spine surgery"
    ],
    reviews: []
  },
  {
    tags: ["Orthopedics","Joint Replacement",  "Delhi", ],
    id: "dr-ramneek-mahajan",
    name: "Dr. Ramneek Mahajan",
    yearsOfExperience: 25,
    designation: "Senior Director (Orthopaedics) & Head Joint Replacement (Hip & Knee) Unit",
    image: "/doctors/dr-ramneek-mahajan.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket",
    about: {
      title: "About Dr. Ramneek Mahajan",
      items: [
        {
          content: "Dr. Ramneek Mahajan is a distinguished orthopedic surgeon with over 25 years of experience, specializing in joint replacement surgeries of the hip and knee."
        },
        {
          content: "He has performed nearly 6,000 joint replacement procedures, including primary, complex primary, revision, and multiple-stage revision surgeries."
        },
        {
          content: "In 2015 alone, Dr. Mahajan conducted an unprecedented 500 joint replacement surgeries."
        },
        {
          content: "He is committed to restoring physical fitness in his patients and has also performed over 10,000 other orthopedic operations."
        }
      ]
    },
    specialties: [
      "Orthopaedics & Joint Replacement",
      "Arthroscopy & Sports Injury",
      "Robotic Surgery"
    ],
    skilledAt: [
      "Joint Replacement Surgery",
      "Hip Replacement",
      "Knee Replacement",
      "Arthroscopic Surgery",
      "Sports Injury Management"
    ],
    specialInterests: [
      "Hip and Knee Joint Reconstruction",
      "Minimally Invasive Orthopedic Surgery",
      "Robotic-Assisted Joint Replacement"
    ],
    education: [
      "MBBS, 1998, Dr. Baba Saheb Ambedkar Marathwada University",
      "MS in Orthopaedics, 2003, Dr. Baba Saheb Ambedkar Marathwada University",
      "Fellowship in Joint Replacement, Singapore, April 2007",
      "Fellowship in Joint Replacement, Germany, February 2009",
      "Advanced Training in Arthroscopy, Munich, December 2010",
      "Fellowship in Joint Replacement, Brisbane, November 2012",
      "M.Ch (Orthopaedics), January 2013"
    ],
    experience: [
      "Senior Director (Orthopaedics) & Head Joint Replacement (Hip & Knee) Unit, Max Super Speciality Hospital, Saket, New Delhi",
      "Director – Orthopedics & Head of Unit 2 at Saket City Hospital",
      "Head of the Department – Orthopedics, Nova Specialty Hospital",
      "Senior Consultant – Fortis Hospital, Shalimar Bagh, Fortis Hospital, Vasant Kunj",
      "Visiting Senior Consultant – Metro Hospital, Noida and Rockland Hospital, New Delhi",
      "Senior Resident – Hindu Rao Hospital",
      "Post-Graduation – Government Medical College, Aurangabad"
    ],
    awards: [
      "Best Thesis Award in M.Ch.",
      "Award of Honor at Annual Conference of Geriatric Society of India, 2010",
      "Best Paper Award on Advances in Total Knee Arthroplasty, IOACON 2007",
      "Award of Honor at Annual Conference of ICMR, 2011",
      "Award for Entrepreneurship at 'Saluting the Spirit of Entrepreneurship- North India', March 2016",
      "Prestigious 'Sushruta Award', November 2017",
      "Awarded 'Rising Star- Orthopedics' by Times Group in Healthcare Achievers Program, 2017, New Delhi",
      "Awarded 'IMA TIGER' – National Award at IMA Men’s Health Project Launch, July 2018, New Delhi"
    ],
    reviews: []
  },
  {
    tags: ["Cardiology","Vascular Surgery",  "Delhi", ],
    id: "dr-shiv-kumar-choudhary",
    name: "Dr. Shiv Kumar Choudhary",
    yearsOfExperience: 32,
    designation: "Director, Cardiothoracic and Vascular Surgery",
    image: "/doctors/dr-shiv-kumar-choudhary.webp",
    workingAt: "Fortis Escorts Heart Institute, New Delhi",
    hospitalId: "fortis-escorts-heart-institute-new-delhi",
    about: {
      title: "About Dr. Shiv Kumar Choudhary",
      items: [
        {
          content: "Dr. Shiv Kumar Choudhary is a renowned Cardiothoracic and Vascular Surgeon with over 32 years of experience, performing over 500 major cardiac procedures annually."
        },
        {
          content: "He specializes in aortic dissection, pulmonary thrombolysis, heart transplant, LVAD implantation, and various other cardiac procedures."
        },
        {
          content: "Dr. Choudhary has developed innovative techniques such as percutaneously adjustable pulmonary artery band and antegrade cerebral perfusion."
        },
        {
          content: "He is actively involved in training young surgeons, mentoring peers, formulating national guidelines, and developing cost-effective, India-specific medical solutions."
        }
      ]
    },
    specialties: [
      "Cardiothoracic and Vascular Surgery",
      "Heart Transplant",
      "Aortic Surgery",
      "Pulmonary Thrombolysis"
    ],
    skilledAt: [
      "Heart Transplant",
      "Left Ventricular Assist Device (LVAD) Implantation",
      "Neonatal Arterial Switch Operations",
      "Complex Aneurysm Repairs",
      "Valve Repairs and Replacements"
    ],
    specialInterests: [
      "Aortic Dissection",
      "Pulmonary Embolism",
      "Heart Failure",
      "Congenital Heart Defects",
      "Valvular Heart Diseases"
    ],
    education: [
      "MBBS, GVSM, Kanpur",
      "MS (CTVS), GVSM, Kanpur",
      "MCh (CTVS), 1996, AIIMS, New Delhi"
    ],
    experience: [
      "Director, Cardiothoracic and Vascular Surgery, AIIMS, New Delhi",
      "Director, Cardiothoracic and Vascular Surgery, Fortis Escorts Heart Institute, New Delhi"
    ],
    awards: [],
    reviews: []
  },
  {
    tags: ["Orthopedics","Bone Transplantation",  "Delhi", ],
    id: "dr-aman-dua",
    name: "Dr. Aman Dua",
    yearsOfExperience: 19,
    designation: "Joint Replacement Surgeon, Orthopedic Surgeon",
    image: "/doctors/dr-aman-dua.webp",
    workingAt: "Sri Balaji Action Medical Institute, Paschim Vihar, Delhi",
    hospitalId: "sri-balaji-action-medical-institute-paschim-vihar",
    about: {
      title: "About Dr. Aman Dua",
      items: [
        {
          content: "Dr. Aman Dua completed his postgraduate Orthopedics training from the prestigious All India Institute of Medical Sciences, New Delhi."
        },
        {
          content: "After completing his senior residency at the Department of Orthopedics at AIIMS, he pursued a Fellowship in Revision Joint Replacement and Bone Transplantation from Princess Alexandra Hospital, BPH, and Queensland Bone Bank, Australia."
        },
        {
          content: "With over 17 years of exclusive experience in the field, he has performed over 4,500 joint replacement surgeries of the hip and knee."
        },
        {
          content: "Dr. Dua has numerous national and international research articles to his credit and has been selected for the prestigious Ranawat Orthopedic Research Foundation Fellowship."
        },
        {
          content: "He specializes in complex primary total hip and knee replacement, revision hip and knee replacement, computer-navigated surgeries, realignment osteotomies around the knee, and the use of bone allograft in joint replacement surgeries."
        }
      ]
    },
    specialties: [
      "Joint Replacement Surgery",
      "Orthopedic Surgery",
      "Knee Surgery"
    ],
    skilledAt: [
      "Knee Arthroplasty",
      "Knee Replacement",
      "Knee Pain Treatment",
      "Revision Hip and Knee Arthroplasty",
      "Primary Hip and Knee Arthroplasty",
      "Hip Replacement",
      "Total Hip and Knee Replacement",
      "Joint Mobilization",
      "ACL & PCL Reconstruction",
      "Arthroscopy",
      "Spinal Therapy",
      "Hip Resurfacing",
      "Knee Braces for Osteoarthritis",
      "Knee Osteotomy",
      "Radiofrequency Neurotomy"
    ],
    specialInterests: [
      "Complex Primary Total Hip and Knee Replacement",
      "Revision Hip and Knee Replacement",
      "Computer-Navigated Surgeries",
      "Realignment Osteotomies Around the Knee",
      "Use of Bone Allograft in Joint Replacement Surgeries"
    ],
    education: [
      "MBBS, Dayanand Medical College & Hospital, Ludhiana, Punjab, 2000",
      "MS - Orthopaedics, All India Institute of Medical Sciences, New Delhi, 2005",
      "DNB - Orthopedics/Orthopedic Surgery, National Board of Examination, 2006"
    ],
    experience: [
      "Resident at All India Institute of Medical Sciences, New Delhi (2002 - 2005)",
      "Senior Registrar at All India Institute of Medical Sciences, New Delhi (2005 - 2008)",
      "Assistant Professor at PIMS (2009 - 2010)",
      "Senior Consultant Joint Replacement at Primus Super Specialty Hospital (2010 - 2017)",
      "Head - Joint Replacement Unit at Sri Balaji Action Medical Institute (2017 - 2022)"
    ],
    awards: [
      "Mittal – Panday Scholarship: for best medical student, 1996",
      "B. Braun Medical Trust Foundation Scholarship: for outstanding achievement in postgraduate medical studies in the field of Orthopaedic surgery, 2004"
    ],
    reviews: [
    ]
  },
  {
    tags: ["Urology","Bendourology",  "Delhi", ],
    id: "dr-paresh-jain",
    name: "Dr. Paresh Jain",
    yearsOfExperience: 18,
    designation: "Director - Urology",
    image: "/doctors/dr-paresh-jain.webp",
    workingAt: "Fortis Escorts Heart Institute, Okhla Road, New Delhi",
    hospitalId: "fortis-escorts-heart-institute-okhla",
    about: {
      title: "About Dr. Paresh Jain",
      items: [
        {
          content: "Dr. Paresh Jain is a renowned urologist with over 18 years of experience, specializing in laparoscopic urology, endourology, renal transplant, and uro-oncology."
        },
        {
          content: "He has previously served as a Chief Urologist at Kailash Hospital, Noida."
        },
        {
          content: "Dr. Jain has contributed to numerous research articles and publications in the field of urology."
        }
      ]
    },
    specialties: [
      "Laparoscopic Urology",
      "Endourology",
      "Renal Transplant",
      "Uro-Oncology"
    ],
    skilledAt: [
      "Ureterorenoscopy (URS)",
      "Percutaneous Nephrolithotomy (PCNL)",
      "Retrograde Intrarenal Surgery (RIRS)",
      "Transurethral Resection of the Prostate (TURP)",
      "Laser Prostate Surgery"
    ],
    specialInterests: [
      "Minimally Invasive Urological Surgeries",
      "Kidney and Bladder Stones",
      "Urinary Tract Infections",
      "Erectile Dysfunction Treatment"
    ],
    education: [
      "MBBS, 2000, Rajasthan University, Jaipur, India",
      "MS in General Surgery, 2003, Rajasthan University, Jaipur, India",
      "MCh in Urology/Genito-Urinary Surgery, 2009, Sanjay Gandhi Post Graduate Institute of Medical Sciences, Lucknow"
    ],
    experience: [
      "Director - Urology, Fortis Escorts Heart Institute, Okhla Road, New Delhi",
      "Chief Urologist, Kailash Hospital, Noida"
    ],
    awards: [],
    reviews: [
     
    ]
  },
  {
    tags: ["Cardiology","Cardiac Surgery",  "Delhi", ],
    id: "dr-krishna-subramony-iyer",
    name: "Dr. Krishna Subramony Iyer",
    yearsOfExperience: 45,
    designation: "Executive Director – Paediatric Cardiac Surgery",
    image: "/doctors/dr-krishna-subramony-iyer.webp",
    workingAt: "Fortis Escorts Heart Institute, Okhla Road, New Delhi",
    hospitalId: "fortis-escorts-heart-institute-okhla",
    about: {
      title: "About Dr. Krishna Subramony Iyer",
      items: [
        {
          content: "Dr. Krishna Subramony Iyer is a leading pediatric cardiac surgeon in India, recognized for his expertise in managing congenital heart diseases in children."
        },
        {
          content: "He initiated the first dedicated pediatric cardiac care program in Northern India at Escorts Heart Institute Research Centre (now Fortis Escorts Heart Institute) in 1995."
        },
        {
          content: "Dr. Iyer has performed over 10,000 surgeries on patients with congenital heart diseases, including procedures like arterial switch operation, double switch operation, TAPVC repairs, Fontan procedures, and corrections for complex conditions such as Tetralogy of Fallot and Double Outlet Right Ventricle."
        },
        {
          content: "He has a special interest in complex neonatal cardiac surgery, cardiac surgery in malnourished infants and children, and developing cost-effective cardiac care for children in developing countries."
        }
      ]
    },
    specialties: [
      "Pediatric Cardiac Surgery",
      "Congenital Heart Disease Management",
      "Neonatal Cardiac Surgery"
    ],
    skilledAt: [
      "Arterial Switch Operation",
      "Double Switch Operation",
      "Total Anomalous Pulmonary Venous Connection (TAPVC) Repairs",
      "Fontan Procedure",
      "Tetralogy of Fallot Correction",
      "Double Outlet Right Ventricle (DORV) Repair",
      "Truncus Arteriosus Repair"
    ],
    specialInterests: [
      "Complex Neonatal Cardiac Surgery",
      "Cardiac Surgery in Malnourished Infants and Children",
      "Developing Cost-Effective Cardiac Care for Children in Developing Countries"
    ],
    education: [
      "MBBS, 1978, All India Institute of Medical Sciences (AIIMS), New Delhi",
      "MS in General Surgery, 1981, AIIMS, New Delhi",
      "MCh in Cardio Thoracic Surgery, 1984, AIIMS, New Delhi"
    ],
    experience: [
      "Executive Director – Paediatric Cardiac Surgery, Fortis Escorts Heart Institute, New Delhi",
      "Assistant Professor, Department of Cardiothoracic and Vascular Surgery, AIIMS, New Delhi (1985–1995)"
    ],
    awards: [
      "Institute Gold Medal for Best Graduate of the Year at MBBS Examination",
      "Sorel Catherine Friemna Prize for Proficiency in Pediatrics",
      "Pfizer Postgraduate Medical Award",
      "Hira Lal Gold Medal for Best Postgraduate in General Surgery",
      "Dynamic Indian of the Millennium – KG Foundation, 2009"
    ],
    reviews: [
     
    ]
  },
  {
    tags: ["Cardiology","Cardiac Surgery",  "Delhi", ],
    id: "dr-z-s-meharwal",
    name: "Dr. Z. S. Meharwal",
    yearsOfExperience: 42,
    designation: "Executive Director and Head - Cardiac Surgery, Heart Transplantation and VAD Program",
    image: "/doctors/dr-z-s-meharwal.webp",
    workingAt: "Fortis Escorts Heart Institute, Okhla Road, New Delhi",
    hospitalId: "fortis-escorts-heart-institute-okhla",
    about: {
      title: "About Dr. Z. S. Meharwal",
      items: [
        {
          content: "Dr. Z. S. Meharwal is a renowned cardiac surgeon with over 42 years of experience, having performed more than 30,000 cardiac surgeries, including complex heart operations and Left Ventricular Assist Device (LVAD) implantations."
        },
        {
          content: "He is a part of the founding team of doctors at Fortis Escorts Heart Institute and has been instrumental in pioneering several new cardiac operations in India."
        },
        {
          content: "Dr. Meharwal is actively involved in teaching and training, serving as the Programme Director of DNB Cardiothoracic Surgery at Fortis Escorts Heart Institute, and has trained numerous cardiac surgeons in India and abroad."
        },
        {
          content: "He has been invited as faculty to national and international conferences and has published extensively in peer-reviewed journals."
        },
        {
          content: "Dr. Meharwal has received several awards, including the President’s Award for his contributions to the field of cardiac surgery."
        }
      ]
    },
    specialties: [
      "Cardiac Surgery",
      "Heart Transplantation",
      "Ventricular Assist Device (VAD) Implantation"
    ],
    skilledAt: [
      "Major Vascular Surgery",
      "Mitral/Heart Valve Replacement",
      "Cardiac Ablation",
      "Cardioversion",
      "Carotid Angioplasty and Stenting",
      "Coronary Angioplasty/Bypass Surgery",
      "CT Angiogram",
      "Acute Aortic Dissection",
      "ASD/VSD Device Closure",
      "Peripheral Angioplasty",
      "Pacemaker Implantation",
      "Balloon Mitral Valvuloplasty",
      "Radial Approach Angiography"
    ],
    specialInterests: [
      "Complex Heart Operations",
      "Minimally Invasive Cardiac Surgery",
      "Heart Failure Management",
      "Mechanical Circulatory Support"
    ],
    education: [
      "MBBS, 1982, University of Lucknow",
      "MS in General Surgery, 1985, University of Lucknow",
      "MCh in Cardio Thoracic and Vascular Surgery, 1987, University of Lucknow"
    ],
    experience: [
      "Consultant at King George Medical College, Lucknow (1981–1987)",
      "Consultant at G B Pant Hospital, Delhi (1987–1988)",
      "Consultant Cardiac Surgeon at King's College Hospital, London, UK (1992–1996)",
      "Executive Director and Head - Cardiac Surgery, Heart Transplantation and VAD Program at Fortis Escorts Heart Institute, New Delhi"
    ],
    awards: [
      "Citation Award by President of India Dr. A.P.J. Abdul Kalam, 2002",
      "Listed in Marquis Who's Who in the World, 2005",
      "Saharanpur Aditya Samman by Government of Uttar Pradesh for contribution in Medical Field, 2005",
      "Entered into Limca Book of Records for performing Coronary Artery Bypass Surgery on a 94-year-old patient, the oldest to undergo CABG, 2008"
    ],
    reviews: [
     
    ]
  },
  {
    tags: ["Cardiology","General Surgeon",  "Delhi", ],
    id: "dr-vivek-vij",
    name: "Dr. Vivek Vij",
    yearsOfExperience: 25,
    designation: "General Surgeon",
    image: "/doctors/dr-vivek-vij.webp",
    workingAt: "Fortis Escorts and Heart Institute, Okhla, Delhi",
    hospitalId: "fortis-escorts-heart-institute-okhla",
    about: {
      title: "About Dr. Vivek Vij",
      items: [
        {
          content: "Dr. Vivek Vij is a pioneering liver transplant surgeon credited with developing living donor surgery and standardizing safety protocols to achieve a 100% donor safety profile since its inception in the country."
        },
        {
          content: "He is the first surgeon from the Indian subcontinent to publish a series of laparoscopic Donor Hepatectomy in 'Liver Transplantation'."
        },
        {
          content: "Dr. Vij is the founder of Liver Transplantation and Hepatobiliary Sciences in the Fortis group of Hospitals, initiating a highly successful liver transplant program initially at its Noida center and then at Mohali."
        },
        {
          content: "He and his team have a cumulative experience of performing more than 2,500 liver transplants, achieving a record 95% patient and 100% donor success rate."
        },
        {
          content: "Dr. Vij has the lowest biliary complication rate (<4%) in Living Donor Liver Transplant (LDLT) worldwide."
        }
      ]
    },
    specialties: [
      "Liver Transplant",
      "Hepato-Biliary Pancreatic Surgery",
      "Advanced Upper & Lower GI Surgery"
    ],
    skilledAt: [
      "Gastroscopy",
      "Piles Treatment (Non-Surgical)",
      "Liver Disease Treatment",
      "Colonoscopy",
      "Hemorrhoids Treatment",
      "Pancreas Transplantation",
      "Steatosis",
      "Appendicitis Treatment",
      "Gall Bladder (Biliary) Stone Treatment",
      "Colorectal Surgery",
      "Diabetic Foot Treatment/Surgery",
      "Electrocauterization",
      "Endoscopic Surgery",
      "Endosurgery"
    ],
    specialInterests: [
      "Adult & Pediatric Liver Transplant",
      "Complex Liver Surgery",
      "Advanced Pancreato-Biliary Surgeries",
      "Advanced Laparoscopic and Robotic Surgeries",
      "Basic Science Research and Regenerative Medicine"
    ],
    education: [
      "MBBS, 1998, University of Pune",
      "MS - General Surgery, 2001, Baba Farid University of Health Sciences",
      "DNB - General Surgery, 2003, National Board of Examinations, New Delhi"
    ],
    experience: [
      "Consultant at Indraprastha Apollo Hospitals",
      "Consultant at Sir Ganga Ram Hospital",
      "Consultant at Fortis Hospital, Mohali",
      "Consultant at Rajendra Hospital & Medical College, Patiala",
      "Consultant at B.J.M.C, Pune"
    ],
    awards: [
      "Roche Preceptorship, University of Alabama, Birmingham, USA",
      "International Liver Transplant Society (ILTS), Chicago"
    ],
    reviews: [
     
    ]
  },
  {
    tags: ["Gastroenterology","Hepato-Biliary", "Liver Transplant",  "Delhi", ],
    id: "dr-mohd-qaleem",
    name: "Dr. Mohd. Qaleem",
    yearsOfExperience: 16,
    designation: "Senior Consultant - Liver Transplant, Hepato-Biliary, and Gastro Surgery",
    image: "/doctors/dr-mohd-qaleem.webp",
    workingAt: "Fortis Escorts Heart Institute, New Delhi",
    hospitalId: "fortis-escorts-heart-institute-new-delhi",
    about: {
      title: "About Dr. Mohd. Qaleem",
      items: [
        {
          content: "Dr. Mohd. Qaleem is a leading Liver Transplant, Hepato-Biliary, and Gastro Surgeon in New Delhi, India, with 16 years of experience."
        },
        {
          content: "His areas of expertise include liver transplantation, hepato-pancreato-biliary surgery, gastrointestinal cancer surgery, and advanced laparoscopic GI and HPB surgery."
        },
        {
          content: "He completed his MBBS from Bundelkhand University, Jhansi, in 2007, MS in General Surgery from Chhatrapati Shahu Ji Maharaj University, Lucknow, in 2011, and DNB in Gastroenterology from the National Board of Examinations, Delhi, in 2015."
        },
        {
          content: "After completing his DNB, he pursued a one-year postdoctoral Senior Registrarship in Advanced GI Laparoscopy and GI Surgery at Apollo Hospitals, New Delhi."
        }
      ]
    },
    specialties: [
      "Liver Transplantation",
      "Hepato-Pancreato-Biliary Surgery",
      "Gastrointestinal Cancer Surgery",
      "Advanced Laparoscopic GI and HPB Surgery"
    ],
    skilledAt: [
      "Liver Transplantation",
      "Hepato-Pancreato-Biliary Surgery",
      "Gastrointestinal Cancer Surgery",
      "Advanced Laparoscopic GI and HPB Surgery"
    ],
    specialInterests: [
      "Gastrointestinal and GI Cancer Surgery",
      "Advanced Laparoscopic GI and HPB Surgery"
    ],
    education: [
      "MBBS, 2007, Bundelkhand University, Jhansi",
      "MS in General Surgery, 2011, Chhatrapati Shahu Ji Maharaj University, Lucknow",
      "DNB in Gastroenterology, 2015, National Board of Examinations, Delhi"
    ],
    experience: [
      "Senior Registrar, Advanced GI Laparoscopy and GI Surgery, Apollo Hospitals, New Delhi",
      "Consultant, GB Pant Hospital, New Delhi"
    ],
    awards: [],
    reviews: []
  },
  {
    tags: ["Cardiology","Cardiac Surgery",  "Delhi", ],
    id: "dr-atul-mathur",
    name: "Dr. Atul Mathur",
    yearsOfExperience: 40,
    designation: "Executive Director of Interventional Cardiology and Chief of the Cath Lab",
    image: "/doctors/dr-atul-mathur.webp",
    workingAt: "Fortis Escorts Heart Institute, Okhla Road, New Delhi",
    hospitalId: "fortis-escorts-heart-institute-okhla",
    about: {
      title: "About Dr. Atul Mathur",
      items: [
        {
          content: "Dr. Atul Mathur is the Executive Director of Interventional Cardiology and Chief of the Cath Lab at Fortis Escorts Heart Institute, New Delhi. He also serves as the president of the Indian Council for Carotid Interventions."
        },
        {
          content: "He is a pioneer in complex coronary procedures and specializes in Endovascular and Structural Heart interventions."
        },
        {
          content: "Dr. Mathur performed India's first Carotid Stenting Procedure in 1999 and was the first Indian doctor to obtain a U.S. patent for a medical device used in Carotid Artery Stenting."
        },
        {
          content: "He has established a center of excellence at Fortis Escorts Heart Institute, organizing training courses in Coronary Endovascular and Structural Heart Interventions for physicians from India and the Asia-Pacific region."
        },
        {
          content: "Dr. Mathur has contributed to several hundred research publications acknowledged nationally and internationally."
        }
      ]
    },
    specialties: [
      "Interventional Cardiology",
      "Endovascular Interventions",
      "Structural Heart Interventions"
    ],
    skilledAt: [
      "Complex Coronary Procedures",
      "Carotid Stenting",
      "Aortic Graft Stenting",
      "Peripheral Arterial and Venous Angioplasty",
      "Transcatheter Aortic Valve Replacement (TAVR)",
      "MitraClip",
      "Left Atrial Appendage Occlusion (LAAO)",
      "Balloon Mitral Valvuloplasty (BMV)",
      "Adult Ventricular Septal Defect (VSD) Closure"
    ],
    specialInterests: [
      "Complex Coronary Procedures",
      "Endovascular Interventions",
      "Structural Heart Interventions"
    ],
    education: [
      "MBBS, 1984, University of Rajasthan, Jaipur",
      "MD in General Medicine, 1987, University of Rajasthan",
      "DM in Cardiology, 1991, All India Institute of Medical Sciences (AIIMS), New Delhi"
    ],
    experience: [
      "Associate at University of Alabama at Birmingham (1994–1996)",
      "Assistant Professor at AIIMS, New Delhi (1991–1996)",
      "Director of Cardiology at Fortis Escorts Heart Institute, New Delhi (1996–2018)"
    ],
    awards: [
      "First Indian doctor to receive a U.S. patent for a medical device used in Carotid Artery Stenting",
      "Performed India's first Carotid Stenting Procedure in 1999"
    ],
    reviews: [
     
    ]
  },
  {
    tags: ["Oncology","Immunotherapy",  "Delhi", ],
    id: "dr-huma-noor",
    name: "Dr. Huma Noor",
    yearsOfExperience: 9,
    designation: "Consultant Medical Oncology",
    image: "/doctors/dr-huma-noor.webp",
    workingAt: "Fortis Escorts Heart Institute, Okhla Road, New Delhi",
    hospitalId: "fortis-escorts-heart-institute-new-delhi",
    about: {
      title: "About Dr. Huma Noor",
      items: [
        {
          content: "Dr. Huma Noor is a Consultant in Medical Oncology at Fortis Escorts, Okhla Road, New Delhi, with over 9 years of experience in oncology."
        },
        {
          content: "She has previously worked with Narayana Healthcare, West Bengal, Dr. Shad Salim Clinic, and Hakim Sanaullah Cancer Centre, Srinagar."
        },
        {
          content: "Dr. Noor has performed various procedures such as PICC line insertion, bone marrow aspiration and biopsy, and intrathecal administration of drugs."
        },
        {
          content: "She has expertise in managing various malignancies, including lung cancer, breast cancer, ovarian cancer, prostate cancer, colon cancer, as well as different lymphomas and leukemias."
        },
        {
          content: "Dr. Noor is also experienced in handling rare malignancies like soft tissue and bone sarcomas."
        },
        {
          content: "She is proficient in all aspects of oncology, including administering chemotherapy protocols, targeted drugs, immunotherapy, and managing chemotherapy-related morbidities, palliative care, and supportive care."
        },
        {
          content: "Dr. Noor has performed over 100 bone marrow transplants for diseases such as myeloma and lymphomas."
        },
        {
          content: "She is the first in her state to carry out an autologous bone marrow transplant in a pediatric patient diagnosed with neuroblastoma."
        }
      ]
    },
    specialties: [
      "Medical Oncology"
    ],
    skilledAt: [
      "PICC Line Insertion",
      "Bone Marrow Aspiration and Biopsy",
      "Intrathecal Drug Administration",
      "Chemotherapy Protocols",
      "Targeted Therapy",
      "Immunotherapy",
      "Palliative Care",
      "Supportive Care"
    ],
    specialInterests: [
      "Lung Cancer",
      "Breast Cancer",
      "Ovarian Cancer",
      "Prostate Cancer",
      "Colon Cancer",
      "Lymphomas",
      "Leukemias",
      "Soft Tissue Sarcomas",
      "Bone Sarcomas"
    ],
    education: [
      "MBBS",
      "MD (Medicine)",
      "DM (Medical Oncology)"
    ],
    experience: [
      "Consultant at Narayana Healthcare, West Bengal",
      "Consultant at Dr. Shad Salim Clinic",
      "Consultant at Hakim Sanaullah Cancer Centre, Srinagar",
      "Consultant Medical Oncology at Fortis Escorts Heart Institute, New Delhi"
    ],
    awards: [],
    reviews: []
  },
  {
    tags: ["Neurology","Spine Surgery",  "Delhi", ],
    id: "dr-rana-patir",
    name: "Dr. Rana Patir",
    yearsOfExperience: 33,
    designation: "Director and Head of Brain & Spine Surgery",
    image: "/doctors/dr-rana-patir.webp",
    workingAt: "Fortis Flt. Lt. Rajan Dhall Hospital, Vasant Kunj, New Delhi",
    hospitalId: "fortis-flt-lt-rajan-dhall-hospital-vasant-kunj",
    about: {
      title: "About Dr. Rana Patir",
      items: [
        {
          content: "Dr. Rana Patir is an eminent neurosurgeon in India with over 33 years of experience in advanced neurosurgery."
        },
        {
          content: "He has served as teaching faculty at AIIMS and Sir Ganga Ram Hospital, New Delhi, and was a Professor of Neurosurgery at Guwahati Medical College."
        },
        {
          content: "Dr. Patir specializes in minimally invasive brain and spine surgery, skull base surgery, neurovascular surgery, extracranial-intracranial bypass surgery, pediatric neurosurgery, and epilepsy surgery."
        },
        {
          content: "He has performed over 10,000 neurological procedures with a high success rate."
        },
        {
          content: "Dr. Patir completed his MBBS, MS in General Surgery, and MCh in Neuro Surgery from the All India Institute of Medical Sciences (AIIMS), New Delhi."
        }
      ]
    },
    specialties: [
      "Minimally Invasive Brain and Spine Surgery",
      "Skull Base Surgery",
      "Neurovascular Surgery",
      "Pediatric Neurosurgery",
      "Epilepsy Surgery"
    ],
    skilledAt: [
      "CSF Rhinorrhoea Repair Surgery",
      "Decompression Microvascular Surgery",
      "Traumatic Brain Injury (TBI) Treatment",
      "Nerve and Muscle Disorders",
      "Cerebrovascular Surgery",
      "Deep Brain Stimulation",
      "Gamma-Knife Radiosurgery",
      "Brain Tumor Surgery",
      "Vagus Nerve Stimulation (Epilepsy)",
      "Laminectomy",
      "Spine Surgery",
      "Peripheral Neurosurgery"
    ],
    specialInterests: [
      "Complex Brain Tumor Surgeries",
      "Minimally Invasive Neurosurgical Procedures"
    ],
    education: [
      "MBBS, 1990, All India Institute of Medical Sciences, New Delhi",
      "MS in General Surgery, 1983, All India Institute of Medical Sciences, New Delhi",
      "MCh in Neuro Surgery, 1989, All India Institute of Medical Sciences, New Delhi"
    ],
    experience: [
      "Director, Neurosciences at Max Super Specialty Hospital",
      "Director, Neurosurgery at Max Healthcare",
      "Chairman, Department of Neurosurgery at Sir Ganga Ram Hospital",
      "Registrar, Regional Neurosciences Centre",
      "Faculty of Neurosurgery at AIIMS"
    ],
    awards: [
      "Professor of Neurosurgery at Guwahati Medical College",
      "Fellowship in Neurosurgery at New Castle, UK",
      "Former Associate Professor at AIIMS"
    ],
    reviews: [
      
    ]
  },
  {
    tags: ["Gastroenterology","Hepatobiliary",  "Delhi", ],
    id: "dr-gourdas-choudhuri",
    name: "Dr. Gourdas Choudhuri",
    yearsOfExperience: 43,
    designation: "Director & Head of Department of Gastroenterology and Hepatobiliary Sciences",
    image: "/doctors/dr-gourdas-choudhuri.webp",
    workingAt: "Fortis Memorial Research Institute, Gurgaon",
    hospitalId: "fortis-memorial-research-institute-Gurgaon",
    about: {
      title: "About Dr. Gourdas Choudhuri",
      items: [
        {
          content: "Dr. (Prof) Gourdas Choudhuri is a renowned gastroenterologist, medical educator, researcher, columnist, and philanthropist with over 43 years of experience."
        },
        {
          content: "He trained at the All India Institute of Medical Sciences (AIIMS), New Delhi."
        },
        {
          content: "Dr. Choudhuri pioneered Endoscopic Ultrasound (EUS) and Extracorporeal Shockwave Biliary Lithotripsy (ESWL) in India."
        },
        {
          content: "Under his leadership, the Department of Gastroenterology at Sanjay Gandhi Postgraduate Institute of Medical Sciences, Lucknow, became one of the top five in the country."
        },
        {
          content: "He has served as the President of the Indian Society of Gastroenterology and has been involved with several scientific bodies and journals."
        },
        {
          content: "Dr. Choudhuri has over 200 scientific publications and numerous orations and awards to his credit."
        }
      ]
    },
    specialties: [
      "Gastroenterology",
      "Hepatobiliary Sciences"
    ],
    skilledAt: [
      "Endoscopic Ultrasound (EUS)",
      "Extracorporeal Shockwave Biliary Lithotripsy (ESWL)"
    ],
    specialInterests: [
      "Liver and Digestive Healthcare"
    ],
    education: [
      "MBBS, AIIMS, New Delhi",
      "MD in Medicine, AIIMS, New Delhi",
      "DM in Gastroenterology, AIIMS, New Delhi"
    ],
    experience: [
      "Director & HOD, Department of Gastroenterology and Hepatobiliary Sciences, Fortis Memorial Research Institute, Gurgaon",
      "Vice Chairman, Institute of Digestive & Hepatobiliary Sciences, Medanta – The Medicity",
      "Professor & Head, Department of Gastroenterology, Sanjay Gandhi Postgraduate Institute of Medical Sciences, Lucknow"
    ],
    awards: [
      "Over 200 scientific publications",
      "Several orations and awards"
    ],
    reviews: [
      
    ]
  },
  {
    tags: ["Oncology","Gastroenterology",  "Delhi", ],
    id: "dr-ajay-kumar-kriplani",
    name: "Dr. Ajay Kumar Kriplani",
    yearsOfExperience: 40,
    designation: "Principal Director & Head of Department of Laparoscopic GI, GI Oncology, Bariatric & Minimal Access Surgery",
    image: "/doctors/dr-ajay-kumar-kriplani.webp",
    workingAt: "Fortis Memorial Research Institute, Gurgaon",
    hospitalId: "fortis-memorial-research-institute-gurgaon",
    about: {
      title: "About Dr. Ajay Kumar Kriplani",
      items: [
        {
          content: "Dr. A.K. Kriplani is a nationally recognized leader in laparoscopic gastrointestinal and bariatric surgery."
        },
        {
          content: "He is the Past President of the Indian Association of Gastrointestinal Endosurgeons (IAGES)."
        },
        {
          content: "Dr. Kriplani was among the first in India to perform laparoscopic adrenalectomy, splenectomy, and live donor nephrectomy for renal transplant."
        },
        {
          content: "He has trained hundreds of surgeons in laparoscopic surgery from India and neighboring countries."
        }
      ]
    },
    specialties: [
      "Laparoscopic Gastrointestinal Surgery",
      "Bariatric Surgery",
      "Minimal Access Surgery"
    ],
    skilledAt: [
      "Laparoscopic Adrenalectomy",
      "Laparoscopic Splenectomy",
      "Laparoscopic Live Donor Nephrectomy",
      "Anti-Reflux Procedures",
      "Colonic Resections",
      "Gastric and Esophageal Surgery"
    ],
    specialInterests: [
      "Advancement of Laparoscopic Surgery Techniques",
      "Training and Mentoring Surgeons"
    ],
    education: [
      "MBBS, Pt. Ravishankar Shukla University, Raipur",
      "MS in General Surgery, Pt. Ravishankar Shukla University, Raipur"
    ],
    experience: [
      "Principal Director & HOD, Laparoscopic GI, GI Oncology, Bariatric & Minimal Access Surgery, Fortis Memorial Research Institute, Gurgaon",
      "Vice Chairman, Institute of Minimal Access, Metabolic & Bariatric Surgery, Medanta – The Medicity",
      "Professor of Surgery, All India Institute of Medical Sciences (AIIMS), New Delhi"
    ],
    awards: [
      "Dr. S.R. Joglekar Award",
      "Dr. N. Sethuraman Oration"
    ],
    reviews: []
  },
  {
    tags: ["Oncology","Bone Marrow Transplant","Haematology",  "Delhi", ],
    id: "dr-rahul-bhargava",
    name: "Dr. Rahul Bhargava",
    yearsOfExperience: 15,
    designation: "Principal Director & Chief of Haematology, Haemato-Oncology, and Bone Marrow Transplant",
    image: "/doctors/dr-rahul-bhargava.webp",
    workingAt: "Fortis Memorial Research Institute, Gurgaon",
    hospitalId: "fortis-memorial-research-institute-gurgaon",
    about: {
      title: "About Dr. Rahul Bhargava",
      items: [
        {
          content: "Dr. Rahul Bhargava is a leading Indian Haematologist and Haemato-Oncologist with numerous pioneering achievements in stem cell transplantation."
        },
        {
          content: "In 2014, he became the first Indian doctor to successfully perform a stem cell transplant for Multiple Sclerosis, establishing the procedure in Indian medical practice."
        },
        {
          content: "He was also the first in India to use stem cell transplantation for treating Systemic Sclerosis."
        },
        {
          content: "Dr. Bhargava has completed over 1,500 stem cell transplants to date."
        },
        {
          content: "He has been instrumental in establishing ten low-cost stem cell transplant centers across India, including at Sarvodaya Hospital, Batra Hospital, and Action Balaji Hospital."
        },
        {
          content: "With a vision of an anemia-free and thalassemia-free India, he actively collaborates with various government initiatives to provide affordable bone marrow transplant treatments."
        },
        {
          content: "Dr. Bhargava is recognized for his community hematology efforts, having screened over 500 children in schools across Haryana and surrounding areas in 2018."
        },
        {
          content: "He is a founding member of the Delhi Hematology Group and advocates for the 'Say No To Whole Blood' campaign to promote optimal blood utilization."
        },
        {
          content: "Dr. Bhargava has contributed to developing hematology services in countries such as Uganda, Uzbekistan, Rwanda, and Iraq."
        }
      ]
    },
    specialties: [
      "Haematology",
      "Haemato-Oncology",
      "Bone Marrow Transplant"
    ],
    skilledAt: [
      "Stem Cell Transplantation",
      "Treatment of Multiple Sclerosis",
      "Treatment of Systemic Sclerosis",
      "Community Haematology",
      "Establishing Low-Cost Transplant Centers"
    ],
    specialInterests: [
      "Anemia and Thalassemia Eradication",
      "Advancement of Haematology Services in Developing Nations"
    ],
    education: [
      "MBBS",
      "MD in General Medicine",
      "DM in Haematology & Stem Cell Transplant",
      "Fellowship in Unrelated & Haploidentical Transplant"
    ],
    experience: [
      "Principal Director & Chief of Haematology, Haemato-Oncology, and Bone Marrow Transplant at Fortis Memorial Research Institute, Gurgaon",
      "Developed Bone Marrow Transplantation and Haematology facilities at Medanta – The Medicity, Gurgaon, achieving over 100 successful transplants within 36 months"
    ],
    awards: [
      "First Indian doctor to perform and propagate stem cell transplant for Multiple Sclerosis",
      "Pioneered the first haploidentical stem cell transplant in Gurgaon for a patient with Fanconi Anemia",
      "Established eight cost-effective stem cell transplant centers across India",
      "Developed hematology services in multiple developing countries"
    ],
    reviews: []
  },
  {
    tags: ["Nephrology","Hematology","Pediatric",  "Delhi", ],
    id: "dr-vikas-dua",
    name: "Dr. Vikas Dua",
    yearsOfExperience: 20,
    designation: "Principal Director & Head - Pediatric Hematology",
    image: "/doctors/dr-vikas-dua.webp",
    workingAt: "Fortis Memorial Research Institute, Gurgaon",
    hospitalId: "fortis-memorial-research-institute-gurgaon",
    about: {
      title: "About Dr. Vikas Dua",
      items: [
        {
          content: "Dr. Vikas Dua is a renowned Pediatric Hemato Oncologist and Bone Marrow Transplant specialist with over 20 years of experience."
        },
        {
          content: "He has performed over 1,000 transplants, achieving excellent outcomes, particularly in Pediatric Unrelated and Haploidentical Transplants."
        },
        {
          content: "Dr. Dua has successfully conducted some of the rarest transplants in India."
        }
      ]
    },
    specialties: [
      "Pediatric Hematology",
      "Hemato Oncology",
      "Bone Marrow Transplant"
    ],
    skilledAt: [
      "Pediatric Unrelated Transplants",
      "Haploidentical Transplants",
      "Stem Cell Transplantation"
    ],
    specialInterests: [
      "Advancement of Pediatric Hemato Oncology",
      "Innovative Bone Marrow Transplant Techniques"
    ],
    education: [
      "MBBS",
      "MD in Pediatrics",
      "Fellowship in Pediatric Hematology Oncology"
    ],
    experience: [
      "Principal Director & Head - Pediatric Hematology, Hemato Oncology & Bone Marrow Transplant at Fortis Memorial Research Institute, Gurgaon",
      "Senior Consultant, Pediatric Hematology, Oncology and BMT at Fortis Hospital, Noida"
    ],
    awards: [],
    reviews: []
  },
  {
    tags: ["Nephrology", "Gurgaon", ],
    id: "dr-salil-jain",
    name: "Dr. Salil Jain",
    yearsOfExperience: 25,
    designation: "Senior Director & Head of Nephrology and Renal Transplant",
    image: "/doctors/dr-salil-jain.webp",
    workingAt: "Fortis Memorial Research Institute, Gurgaon",
    hospitalId: "fortis-memorial-research-institute-gurgaon",
    about: {
      title: "About Dr. Salil Jain",
      items: [
        {
          content: "Dr. Salil Jain is a renowned nephrologist with over 25 years of experience in nephrology and renal transplantation."
        },
        {
          content: "He completed his MBBS from Seth G.S. Medical College & K.E.M Hospital, Mumbai, and his nephrology training from Jaslok Hospital, Mumbai."
        },
        {
          content: "Dr. Jain pursued a Fellowship in Nephrology and Renal Transplantation from the University of Toronto."
        },
        {
          content: "He has previously worked at esteemed institutions such as St. Stephen's Hospital, Apollo Hospital, Fortis Vasant Kunj, and Medanta The Medicity."
        },
        {
          content: "Dr. Jain is an exceptional clinician with several national and international publications to his credit."
        }
      ]
    },
    specialties: [
      "Nephrology",
      "Renal Transplantation"
    ],
    skilledAt: [
      "Chronic Kidney Disease (CKD) Treatment",
      "Kidney Failure Treatment",
      "Kidney Dialysis",
      "Hemodialysis",
      "Peritoneal Dialysis",
      "Kidney Transplantation"
    ],
    specialInterests: [
      "Acute Kidney Injury",
      "Glomerulonephritis",
      "Hypertension Management"
    ],
    education: [
      "MBBS from Seth G.S. Medical College & K.E.M Hospital, Mumbai",
      "MD in General Medicine",
      "DNB in Nephrology",
      "Fellowship in Nephrology and Renal Transplantation from the University of Toronto"
    ],
    experience: [
      "Senior Director & Head of Nephrology and Renal Transplant at Fortis Memorial Research Institute, Gurgaon",
      "Senior Consultant at Medanta The Medicity",
      "Consultant at Fortis Vasant Kunj",
      "Consultant at Apollo Hospital",
      "Consultant at St. Stephen's Hospital"
    ],
    awards: [],
    reviews: [
      
    ]
  },
  {
    tags: ["Neurology","Spine Surgery",  "Gurgaon", ],
    id: "dr-sandeep-vaishya",
    name: "Dr. Sandeep Vaishya",
    yearsOfExperience: 35,
    designation: "Executive Director of Neurosurgery",
    image: "/doctors/dr-sandeep-vaishya.webp",
    workingAt: "Fortis Memorial Research Institute, Gurgaon",
    hospitalId: "fortis-memorial-research-institute-gurgaon",
    about: {
      title: "About Dr. Sandeep Vaishya",
      items: [
        {
          content: "Dr. Sandeep Vaishya is a renowned neurosurgeon in India with over 35 years of experience, having worked with top institutions and hospitals."
        },
        {
          content: "He was awarded the Herbert Krause Medal for Best Paper in Neuro-Oncology by the Neurological Society of India in 2001."
        },
        {
          content: "Dr. Vaishya received the Sundt Fellowship at the Mayo Clinic, USA."
        },
        {
          content: "He has served as faculty in the Neurosurgery Department at AIIMS."
        },
        {
          content: "Dr. Vaishya is recognized as one of the foremost surgeons globally for brachial plexus injuries and in South Asia for Gamma Knife Surgery."
        }
      ]
    },
    specialties: [
      "Minimal Invasive and Image-Guided Neurosurgery",
      "Intracranial Tumor Surgery including Skull Base Tumors",
      "Functional Neurosurgery",
      "Spinal Surgery",
      "Peripheral Nerve Surgery"
    ],
    skilledAt: [
      "Neurophysiology",
      "Vascular Brain Diseases",
      "Fibromyalgia Treatment",
      "Movement Disorder",
      "Neurological Dysfunction",
      "CSF Rhinorrhoea Repair Surgery",
      "Skull Base Surgery",
      "Deep Brain Stimulation",
      "Lumbar Puncture",
      "Canalith Repositioning (CR)",
      "Gamma-Knife Radiosurgery",
      "Brain Tumor Surgery",
      "Vagus Nerve Stimulation (Epilepsy)",
      "Epilepsy Surgery",
      "ACL & PCL Reconstruction"
    ],
    specialInterests: [
      "Brachial Plexus Injuries",
      "Gamma Knife Surgery"
    ],
    education: [
      "MBBS from JIWAJI University, Gwalior (1988)",
      "MS in General Surgery from JIWAJI University, Gwalior (1991)",
      "MCh in Neuro Surgery from All India Institute of Medical Sciences, New Delhi (1996)"
    ],
    experience: [
      "Executive Director of Neurosurgery at Fortis Memorial Research Institute, Gurgaon",
      "Senior Consultant, Neurosurgery at Max Healthcare (2006 - 2012)"
    ],
    awards: [
      "Dr. Majeed Memorial Oration, Karachi, Pakistan (2008)",
      "Herbert Krause Medal for Best Paper in Neuro-Oncology (NSI 2001)",
      "Life Membership Award by Mayo Alumni Association",
      "Gold Medal in Medical School"
    ],
    reviews: [
      
    ]
  },
  {
    tags:["Gynecology","Obstetrics",  "Gurgaon", ],
    id: "dr-mukta-kapila",
    name: "Dr. Mukta Kapila",
    yearsOfExperience: 33,
    designation: "Director and Unit Head, Obstetrics and Gynecology",
    image: "/doctors/dr-mukta-kapila.webp",
    workingAt: "Fortis Memorial Research Institute, Gurgaon",
    hospitalId: "fortis-memorial-research-institute-gurgaon",
    about: {
      title: "About Dr. Mukta Kapila",
      items: [
        {
          content: "Dr. Mukta Kapila is the Director and Unit Head of Obstetrics and Gynecology at Fortis Memorial Research Institute in Gurgaon. She has over 33 years of experience in the field, with the last 15 years spent practicing in Gurgaon."
        },
        {
          content: "She has traveled extensively, both nationally and internationally, to gain exposure to leading hospitals and medical equipment worldwide."
        }
      ]
    },
    specialties: [
      "Obstetrics",
      "Gynecology"
    ],
    skilledAt: [
      "PCOD/PCOS Treatment",
      "Pregnancy Check-Up",
      "Gynae Problems",
      "Vaginal Infection Treatment",
      "Caesarean Section (C Section)",
      "Hysterectomy (Abdominal/Vaginal)"
    ],
    specialInterests: [
      "High-Risk Pregnancy Care",
      "Infertility Evaluation and Treatment",
      "Laparoscopic Gynecological Surgeries"
    ],
    education: [
      "MBBS",
      "DGO",
      "DNB in Obstetrics & Gynecology"
    ],
    experience: [
      "Director and Unit Head, Obstetrics and Gynecology at Fortis Memorial Research Institute, Gurgaon"
    ],
    awards: [],
    reviews: [
      
    ]
  },
  {
    tags: ["Oncology","Radiation Oncology",  "Gurgaon", ],
    id: "dr-anil-kumar-anand",
    name: "Dr. Anil Kumar Anand",
    yearsOfExperience: 44,
    designation: "Senior Director & Head of Radiation Oncology",
    image: "/doctors/dr-anil-kumar-anand.webp",
    workingAt: "Fortis Memorial Research Institute, Gurgaon",
    hospitalId: "fortis-memorial-research-institute-gurgaon",
    about: {
      title: "About Dr. Anil Kumar Anand",
      items: [
        {
          content: "Dr. Anil Kumar Anand is a distinguished Radiation Oncologist with over 44 years of experience in the field."
        },
        {
          content: "He completed his MBBS from Dayanand Medical College, Ludhiana, in 1980, followed by an MD in Radiotherapy from PGIMER, Chandigarh, in 1984."
        },
        {
          content: "Dr. Anand has undergone specialized training in radiation therapy at esteemed institutions, including the New York Hospital Medical Center of Queens and The Middlesex Hospital Medical School in London."
        },
        {
          content: "He has held prominent positions at various institutions, such as Senior Consultant at Rajiv Gandhi Cancer Institute and Research Centre, and Principal Director of Radiation Oncology at Max Hospital, Saket."
        },
        {
          content: "Dr. Anand has numerous scientific publications to his credit, with a recent focus on Stereotactic Body Radiation Therapy (SBRT) in recurrent head and neck cancers."
        }
      ]
    },
    specialties: [
      "Radiation Oncology"
    ],
    skilledAt: [
      "Intensity Modulated Radiotherapy (IMRT)",
      "Image-Guided Radiotherapy (IGRT)",
      "Stereotactic Radiosurgery (SRS)",
      "Stereotactic Body Radiotherapy (SBRT)",
      "Intraoperative Brachytherapy",
      "Conformal Radiation Therapy"
    ],
    specialInterests: [
      "Head and Neck Cancers",
      "Brain Tumors",
      "Prostate Cancer",
      "Thoracic Cancers"
    ],
    education: [
      "MBBS from Dayanand Medical College, Ludhiana (1980)",
      "MD in Radiotherapy from PGIMER, Chandigarh (1984)"
    ],
    experience: [
      "Senior Director & Head of Radiation Oncology at Fortis Memorial Research Institute, Gurgaon",
      "Principal Director of Radiation Oncology at Max Hospital, Saket",
      "Senior Consultant at Rajiv Gandhi Cancer Institute and Research Centre",
      "Senior Consultant at Batra Hospital and Medical Research Centre, New Delhi"
    ],
    awards: [
      "Commonwealth Fellowship at The Middlesex Hospital Medical School, London",
      "Nargis Dutt Foundation Fellowship at the New York Hospital Medical Center of Queens, affiliated with Cornell University"
    ],
    reviews: []
  },
  {
    tags: ["Oncology","Urology","Radiation Oncology",  "Gurgaon", ],
    id: "dr-anil-mandhani",
    name: "Dr. Anil Mandhani",
    yearsOfExperience: 34,
    designation: "Chairman, Kidney and Urology Institute",
    image: "/doctors/dr-anil-mandhani.webp",
    workingAt: "Medanta – The Medicity, Gurgaon",
    hospitalId: "medanta-the-medicity-gurgaon",
    about: {
      title: "About Dr. Anil Mandhani",
      items: [
        {
          content: "Dr. Anil Mandhani is a distinguished urologist with over 34 years of experience, specializing in complex oncological and reconstructive surgeries for cancers such as prostate, testicular, and penile."
        },
        {
          content: "He served as a Professor of Urology at Sanjay Gandhi Post Graduate Institute of Medical Sciences for 20 years, contributing extensively to clinical and basic science research in urological cancers."
        },
        {
          content: "Dr. Mandhani completed a clinical fellowship in Robotic Uro-Oncology at the Institute of Robotic Surgery, Cornell/New York Presbyterian Hospital, New York."
        },
        {
          content: "Prior to joining Medanta, he was the Director of the Kidney and Urology Institute at Fortis Escorts Hospital, New Delhi."
        }
      ]
    },
    specialties: [
      "Urology",
      "Uro-Oncology",
      "Robotic Surgery",
      "Renal Transplantation"
    ],
    skilledAt: [
      "Ureteroscopy (URS)",
      "Vasectomy",
      "Urinary Incontinence Treatment",
      "Treatment of Erectile Dysfunction",
      "Kidney Stone Treatment",
      "HIV Counselling",
      "Minimally Invasive Urology",
      "Surgery of the Penis",
      "Urostomy",
      "Urethrotomy",
      "Ureterostomy",
      "Management of Urinary Tract Obstruction"
    ],
    specialInterests: [
      "Robotic Uro-Oncologic Surgeries",
      "Renal Transplantation",
      "Minimally Invasive Urological Procedures"
    ],
    education: [
      "MBBS from Pt JNM Medical College, Ravishankar University, Raipur (1990)",
      "MS in General Surgery from Pt JNM Medical College, Ravishankar University, Raipur (1993)",
      "MCh in Urology from Sanjay Gandhi Post Graduate Institute of Medical Sciences, Lucknow (1998)",
      "Fellowship in Robotic Uro-Oncology from Cornell/New York Presbyterian Hospital, New York (2007)"
    ],
    experience: [
      "Chairman, Kidney and Urology Institute at Medanta – The Medicity, Gurgaon",
      "Director, Kidney and Urology Institute at Fortis Escorts Hospital, New Delhi",
      "Professor of Urology at Sanjay Gandhi Post Graduate Institute of Medical Sciences, Lucknow"
    ],
    awards: [
      "DUSUCON North Zone Urological Society of India for Best Research Work Award (2014)",
      "DUSUCON Award for Best Clinical Work on PSA Characteristics in Prostate Cancer (2013)"
    ],
    reviews: [
     
    ]
  },
  {
    tags: ["Nephrology","Nephrology",  "Gurgaon", ],
    id: "dr-gagan-deep-chhabra",
    name: "Dr. Gagan Deep Chhabra",
    yearsOfExperience: 22,
    designation: "Director & Unit Head – Nephrology & Nephrology",
    image: "/doctors/dr-gagan-deep-chhabra.webp",
    workingAt: "Fortis Memorial Research Institute, Gurgaon",
    hospitalId: "fortis-memorial-research-institute-gurgaon",
    about: {
      title: "About Dr. Gagan Deep Chhabra",
      items: [
        {
          content: "Dr. Gagan Deep Chhabra is a distinguished nephrologist with over 22 years of experience in the field."
        },
        {
          content: "He completed his MBBS from PGI Medical College, Rohtak, and pursued DNB in General Medicine and Nephrology from esteemed institutions."
        },
        {
          content: "Dr. Chhabra has performed over 2,500 renal transplants and holds certifications in interventions such as AV Fistula and AV Shunt procedures."
        },
        {
          content: "He has been associated with renowned hospitals, including Max Super Specialty Hospital Saket, Sir Ganga Ram Hospital, and B.L.K Hospital."
        },
        {
          content: "Dr. Chhabra was honored with the AITSE award by the President of India for his academic contributions as a DNB co-guide and teacher over eight years."
        }
      ]
    },
    specialties: [
      "Nephrology",
      "Kidney Transplantation",
      "Interventional Nephrology"
    ],
    skilledAt: [
      "Kidney Transplant (ABO Incompatible, Highly Sensitized, and Cadaveric)",
      "Interventional Nephrology (AV Fistula, AV Shunt, and Perm-Cath Insertion)",
      "Peritoneal Dialysis (Continuous, Intermittent, and APD)",
      "Critical Care Nephrology (CRRT, SLED, and Immunoadsorption)"
    ],
    specialInterests: [
      "Renal Transplantation",
      "Interventional Nephrology",
      "Critical Care Nephrology"
    ],
    education: [
      "MBBS from PGI Medical College, Rohtak",
      "DNB in General Medicine",
      "DNB in Nephrology"
    ],
    experience: [
      "Director & Unit Head – Nephrology & Kidney Transplant at Fortis Memorial Research Institute, Gurgaon",
      "Associate Consultant at B.L.K Hospital, New Delhi",
      "Senior Resident in Nephrology at Sir Ganga Ram Hospital, New Delhi",
      "Senior Resident in Medicine at Maulana Azad Medical College, New Delhi"
    ],
    awards: [
      "AITSE Award by the President of India (1993)",
      "Best Mini-Oral Presentation Award at Indian Society of Organ Transplant (ISOT) (2012)",
      "Award of Excellence at ISOT (2014)"
    ],
    reviews: []
  },
  {
    tags: ["Orthopedics","Orthopaedics",  "Gurgaon", ],
    id: "dr-jayant-arora",
    name: "Dr. Jayant Arora",
    yearsOfExperience: 28,
    designation: "Senior Director & Unit Head, Orthopaedics",
    image: "/doctors/dr-jayant-arora.webp",
    workingAt: "Fortis Memorial Research Institute, Gurgaon",
    hospitalId: "fortis-memorial-research-institute-gurgaon",
    about: {
      title: "About Dr. Jayant Arora",
      items: [
        {
          content: "Dr. Jayant Arora is a distinguished orthopedic surgeon with over 28 years of experience, specializing in joint replacement and arthroscopic surgeries."
        },
        {
          content: "He completed his MBBS from Maulana Azad Medical College, University of Delhi, in 1996, followed by an MS in Orthopedics from Safdarjung Hospital, University of Delhi, in 2000."
        },
        {
          content: "Dr. Arora further pursued a DNB in Orthopedics from PGI Chandigarh, National Board of Examinations, in 2001."
        },
        {
          content: "He obtained Membership of the Royal College of Surgeons of Edinburgh (MRCS-Ed) after two years of orthopedic training in Scotland."
        },
        {
          content: "Dr. Arora has worked at esteemed orthopedic centers in the UK, including Woodend Hospital in Scotland, where he received training in primary and revision joint replacement surgeries."
        },
        {
          content: "Upon returning to India in 2008, he established a state-of-the-art orthopedic department at Columbia Asia Hospital, Gurgaon."
        },
        {
          content: "Currently, he serves as the Senior Director & Unit Head of Orthopaedics at Fortis Memorial Research Institute, Gurgaon."
        }
      ]
    },
    specialties: [
      "Joint Replacement Surgery",
      "Arthroscopic Surgery",
      "Orthopedic Surgery"
    ],
    skilledAt: [
      "Knee Replacement",
      "Hip Replacement",
      "Shoulder Replacement",
      "ACL & PCL Reconstruction",
      "Meniscal Repair",
      "Arthroscopic Surgery",
      "Ligament Reconstruction",
      "Fracture Treatment",
      "Physiotherapy for Sports Injury Rehabilitation",
      "Revision Hip and Knee Arthroplasty"
    ],
    specialInterests: [
      "Partial Knee Replacement",
      "Total Knee Replacement using Computer Navigation and Robotic Surgery",
      "Sports Injuries Treatment using Arthroscopic Surgery"
    ],
    education: [
      "MBBS from Maulana Azad Medical College, University of Delhi (1996)",
      "MS in Orthopedics from Safdarjung Hospital, University of Delhi (2000)",
      "DNB in Orthopedics from PGI Chandigarh, National Board of Examinations (2001)",
      "MRCS from Royal College of Surgeons of Edinburgh, UK"
    ],
    experience: [
      "Senior Director & Unit Head, Orthopaedics at Fortis Memorial Research Institute, Gurgaon",
      "Coordinator and Senior Consultant, Department of Orthopedics at Columbia Asia Hospital, Palam Vihar, Gurgaon",
      "Chief of Orthopedic Surgery at Columbia Asia Hospital, Patiala",
      "Registrar at Woodend Hospital, Scotland",
      "Senior Clinical Fellow at North Tyneside General Hospital, UK",
      "Specialist Registrar at Scunthorpe & Scarborough General Hospitals, UK"
    ],
    awards: [
      "Published numerous articles on knee replacement surgery in international orthopedic journals",
      "Presented papers on joint replacement surgery at international orthopedic conferences"
    ],
    reviews: [
     
    ]
  },
  {
    tags:["Orthopedics","Orthopaedics",  "Gurgaon", ],
    id: "dr-manoj-padman",
    name: "Dr. Manoj Padman",
    yearsOfExperience: 28,
    designation: "Director of Paediatric Orthopaedics",
    image: "/doctors/dr-manoj-padman.webp",
    workingAt: "Fortis Memorial Research Institute, Gurgaon",
    hospitalId: "fortis-memorial-research-institute-gurgaon",
    about: {
      title: "About Dr. Manoj Padman",
      items: [
        {
          content: "Dr. Manoj Padman is a specialist Paediatric Orthopaedic Surgeon with over 28 years of experience in India and the UK."
        },
        {
          content: "He is the Founder-Director of the Centre for Paediatric Orthopaedics & Disabilities (CPOD) and serves as the Director & Head of Paediatric Orthopaedics at Madhukar Rainbow Children's Hospital, New Delhi, and Fortis Memorial Research Institute, Gurgaon."
        },
        {
          content: "Dr. Padman received higher orthopaedic surgical training from Leeds Teaching Hospitals and Sheffield Teaching Hospitals in the UK."
        },
        {
          content: "His areas of interest include hip pathologies (congenital, developmental, post-infective, and post-traumatic sequelae), neuromuscular pathologies, deformity correction, and limb reconstruction using external fixators."
        }
      ]
    },
    specialties: [
      "Paediatric Orthopaedics"
    ],
    skilledAt: [
      "Wrist problems",
      "Spasticity management",
      "External fixator application",
      "Disk slip treatment",
      "Correction of deformities",
      "Spinal deformity correction",
      "Reconstruction and bone lengthening",
      "Ankle-Brachial Index",
      "Diabetic foot check-up",
      "Knee arthroplasty",
      "Lower extremity wound care",
      "Foot assessment",
      "Ligament and tendon repair",
      "Back pain treatment",
      "Sports injury treatment/management"
    ],
    specialInterests: [
      "Hip pathologies",
      "Neuromuscular pathologies",
      "Deformity correction",
      "Limb reconstruction"
    ],
    education: [
      "MBBS from Jawaharlal Institute of Postgraduate Medical Education and Research (JIPMER), Pondicherry",
      "MS in Orthopaedics",
      "DNB in Orthopedics/Orthopedic Surgery",
      "FRCS in General Surgery"
    ],
    experience: [
      "Director of Paediatric Orthopaedics at Fortis Memorial Research Institute, Gurgaon",
      "Director & Head of Paediatric Orthopaedics at Madhukar Rainbow Children's Hospital, New Delhi",
      "Higher Orthopaedic Surgical Training at Leeds Teaching Hospitals and Sheffield Teaching Hospitals, UK"
    ],
    awards: [],
    reviews: [
     
    ]
  },
  {
    tags: ["Pediatrics","Pediatrics",  "Gurgaon", ],
    id: "dr-krishan-chugh",
    name: "Dr. Krishan Chugh",
    yearsOfExperience: 42,
    designation: "Director of Pediatrics",
    image: "/doctors/dr-krishan-chugh.webp",
    workingAt: "Fortis Memorial Research Institute, Gurgaon",
    hospitalId: "fortis-memorial-research-institute-gurgaon",
    about: {
      title: "About Dr. Krishan Chugh",
      items: [
        {
          content: "Dr. Krishan Chugh is one of Asia’s finest pediatricians, with over 42 years of experience in the field."
        },
        {
          content: "He was among the first Indian pediatricians to actively work in pediatric pulmonology and allergy, with extensive experience in pediatric and neonatal bronchoscopy."
        },
        {
          content: "Dr. Chugh has served as a Pediatric Advanced Life Support (PALS) instructor and director for numerous PALS courses."
        },
        {
          content: "He is a Pediatric Intensivist trained in the USA, having treated critically ill children, including post-transplant patients."
        },
        {
          content: "Dr. Chugh is the founder chairman of the Chapter of Pediatric Intensive Care of the Indian Academy of Pediatrics and has been training pediatricians in India since 1994."
        }
      ]
    },
    specialties: [
      "Pediatrics",
      "Pediatric Pulmonology",
      "Pediatric Intensive Care"
    ],
    skilledAt: [
      "Viral Fever Treatment",
      "Treatment of Fractures and Other Injuries in Children",
      "Newborn Care",
      "Health Checkup (Pediatric)",
      "Development Assessment",
      "Tonsillitis Treatment",
      "Infectious Disease Treatment",
      "Congenital Disorders Evaluation/Treatment",
      "Growth & Development Evaluation/Management",
      "Adolescent Medicine",
      "Newborn Jaundice",
      "Chickenpox Treatment",
      "Measles Treatment",
      "Bronchial Asthma Treatment"
    ],
    specialInterests: [
      "Pediatric Pulmonology",
      "Pediatric Intensive Care",
      "Pediatric and Neonatal Bronchoscopy"
    ],
    education: [
      "MBBS from University of Delhi (1977)",
      "MD in Pediatrics from University of Delhi (1982)",
      "MNAMS (Membership of the National Academy)"
    ],
    experience: [
      "Director of Pediatrics at Fortis Memorial Research Institute, Gurgaon",
      "Director of Institute of Child Health and Chairman, Department of Pediatrics at Sir Ganga Ram Hospital, New Delhi"
    ],
    awards: [
      "Chancellor, College of Pediatric Critical Care",
      "Dean, Indian College of Pediatrics",
      "Numerous national and international publications and presentations"
    ],
    reviews: [
      {
        name: "Gaurav Mehrotra",
        date: "2019-01-01",
        rating: 5,
        content: "We had gone to Dr. Chugh on recommendation from another doctor. He was very friendly, explained the health issue thoroughly, and provided satisfactory treatment."
      },
      {
        name: "Rati",
        date: "2019-01-01",
        rating: 5,
        content: "Dr. Chugh treated me 33 years back, and now my newborn son is under his care. Can't think of anyone better than him."
      },
      {
        name: "Amanpreet Singh",
        date: "2018-01-01",
        rating: 5,
        content: "Consulted the doctor for my nephew. He was nice and patient, listened to our concerns, and checked my nephew thoroughly."
      }
    ]
  },
  {
    tags:["Gastroenterology","Pediatrics",  "Delhi", ],
    id: "dr-manjit-singh-paul",
    name: "Dr. Manjit Singh Paul",
    yearsOfExperience: 31,
    designation: "Director",
    image: "/doctors/dr-manjit-singh-paul.webp",
    workingAt: "Max Multi Speciality Hospital, Panchsheel Park ",
    hospitalId: "max-multi-speciality-hospital-panchsheel-park",
    about: {
      title: "About Dr. Manjit Singh Paul",
      items: [
        {
          content:
            "Dr. Manjit Singh Paul is a gastroenterologist with over 31+ years of experience.",
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
    specialties: ["Gastroenterology", "Hepatology & Endoscopy"],
    skilledAt: [
      "Pioneer in Setting up 3 Gastroenterology Centers in Army hospital",
      "Paediatric Endoscopic Procedures",
      "Endoscopic Retrograde Cholangiopancreatography",
      "Liver Related Pathologies",
      "Diarrhea Or Loose Motion Treatment",
    ],
    specialInterests: [
      "Pioneer in Setting up 3 Gastroenterology Centers in Army hospital",
      "Paediatric Endoscopic Procedures",
      "Endoscopic Retrograde Cholangiopancreatography",
      "Liver Related Pathologies",
      "Diarrhea Or Loose Motion Treatment",
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
    awards: [
      "Offered complimentary services at MGS Charitable Hospital (2006 – 2009)",
      "Pioneer in Setting up 3 Gastroenterology Centers in Army hospital"
    ],
    reviews: [],
  },
  {
    tags: ["Cardiology", "Cardiothoracic Surgery", "Noida"],
    id: "dr-ritwick-raj-bhuyan",
    name: "Dr. Ritwick Raj Bhuyan",
    yearsOfExperience: 23,
    designation: "Consultant Cardiothoracic and Vascular Surgeon",
    image: "/doctors/dr-ritwick-raj-bhuyan.webp",
    workingAt: "Max Hospital, Saket; Indraprastha Apollo Hospital",
    hospitalId: "max-hospital-saket; indraprastha-apollo-hospital",
    about: {
      title: "About Dr. Ritwick Raj Bhuyan",
      items: [
        {
          content: "Dr. Ritwick Raj Bhuyan is a distinguished Cardiothoracic and Vascular Surgeon with over 23 years of experience in the field."
        },
        {
          content: "He earned his MBBS from Gauhati Medical College in 1995, followed by an MS in General Surgery from Assam Medical College, Dibrugarh, in 1998, and an MCh in Cardio Thoracic and Vascular Surgery from Sree Chitra Tirunal Institute for Medical Science and Technology in 2001."
        },
        {
          content: "Dr. Bhuyan has undergone specialized training in cardiac surgery at prestigious institutions, including the Royal Adelaide Hospital (Australia), Calvary Wakefield Hospital (Australia), and University Hospital of South Manchester (UK)."
        },
        {
          content: "He has held significant positions at Max Hospital, Saket, and Indraprastha Apollo Hospital, specializing in Cardiothoracic and Vascular Surgery."
        },
        {
          content: "He is a member of esteemed organizations such as the Society of Thoracic Surgeons and the International Society for Heart and Lung Transplantation (ISHLT)."
        }
      ]
    },
    specialties: ["Cardiology", "Cardiothoracic Surgery"],
    skilledAt: [
      "Cardiac Ablation",
      "Cardioversion",
      "Carotid Angioplasty and Stenting",
      "Coronary Angiogram",
      "Coronary Angioplasty / Bypass Surgery",
      "Mitral/Heart Valve Replacement",
      "CT Angiogram",
      "Acute Aortic Dissection",
      "ASD/VSD Device Closure",
      "Peripheral Angioplasty",
      "Pacemaker Implantation",
      "Balloon Mitral Valvuloplasty",
      "Radial Approach Angiography"
    ],
    specialInterests: [
      "Minimally Invasive Cardiac Surgery",
      "Heart Transplant",
      "Valve Replacement",
      "Coronary Artery Diseases"
    ],
    education: [
      "MBBS from Gauhati Medical College (1995)",
      "MS in General Surgery from Assam Medical College, Dibrugarh (1998)",
      "MCh in Cardio Thoracic and Vascular Surgery from Sree Chitra Tirunal Institute for Medical Science and Technology (2001)"
    ],
    experience: [
      "Consultant in Cardiothoracic and Vascular Surgery at Max Hospital, Saket",
      "Consultant in Cardiothoracic and Vascular Surgery at Indraprastha Apollo Hospital",
      "Senior Fellow in Adult Cardiac Surgery at Royal Adelaide Hospital, Australia",
      "Senior Fellow in Endoscopic Heart Surgery at Calvary Wakefield Hospital, Australia",
      "Transplant Fellowship at University Hospital of South Manchester, UK"
    ],
    awards: [
      "Senior Fellowship in Adult Cardiac Surgery and Minimally Invasive Cardiac Surgery at Royal Adelaide Hospital",
      "Transplant Fellowship at University Hospital of South Manchester"
    ],
    reviews: []
  },
  {
    tags: ["Cardiology", "Interventional Cardiology", "Delhi"],
    id: "dr-ashok-seth",
    name: "Dr. Ashok Seth",
    yearsOfExperience: 40,
    designation: "Chairman of Fortis Escorts Heart Institute",
    image: "/doctors/dr-ashok-seth.webp",
    workingAt: "Fortis Escorts Heart Institute, New Delhi",
    hospitalId: "fortis-escorts-heart-institute-new-delhi",
    about: {
      title: "About Dr. Ashok Seth",
      items: [
        {
          content: "Dr. Ashok Seth is a renowned Interventional Cardiologist with over 40 years of experience."
        },
        {
          content: "He completed his MBBS from Jawaharlal Nehru Medical College, Aligarh Muslim University, in 1978."
        },
        {
          content: "Dr. Seth has pioneered numerous angioplasty techniques in India and the Asia Pacific region, including Directional Atherectomy, Angioscopy, and the use of Drug-Eluting Stents."
        },
        {
          content: "He has performed over 50,000 angiograms and 20,000 angioplasties, a record noted in the 'Limca Book of Records'."
        },
        {
          content: "Dr. Seth has been honored with prestigious awards such as the Padma Shri in 2003 and the Padma Bhushan in 2015."
        }
      ]
    },
    specialties: [
      "Interventional Cardiology"
    ],
    skilledAt: [
      "Cardiac Ablation",
      "Cardiac Catheterisation",
      "Cardioversion",
      "Carotid Angioplasty and Stenting",
      "Coronary Angioplasty / Bypass Surgery",
      "Mitral/Heart Valve Replacement",
      "CT Angiogram",
      "Implantable Cardioverter-Defibrillators (ICDs)",
      "Pacemaker Implantation",
      "Acute Aortic Dissection",
      "Cardiac Rehabilitation",
      "ASD/VSD Device Closure",
      "Hypertension Treatment",
      "Patent Foramen Ovale Closure"
    ],
    specialInterests: [
      "Transcatheter Aortic Valve Implantation (TAVI)",
      "Bioresorbable Scaffold (BRS) Stents",
      "Impella Heart Support Device",
      "Percutaneous Myocardial Laser Revascularization"
    ],
    education: [
      "MBBS from Jawaharlal Nehru Medical College, Aligarh Muslim University (1978)",
      "MRCP from Royal College of Physicians of London (1984)",
      "MRCP from Royal College of Physicians of Ireland (1986)"
    ],
    experience: [
      "Chairman of Fortis Escorts Heart Institute, New Delhi",
      "Head of Cardiology Council, Fortis Group of Hospitals",
      "Former Consultant Cardiologist at Queen Elizabeth Hospital, Birmingham University"
    ],
    awards: [
      "Padma Shri (2003)",
      "Padma Bhushan (2015)",
      "Doctorate of Science (Honoris Causa) from Banaras Hindu University"
    ],
    reviews: []
  },
  {
    tags: ["Cardiology", "Electrophysiology", "Delhi"],
    id: "dr-anil-saxena",
    name: "Dr. Anil Saxena",
    yearsOfExperience: 42,
    designation: "Chairman of Electrophysiology & Cardiac Pacing",
    image: "/doctors/dr-anil-saxena.webp",
    workingAt: "Fortis Escorts Heart Institute, New Delhi",
    hospitalId: "fortis-escorts-heart-institute-new-delhi",
    about: {
      title: "About Dr. Anil Saxena",
      items: [
        {
          content: "Dr. Anil Saxena is an internationally acknowledged expert in cardiac arrhythmias and electrophysiology, with over 42 years of experience."
        },
        {
          content: "He completed his MBBS in 1982 and MD in Medicine in 1985 from GSVM Medical College, Kanpur University, followed by a DNB in Cardiology in 1993 from the National Board of Examination, New Delhi."
        },
        {
          content: "Dr. Saxena received specialized training in cardiac electrophysiology at St. Luke's Hospital, Wisconsin, USA."
        },
        {
          content: "Since joining Fortis Escorts Heart Institute in 1989, he has been instrumental in establishing the Department of Cardiac Electrophysiology."
        },
        {
          content: "He is a pioneer in the implantation of Implantable Cardioverter-Defibrillators (ICDs) and biventricular pacemakers in India, with one of the largest experiences in this field."
        }
      ]
    },
    specialties: [
      "Cardiology",
      "Electrophysiology"
    ],
    skilledAt: [
      "Electrophysiologic Study",
      "Catheter RF Ablation of complex arrhythmias",
      "3D Mapping of Cardiac Arrhythmias with CARTO and Ensite",
      "Implantation of Permanent Pacemakers",
      "Implantation of ICD",
      "Implantation of Biventricular pacemakers (CRT)",
      "Implantation of CRT-D (Combo Device)",
      "Lead Extraction",
      "Coronary Angiography"
    ],
    specialInterests: [
      "Cardiac Electrophysiology",
      "Management of Cardiac Arrhythmias",
      "Device Implantation for Heart Failure"
    ],
    education: [
      "MBBS from GSVM Medical College, Kanpur University (1982)",
      "MD in Medicine from GSVM Medical College, Kanpur University (1985)",
      "DNB in Cardiology from National Board of Examination, New Delhi (1993)"
    ],
    experience: [
      "Chairman of Electrophysiology & Cardiac Pacing at Fortis Escorts Heart Institute, New Delhi",
      "Active involvement in setting up the Department of Cardiac Electrophysiology at Fortis Escorts Heart Institute since 1989"
    ],
    awards: [
      "Dr. O P Goel Memorial Oration Award by Indian Medical Association, Meerut Branch (2004)",
      "Shri G L Raturi Oration Award by Indian Medical Association, Dehradun Branch (2002)",
      "Dr. B L Kapoor Memorial Oration Award by Delhi Medical Association, New Delhi (2001)",
      "Prof. H S Mittal Memorial Oration Award by Indian Medical Association, Meerut Branch (2000)",
      "Nagarik Samman Award by Bareilly Jaycees for contributions and achievements in medicine (2005)"
    ],
    reviews: []
  },
  {
    tags: ["Cardiology", "Electrophysiology", "Delhi"],
    id: "dr-aparna-jaswal",
    name: "Dr. Aparna Jaswal",
    yearsOfExperience: 29,
    designation: "Director of Cardiology",
    image: "/doctors/dr-aparna-jaswal.webp",
    workingAt: "Fortis Escorts Heart Institute, New Delhi",
    hospitalId: "fortis-escorts-heart-institute-new-delhi",
    about: {
      title: "About Dr. Aparna Jaswal",
      items: [
        {
          content: "Dr. Aparna Jaswal is an acknowledged expert in cardiac pacing and electrophysiology, with over 29 years of experience."
        },
        {
          content: "She completed her MBBS from Sri Siddhartha Medical College in 1994, MD in Medicine from Army Hospital, Delhi, in 1998, and DNB in Cardiology from the National Board of Examinations, New Delhi, in 2003."
        },
        {
          content: "Dr. Jaswal received specialized training in cardiac electrophysiology at St. Luke's Hospital, Milwaukee, USA."
        },
        {
          content: "She has been associated with Fortis Escorts Heart Institute since 1998, actively contributing to the Department of Cardiac Electrophysiology."
        },
        {
          content: "Dr. Jaswal is a Certified Cardiac Device Specialist by the IBHRE, HRS, and has initiated the EP program in Mauritius in November 2010."
        }
      ]
    },
    specialties: [
      "Cardiology",
      "Electrophysiology"
    ],
    skilledAt: [
      "Electrophysiological Studies",
      "Radiofrequency Catheter Ablation",
      "Implantation of Pacemakers",
      "Implantable Cardioverter-Defibrillators (ICD)",
      "Biventricular Pacing",
      "Management of Cardiac Arrhythmias"
    ],
    specialInterests: [
      "Cardiac Electrophysiology",
      "Device Implantation for Heart Failure",
      "Complex Arrhythmia Management"
    ],
    education: [
      "MBBS from Sri Siddhartha Medical College (1994)",
      "MD in Medicine from Army Hospital, Delhi (1998)",
      "DNB in Cardiology from National Board of Examinations, New Delhi (2003)"
    ],
    experience: [
      "Director of Cardiology at Fortis Escorts Heart Institute, New Delhi",
      "Initiated the Electrophysiology program in Mauritius (2010)"
    ],
    awards: [
      "Fellowship of the Heart Rhythm Society, USA (2011)",
      "Certified Cardiac Device Specialist by IBHRE, HRS"
    ],
    reviews: []
  },
  {
    tags: ["Pediatric Cardiology", "Delhi"],
    id: "dr-neeraj-awasthy",
    name: "Dr. Neeraj Awasthy",
    yearsOfExperience: 25,
    designation: "Director of Pediatric Cardiology",
    image: "/doctors/dr-neeraj-awasthy.webp",
    workingAt: "Fortis Escorts Heart Institute, New Delhi",
    hospitalId: "fortis-escorts-heart-institute-new-delhi",
    about: {
      title: "About Dr. Neeraj Awasthy",
      items: [
        {
          content: "Dr. Neeraj Awasthy is a distinguished Pediatric Cardiologist with over 25 years of experience."
        },
        {
          content: "He completed his MBBS from the University of Delhi in 1999, followed by an MD in Pediatrics from the same university in 2004."
        },
        {
          content: "In 2009, he earned a Fellowship in Pediatric Cardiology from the National Board of Examinations."
        },
        {
          content: "Dr. Awasthy specializes in pediatric cardiac interventions, including treatments for PDA, ASD, VSD, RSOV, and preterm PDA, as well as balloon valvuloplasty, stenting, and pulmonary artery hypertension."
        },
        {
          content: "He is proficient in pediatric cardiac imaging, including echocardiography and fetal cardiology, and has expertise in neonatal interventions, cardiac surgery, and postoperative care."
        }
      ]
    },
    specialties: [
      "Pediatric Cardiology"
    ],
    skilledAt: [
      "Pediatric Cardiac Interventions",
      "Balloon Valvuloplasty",
      "Stenting",
      "Pulmonary Artery Hypertension Management",
      "Echocardiography",
      "Fetal Cardiology",
      "Neonatal Interventions",
      "Cardiac Surgery",
      "Postoperative Care"
    ],
    specialInterests: [
      "Pediatric Cardiac Imaging",
      "Management of Congenital Heart Defects",
      "Interventional Pediatric Cardiology"
    ],
    education: [
      "MBBS from University of Delhi (1999)",
      "MD in Pediatrics from University of Delhi (2004)",
      "Fellowship in Pediatric Cardiology from National Board of Examinations (2009)"
    ],
    experience: [
      "Director of Pediatric Cardiology at Fortis Escorts Heart Institute, New Delhi",
      "Former Consultant at Max Super Speciality Hospital, Saket",
      "Senior Resident in Pediatrics at LNJP Hospital and Maulana Azad Medical College"
    ],
    awards: [
      "Member of the Cardiology Society of India",
      "ACLS (American Heart Association) Healthcare Provider since 2010",
      "BLS (American Heart Association) Healthcare Provider"
    ],
    reviews: []
  },
  {
    tags: ["Pediatric Cardiology", "Delhi"],
    id: "dr-ashutosh-marwah",
    name: "Dr. Ashutosh Marwah",
    yearsOfExperience: 23,
    designation: "Director of Pediatric Cardiology",
    image: "/doctors/dr-ashutosh-marwah.webp",
    workingAt: "Fortis Escorts Heart Institute, New Delhi",
    hospitalId: "fortis-escorts-heart-institute-new-delhi",
    about: {
      title: "About Dr. Ashutosh Marwah",
      items: [
        {
          content: "Dr. Ashutosh Marwah is a distinguished Pediatric Cardiologist with over 23 years of experience."
        },
        {
          content: "He completed his MBBS in 1990 and MD in Pediatrics in 1994 from Maulana Azad Medical College, University of Delhi."
        },
        {
          content: "Dr. Marwah pursued advanced fellowships in Pediatric Cardiology at Escorts Heart Institute, Delhi, and the Royal Children's Hospital, Melbourne, Australia."
        },
        {
          content: "He specializes in treating congenital cardiac diseases in children and has performed over 10,000 procedures."
        },
        {
          content: "Dr. Marwah is a life member of the Pediatric Cardiac Society of India and the Lions Club of Dar es Salaam, Tanzania."
        }
      ]
    },
    specialties: [
      "Pediatric Cardiology"
    ],
    skilledAt: [
      "Cardiac interventions in newborns",
      "Interventional closure of cardiac defects (ASD, VSD, PDA)",
      "Balloon dilatation and stenting for Coarctation of Aorta",
      "Stent implantation in pulmonary arteries",
      "Perioperative cardiac interventions for complex cardiac lesions",
      "Echo imaging in complex cardiac abnormalities",
      "Fetal echocardiography"
    ],
    specialInterests: [
      "Management of congenital heart diseases",
      "Pediatric cardiac imaging",
      "Interventional pediatric cardiology"
    ],
    education: [
      "MBBS from Maulana Azad Medical College, University of Delhi (1990)",
      "MD in Pediatrics from Maulana Azad Medical College, University of Delhi (1994)",
      "Fellowship in Pediatric Cardiology from Escorts Heart Institute, Delhi (1999-2001)",
      "Fellowship in Pediatric Cardiology from Royal Children's Hospital, Melbourne (2001-2003)"
    ],
    experience: [
      "Director of Pediatric Cardiology at Fortis Escorts Heart Institute, New Delhi",
      "Senior Consultant in the Department of Pediatric Cardiology at Apollo Indraprastha Hospital",
      "Fellow and Attending Cardiologist in the Department of Pediatric Cardiology at Escorts Heart Institute, New Delhi",
      "Junior Consultant in the Department of Pediatric Cardiology at Delhi Heart and Lung Institute, New Delhi"
    ],
    awards: [
      "Life Member of the Pediatric Cardiac Society of India",
      "Member of the Lions Club of Dar es Salaam, Tanzania"
    ],
    reviews: []
  },
  {
    tags: ["Orthopaedics", "Joint Replacement", "Delhi"],
    id: "dr-mannu-bhatia",
    name: "Dr. Mannu Bhatia",
    yearsOfExperience: 21,
    designation: "Senior Consultant in Orthopaedics & Joint Replacement",
    image: "/doctors/dr-mannu-bhatia.webp",
    workingAt: "Max Super Speciality Hospital, Shalimar Bagh, Delhi",
    hospitalId: "max-super-speciality-hospital-shalimar-bagh-delhi",
    about: {
      title: "About Dr. Mannu Bhatia",
      items: [
        {
          content: "Dr. Mannu Bhatia is a highly skilled Orthopaedic and Joint Replacement Surgeon with over 21 years of experience."
        },
        {
          content: "He completed his MBBS from Lala Lajpat Rai University in 2002 and obtained his DNB in Orthopedics/Orthopedic Surgery from the National Board of Examinations, Ministry of Health, Government of India, in 2011."
        },
        {
          content: "Dr. Bhatia has performed over 3,000 joint surgeries and managed more than 10,000 trauma cases."
        },
        {
          content: "He has served as a Senior Resident at esteemed institutions such as Gangaram Hospital, Dr. B.S. Ambedkar Hospital, and RTRM Hospital in Delhi."
        },
        {
          content: "Currently, he is the Orthopaedic Consultant at Max Super Speciality Hospital, Shalimar Bagh, Delhi."
        }
      ]
    },
    specialties: [
      "Orthopaedics",
      "Joint Replacement"
    ],
    skilledAt: [
      "Trauma Surgery",
      "Arthroscopy",
      "Primary and Revision Joint Replacement",
      "Hip Surgery",
      "Knee Surgery",
      "Shoulder Surgery"
    ],
    specialInterests: [
      "Management of Complex Orthopaedic Conditions",
      "Joint Replacement Surgeries",
      "Arthroscopic Procedures"
    ],
    education: [
      "MBBS from Lala Lajpat Rai University (2002)",
      "DNB in Orthopedics/Orthopedic Surgery from National Board of Examinations, Ministry of Health, Government of India (2011)"
    ],
    experience: [
      "Senior Resident at Gangaram Hospital, Delhi (2012)",
      "Senior Resident at Dr. B.S. Ambedkar Hospital, Delhi (2012-2014)",
      "Senior Resident at RTRM Hospital, Govt. of NCT of Delhi (2009-2012)",
      "Orthopaedic Consultant at Max Super Speciality Hospital, Shalimar Bagh, Delhi"
    ],
    awards: [],
    reviews: []
  },
  {
    tags: ["Orthopaedics", "Joint Replacement", "Delhi"],
    id: "dr-anil-arora",
    name: "Dr. (Prof.) Anil Arora",
    yearsOfExperience: 37,
    designation: "Vice Chairman & Head of Department - Orthopaedics & Joint Replacement Surgery",
    image: "/doctors/dr-anil-arora.webp",
    workingAt: "Max Super Speciality Hospital, Patparganj, Delhi",
    hospitalId: "max-super-speciality-hospital-patparganj-delhi",
    about: {
      title: "About Dr. (Prof.) Anil Arora",
      items: [
        {
          content: "Dr. (Prof.) Anil Arora is a globally esteemed surgeon specializing in Robotic Knee and Hip Replacements, with over 37 years of experience."
        },
        {
          content: "He holds the Guinness World Record for the largest gathering of joint replacement patients and is a Limca Book of Records holder."
        },
        {
          content: "Dr. Arora has contributed over 20 chapters to national textbooks and published more than 40 research papers in both national and international journals."
        },
        {
          content: "He has performed over 10,000 joint replacement surgeries, including advanced primary, complex, and revision knee and hip joint replacement operations."
        },
        {
          content: "Dr. Arora has served as Secretary of the Delhi Orthopaedic Association (2007-2009) and Editor of the Delhi Journal of Orthopaedics (2004-2009)."
        }
      ]
    },
    specialties: [
      "Orthopaedics",
      "Joint Replacement"
    ],
    skilledAt: [
      "Robotic Knee Replacement",
      "Robotic Hip Replacement",
      "Pinless Computer Navigated Knee Replacement",
      "Primary and Revision Joint Replacement Surgeries",
      "Complex and Revision Knee and Hip Joint Replacement",
      "Minimally Invasive Joint Replacement Surgery"
    ],
    specialInterests: [
      "Advanced Minimally Invasive Joint Replacement Techniques",
      "Computer-Assisted Orthopaedic Surgeries",
      "Robotic-Assisted Joint Replacement"
    ],
    education: [
      "MBBS",
      "MS in Orthopaedics",
      "DNB in Orthopedics/Orthopedic Surgery"
    ],
    experience: [
      "Vice Chairman & Head of Department - Orthopaedics & Joint Replacement Surgery at Max Super Speciality Hospital, Patparganj, Delhi",
      "Chief Surgeon and Senior Director at Prof. Arora's Knee & Hip Surgery Clinics",
      "Professor at University College of Medical Sciences, New Delhi",
      "Assistant Professor at Dr. S. N. Medical College, Jodhpur"
    ],
    awards: [
      "Guinness World Record for the largest gathering of joint replacement patients",
      "Limca Book of Records holder",
      "Joshi Memorial Oration Award by Delhi Medical Association, New Delhi (2019)",
      "President Appreciation Award by Indian Medical Association-EDB, New Delhi (2018)",
      "Legend in Orthopaedics by Times of India Healthcare Achievers Award (2018)"
    ],
    reviews: []
  },
  {
    tags: ["Neurosurgery", "Spine Surgery", "Delhi"],
    id: "dr-sanjeev-dua",
    name: "Dr. Sanjeev Dua",
    yearsOfExperience: 46,
    designation: "Principal Director of Neurosurgery",
    image: "/doctors/dr-sanjeev-dua.webp",
    workingAt: "Max Super Speciality Hospital, Patparganj, Delhi",
    hospitalId: "max-super-speciality-hospital-patparganj-delhi",
    about: {
      title: "About Dr. Sanjeev Dua",
      items: [
        {
          content: "Dr. Sanjeev Dua is a renowned neurosurgeon with over 46 years of experience, specializing in neurosurgery and spine surgery."
        },
        {
          content: "He completed his MBBS and MS in General Surgery from King George's Medical College (KGMC), Lucknow, where he was awarded a Gold Medal for ranking first in MS."
        },
        {
          content: "Dr. Dua further pursued an MCh in Neurosurgery from the same institution to expand his specialization."
        },
        {
          content: "He underwent a fellowship at the International Neurosurgical Institute in Hanover, Germany."
        },
        {
          content: "Dr. Dua is actively involved in academic workshops and conferences, sharing his knowledge and staying updated with advancements in the medical field."
        }
      ]
    },
    specialties: [
      "Neurosurgery",
      "Spine Surgery"
    ],
    skilledAt: [
      "Minimal Access Spine Surgery",
      "Endoscopic Neurosurgery",
      "Comprehensive Management of Spine Disorders",
      "Skull Base Surgery",
      "Deep Brain Stimulation"
    ],
    specialInterests: [
      "Minimally Invasive Neurosurgical Techniques",
      "Management of Complex Spine Conditions",
      "Neurotrauma"
    ],
    education: [
      "MBBS from King George's Medical College, Lucknow",
      "MS in General Surgery from King George's Medical College, Lucknow",
      "MCh in Neurosurgery from King George's Medical College, Lucknow"
    ],
    experience: [
      "Principal Director of Neurosurgery at Max Super Speciality Hospital, Patparganj, Delhi",
      "Director of Neurosurgery at Max Super Healthcare, Patparganj and Vaishali"
    ],
    awards: [
      "Gold Medal for ranking first in MS at King George's Medical College, Lucknow"
    ],
    reviews: []
  },
  {
    tags: ["Oncology", "Medical Oncology", "Delhi"],
    id: "dr-meenu-walia",
    name: "Dr. Meenu Walia",
    yearsOfExperience: 31,
    designation: "Senior Director of Medical Oncology",
    image: "/doctors/dr-meenu-walia.webp",
    workingAt: "Max Super Speciality Hospital, Patparganj, Delhi",
    hospitalId: "max-super-speciality-hospital-patparganj-delhi",
    about: {
      title: "About Dr. Meenu Walia",
      items: [
        {
          content: "Dr. Meenu Walia is a distinguished Medical Oncologist with over 31 years of experience in the field."
        },
        {
          content: "She completed her MBBS from G B Pant Hospital / Maulana Azad Medical College, New Delhi, in 1993, followed by an MD in General Medicine from PGIMER & Dr. Ram Manohar Lohia Hospital, New Delhi, in 1997."
        },
        {
          content: "Dr. Walia further specialized by obtaining a DNB in Medical Oncology from the National Board of Examination in 2005."
        },
        {
          content: "She is recognized as the first DNB Medical Oncologist in India and has been instrumental in advancing oncology practices in the country."
        },
        {
          content: "Dr. Walia is affiliated with several professional organizations, including the American Society of Clinical Oncologists (ASCO) and the European Society for Medical Oncology (ESMO)."
        }
      ]
    },
    specialties: [
      "Medical Oncology"
    ],
    skilledAt: [
      "Breast Cancer Management",
      "Hematological Cancer Treatment",
      "Solid Tumor Management",
      "Chemotherapy",
      "Targeted Therapy",
      "Hormone Therapy for Prostate Cancer",
      "Cancer Screening (Preventive)",
      "PICC Line Insertion"
    ],
    specialInterests: [
      "Breast Cancer",
      "Gynecologic Oncology",
      "Gastrointestinal Cancers",
      "Leukemia and Lymphoma",
      "Stem Cell Transplantation"
    ],
    education: [
      "MBBS from G B Pant Hospital / Maulana Azad Medical College, New Delhi (1993)",
      "MD in General Medicine from PGIMER & Dr. Ram Manohar Lohia Hospital, New Delhi (1997)",
      "DNB in Medical Oncology from National Board of Examination (2005)"
    ],
    experience: [
      "Senior Director of Medical Oncology at Max Super Speciality Hospital, Patparganj, Delhi",
      "Former Director of Medical Oncology at Dharamshila Hospital and Research Centre",
      "Senior Residency in Internal Medicine at Dr. Ram Manohar Lohia Hospital, New Delhi"
    ],
    awards: [
      "Excellence in Medical Services by Indian Medical Association (2014)",
      "Winner of 'Daksha – the expert' quiz at ICC (2013)"
    ],
    reviews: []
  },
  {
    tags: ["Surgical Oncology", "Laparoscopic Surgery", "Delhi"],
    id: "dr-nitin-leekha",
    name: "Dr. Nitin Leekha",
    yearsOfExperience: 18,
    designation: "Associate Director and Unit Head, Department of Surgical Oncology",
    image: "/doctors/dr-nitin-leekha.webp",
    workingAt: "Jaypee Hospital, Noida",
    hospitalId: "jaypee-hospital-noida",
    about: {
      title: "About Dr. Nitin Leekha",
      items: [
        {
          content: "Dr. Nitin Leekha is a Senior Oncosurgeon with over 18 years of experience, trained at leading cancer centers in India and abroad."
        },
        {
          content: "He completed his MBBS from the University of Delhi in 2002, followed by an MS in General Surgery from G B Pant Hospital / Maulana Azad Medical College, New Delhi, in 2008."
        },
        {
          content: "Dr. Leekha further specialized with an MCh in Surgical Oncology from the Regional Cancer Centre, Trivandrum, in 2014."
        },
        {
          content: "He has undergone advanced training in uniportal thoracic oncosurgery from The First Affiliated Hospital of Guangzhou Medical University, China, and Prince of Wales Hospital, Hong Kong."
        },
        {
          content: "Prior to joining Jaypee Hospital, Dr. Leekha held senior positions at Max Hospital and Pushpanjali Hospital."
        }
      ]
    },
    specialties: [
      "Surgical Oncology",
      "Laparoscopic Surgery"
    ],
    skilledAt: [
      "Head and Neck Tumor/Cancer Surgery",
      "Lung Cancer Treatment",
      "Breast Cancer Treatment",
      "Mastectomy",
      "Parotid Surgery",
      "Thyroidectomy",
      "Endoscopic Surgery",
      "Gall Bladder (Biliary) Stone Treatment"
    ],
    specialInterests: [
      "Minimally Invasive Oncologic Surgeries",
      "Robotic Surgery",
      "Hyperthermic Intraperitoneal Chemotherapy (HIPEC)"
    ],
    education: [
      "MBBS from University of Delhi (2002)",
      "MS in General Surgery from G B Pant Hospital / Maulana Azad Medical College, New Delhi (2008)",
      "MCh in Surgical Oncology from Regional Cancer Centre, Trivandrum (2014)"
    ],
    experience: [
      "Associate Director and Unit Head, Department of Surgical Oncology at Jaypee Hospital, Noida",
      "Senior Oncosurgeon at Max Hospital",
      "Senior Oncosurgeon at Pushpanjali Hospital"
    ],
    awards: [],
    reviews: []
  },
  {
    tags: ["Orthopaedic Oncology", "Musculoskeletal Oncology", "Delhi"],
    id: "dr-vivek-verma",
    name: "Dr. Vivek Verma",
    yearsOfExperience: 15,
    designation: "Consultant Orthopaedic Oncosurgeon",
    image: "/doctors/dr-vivek-verma.webp",
    workingAt: "Max Super Speciality Hospital, Patparganj, Delhi",
    hospitalId: "max-super-speciality-hospital-patparganj-delhi",
    about: {
      title: "About Dr. Vivek Verma",
      items: [
        {
          content: "Dr. Vivek Verma is a distinguished Orthopaedic Oncosurgeon with over 15 years of experience, specializing in limb-salvage surgeries for bone and soft tissue tumors."
        },
        {
          content: "He earned his MBBS from B.J. Medical College, Pune, followed by a DNB in Orthopedic Surgery from the Madras Institute of Orthopaedics and Traumatology (MIOT), Chennai."
        },
        {
          content: "Dr. Verma completed a Fellowship in Orthopedic Oncology at Tata Memorial Cancer Centre, Mumbai, and further honed his skills in trauma and joint replacement at BG Klinik, Tuebingen, Germany."
        },
        {
          content: "He established the Musculoskeletal Oncology division at Max Hospitals in Patparganj and Vaishali, Delhi/NCR, and serves as a visiting consultant at Max Super Speciality Hospital, Dehradun."
        },
        {
          content: "Dr. Verma is an active member of the Indian Musculoskeletal Oncology Society (IMSOS), the Medical Council of India (MCI), and the Delhi Medical Council (DMC)."
        }
      ]
    },
    specialties: [
      "Orthopaedic Oncology",
      "Musculoskeletal Oncology"
    ],
    skilledAt: [
      "Limb-Salvage Surgery",
      "Complex Bone and Joint Reconstructions",
      "Management of Metastatic Bone Disease",
      "Treatment of Soft Tissue Sarcomas",
      "Revision Surgeries for Failed Implants"
    ],
    specialInterests: [
      "Bone Tumors",
      "Soft Tissue Tumors",
      "Cutaneous Malignancies",
      "Complex Reconstructions",
      "Metastatic Bone Disease"
    ],
    education: [
      "MBBS from B.J. Medical College, Pune",
      "DNB in Orthopedic Surgery from MIOT, Chennai",
      "Fellowship in Orthopedic Oncology from Tata Memorial Cancer Centre, Mumbai"
    ],
    experience: [
      "Consultant Orthopaedic Oncosurgeon at Max Super Speciality Hospital, Patparganj, Delhi",
      "Consultant Orthopaedic Surgeon at MIOT Hospitals, Chennai"
    ],
    awards: [],
    reviews: []
  },
  {
    tags: ["Hematology", "Hemato-Oncology", "Bone Marrow Transplant", "Delhi"],
    id: "dr-nivedita-dhingra",
    name: "Dr. Nivedita Dhingra",
    yearsOfExperience: 12,
    designation: "Associate Director - Medical Oncology (Haematology, Hemato–Oncology, BMT)",
    image: "/doctors/dr-nivedita-dhingra.webp",
    workingAt: "Max Super Speciality Hospital, Patparganj, Delhi",
    hospitalId: "max-super-speciality-hospital-patparganj-delhi",
    about: {
      title: "About Dr. Nivedita Dhingra",
      items: [
        {
          content: "Dr. Nivedita Dhingra is a seasoned medical professional with over 12 years of experience in Hematology, Hemato-Oncology, and Bone Marrow Transplantation."
        },
        {
          content: "She serves as the Associate Director of Medical Oncology at Max Super Speciality Hospital in Patparganj, Delhi."
        },
        {
          content: "Dr. Dhingra specializes in the treatment of various blood disorders and cancers, including leukemia, lymphoma, and multiple myeloma."
        },
        {
          content: "She is proficient in performing bone marrow transplants and managing complex hematological conditions."
        },
        {
          content: "Dr. Dhingra is committed to providing comprehensive care to her patients, utilizing the latest advancements in medical oncology."
        }
      ]
    },
    specialties: [
      "Hematology",
      "Hemato-Oncology",
      "Bone Marrow Transplant"
    ],
    skilledAt: [
      "Bone Marrow Transplantation",
      "Management of Leukemia and Lymphoma",
      "Treatment of Multiple Myeloma",
      "Handling Complex Hematological Disorders",
      "Administering Chemotherapy and Targeted Therapy"
    ],
    specialInterests: [
      "Advancements in Hemato-Oncology",
      "Innovations in Bone Marrow Transplant Techniques",
      "Patient-Centric Cancer Care"
    ],
    education: [
      "MBBS from Maulana Azad Medical College, Delhi",
      "MD in Internal Medicine from University College of Medical Sciences, Delhi",
      "DM in Clinical Hematology from All India Institute of Medical Sciences (AIIMS), Delhi"
    ],
    experience: [
      "Associate Director - Medical Oncology (Haematology, Hemato–Oncology, BMT) at Max Super Speciality Hospital, Patparganj, Delhi",
      "Senior Consultant in Hematology and Bone Marrow Transplantation at leading healthcare institutions"
    ],
    awards: [],
    reviews: []
  },
  {
    tags: ["Cardiothoracic Surgery", "Vascular Surgery", "Noida"],
    id: "dr-vaibhav-mishra",
    name: "Dr. Vaibhav Mishra",
    yearsOfExperience: 16,
    designation: "Director & Head of Cardiothoracic and Vascular Surgery",
    image: "/doctors/dr-vaibhav-mishra.webp",
    workingAt: "Max Super Speciality Hospital, Patparganj, Delhi",
    hospitalId: "max-super-speciality-hospital-patparganj-delhi",
    about: {
      title: "About Dr. Vaibhav Mishra",
      items: [
        {
          content: "Dr. Vaibhav Mishra is a distinguished Cardiothoracic and Vascular Surgeon with over 16 years of experience, specializing in advanced cardiac surgeries, including minimally invasive techniques."
        },
        {
          content: "He completed his MBBS from NSCB Medical College, Jabalpur, followed by an MS in General Surgery from G.R. Medical College, Gwalior."
        },
        {
          content: "Dr. Mishra further specialized with an MCh in Cardiothoracic and Vascular Surgery from Grant Medical College & Sir J.J. Hospital, Mumbai."
        },
        {
          content: "He has undergone advanced fellowships in Adult Cardiothoracic Surgery from Wellington Regional Hospital, New Zealand, and The Royal Melbourne Hospital, Australia."
        },
        {
          content: "Prior to his current role, Dr. Mishra served as Director & Head of Cardiothoracic and Vascular Surgery at Fortis Hospital, Noida."
        }
      ]
    },
    specialties: [
      "Cardiothoracic Surgery",
      "Vascular Surgery"
    ],
    skilledAt: [
      "Total Arterial Beating Heart Bypass",
      "Minimally Invasive Cardiac Surgery",
      "Aortic Root Surgery",
      "Valve Repair & Replacements",
      "Video-Assisted Thoracic Surgery"
    ],
    specialInterests: [
      "Advanced Cardiac Surgeries",
      "Minimally Invasive Techniques",
      "Aortic Root Replacements"
    ],
    education: [
      "MBBS from NSCB Medical College, Jabalpur",
      "MS in General Surgery from G.R. Medical College, Gwalior",
      "MCh in Cardiothoracic and Vascular Surgery from Grant Medical College & Sir J.J. Hospital, Mumbai"
    ],
    experience: [
      "Director & Head of Cardiothoracic and Vascular Surgery at Max Super Speciality Hospital, Patparganj, Delhi",
      "Director & Head of Cardiothoracic and Vascular Surgery at Fortis Hospital, Noida",
      "Advanced Fellow in Adult Cardiothoracic Surgery at The Royal Melbourne Hospital & Melbourne Private Hospital, Australia",
      "Senior Fellow in Adult Cardiothoracic Surgery at Wellington Regional Hospital, New Zealand"
    ],
    awards: [],
    reviews: []
  },
  {
    tags: ["Oncology", "Radiation Oncology", "Delhi"],
    id: "dr-manoj-tayal",
    name: "Dr. Manoj Tayal",
    yearsOfExperience: 24,
    designation: "Associate Director of Radiation Oncology",
    image: "/doctors/dr-manoj-tayal.webp",
    workingAt: "Max Super Speciality Hospital, Patparganj, Delhi",
    hospitalId: "max-super-speciality-hospital-patparganj-delhi",
    about: {
      title: "About Dr. Manoj Tayal",
      items: [
        {
          content: "Dr. Manoj Tayal is a seasoned Radiation Oncologist with over 24 years of experience, specializing in advanced radiotherapy techniques."
        },
        {
          content: "He completed his MBBS in 2000 and MD in Radiotherapy in 2004 from Manipal Academy of Higher Education, Manipal, India."
        },
        {
          content: "Dr. Tayal has held significant positions, including Associate Director at Medanta Hospital, Gurgaon, and Specialist at Royal Hospital, Muscat."
        },
        {
          content: "He is a member of the Association of Radiation Oncologists in India (AROI) and the European Society of Radiation Oncologists (ESTRO)."
        },
        {
          content: "Dr. Tayal has been recognized with the 'Best Paper' award on the Role of Radiotherapy in Rectal Cancers at the annual conference of AROI in 2012."
        }
      ]
    },
    specialties: [
      "Radiation Oncology"
    ],
    skilledAt: [
      "Total Skin Electron Therapy (T-SET)",
      "Total Body Irradiation (TBI)",
      "Stereotactic Body Radiation Therapy (SBRT)",
      "Stereotactic Radiosurgery (SRS)",
      "Intensity-Modulated Radiation Therapy (IMRT)",
      "Image-Guided Radiation Therapy (IGRT)",
      "Volumetric Modulated Arc Therapy (VMAT)",
      "Brachytherapy"
    ],
    specialInterests: [
      "Advanced Radiotherapy Techniques",
      "Stereotactic Treatments",
      "Brachytherapy Procedures"
    ],
    education: [
      "MBBS from Manipal Academy of Higher Education, Manipal, India (2000)",
      "MD in Radiotherapy from Manipal Academy of Higher Education, Manipal, India (2004)"
    ],
    experience: [
      "Associate Director of Radiation Oncology at Medanta Hospital, Gurgaon",
      "Specialist in Radiation Oncology at Royal Hospital, Muscat",
      "Classified Specialist at Artemis Hospital, Gurgaon",
      "Senior Resident at Rajiv Gandhi Cancer Institute"
    ],
    awards: [
      "Best Paper award on Role of Radiotherapy in Rectal Cancers at AROI Annual Conference (2012)"
    ],
    reviews: []
  },
  {
    tags: ["Hematology", "Hemato-Oncology", "Bone Marrow Transplant", "Noida"],
    id: "dr-esha-kaul",
    name: "Dr. Esha Kaul",
    yearsOfExperience: 17,
    designation: "Director - Medical Oncology (Haematology, Hemato–Oncology, BMT)",
    image: "/doctors/dr-esha-kaul.webp",
    workingAt: "Max Super Speciality Hospital, Vaishali, Ghaziabad",
    hospitalId: "max-super-speciality-hospital-vaishali-ghaziabad",
    about: {
      title: "About Dr. Esha Kaul",
      items: [
        {
          content: "Dr. Esha Kaul is an American Board Certified doctor in Internal Medicine and Hematology, with a flourishing career of 17 years."
        },
        {
          content: "She completed her MBBS from the prestigious All India Institute of Medical Sciences (AIIMS), New Delhi, in 2006."
        },
        {
          content: "Dr. Kaul pursued her residency in Internal Medicine and fellowship in Hematology-Oncology at Tufts University, Boston, USA."
        },
        {
          content: "She has been instrumental in establishing the Bone Marrow Transplant Unit at Jaypee Hospital, Noida, with over 100 successful transplants to her credit."
        },
        {
          content: "Dr. Kaul has published extensively in international and national journals and serves as a reviewer for several reputed international journals."
        }
      ]
    },
    specialties: [
      "Hematology",
      "Hemato-Oncology",
      "Bone Marrow Transplant"
    ],
    skilledAt: [
      "Stem Cell Transplantation",
      "Bone Marrow Transplant",
      "Chemotherapy",
      "Bone Marrow Aspiration and Biopsy"
    ],
    specialInterests: [
      "Stem cell transplant with special interest in haploidentical and matched unrelated stem cell transplants",
      "Plasma Cell Disorders including Multiple Myeloma and Amyloidosis",
      "Lymphomas",
      "Myeloproliferative Neoplasms",
      "Myelodysplastic Disorders",
      "Aplastic Anemia",
      "Consultative Hematology"
    ],
    education: [
      "MBBS from All India Institute of Medical Sciences, New Delhi (2006)",
      "Residency in Internal Medicine from Tufts University, Boston, USA (2011)",
      "Fellowship in Hematology-Oncology from Tufts University, Boston, USA (2014)"
    ],
    experience: [
      "Director - Medical Oncology (Haematology, Hemato–Oncology, BMT) at Max Super Speciality Hospital, Vaishali, Ghaziabad",
      "Executive Consultant - Department of Hematology-Oncology/Bone Marrow Transplant at Jaypee Hospital, Noida",
      "Associate Consultant - Department of Hematology-Oncology/Bone Marrow Transplant at BLK Super Speciality Hospital, New Delhi",
      "Fellow at Tufts Medical Center, Boston",
      "Resident at Tufts Medical Center, Boston"
    ],
    awards: [
      "Travel Grant by the International Society of Amyloidosis (2014)",
      "Abstract Achievement Award at the ASH meeting (December 2013)",
      "Institute Book Prize in Pediatrics for being the Best Undergraduate at AIIMS, New Delhi (2005)",
      "Rank 1 in the All India Armed Forces Medical College Entrance Examination (2001)"
    ],
    reviews: []
  },
  {
    tags: ["Neurosurgery", "Spine Surgery", "Delhi"],
    id: "dr-hrishikesh-chakrabartty",
    name: "Dr. Hrishikesh Chakrabartty",
    yearsOfExperience: 21,
    designation: "Senior Consultant in Neurosciences, Neurosurgery, and Spine Surgery",
    image: "/doctors/dr-hrishikesh-chakrabartty.webp",
    workingAt: "Max Super Speciality Hospital, Vaishali, Ghaziabad",
    hospitalId: "max-super-speciality-hospital-vaishali-ghaziabad",
    about: {
      title: "About Dr. Hrishikesh Chakrabartty",
      items: [
        {
          content: "Dr. Hrishikesh Chakrabartty is a seasoned neurosurgeon with over 21 years of experience, specializing in neurosurgery and spine surgery."
        },
        {
          content: "He completed his MBBS from Assam Medical College, Dibrugarh, in 2002, followed by an MS in General Surgery from the same institution in 2007."
        },
        {
          content: "Dr. Chakrabartty further pursued an MCh in Neuro Surgery from SMS Hospital, Jaipur, in 2013."
        },
        {
          content: "He has held significant positions, including Associate Consultant at Max Super Speciality Hospital, Patparganj, and Senior Resident at Dr. RML Hospital, New Delhi."
        },
        {
          content: "Dr. Chakrabartty is a member of esteemed organizations such as the Neurological Surgeons Society of India (NSSI) and the Neurological Society of India (NSI)."
        }
      ]
    },
    specialties: [
      "Neurosurgery",
      "Spine Surgery"
    ],
    skilledAt: [
      "Neurotrauma Management",
      "Brain Tumor Surgery",
      "Minimally Invasive Spine Surgery",
      "Pituitary Tumor Surgery",
      "Deep Brain Stimulation"
    ],
    specialInterests: [
      "Functional Neurosurgery",
      "Brachial Plexus Surgery",
      "Neuro-Oncology"
    ],
    education: [
      "MBBS from Assam Medical College, Dibrugarh (2002)",
      "MS in General Surgery from Assam Medical College, Dibrugarh (2007)",
      "MCh in Neuro Surgery from SMS Hospital, Jaipur (2013)"
    ],
    experience: [
      "Senior Consultant in Neurosciences, Neurosurgery, and Spine Surgery at Max Super Speciality Hospital, Vaishali, Ghaziabad",
      "Associate Consultant at Max Super Speciality Hospital, Patparganj",
      "Senior Resident at Dr. RML Hospital, New Delhi",
      "Senior Resident at Sushruta Trauma Centre, Delhi"
    ],
    awards: [],
    reviews: []
  },
  {
    tags: ["Liver Transplant", "Hepato-Pancreato-Biliary Surgery", "Robotic Surgery", "Delhi"],
    id: "dr-abhideep-chaudhary",
    name: "Dr. Abhideep Chaudhary",
    yearsOfExperience: 19,
    designation: "Vice Chairman & Head of Department, Liver Transplant and Biliary Sciences",
    image: "/doctors/dr-abhideep-chaudhary.webp",
    workingAt: "BLK-Max Super Speciality Hospital, Delhi",
    hospitalId: "blk-max-super-speciality-hospital-delhi",
    about: {
      title: "About Dr. Abhideep Chaudhary",
      items: [
        {
          content: "Dr. Abhideep Chaudhary is a distinguished surgeon specializing in Liver Transplant and Hepato-Pancreato-Biliary (HPB) Surgery, with over 19 years of experience."
        },
        {
          content: "He has been instrumental in performing more than 1,500 successful liver transplant and HPB surgeries."
        },
        {
          content: "Dr. Chaudhary completed his MBBS from Goa Medical College & Hospital and MS in General Surgery from Lady Hardinge Medical College, New Delhi."
        },
        {
          content: "He further honed his expertise with fellowships in multi-organ transplant surgery at the University of Pittsburgh Medical Center, USA."
        },
        {
          content: "His areas of interest include liver transplantation, liver cancer, pancreas and biliary diseases, and minimally invasive (laparoscopic and robotic) surgeries."
        }
      ]
    },
    specialties: [
      "Liver Transplant",
      "Hepato-Pancreato-Biliary Surgery",
      "Robotic Surgery"
    ],
    skilledAt: [
      "Liver Transplantation",
      "Liver Cancer Treatment",
      "Pancreatic Surgery",
      "Biliary Disease Management",
      "Minimally Invasive Surgery",
      "Robotic Surgery"
    ],
    specialInterests: [
      "Liver Transplantation",
      "Liver Cancer",
      "Pancreas and Biliary Diseases",
      "Minimally Invasive Surgery (Laparoscopic and Robotic Surgery)"
    ],
    education: [
      "MBBS from Goa Medical College & Hospital",
      "MS in General Surgery from Lady Hardinge Medical College, New Delhi"
    ],
    experience: [
      "Vice Chairman & HOD, Liver Transplant and Biliary Sciences, Robotic Surgery at BLK-Max Super Speciality Hospital, Delhi",
      "Chief Clinical Fellow/Senior Administrative Fellow (Transplant Surgery) at the University of Pittsburgh Medical Center, USA",
      "Consultant Surgeon at Sir Ganga Ram Hospital, New Delhi",
      "Consultant Surgeon at Indraprastha Apollo Hospitals, New Delhi",
      "Consultant Surgeon at Jaypee Hospital, Noida"
    ],
    awards: [
      "News X Health Excellence Award in Surgical Gastro and Liver Transplant (2018)",
      "Times Healthcare Achiever's Award - Rising Star in Liver Transplant (2018)",
      "Delhi Medical Association 'Vishisht Chikitsa Award' for outstanding contribution in Liver Transplantation (2015)",
      "National Status Award for Health Excellence (2014)",
      "Rashtriya Chikitsa Puruskar and Gold Medal for exemplary services in healthcare (2013)"
    ],
    reviews: []
  },
  {
    tags: ["Urology", "Renal Transplantation", "Delhi"],
    id: "dr-waheed-zaman",
    name: "Dr. Waheed Zaman",
    yearsOfExperience: 30,
    designation: "Director of Urology and Renal Transplantation",
    image: "/doctors/dr-waheed-zaman.webp",
    workingAt: "Max Super Speciality Hospital, Shalimar Bagh, Delhi",
    hospitalId: "max-super-speciality-hospital-shalimar-bagh-delhi",
    about: {
      title: "About Dr. Waheed Zaman",
      items: [
        {
          content: "Dr. Waheed Zaman is a highly skilled surgeon and innovator in urologic procedures, with 30 years of experience, including 22 years as a specialist."
        },
        {
          content: "He completed his MBBS, MS in General Surgery, DNB in Urology/Genito-Urinary Surgery, and MCh in Urology."
        },
        {
          content: "Dr. Zaman specializes in urological surgeries such as nephrectomies, pyeloplasty, urethroplasty, ureterolithotomy, ureteric reimplantation, bladder repair, open prostatectomy, penectomy, orchidopexy, CAPD, and AV fistula creation."
        },
        {
          content: "He is proficient in handling both elective and emergency urological cases and has expertise in live and cadaveric renal transplantation."
        },
        {
          content: "Dr. Zaman practices at Medi Health Clinic in Rohini and Max Super Speciality Hospital in Shalimar Bagh, Delhi."
        }
      ]
    },
    specialties: [
      "Urology",
      "Renal Transplantation"
    ],
    skilledAt: [
      "Simple and Radical Nephrectomies",
      "Pyeloplasty",
      "Urethroplasty",
      "Ureterolithotomy",
      "Ureteric Reimplantation",
      "Bladder Repair",
      "Open Prostatectomy",
      "Penectomy",
      "Orchidopexy",
      "Continuous Ambulatory Peritoneal Dialysis (CAPD)",
      "Arteriovenous (AV) Fistula Creation"
    ],
    specialInterests: [
      "Urological Surgeries",
      "Renal Transplantation",
      "Innovative Urologic Procedures"
    ],
    education: [
      "MBBS",
      "MS in General Surgery",
      "DNB in Urology/Genito-Urinary Surgery",
      "MCh in Urology"
    ],
    experience: [
      "Director of Urology and Renal Transplantation at Max Super Speciality Hospital, Shalimar Bagh, Delhi",
      "Consultant Urologist at Medi Health Clinic, Rohini, Delhi"
    ],
    awards: [],
    reviews: []
  },
  {
    tags: ["Nephrology", "Renal Transplant Medicine", "Delhi"],
    id: "dr-dinesh-khullar",
    name: "Dr. Dinesh Khullar",
    yearsOfExperience: 30,
    designation: "Chairman, Department of Nephrology and Renal Transplant Medicine",
    image: "/doctors/dr-dinesh-khullar.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket-new-delhi",
    about: {
      title: "About Dr. Dinesh Khullar",
      items: [
        {
          content: "Dr. Dinesh Khullar is an internationally renowned nephrologist with over 30 years of experience, specializing in nephrology and renal transplant medicine."
        },
        {
          content: "He completed his MBBS from PGIMER, Chandigarh, followed by an MD in Medicine from Dayanand Medical College, Ludhiana, and a DM in Nephrology from PGIMER, Chandigarh."
        },
        {
          content: "Dr. Khullar has been instrumental in treating patients with various kidney diseases, including those on dialysis (Hemodialysis, Peritoneal Dialysis CAPD) and those requiring transplantation."
        },
        {
          content: "He has contributed extensively to the growth, development, and training in the field of nephrology in the Asia-Pacific region."
        },
        {
          content: "Dr. Khullar has been awarded fellowships such as Fellow-International Society of Nephrology and Fellow-International Transplant Observership at Massachusetts General Hospital, Boston, USA."
        }
      ]
    },
    specialties: [
      "Nephrology",
      "Renal Transplant Medicine"
    ],
    skilledAt: [
      "Nephrectomy (Kidney Removal)",
      "Peritoneal Dialysis",
      "Dialysis / Haemodialysis",
      "Acute Renal Failure",
      "Chronic Kidney Disease (CKD)",
      "Blood in Urine (Hematuria) Treatment",
      "Electrolyte Disorders",
      "Diabetes Renal Failure",
      "Nephrology ICU",
      "Transplant Nephrology",
      "Acute Kidney Disease (AKI) Treatment",
      "Kidney Disease Treatment",
      "Urinary Tract Infection (UTI)",
      "Renal Replacement Therapy",
      "Adult Nephrology"
    ],
    specialInterests: [
      "High-Risk Kidney Transplant Patients",
      "Newer Dialysis Modalities",
      "Induction Therapy in Kidney Transplant Patients",
      "Infections Related to Kidney Transplant Disease",
      "Diabetic Nephropathy"
    ],
    education: [
      "MBBS from PGIMER, Chandigarh",
      "MD in Medicine from Dayanand Medical College, Ludhiana",
      "DM in Nephrology from PGIMER, Chandigarh"
    ],
    experience: [
      "Chairman, Department of Nephrology and Renal Transplant Medicine at Max Super Speciality Hospital, Saket, New Delhi",
      "Consultant Nephrologist at Sir Ganga Ram Hospital, New Delhi",
      "Lecturer in Nephrology at Dayanand Medical College and Hospital, Ludhiana"
    ],
    awards: [
      "D.K. Pal Chaudhary Memorial Oration at Annual Meeting of Indian Medical Association",
      "Lifetime Achievement Award by Human Care Charitable Trust"
    ],
    reviews: []
  },
  {
    tags: ["Radiation Oncology", "Head & Neck Oncology", "Musculoskeletal Oncology", "Neuro Oncology", "Delhi"],
    id: "dr-dodul-mondal",
    name: "Dr. Dodul Mondal",
    yearsOfExperience: 14,
    designation: "Director - Radiation Oncology",
    image: "/doctors/dr-dodul-mondal.webp",
    workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
    hospitalId: "max-super-speciality-hospital-saket-new-delhi",
    about: {
      title: "About Dr. Dodul Mondal",
      items: [
        {
          content: "Dr. Dodul Mondal is a distinguished Radiation Oncologist with over 14 years of experience, specializing in Head & Neck Oncology, Musculoskeletal Oncology, and Neuro Oncology."
        },
        {
          content: "He serves as the Director of Radiation Oncology at Max Super Speciality Hospital, Saket, New Delhi."
        },
        {
          content: "Dr. Mondal is proficient in advanced radiation techniques and has a keen interest in treating complex oncological cases."
        },
        {
          content: "He is actively involved in research and has contributed to numerous publications in reputed medical journals."
        },
        {
          content: "Dr. Mondal is committed to providing personalized care to his patients, ensuring the best possible outcomes."
        }
      ]
    },
    specialties: [
      "Radiation Oncology",
      "Head & Neck Oncology",
      "Musculoskeletal Oncology",
      "Neuro Oncology"
    ],
    skilledAt: [
      "Advanced Radiation Techniques",
      "Head & Neck Cancer Treatment",
      "Musculoskeletal Cancer Treatment",
      "Neuro-Oncology Procedures"
    ],
    specialInterests: [
      "Complex Oncological Cases",
      "Research in Radiation Oncology",
      "Patient-Centered Care"
    ],
    education: [
      "MBBS",
      "MD in Radiation Oncology"
    ],
    experience: [
      "Director - Radiation Oncology at Max Super Speciality Hospital, Saket, New Delhi",
      "Senior Consultant - Radiation Oncology at leading hospitals in India"
    ],
    awards: [
      "Recognized for contributions to Radiation Oncology",
      "Published extensively in reputed medical journals"
    ],
    reviews: []
  },
  {
    tags: ["Cardiology", "Interventional Cardiology", "Electrophysiology", "Delhi"],
    id: "dr-t-s-kler",
    name: "Dr. T. S. Kler",
    yearsOfExperience: 35,
    designation: "Chairman & HOD - BLK-Max Heart & Vascular Institute",
    image: "/doctors/dr-t-s-kler.webp",
    workingAt: "BLK-Max Super Speciality Hospital, Delhi",
    hospitalId: "blk-max-super-speciality-hospital-delhi",
    about: {
      title: "About Dr. T. S. Kler",
      items: [
        {
          content: "Dr. T. S. Kler is a renowned interventional cardiologist with over 35 years of experience, specializing in cardiac electrophysiology and pacemaker implantation."
        },
        {
          content: "He has performed more than 25,000 coronary, renal, carotid, and peripheral angioplasties."
        },
        {
          content: "Dr. Kler was the first doctor in India to implant an Implantable Cardioverter Defibrillator (ICD), CRT-P, and CRT-D."
        },
        {
          content: "He established the first dedicated Electrophysiology department in India at Fortis Escorts Heart Institute."
        },
        {
          content: "Dr. Kler has been instrumental in implementing RF Ablation and cardiac device implantation programs in Southeast Asia."
        }
      ]
    },
    specialties: [
      "Cardiology",
      "Interventional Cardiology",
      "Electrophysiology"
    ],
    skilledAt: [
      "Coronary Angioplasty",
      "Renal Angioplasty",
      "Carotid Angioplasty",
      "Peripheral Angioplasty",
      "Pacemaker Implantation",
      "Radiofrequency Ablation",
      "Implantable Cardioverter Defibrillator (ICD) Implantation",
      "Cardiac Resynchronization Therapy (CRT)"
    ],
    specialInterests: [
      "Cardiac Electrophysiology",
      "Complex Arrhythmia Management",
      "Advanced Cardiac Device Implantation"
    ],
    education: [
      "MBBS from Medical College, Patiala",
      "MD in Medicine from Postgraduate Institute of Medical Education and Research (PGIMER), Chandigarh",
      "DM in Cardiology from PGIMER, Chandigarh",
      "MRCP from the UK",
      "Fellow of the Royal College of Physicians (FRCP), UK",
      "Fellow of the American College of Cardiology (FACC)"
    ],
    experience: [
      "Chairman & HOD - BLK-Max Heart & Vascular Institute, Delhi",
      "Executive Director - Cardiac Sciences at Fortis Escorts Heart Institute & Research Centre",
      "Executive Director - Cardiology at Fortis Flt Lt Rajan Dhall Hospital, Vasant Kunj"
    ],
    awards: [
      "Padma Bhushan by the Government of India for his contributions to medicine",
      "Dr. B. C. Roy National Award for excellence in the field of medicine"
    ],
    reviews: []
  },
  {
    tags: ["Gastroenterology", "Hepatology", "Liver Transplantation", "Delhi"],
    id: "dr-manav-wadhawan",
    name: "Dr. Manav Wadhawan",
    yearsOfExperience: 20,
    designation: "Principal Director - Gastroenterology & Hepatology",
    image: "/doctors/dr-manav-wadhawan.webp",
    workingAt: "BLK-Max Super Speciality Hospital, New Delhi",
    hospitalId: "blk-max-super-speciality-hospital-new-delhi",
    about: {
      title: "About Dr. Manav Wadhawan",
      items: [
        {
          content: "Dr. Manav Wadhawan is a distinguished gastroenterologist and hepatologist with over 20 years of experience, specializing in liver transplantation and the management of complex liver diseases."
        },
        {
          content: "He completed his MBBS from Maulana Azad Medical College, followed by an MD in Internal Medicine from the All India Institute of Medical Sciences (AIIMS), New Delhi, and a DM in Gastroenterology from GB Pant Hospital, New Delhi."
        },
        {
          content: "Dr. Wadhawan has been instrumental in pioneering HBIG-free regimens in HBV-related liver transplants and has numerous high-impact publications on post-transplant ERCPs."
        },
        {
          content: "He has held significant positions in esteemed institutions, including Fortis Escorts Hospital and Indraprastha Apollo Hospital, contributing extensively to the field of hepatology and liver transplantation."
        },
        {
          content: "Dr. Wadhawan has received several awards, notably the Young Investigator Award by the International Liver Transplant Society (ILTS) in 2013 and the Plenary Oral Presentation Award by the Indian Society of Gastroenterology in 2012."
        }
      ]
    },
    specialties: [
      "Gastroenterology",
      "Hepatology",
      "Liver Transplantation"
    ],
    skilledAt: [
      "Liver Transplantation",
      "Management of Complex Liver Diseases",
      "Endoscopic Retrograde Cholangiopancreatography (ERCP)",
      "Hepatitis B and C Management",
      "Advanced Therapeutic Endoscopy"
    ],
    specialInterests: [
      "HBIG-Free Regimens in HBV-Related Liver Transplants",
      "Post-Transplant Biliary Complications",
      "Innovative Techniques in Hepatology"
    ],
    education: [
      "MBBS from Maulana Azad Medical College, New Delhi",
      "MD in Internal Medicine from AIIMS, New Delhi",
      "DM in Gastroenterology from GB Pant Hospital, New Delhi"
    ],
    experience: [
      "Principal Director - Gastroenterology & Hepatology at BLK-Max Super Speciality Hospital, New Delhi",
      "Director & Head of Gastroenterology & Hepatology at Fortis Escorts Hospital, New Delhi",
      "Senior Consultant - Gastroenterology & Hepatology at Indraprastha Apollo Hospital, New Delhi",
      "Consultant - Department of Gastroenterology & Hepatology at Sir Ganga Ram Hospital, New Delhi"
    ],
    awards: [
      "Young Investigator Award by International Liver Transplant Society (ILTS) in 2013",
      "Plenary Oral Presentation Award by Indian Society of Gastroenterology in 2012",
      "Plenary Oral Presentation Award by Asia Pacific Society for Study of Liver (APASL) in 2011 & 2004",
      "Plenary Oral Presentation Award by International Association of Study of Liver (IASL) in 2004"
    ],
    reviews: []
  },
  {
    tags: ["Gynecology", "Obstetrics", "Laparoscopic Surgery", "Delhi"],
    id: "dr-dinesh-kansal",
    name: "Dr. Dinesh Kansal",
    yearsOfExperience: 40,
    designation: "Senior Director and Head - Obstetrics & Gynaecology and Laparoscopic Surgery Unit 1",
    image: "/doctors/dr-dinesh-kansal.webp",
    workingAt: "BLK-Max Super Speciality Hospital, New Delhi",
    hospitalId: "blk-max-super-speciality-hospital-new-delhi",
    about: {
      title: "About Dr. Dinesh Kansal",
      items: [
        {
          content: "Dr. Dinesh Kansal is a renowned gynecologist and obstetrician with over 40 years of experience, specializing in advanced laparoscopic and hysteroscopic surgeries."
        },
        {
          content: "She completed her MBBS in 1982 and MD in Obstetrics & Gynaecology in 1984 from the University of Bombay, followed by a DGO from the College of Physicians and Surgeons, Parel."
        },
        {
          content: "Dr. Kansal has performed over 11,000 minimally invasive gynecological surgeries and is adept at handling complex cases, including uterine septum repair, adenomyomectomy, and vaginoplasty."
        },
        {
          content: "She received advanced training in laparoscopic robotic surgery from Harvard Medical School, Boston, USA."
        },
        {
          content: "Dr. Kansal is a member of the Indian Medical Association (IMA) and the Delhi Medical Association (DMA)."
        }
      ]
    },
    specialties: [
      "Gynecology",
      "Obstetrics",
      "Laparoscopic Surgery",
      "Hysteroscopic Surgery"
    ],
    skilledAt: [
      "Advanced Laparoscopic Gynecological Surgeries",
      "Hysteroscopic Procedures",
      "High-Risk Pregnancy Care",
      "Infertility Treatment",
      "Management of Uterine Fibroids and Cysts",
      "Endometriosis Treatment",
      "Pelvic Pain Management",
      "Female Sexual Health"
    ],
    specialInterests: [
      "Minimally Invasive Gynecological Surgery",
      "Robotic-Assisted Gynecological Procedures",
      "Complex Gynecological Case Management"
    ],
    education: [
      "MBBS from University of Bombay, 1982",
      "MD in Obstetrics & Gynaecology from University of Bombay, 1984",
      "DGO from College of Physicians and Surgeons, Parel, 1984",
      "Advanced Training in Laparoscopic Robotic Surgery from Harvard Medical School, Boston, USA"
    ],
    experience: [
      "Senior Director and Head - Obstetrics & Gynaecology and Laparoscopic Surgery Unit 1 at BLK-Max Super Speciality Hospital, New Delhi",
      "Head of Department at Sri Balaji Action Medical Institute",
      "Minimally Invasive Surgeon at Batra Hospital & Medical Research Centre, Kalra Hospital, and Bhatia Global Hospital"
    ],
    awards: [
      "Recognized for excellence in gynecological surgery",
      "Multiple awards for contributions to minimally invasive surgical techniques"
    ],
    reviews: []
  },
  {
    tags: ["Hematology", "Oncology", "Bone Marrow Transplant", "Delhi"],
    id: "dr-dharma-choudhary",
    name: "Dr. Dharma Choudhary",
    yearsOfExperience: 28,
    designation: "Head of Bone Marrow Transplant and Hematology Department",
    image: "/doctors/dr-dharma-choudhary.webp",
    workingAt: "Sanar International Hospital, New Delhi",
    hospitalId: "sanar-international-hospital-new-delhi",
    about: {
      title: "About Dr. Dharma Choudhary",
      items: [
        {
          content: "Dr. Dharma Choudhary is a leading hematologist and bone marrow transplant physician in India, specializing in bone marrow and stem cell transplants."
        },
        {
          content: "He completed his MBBS in 1996 and MD in General Medicine in 2002 from the University of Rajasthan, followed by a DM in Clinical Haematology from the All India Institute of Medical Sciences (AIIMS), New Delhi, in 2006."
        },
        {
          content: "Dr. Choudhary has been instrumental in initiating allogenic bone marrow transplants for conditions like Thalassaemia Major and Aplastic Anemia during his tenure at Sir Ganga Ram Hospital."
        },
        {
          content: "He is recognized for his expertise in treating various hematological disorders and has contributed significantly to the field through both clinical practice and research."
        },
        {
          content: "Dr. Choudhary is a member of the Delhi Medical Council and the Indian Medical Association (IMA)."
        }
      ]
    },
    specialties: [
      "Hematology",
      "Oncology",
      "Bone Marrow Transplant",
      "Stem Cell Transplant"
    ],
    skilledAt: [
      "Bone Marrow Transplantation",
      "Stem Cell Transplantation",
      "Management of Hematological Disorders",
      "Treatment of Blood Cancers",
      "Handling Complex Hematology Cases"
    ],
    specialInterests: [
      "Advancements in Bone Marrow Transplant Techniques",
      "Research in Hematological Malignancies",
      "Patient-Centric Hematology Care"
    ],
    education: [
      "MBBS from University of Rajasthan, 1996",
      "MD in General Medicine from University of Rajasthan, 2002",
      "DM in Clinical Haematology from AIIMS, New Delhi, 2006"
    ],
    experience: [
      "Head of Bone Marrow Transplant and Hematology Department at Sanar International Hospital, New Delhi",
      "Senior Consultant at BLK-Max Super Speciality Hospital, New Delhi",
      "Consultant Hematologist at Sir Ganga Ram Hospital, New Delhi"
    ],
    awards: [
      "Recognized for contributions to hematology and bone marrow transplantation",
      "Appreciated for patient care and clinical excellence"
    ],
    reviews: []
  },
  {
    tags: ["Oncology", "Robotic Surgery", "Head & Neck Oncology", "Delhi"],
    id: "dr-surender-kumar-dabas",
    name: "Dr. Surender Kumar Dabas",
    yearsOfExperience: 21,
    designation: "Vice Chairman & Head of Department - Surgical Oncology",
    image: "/doctors/dr-surender-kumar-dabas.webp",
    workingAt: "Max Super Speciality Hospital, Shalimar Bagh, New Delhi",
    hospitalId: "max-super-speciality-hospital-shalimar-bagh-new-delhi",
    about: {
      title: "About Dr. Surender Kumar Dabas",
      items: [
        {
          content: "Dr. Surender Kumar Dabas is a distinguished surgical oncologist with over 21 years of experience, specializing in robotic surgery and head & neck oncology."
        },
        {
          content: "He serves as the Vice Chairman and Head of the Department of Surgical Oncology at Max Super Speciality Hospital, Shalimar Bagh, New Delhi."
        },
        {
          content: "Dr. Dabas is proficient in advanced robotic surgical techniques and has a keen interest in treating complex oncological cases."
        },
        {
          content: "He is actively involved in research and has contributed to numerous publications in reputed medical journals."
        },
        {
          content: "Dr. Dabas is committed to providing personalized care to his patients, ensuring the best possible outcomes."
        }
      ]
    },
    specialties: [
      "Surgical Oncology",
      "Robotic Surgery",
      "Head & Neck Oncology",
      "Thoracic Oncology"
    ],
    skilledAt: [
      "Robotic-Assisted Surgeries",
      "Head & Neck Cancer Treatment",
      "Thoracic Cancer Treatment",
      "Minimally Invasive Oncological Procedures"
    ],
    specialInterests: [
      "Advancements in Robotic Surgery",
      "Management of Complex Oncological Cases",
      "Patient-Centered Oncological Care"
    ],
    education: [
      "MBBS",
      "MS in General Surgery",
      "MCh in Surgical Oncology"
    ],
    experience: [
      "Vice Chairman & Head of Department - Surgical Oncology at Max Super Speciality Hospital, Shalimar Bagh, New Delhi",
      "Senior Consultant - Surgical Oncology at leading hospitals in India"
    ],
    awards: [
      "Recognized for contributions to Surgical Oncology",
      "Published extensively in reputed medical journals"
    ],
    reviews: []
  },
  {
  tags: ["Spine Surgery", "Robotic Surgery", "Orthopedic", "Delhi"],
  id: "dr-puneet-girdhar",
  name: "Dr. Puneet Girdhar",
  yearsOfExperience: 19,
  designation: "Principal Director & Head - Ortho-Spine Surgery",
  image: "/doctors/dr-puneet-girdhar.webp",
  workingAt: "BLK-Max Super Speciality Hospital, New Delhi",
  hospitalId: "blk-max-super-speciality-hospital-new-delhi",
  about: {
    title: "About Dr. Puneet Girdhar",
    items: [
      {
        content: "Dr. Puneet Girdhar is a distinguished orthopedic spine surgeon with over 19 years of experience, specializing in minimally invasive and robotic spine surgeries."
      },
      {
        content: "He serves as the Principal Director and Head of Ortho-Spine Surgery at BLK-Max Super Speciality Hospital in New Delhi."
      },
      {
        content: "Dr. Girdhar is proficient in advanced spinal surgical techniques and is dedicated to providing personalized care to his patients."
      },
      {
        content: "He is actively involved in research and has contributed to numerous publications in reputed medical journals."
      },
      {
        content: "Dr. Girdhar is committed to ensuring the best possible outcomes for his patients through innovative and patient-centered approaches."
      }
    ]
  },
  specialties: [
    "Spine Surgery",
    "Robotic Surgery",
    "Orthopedic Surgery"
  ],
  skilledAt: [
    "Minimally Invasive Spine Surgery",
    "Robotic-Assisted Spinal Procedures",
    "Management of Spinal Disorders",
    "Non-Surgical Pain Relief Techniques",
    "Nerve Root Blocks",
    "Facetal Injections",
    "Radio Frequency Ablation"
  ],
  specialInterests: [
    "Advancements in Robotic Spine Surgery",
    "Minimally Invasive Techniques",
    "Patient-Centered Orthopedic Care"
  ],
  education: [
    "MBBS",
    "MS in Orthopedic Surgery",
    "M.Ch in Orthopedics"
  ],
  experience: [
    "Principal Director & Head - Ortho-Spine Surgery at BLK-Max Super Speciality Hospital, New Delhi",
    "Spine Fellow with Mr. Sashin Ahuja at University Hospital of Wales, Cardiff, United Kingdom",
    "Clinical & Bioskills Training on MITLIF with Dr. Kevin Foley at Memphis, USA"
  ],
  awards: [
    "Recognized for contributions to Spine Surgery",
    "Published extensively in reputed medical journals"
  ],
  reviews: []
  },
  {
    tags: ["Urology", "Andrology", "Renal Transplant", "Robotic Surgery", "Delhi"],
    id: "dr-shafiq-ahmed",
    name: "Dr. Shafiq Ahmed",
    yearsOfExperience: 20,
    designation: "Director - Urology, Andrology & Renal Transplant",
    image: "/doctors/dr-shafiq-ahmed.webp",
    workingAt: "BLK-Max Super Speciality Hospital, New Delhi",
    hospitalId: "blk-max-super-speciality-hospital-new-delhi",
    about: {
      title: "About Dr. Shafiq Ahmed",
      items: [
        {
          content: "Dr. Shafiq Ahmed is a distinguished urologist, uro-oncologist, and robotic kidney transplant surgeon with over 20 years of experience. He has performed more than 15,000 urological procedures, specializing in robotic kidney transplants."
        },
        {
          content: "He completed his MBBS from Medical College Srinagar in 2003, MS in General Surgery from SKIMS-Srinagar in 2007, and DNB in Urology/Genito-Urinary Surgery from the National Board of Examination, India, in 2012."
        },
        {
          content: "Dr. Ahmed has been instrumental in establishing renal transplant programs, including robotic kidney transplants, in several top hospitals in Delhi-NCR."
        },
        {
          content: "He is a member of the Urological Society of India (USI) and has been recognized for his contributions to the field with the MNAMS award in 2013."
        },
        {
          content: "Dr. Ahmed is committed to providing personalized care to his patients, ensuring the best possible outcomes through innovative and patient-centered approaches."
        }
      ]
    },
    specialties: [
      "Urology",
      "Andrology",
      "Renal Transplant",
      "Robotic Surgery",
      "Uro-Oncology"
    ],
    skilledAt: [
      "Robotic-Assisted Surgeries",
      "Kidney Transplantation",
      "Prostate Laser Surgery",
      "Endoscopic LASER Operations for Prostate, Kidney & Bladder",
      "Holmium Laser Prostatectomy (HOLEP)",
      "Supine PCNL Surgery",
      "Management of Urological Disorders",
      "Minimally Invasive Urology"
    ],
    specialInterests: [
      "Advancements in Robotic Kidney Transplantation",
      "Uro-Oncology",
      "Minimally Invasive Urological Procedures"
    ],
    education: [
      "MBBS from Medical College Srinagar, 2003",
      "MS in General Surgery from SKIMS-Srinagar, 2007",
      "DNB in Urology/Genito-Urinary Surgery from National Board of Examination, India, 2012"
    ],
    experience: [
      "Director - Urology, Andrology & Renal Transplant at BLK-Max Super Speciality Hospital, New Delhi",
      "Director - Urology, Renal Transplantation & Robotic Surgery at Narayana Superspeciality Hospital, Gurgaon, and Dharamshila Cancer Hospital, Delhi",
      "Senior Consultant & Unit Head - Urology & Robotic Surgery at Manipal Hospital, Dwarka",
      "Senior Consultant - Urology & Robotic Surgery at Fortis Memorial Research Institute, Gurgaon",
      "Urologist & Renal Transplant Surgeon at Institute of Liver and Biliary Sciences, New Delhi"
    ],
    awards: [
      "MNAMS - 2013",
      "Recognized for contributions to Urology and Renal Transplantation"
    ],
    reviews: []
  },
  {
    tags: ["Urology", "Renal Transplant", "Robotic Surgery", "Pediatric Urology", "Gurgaon"],
    id: "dr-sanjay-gogoi",
    name: "Dr. Sanjay Gogoi",
    yearsOfExperience: 26,
    designation: "Head of Department - Urology and Renal Transplant",
    image: "/doctors/dr-sanjay-gogoi.webp",
    workingAt: "Manipal Hospitals, Dwarka, New Delhi",
    hospitalId: "manipal-hospitals-dwarka-new-delhi",
    about: {
      title: "About Dr. Sanjay Gogoi",
      items: [
        {
          content: "Dr. Sanjay Gogoi is a renowned urologist with over 26 years of experience, specializing in renal transplantation, robotic surgery, and pediatric urology."
        },
        {
          content: "He completed his MBBS and MS in General Surgery from Dibrugarh University, followed by an MCh in Urology from Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS), Lucknow."
        },
        {
          content: "Dr. Gogoi has extensive experience in minimally invasive transplant techniques, including laparoscopic and robot-assisted transplantation."
        },
        {
          content: "He has been associated with leading medical institutions, serving in roles such as Director of Urology & Renal Transplantation at Fortis Memorial Research Institute, Gurgaon, and Associate Director at Medanta - The Medicity, Gurgaon."
        },
        {
          content: "Dr. Gogoi is a member of esteemed organizations like the American Urological Association and the European Association of Urology."
        }
      ]
    },
    specialties: [
      "Urology",
      "Renal Transplant",
      "Robotic Surgery",
      "Pediatric Urology",
      "Uro-Oncology"
    ],
    skilledAt: [
      "Minimally Invasive Renal Transplantation",
      "Robotic-Assisted Urological Surgeries",
      "Pediatric Urological Procedures",
      "Reconstructive Urology",
      "Uro-Oncological Surgeries"
    ],
    specialInterests: [
      "Advancements in Robotic Urological Procedures",
      "Complex Reconstructive Urology",
      "Pediatric Renal Transplantation"
    ],
    education: [
      "MBBS from Dibrugarh University",
      "MS in General Surgery from Dibrugarh University",
      "MCh in Urology from SGPGIMS, Lucknow",
      "DNB in Genito-Urinary Surgery from National Board of Examinations, New Delhi"
    ],
    experience: [
      "Head of Department - Urology and Renal Transplant at Manipal Hospitals, Dwarka, New Delhi",
      "Director - Urology & Renal Transplantation at Fortis Memorial Research Institute, Gurgaon",
      "Associate Director - Urology & Renal Transplantation at Medanta - The Medicity, Gurgaon",
      "Consultant Urologist at Apollo Gleneagles Hospital, Kolkata",
      "Consultant and Head at Apollo Lanka, Colombo, Sri Lanka"
    ],
    awards: [
      "Recognized for contributions to minimally invasive urological surgeries",
      "Published research in reputed medical journals"
    ],
    reviews: []
  },
  {
    tags: ["Neurology", "Spine Surgery", "Functional Neurosurgery", "Delhi"],
    id: "dr-sudheer-kumar-tyagi",
    name: "Dr. Sudheer Kumar Tyagi",
    yearsOfExperience: 35,
    designation: "Senior Consultant Neurosurgeon",
    image: "/doctors/dr-sudheer-kumar-tyagi.webp",
    workingAt: "Indraprastha Apollo Hospitals, New Delhi",
    hospitalId: "indraprastha-apollo-hospitals-new-delhi",
    about: {
      title: "About Dr. Sudheer Kumar Tyagi",
      items: [
        {
          content: "Dr. Sudheer Kumar Tyagi is a distinguished neurosurgeon with over 35 years of experience, specializing in anterior cervical and lumbar microsurgical discectomy, craniovertebral junction surgeries, and functional stereotactic neurosurgery."
        },
        {
          content: "He completed his MBBS in 1989 and MS in General Surgery in 1992 from the University of Lucknow, followed by an MCh in Neuro Surgery from the All India Institute of Medical Sciences (AIIMS), New Delhi, in 1997."
        },
        {
          content: "Dr. Tyagi is known for performing Deep Brain Stimulation (DBS) and ablative surgeries, being the first in India to utilize Image Fusion techniques for target localization in deep brain functional stereotactic surgeries."
        },
        {
          content: "He has been associated with Indraprastha Apollo Hospitals in New Delhi, contributing significantly to the field of neurosurgery through both clinical practice and research."
        },
        {
          content: "Dr. Tyagi is a member of several esteemed organizations, including the Neurological Society of India and the Association of Spinal Surgeons of India."
        }
      ]
    },
    specialties: [
      "Neurosurgery",
      "Spine Surgery",
      "Functional Neurosurgery",
      "Pediatric Neurosurgery"
    ],
    skilledAt: [
      "Anterior Cervical and Lumbar Microsurgical Discectomy",
      "Craniovertebral Junction Surgeries",
      "Deep Brain Stimulation (DBS)",
      "Excision of Arteriovenous Malformations (AVM)",
      "Spinal Tumor Surgeries",
      "Stereotactic Radiosurgery (SRS)",
      "Minimally Invasive Spine Surgery",
      "Neuro Endoscopy"
    ],
    specialInterests: [
      "Functional Stereotactic Neurosurgery",
      "Image-Guided Surgeries",
      "Minimally Invasive Neurosurgical Techniques"
    ],
    education: [
      "MBBS from University of Lucknow, 1989",
      "MS in General Surgery from University of Lucknow, 1992",
      "MCh in Neuro Surgery from AIIMS, New Delhi, 1997"
    ],
    experience: [
      "Senior Consultant Neurosurgeon at Indraprastha Apollo Hospitals, New Delhi",
      "Neurosurgeon at All India Institute of Medical Sciences (AIIMS), New Delhi"
    ],
    awards: [
      "Vishisth Chikitsa Ratan Award by Delhi Medical Association, 2015",
      "Authored chapter on 'Functional Stereotactic Neurosurgery' in the Textbook of Operative Neurosurgery"
    ],
    reviews: []
  },
  {
    tags: ["Neurology", "Stroke Management", "Epilepsy", "Delhi"],
    id: "dr-vinit-suri",
    name: "Dr. Vinit Suri",
    yearsOfExperience: 39,
    designation: "Senior Consultant Neurologist",
    image: "/doctors/dr-vinit-suri.webp",
    workingAt: "Indraprastha Apollo Hospitals, New Delhi",
    hospitalId: "indraprastha-apollo-hospitals-new-delhi",
    about: {
      title: "About Dr. Vinit Suri",
      items: [
        {
          content: "Dr. Vinit Suri is a distinguished neurologist with over 39 years of experience, specializing in stroke management, epilepsy, and various neurological disorders."
        },
        {
          content: "He completed his MBBS in 1985 and DM in Neurology in 1992 from the University of Delhi, and MD in General Medicine from the University of Agra in 1989."
        },
        {
          content: "Dr. Suri has been serving as a Senior Consultant Neurologist at Indraprastha Apollo Hospital since 1995, after his tenure as a Consultant Neurologist at Moolchand Khairati Ram Hospital from 1993 to 1995."
        },
        {
          content: "He has authored the book 'Current Practice in Neurology' in 2005 and has numerous publications in national journals."
        },
        {
          content: "Dr. Suri is a member of several esteemed organizations, including the Indian Stroke Association, Neurology Society of India, and the American Society of Neurology."
        }
      ]
    },
    specialties: [
      "Neurology",
      "Stroke Management",
      "Epilepsy",
      "Parkinson's Disease",
      "Alzheimer's Disease"
    ],
    skilledAt: [
      "Neurological Problem Diagnosis and Treatment",
      "Sciatica Pain Management",
      "Laminectomy",
      "Vascular Surgery",
      "Foot Drop Treatment",
      "Spinal Tap",
      "Ventriculoperitoneal Shunt",
      "Brain Mapping",
      "Brain Aneurysm Surgery",
      "Cerebrospinal Fluid Shunt",
      "Digital Subtraction Angiography (DSA)"
    ],
    specialInterests: [
      "Stroke Management",
      "Epilepsy Treatment",
      "Movement Disorders"
    ],
    education: [
      "MBBS from University of Delhi, 1985",
      "MD in General Medicine from University of Agra, 1989",
      "DM in Neurology from University of Delhi, 1992"
    ],
    experience: [
      "Senior Consultant Neurologist at Indraprastha Apollo Hospital, New Delhi (1995–Present)",
      "Consultant Neurologist at Moolchand Khairati Ram Hospital, New Delhi (1993–1995)"
    ],
    awards: [
      "Gold Medal for standing first in final professional MBBS",
      "Multiple gold and silver medals for merit in various subjects during MBBS"
    ],
    reviews: []
  },
  {
    tags: ["Medical Oncology", "Haemato-Oncology", "Chemotherapy", "Immunotherapy", "Delhi"],
    id: "dr-p-k-das",
    name: "Dr. P. K. Das",
    yearsOfExperience: 33,
    designation: "Senior Consultant Medical Oncologist and Haemato-Oncologist",
    image: "/doctors/dr-p-k-das.webp",
    workingAt: "Indraprastha Apollo Hospitals, New Delhi",
    hospitalId: "indraprastha-apollo-hospitals-new-delhi",
    about: {
      title: "About Dr. P. K. Das",
      items: [
        {
          content: "Dr. P. K. Das is a distinguished medical oncologist and hematologist with over 33 years of experience, specializing in chemotherapy, targeted therapy, and immunotherapy for various malignancies."
        },
        {
          content: "He completed his MBBS from Sambalpur University in 1991, MD in General Medicine from Berhampur University in 1995, and DM in Medical Oncology from the All India Institute of Medical Sciences (AIIMS), New Delhi, in 2000."
        },
        {
          content: "Dr. Das has been associated with Indraprastha Apollo Hospitals in New Delhi for over 15 years, serving as the Senior Consultant Medical Oncologist, Haemato-Oncologist, and Academic Coordinator in the Department of Medical Oncology."
        },
        {
          content: "He has extensive experience in treating solid malignancies, leukemia, lymphomas, multiple myeloma, and rare cancers using advanced therapeutic modalities."
        },
        {
          content: "Dr. Das is a member of several esteemed organizations, including the Indian Society of Medical & Pediatric Oncology (ISMPO), the European Society of Medical Oncology (ESMO), and the American Society of Clinical Oncology (ASCO)."
        }
      ]
    },
    specialties: [
      "Medical Oncology",
      "Haemato-Oncology",
      "Chemotherapy",
      "Targeted Therapy",
      "Immunotherapy"
    ],
    skilledAt: [
      "Management of Solid Malignancies",
      "Treatment of Leukemia and Lymphomas",
      "Administration of Chemotherapy and Targeted Therapy",
      "Immunotherapy for Various Cancers",
      "Personalized Cancer Treatment Plans"
    ],
    specialInterests: [
      "Advancements in Immunotherapy",
      "Targeted Treatment Strategies",
      "Holistic Cancer Care"
    ],
    education: [
      "MBBS from Sambalpur University, 1991",
      "MD in General Medicine from Berhampur University, 1995",
      "DM in Medical Oncology from AIIMS, New Delhi, 2000"
    ],
    experience: [
      "Senior Consultant Medical Oncologist and Haemato-Oncologist at Indraprastha Apollo Hospitals, New Delhi",
      "Academic Coordinator, Department of Medical Oncology at Apollo Cancer Institute, New Delhi",
      "Over 15 years of service at Apollo Hospital, Delhi, leading Medical Oncology Unit I"
    ],
    awards: [
      "First Prize for Poster Presentation at the 11th International Congress on Anti-Cancer Treatment, Paris",
      "Authored multiple research papers in reputed medical journals"
    ],
    reviews: []
  },
  {
    tags: ["Orthopedic", "Joint Replacement", "Arthroscopy", "Delhi"],
    id: "dr-raju-vaishya",
    name: "Dr. (Prof) Raju Vaishya",
    yearsOfExperience:42,
    designation: "Senior Consultant Orthopedic Surgeon",
    image: "/doctors/dr-raju-vaishya.webp",
    workingAt: "Indraprastha Apollo Hospitals, New Delhi",
    hospitalId: "indraprastha-apollo-hospitals-new-delhi",
    about: {
      title: "About Dr. (Prof) Raju Vaishya",
      items: [
        {
          content: "Dr. (Prof) Raju Vaishya is a renowned orthopedic surgeon with over 42 years of experience, specializing in total joint replacement and arthroscopic surgery."
        },
        {
          content: "He completed his MBBS in 1982 and MS in Orthopaedics in 1986 from G R Medical College, Gwalior, followed by advanced training in the UK."
        },
        {
          content: "Dr. Vaishya is a pioneer in Patient Specific Instrumentation (PSI) for knee replacements in India and has introduced arthroscopic shoulder surgery in the country."
        },
        {
          content: "He has authored over 100 research papers and two books, and serves on the editorial board of several medical journals."
        },
        {
          content: "Dr. Vaishya is a member of numerous medical organizations, including the Royal College of Surgeons of England and the Indian Orthopaedic Association."
        }
      ]
    },
    specialties: [
      "Orthopedic Surgery",
      "Joint Replacement",
      "Arthroscopy",
      "Sports Medicine",
      "Osteoarthritis",
      "Osteoporosis"
    ],
    skilledAt: [
      "Total Knee Replacement",
      "Total Hip Replacement",
      "Arthroscopic Shoulder Surgery",
      "Cartilage Regeneration",
      "Management of Sports Injuries",
      "Treatment of Arthritis and Osteoporosis"
    ],
    specialInterests: [
      "Patient Specific Instrumentation (PSI) in Knee Replacements",
      "Arthroscopic Surgery",
      "Regenerative Therapies in Orthopedics"
    ],
    education: [
      "MBBS from G R Medical College, Gwalior, 1982",
      "MS in Orthopaedics from G R Medical College, Gwalior, 1986",
      "Advanced training in Joint Replacement and Arthroscopic Surgery in the UK"
    ],
    experience: [
      "Senior Consultant Orthopedic Surgeon at Indraprastha Apollo Hospitals, New Delhi",
      "Orthopedic Surgeon at NHS hospitals, UK",
      "Professor of Orthopedics at G R Medical College, Gwalior"
    ],
    awards: [
      "Best Paper Publication Award by Delhi Orthopaedic Association, 2012",
      "Honorary Life Membership of Bangladesh Orthopaedic Society, 2012",
      "Featured in Limca Book of Records for performing bilateral Total Knee Replacement in a 93-year-old patient, 2012",
      "Featured in Limca Book of Records for performing bilateral Total Knee Replacement in the oldest couple in a single sitting, 2013",
      "Academic Achievement Awards for Best Paper Publications in Apollo Group of Hospitals, 2011"
    ],
    reviews: []
  },
  {
    tags: ["Gynecology", "Obstetrics", "Laparoscopic Surgery", "Infertility Treatment", "Delhi"],
    id: "dr-shakti-bhan-khanna",
    name: "Dr. Shakti Bhan Khanna",
    yearsOfExperience: 53,
    designation: "Senior Consultant Gynecologist and Obstetrician",
    image: "/doctors/dr-shakti-bhan-khanna.webp",
    workingAt: "Indraprastha Apollo Hospitals, New Delhi",
    hospitalId: "indraprastha-apollo-hospitals-new-delhi",
    about: {
      title: "About Dr. Shakti Bhan Khanna",
      items: [
        {
          content: "Dr. Shakti Bhan Khanna is a highly experienced gynecologist and obstetrician with 60 years of practice in the field. She specializes in gynecological oncology, endocrinology, infertility, high-risk pregnancies, and pelvic reconstructive surgery."
        },
        {
          content: "She completed her MBBS from Jammu and Kashmir University in 1964 and MD in Obstetrics & Gynaecology from the University of Delhi in 1969."
        },
        {
          content: "Dr. Khanna developed the surgical procedure known as 'Khanna’s Sling Operation' for vault prolapse, which has achieved significant success."
        },
        {
          content: "She has been a recognized postgraduate teacher since 1985 for universities including Kashmir, Jammu, Delhi, AIIMS, and Bombay."
        },
        {
          content: "Dr. Khanna has received numerous accolades, including the Lifetime Achievement Award presented by the Honorable Health Minister Shri. Ghulam Nabi Azad."
        }
      ]
    },
    specialties: [
      "Gynecology",
      "Obstetrics",
      "Laparoscopic Surgery",
      "Infertility Treatment",
      "Gynecological Oncology"
    ],
    skilledAt: [
      "Fertility Treatment",
      "Gynaecological Laparoscopy",
      "Management of High-Risk Pregnancies",
      "Pelvic Reconstructive Surgery",
      "In-Vitro Fertilization (IVF)"
    ],
    specialInterests: [
      "Advancements in Gynecological Oncology",
      "Innovations in Laparoscopic Gynecological Procedures",
      "Comprehensive Care for High-Risk Pregnancies"
    ],
    education: [
      "MBBS from Jammu and Kashmir University, 1964",
      "MD in Obstetrics & Gynaecology from University of Delhi, 1969"
    ],
    experience: [
      "Senior Consultant at Indraprastha Apollo Hospitals, New Delhi",
      "Assistant Professor to Professor at Government Medical College, Srinagar for 30 years",
      "Practicing at Apollo Cradle & Children’s Hospital, Chirag Delhi, New Delhi"
    ],
    awards: [
      "Lifetime Achievement Award presented by Honorable Health Minister Shri. Ghulam Nabi Azad",
      "Honored at the Second International Conference of Gynae Plastic Surgeons in Amritsar",
      "Recognized by the Kashmiri Samiti in Delhi for contributions to gynecology"
    ],
    reviews: []
  },
  {
    tags: ["Liver Transplantation", "Hepatobiliary Surgery", "Delhi"],
    id: "dr-neerav-goyal",
    name: "Dr. Neerav Goyal",
    yearsOfExperience: 27,
    designation: "Senior Consultant - Liver Transplantation and Hepatobiliary Surgery",
    image: "/doctors/dr-neerav-goyal.webp",
    workingAt: "Indraprastha Apollo Hospitals, New Delhi",
    hospitalId: "indraprastha-apollo-hospitals-new-delhi",
    about: {
      title: "About Dr. Neerav Goyal",
      items: [
        {
          content: "Dr. Neerav Goyal is a distinguished surgeon with 27 years of experience, specializing in liver transplantation and hepatobiliary surgery."
        },
        {
          content: "He completed his MBBS from Bangalore University in 1997, followed by DNB in General Surgery in 2001 and DNB in Surgical Gastroenterology in 2005 from the National Board of Examination."
        },
        {
          content: "Dr. Goyal has been associated with Indraprastha Apollo Hospitals in New Delhi, contributing significantly to the field of liver transplantation and hepatobiliary surgery."
        },
        {
          content: "He is known for his expertise in complex liver surgeries and has been instrumental in advancing liver transplant programs."
        },
        {
          content: "Dr. Goyal is a member of several esteemed medical organizations and has been recognized for his contributions to the field."
        }
      ]
    },
    specialties: [
      "Liver Transplantation",
      "Hepatobiliary Surgery",
      "Surgical Gastroenterology"
    ],
    skilledAt: [
      "Complex Liver Surgeries",
      "Management of Liver Diseases",
      "Minimally Invasive Hepatobiliary Procedures",
      "Post-Transplant Care"
    ],
    specialInterests: [
      "Advancements in Liver Transplantation Techniques",
      "Hepatobiliary Oncology",
      "Patient-Centered Surgical Care"
    ],
    education: [
      "MBBS from Bangalore University, 1997",
      "DNB in General Surgery from National Board Of Examination, 2001",
      "DNB in Surgical Gastroenterology from National Board Of Examination, 2005"
    ],
    experience: [
      "Senior Consultant - Liver Transplantation and Hepatobiliary Surgery at Indraprastha Apollo Hospitals, New Delhi"
    ],
    awards: [
      "Recognized for contributions to Liver Transplantation and Hepatobiliary Surgery"
    ],
    reviews: []
  },
  {
    tags: ["Gastroenterology", "Hepatology", "Endoscopy", "Delhi"],
    id: "dr-sudeep-khanna",
    name: "Dr. Sudeep Khanna",
    yearsOfExperience: 31,
    designation: "Senior Consultant Gastroenterologist and Internist",
    image: "/doctors/dr-sudeep-khanna.webp",
    workingAt: "Indraprastha Apollo Hospitals, New Delhi",
    hospitalId: "indraprastha-apollo-hospitals-new-delhi",
    about: {
      title: "About Dr. Sudeep Khanna",
      items: [
        {
          content: "Dr. Sudeep Khanna is a distinguished gastroenterologist with over 31 years of experience, specializing in the management of gastrointestinal and liver diseases."
        },
        {
          content: "He completed his MBBS in 1992 and MD in Medicine in 1996 from the University of Delhi, followed by a DM in Gastroenterology from the All India Institute of Medical Sciences (AIIMS), New Delhi, in 2001."
        },
        {
          content: "Dr. Khanna has been associated with Indraprastha Apollo Hospitals in New Delhi, contributing significantly to the field of gastroenterology through both clinical practice and research."
        },
        {
          content: "He is proficient in performing various endoscopic procedures, including diagnostic and therapeutic endoscopies, enteroscopy, capsule endoscopy, and therapeutic biliary and pancreatic ERCP."
        },
        {
          content: "Dr. Khanna is a member of several esteemed organizations, including the Indian Society of Gastroenterology, and has been involved in medical education programs at the national level."
        }
      ]
    },
    specialties: [
      "Gastroenterology",
      "Hepatology",
      "Endoscopy",
      "Liver Diseases",
      "Pancreatic Diseases"
    ],
    skilledAt: [
      "Diagnostic and Therapeutic Endoscopy",
      "Enteroscopy",
      "Capsule Endoscopy",
      "Therapeutic Biliary and Pancreatic ERCP",
      "Management of Gastrointestinal and Liver Diseases"
    ],
    specialInterests: [
      "Advancements in Endoscopic Procedures",
      "Hepatobiliary Disorders",
      "Functional Bowel Diseases"
    ],
    education: [
      "MBBS from University of Delhi, 1992",
      "MD in Medicine from University of Delhi, 1996",
      "DM in Gastroenterology from AIIMS, New Delhi, 2001"
    ],
    experience: [
      "Senior Consultant Gastroenterologist and Internist at Indraprastha Apollo Hospitals, New Delhi",
      "Senior Consultant Gastroenterologist and Internist at Pushpawati Singhania Institute for Liver, Renal and Digestive Diseases, New Delhi (2002–Present)"
    ],
    awards: [
      "Executive Editor of 'Gastroenterology Today'",
      "Reviewer for 'Journal of Gastroenterology and Hepatology' and 'Digestive and Liver Diseases'"
    ],
    reviews: []
  },
  {
    tags: ["Nephrology", "Renal Transplantation", "Hemodialysis", "Delhi"],
    id: "dr-d-k-agarwal",
    name: "Dr. D. K. Agarwal",
    yearsOfExperience: 38,
    designation: "Senior Consultant Nephrologist",
    image: "/doctors/dr-d-k-agarwal.webp",
    workingAt: "Indraprastha Apollo Hospitals, New Delhi",
    hospitalId: "indraprastha-apollo-hospitals-new-delhi",
    about: {
      title: "About Dr. D. K. Agarwal",
      items: [
        {
          content: "Dr. D. K. Agarwal is a distinguished nephrologist with over 38 years of experience, specializing in renal transplantation, hemodialysis, and the management of complex kidney diseases."
        },
        {
          content: "He completed his MBBS in 1985 and MD in Medicine in 1988 from Agra University, followed by a DNB in Nephrology from the National Board of Examination, India, in 1993."
        },
        {
          content: "Dr. Agarwal has been associated with Indraprastha Apollo Hospitals in New Delhi, contributing significantly to the field of nephrology through both clinical practice and research."
        },
        {
          content: "He has published over 59 articles in national and international journals, focusing on various aspects of nephrology and renal transplantation."
        },
        {
          content: "Dr. Agarwal is a member of several esteemed organizations, including the Indian Society of Nephrology, and has been recognized for his contributions to the field with awards such as the Dr. K.S. Mathur Gold Medal."
        }
      ]
    },
    specialties: [
      "Nephrology",
      "Renal Transplantation",
      "Hemodialysis",
      "Continuous Ambulatory Peritoneal Dialysis (CAPD)"
    ],
    skilledAt: [
      "Management of Acute and Chronic Kidney Diseases",
      "Renal Transplantation Procedures",
      "Hemodialysis and Peritoneal Dialysis",
      "Treatment of Hypertension and Diabetic Kidney Diseases",
      "Critical Care Nephrology"
    ],
    specialInterests: [
      "Advancements in Renal Transplantation",
      "Innovations in Dialysis Techniques",
      "Comprehensive Kidney Care"
    ],
    education: [
      "MBBS from Agra University, 1985",
      "MD in Medicine from Agra University, 1988",
      "DNB in Nephrology from National Board of Examination, India, 1993"
    ],
    experience: [
      "Senior Consultant Nephrologist at Indraprastha Apollo Hospitals, New Delhi",
      "Visiting Assistant Professor at the University of Missouri - School of Medicine, Columbia, USA, in 2000"
    ],
    awards: [
      "Dr. K.S. Mathur Gold Medal of Agra University for MD Examination, 1988",
      "Fellow of the Indian Society of Nephrology (FISN) in recognition of significant contributions to nephrology, 2003"
    ],
    reviews: []
  },
  {
    tags: ["Urology", "Kidney Transplantation", "Vascular Surgery", "Delhi"],
    id: "dr-sandeep-guleria",
    name: "Dr. Sandeep Guleria",
    yearsOfExperience: 39,
    designation: "Senior Consultant Urologist and Transplant Surgeon",
    image: "/doctors/dr-sandeep-guleria.webp",
    workingAt: "Indraprastha Apollo Hospitals, New Delhi",
    hospitalId: "indraprastha-apollo-hospitals-new-delhi",
    about: {
      title: "About Dr. Sandeep Guleria",
      items: [
        {
          content: "Dr. Sandeep Guleria is a renowned urologist and transplant surgeon with over 39 years of experience, specializing in kidney transplantation, vascular access surgery, and dialysis procedures."
        },
        {
          content: "He completed his MBBS from the University of Delhi in 1985, MS in General Surgery from the All India Institute of Medical Sciences (AIIMS) in 1988, and DNB in Urology/Genito-Urinary Surgery from the National Board of Examination in 1989."
        },
        {
          content: "Dr. Guleria led the team that performed the first two kidney-pancreas transplants in India and pioneered cadaveric renal transplantation in New Delhi."
        },
        {
          content: "He developed the Pediatric Transplant Unit at AIIMS and initiated the Laparoscopic Donor Nephrectomy program there. He also introduced the 'Donor Card' in New Delhi."
        },
        {
          content: "Dr. Guleria has been honored with the Padma Shri award by the President of India and serves as the Vice President of the Indian Society of Organ Transplantation."
        }
      ]
    },
    specialties: [
      "Urology",
      "Kidney Transplantation",
      "Vascular Surgery",
      "Dialysis Procedures",
      "Peritoneal Dialysis Surgery"
    ],
    skilledAt: [
      "Ureteroscopy (URS)",
      "Treatment of Urinary Incontinence",
      "Testicular Surgery",
      "Vascular Access Surgery",
      "Percutaneous Renal Biopsies",
      "Renal Transplant Surgery"
    ],
    specialInterests: [
      "Advancements in Kidney Transplantation",
      "Pediatric Transplantation",
      "Laparoscopic Donor Nephrectomy"
    ],
    education: [
      "MBBS from University of Delhi, 1985",
      "MS in General Surgery from AIIMS, 1988",
      "DNB in Urology/Genito-Urinary Surgery from National Board of Examination, 1989",
      "FRCS from Royal College of Surgeons of Edinburgh, 1993",
      "FRCS from Royal College of Physicians and Surgeons of Glasgow, 1993"
    ],
    experience: [
      "Senior Consultant Urologist and Transplant Surgeon at Indraprastha Apollo Hospitals, New Delhi",
      "Developed Pediatric Transplant Unit and initiated Laparoscopic Donor Nephrectomy program at AIIMS"
    ],
    awards: [
      "Padma Shri award by the President of India",
      "Smt. Rukmani Gopalkrishnan Award for standing first in Surgery",
      "Distinguished Alumni Award from University College of Medical Sciences, 1996",
      "Luminary Award by the IMA South Delhi Branch, 2007",
      "Exemplary Contribution Award by Indian Medical Association, 2008",
      "Himachal Gaurav by Himalayan Jagriti Manch, 2011"
    ],
    reviews: []
  },
  {
    tags: ["Pulmonology", "Respiratory Medicine", "Critical Care", "Delhi"],
    id: "dr-nikhil-modi",
    name: "Dr. Nikhil Modi",
    yearsOfExperience: 15,
    designation: "Consultant Pulmonologist and Critical Care Specialist",
    image: "/doctors/dr-nikhil-modi.webp",
    workingAt: "Indraprastha Apollo Hospitals, New Delhi",
    hospitalId: "indraprastha-apollo-hospitals-new-delhi",
    about: {
      title: "About Dr. Nikhil Modi",
      items: [
        {
          content: "Dr. Nikhil Modi is a distinguished pulmonologist and critical care specialist with over 15 years of experience, specializing in respiratory and sleep medicine."
        },
        {
          content: "He completed his MBBS in 2006 and MD in Pulmonary Medicine in 2010 from the University of Delhi."
        },
        {
          content: "Dr. Modi is proficient in procedures such as fiberoptic bronchoscopy, auto-fluorescence video bronchoscopy, cardiopulmonary exercise testing, and allergy skin testing."
        },
        {
          content: "He has been associated with Indraprastha Apollo Hospitals in New Delhi, contributing significantly to the field of pulmonology through both clinical practice and research."
        },
        {
          content: "Dr. Modi is a member of several esteemed organizations, including the National College of Chest Physicians and the European Respiratory Society."
        }
      ]
    },
    specialties: [
      "Pulmonology",
      "Respiratory Medicine",
      "Critical Care",
      "Sleep Medicine"
    ],
    skilledAt: [
      "Fiberoptic Bronchoscopy",
      "Auto-fluorescence Video Bronchoscopy",
      "Cardiopulmonary Exercise Testing",
      "Allergy Skin Testing",
      "Immunotherapy for Aeroallergens"
    ],
    specialInterests: [
      "Critical Care Management",
      "Respiratory and Sleep Medicine",
      "Pulmonary Function Testing"
    ],
    education: [
      "MBBS from University of Delhi, 2006",
      "MD in Pulmonary Medicine from University of Delhi, 2010"
    ],
    experience: [
      "Consultant Pulmonologist and Critical Care Specialist at Indraprastha Apollo Hospitals, New Delhi"
    ],
    awards: [
      "Received various awards and grants for research work in pulmonology"
    ],
    reviews: []
  },
  {
    tags: ["Cardiology", "Interventional Cardiology", "Delhi"],
    id: "dr-vipul-narain-roy",
    name: "Dr. Vipul Narain Roy",
    yearsOfExperience: 43,
    designation: "Senior Consultant Cardiologist",
    image: "/doctors/dr-vipul-narain-roy.webp",
    workingAt: "Indraprastha Apollo Hospitals, New Delhi",
    hospitalId: "indraprastha-apollo-hospitals-new-delhi",
    about: {
      title: "About Dr. Vipul Narain Roy",
      items: [
        {
          content: "Dr. Vipul Narain Roy is a seasoned cardiologist with over 43 years of experience, specializing in interventional cardiology and comprehensive cardiac care."
        },
        {
          content: "He earned his MBBS in 1981 and MD in General Medicine in 1984 from the University of Allahabad."
        },
        {
          content: "Dr. Roy has been associated with Indraprastha Apollo Hospitals in New Delhi, contributing significantly to the field of cardiology through both clinical practice and research."
        },
        {
          content: "He is proficient in performing complex cardiac procedures and has been instrumental in advancing cardiac care services at the hospital."
        },
        {
          content: "Dr. Roy is a member of several esteemed medical organizations and has been recognized for his contributions to cardiology."
        }
      ]
    },
    specialties: [
      "Cardiology",
      "Interventional Cardiology",
      "Preventive Cardiology"
    ],
    skilledAt: [
      "Complex Angioplasty",
      "Cardiac Catheterization",
      "Management of Heart Failure",
      "Treatment of Coronary Artery Disease",
      "Non-Invasive Cardiac Imaging"
    ],
    specialInterests: [
      "Advancements in Interventional Cardiology",
      "Preventive Cardiology",
      "Patient-Centered Cardiac Care"
    ],
    education: [
      "MBBS from University of Allahabad, 1981",
      "MD in General Medicine from University of Allahabad, 1984"
    ],
    experience: [
      "Senior Consultant Cardiologist at Indraprastha Apollo Hospitals, New Delhi"
    ],
    awards: [
      "Recognized for contributions to Interventional Cardiology"
    ],
    reviews: []
  },
  {
    tags: ["Cardiothoracic Surgery", "Vascular Surgery", "Heart Transplantation", "Delhi"],
    id: "dr-bhaba-nanda-das",
    name: "Dr. Bhaba Nanda Das",
    yearsOfExperience: 47,
    designation: "Chief Cardiac Surgeon (CTVS)",
    image: "/doctors/dr-bhaba-nanda-das.webp",
    workingAt: "Indraprastha Apollo Hospitals, New Delhi",
    hospitalId: "indraprastha-apollo-hospitals-new-delhi",
    about: {
      title: "About Dr. Bhaba Nanda Das",
      items: [
        {
          content: "Dr. Bhaba Nanda Das is a distinguished cardiothoracic and vascular surgeon with over 47 years of experience, having performed more than 20,000 heart surgeries."
        },
        {
          content: "He completed his MBBS from the University of Gauhati in 1977, MS in General Surgery from PGIMER, Chandigarh, in 1980, and MCh in Cardio Thoracic and Vascular Surgery from AIIMS, New Delhi, in 1983."
        },
        {
          content: "Dr. Das has pioneered several cardiac procedures in India, including the first beating heart CABG surgery and the procurement of donor hearts for India's initial heart transplants."
        },
        {
          content: "He has served as a Senior Consultant at AIIMS, New Delhi, and is currently the Chief Cardiac Surgeon at Indraprastha Apollo Hospitals."
        },
        {
          content: "Dr. Das has been honored with multiple awards, including the Vishisth Chikitsa Ratan Award by the Delhi Medical Association in 2012."
        }
      ]
    },
    specialties: [
      "Cardiothoracic Surgery",
      "Vascular Surgery",
      "Heart Transplantation",
      "Congenital Heart Defect Repairs"
    ],
    skilledAt: [
      "Coronary Artery Bypass Grafting (CABG) on Beating Heart",
      "Aortic Aneurysm Surgery",
      "Valve Replacements (Mitral and Aortic)",
      "Repair of Congenital Heart Anomalies",
      "Intra-Cardiac Repairs"
    ],
    specialInterests: [
      "Advancements in Beating Heart Surgeries",
      "Heart Transplantation Techniques",
      "Minimally Invasive Cardiac Procedures"
    ],
    education: [
      "MBBS from University of Gauhati, 1977",
      "MS in General Surgery from PGIMER, Chandigarh, 1980",
      "MCh in Cardio Thoracic and Vascular Surgery from AIIMS, New Delhi, 1983"
    ],
    experience: [
      "Chief Cardiac Surgeon (CTVS) at Indraprastha Apollo Hospitals, New Delhi",
      "Senior Consultant, Department of Cardio Thoracic Vascular Surgery at AIIMS, New Delhi (1984–1996)"
    ],
    awards: [
      "Vishisth Chikitsa Ratan Award by Delhi Medical Association, 2012",
      "WHO Fellowship",
      "Commonwealth Fellowship"
    ],
    reviews: []
  },
  {
    tags: ["Neurology", "Stroke", "Epilepsy", "Gurgaon"],
    id: "dr-sameer-arora",
    name: "Dr. Sameer Arora",
    yearsOfExperience: 12,
    designation: "Consultant Neurologist",
    image: "/doctors/dr-sameer-arora.webp",
    workingAt: "Medsarc Advanced Superspeciality Clinics, Gurgaon",
    hospitalId: "medsarc-advanced-superspeciality-clinics-gurgaon",
    about: {
      title: "About Dr. Sameer Arora",
      items: [
        {
          content: "Dr. Sameer Arora is a dedicated neurologist with over 12 years of experience, specializing in the diagnosis and treatment of neurological disorders."
        },
        {
          content: "He completed his MBBS from R.G. Kar Medical College, Kolkata, followed by an MD in General Medicine from Pt. B.D. Sharma PGIMS, Rohtak, and a DM in Neurology from the All India Institute of Medical Sciences (AIIMS), New Delhi."
        },
        {
          content: "Dr. Arora has served as a Consultant Neurologist at Artemis Hospital, Gurgaon, and Narayana Superspeciality Hospital, Gurgaon, where he managed Neuro ICU and neurological emergencies."
        },
        {
          content: "He has a keen interest in headache, epilepsy, stroke, multiple sclerosis, and Parkinson's disease, and is known for his compassionate approach towards patient care."
        },
        {
          content: "Dr. Arora is an active member of the American Academy of Neurology and has participated in various national and international neurology conferences."
        }
      ]
    },
    specialties: [
      "Neurology",
      "Stroke Management",
      "Epilepsy Treatment",
      "Headache Disorders",
      "Parkinson's Disease"
    ],
    skilledAt: [
      "Management of Neurological Emergencies",
      "Neurocritical Care",
      "Electroencephalogram (EEG)",
      "Nerve Conduction Studies",
      "Botulinum Toxin Injections for Neurological Disorders"
    ],
    specialInterests: [
      "Advancements in Stroke Rehabilitation",
      "Epilepsy Surgery Evaluation",
      "Movement Disorders"
    ],
    education: [
      "MBBS from R.G. Kar Medical College, Kolkata",
      "MD in General Medicine from Pt. B.D. Sharma PGIMS, Rohtak",
      "DM in Neurology from AIIMS, New Delhi"
    ],
    experience: [
      "Consultant Neurologist at Medsarc Advanced Superspeciality Clinics, Gurgaon",
      "Consultant Neurologist at Narayana Superspeciality Hospital, Gurgaon",
      "Consultant Neurologist at Artemis Hospital, Gurgaon"
    ],
    awards: [
      "Joint Organising Secretary of Virtual Agrim Neurology Update (VANU 2020)"
    ],
    reviews: []
  },
  {
    tags: ["Surgical Oncology", "Robotic Surgery", "Delhi"],
    id: "dr-ruquaya-ahmad-mir",
    name: "Dr. Ruquaya Ahmad Mir",
    yearsOfExperience: 35,
    designation: "Senior Consultant Surgical Oncologist",
    image: "/doctors/dr-ruquaya-ahmad-mir.webp",
    workingAt: "Indraprastha Apollo Hospitals, New Delhi",
    hospitalId: "indraprastha-apollo-hospitals-new-delhi",
    about: {
      title: "About Dr. Ruquaya Ahmad Mir",
      items: [
        {
          content: "Dr. Ruquaya Ahmad Mir is a highly experienced surgical oncologist with over 35 years in the field, specializing in robotic surgery and comprehensive cancer care."
        },
        {
          content: "She completed her MBBS from the University of Kashmir in 1989 and her DNB in General Surgery from the National Board of Examination in 1998."
        },
        {
          content: "Since 2006, Dr. Mir has been associated with Indraprastha Apollo Hospitals in New Delhi, actively involved in both outpatient and inpatient oncology care within a multidisciplinary cancer center."
        },
        {
          content: "She has successfully performed numerous major oncological resection surgeries, including those for head and neck cancers, lung and esophageal cancers, major gastrointestinal malignancies, breast and gynecological malignancies, and soft tissue sarcomas."
        },
        {
          content: "Dr. Mir is also involved in the implantation and maintenance of long-term vascular access devices and has contributed to the training of postgraduate surgical students and nursing staff."
        }
      ]
    },
    specialties: [
      "Head and Neck Cancers",
      "Lung and Esophageal Cancers",
      "Breast and Gynecological Malignancies",
      "Major Gastrointestinal Malignancies",
      "Soft Tissue Sarcomas"
    ],
    skilledAt: [
      "Robotic Surgery",
      "Oncological Resection Surgeries",
      "Implantation of Long-Term Vascular Access Devices",
      "Multidisciplinary Cancer Care",
      "Postoperative Oncology Management"
    ],
    specialInterests: [
      "Advancements in Robotic Surgical Techniques",
      "Comprehensive Cancer Care",
      "Oncological Research and Education"
    ],
    education: [
      "MBBS from University of Kashmir, 1989",
      "DNB in General Surgery from National Board of Examination, 1998"
    ],
    experience: [
      "Senior Consultant Surgical Oncologist at Indraprastha Apollo Hospitals, New Delhi (2006–Present)"
    ],
    awards: [
      "Recognized for contributions to surgical oncology and robotic surgery"
    ],
    reviews: []
  },
  {
    tags: ["Orthopedics", "Joint Replacement", "Trauma Surgery", "Gurgaon"],
    id: "dr-hemant-sharma",
    name: "Dr. Hemant Sharma",
    yearsOfExperience: 29,
    designation: "Orthopedic Surgeon",
    image: "/doctors/dr-hemant-sharma.webp",
    workingAt: "Marengo Asia Hospitals, Gurgaon",
    hospitalId: "marengo-asia-hospitals-gurgaon",
    about: {
      title: "About Dr. Hemant Sharma",
      items: [
        {
          content: "Dr. Hemant Sharma is a renowned orthopedic surgeon with over 29 years of experience, specializing in joint replacement and trauma surgery."
        },
        {
          content: "He completed his MBBS from M.D. University, Rohtak in 1995, followed by a DNB in Orthopedics/Orthopedic Surgery from the National Board of Examination in 2000."
        },
        {
          content: "Dr. Sharma further enhanced his expertise by obtaining the FRCS in Trauma & Orthopedic Surgery from the Royal College of Surgeons, England, in 2010."
        },
        {
          content: "He has extensive experience working both in India and the UK, including positions at University Hospital Llandough, Cardiff, and Princess of Wales Hospital, Bridgend."
        },
        {
          content: "Dr. Sharma is a member of esteemed medical organizations such as the Royal College of Surgeons (MRCS), General Medical Council (GMC), UK, Medical Council of India (MCI), and Delhi Medical Council."
        }
      ]
    },
    specialties: [
      "Joint Replacement Surgery",
      "Trauma Surgery",
      "Arthroscopic Surgery",
      "Spine Surgery",
      "Pediatric Orthopedics"
    ],
    skilledAt: [
      "Total Hip Replacement",
      "Total Knee Replacement",
      "Complex Fracture Management",
      "Sports Injury Treatment",
      "Minimally Invasive Orthopedic Procedures"
    ],
    specialInterests: [
      "Advancements in Joint Replacement Techniques",
      "Management of Complex Trauma Cases",
      "Orthopedic Care for Sickle Cell Disease Patients"
    ],
    education: [
      "MBBS from M.D. University, Rohtak, 1995",
      "DNB in Orthopedics/Orthopedic Surgery from National Board of Examination, 2000",
      "FRCS in Trauma & Orthopedic Surgery from Royal College of Surgeons, England, 2010"
    ],
    experience: [
      "Orthopedic Surgeon at Marengo Asia Hospitals, Gurgaon",
      "Senior Fellow at University Hospital Llandough, Cardiff, UK",
      "Orthopedic Surgeon at Princess of Wales Hospital, Bridgend, UK"
    ],
    awards: [
      "Recognized for contributions to orthopedic surgery and patient care"
    ],
    reviews: []
  },
  {
    tags: ["Neurosurgery", "Functional Neurosurgery", "Epilepsy Surgery", "Gurgaon"],
    id: "dr-himanshu-champaneri",
    name: "Dr. Himanshu Champaneri",
    yearsOfExperience: 16,
    designation: "Senior Consultant Neurosurgeon",
    image: "/doctors/dr-himanshu-champaneri.webp",
    workingAt: "Marengo Asia Hospitals, Gurgaon",
    hospitalId: "marengo-asia-hospitals-gurgaon",
    about: {
      title: "About Dr. Himanshu Champaneri",
      items: [
        {
          content: "Dr. Himanshu Champaneri is a distinguished neurosurgeon with over 16 years of experience, specializing in functional, epilepsy, and endoscopic neurosurgery."
        },
        {
          content: "He completed his MBBS from Pramukhswami Medical College, Karmsad, in 2008, followed by an MS in General Surgery, where he was awarded a Gold Medal in 2011."
        },
        {
          content: "Dr. Champaneri has performed over 1,500 neurosurgeries, including India's first surgery for schizophrenia in June 2023."
        },
        {
          content: "He leads the Functional, Epilepsy & Endoscopic Neurosurgery (FEENS) services at Marengo Asia Hospitals in Gurgaon."
        },
        {
          content: "Dr. Champaneri is a member of the Neurological Society of India and has extensive experience in minimally invasive neurosurgical techniques."
        }
      ]
    },
    specialties: [
      "Functional Neurosurgery",
      "Epilepsy Surgery",
      "Endoscopic Neurosurgery",
      "Pediatric Neurosurgery",
      "Minimally Invasive Spine Surgery"
    ],
    skilledAt: [
      "Temporal Resections",
      "Vagus Nerve Stimulation",
      "Endoportal Brain Tumor Surgery",
      "Endoscopic Skull Base Surgery",
      "Peripheral Nerve Surgery"
    ],
    specialInterests: [
      "Advancements in Functional Neurosurgery",
      "Epilepsy Treatment Innovations",
      "Minimally Invasive Neurosurgical Procedures"
    ],
    education: [
      "MBBS from Pramukhswami Medical College, Karmsad, 2008",
      "MS in General Surgery (Gold Medal), 2011",
      "DNB in Neurosurgery"
    ],
    experience: [
      "Senior Consultant Neurosurgeon at Marengo Asia Hospitals, Gurgaon",
      "Minimally Invasive Neurosurgeon at Medanta Hospital (7 years)"
    ],
    awards: [
      "Gold Medal in General Surgery, 2011",
      "Performed India's first surgery for schizophrenia, June 2023"
    ],
    reviews: []
  },
  {
    tags: ["Cardiothoracic Surgery", "Robotic Cardiac Surgery", "Minimally Invasive Cardiac Surgery", "Delhi"],
    id: "dr-yugal-k-mishra",
    name: "Dr. Yugal Kishore Mishra",
    yearsOfExperience: 43,
    designation: "Chief of Clinical Services and Head of Cardiac Sciences",
    image: "/doctors/dr-yugal-k-mishra.webp",
    workingAt: "Manipal Hospital, Dwarka, New Delhi",
    hospitalId: "manipal-hospital-dwarka-new-delhi",
    about: {
      title: "About Dr. Yugal Kishore Mishra",
      items: [
        {
          content: "Dr. Yugal Kishore Mishra is a renowned cardiothoracic and vascular surgeon with over 43 years of experience, specializing in minimally invasive and robotic cardiac surgeries."
        },
        {
          content: "He has performed more than 19,000 open-heart surgeries, including over 500 robotic cardiac procedures and 1,000 redo cardiac surgeries."
        },
        {
          content: "Dr. Mishra has been instrumental in advancing minimally invasive cardiac surgery (MICS) and established the Robotic Cardiac Surgery Program at Manipal Hospitals."
        },
        {
          content: "He has a keen interest in training, education, and research, with over 150 scientific papers published and participation in more than 200 international and national conferences."
        },
        {
          content: "Dr. Mishra has been honored with several awards, including the Lifetime Achievement Award by the World Congress on Clinical and Preventive Cardiology (WCCPC), conferred by Dr. A.P.J. Abdul Kalam in 2006."
        }
      ]
    },
    specialties: [
      "Minimally Invasive Cardiac Surgery",
      "Robotic Cardiac Surgery",
      "Redo Cardiac Surgeries",
      "Heart Transplantation",
      "Ventricular Assist Device Procedures"
    ],
    skilledAt: [
      "Coronary Artery Bypass Grafting (CABG)",
      "Valve Repair and Replacement",
      "Aortic Aneurysm Surgery",
      "Carotid Artery Endarterectomy",
      "Total Arterial Revascularization"
    ],
    specialInterests: [
      "Advancements in Robotic Cardiac Surgery",
      "Minimally Invasive Surgical Techniques",
      "Training and Education in Cardiothoracic Surgery"
    ],
    education: [
      "MBBS",
      "MS in General Surgery",
      "PhD in Cardio Thoracic & Vascular Surgery"
    ],
    experience: [
      "Chief of Clinical Services and Head of Cardiac Sciences at Manipal Hospital, Dwarka, New Delhi",
      "Director, Department of Cardiovascular Surgery at Escorts Heart Institute & Research Centre, New Delhi"
    ],
    awards: [
      "Rashtriya Ratan Award by International Study Circle, 2005",
      "Lifetime Achievement Award by WCCPC, 2006"
    ],
    reviews: []
  },
  {
    tags: ["Orthopedics", "Spine Surgery", "Joint Replacement", "Delhi"],
    id: "dr-manoj-miglani",
    name: "Dr. Manoj Miglani",
    yearsOfExperience: 27,
    designation: "Principal Director, Orthopedics and Spine Surgery",
    image: "/doctors/dr-manoj-miglani.webp",
    workingAt: "Fortis Flt. Lt. Rajan Dhall Hospital, Vasant Kunj, New Delhi",
    hospitalId: "fortis-flt-lt-rajan-dhall-hospital-vasant-kunj-new-delhi",
    about: {
      title: "About Dr. Manoj Miglani",
      items: [
        {
          content: "Dr. Manoj Miglani is a distinguished orthopedic and spine surgeon with over 27 years of experience, specializing in complex spine surgeries and joint replacements."
        },
        {
          content: "He earned his MBBS from G.B. Pant Hospital/Maulana Azad Medical College, New Delhi, in 1997, and completed his MS in Orthopedics from the All India Institute of Medical Sciences (AIIMS), New Delhi, in 2000."
        },
        {
          content: "Dr. Miglani has a special interest in minimally invasive spine surgeries, including endoscopic procedures and fixations."
        },
        {
          content: "He is known for his compassionate approach and dedication to patient care, earning him a strong reputation among his patients."
        },
        {
          content: "Dr. Miglani is a member of esteemed medical organizations such as the Delhi Orthopedic Association, AOSpine, and the Association of Spine Surgeons of India (ASSI)."
        }
      ]
    },
    specialties: [
      "Spine Surgery",
      "Joint Replacement",
      "Minimally Invasive Spine Surgery",
      "Spinal Trauma",
      "Degenerative Spine Disorders"
    ],
    skilledAt: [
      "Complex Spine Surgeries",
      "Endoscopic Spine Procedures",
      "Joint Replacement Surgeries",
      "Spinal Trauma Management",
      "Degenerative Spine Treatment"
    ],
    specialInterests: [
      "Advancements in Minimally Invasive Spine Surgery",
      "Endoscopic Spine Procedures",
      "Joint Replacement Innovations"
    ],
    education: [
      "MBBS from G.B. Pant Hospital/Maulana Azad Medical College, New Delhi, 1997",
      "MS in Orthopedics from AIIMS, New Delhi, 2000"
    ],
    experience: [
      "Principal Director, Orthopedics and Spine Surgery at Fortis Flt. Lt. Rajan Dhall Hospital, Vasant Kunj, New Delhi",
      "Consultant Orthopedic and Spine Surgeon at Joint N Spine Clinic, Shalimar Bagh, Delhi"
    ],
    awards: [
      "Fellowship in Spine Surgery"
    ],
    reviews: []
  },
  {
    tags: ["Gastroenterology", "Laparoscopic Surgery", "Bariatric Surgery", "Delhi"],
    id: "dr-amit-javed",
    name: "Dr. Amit Javed",
    yearsOfExperience: 23,
    designation: "Laparoscopic Surgeon",
    image: "/doctors/dr-amit-javed.webp",
    workingAt: "CK Birla Hospital, Delhi",
    hospitalId: "ck-birla-hospital-delhi",
    about: {
      title: "About Dr. Amit Javed",
      items: [
        {
          content: "Dr. Amit Javed is an expert in gastrointestinal, gastrointestinal cancer, and bariatric/weight loss surgeries with over 20 years of experience."
        },
        {
          content: "He completed his MBBS from Kasturba Medical College, Manipal; MS in General Surgery from Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh; and MCh in Gastrointestinal Surgery from All India Institute of Medical Sciences (AIIMS), New Delhi."
        },
        {
          content: "Dr. Javed has been a faculty member at the Department of G.I Surgery at GB Pant Institute of Post Graduate Medical Education and Research, New Delhi, and has trained many G.I surgeons across the country."
        },
        {
          content: "He has worked as an Assistant Professor at the Department of Abdominal Transplant Surgery at the University of California, San Francisco (UCSF), USA, and at the thoracic division at the Memorial Sloan Kettering Cancer Center, New York, USA."
        },
        {
          content: "Dr. Javed has contributed more than 50 articles to various international and national journals and textbooks, and has described innovative surgical techniques in his publications."
        }
      ]
    },
    specialties: [
      "Gastrointestinal Surgery",
      "Laparoscopic Surgery",
      "Bariatric Surgery",
      "Gastrointestinal Cancer Surgery",
      "Hepatobiliary Surgery"
    ],
    skilledAt: [
      "Minimally Invasive Surgeries",
      "Complex Gastrointestinal Surgeries",
      "Liver Transplantation",
      "Pancreatic Surgery",
      "Esophageal Surgery"
    ],
    specialInterests: [
      "Advancements in Laparoscopic Techniques",
      "Bariatric Surgery Innovations",
      "Gastrointestinal Oncology"
    ],
    education: [
      "MBBS from Kasturba Medical College, Manipal",
      "MS in General Surgery from PGIMER, Chandigarh",
      "MCh in Gastrointestinal Surgery from AIIMS, New Delhi"
    ],
    experience: [
      "Laparoscopic Surgeon at CK Birla Hospital, Delhi",
      "Assistant Professor at UCSF, USA",
      "Faculty at GB Pant Institute of Post Graduate Medical Education and Research, New Delhi"
    ],
    awards: [
      "Best Oral Paper Award, Plenary Session, Laparoscopic Management of Corrosive Esophageal Strictures, IASG Conference, Bangalore, 2012",
      "First Prize, E-video Session, Laparoscopic Radical Cholecystectomy for Gall Bladder Cancer, IASG Conference, Bangalore, 2012"
    ],
    reviews: []
  },
  {
    tags: ["Surgical Oncology", "Robotic Surgery", "Delhi"],
    id: "dr-shoaib-zaidi",
    name: "Dr. S. M. Shuaib Zaidi",
    yearsOfExperience: 29,
    designation: "Senior Consultant Surgical Oncologist",
    image: "/doctors/dr-shoaib-zaidi.webp",
    workingAt: "Indraprastha Apollo Hospitals, New Delhi",
    hospitalId: "indraprastha-apollo-hospitals-new-delhi",
    about: {
      title: "About Dr. S. M. Shuaib Zaidi",
      items: [
        {
          content: "Dr. S. M. Shuaib Zaidi is a distinguished surgical oncologist with over 29 years of experience, specializing in minimally invasive and robotic surgeries for various cancers."
        },
        {
          content: "He completed his MBBS from the University of Delhi in 1995, DNB in General Surgery from the National Board of Examination in 2002, and MCh in Surgical Oncology from The Tamil Nadu Dr. M.G.R. Medical University, Chennai, in 2005."
        },
        {
          content: "Dr. Zaidi performed the first robotic esophagectomy and lobectomy for esophageal and lung cancer in Delhi in 2011."
        },
        {
          content: "He is a member of the International Association for the Study of Obesity (IASO) and has contributed to several research publications in the field of oncology."
        },
        {
          content: "Dr. Zaidi is proficient in treating head and neck cancers, breast cancers, lung and esophageal cancers, and gastrointestinal malignancies."
        }
      ]
    },
    specialties: [
      "Head and Neck Cancers",
      "Breast Cancer",
      "Lung and Esophageal Cancers",
      "Gastrointestinal Malignancies",
      "Robotic and Minimally Invasive Surgery"
    ],
    skilledAt: [
      "Robotic Esophagectomy",
      "Robotic Lobectomy",
      "Head and Neck Tumor Surgery",
      "Breast Cancer Management",
      "Gastrointestinal Cancer Surgery"
    ],
    specialInterests: [
      "Advancements in Robotic Surgical Techniques",
      "Minimally Invasive Cancer Treatments",
      "Oncological Research and Education"
    ],
    education: [
      "MBBS from University of Delhi, 1995",
      "DNB in General Surgery from National Board of Examination, 2002",
      "MCh in Surgical Oncology from The Tamil Nadu Dr. M.G.R. Medical University, Chennai, 2005"
    ],
    experience: [
      "Senior Consultant Surgical Oncologist at Indraprastha Apollo Hospitals, New Delhi",
      "Performed first robotic esophagectomy and lobectomy for esophageal and lung cancer in Delhi, 2011"
    ],
    awards: [
      "Recognized for pioneering robotic surgeries in Delhi"
    ],
    reviews: []
  },
  {
    tags: ["Oncology", "Radiation Oncology", "Image-Guided Radiation Therapy", "Gurgaon"],
    id: "dr-subodh-chandra-pande",
    name: "Dr. Subodh Chandra Pande",
    yearsOfExperience: 47,
    designation: "Chief of Radiation Oncology and Co-Chief of CyberKnife Centre",
    image: "/doctors/dr-subodh-chandra-pande.webp",
    workingAt: "Artemis Hospitals, Gurgaon",
    hospitalId: "artemis-hospitals-gurgaon",
    about: {
      title: "About Dr. Subodh Chandra Pande",
      items: [
        {
          content: "Dr. Subodh Chandra Pande is a seasoned radiation oncologist with over 47 years of clinical and teaching experience, specializing in advanced radiation therapies including CyberKnife and Image-Guided Radiation Therapy (IGRT)."
        },
        {
          content: "He completed his MBBS in 1972 and DMRE in 1975 from Moti Lal Nehru Medical College, Uttar Pradesh, followed by an MD in Radiotherapy from the All India Institute of Medical Sciences (AIIMS), New Delhi, in 1978."
        },
        {
          content: "Dr. Pande has been instrumental in establishing neuro-oncology and pediatric oncology services at Tata Memorial Hospital, Mumbai, and has significantly advanced stereotactic radiotherapy facilities at Indraprastha Apollo Hospitals, New Delhi."
        },
        {
          content: "At Artemis Hospitals, Gurgaon, he leads the Radiation Oncology department and co-directs the CyberKnife Centre, focusing on precise and non-invasive cancer treatments."
        },
        {
          content: "Dr. Pande is affiliated with several professional organizations, including the Association of Radiation Oncologists of India (AROI) and the Indian Society of Oncology (ISO), contributing extensively to oncology research and education."
        }
      ]
    },
    specialties: [
      "CyberKnife Radiosurgery",
      "Image-Guided Radiation Therapy (IGRT)",
      "Pediatric Oncology",
      "Neuro-Oncology",
      "Stereotactic Radiotherapy"
    ],
    skilledAt: [
      "Advanced Radiation Therapy Techniques",
      "Non-Invasive Cancer Treatments",
      "Oncological Research",
      "Medical Education",
      "Multidisciplinary Cancer Management"
    ],
    specialInterests: [
      "Innovations in Radiation Oncology",
      "Development of Neuro-Oncology Services",
      "Pediatric Cancer Treatment"
    ],
    education: [
      "MBBS from Moti Lal Nehru Medical College, Uttar Pradesh, 1972",
      "DMRE from Moti Lal Nehru Medical College, Uttar Pradesh, 1975",
      "MD in Radiotherapy from AIIMS, New Delhi, 1978"
    ],
    experience: [
      "Chief of Radiation Oncology and Co-Chief of CyberKnife Centre at Artemis Hospitals, Gurgaon",
      "Consultant Radiation Oncologist at Tata Memorial Hospital, Mumbai",
      "Senior Consultant in Radiation Oncology at Indraprastha Apollo Hospitals, New Delhi"
    ],
    awards: [
      "Elected Secretary of the Association of Radiation Oncologists of India, 1996",
      "Dr. R K Jalota Oration Award, 1998"
    ],
    reviews: []
  },
  {
    tags: ["Oncology", "Robotic Surgery", "Delhi"],
    id: "dr-biswajyoti-hazarika",
    name: "Dr. Biswajyoti Hazarika",
    yearsOfExperience: 18,
    designation: "Chief of Head & Neck Surgery",
    image: "/doctors/dr-biswajyoti-hazarika.webp",
    workingAt: "Artemis Hospitals, Gurgaon",
    hospitalId: "artemis-hospitals-gurgaon",
    about: {
      title: "About Dr. Biswajyoti Hazarika",
      items: [
        {
          content: "Dr. Biswajyoti Hazarika is a distinguished surgical oncologist with over 18 years of experience, specializing in head and neck surgeries, including tumors of the oral cavity, nose, paranasal sinuses, larynx, pharynx, salivary glands, thyroid, and parathyroid glands."
        },
        {
          content: "He completed his MBBS from Gauhati Medical College, Guwahati, in 1995, and his MS in ENT from Assam Medical College, Dibrugarh, in 2001."
        },
        {
          content: "Dr. Hazarika pursued a fellowship in Head & Neck Surgery at Kidwai Memorial Institute of Oncology, Bangalore, and further honed his skills at Dr. B Borooah Cancer Institute, Guwahati, and Prince Aly Khan Hospital, Mumbai."
        },
        {
          content: "He is proficient in plastic reconstruction of resected areas, endoscopic and minimal access surgeries, and has incorporated robotic head and neck surgery into his practice."
        },
        {
          content: "Dr. Hazarika has multiple publications in national and international medical journals and has authored chapters in the 'Atlas of Otolaryngology and Head & Neck Surgery'."
        }
      ]
    },
    specialties: [
      "Head and Neck Tumor Surgery",
      "Thyroid and Parathyroid Surgery",
      "Salivary Gland Tumor Surgery",
      "Endoscopic and Robotic Head & Neck Surgery",
      "Plastic Reconstruction of Head & Neck Surgical Defects"
    ],
    skilledAt: [
      "Oral Cavity Tumor Surgery",
      "Paranasal Sinus Tumor Surgery",
      "Skull Base Surgery",
      "Laryngeal and Pharyngeal Laser Surgery",
      "Minimally Invasive Head & Neck Surgery"
    ],
    specialInterests: [
      "Advancements in Robotic Head & Neck Surgery",
      "Functional Rehabilitation of Head & Neck Cancer Patients",
      "Oncological Research and Education"
    ],
    education: [
      "MBBS from Gauhati Medical College, Guwahati, 1995",
      "MS in ENT from Assam Medical College, Dibrugarh, 2001",
      "Fellowship in Head & Neck Surgery from Kidwai Memorial Institute of Oncology, Bangalore"
    ],
    experience: [
      "Chief of Head & Neck Surgery at Artemis Hospitals, Gurgaon",
      "Consultant at Max Super Specialty Hospital, Saket, New Delhi",
      "Clinical Assistant at Prince Aly Khan Hospital, Mumbai"
    ],
    awards: [
      "Blue Star Best Post Graduate Award",
      "Multiple national and international publications"
    ],
    reviews: []
  },
  {
    tags: ["Ophthalmology", "Corneal Disorders", "Refractive Surgery", "Gurgaon"],
    id: "dr-sameer-kaushal",
    name: "Dr. Sameer Kaushal",
    yearsOfExperience: 24,
    designation: "Senior Consultant & Head of Ophthalmology",
    image: "/doctors/dr-sameer-kaushal.webp",
    workingAt: "Artemis Health Institute, Gurgaon",
    hospitalId: "artemis-health-institute-gurgaon",
    about: {
      title: "About Dr. Sameer Kaushal",
      items: [
        {
          content: "Dr. Sameer Kaushal is a qualified eye surgeon from the prestigious All India Institute of Medical Sciences (AIIMS), New Delhi. After completing his graduation and post-graduation at AIIMS, he gained expertise in treating eye diseases, especially corneal disorders, during his tenure in the Cornea, Cataract, and Refractive Surgery Unit."
        },
        {
          content: "He has extensive experience in performing various eye surgeries, particularly anterior segment surgeries, including phacoemulsification for cataract, LASIK, and corneal transplantation. His expertise extends to the latest treatment modalities, such as sutureless corneal transplants and artificial corneas."
        },
        {
          content: "Dr. Kaushal has been involved in teaching and research activities, with multiple research papers published in international journals. He has pioneered new techniques, including innovative surgical procedures and minimally invasive treatments, and has co-authored books on corneal transplantation, corneal disorders, and LASIK surgery."
        }
      ]
    },
    specialties: [
      "Corneal Disorders",
      "Cataract Surgery",
      "Refractive Surgery",
      "Anterior Segment Surgery",
      "Ocular Surface Disorders"
    ],
    skilledAt: [
      "Phacoemulsification for Cataract",
      "LASIK Surgery",
      "Corneal Transplantation",
      "Management of Ocular Surface Disorders",
      "Minimally Invasive Ophthalmic Procedures"
    ],
    specialInterests: [
      "Advancements in Corneal Transplant Techniques",
      "Innovations in Refractive Surgery",
      "Ophthalmic Research and Education"
    ],
    education: [
      "MBBS from All India Institute of Medical Sciences, New Delhi",
      "MD in Ophthalmology from All India Institute of Medical Sciences, New Delhi",
      "DNB in Ophthalmology"
    ],
    experience: [
      "Senior Consultant & Head of Ophthalmology at Artemis Health Institute, Gurgaon",
      "Consultant at PL Memorial Eye Clinic, Gurgaon"
    ],
    awards: [
      "Multiple publications in international journals",
      "Co-authored books on corneal transplantation and LASIK surgery"
    ],
    reviews: []
  },
  {
    tags: ["Liver Transplantation", "Gastroenterology", "Hepato-Pancreato-Biliary Surgery", "Gurgaon"],
    id: "dr-giriraj-singh-bora",
    name: "Dr. Giriraj Singh Bora",
    yearsOfExperience: 22,
    designation: "Chief of Liver Transplant & Senior Consultant - GI & HPB Surgery",
    image: "/doctors/dr-giriraj-singh-bora.webp",
    workingAt: "Artemis Hospital, Gurgaon",
    hospitalId: "artemis-hospital-gurgaon",
    about: {
      title: "About Dr. Giriraj Singh Bora",
      items: [
        {
          content: "Dr. Giriraj Singh Bora is a distinguished surgeon with over 22 years of experience, specializing in liver transplantation and gastrointestinal surgeries. He has successfully performed more than 1,500 liver transplants."
        },
        {
          content: "He completed his MBBS in 2000 and MS in General Surgery in 2003 from JLN Medical College. He further pursued an MCh in Surgical Gastroenterology from Maulana Azad Medical College, Delhi University, in 2009."
        },
        {
          content: "Dr. Bora has a keen interest in liver resections for hepatocellular cancers, combined liver-kidney transplantation, and pancreatic surgeries, including Whipple’s pancreaticoduodenal resections and surgeries for chronic pancreatitis."
        },
        {
          content: "He was felicitated by the Chief Minister of Rajasthan for performing the first liver transplant in the state."
        },
        {
          content: "Dr. Bora has been associated with esteemed institutions like Indraprastha Apollo Hospitals and Mahatma Gandhi Hospital, contributing significantly to their liver transplant programs."
        }
      ]
    },
    specialties: [
      "Liver Transplantation",
      "Hepato-Pancreato-Biliary Surgery",
      "Gastrointestinal Surgery",
      "Pancreatic Surgery",
      "Liver Resections for Hepatocellular Cancers"
    ],
    skilledAt: [
      "Liver Transplant Procedures",
      "Whipple’s Pancreaticoduodenal Resections",
      "Surgery for Chronic Pancreatitis",
      "Combined Liver-Kidney Transplantation",
      "Management of Hepatocellular Carcinoma"
    ],
    specialInterests: [
      "Advancements in Liver Transplant Techniques",
      "Pancreatic Surgery Innovations",
      "Hepatocellular Cancer Treatments"
    ],
    education: [
      "MBBS from JLN Medical College, 2000",
      "MS in General Surgery from JLN Medical College, 2003",
      "MCh in Surgical Gastroenterology from Maulana Azad Medical College, Delhi University, 2009"
    ],
    experience: [
      "Chief of Liver Transplant & Senior Consultant - GI & HPB Surgery at Artemis Hospital, Gurgaon",
      "Consultant - Liver Transplant and HPB Surgery at Indraprastha Apollo Hospitals",
      "Chief Liver Transplant and HPB Surgeon at Mahatma Gandhi Hospital"
    ],
    awards: [
      "Felicitated by the Chief Minister of Rajasthan for performing the first liver transplant in the state"
    ],
    reviews: []
  },
  {
    tags: ["Urology", "Endo-urology", "Laparoscopic Urology", "Renal Transplant", "Gurgaon"],
    id: "dr-vikram-barua-kaushik",
    name: "Dr. Vikram Barua Kaushik",
    yearsOfExperience: 30,
    designation: "Senior Consultant in Urology",
    image: "/doctors/dr-vikram-barua-kaushik.webp",
    workingAt: "Artemis Hospital, Gurgaon",
    hospitalId: "artemis-hospital-gurgaon",
    about: {
      title: "About Dr. Vikram Barua Kaushik",
      items: [
        {
          content: "Dr. Vikram Barua Kaushik is a seasoned urologist with 30 years of experience, specializing in endo-urology, laparoscopic urology, and renal transplantation."
        },
        {
          content: "He completed his MBBS in 1994 and MS in General Surgery in 1999 from Dibrugarh University, Assam, followed by a DNB in Urology/Genito-Urinary Surgery from the National Board of Examination in 2005."
        },
        {
          content: "Dr. Kaushik has held significant positions, including Chief Urologist at RG Stone Urology & Laparoscopy Hospital, Gurgaon, and has been associated with Artemis Hospital since September 2009."
        },
        {
          content: "His expertise encompasses minimally invasive treatments for urinary stone diseases, management of urological cancers, and pediatric urological disorders."
        },
        {
          content: "Dr. Kaushik is a member of the Medical Council of India (MCI) and has contributed to numerous academic activities and publications in international peer-reviewed urological literature."
        }
      ]
    },
    specialties: [
      "Endo-urology",
      "Laparoscopic Urology",
      "Renal Transplant",
      "Pediatric Urology",
      "Urological Oncology"
    ],
    skilledAt: [
      "Minimally Invasive and Laser Techniques for Stone Diseases",
      "Radical Prostatectomy",
      "Radical Cystectomy",
      "Construction of Neobladder",
      "Radical Nephrectomy"
    ],
    specialInterests: [
      "Advancements in Endo-urology",
      "Laparoscopic Urological Procedures",
      "Renal Transplantation Techniques"
    ],
    education: [
      "MBBS from Dibrugarh University, Assam, 1994",
      "MS in General Surgery from Dibrugarh University, Assam, 1999",
      "DNB in Urology/Genito-Urinary Surgery from National Board of Examination, 2005"
    ],
    experience: [
      "Senior Consultant in Urology at Artemis Hospital, Gurgaon",
      "Chief Urologist at RG Stone Urology & Laparoscopy Hospital, Gurgaon",
      "Consultant Urologist at Fortis Flight Lt. Rajan Dhall Memorial Hospital, New Delhi"
    ],
    awards: [
      "Presented and co-authored numerous publications in international peer-reviewed urological literature"
    ],
    reviews: []
  },
  {
    tags: ["Orthopaedics", "Robotic Surgery", "Joint Replacement", "Arthroscopy", "Gurgaon"],
    id: "dr-i-p-s-oberoi",
    name: "Dr. I P S Oberoi",
    yearsOfExperience: 25,
    designation: "Chairperson - Orthopaedics Program & Chief – Robotic Joint Replacement.",
    image: "/doctors/dr-i-p-s-oberoi.webp",
    workingAt: "Artemis Hospitals, Gurgaon",
    hospitalId: "artemis-hospitals-gurgaon",
    about: {
      title: "About Dr. I P S Oberoi",
      items: [
        {
          content: "Dr. I P S Oberoi is a renowned orthopaedic surgeon with over 25 years of experience, specializing in primary and revision joint replacement surgeries of the knee, hip, shoulder, elbow, and ankle joints."
        },
        {
          content: "He is among the pioneers in minimally invasive reconstructive surgery (arthroscopy) for shoulder, elbow, hip, and ankle problems, and has mastered techniques for managing multi-ligament and complex knee injuries."
        },
        {
          content: "Dr. Oberoi received his MS in Orthopaedics and further pursued an MCh in Orthopaedics from Liverpool, U.K."
        },
        {
          content: "He has undergone extensive training in joint replacement and adult reconstructive trauma surgery in Germany, knee reconstructive surgery in Germany, joint replacement training in the U.K., knee arthroscopy and reconstruction in Germany and South Africa, and shoulder surgery in France and South Africa."
        },
        {
          content: "Dr. Oberoi is proficient in robotic joint replacement surgeries, enhancing precision and patient outcomes."
        }
      ]
    },
    specialties: [
      "Primary and Revision Joint Replacement Surgeries",
      "Minimally Invasive Reconstructive Surgery (Arthroscopy)",
      "Robotic Joint Replacement",
      "Management of Multi-Ligament and Complex Knee Injuries",
      "Shoulder, Elbow, Hip, and Ankle Surgeries"
    ],
    skilledAt: [
      "Robotic-Assisted Joint Replacement",
      "Arthroscopic Surgery for Sports Injuries",
      "Complex Knee Reconstruction",
      "Shoulder and Elbow Arthroscopy",
      "Hip and Ankle Arthroscopy"
    ],
    specialInterests: [
      "Advancements in Robotic Joint Replacement",
      "Minimally Invasive Orthopaedic Surgeries",
      "Sports Injury Management"
    ],
    education: [
      "MS in Orthopaedics",
      "MCh in Orthopaedics from Liverpool, U.K."
    ],
    experience: [
      "Chairperson - Orthopaedics Program & Chief – Robotic Joint Replacement & Arthroscopy Surgery at Artemis Hospitals, Gurgaon",
      "Extensive training and practice in Germany, U.K., France, and South Africa"
    ],
    awards: [
      "Recognized for pioneering minimally invasive reconstructive surgeries in India"
    ],
    reviews: []
  },
  {
    tags: ["Pediatric Orthopedics", "Spine Surgery", "Scoliosis Correction", "Gurgaon"],
    id: "dr-sanjay-sarup",
    name: "Dr. Sanjay Sarup",
    yearsOfExperience: 32,
    designation: "Director of Pediatric Orthopedics & Spine Surgery",
    image: "/doctors/dr-sanjay-sarup.webp",
    workingAt: "Artemis Hospital, Gurgaon",
    hospitalId: "artemis-hospital-gurgaon",
    about: {
      title: "About Dr. Sanjay Sarup",
      items: [
        {
          content: "Dr. Sanjay Sarup is a distinguished orthopedic surgeon with over 32 years of experience, specializing in pediatric orthopedics and spine surgery. He completed his MBBS from the University of Kashmir, followed by an MS in Orthopedics from PGIMER Chandigarh. Furthering his expertise, he earned his FRCS from Glasgow and MCh in Orthopedics from the University of Dundee, UK."
        },
        {
          content: "In 1998, Dr. Sarup was awarded a fellowship in pediatric orthopedics and spine surgery at the Royal Hospital for Sick Children, Glasgow. He was the first qualified pediatric orthopedic surgeon to establish practice in Delhi, initiating the Pediatric Orthopedic Unit at Sir Ganga Ram Hospital in 2004. He later developed the pediatric orthopedic and spine division at Medanta Medicity in 2009."
        },
        {
          content: "Currently, Dr. Sarup serves as the Director of Pediatric Orthopedics & Spine Surgery at Artemis Hospital, Gurgaon, where he also heads one of the orthopedic units. He is a postgraduate teacher and thesis guide for the DNB program at the hospital."
        }
      ]
    },
    specialties: [
      "Pediatric Orthopedic Deformities",
      "Scoliosis & Kyphosis Correction",
      "Knee & Hip Replacements",
      "Adult Spine Surgery",
      "Limb Lengthening Procedures"
    ],
    skilledAt: [
      "Scoliosis & Spinal Deformity Correction",
      "Hip Reconstruction and Replacement for Congenital Dislocation",
      "Foot Deformity Correction including Club Foot",
      "Limb Lengthening Surgery and Height Gain Procedures",
      "Perthes Disease Treatment"
    ],
    specialInterests: [
      "Congenital Hip Dislocations",
      "Club Foot Deformity",
      "Scoliosis Correction"
    ],
    education: [
      "MBBS from University of Kashmir",
      "MS in Orthopedics from PGIMER Chandigarh",
      "FRCS from Glasgow",
      "MCh in Orthopedics from University of Dundee, UK"
    ],
    experience: [
      "Director of Pediatric Orthopedics & Spine Surgery at Artemis Hospital, Gurgaon",
      "Head of Pediatric Orthopedics and Spine Surgery at Medanta Medicity",
      "Senior Consultant in Pediatric Orthopedics at Sir Ganga Ram Hospital"
    ],
    awards: [
      "Fellowship in Pediatric Orthopedics and Spine Surgery at the Royal Hospital for Sick Children, Glasgow"
    ],
    reviews: []
  },
  {
    tags: ["Urology", "Kidney Transplantation", "Robotic Surgery", "Gurgaon"],
    id: "dr-abhinandan-mukhopadhyay",
    name: "Dr. Abhinandan Mukhopadhyay",
    yearsOfExperience: 17,
    designation: "Senior Consultant, Urology & Kidney Transplant Program",
    image: "/doctors/dr-abhinandan-mukhopadhyay.webp",
    workingAt: "Artemis Hospital, Gurgaon",
    hospitalId: "artemis-hospital-gurgaon",
    about: {
      title: "About Dr. Abhinandan Mukhopadhyay",
      items: [
        {
          content: "Dr. Abhinandan Mukhopadhyay is a highly qualified urologist with over 17 years of experience, specializing in managing urological conditions such as kidney stone disease, male sexual health issues, infertility, prostate diseases, and complex reconstructive procedures for urethral strictures."
        },
        {
          content: "He earned his MBBS from Calcutta National Medical College, Calcutta University, followed by an MS in General Surgery and an MCh in Urology/Genito-Urinary Surgery from the Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh."
        },
        {
          content: "Dr. Mukhopadhyay has been involved in over 300 robotic-assisted laparoscopic surgeries for urological cancers and complex reconstructive procedures during his residency at PGIMER, Chandigarh."
        },
        {
          content: "He has served as a consultant urologist at Max Smart Super Speciality Hospital, Delhi, and Fortis Memorial Research Institute, Gurgaon."
        },
        {
          content: "Dr. Mukhopadhyay is actively engaged in academic activities, presenting numerous research papers at national and international conferences and authoring several publications."
        }
      ]
    },
    specialties: [
      "Kidney Stone Disease Management",
      "Male Sexual Health and Infertility",
      "Prostate Disease Treatment",
      "Complex Urethral Stricture Reconstruction",
      "Urological Cancer Surgeries"
    ],
    skilledAt: [
      "Robotic-Assisted Laparoscopic Surgeries",
      "Endourological Procedures",
      "Minimally Invasive Urological Treatments",
      "Renal Transplantation",
      "Male Sexual Dysfunction Management"
    ],
    specialInterests: [
      "Advancements in Robotic Urological Surgeries",
      "Innovations in Minimally Invasive Urology",
      "Uro-Oncological Research"
    ],
    education: [
      "MBBS from Calcutta National Medical College, Calcutta University",
      "MS in General Surgery from PGIMER, Chandigarh",
      "MCh in Urology/Genito-Urinary Surgery from PGIMER, Chandigarh"
    ],
    experience: [
      "Senior Consultant, Urology & Kidney Transplant Program at Artemis Hospital, Gurgaon",
      "Consultant Urologist at Max Smart Super Speciality Hospital, Delhi",
      "Consultant Urologist at Fortis Memorial Research Institute, Gurgaon"
    ],
    awards: [
      "2nd Prize in CMC Ludhiana Prize Poster Category at North Zone USICON 2015",
      "2nd Prize in Agra Urology Club Best Video Category at North Zone USICON 2016",
      "Best Poster Prize at East Zone USICON 2016"
    ],
    reviews: []
  },
  {
    tags: ["Cardiothoracic Surgery", "Cardiovascular Surgery", "Heart Transplantation", "Gurgaon"],
    id: "dr-naresh-trehan",
    name: "Dr. Naresh Trehan",
    yearsOfExperience: 53,
    designation: "Chairman & Managing Director, Chief Cardiac Surgeon",
    image: "/doctors/dr-naresh-trehan.webp",
    workingAt: "Medanta - The Medicity, Gurgaon",
    hospitalId: "medanta-the-medicity-gurgaon",
    about: {
      title: "About Dr. Naresh Trehan",
      items: [
        {
          content: "Dr. Naresh Trehan is a renowned cardiovascular and cardiothoracic surgeon with over five decades of experience. He graduated from King George's Medical University, Lucknow, in 1968 and pursued further training in the United States, practicing at New York University Medical Center from 1971 to 1988. "
        },
        {
          content: "In 1988, Dr. Trehan returned to India and founded the Escorts Heart Institute and Research Centre in Delhi. He later established Medanta - The Medicity in Gurgaon, where he serves as Chairman, Managing Director, and Chief Cardiac Surgeon."
        },
        {
          content: "Throughout his career, Dr. Trehan has performed over 50,000 open-heart surgeries and has been a pioneer in introducing innovative cardiac care techniques in India. "
        },
        {
          content: "He has received numerous accolades, including the Padma Shri and Padma Bhushan awards from the Government of India, recognizing his significant contributions to medicine."
        }
      ]
    },
    specialties: [
      "Cardiothoracic Surgery",
      "Cardiovascular Surgery",
      "Heart Transplantation",
      "Minimally Invasive Cardiac Surgery",
      "Coronary Artery Bypass Grafting"
    ],
    skilledAt: [
      "Open-Heart Surgeries",
      "Valve Repair and Replacement",
      "Aortic Aneurysm Surgery",
      "Beating Heart Surgery",
      "Cardiac Tumor Removal"
    ],
    specialInterests: [
      "Advancements in Minimally Invasive Cardiac Procedures",
      "Heart Failure Management",
      "Cardiac Regenerative Medicine"
    ],
    education: [
      "MBBS from King George's Medical University, Lucknow, 1968",
      "Diploma in Cardiology from American Board of Surgery, USA, 1977",
      "Diplomate, American Board of Cardiothoracic Surgery, USA, 1979"
    ],
    experience: [
      "Chairman & Managing Director, Chief Cardiac Surgeon at Medanta - The Medicity, Gurgaon",
      "Founder, Director, and Chief Cardiovascular Surgeon at Escorts Heart Institute and Research Centre, Delhi",
      "Clinical Positions at New York University Medical Center, USA"
    ],
    awards: [
      "Padma Shri by the Government of India",
      "Padma Bhushan by the Government of India",
      "Dr. B. C. Roy National Award for Eminent Medical Person",
      "Life Time Achievement Award by the International Society of Cardiovascular Ultrasound",
      "Lal Bahadur Shastri National Award for Excellence in Public Administration, Academics, and Management"
    ],
    reviews: []
  },
  {
    tags: ["Medical Oncology", "Hematology", "Bone Marrow Transplantation", "Gurgaon"],
    id: "dr-ashok-kumar-vaid",
    name: "Dr. Ashok Kumar Vaid",
    yearsOfExperience: 40,
    designation: "Chairman – Medical and Hemato-Oncology, Cancer Institute",
    image: "/doctors/dr-ashok-kumar-vaid.webp",
    workingAt: "Medanta - The Medicity, Gurgaon",
    hospitalId: "medanta-the-medicity-gurgaon",
    about: {
      title: "About Dr. Ashok Kumar Vaid",
      items: [
        {
          content: "Dr. Ashok Kumar Vaid is a distinguished medical oncologist with over 40 years of experience, renowned for his pioneering efforts in bone marrow transplantation in India. He performed the first 25 bone marrow transplants in the private sector in North India. "
        },
        {
          content: "He currently serves as the Chairman of Medical and Hemato-Oncology at Medanta - The Medicity in Gurgaon, India. "
        },
        {
          content: "Dr. Vaid has conducted over 40 international and national clinical research studies and is known for organizing numerous seminars, workshops, and conferences. "
        },
        {
          content: "In recognition of his contributions to medicine, he was awarded the Padma Shri by the Government of India in 2009. "
        }
      ]
    },
    specialties: [
      "Treatment of organ-specific cancers",
      "Leukemias and Lymphomas",
      "Bone Marrow Transplantation",
      "Chemotherapy",
      "Targeted Therapy"
    ],
    skilledAt: [
      "Performing complex bone marrow transplants",
      "Managing solid tumors",
      "Conducting clinical research",
      "Organizing medical seminars and workshops",
      "Implementing advanced cancer treatment protocols"
    ],
    specialInterests: [
      "Cancer genomics",
      "Immunotherapy guidance",
      "Precision onco-therapeutics",
      "Dendritic cell therapy",
      "Stem cell transplant"
    ],
    education: [
      "MBBS from University of Jammu, 1983",
      "MD in Internal Medicine from University of Jammu, 1989",
      "DM in Medical Oncology from Tamil Nadu Dr. M.G.R. Medical University, Chennai"
    ],
    experience: [
      "Chairman – Medical and Hemato-Oncology, Cancer Institute at Medanta - The Medicity, Gurgaon",
      "Head of Department of Medical Oncology at Artemis Health Institute, Gurgaon",
      "Senior Consultant of Medical Oncology at Rajiv Gandhi Cancer Institute and Research Centre, New Delhi",
      "Consultant Oncologist and Faculty at Government Medical College, Jammu",
      "Senior Resident at All India Institute of Medical Sciences, Delhi"
    ],
    awards: [
      "Padma Shri by the Government of India, 2009",
      "Chikitsa Shiromani Award, 2007",
      "Founder member of the Indian Cooperative Oncology Network",
      "Consultant Editor of JK Science",
      "Member of the Editorial Board of Current Trends in Asian Oncology"
    ],
    reviews: []
  },
  {
    tags: ["Neurosurgery", "Brain Tumor Surgery", "Cerebrovascular Surgery", "Epilepsy Surgery", "Gurgaon"],
    id: "dr-varindera-paul-singh",
    name: "Dr. Varindera Paul Singh",
    yearsOfExperience: 42,
    designation: "Chairman, Institute of Neurosciences",
    image: "/doctors/dr-varindera-paul-singh.webp",
    workingAt: "Medanta - The Medicity, Gurgaon",
    hospitalId: "medanta-the-medicity-gurgaon",
    about: {
      title: "About Dr. Varindera Paul Singh",
      items: [
        {
          content: "Dr. Varindera Paul Singh is a distinguished neurosurgeon with over 42 years of experience, specializing in cranial, spinal, and peripheral nerve surgeries. He has a particular interest in brain tumor surgery, cerebrovascular surgery, epilepsy surgery, and radiosurgery. He has operated on over 400 intracranial aneurysms and is actively involved in treating arteriovenous malformations using radiosurgery techniques."
        },
        {
          content: "Dr. Singh initiated the Gamma Knife Unit and epilepsy surgery program at the All India Institute of Medical Sciences (AIIMS), New Delhi, where he served as Additional Professor and Unit Head of Neurosurgery. "
        },
        {
          content: "He has published over 70 papers in journals and books and has been an invited speaker at numerous national and international conferences. "
        }
      ]
    },
    specialties: [
      "Brain Tumor Surgery",
      "Cerebrovascular Surgery",
      "Epilepsy Surgery",
      "Radiosurgery",
      "Spinal Surgery"
    ],
    skilledAt: [
      "Gamma Knife Radiosurgery",
      "Microsurgical Clipping of Aneurysms",
      "Arteriovenous Malformation Treatment",
      "Epilepsy Surgery",
      "Spinal Decompression and Fusion"
    ],
    specialInterests: [
      "Advancements in Radiosurgical Techniques",
      "Minimally Invasive Neurosurgical Procedures",
      "Functional Neurosurgery"
    ],
    education: [
      "MBBS from All India Institute of Medical Sciences, New Delhi, 1982",
      "MCh in Neuro Surgery from All India Institute of Medical Sciences, New Delhi, 1987",
      "DNB in Neurosurgery from National Board of Examinations, 1989"
    ],
    experience: [
      "Chairman, Institute of Neurosciences at Medanta - The Medicity, Gurgaon",
      "Additional Professor and Unit Head of Neurosurgery at AIIMS, New Delhi",
      "Senior Consultant Neurosurgeon at VIMHANS, New Delhi",
      "Senior Consultant Neurosurgeon at Apollo Hospital, New Delhi"
    ],
    awards: [
      "Diploma of Merit for Excellent Poster at 3rd Asian Conference of Neurological Surgeons, Nagoya, 2000",
      "Best Paper Award at the 7th Annual Indian Epilepsy Association Conference, 1999",
      "Best Paper Award at the 4th Annual Indian Epilepsy Association Conference, 1996"
    ],
    reviews: []
  },
  {
    tags: ["Gastroenterology", "Hepatology", "GI Oncology", "Endoscopy", "Gurgaon"],
    id: "dr-randhir-sud",
    name: "Dr. Randhir Sud",
    yearsOfExperience: 43,
    designation: "Chairman, Institute of Digestive and Hepatobiliary Sciences",
    image: "/doctors/dr-randhir-sud.webp",
    workingAt: "Medanta - The Medicity, Gurgaon",
    hospitalId: "medanta-the-medicity-gurgaon",
    about: {
      title: "About Dr. Randhir Sud",
      items: [
        {
          content: "Dr. Randhir Sud is a distinguished gastroenterologist with over 43 years of experience. He is credited with establishing and integrating therapeutic gastrointestinal (GI) endoscopy in India through extensive training and live workshops. "
        },
        {
          content: "He initiated the GI Oncology program in India, focusing on public awareness, early detection, and appropriate management of gastrointestinal cancers."
        },
        {
          content: "Dr. Sud has conducted original research in new endoscopic devices and techniques, pioneering various treatment options in gastroenterology, gastrointestinal cancers, and hepatic diseases. "
        },
        {
          content: "In recognition of his contributions to medicine, he was awarded the Padma Shri by the Government of India in 2008. }"
        }
      ]
    },
    specialties: [
      "Gastrointestinal Endoscopy",
      "Gastrointestinal Oncology",
      "Hepatic Diseases",
      "Therapeutic GI Endoscopy",
      "Advanced Endoscopic Procedures"
    ],
    skilledAt: [
      "Performing complex GI endoscopic procedures",
      "Managing gastrointestinal cancers",
      "Treating hepatic diseases",
      "Conducting clinical research in endoscopic techniques",
      "Organizing medical training and workshops"
    ],
    specialInterests: [
      "Advancements in GI endoscopy",
      "Early detection of GI cancers",
      "Innovations in hepatic disease treatment"
    ],
    education: [
      "MBBS from Government Medical College, Amritsar, 1977",
      "MD in Medicine from All India Institute of Medical Sciences (AIIMS), New Delhi, 1981",
      "DM in Gastroenterology from AIIMS, New Delhi, 1983"
    ],
    experience: [
      "Chairman, Institute of Digestive and Hepatobiliary Sciences at Medanta - The Medicity, Gurgaon",
      "Consultant in Gastroenterology at Sir Ganga Ram Hospital, New Delhi",
      "Visiting Professor at Harvard Medical School, Boston, USA",
      "Visiting Professor at University of Texas Medical Branch, Galveston, USA",
      "Visiting Professor at University of Alabama, Birmingham, USA"
    ],
    awards: [
      "Padma Shri by the Government of India, 2008",
      "Bharat Ratna Priyadarshini Award by Delhi University, 2004",
      "Indian Society of Gastroenterology 'Master in Endoscopy' Gold Medal, 2004",
      "Membership of Faculty of 1000 Medicine, 2005",
      "Fellowship of International Academy of Medical Specialities, 2000"
    ],
    reviews: []
  },
  {
    tags: ["Urology", "Renal Transplantation", "Robotic Surgery", "Minimally Invasive Urology", "Delhi"],
    id: "dr-rajesh-kumar-ahlawat",
    name: "Dr. Rajesh Kumar Ahlawat",
    yearsOfExperience: 48,
    designation: "Group Chairman, Institute of Urology and Robotic Surgery",
    image: "/doctors/dr-rajesh-kumar-ahlawat.webp",
    workingAt: "Medanta - The Medicity, Gurgaon",
    hospitalId: "medanta-the-medicity-gurgaon",
    about: {
      title: "About Dr. Rajesh Kumar Ahlawat",
      items: [
        {
          content: "Dr. Rajesh Kumar Ahlawat is a distinguished urologist and general surgeon with over 48 years of experience, recognized for his pioneering work in minimally invasive urology and renal transplantation. He has successfully established high-volume urology and renal transplant programs across several leading hospitals in India, including Medanta, Indraprastha Apollo Hospital, and Fortis Hospitals. "
        },
        {
          content: "An accomplished minimally invasive surgeon, Dr. Ahlawat has been invited as guest faculty for live demonstrations of various laparoscopic and robotic surgeries worldwide. He pioneered the world's first Robotic Kidney Transplant with regional hypothermia technique in collaboration with Prof. Mani Menon's team from the Vattikuti Urology Institute at Henry Ford Hospital, Detroit, USA. "
        },
        {
          content: "Dr. Ahlawat has been honored with several awards, including the President's Gold Medal by the Urological Society of India in 2016 and the Agra Urological Club Best Video (First Prize) in 2003. "
        }
      ]
    },
    specialties: [
      "Minimally Invasive Urology",
      "Renal Transplantation",
      "Robotic Surgery",
      "Laparoscopic Urology",
      "Endourology"
    ],
    skilledAt: [
      "Robotic Kidney Transplantation",
      "Laparoscopic Donor Nephrectomy",
      "Robotic Pyeloplasty",
      "Robotic Partial Nephrectomy",
      "Robotic Radical Prostatectomy"
    ],
    specialInterests: [
      "Advancements in Robotic Urological Surgeries",
      "Innovations in Minimally Invasive Urology",
      "Renal Transplantation Techniques"
    ],
    education: [
      "MBBS from King George's Medical College, Lucknow University, 1976",
      "MS in General Surgery from King George's Medical College, Lucknow University, 1980",
      "MNAMS in General Surgery from National Board of Examinations, New Delhi, 1982",
      "MCh in Urology from All India Institute of Medical Sciences, New Delhi, 1986"
    ],
    experience: [
      "Group Chairman, Institute of Urology and Robotic Surgery at Medanta - The Medicity, Gurgaon",
      "Executive Director of Urology at Fortis Escorts Hospital, Okhla",
      "Director of Urology and Renal Transplantation at Fortis Healthcare",
      "Senior Consultant in Urology at Indraprastha Apollo Hospital, New Delhi",
      "Honorary Lecturer at the Institute of Urology and Nephrology, University College London Hospitals, U.K."
    ],
    awards: [
      "President's Gold Medal by the Urological Society of India, 2016",
      "Agra Urological Club Best Video (First Prize), 2003",
      "Certificate of Honour in Obstetrics & Gynaecology, 1976"
    ],
    reviews: []
  },
  {
    tags: ["Liver Transplantation", "Hepatobiliary Surgery", "Regenerative Medicine", "Gurgaon"],
    id: "dr-arvinder-singh-soin",
    name: "Dr. Arvinder Singh Soin",
    yearsOfExperience: 37,
    designation: "Chairman, Institute of Liver Transplantation and Regenerative Medicine",
    image: "/doctors/dr-arvinder-singh-soin.webp",
    workingAt: "Medanta - The Medicity, Gurgaon",
    hospitalId: "medanta-the-medicity-gurgaon",
    about: {
      title: "About Dr. Arvinder Singh Soin",
      items: [
        {
          content: "Dr. Arvinder Singh Soin is a renowned liver transplant surgeon with over 37 years of experience. He leads India's largest and one of the world's most successful liver transplant programs at Medanta - The Medicity in Gurgaon. Dr. Soin and his team are known for their 95% success rate, performing approximately 25-30 successful transplants each month."
        },
        {
          content: "He has performed over 3,500 living donor liver transplants in India, the highest in the country and the second-highest globally. "
        },
        {
          content: "Dr. Soin has also conducted more than 12,000 complex liver, gall bladder, and bile duct surgeries. "
        },
        {
          content: "He has been instrumental in training most of the liver transplant teams across India. "
        },
        {
          content: "In recognition of his contributions to medicine, Dr. Soin was awarded the Padma Shri by the Government of India in 2010."
        }
      ]
    },
    specialties: [
      "Liver Transplantation",
      "Hepatobiliary Surgery",
      "Regenerative Medicine",
      "Living Donor Liver Transplant",
      "Pediatric Liver Transplantation"
    ],
    skilledAt: [
      "Performing complex liver transplants",
      "Managing liver and biliary tract diseases",
      "Conducting advanced hepatobiliary surgeries",
      "Implementing regenerative medicine techniques",
      "Training medical professionals in liver transplantation"
    ],
    specialInterests: [
      "Advancements in liver transplantation",
      "Innovations in hepatobiliary surgery",
      "Regenerative medicine applications in liver diseases"
    ],
    education: [
      "MBBS from All India Institute of Medical Sciences (AIIMS), New Delhi, 1985",
      "MS in General Surgery from AIIMS, New Delhi, 1989",
      "FRCS from Royal College of Surgeons of Edinburgh, UK, 1992",
      "FRCS from Royal College of Physicians and Surgeons of Glasgow, UK, 1993"
    ],
    experience: [
      "Chairman, Institute of Liver Transplantation and Regenerative Medicine at Medanta - The Medicity, Gurgaon",
      "Senior Consultant, Transplant/Hepatobiliary Surgery at Sir Ganga Ram Hospital, New Delhi",
      "Senior Consultant, Hepatobiliary/Transplant Surgery at Apollo Hospital, New Delhi",
      "Visiting Fellowship at The Liver Transplant Unit, Asan Medical Centre, Seoul, South Korea",
      "Senior Registrar at Addenbrooke’s Hospital, Cambridge, UK"
    ],
    awards: [
      "Padma Shri by the Government of India, 2010",
      "RD Birla Award for the Best Clinician of the Year, 2011",
      "Swasth Bharat Samman Award for Excellence in Medicine, 2011",
      "E-medinews Award, 2012",
      "Achievements listed in Limca Book of Records, 2007"
    ],
    reviews: []
  },
  {
    tags: ["Spine Surgery", "Orthopedic Surgery", "Pediatric Spinal Deformity", "Spinal Tumor Reconstruction", "Mumbai"],
    id: "dr-abhay-m-nene",
    name: "Dr. Abhay M. Nene",
    yearsOfExperience: 29,
    designation: "Consultant Spine Surgeon",
    image: "/doctors/dr-abhay-m-nene.webp",
    workingAt: "Breach Candy Hospital, Mumbai",
    hospitalId: "breach-candy-hospital-mumbai",
    about: {
      title: "About Dr. Abhay M. Nene",
      items: [
        {
          content: "Dr. Abhay M. Nene is a distinguished spine surgeon with over 29 years of experience. An alumnus of T.N. Medical College, he graduated in 1995 and completed his postgraduate training in Orthopedic Surgery from the University of Mumbai in 1998. He further specialized in spine surgery, training at multiple centers worldwide."
        },
        {
          content: "Dr. Nene's areas of special interest include pediatric spinal deformity, spinal tumor reconstruction, tuberculosis of the spine, and osteoporotic spine conditions. He practices with the 'WeAreSpine' group, affiliated with various corporate hospitals in Mumbai."
        },
        {
          content: "He is the Asia Pacific Chair-elect of AOSpine, a leading global academic organization in spine surgery."
        },
        {
          content: "Beyond his medical career, Dr. Nene is an avid marathon runner, cyclist, and trekker, having completed numerous challenging events worldwide. He also engages in music as a backup vocalist and guitarist with the band 'The Flunkies.'"
        }
      ]
    },
    specialties: [
      "Pediatric Spinal Deformity",
      "Spinal Tumor Reconstruction",
      "Tuberculosis of the Spine",
      "Osteoporotic Spine Conditions",
      "Minimally Invasive Spine Surgery"
    ],
    skilledAt: [
      "Performing complex spinal deformity corrections",
      "Reconstructive surgery for spinal tumors",
      "Managing spinal tuberculosis",
      "Treating osteoporotic spinal fractures",
      "Utilizing minimally invasive surgical techniques"
    ],
    specialInterests: [
      "Advancements in spinal deformity correction",
      "Innovations in spinal tumor reconstruction",
      "Minimally invasive approaches in spine surgery"
    ],
    education: [
      "MBBS from T.N. Medical College, University of Mumbai, 1995",
      "MS in Orthopedic Surgery from University of Mumbai, 1998",
      "Spine Foundation Fellowship, 2000-2001"
    ],
    experience: [
      "Consultant Spine Surgeon at Breach Candy Hospital, Mumbai",
      "Practicing with 'WeAreSpine' group in Mumbai",
      "Trained in spine surgery at centers across Europe, USA, Argentina, UK, and Singapore"
    ],
    awards: [
      "ASSI-Dartmouth Spine Fellowship",
      "Scoliosis Research Society Scholarship",
      "International ISSLS Spine Fellow Award"
    ],
    reviews: []
  },
  {
    tags: ["Pulmonology", "Respiratory Medicine", "Interventional Pulmonology", "Sleep Disorders", "Delhi"],
    id: "dr-neeraj-jain",
    name: "Dr. Neeraj Jain",
    yearsOfExperience: 42,
    designation: "Chairman, Department of Chest Medicine",
    image: "/doctors/dr-neeraj-jain.webp",
    workingAt: "Sir Ganga Ram Hospital, Delhi",
    hospitalId: "sir-ganga-ram-hospital-delhi",
    about: {
      title: "About Dr. Neeraj Jain",
      items: [
        {
          content: "Dr. Neeraj Jain is a distinguished pulmonologist with over 42 years of experience in the field of respiratory medicine. He serves as the Chairman of the Department of Chest Medicine at Sir Ganga Ram Hospital in Delhi."
        },
        {
          content: "He completed his MBBS in 1982 and MD in Tuberculosis & Respiratory Diseases/Medicine in 1985, both from the University of Delhi."
        },
        {
          content: "Dr. Jain specializes in interventional pulmonology and sleep-related breathing disorders, offering comprehensive care for various respiratory conditions."
        },
        {
          content: "He is a member of the Indian Medical Association (IMA) and has been instrumental in advancing respiratory medicine practices in India."
        }
      ]
    },
    specialties: [
      "Interventional Pulmonology",
      "Sleep-Related Breathing Disorders",
      "Diseases of the Chest",
      "Pediatric Respiratory Conditions",
      "Balance Exercises"
    ],
    skilledAt: [
      "Managing complex respiratory conditions",
      "Performing advanced interventional pulmonology procedures",
      "Diagnosing and treating sleep-related breathing disorders",
      "Providing pediatric respiratory care",
      "Conducting balance exercises for respiratory rehabilitation"
    ],
    specialInterests: [
      "Advancements in interventional pulmonology",
      "Innovations in sleep medicine",
      "Pediatric respiratory health"
    ],
    education: [
      "MBBS from University of Delhi, 1982",
      "MD in Tuberculosis & Respiratory Diseases/Medicine from University of Delhi, 1985"
    ],
    experience: [
      "Chairman, Department of Chest Medicine at Sir Ganga Ram Hospital, Delhi",
      "Extensive experience in interventional pulmonology and sleep medicine",
      "Active member of the Indian Medical Association (IMA)"
    ],
    awards: [],
    reviews: []
  },
  {
    tags: ["Oncology", "Chemotherapy", "Breast Cancer Management", "Oral Cancer Treatment", "Ghaziabad"],
    id: "dr-sumant-gupta",
    name: "Dr. Sumant Gupta",
    yearsOfExperience: 19,
    designation: "Senior Consultant, Medical Oncology",
    image: "/doctors/dr-sumant-gupta.webp",
    workingAt: "Yashoda Super Speciality Hospital, Ghaziabad",
    hospitalId: "yashoda-super-speciality-hospital-ghaziabad",
    about: {
      title: "About Dr. Sumant Gupta",
      items: [
        {
          content: "Dr. Sumant Gupta is a seasoned medical oncologist with 19 years of experience, specializing in the treatment of various cancers through chemotherapy and other medical interventions. He practices at Yashoda Super Speciality Hospital in Kaushambi, Ghaziabad, and also consults at Curis Health Clinic in Sukhdev Vihar, Delhi, and Sarvodaya Medicentre in Greater Kailash Part 1, Delhi."
        },
        {
          content: "He earned his MBBS from Rajiv Gandhi University of Health Sciences, Bangalore, in 2005, followed by an MD in General Medicine from Alluri Sitaram Raju Academy of Medical Sciences, Eluru, in 2010. He further specialized with a DM in Oncology from the Cancer Institute (WIA), Chennai, in 2015."
        },
        {
          content: "Dr. Gupta is a member of the Delhi Medical Council and has been recognized with awards such as the TYSA Young Scholar Award for the Best DM in Medical Oncology in 2015."
        }
      ]
    },
    specialties: [
      "Breast Cancer Management",
      "Oral Cancer Treatment",
      "Chemotherapy of Haematological Malignancies",
      "Stem Cell Transplantation",
      "Lung Cancer Treatment"
    ],
    skilledAt: [
      "Administering chemotherapy for various cancers",
      "Managing breast and oral cancers",
      "Performing stem cell transplantation",
      "Treating haematological malignancies",
      "Providing personalized cancer care"
    ],
    specialInterests: [
      "Advancements in chemotherapy protocols",
      "Targeted therapies in oncology",
      "Patient-centered cancer care"
    ],
    education: [
      "MBBS from Rajiv Gandhi University of Health Sciences, Bangalore, 2005",
      "MD in General Medicine from Alluri Sitaram Raju Academy of Medical Sciences, Eluru, 2010",
      "DM in Oncology from Cancer Institute (WIA), Chennai, 2015"
    ],
    experience: [
      "Senior Consultant, Medical Oncology at Yashoda Super Speciality Hospital, Ghaziabad",
      "Consultant at Curis Health Clinic, Sukhdev Vihar, Delhi",
      "Consultant at Sarvodaya Medicentre, Greater Kailash Part 1, Delhi",
      "Associate Consultant Medical Oncology at Batra Hospital",
      "Senior Registrar at Department of Medical Oncology, AIIMS"
    ],
    awards: [
      "TYSA Young Scholar Award for the Best DM in Medical Oncology, 2015",
      "Winner of TYACON Quiz at the Annual Conference of Teen and Young Oncology, 2013"
    ],
    reviews: []
  },
  {
    tags: ["Urology", "Renal Transplant", "Endourology", "Reconstructive Urology", "Noida"],
    id: "dr-ritesh-mongha",
    name: "Dr. Ritesh Mongha",
    yearsOfExperience: 19,
    designation: "Director & Senior Consultant, Urology and Renal Transplant",
    image: "/doctors/dr-ritesh-mongha.webp",
    workingAt: "Metro Hospital, Faridabad",
    hospitalId: "metro-hospital-faridabad",
    about: {
      title: "About Dr. Ritesh Mongha",
      items: [
        {
          content: "Dr. Ritesh Mongha is a distinguished urologist with over 19 years of experience, specializing in urology and renal transplantation. He serves as the Director and Senior Consultant in the Urology and Renal Transplant department at Metro Hospital in Faridabad."
        },
        {
          content: "He completed his MBBS from Nalanda Medical College, Patna, followed by an MS in Surgery from the Institute of Medical Sciences, Varanasi. He further pursued a DNB in General Surgery from the National Academy of Medical Sciences, Varanasi, and an MCh in Urology from the Institute of Post Graduate Medical Education and Research, Kolkata. "
        },
        {
          content: "Dr. Mongha has performed over 10,000 endourological and laparoscopic urological procedures, including 700 prostate surgeries and approximately 1,000 Retrograde Intrarenal Surgeries (RIRS). He is adept at complex urethral surgeries, such as progressive perineal and buccal mucosa graft procedures. "
        },
        {
          content: "His areas of interest encompass endourology, reconstructive urology, female urology, and pediatric urology. He has also conducted over 200 uro-oncological surgeries, including laparoscopic radical nephrectomy, laparoscopic adrenalectomy, radical cystectomy, and laparoscopic prostatectomy. "
        },
        {
          content: "Prior to his current role, Dr. Mongha was associated with esteemed institutions such as Indraprastha Apollo Hospital in New Delhi, Fortis Hospital, SSKM Hospital in Kolkata, and Sir Sunderlal Hospital in Varanasi. "
        }
      ]
    },
    specialties: [
      "Endourology",
      "Reconstructive Urology",
      "Female Urology",
      "Pediatric Urology",
      "Uro-Oncology"
    ],
    skilledAt: [
      "Performing endourological and laparoscopic urological procedures",
      "Conducting complex urethral surgeries",
      "Managing female and pediatric urological conditions",
      "Executing uro-oncological surgeries",
      "Handling renal transplant surgeries"
    ],
    specialInterests: [
      "Advancements in endourology",
      "Innovations in reconstructive urology",
      "Pediatric urological care"
    ],
    education: [
      "MBBS from Nalanda Medical College, Patna",
      "MS in Surgery from Institute of Medical Sciences, Varanasi",
      "DNB in General Surgery from National Academy of Medical Sciences, Varanasi",
      "MCh in Urology from Institute of Post Graduate Medical Education and Research, Kolkata"
    ],
    experience: [
      "Director & Senior Consultant, Urology and Renal Transplant at Metro Hospital, Faridabad",
      "Consultant Urologist at Indraprastha Apollo Hospital, New Delhi",
      "Consultant Urologist at Fortis Hospital",
      "Consultant Urologist at SSKM Hospital, Kolkata",
      "Consultant Urologist at Sir Sunderlal Hospital, Varanasi"
    ],
    awards: [],
    reviews: []
  },
  {
    tags: ["Orthopedic Surgery", "Joint Replacement", "Arthroscopy", "Sports Medicine", "Noida"],
    id: "dr-vaibhav-jain",
    name: "Dr. Vaibhav Jain",
    yearsOfExperience: 15,
    designation: "Orthopedic Surgeon and Joint Replacement Specialist",
    image: "/doctors/dr-vaibhav-jain.webp",
    workingAt: "Vishwasth Clinic, Noida",
    hospitalId: "vishwasth-clinic-noida",
    about: {
      title: "About Dr. Vaibhav Jain",
      items: [
        {
          content: "Dr. Vaibhav Jain is a leading orthopedic surgeon with over 15 years of experience, specializing in joint replacement surgeries. He has performed more than 5,000 joint replacements using navigation and robotics. Dr. Jain is proficient in Oxford partial knee replacement and minimally invasive hip replacement with bone conservation."
        },
        {
          content: "He graduated from Ravindra Nath Tagore Medical College, Udaipur, and completed his MS in Orthopaedics from Sardar Patel Medical College, Bikaner. Dr. Jain further honed his skills as a Senior Resident in the Department of Orthopaedics at AIIMS, New Delhi, and trained at the National University Hospital in Singapore."
        },
        {
          content: "Currently, Dr. Jain practices at Vishwasth Clinic in Sector 104, Noida. He has also been associated with esteemed institutions like Moolchand Hospital and Medeor (Rockland) Hospital in South Delhi."
        }
      ]
    },
    specialties: [
      "Joint Replacement Surgery",
      "Arthroscopy",
      "Hip Arthroplasty",
      "Knee Arthroplasty",
      "Revision Hip and Knee Arthroplasty"
    ],
    skilledAt: [
      "Performing joint replacement surgeries using navigation and robotics",
      "Conducting Oxford partial knee replacements",
      "Executing minimally invasive hip replacements with bone conservation",
      "Managing arthritis and related pain",
      "Treating fractures and back pain"
    ],
    specialInterests: [
      "Advancements in joint replacement techniques",
      "Navigation and robotic-assisted surgeries",
      "Minimally invasive orthopedic procedures"
    ],
    education: [
      "MBBS from University of Rajasthan, Jaipur, 2005",
      "MS in Orthopaedics from Rajasthan University of Health Science, Jaipur, 2010",
      "Clinical Fellow in Orthopaedic Surgery from NUHS, CREST, Singapore, 2015"
    ],
    experience: [
      "Senior Resident at AIIMS, New Delhi (2010-2014)",
      "Fellow in Joint Replacement at National University Hospital, Singapore (2014-2015)",
      "Consultant at Primus Hospital, New Delhi (2015-2020)",
      "Senior Consultant at VIMHANS Nayati Superspeciality Hospital, New Delhi (2020-2022)",
      "Senior Consultant at Moolchand Hospital, New Delhi (2022-2023)"
    ],
    awards: [
      "Asia Pacific Fellow, 2014",
      "Diploma in Tissue Banking from National University Hospital, Singapore, 2015",
      "Reviewer for 'International Journal of Knee Surgery' (Indexed), 2018"
    ],
    reviews: []
  },
  {
    tags: ["Thoracic Surgery", "Lung Transplantation", "Robotic Surgery", "Minimally Invasive Surgery", "Gurgaon"],
    id: "dr-arvind-kumar",
    name: "Dr. Arvind Kumar",
    yearsOfExperience: 36,
    designation: "Chairman, Institute of Chest Surgery, Chest Onco-Surgery, and Lung Transplantation",
    image: "/doctors/dr-arvind-kumar.webp",
    workingAt: "Medanta - The Medicity, Gurgaon",
    hospitalId: "medanta-the-medicity-gurgaon",
    about: {
      title: "About Dr. Arvind Kumar",
      items: [
        {
          content: "Dr. Arvind Kumar is a distinguished thoracic surgeon with over 36 years of experience, specializing in surgical diseases of the chest, including the lungs, pleura, mediastinum, trachea, esophagus, chest wall, and diaphragm. He has performed over 15,000 thoracic surgeries, with more than 8,000 utilizing minimally invasive techniques such as Video-Assisted Thoracic Surgery (VATS) and robotic methods. "
        },
        {
          content: "He leads India's largest and most comprehensive chest surgery program, offering state-of-the-art surgical care for various chest ailments. Dr. Kumar has extensive experience in managing thymic diseases like myasthenia gravis and thymoma, including the country's largest series of robotic thymectomies with exceptional success rates. "
        },
        {
          content: "Dr. Kumar has been instrumental in pioneering chest and robotic chest surgery in India, working tirelessly since the late 1980s to develop this specialty. He played a key role in having thoracic surgery recognized as a stand-alone super-specialty by the National Board in 2014. :contentReference[oaicite:0]{index=0}"
        },
        {
          content: "In recognition of his contributions to medicine, Dr. Kumar was honored with the prestigious Dr. B.C. Roy National Award by the Government of India in 2014, in the category of 'Eminent Medical Person of the Year.' "
        }
      ]
    },
    specialties:[
      "Key-Hole (VATS) Surgery of the Chest",
      "VATS Surgery for Lung Cancer",
      "Tracheal Resections for Stenosis and Tumors",
      "Lung and Esophageal Cancers"
    ],
    skilledAt: [
      "Performing complex thoracic surgeries",
      "Utilizing minimally invasive surgical techniques",
      "Managing thymic diseases",
      "Conducting robotic chest surgeries",
      "Treating tracheal stenosis and tumors"
    ],
    specialInterests: [
      "Advancements in robotic thoracic surgery",
      "Minimally invasive techniques in chest surgery",
      "Surgical management of myasthenia gravis"
    ],
    education: [
      "MBBS from All India Institute of Medical Sciences (AIIMS), New Delhi",
      "MS in Surgery from AIIMS, New Delhi",
      "MNAMS",
      "FUICC",
      "FACS",
      "FICS",
      "FIAGES"
    ],
    experience: [
      "Chairman, Institute of Chest Surgery, Chest Onco-Surgery, and Lung Transplantation at Medanta - The Medicity, Gurgaon",
      "Co-Chairman, Medanta Robotic Institute at Medanta - The Medicity, Gurgaon",
      "Professor of Surgery at AIIMS, New Delhi",
      "Established the Institute of Chest Surgery at Medanta",
      "Pioneered robotic chest surgery in India"
    ],
    awards: [
      "Dr. B.C. Roy National Award by the Government of India, 2014",
      "National President, The Association of Surgeons of India, 2019",
      "National Honorary Secretary, The Association of Surgeons of India, 2009",
      "Fakhr-e-Hind (Pride of Nation) Award, 2006",
      "Raj Nanda Fellowship by the Raj Nanda Pulmonary Disease Research Trust in association with the British Thoracic Society, 1999"
    ],
    reviews: []
  }
  


];
