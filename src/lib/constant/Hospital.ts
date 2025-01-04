import { Hospital } from "@/types/hospital";

export const hospitalData: Hospital[] = [
  {
    id: "max-super-speciality-hospital-saket",
    name: "Max Super Speciality Hospital, Saket",
    mainImage: "/hospital/max-super-speciality-hospital-saket.webp",
    images: [
     "/hospital/max-super-speciality-hospital-saket1.webp",
     "/hospital/max-super-speciality-hospital-saket2.webp",
     "/hospital/max-super-speciality-hospital-saket3.webp",
     "/hospital/max-super-speciality-hospital-saket4.webp",
    ],
    about: {
      title: "About Max Super Speciality Hospital, Saket",
      items: [
        {
          content: "Established in 2005, Max Super Speciality Hospital, Saket, is considered one of the best hospitals in the country.",
          isHighlighted: true
        },
        {
          content: "The hospital is accredited with NABH and JCI and provides the highest quality of patient safety and care."
        },
        {
          content: "It is a regional hub for complex procedures, including targeted cancer treatments, neurovascular intervention, heart surgeries, orthopaedic surgeries, liver & kidney transplants, and fertility treatments."
        },
        {
          content: "Max Institute of Minimal Access and Bariatric Surgery, Saket is accredited as the First and Founder Center of Excellence in ‘Metabolic & Bariatric Surgery’ (2011 - 2014) by the Surgical Review Corporation, USA."
        },
        {
          content: "Max Hospital has also received many awards, including:",
          subItems: [
            "Awarded for its initiatives towards customer experience improvement & for patient safety at FICCI Healthcare Excellence Awards",
            "Express Healthcare Awards for Excellence in Healthcare",
            "Honoured with the First Global Green OT Accreditation",
            "D L Shah National Award on 'Economics of Quality' by Quality Council of India"
          ]
        },
        {
          content: "International Patient Services - With highly experienced, internationally renowned doctors and advanced medical technology, the hospital provides tailored services to ensure a seamless experience for international patients."
        }
      ]
    },
    established: 2005,
    numberOfBeds: 539,
    specialties: [
      "Cardiology and Cardiac Surgery",
      "Cosmetic and Plastic Surgery",
      "Endocrinology",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hematology",
      "Hepatology",
      "IVF and Infertility",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Ophthalmology",
      "Orthopedics",
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Spine Surgery",
      "Transplant Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    teamSpecialties: [
      "Cardiology and Cardiac Surgery",
      "Oncology and Oncosurgery",
      "Orthopedics",
      "Neurology and Neurosurgery",
      "Gastroenterology"
    ],
    facilities: [
      "24/7 Emergency Services",
      "Advanced Diagnostic Imaging",
      "International Patient Services",
      "State-of-the-art Operation Theatres",
      "Intensive Care Units",
      "Blood Bank",
      "Pharmacy",
      "Ambulance Services"
    ],
    infrastructure: [
      "It offers various state-of-the-art diagnostic and therapeutic technologies, including the first in Asia and India. ",
      "It is divided into two blocks: East Block (a unit of Devki Devi Foundation) and West Block (a unit of MHIL—Max Healthcare Institute Limited).",
      "The 539+ bed facility comprises: Neonatal ICU (NICU) & Pediatric ICU (PICU), TrueBeam Linac with Exactrac, Bi-Plane Digital Cath Lab,Holmium Laser ,Da Vinci Xi Robotic System ,4D ECHO Machine,LINAC ,MRI 3.0 Tesla,Novalis Tx",
      "539 beds capacity",
      "Advanced diagnostic devices such as 256 Slice CT Angio, 3.0 Tesla digital broadband MRI, Cath Labs with electrophysiology navigation, and a flat panel C-Arm detector",
      "Specialized centers for complex procedures including targeted cancer treatments, neurovascular intervention, heart surgeries, orthopaedic surgeries, liver & kidney transplants, and fertility treatments"
    ],
    address: {
      fullAddress: "1, 2, Press Enclave Road, Saket, New Delhi, Delhi 110017, India",
      city: "Delhi",
      country: "India",
      pinCode: "110017",
      location: {
        lat: 28.528157,
        lng: 77.219856
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located in the Saket neighborhood of New Delhi, known for being a medical hub in India."
        }
      ]
    },
    departments: [
      "Cardiology and Cardiac Surgery",
      "Cosmetic and Plastic Surgery",
      "Endocrinology",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hematology",
      "Hepatology",
      "IVF and Infertility",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Ophthalmology",
      "Orthopedics",
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Spine Surgery",
      "Transplant Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    doctors: [
      {
        id: "dr-harit-chaturvedi",
        name: "Dr. Harit Chaturvedi",
        designation: "Chairman",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Harit%20Chaturvedi.jpg"
      },
      {
        id: "dr-manju-agarwal",
        name: "Dr. Manju Agarwal",
        designation: "Director",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Manju%20Agarwal.jpg"
      },
      {
        id: "dr-vedant-kabra",
        name: "Dr. Vedant Kabra",
        designation: "Head of Department",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Vedant%20Kabra.jpg"
      }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Max Hospital Saket were highly professional and caring. Great facilities and excellent care."
      },
      {
        name: "Priya Sharma",
        date: "2023-04-30",
        rating: 4,
        content: "Good hospital with advanced medical facilities, but sometimes the wait time is long."
      }
    ]
  },
  {
    id: "max-super-speciality-hospital-gurgaon",
    name: "Max Super Specialty Hospital, Gurgaon",
    mainImage: "/hospital/max-super-speciality-hospital-gurgaon.webp",
    images: [
      "/hospital/max-super-speciality-hospital-gurgaon1.webp",
      "/hospital/max-super-speciality-hospital-gurgaon2.webp",
      "/hospital/max-super-speciality-hospital-gurgaon3.webp",
      "/hospital/max-super-speciality-hospital-gurgaon4.webp",
      "/hospital/max-super-speciality-hospital-gurgaon5.webp",
    ],
    about: {
      title: "About Max Super Specialty Hospital, Gurgaon",
      items: [
        {
          content: "Established in 2007, Max Super Specialty Hospital in Gurgaon is a leading multi-speciality quaternary healthcare centre and one of the largest hospitals in North India.",
          isHighlighted: true
        },
        {
          content: "The hospital is associated with Max Healthcare, India's premier provider of world-class healthcare services."
        },
        {
          content: "It has been accredited with NABH, NABL, AACI, and QAI, showcasing its expertise in providing quality care to its patients."
        },
        {
          content: "The hospital has received several awards, including:",
          subItems: [
            "Operational Excellence Healthcare Award by FICCI Healthcare",
            "Healthcare Leadership Award by ABP News",
            "India’s Most Trusted Healthcare Award: Pulmonary and Critical Care by Healthcare Awards, 2019",
            "Best IVF Clinic in India by ET World National Fertility",
            "Centre of Excellence for Bariatric Surgery by Surgical Review Corporation",
            "Best Integrated Care Award (Quaternary Care) by ET Fertility Awards"
          ]
        },
        {
          content: "International Patient Services: The hospital ensures a seamless medical journey for international patients by assisting with visa and travel arrangements, providing interpreter services, organizing accommodations and meals, and ensuring reliable follow-ups."
        }
      ]
    },
    established: 2007,
    numberOfBeds: 104,
    specialties: [
      "Cardiology and Cardiac Surgery",
      "Cosmetic and Plastic Surgery",
      "Endocrinology",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hepatology",
      "IVF and Infertility",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Ophthalmology",
      "Orthopedics",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Spine Surgery",
      "Transplant Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    teamSpecialties: [
      "Cardiology and Cardiac Surgery",
      "Oncology and Oncosurgery",
      "Orthopedics",
      "Neurology and Neurosurgery",
      "Gastroenterology"
    ],
    facilities: [
      "24/7 Emergency Services",
      "Advanced Diagnostic Imaging",
      "International Patient Services",
      "State-of-the-art Operation Theatres",
      "Intensive Care Units",
      "Blood Bank",
      "Pharmacy",
      "Ambulance Services"
    ],
    infrastructure: [
      "The hospital offers various state-of-the-art diagnostic and therapeutic technologies.",
      "It has a 104-bed capacity.",
      "Advanced diagnostic devices such as 256 Slice CT Angio, 3.0 Tesla digital broadband MRI, Cath Labs with electrophysiology navigation, and a flat panel C-Arm detector.",
      "Specialized centers for complex procedures including targeted cancer treatments, neurovascular intervention, heart surgeries, orthopedic surgeries, liver & kidney transplants, and fertility treatments."
    ],
    address: {
      fullAddress: "B Block, Sushant Lok 1, Near Huda City Centre Metro Station, Gurgaon, Haryana 122001, India",
      city: "Gurgaon",
      country: "India",
      pinCode: "122001",
      location: {
        lat: 28.4595,
        lng: 77.0266
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located in the Sushant Lok 1 area of Gurgaon, near the Huda City Centre Metro Station."
        }
      ]
    },
    departments: [
      "Cardiology and Cardiac Surgery",
      "Cosmetic and Plastic Surgery",
      "Endocrinology",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hepatology",
      "IVF and Infertility",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Ophthalmology",
      "Orthopedics",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Spine Surgery",
      "Transplant Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    doctors: [
      {
        id: "dr-mayank-chawla",
        name: "Dr. Mayank Chawla",
        designation: "Senior Consultant",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Mayank%20Chawla.jpg"
      },
      {
        id: "dr-kaushal-madan",
        name: "Dr. Kaushal Madan",
        designation: "Director",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Kaushal%20Madan.jpg"
      },
      {
        id: "dr-sunil-prakash",
        name: "Dr. Sunil Prakash",
        designation: "Director",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Sunil%20Prakash.jpg"
      },
      {
        id: "dr-ambrish-mithal",
        name: "Dr. Ambrish Mithal",
        designation: "Chairman",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Ambrish%20Mithal.jpg"
      }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Max Hospital Saket were highly professional and caring. Great facilities and excellent care."
      },
      {
        name: "Priya Sharma",
        date: "2023-04-30",
        rating: 4,
        content: "Good hospital with advanced medical facilities, but sometimes the wait time is long."
      }
    ]
  },
  {
    id: "max-super-speciality-hospital-patparganj",
    name: "Max Super Speciality Hospital, Patparganj",
    mainImage: "/hospital/max-super-speciality-hospital-patparganj.webp",
    images: [
      "/hospital/max-super-speciality-hospital-patparganj1.webp",
      "/hospital/max-super-speciality-hospital-patparganj2.webp",
      "/hospital/max-super-speciality-hospital-patparganj3.webp",
      "/hospital/max-super-speciality-hospital-patparganj4.webp",
      "/hospital/max-super-speciality-hospital-patparganj5.webp",
      "/hospital/max-super-speciality-hospital-patparganj6.webp",
    ],
    about: {
      title: "About Max Super Speciality Hospital, Patparganj",
      items: [
        {
          content: "Established in 2001, Max Super Speciality Hospital, Patparganj, is East Delhi's first multispecialty tertiary care centre.",
          isHighlighted: true
        },
        {
          content: "The hospital is accredited by NABH and NABL, ensuring the highest standard of healthcare."
        },
        {
          content: "Recognized as a leader in healthcare with multiple awards and industry accreditations for world-class infrastructure, advanced technology, and health and safety standards."
        },
        {
          content: "India's first super speciality hospital to receive AACI accreditation."
        },
        {
          content: "North & West India's first and India's third QAI-accredited Advanced Brain Stroke Centre."
        },
        {
          content: "Received the Operational Excellence Award for Environment Conservation by FICCI in 2007."
        },
        {
          content: "One of the five ISO 9001:2000 certified Max Healthcare Hospitals."
        },
        {
          content: "Recognized by HIMSS as 'Stage 6' for its advanced healthcare IT capabilities."
        },
        {
          content: "Performed over 30,000 primary and advanced surgeries since its inception."
        },
        {
          content: "International Patient Services: Provides tailored services for international patients to ensure a seamless experience with highly experienced, internationally renowned doctors and a patient-centric approach."
        }
      ]
    },
    established: 2001,
    numberOfBeds: 400,
    specialties: [
      "Cardiology and Cardiac Surgery",
      "Cosmetic and Plastic Surgery",
      "Dental Treatment",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hematology",
      "Hepatology",
      "IVF and Infertility",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Orthopedics",
      "Pediatrics and Pediatric Surgery",
      "Transplant Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    teamSpecialties: [
      "Cardiology and Cardiac Surgery",
      "Oncology and Oncosurgery",
      "Orthopedics",
      "Neurology and Neurosurgery",
      "Gastroenterology"
    ],
    facilities: [
      "24/7 Emergency Services",
      "Advanced Diagnostic Imaging",
      "International Patient Services",
      "State-of-the-art Operation Theatres",
      "Intensive Care Units",
      "Blood Bank",
      "Pharmacy",
      "Ambulance Services"
    ],
    infrastructure: [
      "Offers various state-of-the-art diagnostic and therapeutic technologies, including the first in Asia and India.",
      "Divided into two blocks: East Block (a unit of Devki Devi Foundation) and West Block (a unit of MHIL—Max Healthcare Institute Limited).",
      "The 400-bed facility comprises: Neonatal ICU (NICU) & Pediatric ICU (PICU), TrueBeam Linac with Exactrac, Bi-Plane Digital Cath Lab, Holmium Laser, Da Vinci Xi Robotic System, 4D ECHO Machine, LINAC, MRI 3.0 Tesla, Novalis Tx.",
      "Advanced diagnostic devices such as 256 Slice CT Angio, 3.0 Tesla digital broadband MRI, Cath Labs with electrophysiology navigation, and a flat panel C-Arm detector.",
      "Specialized centers for complex procedures including targeted cancer treatments, neurovascular intervention, heart surgeries, orthopedic surgeries, liver & kidney transplants, and fertility treatments."
    ],
    address: {
      fullAddress: "108A, I.P. Extension, Patparganj, New Delhi, Delhi 110092, India",
      city: "Delhi",
      country: "India",
      pinCode: "110092",
      location: {
        lat: 28.6277,
        lng: 77.2905
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located in the Patparganj area of New Delhi, providing easy access to patients from East Delhi and surrounding regions."
        }
      ]
    },
    departments: [
      "Cardiology and Cardiac Surgery",
      "Cosmetic and Plastic Surgery",
      "Dental Treatment",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hematology",
      "Hepatology",
      "IVF and Infertility",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Orthopedics",
      "Pediatrics and Pediatric Surgery",
      "Transplant Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    doctors: [
      {
        id: "dr-harit-chaturvedi",
        name: "Dr. Harit Chaturvedi",
        designation: "Chairman",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Harit%20Chaturvedi.jpg"
      },
      {
        id: "dr-anil-arora",
        name: "Dr. Anil Arora",
        designation: "Associate Director",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Anil%20Arora.jpg"
      },
      {
        id: "dr-pawan-kesarwani",
        name: "Dr. Pawan Kesarwani",
        designation: "Consultant",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Pawan%20Kesarwani.jpg"
      },
      {
        id: "dr-dilip-bhalla",
        name: "Dr. Dilip Bhalla",
        designation: "Senior Consultant",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Dilip%20Bhalla.jpg"
      }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Max Hospital Saket were highly professional and caring. Great facilities and excellent care."
      },
      {
        name: "Priya Sharma",
        date: "2023-04-30",
        rating: 4,
        content: "Good hospital with advanced medical facilities, but sometimes the wait time is long."
      }
    ]
  },
  {
    id: "max-super-speciality-hospital-vaishali",
    name: "Max Super Speciality Hospital, Vaishali",
    mainImage: "/hospital/max-super-speciality-hospital-vaishali.webp",
    images: [
      "/hospital/max-super-speciality-hospital-vaishali1.webp",
      "/hospital/max-super-speciality-hospital-vaishali2.webp",
      "/hospital/max-super-speciality-hospital-vaishali3.webp",
      "/hospital/max-super-speciality-hospital-vaishali4.webp",
    ],
    about: {
      title: "About Max Super Speciality Hospital, Vaishali",
      items: [
        {
          content: "Established in 1985, Max Super Speciality Hospital, Vaishali, is a leading healthcare provider in the Delhi-NCR region.",
          isHighlighted: true
        },
        {
          content: "The hospital is accredited by NABH and NABL, ensuring high standards of patient care and safety."
        },
        {
          content: "Recognized for its world-class infrastructure, advanced technology, and stringent health and safety standards."
        },
        {
          content: "Part of the Max Super Speciality Hospital chain, comprising 17 hospitals in North India."
        },
        {
          content: "Awards and Recognitions:",
          subItems: [
            "Best Multi-Specialty Hospital in Delhi NCR by ET Now in 2019.",
            "Excellence in Patient Care award by CIMS in 2018.",
            "Best Hospital in Quality Care by AHPI in 2017.",
            "Best Super Specialty Hospital in NCR by Times Health in 2016.",
            "Best Hospital in North India by CNBC in 2015."
          ]
        },
        {
          content: "International Patient Services: Offers comprehensive services including appointment scheduling, visa and travel arrangements, interpreter facilities, accommodation, and follow-up care."
        }
      ]
    },
    established: 1985,
    numberOfBeds: 350,
    specialties: [
      "Aesthetic and Reconstructive Surgery",
      "Orthopedics and Joint Replacement",
      "Cardiac Sciences",
      "Oncology",
      "Nephrology and Kidney Transplant",
      "Gastroenterology",
      "Neurology and Neurosurgery",
      "Urology",
      "Pulmonology",
      "Endocrinology and Diabetes"
    ],
    teamSpecialties: [
      "Cardiac Sciences",
      "Oncology",
      "Orthopedics",
      "Neurology and Neurosurgery",
      "Gastroenterology"
    ],
    facilities: [
      "24/7 Emergency Services",
      "Advanced Diagnostic Imaging",
      "International Patient Services",
      "State-of-the-art Operation Theatres",
      "Intensive Care Units",
      "Blood Bank",
      "Pharmacy",
      "Ambulance Services"
    ],
    infrastructure: [
      "State-of-the-art diagnostic and therapeutic technologies.",
      "350-bed facility with specialized units including Neonatal ICU (NICU) & Pediatric ICU (PICU).",
      "Advanced diagnostic devices such as 256 Slice CT Angio, 3.0 Tesla digital broadband MRI, and Cath Labs with electrophysiology navigation.",
      "Specialized centers for complex procedures including targeted cancer treatments, neurovascular intervention, heart surgeries, orthopedic surgeries, liver & kidney transplants, and fertility treatments."
    ],
    address: {
      fullAddress: "W-3, Sector-1, Vaishali, Ghaziabad, Uttar Pradesh 201012, India",
      city: "Ghaziabad",
      country: "India",
      pinCode: "201012",
      location: {
        lat: 28.644800,
        lng: 77.333200
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located in Vaishali, Ghaziabad, providing easy access to patients from Delhi-NCR and surrounding regions."
        }
      ]
    },
    departments: [
      "Aesthetic and Reconstructive Surgery",
      "Orthopedics and Joint Replacement",
      "Cardiac Sciences",
      "Oncology",
      "Nephrology and Kidney Transplant",
      "Gastroenterology",
      "Neurology and Neurosurgery",
      "Urology",
      "Pulmonology",
      "Endocrinology and Diabetes"
    ],
    doctors: [
      {
        id: "dr-rajesh-dey",
        name: "Dr. Rajesh Dey",
        designation: "Hepato-Pancreato-Biliary Surgeon",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Rajesh%20Dey.jpg"
      },
      {
        id: "dr-amit-sharma",
        name: "Dr. Amit Sharma",
        designation: "General Surgeon",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Amit%20Sharma.jpg"
      },
      {
        id: "dr-manish-vaish",
        name: "Dr. Manish Vaish",
        designation: "Neurosurgeon",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Manish%20Vaish.jpg"
      },
      {
        id: "dr-vimal-dassi",
        name: "Dr. Vimal Dassi",
        designation: "Urologist",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Vimal%20Dassi.jpg"
      }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Max Hospital Saket were highly professional and caring. Great facilities and excellent care."
      },
      {
        name: "Priya Sharma",
        date: "2023-04-30",
        rating: 4,
        content: "Good hospital with advanced medical facilities, but sometimes the wait time is long."
      }
    ]
  },
  {
    id: "blk-super-speciality-hospital-new-delhi",
    name: "BLK Super Speciality Hospital, Delhi",
    mainImage: "/hospital/blk-super-speciality-hospital-new-delhi.webp",
    images: [
      "/hospital/blk-super-speciality-hospital-new-delhi.webp",
      "/hospital/blk-super-speciality-hospital-new-delhi1.webp",
      "/hospital/blk-super-speciality-hospital-new-delhi2.webp",
      "/hospital/blk-super-speciality-hospital-new-delhi3.webp",
    ],
    about: {
      title: "About BLK Super Speciality Hospital, Delhi",
      items: [
        {
          content: "Established in 1959, BLK Super Speciality Hospital is one of the oldest and most renowned healthcare institutions in India.",
          isHighlighted: true
        },
        {
          content: "The hospital is accredited by JCI, NABH, and NABL, ensuring the highest standards of patient care and safety."
        },
        {
          content: "Recognized for its world-class infrastructure, advanced technology, and stringent health and safety standards."
        },
        {
          content: "Part of the BLK-Max Super Speciality Hospital chain, comprising multiple hospitals across India."
        },
        {
          content: "Awards and Recognitions:",
          subItems: [
            "Best Multi-Speciality Hospital in Delhi NCR by ET Healthworld Hospital Awards.",
            "Quality Beyond Accreditation award in AHPI 2020 at Bengaluru.",
            "Gold Award at Hospital Management Asia (HMA) in Bangkok (2013) and HMA Awards 2014.",
            "Best Patient Experience Technology Innovation Award in 2019.",
            "MEDCON 2016 Awards by ASSOCHAM."
          ]
        },
        {
          content: "International Patient Services: Offers comprehensive services including appointment scheduling, visa and travel arrangements, interpreter facilities, accommodation, and follow-up care."
        }
      ]
    },
    established: 1959,
    numberOfBeds: 650,
    specialties: [
      "Cardiology and Cardiac Surgery",
      "Cosmetic and Plastic Surgery",
      "Dermatology",
      "Endocrinology",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hematology",
      "Hepatology",
      "IVF and Infertility",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Ophthalmology",
      "Orthopedics",
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Spine Surgery",
      "Transplant Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    teamSpecialties: [
      "Cardiology and Cardiac Surgery",
      "Oncology and Oncosurgery",
      "Orthopedics",
      "Neurology and Neurosurgery",
      "Gastroenterology"
    ],
    facilities: [
      "24/7 Emergency Services",
      "Advanced Diagnostic Imaging",
      "International Patient Services",
      "State-of-the-art Operation Theatres",
      "Intensive Care Units",
      "Blood Bank",
      "Pharmacy",
      "Ambulance Services"
    ],
    infrastructure: [
      "State-of-the-art diagnostic and therapeutic technologies.",
      "650-bed facility with specialized units including Neonatal ICU (NICU) & Pediatric ICU (PICU).",
      "Advanced diagnostic devices such as 256 Slice CT Angio, 3.0 Tesla digital broadband MRI, and Cath Labs with electrophysiology navigation.",
      "Specialized centers for complex procedures including targeted cancer treatments, neurovascular intervention, heart surgeries, orthopedic surgeries, liver & kidney transplants, and fertility treatments."
    ],
    address: {
      fullAddress: "Pusa Road, New Delhi, Delhi 110005, India",
      city: "Delhi",
      country: "India",
      pinCode: "110005",
      location: {
        lat: 28.639800,
        lng: 77.189500
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located on Pusa Road in New Delhi, providing easy access to patients from Delhi-NCR and surrounding regions."
        }
      ]
    },
    departments: [
      "Cardiology and Cardiac Surgery",
      "Cosmetic and Plastic Surgery",
      "Dermatology",
      "Endocrinology",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hematology",
      "Hepatology",
      "IVF and Infertility",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Ophthalmology",
      "Orthopedics",
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Spine Surgery",
      "Transplant Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    doctors: [
      {
        id: "dr-t-s-kler",
        name: "Dr. T. S. Kler",
        designation: "Chairman",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20T.%20S.%20Kler.jpg"
      },
      {
        id: "dr-anil-kumar-kansal",
        name: "Dr. Anil Kumar Kansal",
        designation: "Head of Department",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Anil%20Kumar%20Kansal.jpg"
      },
      {
        id: "dr-puneet-girdhar",
        name: "Dr. Puneet Girdhar",
        designation: "Head of Department",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Puneet%20Girdhar.jpg"
      },
      {
        id: "dr-amit-kumar-singhal",
        name: "Dr. Amit Kumar Singhal",
        designation: "Associate Director",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Amit%20Kumar%20Singhal.jpg"
      }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Max Hospital Saket were highly professional and caring. Great facilities and excellent care."
      },
      {
        name: "Priya Sharma",
        date: "2023-04-30",
        rating: 4,
        content: "Good hospital with advanced medical facilities, but sometimes the wait time is long."
      }
    ]
  },
  {
    id: "fortis-escorts-heart-institute-new-delhi",
    name: "Fortis Escorts Heart Institute, Delhi",
    mainImage: "/hospital/fortis-escorts-heart-institute-new-delhi.webp",
    images: [
      "/hospital/fortis-escorts-heart-institute-new-delhi1.webp",
      "/hospital/fortis-escorts-heart-institute-new-delhi2.webp",
      "/hospital/fortis-escorts-heart-institute-new-delhi3.webp",
      "/hospital/fortis-escorts-heart-institute-new-delhi4.webp",
    ],
    about: {
      title: "About Fortis Escorts Heart Institute, Delhi",
      items: [
        {
          content: "Established in 1988, Fortis Escorts Heart Institute (FEHI) is recognized worldwide for its clinical excellence in cardiac care.",
          isHighlighted: true
        },
        {
          content: "The hospital has received numerous accolades for excellence in patient care and medical innovation."
        },
        {
          content: "It is the first hospital in India to conduct Transcatheter Aortic Valve Implantation (TAVI) and bioresorbable vascular scaffold (BVS)."
        },
        {
          content: "FEHI set a Guinness World Record for organizing the largest-ever initiative to test cholesterol levels in the NCR region to combat heart disease."
        },
        {
          content: "International Patient Services: FEHI provides affordable healthcare services for international patients, with a global reach covering 175+ countries and 20+ international government tie-ups."
        }
      ]
    },
    established: 1988,
    numberOfBeds: 310,
    specialties: [
      "Cardiology and Cardiac Surgery",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hepatology",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Orthopedics",
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Routine Health Check-ups",
      "Spine Surgery",
      "Transplant Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    teamSpecialties: [
      "Cardiology and Cardiac Surgery",
      "Oncology and Oncosurgery",
      "Orthopedics",
      "Neurology and Neurosurgery",
      "Gastroenterology"
    ],
    facilities: [
      "24/7 Emergency Services",
      "Advanced Diagnostic Imaging",
      "International Patient Services",
      "State-of-the-art Operation Theatres",
      "Intensive Care Units",
      "Blood Bank",
      "Pharmacy",
      "Ambulance Services"
    ],
    infrastructure: [
      "State-of-the-art diagnostic and therapeutic technologies.",
      "310-bed facility with specialized units including Neonatal ICU (NICU) & Pediatric ICU (PICU).",
      "Advanced diagnostic devices such as 256 Slice CT Angio, 3.0 Tesla digital broadband MRI, and Cath Labs with electrophysiology navigation.",
      "Specialized centers for complex procedures including targeted cancer treatments, neurovascular intervention, heart surgeries, orthopedic surgeries, liver & kidney transplants, and fertility treatments."
    ],
    address: {
      fullAddress: "Okhla Road, New Delhi, Delhi 110025, India",
      city: "Delhi",
      country: "India",
      pinCode: "110025",
      location: {
        lat: 28.5623,
        lng: 77.2906
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located on Okhla Road in New Delhi, providing easy access to patients from Delhi-NCR and surrounding regions."
        }
      ]
    },
    departments: [
      "Cardiology and Cardiac Surgery",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hepatology",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Orthopedics",
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Routine Health Check-ups",
      "Spine Surgery",
      "Transplant Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    doctors: [
      {
        id: "dr-ashok-seth",
        name: "Dr. Ashok Seth",
        designation: "Chairman",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Ashok%20Seth.jpg"
      },
      {
        id: "dr-z-s-meharwal",
        name: "Dr. Z S Meharwal",
        designation: "Director",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Z%20S%20Meharwal.jpg"
      },
      {
        id: "dr-krishna-s-iyer",
        name: "Dr. Krishna S Iyer",
        designation: "Director",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Krishna%20S%20Iyer.jpg"
      },
      {
        id: "dr-aparna-jaswal",
        name: "Dr. Aparna Jaswal",
        designation: "Principal Consultant",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Aparna%20Jaswal.jpg"
      }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Max Hospital Saket were highly professional and caring. Great facilities and excellent care."
      },
      {
        name: "Priya Sharma",
        date: "2023-04-30",
        rating: 4,
        content: "Good hospital with advanced medical facilities, but sometimes the wait time is long."
      }
    ]
  },
  {
    id: "fortis-memorial-research-institute-gurgaon",
    name: "Fortis Memorial Research Institute, Gurgaon",
    mainImage: "/hospital/fortis-memorial-research-institute-gurgaon.webp",
    images: [
      "/hospital/fortis-memorial-research-institute-gurgaon1.webp",
      "/hospital/fortis-memorial-research-institute-gurgaon2.webp",
      "/hospital/fortis-memorial-research-institute-gurgaon3.webp",
      "/hospital/fortis-memorial-research-institute-gurgaon4.webp",
    ],
    about: {
      title: "About Fortis Memorial Research Institute, Gurgaon",
      items: [
        {
          content: "Established in 2001, Fortis Memorial Research Institute (FMRI) is a multi-super speciality quaternary care hospital equipped with a team of reputed clinicians, including superspecialists and speciality nurses, supported by cutting-edge technology.",
          isHighlighted: true
        },
        {
          content: "The hospital is accredited by JCI, NABH, and NABL, ensuring the highest standards of patient care and safety."
        },
        {
          content: "FMRI has received recognition for excellence in Bone Marrow Transplant at the Bangladesh International Healthcare Expo in 2023."
        }
      ]
    },
    established: 2001,
    numberOfBeds: 310,
    specialties: [
      "Cardiology and Cardiac Surgery",
      "Cosmetic and Plastic Surgery",
      "Dental Treatment",
      "Dermatology",
      "Endocrinology",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hematology",
      "Hepatology",
      "IVF and Infertility",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Ophthalmology",
      "Orthopedics",
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Rheumatology",
      "Routine Health Check-ups",
      "Spine Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    teamSpecialties: [
      "Cardiology and Cardiac Surgery",
      "Oncology and Oncosurgery",
      "Orthopedics",
      "Neurology and Neurosurgery",
      "Gastroenterology"
    ],
    facilities: [
      "24/7 Emergency Services",
      "Advanced Diagnostic Imaging",
      "International Patient Services",
      "State-of-the-art Operation Theatres",
      "Intensive Care Units",
      "Blood Bank",
      "Pharmacy",
      "Ambulance Services"
    ],
    infrastructure: [
      "FMRI is spread over 150,000 square feet of nature-friendly landscape and offers numerous advanced facilities.",
      "The hospital has 310 beds, including 15 operation theatres and 105 ICU beds, along with robotic surgery capabilities.",
      "FMRI houses India's first 'see-through' glass lab for immediate blood sample collection and processing.",
      "It includes two modular operating rooms equipped with devices controlled by a common control panel.",
      "The hospital has a bi-plane cath lab for cardiac and vascular interventions and an advanced cardiac cath lab."
    ],
    address: {
      fullAddress: "Sector - 44, Opposite HUDA City Centre, Gurgaon, 122002, India",
      city: "Gurgaon",
      country: "India",
      pinCode: "122002",
      location: {
        lat: 28.4595,
        lng: 77.0266
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located in Sector - 44, opposite HUDA City Centre in Gurgaon, providing easy access to patients from Delhi-NCR and surrounding regions."
        }
      ]
    },
    departments: [
      "Cardiology and Cardiac Surgery",
      "Cosmetic and Plastic Surgery",
      "Dental Treatment",
      "Dermatology",
      "Endocrinology",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hematology",
      "Hepatology",
      "IVF and Infertility",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Ophthalmology",
      "Orthopedics",
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Rheumatology",
      "Routine Health Check-ups",
      "Spine Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    doctors: [
      {
        id: "dr-ashok-seth",
        name: "Dr. Ashok Seth",
        designation: "Chairman",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Ashok%20Seth.jpg"
      },
      {
        id: "dr-z-s-meharwal",
        name: "Dr. Z S Meharwal",
        designation: "Director",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Z%20S%20Meharwal.jpg"
      },
      {
        id: "dr-krishna-s-iyer",
        name: "Dr. Krishna S Iyer",
        designation: "Director",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Krishna%20S%20Iyer.jpg"
      },
      {
        id: "dr-aparna-jaswal",
        name: "Dr. Aparna Jaswal",
        designation: "Principal Consultant",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Aparna%20Jaswal.jpg"
      }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Max Hospital Saket were highly professional and caring. Great facilities and excellent care."
      },
      {
        name: "Priya Sharma",
        date: "2023-04-30",
        rating: 4,
        content: "Good hospital with advanced medical facilities, but sometimes the wait time is long."
      }
    ]
  },
  {
    id: "fortis-hospital-noida",
    name: "Fortis Hospital, Noida",
    mainImage: "/hospital/fortis-hospital-noida.webp",
    images: [
      "/hospital/fortis-hospital-noida1.webp",
      "/hospital/fortis-hospital-noida2.webp",
      "/hospital/fortis-hospital-noida3.webp",
      "/hospital/fortis-hospital-noida4.webp",
    ],
    about: {
      title: "About Fortis Hospital, Noida",
      items: [
        {
          content: "Established in 2004, Fortis Hospital, Noida, is a NABH-accredited multi-speciality tertiary care hospital providing outstanding medical care across a broad range of specialties.",
          isHighlighted: true
        },
        {
          content: "It is part of Fortis Healthcare Limited, one of India's largest healthcare organizations, listed on the BSE Ltd and the National Stock Exchange (NSE)."
        },
        {
          content: "The hospital has earned the trust of 1.2 million patients and has been ranked among the best private hospitals in Delhi NCR by The Week magazine survey 2019."
        },
        {
          content: "Recognitions include: Diamond Category Award for Brain Stroke management by World Stroke Organisation; Silver & Bronze Awards at Government of India National Energy Conservation Awards; Award of Merit from American Heart Association for being an International Training Centre for ACLS & BLS; Best Super Speciality Hospital in North India at National Business Leadership and Service Excellence Awards; Gold Award at UP State Energy Conservation Awards in 2017; Patient Safety and Quality Award in 2017; Pharmacie De Qualite Gold Certification in 2017."
        },
        {
          content: "The hospital exemplified its expertise by performing a life-saving treatment on a 2-month-old infant diagnosed with the first reported case of Rhodotorula infection along with CMV Meningitis."
        },
        {
          content: "International Patient Services: Fortis Hospital, Noida, provides comprehensive services for international patients, including airport pickup and drop, visa assistance, language interpreters, and foreign exchange conversion at the hospital."
        }
      ]
    },
    established: 2004,
    numberOfBeds: 236,
    specialties: [
      "Cardiology and Cardiac Surgery",
      "Cosmetic and Plastic Surgery",
      "Endocrinology",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hematology",
      "IVF and Infertility",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Ophthalmology",
      "Orthopedics",
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Rheumatology",
      "Routine Health Check-ups",
      "Spine Surgery",
      "Transplant Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    teamSpecialties: [
      "Cardiology and Cardiac Surgery",
      "Oncology and Oncosurgery",
      "Orthopedics",
      "Neurology and Neurosurgery",
      "Gastroenterology"
    ],
    facilities: [
      "24/7 Emergency Services",
      "Advanced Diagnostic Imaging",
      "International Patient Services",
      "State-of-the-art Operation Theatres",
      "Intensive Care Units",
      "Blood Bank",
      "Pharmacy",
      "Ambulance Services"
    ],
    infrastructure: [
      "The hospital offers state-of-the-art diagnostic and therapeutic technologies, including the first in Asia and India.",
      "It is divided into two blocks: East Block (a unit of Devki Devi Foundation) and West Block (a unit of MHIL—Max Healthcare Institute Limited).",
      "The 236-bed facility comprises: Neonatal ICU (NICU) & Pediatric ICU (PICU), TrueBeam Linac with Exactrac, Bi-Plane Digital Cath Lab, Holmium Laser, Da Vinci Xi Robotic System, 4D ECHO Machine, LINAC, MRI 3.0 Tesla, Novalis Tx.",
      "Advanced diagnostic devices such as 256 Slice CT Angio, 3.0 Tesla digital broadband MRI, Cath Labs with electrophysiology navigation, and a flat panel C-Arm detector.",
      "Specialized centers for complex procedures including targeted cancer treatments, neurovascular intervention, heart surgeries, orthopedic surgeries, liver & kidney transplants, and fertility treatments."
    ],
    address: {
      fullAddress: "B-22, Sector 62, Noida, Uttar Pradesh 201301, India",
      city: "Noida",
      country: "India",
      pinCode: "201301",
      location: {
        lat: 28.6295,
        lng: 77.3628
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located in Sector 62, Noida, providing easy access to patients from Delhi-NCR and surrounding regions."
        }
      ]
    },
    departments: [
      "Cardiology and Cardiac Surgery",
      "Cosmetic and Plastic Surgery",
      "Endocrinology",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hematology",
      "IVF and Infertility",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Ophthalmology",
      "Orthopedics",
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Rheumatology",
      "Routine Health Check-ups",
      "Spine Surgery",
      "Transplant Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    doctors: [
      {
        id: "dr-ajay-kaul",
        name: "Dr. Ajay Kaul",
        designation: "Chairman",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Ajay%20Kaul.jpg"
      },
      {
        id: "dr-atul-mishra",
        name: "Dr. Atul Mishra",
        designation: "HOD",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Atul%20Mishra.jpg"
      },
      {
        id: "dr-jalaj-baxi",
        name: "Dr. Jalaj Baxi",
        designation: "Senior Consultant",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Jalaj%20Baxi.jpg"
      },
      {
        id: "dr-rahul-gupta",
        name: "Dr. Rahul Gupta",
        designation: "HOD",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Rahul%20Gupta.jpg"
      }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Max Hospital Saket were highly professional and caring. Great facilities and excellent care."
      },
      {
        name: "Priya Sharma",
        date: "2023-04-30",
        rating: 4,
        content: "Good hospital with advanced medical facilities, but sometimes the wait time is long."
      }
    ]
  },
  {
    id: "medanta-hospital-lucknow",
    name: "Medanta Hospital, Lucknow",
    mainImage: "/hospital/medanta-hospital-lucknow.webp",
    images: [
      "/hospital/medanta-hospital-lucknow1.webp",
      "/hospital/medanta-hospital-lucknow2.webp",
      "/hospital/medanta-hospital-lucknow3.webp",
      "/hospital/medanta-hospital-lucknow4.webp",
    ],
    about: {
      title: "About Medanta Hospital, Lucknow",
      items: [
        {
          content: "Founded by Dr. Naresh Trehan, a renowned cardiovascular and cardiothoracic surgeon, Medanta Hospital in Lucknow is one of the largest multispecialty hospitals in Uttar Pradesh.",
          isHighlighted: true
        },
        {
          content: "The hospital provides a comprehensive range of tertiary healthcare services, adhering to international quality standards and employing cutting-edge infrastructure and medical technology."
        },
        {
          content: "The facility is accredited by prestigious organisations such as the Joint Commission International (JCI) and the National Accreditation Board for Hospitals and Healthcare Providers (NABH)."
        },
        {
          content: "It is also known for its state-of-the-art technology, including North India's first Varian Edge radiosurgery machine, which was launched there."
        },
        {
          content: "Medanta Lucknow is built to deliver high standards of clinical care with a patient-centric approach. It brings together internationally acclaimed doctors, exceptionally trained nurses, and skilled paramedic staff. The facility offers sophisticated infrastructure and advanced technology at an affordable cost."
        },
        {
          content: "International Patient Services: It serves as a top choice for patients seeking world-class, integrated healthcare. Annually, it caters to around 20,000 international patients from over 130 countries, demonstrating its reputation and commitment to providing excellent care on a global scale."
        },
        {
          content: "A special team is dedicated to guiding and serving international patients through every step of their journey. From initial consultations to post-treatment care, the hospital ensures a seamless, supportive experience tailored to meet each patient's unique needs and concerns."
        }
      ]
    },
    established: 2019,
    numberOfBeds: 900,
    specialties: [
      "Cardiology and Cardiac Surgery",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hepatology",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Orthopedics",
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Routine Health Check-ups",
      "Spine Surgery",
      "Transplant Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    teamSpecialties: [
      "Cardiology and Cardiac Surgery",
      "Oncology and Oncosurgery",
      "Orthopedics",
      "Neurology and Neurosurgery",
      "Gastroenterology"
    ],
    facilities: [
      "24/7 Emergency Services",
      "Advanced Diagnostic Imaging",
      "International Patient Services",
      "State-of-the-art Operation Theatres",
      "Intensive Care Units",
      "Blood Bank",
      "Pharmacy",
      "Ambulance Services"
    ],
    infrastructure: [
      "The hospital offers state-of-the-art diagnostic and therapeutic technologies, including the first in Asia and India.",
      "It is divided into two blocks: East Block (a unit of Devki Devi Foundation) and West Block (a unit of MHIL—Max Healthcare Institute Limited).",
      "The 900-bed facility comprises: Neonatal ICU (NICU) & Pediatric ICU (PICU), TrueBeam Linac with Exactrac, Bi-Plane Digital Cath Lab, Holmium Laser, Da Vinci Xi Robotic System, 4D ECHO Machine, LINAC, MRI 3.0 Tesla, Novalis Tx.",
      "Advanced diagnostic devices such as 256 Slice CT Angio, 3.0 Tesla digital broadband MRI, Cath Labs with electrophysiology navigation, and a flat panel C-Arm detector.",
      "Specialized centers for complex procedures including targeted cancer treatments, neurovascular intervention, heart surgeries, orthopedic surgeries, liver & kidney transplants, and fertility treatments."
    ],
    address: {
      fullAddress: "Sector - A, Pocket - 1, Amar Shaheed Path, Golf City, Lucknow, 226030, India",
      city: "Lucknow",
      country: "India",
      pinCode: "226030",
      location: {
        lat: 26.8467,
        lng: 80.9462
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located in Sector - A, Pocket - 1, Amar Shaheed Path, Golf City, Lucknow, providing easy access to patients from Lucknow and surrounding regions."
        }
      ]
    },
    departments: [
      "Cardiology and Cardiac Surgery",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hepatology",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Orthopedics",
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Routine Health Check-ups",
      "Spine Surgery",
      "Transplant Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    doctors: [
      {
        id: "dr-neelam-vinay",
        name: "Dr. Neelam Vinay",
        designation: "Chief",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Neelam%20Vinay.jpg"
      },
      {
        id: "dr-harshvardhan-atreya",
        name: "Dr. Harshvardhan Atreya",
        designation: "Consultant",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Harshvardhan%20Atreya.jpg"
      },
      {
        id: "dr-saif-nabi-shah",
        name: "Dr. Saif Nabi Shah",
        designation: "Director",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Saif%20Nabi%20Shah.jpg"
      },
      {
        id: "dr-dharmendra-singh",
        name: "Dr. Dharmendra Singh",
        designation: "Director",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Dharmendra%20Singh.jpg"
      }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Max Hospital Saket were highly professional and caring. Great facilities and excellent care."
      },
      {
        name: "Priya Sharma",
        date: "2023-04-30",
        rating: 4,
        content: "Good hospital with advanced medical facilities, but sometimes the wait time is long."
      }
    ]
  },
  {
    id: "artemis-hospital-gurgaon",
    name: "Artemis Hospital, Gurgaon",
    mainImage: "/hospital/artemis-hospital-gurgaon.webp",
    images: [
     "/hospital/artemis-hospital-gurgaon1.webp",
     "/hospital/artemis-hospital-gurgaon2.webp",
     "/hospital/artemis-hospital-gurgaon3.webp",
     "/hospital/artemis-hospital-gurgaon4.webp",
    ],
    about: {
      title: "About Artemis Hospital, Gurgaon",
      items: [
        {
          content: "Established in 2007, Artemis Hospital is a premier multi-specialty hospital in Gurgaon, India, spanning across 9 acres.",
          isHighlighted: true
        },
        {
          content: "The hospital has been recognized with NABH, NABL, and JCI accreditations, pioneering among other hospitals in Gurgaon."
        },
        {
          content: "In 2011, it was honored with the Asia Pacific Hand Hygiene Excellence Award by WHO."
        },
        {
          content: "For its high-end technology ensuring medical excellence, the hospital was regarded as the Best Super Specialty Hospital in Delhi NCR by the Indian Excellence Award in 2017 and consecutively in 2018, the Best Multi-Specialty Hospital in Delhi NCR by the Health Care Awards."
        },
        {
          content: "In 2019, the hospital received the Kayakalp Award from the Quality Council of India in association with the Government of India for promoting cleanliness, hygiene, and infection control."
        },
        {
          content: "International Patient Services: Artemis Hospital extends seamless international patient services by providing medical visa assistance, air ambulances, language interpretation services, and other services, ensuring a seamless experience for its cross-border patients."
        },
        {
          content: "The hospital actively collaborates with a range of insurance providers, striving to make top-quality healthcare services more accessible and affordable for patients."
        }
      ]
    },
    established: 2007,
    numberOfBeds: 550,
    specialties: [
      "Cardiology and Cardiac Surgery",
      "Cosmetic and Plastic Surgery",
      "Dental Treatment",
      "Dermatology",
      "Endocrinology",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hematology",
      "Hepatology",
      "IVF and Infertility",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Ophthalmology",
      "Orthopedics",
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Spine Surgery",
      "Transplant Surgery",
      "Urology"
    ],
    teamSpecialties: [
      "Cardiology and Cardiac Surgery",
      "Oncology and Oncosurgery",
      "Orthopedics",
      "Neurology and Neurosurgery",
      "Gastroenterology"
    ],
    facilities: [
      "24/7 Emergency Services",
      "Advanced Diagnostic Imaging",
      "International Patient Services",
      "State-of-the-art Operation Theatres",
      "Intensive Care Units",
      "Blood Bank",
      "Pharmacy",
      "Ambulance Services"
    ],
    infrastructure: [
      "The hospital offers state-of-the-art diagnostic and therapeutic technologies, including the first in Asia and India.",
      "It is divided into two blocks: East Block (a unit of Devki Devi Foundation) and West Block (a unit of MHIL—Max Healthcare Institute Limited).",
      "The 550-bed facility comprises: Neonatal ICU (NICU) & Pediatric ICU (PICU), TrueBeam Linac with Exactrac, Bi-Plane Digital Cath Lab, Holmium Laser, Da Vinci Xi Robotic System, 4D ECHO Machine, LINAC, MRI 3.0 Tesla, Novalis Tx.",
      "Advanced diagnostic devices such as 256 Slice CT Angio, 3.0 Tesla digital broadband MRI, Cath Labs with electrophysiology navigation, and a flat panel C-Arm detector.",
      "Specialized centers for complex procedures including targeted cancer treatments, neurovascular intervention, heart surgeries, orthopedic surgeries, liver & kidney transplants, and fertility treatments."
    ],
    address: {
      fullAddress: "Sector 51, Gurgaon, Haryana 122001, India",
      city: "Gurgaon",
      country: "India",
      pinCode: "122001",
      location: {
        lat: 28.4595,
        lng: 77.0266
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located in Sector 51, Gurgaon, providing easy access to patients from Delhi-NCR and surrounding regions."
        }
      ]
    },
    departments: [
      "Cardiology and Cardiac Surgery",
      "Cosmetic and Plastic Surgery",
      "Dental Treatment",
      "Dermatology",
      "Endocrinology",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hematology",
      "Hepatology",
      "IVF and Infertility",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Ophthalmology",
      "Orthopedics",
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Spine Surgery",
      "Transplant Surgery",
      "Urology"
    ],
    doctors: [
      {
        id: "dr-ips-oberoi",
        name: "Dr. IPS Oberoi",
        designation: "Chairman",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20IPS%20Oberoi.jpg"
      },
      {
        id: "dr-nidhi-rawal",
        name: "Dr. Nidhi Rawal",
        designation: "Chief",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Nidhi%20Rawal.jpg"
      },
      {
        id: "dr-aseem-ranjan-srivastava",
        name: "Dr. Aseem Ranjan Srivastava",
        designation: "Senior Consultant",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Aseem%20Ranjan%20Srivastava.jpg"
      },
      {
        id: "dr-vipul-nanda",
        name: "Dr. Vipul Nanda",
        designation: "Head of Department",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Vipul%20Nanda.jpg"
      }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Max Hospital Saket were highly professional and caring. Great facilities and excellent care."
      },
      {
        name: "Priya Sharma",
        date: "2023-04-30",
        rating: 4,
        content: "Good hospital with advanced medical facilities, but sometimes the wait time is long."
      }
    ]
  },
  {
    id: "amrita-hospital-faridabad",
    name: "Amrita Hospital, Faridabad",
    mainImage: "/hospital/amrita-hospital-faridabad.webp",
    images: [
      "/hospital/amrita-hospital-faridabad1.webp",
      "/hospital/amrita-hospital-faridabad2.webp",
      "/hospital/amrita-hospital-faridabad3.webp",
      "/hospital/amrita-hospital-faridabad4.webp",
    ],
    about: {
      title: "About Amrita Hospital, Faridabad",
      items: [
        {
          content: "Established in 2022, Amrita Hospital in Faridabad is a multi-specialty hospital offering comprehensive diagnostic, consultation, emergency, recovery, and rehabilitative treatments.",
          isHighlighted: true
        },
        {
          content: "The hospital comprises Centres of Excellence, including Radiation Oncology, Cardiac Sciences, Neurosciences, Gastro-sciences, Bone Diseases, Trauma, Transplants, and Mother-and-Child Care."
        },
        {
          content: "It features advanced technology, including state-of-the-art, fully automated laboratories, cutting-edge medical imaging services, and the latest cardiac and interventional cath labs."
        },
        {
          content: "The multidisciplinary children's infirmary houses maternal and fetal medicine and all pediatric subspecialties."
        },
        {
          content: "Amrita Hospital also operates one of India's most extensive facilities for infectious diseases."
        }
      ]
    },
    established: 2022,
    numberOfBeds: 2600,
    specialties: [
      "Cardiology and Cardiac Surgery",
      "Cosmetic and Plastic Surgery",
      "Dental Treatment",
      "Dermatology",
      "Endocrinology",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hematology",
      "Hepatology",
      "IVF and Infertility",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Ophthalmology",
      "Orthopedics",
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Rheumatology",
      "Routine Health Check-ups",
      "Spine Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    teamSpecialties: [
      "Cardiology and Cardiac Surgery",
      "Oncology and Oncosurgery",
      "Orthopedics",
      "Neurology and Neurosurgery",
      "Gastroenterology"
    ],
    facilities: [
      "24/7 Emergency Services",
      "Advanced Diagnostic Imaging",
      "International Patient Services",
      "State-of-the-art Operation Theatres",
      "Intensive Care Units",
      "Blood Bank",
      "Pharmacy",
      "Ambulance Services"
    ],
    infrastructure: [
      "Spread across 130 acres, the hospital has 2,600 beds, 81 specialties, 64 fully-networked modular operation theatres, and smart ICUs with 534 critical-care beds that are digitally monitored round-the-clock.",
      "The hospital also consists of advanced technology, including state-of-the-art, fully-automated innovative laboratories, the most advanced medical imaging services in the country, and the latest in cardiac and interventional cath labs for clinical services.",
      "The multidisciplinary children's infirmary at the hospital is home to maternal and fetal medicine and all pediatric subspecialties.",
      "The hospital also runs India's most extensive facilities for infectious diseases."
    ],
    address: {
      fullAddress: "Mata Amritanandamayi Marg, Faridabad, 121002, India",
      city: "Faridabad",
      country: "India",
      pinCode: "121002",
      location: {
        lat: 28.4089,
        lng: 77.3178
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located on Mata Amritanandamayi Marg in Faridabad, providing easy access to patients from Delhi-NCR and surrounding regions."
        }
      ]
    },
    departments: [
      "Cardiology and Cardiac Surgery",
      "Cosmetic and Plastic Surgery",
      "Dental Treatment",
      "Dermatology",
      "Endocrinology",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hematology",
      "Hepatology",
      "IVF and Infertility",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Ophthalmology",
      "Orthopedics",
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Rheumatology",
      "Routine Health Check-ups",
      "Spine Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    doctors: [
      {
        id: "dr-sushil-azad",
        name: "Dr. Sushil Azad",
        designation: "Pediatric Cardiologist",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Sushil%20Azad.jpg"
      },
      {
        id: "dr-maninder-dhaliwal",
        name: "Dr. Maninder Dhaliwal",
        designation: "General Paediatrician",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Maninder%20Dhaliwal.jpg"
      },
      {
        id: "dr-saphalta-baghmar",
        name: "Dr. Saphalta Baghmar",
        designation: "Medical Oncologist",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Saphalta%20Baghmar.jpg"
      },
      {
        id: "dr-sameer-bhate",
        name: "Dr. Sameer Bhate",
        designation: "Cardiac Surgeon",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Sameer%20Bhate.jpg"
      }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Max Hospital Saket were highly professional and caring. Great facilities and excellent care."
      },
      {
        name: "Priya Sharma",
        date: "2023-04-30",
        rating: 4,
        content: "Good hospital with advanced medical facilities, but sometimes the wait time is long."
      }
    ]
  },
  {
    id: "marengo-asia-hospitals-gurgaon",
    name: "Marengo Asia Hospitals, formerly W Pratiksha Hospital, Gurgaon",
    mainImage: "/hospital/marengo-asia-hospitals-gurgaon.webp",
    images: [
      "/hospital/marengo-asia-hospitals-gurgaon.webp",
      "/hospital/marengo-asia-hospitals-gurgaon1.webp",
      "/hospital/marengo-asia-hospitals-gurgaon2.webp",
      "/hospital/marengo-asia-hospitals-gurgaon3.webp",
      "/hospital/marengo-asia-hospitals-gurgaon4.webp",
    ],
    about: {
      title: "About Marengo Asia Hospitals, formerly W Pratiksha Hospital, Gurgaon",
      items: [
        {
          content: "Established in 1995, Marengo Asia Hospitals, formerly W Pratiksha Hospital, is a flagship hospital of the Pratiksha group.",
          isHighlighted: true
        },
        {
          content: "The group has 3 hospitals and multiple clinics across India."
        },
        {
          content: "In 2018, the hospital treated more than 25,000 people, provided over 6,000 joint replacements, 1,500 IVF treatments, managed more than 2,000 births, 5,000 Arthroscopic ACL Reconstructions, and critical care for 1,000 premature newborns."
        },
        {
          content: "The chairman of Pratiksha Group, Dr. Pramod Kumar Sharma, is one of the pioneers of IVF treatment."
        },
        {
          content: "The hospital has achieved more than 5,500 IVF success stories."
        }
      ]
    },
    established: 1995,
    numberOfBeds: 110,
    specialties: [
      "Cardiology and Cardiac Surgery",
      "Cosmetic and Plastic Surgery",
      "Dermatology",
      "ENT Surgery",
      "Gastroenterology",
      "Gynecology",
      "Hematology",
      "Hepatology",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Oncology and Oncosurgery",
      "Ophthalmology",
      "Orthopedics",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Spine Surgery",
      "Transplant Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    teamSpecialties: [
      "Cardiology and Cardiac Surgery",
      "Oncology and Oncosurgery",
      "Orthopedics",
      "Neurology and Neurosurgery",
      "Gastroenterology"
    ],
    facilities: [
      "24/7 Emergency Services",
      "Advanced Diagnostic Imaging",
      "International Patient Services",
      "State-of-the-art Operation Theatres",
      "Intensive Care Units",
      "Blood Bank",
      "Pharmacy",
      "Ambulance Services"
    ],
    infrastructure: [
      "The hospital is equipped with state-of-the-art technology and offers a luxurious ambiance.",
      "It has a modern physiotherapy unit working in close coordination with the orthopedic department."
    ],
    address: {
      fullAddress: "Golf Course Extension Road, Sector 56, Sushant Lok II, Gurgaon, 122011, India",
      city: "Gurgaon",
      country: "India",
      pinCode: "122011",
      location: {
        lat: 28.4595,
        lng: 77.0266
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located on Golf Course Extension Road, Sector 56, Sushant Lok II, Gurgaon, providing easy access to patients from Delhi-NCR and surrounding regions."
        }
      ]
    },
    departments: [
      "Cardiology and Cardiac Surgery",
      "Cosmetic and Plastic Surgery",
      "Dermatology",
      "ENT Surgery",
      "Gastroenterology",
      "Gynecology",
      "Hematology",
      "Hepatology",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Oncology and Oncosurgery",
      "Ophthalmology",
      "Orthopedics",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Spine Surgery",
      "Transplant Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    doctors: [
      {
        id: "dr-rajeev-sood",
        name: "Dr. Rajeev Sood",
        designation: "Chairman",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Rajeev%20Sood.jpg"
      },
      {
        id: "dr-dheeraj-gupta",
        name: "Dr. Dheeraj Gupta",
        designation: "Senior Consultant",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Dheeraj%20Gupta.jpg"
      },
      {
        id: "dr-rupal-gupta",
        name: "Dr. Rupal Gupta",
        designation: "Consultant",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Rupal%20Gupta.jpg"
      },
      {
        id: "dr-anil-k-agarwal",
        name: "Dr. Anil K. Agarwal",
        designation: "Head of Department",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Anil%20K.%20Agarwal.jpg"
      }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Max Hospital Saket were highly professional and caring. Great facilities and excellent care."
      },
      {
        name: "Priya Sharma",
        date: "2023-04-30",
        rating: 4,
        content: "Good hospital with advanced medical facilities, but sometimes the wait time is long."
      }
    ]
  },
  {
    id: "marengo-asia-hospitals-faridabad",
    name: "Marengo Asia Hospitals, formerly QRG Health City, Faridabad",
    mainImage: "/hospital/marengo-asia-hospitals-faridabad.webp",
    images: [
      "/hospital/marengo-asia-hospitals-faridabad1.webp",
      "/hospital/marengo-asia-hospitals-faridabad2.webp",
      "/hospital/marengo-asia-hospitals-faridabad3.webp",
    ],
    about: {
      title: "About Marengo Asia Hospitals, formerly QRG Health City, Faridabad",
      items: [
        {
          content: "Established by the QRG Group in 2007, the hospital holds the title of the ‘Best Emerging Critical Care Hospital in Delhi NCR’.",
          isHighlighted: true
        },
        {
          content: "The 450-bedded hospital believes in achieving exemplary, world-class standards in healthcare services without compromising on quality."
        },
        {
          content: "The NABH and NABL accredited hospital aspires to evolve as a multi-specialty healthcare institute, offering quality and cost-friendly medical services accessible to all."
        },
        {
          content: "The hospital has twelve centers of excellence, including Cardiac Sciences, Orthopedics, Nephrology, Critical Care, Neurosciences, Gastroenterology, General & Minimally Invasive Surgery, Gynecology, Bariatric Surgery, Respiratory & Sleep Medicine, Diabetes & Metabolic Disorders, and Fertility & IVF."
        },
        {
          content: "It also conducts Preventive Health Check-up programs, including well-woman checks, senior citizen health checks, and executive health checks."
        }
      ]
    },
    established: 2007,
    numberOfBeds: 450,
    specialties: [
      "Cardiac Sciences",
      "Orthopedics",
      "Nephrology",
      "Critical Care",
      "Neurosciences",
      "Gastroenterology",
      "General & Minimally Invasive Surgery",
      "Gynecology",
      "Bariatric Surgery",
      "Respiratory & Sleep Medicine",
      "Diabetes & Metabolic Disorders",
      "Fertility & IVF"
    ],
    teamSpecialties: [
      "Cardiac Sciences",
      "Orthopedics",
      "Nephrology",
      "Critical Care",
      "Neurosciences"
    ],
    facilities: [
      "24/7 Emergency Services",
      "Advanced Diagnostic Imaging",
      "International Patient Services",
      "State-of-the-art Operation Theatres",
      "Intensive Care Units",
      "Blood Bank",
      "Pharmacy",
      "Ambulance Services"
    ],
    infrastructure: [
      "The hospital offers state-of-the-art diagnostic and therapeutic technologies, including the first in Asia and India.",
      "It is divided into two blocks: East Block (a unit of Devki Devi Foundation) and West Block (a unit of MHIL—Max Healthcare Institute Limited).",
      "The 450-bed facility comprises: Neonatal ICU (NICU) & Pediatric ICU (PICU), TrueBeam Linac with Exactrac, Bi-Plane Digital Cath Lab, Holmium Laser, Da Vinci Xi Robotic System, 4D ECHO Machine, LINAC, MRI 3.0 Tesla, Novalis Tx.",
      "Advanced diagnostic devices such as 256 Slice CT Angio, 3.0 Tesla digital broadband MRI, Cath Labs with electrophysiology navigation, and a flat panel C-Arm detector.",
      "Specialized centers for complex procedures including targeted cancer treatments, neurovascular intervention, heart surgeries, orthopedic surgeries, liver & kidney transplants, and fertility treatments."
    ],
    address: {
      fullAddress: "Sector 16, Faridabad, Haryana 121002, India",
      city: "Faridabad",
      country: "India",
      pinCode: "121002",
      location: {
        lat: 28.4089,
        lng: 77.3178
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located in Sector 16, Faridabad, providing easy access to patients from Delhi-NCR and surrounding regions."
        }
      ]
    },
    departments: [
      "Cardiac Sciences",
      "Orthopedics",
      "Nephrology",
      "Critical Care",
      "Neurosciences",
      "Gastroenterology",
      "General & Minimally Invasive Surgery",
      "Gynecology",
      "Bariatric Surgery",
      "Respiratory & Sleep Medicine",
      "Diabetes & Metabolic Disorders",
      "Fertility & IVF"
    ],
    doctors: [
      {
        id: "dr-rajeev-sood",
        name: "Dr. Rajeev Sood",
        designation: "Chairman",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Rajeev%20Sood.jpg"
      },
      {
        id: "dr-rakesh-rai-sapra",
        name: "Dr. Rakesh Rai Sapra",
        designation: "Senior Consultant",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Rakesh%20Rai%20Sapra.jpg"
      },
      {
        id: "dr-nisha-kapoor",
        name: "Dr. Nisha Kapoor",
        designation: "Director",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Nisha%20Kapoor.jpg"
      },
      {
        id: "dr-vikram-dua",
        name: "Dr. Vikram Dua",
        designation: "Director",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Vikram%20Dua.jpg"
      }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Max Hospital Saket were highly professional and caring. Great facilities and excellent care."
      },
      {
        name: "Priya Sharma",
        date: "2023-04-30",
        rating: 4,
        content: "Good hospital with advanced medical facilities, but sometimes the wait time is long."
      }
    ]
  } 
];
  