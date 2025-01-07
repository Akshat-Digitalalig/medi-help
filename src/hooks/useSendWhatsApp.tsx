"use client";
import { useRouter } from "next/navigation"; 

interface SendWhatsAppParams {
  phoneWithCountryCode?: string; 
  message: string;
}

export const useSendWhatsApp = () => {

  const router = useRouter(); 

  return ({ phoneWithCountryCode = "9897186585", message }: SendWhatsAppParams): void => {
    if (!phoneWithCountryCode) {
      alert("Please provide a valid phone number.");
      return;

    }

    if (!message) {
      alert("Please provide a message to send.");
      return;
    }

    const url = `https://api.whatsapp.com/send?phone=${phoneWithCountryCode}&text=${encodeURIComponent(message)}`;

    try {
      router.push(url);
    } catch (error) {
      console.error("Error opening WhatsApp URL:", error);
      alert("Make sure WhatsApp is installed or accessible on your device.");
    }
  };
};
