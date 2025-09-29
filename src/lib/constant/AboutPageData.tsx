import { Facebook, Instagram,  Youtube } from "lucide-react";

interface AboutPageData {
    title: string;
    mainImage: string;
    social: Array<{
        name: string;
        url: string;
        icon: JSX.Element;
    }>;
    contact: {
        email: string;
        supportEmail: string;
        phone: string;
        address: string;
    };
    about: Array<{
        title: string;
        content: string;
    }>;
}

export const AboutPageData:AboutPageData = {
    title: "Expert Guidance for Your Medical journey",

    mainImage: "https://images.pexels.com/photos/4266944/pexels-photo-4266944.jpeg?auto=compress&cs=tinysrgb&w=600",
    social:[
        {
            name:"facebook",
            url:"https://www.facebook.com/profile.php?id=100040951937272&mibextid=ZbWKwL",
            icon:<Facebook />
        },
        {
            name:"instagram",
            url:"https://www.instagram.com/medihelpglobal/profilecard/?igsh=MWJhejJ0cTd0cmd3aA==",
            icon:<Instagram />
        },
        {
            name:"youtube",
            url:"https://youtube.com/@medihelpglobal?si=6ejgn6QYEyJWhE-p",
            icon:<Youtube />
        }
    ],
    contact:{
        email: "info@medihelpglobal.com",
        supportEmail: "help@medihelpglobal.com",
        phone: "+91 98971 86585",
        address: "Shaheen Bagh, Okhla, New delhi - 110025"
    },
    about: [
        {
            title: "About Us",
            content: "We are a team of experienced doctors, nurses and staff who are dedicated to providing the best care possible. Our goal is to help you feel better and live a healthier life. We offer a wide range of services, from routine check-ups to specialized treatments. Our team is here to help you every step of the way."
        },
        {
            title: "Our Mission",
            content: "Our mission is to provide the highest quality care to our patients. We are committed to excellence in everything we do, from the services we offer to the facilities we provide. Our team is dedicated to helping you feel better and live a healthier life. We are here to help you every step of the way."
        },
        {
            title: "Our Vision",
            content: "Our vision is to be the leading healthcare provider in the region. We are committed to providing the best care possible to our patients. We are dedicated to excellence in everything we do, from the services we offer to the facilities we provide. Our team is here to help you every step of the way."
        }
    ],

}