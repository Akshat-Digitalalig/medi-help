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
  },
  {
    id: "paras-hospital-gurgaon",
    name: "Paras Hospitals, Gurgaon",
    mainImage: "/hospital/paras-hospital-gurgaon.webp",
    images: [
      "/hospital/paras-hospital-gurgaon.webp",
      "/hospital/paras-hospital-gurgaon1.webp",
      "/hospital/paras-hospital-gurgaon2.webp",
      "/hospital/paras-hospital-gurgaon3.webp"
    ],
    about: {
      title: "About Paras Hospitals, Gurgaon",
      items: [
        {
          content: "Established in 2006, Paras Hospitals is a leading multi-specialty hospital in Gurgaon, India.",
          isHighlighted: true
        },
        {
          content: "The hospital is accredited by NABH and NABL, ensuring high standards of patient care and safety."
        },
        {
          content: "Recognized for its advanced medical technology and comprehensive healthcare services."
        },
        {
          content: "Part of the Paras Healthcare network, which includes multiple hospitals across India."
        },
        {
          content: "Awards and Recognitions:",
          subItems: [
            "Best Healthcare Campaign for Breastfeeding Rooms in Public Places at the Six Sigma Healthcare Awards 2015.",
            "Best Hospital for Neurosurgery and Neurology in Delhi NCR at the Times Achievers Awards 2017.",
            "Recognized for excellence in serving international patients at the FICCI Medical Value Travel Event 2017."
          ]
        },
        {
          content: "International Patient Services: Offers comprehensive services including medical opinions, appointment scheduling, travel arrangements, interpreter facilities, accommodation, and follow-up care."
        }
      ]
    },
    established: 2006,
    numberOfBeds: 300,
    specialties: [
      "Cardiology and Cardiac Surgery",
      "Cosmetic and Plastic Surgery",
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
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Spine Surgery",
      "Urology"
    ],
    teamSpecialties: [
      "Neurology and Neurosurgery",
      "Orthopedics",
      "Cardiology and Cardiac Surgery",
      "Oncology and Oncosurgery",
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
      "300-bed facility with specialized units including Neonatal ICU (NICU) & Pediatric ICU (PICU).",
      "Advanced diagnostic devices such as 3.0 Tesla MRI, 128 Slice CT Scanner, and Cath Labs.",
      "Specialized centers for complex procedures including neurovascular interventions, cardiac surgeries, orthopedic surgeries, and organ transplants."
    ],
    address: {
      fullAddress: "C-1, Sushant Lok- 1, Sector-43, Phase- I, Gurgaon, Haryana 122002, India",
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
          content: "Located in Sushant Lok-1, Gurgaon, providing easy access to patients from Delhi-NCR and surrounding regions."
        }
      ]
    },
    departments: [
      "Cardiology and Cardiac Surgery",
      "Cosmetic and Plastic Surgery",
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
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Spine Surgery",
      "Urology"
    ],
    doctors: [
      {
        id: "dr-v-s-mehta",
        name: "Dr. V. S. Mehta",
        designation: "Director",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20V.%20S.%20Mehta.jpg"
      },
      {
        id: "dr-jyoti-wadhwa",
        name: "Dr. Jyoti Wadhwa",
        designation: "Associate Director",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Jyoti%20Wadhwa.jpg"
      },
      {
        id: "dr-vivek-logani",
        name: "Dr. Vivek Logani",
        designation: "Chief",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Vivek%20Logani.jpg"
      },
      {
        id: "dr-rajnish-monga",
        name: "Dr. Rajnish Monga",
        designation: "Consultant",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Rajnish%20Monga.jpg"
      }
    ],
    reviews: [
      {
        name: "Ravi Sharma",
        date: "2023-06-15",
        rating: 5,
        content: "Excellent medical services and compassionate staff. Highly recommend Paras Hospitals for specialized treatments."
      },
      {
        name: "Anita Verma",
        date: "2023-05-20",
        rating: 4,
        content: "Good facilities and experienced doctors, but the waiting time can be improved."
      }
    ]
  },
  {
    id: "pushpawati-singhania-research-institute-delhi",
    name: "Pushpawati Singhania Research Institute (PSRI Hospital), Delhi",
    mainImage: "/hospital/pushpawati-singhania-research-institute-delhi.webp",
    images: [
      "/hospital/pushpawati-singhania-research-institute-delhi.webp",
      "/hospital/pushpawati-singhania-research-institute-delhi1.webp",
      "/hospital/pushpawati-singhania-research-institute-delhi2.webp",
      "/hospital/pushpawati-singhania-research-institute-delhi.webp"
    ],
    about: {
      title: "About Pushpawati Singhania Research Institute (PSRI Hospital), Delhi",
      items: [
        {
          content: "Established in 1996 by the JK Organization, PSRI Hospital is a premier private healthcare institution renowned nationally and internationally for its excellence in tertiary care.",
          isHighlighted: true
        },
        {
          content: "Originally established as a super-specialty center for Gastroenterology, GI Surgery, Nephrology, and Urology, PSRI has expanded its services to include Cardiac Sciences, Neurosciences, Orthopedics & Joint Replacement, and a comprehensive Liver Transplant Program."
        },
        {
          content: "The hospital is accredited with ISO 9001:2008, NABH (2012) for clinical excellence, and NABL (2010) for its Lab Medicine department, ensuring high standards of patient care and safety."
        },
        {
          content: "PSRI is dedicated to fostering an employee- and patient-centric culture, ensuring pride and belonging among its staff, emphasizing teamwork and professional excellence."
        },
        {
          content: "International Patient Services: Offers comprehensive services including medical opinions, appointment scheduling, travel arrangements, interpreter facilities, accommodation, and follow-up care."
        }
      ]
    },
    established: 1996,
    numberOfBeds: 201,
    specialties: [
      "Gastroenterology",
      "GI Surgery",
      "Nephrology",
      "Urology",
      "Cardiac Sciences",
      "Neurosciences",
      "Orthopedics & Joint Replacement",
      "Liver Transplant Program",
      "General Medicine",
      "General Surgery",
      "Gynaecology",
      "ENT",
      "Psychiatry",
      "Clinical Psychology"
    ],
    teamSpecialties: [
      "Gastroenterology",
      "Nephrology",
      "Cardiac Sciences",
      "Orthopedics & Joint Replacement",
      "Liver Transplant Program"
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
      "201-bed facility with specialized units including a 42-bed Critical Care Unit.",
      "Advanced diagnostic devices and specialized centers for complex procedures."
    ],
    address: {
      fullAddress: "Press Enclave Marg, Sheikh Sarai Phase II, Behind Bhagat Singh College, Delhi 110017, India",
      city: "Delhi",
      country: "India",
      pinCode: "110017",
      location: {
        lat: 28.5375,
        lng: 77.2196
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located in Sheikh Sarai Phase II, Delhi, providing easy access to patients from Delhi-NCR and surrounding regions."
        }
      ]
    },
    departments: [
      "Gastroenterology",
      "GI Surgery",
      "Nephrology",
      "Urology",
      "Cardiac Sciences",
      "Neurosciences",
      "Orthopedics & Joint Replacement",
      "Liver Transplant Program",
      "General Medicine",
      "General Surgery",
      "Gynaecology",
      "ENT",
      "Psychiatry",
      "Clinical Psychology"
    ],
    doctors: [
      {
        id: "dr-arun-kumar",
        name: "Dr. Arun Kumar",
        designation: "Senior Consultant - Gastroenterology",
        image: "https://www.practo.com/images/doctor/dr-arun-kumar-gastroenterologist.jpg"
      },
      {
        id: "dr-g-c-khilnani",
        name: "Dr. G C Khilnani",
        designation: "Senior Consultant - General Medicine",
        image: "https://www.practo.com/images/doctor/dr-g-c-khilnani-general-physician.jpg"
      },
      {
        id: "dr-prakash-kotwal",
        name: "Dr. Prakash Kotwal",
        designation: "Senior Consultant - Orthopedic Surgery",
        image: "https://www.practo.com/images/doctor/dr-prakash-kotwal-orthopedic-surgeon.jpg"
      },
      {
        id: "dr-birbala-rai",
        name: "Dr. Birbala Rai",
        designation: "Senior Consultant - Obstetrics & Gynaecology",
        image: "https://www.practo.com/images/doctor/dr-birbala-rai-gynecologist.jpg"
      }
    ],
    reviews: [
      {
        name: "Kamal Singh",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at PSRI Hospital were highly professional and caring. Great facilities and excellent care."
      },
      {
        name: "Anita Verma",
        date: "2023-04-30",
        rating: 4,
        content: "Good hospital with advanced medical facilities, but sometimes the wait time is long."
      }
    ]
  },
  {
    id: "ssb-heart-multispecialty-hospital-faridabad",
    name: "SSB Heart & Multispecialty Hospital, Faridabad",
    mainImage: "/hospital/ssb-heart-multispecialty-hospital-faridabad.webp",
    images: [
      "/hospital/ssb-heart-multispecialty-hospital-faridabad.webp",
      "/hospital/ssb-heart-multispecialty-hospital-faridabad1.webp",
      // "/hospital/ssb-heart-multispecialty-hospital-faridabad2.webp",
      // "/hospital/ssb-heart-multispecialty-hospital-faridabad3.webp"
    ],
    about: {
      title: "About SSB Heart & Multispecialty Hospital, Faridabad",
      items: [
        {
          content: "Established in 2007 as QRG Central Hospital, the facility was renamed SSB Heart & Multispecialty Hospital after being taken over by renowned cardiologist Dr. S. S. Bansal.",
          isHighlighted: true
        },
        {
          content: "The hospital provides world-class healthcare services with state-of-the-art infrastructure that is readily accessible, cost-effective, and meets the needs of society."
        },
        {
          content: "Offers advanced, comprehensive, and personalized treatment in all major disciplines with a dedicated team of specialists and super-specialists."
        },
        {
          content: "Within a short span, the hospital has treated patients with diverse health issues from Delhi-NCR, Haryana, pan-India, and international patients with great satisfaction."
        },
        {
          content: "International Patient Services: Offers comprehensive services including medical opinions, appointment scheduling, travel arrangements, interpreter facilities, accommodation, and follow-up care."
        }
      ]
    },
    established: 2007,
    numberOfBeds: 140,
    specialties: [
      "Cardiology",
      "Neurology",
      "Neurosurgery",
      "Orthopedics",
      "General Surgery",
      "Obstetrics and Gynecology",
      "Pediatrics and Neonatology",
      "Gastroenterology",
      "Nephrology",
      "Internal Medicine",
      "Pulmonology",
      "Urology",
      "Critical Care Medicine",
      "Medical Oncology",
      "Anesthesiology",
      "Ophthalmology",
      "ENT",
      "Dentistry",
      "Plastic Surgery",
      "Dermatology",
      "Radiology",
      "Physiotherapy",
      "Nutrition and Dietetics"
    ],
    teamSpecialties: [
      "Cardiology",
      "Neurology",
      "Orthopedics",
      "Gastroenterology",
      "Nephrology"
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
      "140-bed facility with specialized units including a 64-bed ICU.",
      "Advanced diagnostic devices such as 3rd Generation 3D Cath Lab, 128 Slice CT Scanner, and MRI.",
      "Specialized centers for complex procedures including cardiac surgeries, neuro and spine surgeries, orthopedic surgeries, and organ transplants."
    ],
    address: {
      fullAddress: "Plot No. 69, Mathura Road, Near Neelam Flyover, Sector 20A, Faridabad, Haryana 121002, India",
      city: "Faridabad",
      country: "India",
      pinCode: "121002",
      location: {
        lat: 28.4039,
        lng: 77.3191
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located on Mathura Road near Neelam Flyover in Sector 20A, Faridabad, providing easy access to patients from Delhi-NCR and surrounding regions."
        }
      ]
    },
    departments: [
      "Cardiology",
      "Neurology",
      "Neurosurgery",
      "Orthopedics",
      "General Surgery",
      "Obstetrics and Gynecology",
      "Pediatrics and Neonatology",
      "Gastroenterology",
      "Nephrology",
      "Internal Medicine",
      "Pulmonology",
      "Urology",
      "Critical Care Medicine",
      "Medical Oncology",
      "Anesthesiology",
      "Ophthalmology",
      "ENT",
      "Dentistry",
      "Plastic Surgery",
      "Dermatology",
      "Radiology",
      "Physiotherapy",
      "Nutrition and Dietetics"
    ],
    doctors: [
      {
        id: "dr-shyam-sunder-bansal",
        name: "Dr. Shyam Sunder Bansal",
        designation: "Cardiologist",
        image: "https://www.practo.com/images/doctor/dr-shyam-sunder-bansal-cardiologist.jpg"
      },
      {
        id: "dr-s-s-sidhu",
        name: "Dr. S.S. Sidhu",
        designation: "Cardiothoracic Surgeon",
        image: "https://www.practo.com/images/doctor/dr-s-s-sidhu-cardiothoracic-surgeon.jpg"
      },
      {
        id: "dr-siddhant-bansal",
        name: "Dr. Siddhant Bansal",
        designation: "Cardiologist",
        image: "https://www.practo.com/images/doctor/dr-siddhant-bansal-cardiologist.jpg"
      },
      {
        id: "dr-chetan-swaroop",
        name: "Dr. Chetan Swaroop",
        designation: "Internal Medicine Specialist",
        image: "https://www.practo.com/images/doctor/dr-chetan-swaroop-internal-medicine-specialist.jpg"
      }
    ],
    reviews: [
      {
        name: "Mohit Rathour",
        date: "2023-03-15",
        rating: 5,
        content: "Dr. Ajay Verma is a great person and a very talented surgeon. My surgery was successfully completed. Thank you so much, Dr. Ajay."
      },
      {
        name: "Kushal",
        date: "2021-08-10",
        rating: 5,
        content: "My sister was suffering from a rare disease, and Dr. Haripal treated her excellently. Now she is healthy. Thank you, doctor."
      }
    ]
  },
  {
    id: "sanar-international-hospitals-gurgaon",
    name: "Sanar International Hospitals, Gurgaon",
    mainImage: "/hospital/sanar-international-hospitals-gurgaon.webp",
    images: [
      "/hospital/sanar-international-hospitals-gurgaon.webp",
      "/hospital/sanar-international-hospitals-gurgaon1.webp",
      "/hospital/sanar-international-hospitals-gurgaon2.webp",
      "/hospital/sanar-international-hospitals-gurgaon3.webp"
    ],
    about: {
      title: "About Sanar International Hospitals, Gurgaon",
      items: [
        {
          content: "Established in 2018, Sanar International Hospitals is a 150-bedded multispeciality hospital located in the National Capital Region of Delhi, India.",
          isHighlighted: true
        },
        {
          content: "The hospital offers comprehensive, advanced surgical care in specialties such as Cancer, Heart, Blood and Marrow Transplant, Kidney & Liver Transplant, Bone & Joint, and Neurosciences."
        },
        {
          content: "With a team of experienced medical experts, state-of-the-art facilities, and world-class infrastructure, the hospital has made a mark for itself among both domestic and international patients seeking quality medical care."
        },
        {
          content: "Sanar International Hospitals is part of the Shalby Group of Hospitals, one of the largest chains of hospitals and tertiary care centers in Western and Central India, with 15 healthcare units, over 2000+ bed capacity, more than 500 active physicians, and 3000+ employees."
        },
        {
          content: "International Patient Services: Offers comprehensive services including medical opinions, appointment scheduling, travel arrangements, interpreter facilities, accommodation, and follow-up care."
        }
      ]
    },
    established: 2018,
    numberOfBeds: 150,
    specialties: [
      "Cancer",
      "Cardiology",
      "Blood and Marrow Transplant",
      "Kidney Transplant",
      "Liver Transplant",
      "Orthopedics",
      "Neurosciences",
      "Gastroenterology",
      "Urology",
      "Pulmonology",
      "Endocrinology",
      "ENT",
      "Ophthalmology",
      "Pediatrics",
      "Obstetrics and Gynecology",
      "Dermatology",
      "Plastic Surgery",
      "Psychiatry",
      "Rheumatology",
      "General Surgery",
      "Internal Medicine",
      "Anesthesiology",
      "Radiology",
      "Emergency Medicine"
    ],
    teamSpecialties: [
      "Cancer",
      "Cardiology",
      "Orthopedics",
      "Neurosciences",
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
      "150-bed facility with specialized units including a 35-bed ICU.",
      "Advanced diagnostic devices and specialized centers for complex procedures."
    ],
    address: {
      fullAddress: "Golf Course Road, Parsvnath Exotica, Sector 53, DLF Phase V, Gurgaon, Haryana 122002, India",
      city: "Gurgaon",
      country: "India",
      pinCode: "122002",
      location: {
        lat: 28.4595,
        lng: 77.0720
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located on Golf Course Road in DLF Phase V, Gurgaon, providing easy access to patients from Delhi-NCR and surrounding regions."
        }
      ]
    },
    departments: [
      "Cancer",
      "Cardiology",
      "Blood and Marrow Transplant",
      "Kidney Transplant",
      "Liver Transplant",
      "Orthopedics",
      "Neurosciences",
      "Gastroenterology",
      "Urology",
      "Pulmonology",
      "Endocrinology",
      "ENT",
      "Ophthalmology",
      "Pediatrics",
      "Obstetrics and Gynecology",
      "Dermatology",
      "Plastic Surgery",
      "Psychiatry",
      "Rheumatology",
      "General Surgery",
      "Internal Medicine",
      "Anesthesiology",
      "Radiology",
      "Emergency Medicine"
    ],
    doctors: [
      {
        id: "dr-dhananjay-kumar-jhamb",
        name: "Dr. Dhananjay Kumar Jhamb",
        designation: "HOD & Director - Interventional Cardiology",
        image: "https://www.practo.com/images/doctor/dr-dhananjay-kumar-jhamb-cardiologist.jpg"
      },
      {
        id: "dr-rohit-lamba",
        name: "Dr. Rohit Lamba",
        designation: "Head of the Department & Senior Consultant - Bone, Joint Replacement and Orthopedics",
        image: "https://www.practo.com/images/doctor/dr-rohit-lamba-orthopedic-surgeon.jpg"
      },
      {
        id: "dr-archit-pandit",
        name: "Dr. Archit Pandit",
        designation: "Director & Head - Surgical Oncology",
        image: "https://www.practo.com/images/doctor/dr-archit-pandit-oncologist.jpg"
      },
      {
        id: "dr-sunil-singla",
        name: "Dr. Sunil Singla",
        designation: "Senior Consultant - Neurology",
        image: "https://www.practo.com/images/doctor/dr-sunil-singla-neurologist.jpg"
      }
    ],
    reviews: [
      {
        name: "Shyam Aggarwal",
        date: "2021-08-10",
        rating: 5,
        content: "I have been under Dr. Jhamb's treatment for over 6 years. He is among the most dedicated doctors, giving maximum time to listen to our health conditions."
      },
      {
        name: "Kamal Singh",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Sanar International Hospitals were highly professional and caring. Great facilities and excellent care."
      }
    ]
  },
  {
    id: "medanta-medicity-gurgaon",
    name: "Medanta - The Medicity Hospital, Gurgaon",
    mainImage: "/hospital/medanta-medicity-gurgaon.webp",
    images: [
      "/hospital/medanta-medicity-gurgaon.webp",
      "/hospital/medanta-medicity-gurgaon1.webp",
      "/hospital/medanta-medicity-gurgaon2.webp",
      "/hospital/medanta-medicity-gurgaon3.webp"
    ],
    about: {
      title: "About Medanta - The Medicity Hospital, Gurgaon",
      items: [
        {
          content: "Established in 2009 by Dr. Naresh Trehan, Medanta is one of India's largest and most reputed multi-super specialty health institutes.",
          isHighlighted: true
        },
        {
          content: "The hospital holds national accreditations from NABH and NABL, and international accreditation from JCI, USA."
        },
        {
          content: "Medanta has received several prestigious awards, including being ranked as the Best Private Hospital in India for four consecutive years (2020-2023) and featured in the top 250 World's Best Hospitals Survey by Newsweek in 2023."
        },
        {
          content: "The hospital offers a wide range of specialties, including the Heart Institute, Institute of Neurosciences, Bone & Joint Institute, Kidney & Urology Institute, Cancer Institute, and Division of Medical Oncology and Hematology."
        },
        {
          content: "International Patient Services: More than 20,000 patients from over 30 countries come to Medanta each year for treatment. Services include case assessment, telecommunication, assistance with appointments and visas, pick-up and drop-off, foreign language interpreters, express check-in, dedicated staff, food arrangements, affordable guest house options, and ambulance services."
        }
      ]
    },
    established: 2009,
    numberOfBeds: 1600,
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
      "1600-bed facility with specialized units.",
      "Advanced diagnostic devices and specialized centers for complex procedures."
    ],
    address: {
      fullAddress: "Sector 38, Gurugram, Haryana 122001, India",
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
          content: "Located in Sector 38, Gurugram, providing easy access to patients from Delhi-NCR and surrounding regions."
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
      "Spine Surgery",
      "Transplant Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    doctors: [
      {
        id: "dr-naresh-trehan",
        name: "Dr. Naresh Trehan",
        designation: "Chairman - Cardiac Surgeon",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Naresh%20Trehan.jpg"
      },
      {
        id: "dr-ashok-vaid",
        name: "Dr. Ashok Vaid",
        designation: "Chairman - Medical Oncologist",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Ashok%20Vaid.jpg"
      },
      {
        id: "dr-arvinder-singh-soin",
        name: "Dr. Arvinder Singh Soin",
        designation: "Chairman - Liver Transplant Surgeon",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Arvinder%20Singh%20Soin.jpg"
      },
      {
        id: "dr-ashok-rajgopal",
        name: "Dr. Ashok Rajgopal",
        designation: "Chairman - Orthopaedic and Joint Replacement Surgeon",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Ashok%20Rajgopal.jpg"
      }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Medanta were highly professional and caring. Great facilities and excellent care."
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
    id: "fortis-flt-lt-rajan-dhall-hospital-vasant-kunj-new-delhi",
    name: "Fortis Flt. Lt. Rajan Dhall Hospital, Vasant Kunj, New Delhi",
    mainImage: "/hospital/fortis-flt-lt-rajan-dhall-hospital-vasant-kunj-new-delhi.webp",
    images: [
      "/hospital/fortis-flt-lt-rajan-dhall-hospital-vasant-kunj-new-delhi.webp",
      "/hospital/fortis-flt-lt-rajan-dhall-hospital-vasant-kunj-new-delhi1.webp",
      "/hospital/fortis-flt-lt-rajan-dhall-hospital-vasant-kunj-new-delhi2.webp",
      "/hospital/fortis-flt-lt-rajan-dhall-hospital-vasant-kunj-new-delhi3.webp"
    ],
    about: {
      title: "About Fortis Flt. Lt. Rajan Dhall Hospital, Vasant Kunj, New Delhi",
      items: [
        {
          content: "Established in 1996, Fortis Flt. Lt. Rajan Dhall Hospital is a NABH-accredited multi-speciality tertiary care hospital located in Vasant Kunj, New Delhi.",
          isHighlighted: true
        },
        {
          content: "The hospital is part of Fortis Healthcare Limited, one of India's leading healthcare organizations, listed on the BSE Ltd and National Stock Exchange (NSE) of India."
        },
        {
          content: "The hospital offers a wide range of specialties, including Cardiac Sciences, Orthopaedics & Joint Replacement, Renal Sciences, Oncology, Rheumatology, Pulmonology & Critical Care, and Bariatric Surgery."
        },
        {
          content: "International Patient Services: The hospital provides comprehensive services for international patients, including airport pickup and drop, SIM cards for communication, VISA/FRRO assistance, language interpreters, foreign exchange conversion, and more."
        }
      ]
    },
    established: 1996,
    numberOfBeds: 162,
    specialties: [
      "Cardiac Sciences",
      "Orthopaedics & Joint Replacement",
      "Renal Sciences",
      "Oncology",
      "Rheumatology",
      "Pulmonology & Critical Care",
      "Bariatric Surgery",
      "Internal Medicine",
      "Endocrinology",
      "Dermatology",
      "Diabetology",
      "General Surgery",
      "Infertility",
      "Speech Therapy",
      "Sports Medicine"
    ],
    teamSpecialties: [
      "Cardiac Sciences",
      "Orthopaedics & Joint Replacement",
      "Oncology",
      "Neurosciences",
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
      "Ambulance Services",
      "Dialysis Unit",
      "Rehabilitation Center"
    ],
    infrastructure: [
      "State-of-the-art diagnostic and therapeutic technologies.",
      "162-bed facility with specialized units.",
      "Advanced diagnostic devices and specialized centers for complex procedures."
    ],
    address: {
      fullAddress: "Aruna Asaf Ali Marg, Pocket 1, Sector B, Vasant Kunj, New Delhi, Delhi 110070, India",
      city: "Delhi",
      country: "India",
      pinCode: "110070",
      location: {
        lat: 28.5205,
        lng: 77.1636
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located in Vasant Kunj, New Delhi, providing easy access to patients from Delhi-NCR and surrounding regions."
        }
      ]
    },
    departments: [
      "Cardiac Sciences",
      "Orthopaedics & Joint Replacement",
      "Renal Sciences",
      "Oncology",
      "Rheumatology",
      "Pulmonology & Critical Care",
      "Bariatric Surgery",
      "Internal Medicine",
      "Endocrinology",
      "Dermatology",
      "Diabetology",
      "General Surgery",
      "Infertility",
      "Speech Therapy",
      "Sports Medicine"
    ],
    doctors: [
      {
        id: "dr-gurinder-bedi",
        name: "Dr. Gurinder Bedi",
        designation: "Principal Director & HOD - Orthopaedics",
        image: "https://www.fortishealthcare.com/doctors/hospital/fortis-flt-lt-rajan-dhall-hospital-vasant-kunj/dr-gurinder-bedi.jpg"
      },
      {
        id: "dr-kameshwar-prasad",
        name: "Dr. Kameshwar Prasad",
        designation: "Principal Director - Neurology",
        image: "https://www.fortishealthcare.com/doctors/hospital/fortis-flt-lt-rajan-dhall-hospital-vasant-kunj/dr-kameshwar-prasad.jpg"
      },
      {
        id: "dr-manoj-miglani",
        name: "Dr. Manoj Miglani",
        designation: "Principal Director - Orthopaedics",
        image: "https://www.fortishealthcare.com/doctors/hospital/fortis-flt-lt-rajan-dhall-hospital-vasant-kunj/dr-manoj-miglani.jpg"
      },
      {
        id: "dr-amit-bhargava",
        name: "Dr. Amit Bhargava",
        designation: "Senior Director - Medical Oncology",
        image: "https://www.fortishealthcare.com/doctors/hospital/fortis-flt-lt-rajan-dhall-hospital-vasant-kunj/dr-amit-bhargava.jpg"
      }
    ],
    reviews: [
      {
        name: "Janet Evelyn Davis",
        date: "2023-05-12",
        rating: 5,
        content: "I liked Fortis Hospital; it is one of the best hospitals in India. They did my knee replacement very well. Thank you."
      },
      {
        name: "Mamenne D. Quaqua",
        date: "2023-04-30",
        rating: 5,
        content: "My mother had knee replacement surgery at Fortis Hospital in India. It was successful, and she is now pain-free. Thank you, everyone!"
      }
    ]
  },
  {
    id: "fortis-hospital-shalimar-bagh-new-delhi",
    name: "Fortis Hospital, Shalimar Bagh, New Delhi",
    mainImage: "/hospital/fortis-hospital-shalimar-bagh-new-delhi.webp",
    images: [
      "/hospital/fortis-hospital-shalimar-bagh-new-delhi.webp",
      "/hospital/fortis-hospital-shalimar-bagh-new-delhi1.webp",
      "/hospital/fortis-hospital-shalimar-bagh-new-delhi2.webp",
      "/hospital/fortis-hospital-shalimar-bagh-new-delhi3.webp"
    ],
    about: {
      title: "About Fortis Hospital, Shalimar Bagh, New Delhi",
      items: [
        {
          content: "Established in 2010, Fortis Hospital, Shalimar Bagh, is a multi-super-speciality tertiary care hospital known for providing top-quality medical care.",
          isHighlighted: true
        },
        {
          content: "The hospital is part of Fortis Healthcare Limited, one of India's leading healthcare organizations, listed on the BSE Ltd and National Stock Exchange (NSE) of India."
        },
        {
          content: "Certified with NABH, it exemplifies an unparalleled commitment to excellence in medical care."
        },
        {
          content: "It was a pioneer in India, being the first hospital building to enroll in the Green Building Rating System."
        },
        {
          content: "Recognized as one of the early recipients of a 3-star rating from the Bureau of Energy Efficiency, an initiative by the Ministry of Power, it excels in terms of sustainability and construction efficiency."
        },
        {
          content: "The hospital has proved its excellence in branding, marketing, and image building with the FICCI HEAL 2014 award, given by the Federation of Indian Chambers of Commerce and Industry (FICCI)."
        },
        {
          content: "With a globally recognized center of excellence that provides cutting-edge technology in cardiac bypass surgery, interventional cardiology, non-invasive cardiology, pediatric cardiology, and pediatric cardiac surgery, it stands as a paragon of medical advancement and expertise."
        },
        {
          content: "International Patient Services: The hospital offers airport transportation, a SIM card for communication with relatives abroad, assistance with VISA/FRRO procedures, language interpretation services, on-site currency exchange, and various other amenities for smooth support."
        },
        {
          content: "At the IGI, New Delhi airport, the Fortis Kiosk operates 24/7, ensuring uninterrupted services for international patients."
        }
      ]
    },
    established: 2010,
    numberOfBeds: 262,
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
      "Orthopedics",
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Rheumatology",
      "Spine Surgery",
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
      "State-of-the-art diagnostic and therapeutic technologies.",
      "262-bed facility with specialized units.",
      "Advanced diagnostic devices and specialized centers for complex procedures."
    ],
    address: {
      fullAddress: "A Block, Shalimar Bagh, New Delhi, Delhi 110088, India",
      city: "New Delhi",
      country: "India",
      pinCode: "110088",
      location: {
        lat: 28.7160,
        lng: 77.1685
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located in Shalimar Bagh, New Delhi, providing easy access to patients from Delhi-NCR and surrounding regions."
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
      "Orthopedics",
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Pulmonology",
      "Rheumatology",
      "Spine Surgery",
      "Urology"
    ],
    doctors: [
      {
        id: "dr-raju-vyas",
        name: "Dr. Raju Vyas",
        designation: "Director - Cardiac Surgeon",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Raju%20Vyas.jpg"
      },
      {
        id: "dr-kapil-kumar",
        name: "Dr. Kapil Kumar",
        designation: "Director - Surgical Oncologist",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Kapil%20Kumar.jpg"
      },
      {
        id: "dr-rajinder-yadav",
        name: "Dr. Rajinder Yadav",
        designation: "Director - Urologist",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Rajinder%20Yadav.jpg"
      },
      {
        id: "dr-sonal-gupta",
        name: "Dr. Sonal Gupta",
        designation: "Director - Neurosurgeon",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Sonal%20Gupta.jpg"
      }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Fortis Hospital, Shalimar Bagh were highly professional and caring. Great facilities and excellent care."
      },
    ]
  },
  {
    id: "max-super-speciality-hospital-shalimar-bagh-new-delhi",
    name: "Max Super Speciality Hospital, Shalimar Bagh, New Delhi",
    mainImage: "/hospital/max-super-speciality-hospital-shalimar-bagh-new-delhi.webp",
    images: [
      "/hospital/max-super-speciality-hospital-shalimar-bagh-new-delhi.webp",
      "/hospital/max-super-speciality-hospital-shalimar-bagh-new-delhi1.webp",
      "/hospital/max-super-speciality-hospital-shalimar-bagh-new-delhi2.webp",
      "/hospital/max-super-speciality-hospital-shalimar-bagh-new-delhi3.webp"
    ],
    about: {
      title: "About Max Super Speciality Hospital, Shalimar Bagh, New Delhi",
      items: [
        {
          content: "Established in 2011, Max Super Speciality Hospital in Shalimar Bagh, Delhi, is one of the most reputed super-speciality hospitals in the country.",
          isHighlighted: true
        },
        {
          content: "The hospital is accredited by NABH and NABL for its super-speciality services."
        },
        {
          content: "It was the first centre in India to receive recognition from HIMSS."
        },
        {
          content: "The facility has been honoured with the First Global Green OT accreditation."
        },
        {
          content: "With over 400,000 patients successfully treated, it is regarded as one of the best medical institutes in Delhi and India."
        },
        {
          content: "International Patient Services: Max Healthcare offers tailored services for international patients, providing a seamless experience with highly experienced, internationally renowned doctors, advanced medical technology, and a patient-centric approach."
        }
      ]
    },
    established: 2011,
    numberOfBeds: 300,
    specialties: [
      "Cardiology and Cardiac Surgery",
      "Endocrinology",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hematology",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Orthopedics",
      "Pediatric Cardiology",
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
      "State-of-the-art diagnostic and therapeutic technologies.",
      "300-bed facility with specialized units.",
      "Advanced diagnostic devices and specialized centers for complex procedures."
    ],
    address: {
      fullAddress: "FC-50, C and D Block, Shalimar Bagh, New Delhi, Delhi 110088, India",
      city: "New Delhi",
      country: "India",
      pinCode: "110088",
      location: {
        lat: 28.7160,
        lng: 77.1685
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located in Shalimar Bagh, New Delhi, providing easy access to patients from Delhi-NCR and surrounding regions."
        }
      ]
    },
    departments: [
      "Cardiology and Cardiac Surgery",
      "Endocrinology",
      "ENT Surgery",
      "Gastroenterology",
      "General Surgery",
      "Gynecology",
      "Hematology",
      "Nephrology",
      "Neurology and Neurosurgery",
      "Obesity or Bariatric Surgery",
      "Oncology and Oncosurgery",
      "Orthopedics",
      "Pediatric Cardiology",
      "Pediatrics and Pediatric Surgery",
      "Transplant Surgery",
      "Urology",
      "Vascular Surgery"
    ],
    doctors: [
      {
        id: "dr-harit-chaturvedi",
        name: "Dr. Harit Chaturvedi",
        designation: "Chairman - Surgical Oncologist",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Harit%20Chaturvedi.jpg"
      },
      {
        id: "dr-naveen-bhamri",
        name: "Dr. Naveen Bhamri",
        designation: "Associate Director - Interventional Cardiologist",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Naveen%20Bhamri.jpg"
      },
      {
        id: "dr-amit-aslam-khan",
        name: "Dr. Amit Aslam Khan",
        designation: "Senior Consultant - Neurologist",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Amit%20Aslam%20Khan.jpg"
      },
      {
        id: "dr-palash-gupta",
        name: "Dr. Palash Gupta",
        designation: "Director - Orthopaedic and Joint Replacement Surgeon",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Palash%20Gupta.jpg"
      }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Max Super Speciality Hospital, Shalimar Bagh were highly professional and caring. Great facilities and excellent care."
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
    id: "metro-hospital-and-heart-institute-faridabad",
    name: "Metro Hospital and Heart Institute, Faridabad",
    mainImage: "/hospital/metro-hospital-and-heart-institute-faridabad.webp",
    images: [
      "/hospital/metro-hospital-and-heart-institute-faridabad.webp",
      "/hospital/metro-hospital-and-heart-institute-faridabad1.webp",
      "/hospital/metro-hospital-and-heart-institute-faridabad2.webp",
      
    ],
    about: {
      title: "About Metro Hospital and Heart Institute, Faridabad",
      items: [
        {
          content: "Established in 2002, Metro Hospital and Heart Institute is a multi-specialty JCI-accredited hospital located in Faridabad, India.",
          isHighlighted: true
        },
        {
          content: "The hospital was founded by Padma Vibhushan and Dr. B C Roy National Awardee Dr. Purshotam Lal, who serves as the Chairman."
        },
        {
          content: "Dr. Neeraj Jain, a renowned Cardiologist and Cardiac Surgeon, is known for his expertise in angioplasty treatments."
        },
        {
          content: "The hospital operates as two separate units: Metro Heart Institute with 90 beds and Metro Multispecialty Hospital with 307 beds, totaling 400 beds."
        },
        {
          content: "Metro Multispecialty Hospital offers comprehensive treatment across 23+ specialties, including Cardiology, Neurosciences, Orthopedics, Onco-surgeries, Liver & Digestive Diseases, and Mother & Child Care."
        },
        {
          content: "Metro Heart Institute provides advanced services in Preventive Cardiology, Interventional Cardiology, Electrophysiology, Cardiothoracic, and Vascular Surgery."
        }
      ]
    },
    established: 2002,
    numberOfBeds: 400,
    specialties: [
      "Cardiology",
      "Neurosciences",
      "Orthopedics",
      "Onco-surgeries",
      "Liver & Digestive Diseases",
      "Mother & Child Care",
      "Nephrology",
      "Gastroenterology",
      "Pediatrics and Pediatric Surgery",
      "Obesity or Bariatric Surgery"
    ],
    teamSpecialties: [
      "Cardiology",
      "Neurosciences",
      "Orthopedics",
      "Onco-surgeries",
      "Liver & Digestive Diseases"
    ],
    facilities: [
      "24/7 Emergency Services",
      "Advanced Diagnostic Imaging",
      "State-of-the-art Operation Theatres",
      "Intensive Care Units",
      "Blood Bank",
      "Pharmacy",
      "Ambulance Services",
      "Dialysis Unit",
      "Rehabilitation Center"
    ],
    infrastructure: [
      "Endobronchial Ultrasound (EBUS) for minimally invasive procedures.",
      "High-performance digital bone densitometry machine for osteoporosis diagnosis.",
      "1.5 Tesla Siemens Essenza MRI for radiation-free diagnostics.",
      "Automatic Exposure Control (AEC) Mammography for minimal exposure imaging.",
      "High-end CT scanners and fully integrated Cath Labs for precise diagnostics.",
      "Advanced life support equipment in Intensive Care Units.",
      "Well-equipped labor rooms with CTG machines for continuous fetal monitoring.",
      "Ambulances equipped with ECG machines, monitors, defibrillators, and transport ventilators."
    ],
    address: {
      fullAddress: "Metro Heart Institute with Multispeciality, Sector 16A, Faridabad, Haryana 121002, India",
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
          content: "Located in Sector 16A, Faridabad, providing easy access to patients from Delhi-NCR and surrounding regions."
        },
        {
          content: "Approximately 27 km from Indira Gandhi International Airport, New Delhi."
        },
        {
          content: "Close proximity to major malls, shopping complexes, hotels, and budget accommodations."
        }
      ]
    },
    departments: [
      "Cardiology",
      "Neurosciences",
      "Orthopedics",
      "Onco-surgeries",
      "Liver & Digestive Diseases",
      "Mother & Child Care",
      "Nephrology",
      "Gastroenterology",
      "Pediatrics and Pediatric Surgery",
      "Obesity or Bariatric Surgery"
    ],
    doctors: [
      {
        id: "dr-ravi-sahay",
        name: "Dr. Ravi Sahay",
        designation: "Senior Consultant - Surgical Gastroenterologist",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Ravi%20Sahay.jpg"
      },
      {
        id: "dr-ashutosh-srivastava",
        name: "Dr. Ashutosh Srivastava",
        designation: "Senior Consultant - Orthopaedic and Joint Replacement Surgeon",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Ashutosh%20Srivastava.jpg"
      },
      {
        id: "dr-vijender-gupta",
        name: "Dr. Vijender Gupta",
        designation: "Senior Consultant - Advanced Laparoscopic, Minimal Access and Bariatric Surgeon",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Vijender%20Gupta.jpg"
      },
      {
        id: "dr-sagar-gupta",
        name: "Dr. Sagar Gupta",
        designation: "Consultant - Nephrologist",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Sagar%20Gupta.jpg"
      }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Metro Hospital and Heart Institute were highly professional and caring. Great facilities and excellent care."
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
    id: "asian-institute-of-medical-sciences-faridabad",
    name: "Asian Institute of Medical Sciences, Faridabad",
    mainImage: "/hospital/asian-institute-of-medical-sciences-faridabad.webp",
    images: [
      "/hospital/asian-institute-of-medical-sciences-faridabad.webp",
      "/hospital/asian-institute-of-medical-sciences-faridabad1.webp",
      "/hospital/asian-institute-of-medical-sciences-faridabad2.webp",
      "/hospital/asian-institute-of-medical-sciences-faridabad3.webp"
    ],
    about: {
      title: "About Asian Institute of Medical Sciences, Faridabad",
      items: [
        {
          content: "Established in 2010, Asian Institute of Medical Sciences (AIMS) is a 425-bedded super speciality tertiary care hospital located in Faridabad, India.",
          isHighlighted: true
        },
        {
          content: "The hospital is accredited by NABH and NABL, ensuring high standards of patient care and laboratory services."
        },
        {
          content: "AIMS offers comprehensive multi-speciality services across 14 centers of excellence, including Oncology, Cardiology, Urology, Neurology, and more."
        },
        {
          content: "The hospital is equipped with state-of-the-art technology, including advanced imaging facilities like 1.5 Tesla MRI, PET/CT, and a dual-head Gamma camera."
        },
        {
          content: "AIMS has been consistently ranked among the top hospitals in Delhi NCR, including being adjudged as the 4th best hospital in 'The Week-Hansa Research Survey 2018'."
        },
        {
          content: "International Patient Services: AIMS provides tailored services for international patients, ensuring a seamless experience with highly experienced doctors and advanced medical technology."
        }
      ]
    },
    established: 2010,
    numberOfBeds: 425,
    specialties: [
      "Oncology",
      "Cardiology",
      "Urology",
      "Neurology",
      "Orthopedics",
      "Gastroenterology",
      "Nephrology",
      "Mother & Child Care",
      "Bariatric & Metabolic Surgery",
      "Aesthetic Surgery & Medicine"
    ],
    teamSpecialties: [
      "Oncology",
      "Cardiology",
      "Urology",
      "Neurology",
      "Orthopedics"
    ],
    facilities: [
      "24/7 Emergency Services",
      "Advanced Diagnostic Imaging",
      "State-of-the-art Operation Theatres",
      "Intensive Care Units",
      "Blood Bank",
      "Pharmacy",
      "Ambulance Services",
      "Dialysis Unit",
      "Rehabilitation Center"
    ],
    infrastructure: [
      "Advanced imaging facilities including 1.5 Tesla MRI, PET/CT, and dual-head Gamma camera.",
      "State-of-the-art operation theatres equipped with modern surgical instruments.",
      "Comprehensive Intensive Care Units for critical care management.",
      "Dedicated centers for various specialities ensuring focused patient care.",
      "Well-equipped rehabilitation center for post-operative recovery."
    ],
    address: {
      fullAddress: "Sector 21A, Faridabad, Haryana 121001, India",
      city: "Faridabad",
      country: "India",
      pinCode: "121001",
      location: {
        lat: 28.426236,
        lng: 77.299951
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located in Sector 21A, Faridabad, easily accessible from New Delhi International Airport and major transport hubs."
        },
        {
          content: "Proximity to major malls, shopping complexes, hotels, and budget accommodations."
        }
      ]
    },
    departments: [
      "Oncology",
      "Cardiology",
      "Urology",
      "Neurology",
      "Orthopedics",
      "Gastroenterology",
      "Nephrology",
      "Mother & Child Care",
      "Bariatric & Metabolic Surgery",
      "Aesthetic Surgery & Medicine"
    ],
    doctors: [
      {
        id: "dr-praveen-bansal",
        name: "Dr. Praveen Bansal",
        designation: "Medical Oncologist",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Praveen%20Bansal.jpg"
      },
      {
        id: "dr-manav-manchanda",
        name: "Dr. Manav Manchanda",
        designation: "Pulmonologist",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Manav%20Manchanda.jpg"
      },
      {
        id: "dr-vikas-kumar",
        name: "Dr. Vikas Kumar",
        designation: "Radiation Oncologist",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Vikas%20Kumar.jpg"
      },
      {
        id: "dr-pankaj-kumar-hans",
        name: "Dr. Pankaj Kumar Hans",
        designation: "General Surgeon",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Pankaj%20Kumar%20Hans.jpg"
      }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Asian Institute of Medical Sciences were highly professional and caring. Great facilities and excellent care."
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
    id: "indraprastha-apollo-hospital-new-delhi",
    name: "Indraprastha Apollo Hospital, New Delhi",
    mainImage: "/hospital/indraprastha-apollo-hospital-new-delhi.webp",
    images: [
      "/hospital/indraprastha-apollo-hospital-new-delhi.webp",
      "/hospital/indraprastha-apollo-hospital-new-delhi1.webp",
      "/hospital/indraprastha-apollo-hospital-new-delhi2.webp",
      "/hospital/indraprastha-apollo-hospital-new-delhi3.webp"
    ],
    about: {
      title: "About Indraprastha Apollo Hospital, New Delhi",
      items: [
        {
          content: "Established in 1995, Indraprastha Apollo Hospital is a flagship hospital of the Apollo Hospitals Group, India's largest healthcare chain.",
          isHighlighted: true
        },
        {
          content: "The hospital is accredited by Joint Commission International (JCI) and National Accreditation Board for Testing and Calibration Laboratories (NABL), ensuring high standards of patient care and laboratory services."
        },
        {
          content: "It is renowned for its Centres of Excellence in Cardiology, Oncology, Emergency Care, Gastroenterology, Neurology/Neurosurgery, Orthopedics, Robotic Surgery, and Transplant Services."
        },
        {
          content: "The hospital has performed over 2,500 renal transplants in the last decade with excellent results, making it a leading center for renal transplant in India."
        },
        {
          content: "It was the first hospital in India to perform successful pediatric and adult liver transplants in November 1998."
        },
        {
          content: "International Patient Services: The hospital offers comprehensive services for international patients, including visa assistance, airport transfers, travel arrangements, accommodation, and language interpretation."
        }
      ]
    },
    established: 1995,
    numberOfBeds: 710,
    specialties: [
      "Cardiology and Cardiac Surgery",
      "Oncology and Oncosurgery",
      "Neurology and Neurosurgery",
      "Orthopedics",
      "Gastroenterology",
      "Nephrology",
      "Transplant Surgery",
      "Robotic Surgery",
      "Emergency Care",
      "Gynecology",
      "Pediatrics and Pediatric Surgery",
      "Urology",
      "Pulmonology",
      "Endocrinology",
      "ENT Surgery",
      "Dermatology",
      "General Surgery",
      "Ophthalmology",
      "Rheumatology",
      "Spine Surgery",
      "IVF and Infertility",
      "Obesity or Bariatric Surgery",
      "Vascular Surgery"
    ],
    teamSpecialties: [
      "Cardiology and Cardiac Surgery",
      "Oncology and Oncosurgery",
      "Neurology and Neurosurgery",
      "Orthopedics",
      "Gastroenterology"
    ],
    facilities: [
      "24/7 Emergency Services",
      "Advanced Diagnostic Imaging",
      "State-of-the-art Operation Theatres",
      "Intensive Care Units",
      "Blood Bank",
      "Pharmacy",
      "Ambulance Services",
      "Dialysis Unit",
      "Rehabilitation Center",
      "International Patient Lounge",
      "Wi-Fi Enabled Campus",
      "Cafeteria",
      "ATM Services",
      "Prayer Room"
    ],
    infrastructure: [
      "Advanced imaging facilities including 3 Tesla MRI, 128-slice CT scanner, PET-CT, and portable CT scanner.",
      "State-of-the-art operation theatres equipped with modern surgical instruments and robotic surgery systems.",
      "Comprehensive Intensive Care Units for critical care management.",
      "Dedicated centers for various specialties ensuring focused patient care.",
      "Well-equipped rehabilitation center for post-operative recovery."
    ],
    address: {
      fullAddress: "Sarita Vihar, Delhi Mathura Road, New Delhi, Delhi 110076, India",
      city: "New Delhi",
      country: "India",
      pinCode: "110076",
      location: {
        lat: 28.5377,
        lng: 77.2919
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located in Sarita Vihar, New Delhi, easily accessible from Indira Gandhi International Airport and major transport hubs."
        },
        {
          content: "Proximity to major malls, shopping complexes, hotels, and budget accommodations."
        }
      ]
    },
    departments: [
      "Cardiology and Cardiac Surgery",
      "Oncology and Oncosurgery",
      "Neurology and Neurosurgery",
      "Orthopedics",
      "Gastroenterology",
      "Nephrology",
      "Transplant Surgery",
      "Robotic Surgery",
      "Emergency Care",
      "Gynecology",
      "Pediatrics and Pediatric Surgery",
      "Urology",
      "Pulmonology",
      "Endocrinology",
      "ENT Surgery",
      "Dermatology",
      "General Surgery",
      "Ophthalmology",
      "Rheumatology",
      "Spine Surgery",
      "IVF and Infertility",
      "Obesity or Bariatric Surgery",
      "Vascular Surgery"
    ],
    doctors: [
      {
        id: "dr-arun-prasad",
        name: "Dr. Arun Prasad",
        designation: "Senior Consultant - Obesity and Bariatric Surgeon",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Arun%20Prasad.jpg"
      },
      {
        id: "dr-yogesh-batra",
        name: "Dr. Yogesh Batra",
        designation: "Senior Consultant - Medical Gastroenterologist",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Yogesh%20Batra.jpg"
      },
      {
        id: "dr-jaisom-chopra",
        name: "Dr. Jaisom Chopra",
        designation: "Senior Consultant - Vascular Surgeon",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Jaisom%20Chopra.jpg"
      },
      {
        id: "dr-vinod-sukhija",
        name: "Dr. Vinod Sukhija",
        designation: "Senior Consultant - Orthopaedic and Joint Replacement Surgeon",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Vinod%20Sukhija.jpg"
      }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Indraprastha Apollo Hospital were highly professional and caring. Great facilities and excellent care."
      },
    ]
  },
  {
    id: "manipal-hospital-dwarka-delhi",
    name: "Manipal Hospital, Dwarka, Delhi",
    mainImage: "/hospital/manipal-hospital-dwarka-delhi.webp",
    images: [
      "/hospital/manipal-hospital-dwarka-delhi.webp",
      "/hospital/manipal-hospital-dwarka-delhi1.webp",
      "/hospital/manipal-hospital-dwarka-delhi2.webp",
      "/hospital/manipal-hospital-dwarka-delhi3.webp"
    ],
    about: {
      title: "About Manipal Hospital, Dwarka, Delhi",
      items: [
        {
          content: "Established in 2018, Manipal Hospital Dwarka is a multi-super specialty tertiary care healthcare facility delivering world-class healthcare at an optimum cost.",
          isHighlighted: true
        },
        {
          content: "The hospital is part of the renowned Manipal Education and Medical Group, which was established in 1953 as Kasturba Medical College in Manipal, Karnataka."
        },
        {
          content: "It is accredited by the National Accreditation Board for Hospitals & Healthcare Providers (NABH) and the National Accreditation Board for Testing and Calibration Laboratories (NABL)."
        },
        {
          content: "The hospital is equipped with 380 beds, 13 state-of-the-art operation theatres, and 118 critical care beds, providing comprehensive medical services across various specialties."
        },
        {
          content: "Manipal Hospital Dwarka has been recognized with several awards, including the Best Multi-Speciality Hospital in Delhi NCR by India Healthcare Awards in 2021."
        },
        {
          content: "International Patient Services: The hospital offers comprehensive services for international patients, ensuring a seamless experience with highly experienced doctors and advanced medical technology."
        }
      ]
    },
    established: 2018,
    numberOfBeds: 380,
    specialties: [
      "Cardiology",
      "Oncology",
      "Neurology",
      "Orthopedics",
      "Gastroenterology",
      "Nephrology",
      "Urology",
      "Obstetrics and Gynaecology",
      "Paediatrics and Child Care",
      "Emergency Medicine",
      "Critical Care Medicine",
      "Dermatology",
      "Endocrinology",
      "ENT",
      "General Surgery",
      "Plastic and Reconstructive Surgery",
      "Pulmonology",
      "Rheumatology",
      "Spine Care",
      "Transplant Surgery"
    ],
    teamSpecialties: [
      "Cardiology",
      "Oncology",
      "Neurology",
      "Orthopedics",
      "Gastroenterology"
    ],
    facilities: [
      "24/7 Emergency Services",
      "Advanced Diagnostic Imaging",
      "State-of-the-art Operation Theatres",
      "Intensive Care Units",
      "Blood Bank",
      "Pharmacy",
      "Ambulance Services",
      "Dialysis Unit",
      "Rehabilitation Center",
      "Telemedicine Services",
      "Automated Pneumatic Chute System",
      "Electronic Medical Records",
      "Cafeteria",
      "ATM Services"
    ],
    infrastructure: [
      "Advanced imaging facilities including 3 Tesla MRI, 128-slice CT scanner, and PET-CT.",
      "13 state-of-the-art operation theatres equipped with modern surgical instruments.",
      "118 critical care beds for comprehensive intensive care management.",
      "Automated pneumatic chute system for efficient specimen transport.",
      "Electronic Medical Records (EMR) system for seamless patient data management."
    ],
    address: {
      fullAddress: "Sector 6, Dwarka, New Delhi, Delhi 110075, India",
      city: "New Delhi",
      country: "India",
      pinCode: "110075",
      location: {
        lat: 28.5921,
        lng: 77.0209
      }
    },
    location: {
      title: "Location Details",
      items: [
        {
          content: "Located in Sector 6, Dwarka, New Delhi, easily accessible from Indira Gandhi International Airport and major transport hubs."
        },
        {
          content: "Proximity to major malls, shopping complexes, hotels, and budget accommodations."
        }
      ]
    },
    departments: [
      "Cardiology",
      "Oncology",
      "Neurology",
      "Orthopedics",
      "Gastroenterology",
      "Nephrology",
      "Urology",
      "Obstetrics and Gynaecology",
      "Paediatrics and Child Care",
      "Emergency Medicine",
      "Critical Care Medicine",
      "Dermatology",
      "Endocrinology",
      "ENT",
      "General Surgery",
      "Plastic and Reconstructive Surgery",
      "Pulmonology",
      "Rheumatology",
      "Spine Care",
      "Transplant Surgery"
    ],
    doctors: [
      {
        id: "dr-rajeev-verma",
        name: "Dr. Rajeev Verma",
        designation: "Senior Consultant - Orthopaedic and Joint Replacement Surgeon",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Rajeev%20Verma.jpg"
      },
      {
        id: "dr-smita-mishra",
        name: "Dr. Smita Mishra",
        designation: "HOD - Pediatric Cardiologist",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Smita%20Mishra.jpg"
      },
      {
        id: "dr-avnish-seth",
        name: "Dr. (Col) Avnish Seth",
        designation: "Head of Department - Medical Gastroenterologist",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Avnish%20Seth.jpg"
      },
      {
        id: "dr-vineet-kumar-surana",
        name: "Dr. Vineet Kumar Surana",
        designation: "Consultant - Endocrinologist",
        image: "https://www.vaidam.com/sites/default/files/doctor_image/Dr.%20Vineet%20Kumar%20Surana.jpg"
      }
    ],
    reviews: [
      {
        name: "Amit Kumar",
        date: "2023-05-12",
        rating: 5,
        content: "The doctors and staff at Manipal Hospital Dwarka were highly professional and caring. Great facilities and excellent care."
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
  