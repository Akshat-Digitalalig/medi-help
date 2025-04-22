import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Universal/Navbar";
import { Poppins } from 'next/font/google';
import Footer from "@/components/Universal/Footer";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import BottomWhatsapp from "@/components/Universal/BottomWhtsapp";

// const manrope = Manrope({
//   subsets: ['latin'],
//   weight: ['200', '400', '600', '800'],
// });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '600', '800'],
});

export const metadata: Metadata = {
  title: "Medi Help Global",
  description: "Connecting Top Medical Care Quality Medical Treatment 24/7 You to Trusted Medical Care Worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="/assets/scripts/lang-config.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/scripts/translation.js"
          strategy="beforeInteractive"
        />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
          strategy="afterInteractive"
        />


        {/* SEO */}

        <title>MediHelp Global | Trusted Medical Tourism Partner in India</title>

        <meta name="keywords" content="Top Hospitals & Doctors in India for International Patients | MediHelp Global medical tourism India, best hospitals in India, top doctors India, affordable treatment India, visa assistance medical India, international patient care India" />

        <meta name="description" content="Connect with India's leading hospitals and specialists. MediHelp Global offers comprehensive medical tourism services, including visa assistance, treatment planning, and post-care support." />




      </head>
      <body
        className={`${poppins.className} antialiased relative`}
      >
        <BottomWhatsapp />
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
