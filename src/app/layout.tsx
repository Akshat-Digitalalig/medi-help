import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Universal/Navbar";
import { Manrope } from 'next/font/google';
import Footer from "@/components/Universal/Footer";

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '400', '600', '800'],
});


export const metadata: Metadata = {
  title: "MediHelp",
  description: "Connecting Top Medical Care Quality Medical Treatment 24/7 You to Trusted Medical Care Worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className}  antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
