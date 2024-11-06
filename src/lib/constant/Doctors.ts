import { Doctor } from "@/types/doctors";

export const doctors:Doctor[] = [
    {
        id: "dr-aruna-kalra",
        name: "Dr. Aruna Kalra",
        yearsOfExperience: 28,
        designation: "Director, MBBS, MD",
        image: "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
        workingAt: "CK Birla Hospital, Gurgaon",
        hospitalId: "ck-birla-hospital-gurgaon",
        about: {
            title: "About Dr. Aruna Kalra",
            items: [
                { content: "Dr. Aruna Kalra is one of the best Gynecologists and Obstetricians in India with over 28 years of experience." },
                { content: "Her areas of expertise include high-risk pregnancy care, minimal invasive gyne-onco surgeries for ovarian cancer, uterine cancer and many more." },
                { content: "Dr. Kalra is also trained in Da Vinci System robotic surgeries." },
                { content: "After her MBBS from Kasturba Medical College in 1996, she did MD (Obstetrics & Gynaecology) from Mangalore University in 2000." },
                { content: "She has also received Gold Medal during her MD and also in a quiz competition." },
                { content: "Dr. Kalra is an active member of the Federation of Obstetric and Gynaecological Societies of India (FOGSI) and the Gurgaon Obstetrics & Gynaecological Society (GOGS)." }
            ]
        },
        specialties: [
            "Laparoscopic myomectomy",
            "Laparoscopy hysterectomy",
            "Vaginal birth after cesarean (VBAC)",
            "Vaginal Prolapse / Vaginal Hysterectomy"
        ],
        skilledAt: [
            "Ovarian Cyst Removal",
            "Recurrent Miscarriage Treatment",
            "Hysteroscopy",
            "Oophorectomy",
            "Polypectomy",
            "Radical Hysterectomy with Lymph Node Dissection",
            "Myomectomy",
            "Cesarean section",
            "Hysterectomy",
            "Salpingectomy",
            "ICSI"
        ],
        specialInterests: [
            "Laparoscopic myomectomy",
            "Laparoscopy hysterectomy",
            "Vaginal birth after cesarean (VBAC)",
            "Vaginal Prolapse / Vaginal Hysterectomy"
        ],
        education: [
            "MBBS from Kasturba Medical College, 1996",
            "MD (Obstetrics & Gynaecology) from Mangalore University, 2000"
        ],
        experience: [
            "Director at CK Birla Hospital, Gurgaon",
            "28 years of overall experience in Gynaecology and Obstetrics"
        ],
        awards: [
            "Gold Medal during MD",
            "Quiz competition winner"
        ],
        reviews: [
            {
                name: "Anjali Sharma",
                date: "2024-10-01",
                rating: 5,
                content: "Dr. Aruna Kalra is an amazing gynecologist. She made me feel comfortable during the entire process and provided excellent care."
            },
            {
                name: "Ravi Verma",
                date: "2024-09-15",
                rating: 4,
                content: "Highly skilled and knowledgeable. She took time to explain everything clearly and was very supportive throughout."
            }
        ]
    },
    {
        id: "dr-sanjiv-saigal-hepatology",
        name: "Dr. Sanjiv Saigal",
        yearsOfExperience: 30,
        designation: "Director, MBBS, MD",
        image: "https://d1ea147o02h74h.cloudfront.net/dr-sanjiv.jpg",
        workingAt: "Max Super Speciality Hospital, Saket, New Delhi",
        hospitalId: "ck-birla-hospital-gurgaon",
        about: {
            title: "About Dr. Sanjiv Saigal",
            items: [
                { content: "A trained Hepatologist, has spearheaded the medical team of liver transplantation in the largest liver transplant program in India for over a decade" },
                { content: "Performed 1500 liver transplants, including both cadaveric and living donor liver transplants" },
                { content: "Perform about 25 liver transplants every month with a success rate of over 90%" },
                { content: "Expertise in Liver Transplantation (Transplant Hepatology), Acute Liver Failure, Viral Hepatitis, Alcoholic Liver Disease, Liver Cancer & Drug Induced Liver Disease" },
                { content: "Published over 130 presentations in national and international forums" },
                { content: "Received numerous awards including the Calcutta University Gold Medal, National Pfizer award, INLAKS Fellowship in liver transplantation in King’s College Hospital, London etc" },
                { content: "Member of Royal College of Physicians (MRCP) and Member of National Academy of Medical Sciences (MAMS)"}
            ]
        },
        specialties: [
            "Liver Transplantation (Transplant Hepatology",
            "Acute Liver Failure",
            "Viral Hepatitis",
            "Alcoholic Liver Disease,",
            "Liver Cancer & Drug Induced Liver Disease"
        ],
        skilledAt: [
            "Liver Transplant"
        ],
        specialInterests: [
        
        ],
        education: [
            "MBBS, 1989, Royal College of Physicians, London",
            "MD, 1994, Institute of Medical Education and Research",
            "MRCP, 1996, Royal College of Physicians, London",
            "MRCP, 1999, Royal College of Physicians, London",
            "DM, 1998, G.B Pant University of Agri & Tech.",
            "DNB, 1996, National Borad of Examinations Ministry of Health Government of India"
        ],
        experience: [
            "Director, Medanta - The Medicity, Gurgaon",
            "Consultant, Sir Ganga Ram Hospital, New Delhi",
            "Consultant, King's College Hospital, London, United Kingdom",
            "Consultant, G.B Pant Hospital"
        ],
        awards: [
          
        ],
        reviews: [
            {
                name: "Anjali Sharma",
                date: "2024-10-01",
                rating: 5,
                content: "Dr. Aruna Kalra is an amazing gynecologist. She made me feel comfortable during the entire process and provided excellent care."
            },
            {
                name: "Ravi Verma",
                date: "2024-09-15",
                rating: 4,
                content: "Highly skilled and knowledgeable. She took time to explain everything clearly and was very supportive throughout."
            }
        ]
    },
    
    {
        id: "dr-manjit-singh-paul",
        name: "Dr. Manjit Singh Paul",
        yearsOfExperience: 46,
        designation: "Director",
        image: "https://d1ea147o02h74h.cloudfront.net/dr-atul-mittal.jpg",
        workingAt: "Max Multi Speciality Hospital, Panchsheel Park ",
        hospitalId: "max-multi-speciality-hospital-panchsheel-park",
        about: {
          title: "About Dr. Manjit Singh Paul",
          items: [
            {
              content: "Dr. Manjit Singh Paul is a gastroenterologist with over 46 years of experience.",
              isHighlighted: true,
            },
            {
              content: "He is a life member of the Association of Physicians of India and the Indian Society of Gastroenterology, and a member of the Delhi Chapter of the Association of Physicians.",
            },
            {
              content: "He has vast teaching experience and has taught at the Armed Forces (R & R) & Base Hospital, New Delhi.",
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
      }
    
]