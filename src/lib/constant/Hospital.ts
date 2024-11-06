import { Hospital } from "@/types/hospital";

export const hospitalData: Hospital[] = [
  {
    id: "max-super-speciality-hospital-saket",
    name: "Max Super Speciality Hospital, Saket",
    mainImage: "https://d1ea147o02h74h.cloudfront.net/hospitals/max_hospital_saket_building1-min.jpg",
    images: [
      "https://www.vaidam.com/sites/default/files/hospital_image/Max%20Super%20Speciality%20Hospital%2C%20Saket%2C%20New%20Delhi.jpg",
      "https://www.vaidam.com/sites/default/files/hospital_image/Max%20Super%20Speciality%20Hospital%2C%20Saket%2C%20New%20Delhi%20-%20Interior.jpg",
      "https://www.vaidam.com/sites/default/files/hospital_image/Max%20Super%20Speciality%20Hospital%2C%20Saket%2C%20New%20Delhi%20-%20Lobby.jpg"
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
      city: "New Delhi",
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
  }
];
  