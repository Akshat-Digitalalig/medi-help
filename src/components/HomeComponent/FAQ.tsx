import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqQuestionsAndAnswers = [
    {
        question: "What are the hospital's visiting hours?",
        answer: "Visiting hours vary depending on the department. Generally, visiting hours are from 9:00 AM to 8:00 PM. However, the Intensive Care Unit (ICU) has limited hours, and visitors may need special permission to visit patients. Please check with the specific department for exact times."
    },
    {
        question: "How do I book an appointment with a doctor?",
        answer: "You can book an appointment by visiting our online appointment scheduling system, calling our reception desk, or visiting the hospital in person. For online bookings, choose a doctor and available time slot, then confirm your appointment."
    },
    {
        question: "What services does the hospital offer?",
        answer: "Our hospital offers a wide range of services, including general medicine, surgery, pediatrics, orthopedics, cardiology, oncology, maternity care, and emergency services. We also have specialized diagnostic facilities and outpatient services for various health needs."
    },
    {
        question: "Are online consultations available?",
        answer: "Yes, we offer online consultations through our telemedicine platform. Patients can schedule a virtual visit with a doctor for non-emergency cases. Online consultations are available for general medicine and certain specialties. Contact us to know more about eligible services."
    },
    {
        question: "How do I access my medical records?",
        answer: "You can access your medical records through our patient portal by logging in with your registered account. If you don’t have an account, you may need to register with the hospital's medical records department. Physical copies can be requested for a fee."
    },
    {
        question: "What should I bring to my appointment?",
        answer: "Please bring your appointment confirmation, identification (such as a government-issued ID), insurance information, and any relevant medical documents, such as test results, prescriptions, or referral letters."
    },
    {
        question: "Is emergency care available 24/7?",
        answer: "Yes, our emergency care unit operates 24/7. We have a fully equipped emergency room with doctors and nursing staff available at all times to handle urgent medical cases."
    },
    {
        question: "What insurance plans does the hospital accept?",
        answer: "We accept a wide variety of insurance plans from different providers. For a complete list, please visit our billing and insurance section on the website or contact our billing department directly."
    },
    {
        question: "How can I request a copy of my lab results?",
        answer: "You can request your lab results through our patient portal or by contacting the lab directly. You may need to verify your identity before we release any information. Results may also be shared with your referring doctor upon request."
    },
    {
        question: "Are there any COVID-19 protocols in place?",
        answer: "Yes, our hospital follows strict COVID-19 protocols, including mandatory face masks, social distancing, regular sanitization, and temperature checks at entry points. Patients and visitors showing symptoms may be required to undergo testing before entering."
    },
    {
        question: "How do I cancel or reschedule an appointment?",
        answer: "To cancel or reschedule an appointment, please use the online appointment system, call the hospital's appointment desk, or visit the reception in person. Cancellations should be made at least 24 hours in advance to avoid any fees."
    },
    {
        question: "What should I do if I need a referral for a specialist?",
        answer: "If you need a referral, you can request one from your primary care doctor. Our doctors can help refer you to the appropriate specialist based on your health condition and requirements."
    },
    {
        question: "Is parking available at the hospital?",
        answer: "Yes, we offer ample parking space for patients and visitors. There are designated parking areas for emergency patients, long-term visitors, and disabled individuals. Parking fees may apply."
    },
    {
        question: "How can I pay my medical bills online?",
        answer: "You can pay your medical bills through our secure online payment portal. Log in with your patient ID, view your outstanding bills, and choose a payment method (credit card, debit card, or bank transfer) to settle your dues."
    },
    {
        question: "Are translation services available for non-English speakers?",
        answer: "Yes, we provide translation services for non-English speaking patients. Our interpreters are available for several languages. Please notify us in advance if you require translation services during your visit."
    },
    {
        question: "Can I request a specific doctor for my consultation?",
        answer: "Yes, you can request a specific doctor if they are available. When scheduling an appointment, select the doctor's name from the list of available practitioners, or mention their name when booking through phone or in person."
    },
    {
        question: "What are the hospital's policies for visitors?",
        answer: "Visitors are allowed during designated hours, with some restrictions in sensitive areas like the ICU. All visitors must follow COVID-19 protocols, including wearing a mask. Some wards may limit the number of visitors allowed per patient."
    },
    {
        question: "How do I contact the billing department?",
        answer: "You can contact the billing department by phone, email, or in person at the hospital's main reception. For billing inquiries, visit the 'Contact Us' page on our website for details."
    },
    {
        question: "Are there any support groups available?",
        answer: "Yes, we offer various support groups and counseling services for patients dealing with chronic conditions, mental health issues, or post-operative recovery. You can inquire about the schedules and availability with our counseling department."
    },
    {
        question: "What should I do if I have a medical emergency?",
        answer: "In case of a medical emergency, please call the emergency number immediately or visit our Emergency Room (ER) without delay. Our ER is equipped to handle critical situations and life-threatening conditions."
    }
];

export default function FAQ() {
    return (
        <div className='flex flex-col justify-center items-center px-4 py-10'>
            <h1 className='font-bold text-3xl text-center mb-4'>Frequently Asked Questions</h1>
            <p className='text-sm w-[80vw] text-center mb-8'>
                Find answers to some of the common questions about our hospital services.
            </p>
            <div className=' w-full max-w-4xl px-2'>
                <Accordion type="single" collapsible className='grid grid-cols-1 md:grid-cols-3 gap-x-6'>
                    {faqQuestionsAndAnswers.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger className='font-semibold text-start'>{faq.question}</AccordionTrigger>
                            <AccordionContent>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
