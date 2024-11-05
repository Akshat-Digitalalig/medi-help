import { Hospital } from "@/types/hospital";

export const hospitalData: Hospital[] = [
   {
    id: "apollo-hospitals-greams-road-chennai",
    name: "Apollo Hospitals, Greams Road, Chennai",
    mainImage: "https://cdn.apollohospitals.com/dev-apollohospitals/2020/12/kochi_hospital_apollo.jpg",
    images: [
      "https://d1ea147o02h74h.cloudfront.net/apollo-hospitals-greams-road-chennai_room-min.jpg",
      "https://d1ea147o02h74h.cloudfront.net/apollo-hospitals-greams-road-chennai_lobby-min.jpg",
      "https://d1ea147o02h74h.cloudfront.net/apollo-hospitals-greams-road-chennai_icu-min.jpg"
    ],
    about: {
      title: "About Apollo Hospitals, Greams Road, Chennai",
      items: [
        {
          content: "Apollo Hospitals, Greams Road, Chennai is known for its specialized care, especially for heart-related issues, making it one of the best hospitals in India.",
          isHighlighted: true
        },
        {
          content:"It was the first hospital in India to introduce advanced techniques in heart procedures and brain tumour treatments."
        },
        {
          content:" With accreditations from NABH and JCI, Apollo Hospital in Chennai continues to be a leader in providing top-notch healthcare services."
        },
        {
          content:" With accreditations from NABH and JCI, Apollo Hospital in Chennai continues to be a leader in providing top-notch healthcare services."
        },
        {
          content:"The hospital has received prestigious accreditations and recognitions, including being the first in South India to be accredited by the Joint Commission International USA and being declared a Centre of Excellence by the Government of India. "
        },
        {
          content:"The hospital receives over 10,000 pharmacy walk-ins and 2200 admissions daily. "
        },
        {
          content:"It serves a large number of patients daily and has been consistently voted as the Best Private Sector Hospital in India by The Week magazine. "
        },
        {
          content:"The hospital's excellence is further affirmed by its top rankings in the All India Multispecialty Hospital Survey 2016 conducted by Times Health. "
        },
        {
          content:"Apollo Chennai is also known for performing India's first successful pancreas transplant. "
        },
        {
          content:"The hospital has also successfully performed Asia's first en-bloc combined heart and liver transplant, attaining a remarkable achievement in the global healthcare space. "
        },
        {
          content:"It has a strong track record, with over 1,52,000 cardiac and cardiothoracic surgeries performed. "
        },
        {
          content: "International Patients Services;",
          isHighlighted: true,
          subItems: [
            "Every year, the hospital provides medical care to more than 20,000 patients from around the world.",
            "It offers a range of services for international patients, including visa assistance, airport transfers, accommodation arrangements, language interpretation, medical coordination, treatment packages, and travel recommendations."
          ]
        },
        {
          content: "It is a multi-specialty hospital with a team of highly skilled doctors and state-of-the-art infrastructure."
        }
      ]
    },
    established: 1983,
    numberOfBeds: 560,
    specialties: [
      "Cardiology",
      "Neurology",
      "Orthopedics",
      "Gastroenterology",
      "Oncology"
    ],
    teamSpecialties: [
      "Cardiac Surgeons",
      "Neurologists",
      "Orthopedic Specialists",
      "Gastroenterologists",
      "Oncologists"
    ],
    facilities: [
      "24x7 Emergency Services",
      "Pharmacy",
      "Diagnostic Imaging",
      "ICU",
      "Blood Bank"
    ],
    infrastructure: [
      "Modern Operating Theaters",
      "Advanced ICU",
      "Cardiac Care Unit",
      "State-of-the-Art Diagnostic Center"
    ],
    address: {
      fullAddress: "21, Greams Lane, Off Greams Road, Chennai, Tamil Nadu, India",
      city: "Chennai",
      country: "India",
      pinCode: "600006",
      location: {
        lat: 13.060422,
        lng: 80.247515
      }
    },
    location: {
      title: "Location Information",
      items: [
        {
          content: "Apollo Hospitals is located in the heart of Chennai, providing easy access for patients coming from different parts of the city.",
          subItems: [
            "Near Spencer Plaza Mall",
            "Close to Greams Road Bus Stop"
          ]
        },
        {
          content: "The hospital is approximately 18 km from Chennai International Airport."
        }
      ]
    },
    departments: [
      "Cardiology",
      "Neurology",
      "Orthopedics",
      "Gastroenterology",
      "Oncology",
      "Pediatrics",
      "Urology"
    ],
    doctors: [
      {
        id: "doc1",
        name: "Dr. Rajesh Kumar",
        designation: "Chief Cardiologist",
        image: "https://example.com/doctor1.jpg"
      },
      {
        id: "doc2",
        name: "Dr. Anjali Verma",
        designation: "Senior Neurologist",
        image: "https://example.com/doctor2.jpg"
      },
      {
        id: "doc3",
        name: "Dr. Sandeep Reddy",
        designation: "Orthopedic Surgeon",
        image: "https://example.com/doctor3.jpg"
      }
    ],
    reviews: [
      {
        name: "Rahul Sharma",
        date: "2024-09-15",
        rating: 4.8,
        content: "The doctors and staff at Apollo Hospitals are highly professional and provide excellent care."
      },
      {
        name: "Priya Mehta",
        date: "2024-08-10",
        rating: 4.5,
        content: "Good facilities and infrastructure. The waiting time could be improved."
      },
      {
        name: "Arjun Singh",
        date: "2024-07-25",
        rating: 4.7,
        content: "Received excellent treatment for a heart-related issue. Highly recommend the cardiac team."
      }
    ]
  },
  {
    "id": "max-super-speciality-hospital-saket-new-delhi",
    "name": "Max Super Speciality Hospital, Saket, New Delhi",
    "mainImage": "https://d1ea147o02h74h.cloudfront.net/hospitals/max_hospital_saket_building-min.jpg",
    "images": [
      "https://example.com/max-hospital-room.jpg",
      "https://example.com/max-hospital-lobby.jpg",
      "https://example.com/max-hospital-icu.jpg"
    ],
    "about": {
      "title": "About Max Super Speciality Hospital, Saket, New Delhi",
      "items": [
        {
          "content": "Max Hospital in Saket is renowned for multi-specialty treatments and advanced healthcare services.",
          "isHighlighted": true
        },
        {
          "content": "Known for expertise in complex surgeries, organ transplants, and comprehensive cancer treatment.",
          "isHighlighted": true,
          "subItems": [
            "Oncology",
            "Organ Transplants"
          ]
        },
        {
          "content": "Provides cutting-edge technology and a highly skilled medical team."
        }
      ]
    },
    "established": 2006,
    "numberOfBeds": 500,
    "specialties": [
      "Cardiology",
      "Oncology",
      "Orthopedics",
      "Neurology",
      "Urology"
    ],
    "teamSpecialties": [
      "Cardiac Surgeons",
      "Oncologists",
      "Orthopedic Surgeons",
      "Neurologists",
      "Urologists"
    ],
    "facilities": [
      "Emergency Services",
      "Pharmacy",
      "ICU",
      "Blood Bank",
      "Ambulance Service"
    ],
    "infrastructure": [
      "Modern Operation Theaters",
      "Advanced ICU Facilities",
      "Specialized Cancer Center",
      "Comprehensive Diagnostic Services"
    ],
    "address": {
      "fullAddress": "1,2 Press Enclave Road, Saket, New Delhi, India",
      "city": "New Delhi",
      "country": "India",
      "pinCode": "110017",
      "location": {
        "lat": 28.5245,
        "lng": 77.2066
      }
    },
    "location": {
      "title": "Location Information",
      "items": [
        {
          "content": "Located in Saket, providing easy access to the southern part of New Delhi.",
          "subItems": [
            "Near Select City Walk Mall",
            "Close to Malviya Nagar Metro Station"
          ]
        },
        {
          "content": "Approximately 15 km from Indira Gandhi International Airport."
        }
      ]
    },
    "departments": [
      "Cardiology",
      "Oncology",
      "Neurology",
      "Orthopedics",
      "Pediatrics",
      "Urology"
    ],
    "doctors": [
      {
        "id": "doc1",
        "name": "Dr. Meera Sinha",
        "designation": "Senior Oncologist",
        "image": "https://example.com/doctor1.jpg"
      },
      {
        "id": "doc2",
        "name": "Dr. Rohit Gupta",
        "designation": "Chief Cardiologist",
        "image": "https://example.com/doctor2.jpg"
      },
      {
        "id": "doc3",
        "name": "Dr. Kavita Sharma",
        "designation": "Neurologist",
        "image": "https://example.com/doctor3.jpg"
      }
    ],
    "reviews": [
      {
        "name": "Amit Verma",
        "date": "2024-10-12",
        "rating": 4.6,
        "content": "Excellent healthcare services, professional staff."
      },
      {
        "name": "Riya Malhotra",
        "date": "2024-09-18",
        "rating": 4.4,
        "content": "The oncology department is top-notch with advanced treatment facilities."
      },
      {
        "name": "Sunil Kumar",
        "date": "2024-08-25",
        "rating": 4.7,
        "content": "Good infrastructure, very attentive doctors, and staff."
      }
    ]
  },
  {
    "id": "max-hospital-gurgaon",
    "name": "Max Hospital, Gurgaon",
    "mainImage": "https://d1ea147o02h74h.cloudfront.net/hospitals/gurgaon_facade-1-min.jpg",
    "images": [
      "https://example.com/max-hospital-gurgaon-room.jpg",
      "https://example.com/max-hospital-gurgaon-lobby.jpg",
      "https://example.com/max-hospital-gurgaon-icu.jpg"
    ],
    "about": {
      "title": "About Max Hospital, Gurgaon",
      "items": [
        {
          "content": "Max Hospital, Gurgaon is a leading facility for multi-specialty healthcare services in Haryana.",
          "isHighlighted": true
        },
        {
          "content": "Renowned for specialties in oncology, cardiac care, and joint replacement surgery.",
          "isHighlighted": true,
          "subItems": [
            "Oncology",
            "Cardiac Surgery",
            "Orthopedics"
          ]
        },
        {
          "content": "Offers state-of-the-art technology and a highly trained medical team."
        }
      ]
    },
    "established": 2012,
    "numberOfBeds": 350,
    "specialties": [
      "Cardiology",
      "Oncology",
      "Orthopedics",
      "Neurology",
      "Gastroenterology"
    ],
    "teamSpecialties": [
      "Cardiologists",
      "Oncologists",
      "Orthopedic Surgeons",
      "Neurologists",
      "Gastroenterologists"
    ],
    "facilities": [
      "Emergency Services",
      "Pharmacy",
      "ICU",
      "Blood Bank",
      "Diagnostic Imaging"
    ],
    "infrastructure": [
      "Advanced Operation Theaters",
      "Critical Care Units",
      "Cancer Care Center",
      "Comprehensive Diagnostic Services"
    ],
    "address": {
      "fullAddress": "Block B, Sushant Lok 1, Gurgaon, Haryana, India",
      "city": "Gurgaon",
      "country": "India",
      "pinCode": "122001",
      "location": {
        "lat": 28.4595,
        "lng": 77.0266
      }
    },
    "location": {
      "title": "Location Information",
      "items": [
        {
          "content": "Located in the heart of Gurgaon, accessible from various parts of the city.",
          "subItems": [
            "Near Huda City Centre Metro Station",
            "Close to Sushant Lok"
          ]
        },
        {
          "content": "Approximately 20 km from Indira Gandhi International Airport."
        }
      ]
    },
    "departments": [
      "Cardiology",
      "Oncology",
      "Neurology",
      "Orthopedics",
      "Pediatrics",
      "Urology"
    ],
    "doctors": [
      {
        "id": "doc1",
        "name": "Dr. Anil Sharma",
        "designation": "Senior Cardiologist",
        "image": "https://example.com/doctor1.jpg"
      },
      {
        "id": "doc2",
        "name": "Dr. Kavita Gupta",
        "designation": "Senior Oncologist",
        "image": "https://example.com/doctor2.jpg"
      },
      {
        "id": "doc3",
        "name": "Dr. Rajiv Mehta",
        "designation": "Orthopedic Surgeon",
        "image": "https://example.com/doctor3.jpg"
      }
    ],
    "reviews": [
      {
        "name": "Anita Bhardwaj",
        "date": "2024-10-05",
        "rating": 4.5,
        "content": "Well-equipped hospital with professional staff and advanced medical services."
      },
      {
        "name": "Vikram Singh",
        "date": "2024-09-10",
        "rating": 4.6,
        "content": "Good care provided in the cardiac department. Facilities are excellent."
      },
      {
        "name": "Sakshi Verma",
        "date": "2024-08-18",
        "rating": 4.3,
        "content": "Great experience, though waiting times can be improved."
      }
    ]
  },
  {
    "id": "max-super-speciality-hospital-patparganj-new-delhi",
    "name": "Max Super Speciality Hospital, Patparganj, New Delhi",
    "mainImage": "https://d1ea147o02h74h.cloudfront.net/hospitals/patparganj_facade-1-min.jpg",
    "images": [
      "https://example.com/max-hospital-patparganj-room.jpg",
      "https://example.com/max-hospital-patparganj-lobby.jpg",
      "https://example.com/max-hospital-patparganj-icu.jpg"
    ],
    "about": {
      "title": "About Max Super Speciality Hospital, Patparganj, New Delhi",
      "items": [
        {
          "content": "Max Super Speciality Hospital, Patparganj, is a well-regarded multi-specialty hospital in East Delhi.",
          "isHighlighted": true
        },
        {
          "content": "Recognized for specialized treatments, particularly in oncology and cardiac care.",
          "isHighlighted": true,
          "subItems": [
            "Oncology",
            "Cardiac Care"
          ]
        },
        {
          "content": "Equipped with advanced technology and an experienced medical team."
        }
      ]
    },
    "established": 2005,
    "numberOfBeds": 400,
    "specialties": [
      "Cardiology",
      "Oncology",
      "Orthopedics",
      "Neurology",
      "Gastroenterology"
    ],
    "teamSpecialties": [
      "Cardiologists",
      "Oncologists",
      "Orthopedic Surgeons",
      "Neurologists",
      "Gastroenterologists"
    ],
    "facilities": [
      "Emergency Services",
      "Pharmacy",
      "ICU",
      "Blood Bank",
      "Diagnostic Imaging"
    ],
    "infrastructure": [
      "Modern Operation Theaters",
      "Advanced Critical Care Units",
      "Cancer Treatment Center",
      "Comprehensive Diagnostic Services"
    ],
    "address": {
      "fullAddress": "108A, IP Extension, Patparganj, New Delhi, India",
      "city": "New Delhi",
      "country": "India",
      "pinCode": "110092",
      "location": {
        "lat": 28.6295,
        "lng": 77.2865
      }
    },
    "location": {
      "title": "Location Information",
      "items": [
        {
          "content": "Located in East Delhi, accessible for patients from Patparganj and nearby areas.",
          "subItems": [
            "Near Madhu Vihar",
            "Close to IP Extension Metro Station"
          ]
        },
        {
          "content": "Approximately 30 km from Indira Gandhi International Airport."
        }
      ]
    },
    "departments": [
      "Cardiology",
      "Oncology",
      "Neurology",
      "Orthopedics",
      "Pediatrics",
      "Urology"
    ],
    "doctors": [
      {
        "id": "doc1",
        "name": "Dr. Priya Khanna",
        "designation": "Senior Oncologist",
        "image": "https://example.com/doctor1.jpg"
      },
      {
        "id": "doc2",
        "name": "Dr. Rakesh Agarwal",
        "designation": "Cardiologist",
        "image": "https://example.com/doctor2.jpg"
      },
      {
        "id": "doc3",
        "name": "Dr. Meera Patel",
        "designation": "Orthopedic Surgeon",
        "image": "https://example.com/doctor3.jpg"
      }
    ],
    "reviews": [
      {
        "name": "Manish Sethi",
        "date": "2024-09-20",
        "rating": 4.6,
        "content": "Exceptional care, the oncology department is highly skilled."
      },
      {
        "name": "Divya Rao",
        "date": "2024-08-15",
        "rating": 4.4,
        "content": "Good facilities and attentive staff."
      },
      {
        "name": "Arjun Malhotra",
        "date": "2024-07-10",
        "rating": 4.5,
        "content": "Efficient service, great infrastructure."
      }
    ]
  },
  {
    "id": "max-super-speciality-hospital-vaishali",
    "name": "Max Super Speciality Hospital, Vaishali",
    "mainImage": "https://d1ea147o02h74h.cloudfront.net/hospitals/vaishali_facade-3-min.jpg",
    "images": [
      "https://example.com/max-hospital-vaishali-room.jpg",
      "https://example.com/max-hospital-vaishali-lobby.jpg",
      "https://example.com/max-hospital-vaishali-icu.jpg"
    ],
    "about": {
      "title": "About Max Super Speciality Hospital, Vaishali",
      "items": [
        {
          "content": "Max Super Speciality Hospital, Vaishali, provides advanced medical treatments in Ghaziabad.",
          "isHighlighted": true
        },
        {
          "content": "The hospital specializes in various fields, including cardiology, neurology, and oncology.",
          "isHighlighted": true,
          "subItems": [
            "Cardiac Care",
            "Neurosciences",
            "Oncology"
          ]
        },
        {
          "content": "Equipped with cutting-edge technology and experienced medical professionals."
        }
      ]
    },
    "established": 2010,
    "numberOfBeds": 300,
    "specialties": [
      "Cardiology",
      "Neurology",
      "Oncology",
      "Orthopedics",
      "Gastroenterology"
    ],
    "teamSpecialties": [
      "Cardiologists",
      "Neurologists",
      "Oncologists",
      "Orthopedic Surgeons",
      "Gastroenterologists"
    ],
    "facilities": [
      "24x7 Emergency Services",
      "ICU",
      "Blood Bank",
      "Diagnostic Imaging",
      "Pharmacy"
    ],
    "infrastructure": [
      "Modern Operation Theaters",
      "Critical Care Units",
      "Cancer Treatment Center",
      "Comprehensive Diagnostic Labs"
    ],
    "address": {
      "fullAddress": "W-3, Near Vaishali Metro Station, Sector 1, Vaishali, Ghaziabad, Uttar Pradesh, India",
      "city": "Ghaziabad",
      "country": "India",
      "pinCode": "201012",
      "location": {
        "lat": 28.6353,
        "lng": 77.354
      }
    },
    "location": {
      "title": "Location Information",
      "items": [
        {
          "content": "Located near Vaishali Metro Station, accessible from major parts of Ghaziabad.",
          "subItems": [
            "Adjacent to Sector 1",
            "Close to Vaishali Metro Station"
          ]
        },
        {
          "content": "Approximately 28 km from Indira Gandhi International Airport."
        }
      ]
    },
    "departments": [
      "Cardiology",
      "Neurology",
      "Oncology",
      "Orthopedics",
      "Pediatrics",
      "Urology"
    ],
    "doctors": [
      {
        "id": "doc1",
        "name": "Dr. Vishal Malik",
        "designation": "Senior Cardiologist",
        "image": "https://example.com/doctor1.jpg"
      },
      {
        "id": "doc2",
        "name": "Dr. Swati Mehra",
        "designation": "Senior Oncologist",
        "image": "https://example.com/doctor2.jpg"
      },
      {
        "id": "doc3",
        "name": "Dr. Rahul Gupta",
        "designation": "Orthopedic Surgeon",
        "image": "https://example.com/doctor3.jpg"
      }
    ],
    "reviews": [
      {
        "name": "Suresh Kumar",
        "date": "2024-10-10",
        "rating": 4.5,
        "content": "Excellent cardiac care facilities and attentive staff."
      },
      {
        "name": "Ananya Sharma",
        "date": "2024-08-18",
        "rating": 4.4,
        "content": "Good infrastructure and caring team."
      },
      {
        "name": "Rajesh Nair",
        "date": "2024-07-25",
        "rating": 4.6,
        "content": "Great service but room availability can be an issue."
      }
    ]
  },
  {
    "id": "blk-super-specialty-hospital-new-delhi",
    "name": "BLK Super Specialty Hospital, New Delhi",
    "mainImage": "https://d1ea147o02h74h.cloudfront.net/hospitals/blk_facade-1-min.jpg",
    "images": [
      "https://example.com/blk-hospital-room.jpg",
      "https://example.com/blk-hospital-lobby.jpg",
      "https://example.com/blk-hospital-icu.jpg"
    ],
    "about": {
      "title": "About BLK Super Specialty Hospital, New Delhi",
      "items": [
        {
          "content": "BLK Super Specialty Hospital is one of India's leading multi-specialty hospitals, known for advanced treatments in oncology, cardiology, and more.",
          "isHighlighted": true
        },
        {
          "content": "Specializes in heart care, organ transplants, and cancer treatment.",
          "isHighlighted": true,
          "subItems": [
            "Heart Care",
            "Organ Transplants",
            "Cancer Treatment"
          ]
        },
        {
          "content": "Equipped with state-of-the-art medical facilities and a team of experienced professionals."
        }
      ]
    },
    "established": 1959,
    "numberOfBeds": 650,
    "specialties": [
      "Oncology",
      "Cardiology",
      "Orthopedics",
      "Neurology",
      "Gastroenterology"
    ],
    "teamSpecialties": [
      "Oncologists",
      "Cardiologists",
      "Orthopedic Surgeons",
      "Neurologists",
      "Gastroenterologists"
    ],
    "facilities": [
      "24x7 Emergency Services",
      "ICU",
      "Blood Bank",
      "Pharmacy",
      "Advanced Diagnostics"
    ],
    "infrastructure": [
      "Modern Operating Theaters",
      "Transplant Unit",
      "Critical Care Units",
      "Comprehensive Cancer Center"
    ],
    "address": {
      "fullAddress": "Pusa Road, New Delhi, India",
      "city": "New Delhi",
      "country": "India",
      "pinCode": "110005",
      "location": {
        "lat": 28.6419,
        "lng": 77.1781
      }
    },
    "location": {
      "title": "Location Information",
      "items": [
        {
          "content": "Located in central New Delhi, providing accessibility for patients across the region.",
          "subItems": [
            "Near Rajendra Place Metro Station",
            "Close to Karol Bagh"
          ]
        },
        {
          "content": "Approximately 15 km from Indira Gandhi International Airport."
        }
      ]
    },
    "departments": [
      "Oncology",
      "Cardiology",
      "Orthopedics",
      "Neurology",
      "Gastroenterology",
      "Urology",
      "Pediatrics"
    ],
    "doctors": [
      {
        "id": "doc1",
        "name": "Dr. Anil Kumar",
        "designation": "Senior Oncologist",
        "image": "https://example.com/doctor1.jpg"
      },
      {
        "id": "doc2",
        "name": "Dr. Ritu Gupta",
        "designation": "Cardiologist",
        "image": "https://example.com/doctor2.jpg"
      },
      {
        "id": "doc3",
        "name": "Dr. Karan Singh",
        "designation": "Orthopedic Surgeon",
        "image": "https://example.com/doctor3.jpg"
      }
    ],
    "reviews": [
      {
        "name": "Meena Joshi",
        "date": "2024-09-25",
        "rating": 4.7,
        "content": "The facilities and care at BLK are exceptional. Highly recommended."
      },
      {
        "name": "Amit Verma",
        "date": "2024-08-12",
        "rating": 4.5,
        "content": "Great experience, knowledgeable doctors."
      },
      {
        "name": "Sneha Patil",
        "date": "2024-07-18",
        "rating": 4.6,
        "content": "Efficient staff and excellent service in emergency care."
      }
    ]
  } 
  
];
  