"use client";
import Image from "next/image";
import React from "react";
import AccommodationArrangement from "../Forms/AccommodationArrangement";
import VideoConsulting from "../Forms/VideoConsulting";
import VisaInvitation from "../Forms/VisaInvitation";
import AirportPickup from "../Forms/AirportPickup";
import GetTranslator from "../Forms/GetTranslator";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();
  return (
    <div className="bg-[#e0f5ff] py-6 sm:py-8 mb-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-12">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-indigo-950 md:mb-6 lg:text-3xl">
            Why Choose Us?
          </h2>
        </div>

        <div className="grid gap-4 md:gap-12 grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
          <div>
            <FeatureItem
              ImgPath="/icons/service6.webp"
              title="Free Video Consultation"
              description="Schedule a free video consultation with our experts."
            >
              <VideoConsulting />
            </FeatureItem>
          </div>
          <div>
            <FeatureItem
              ImgPath="/icons/service5.webp"
              title="Free Visa Invitation"
              description="Receive an invitation for visa application at no cost."
            >
              <VisaInvitation />
            </FeatureItem>
          </div>
          <div>
            <FeatureItem
              ImgPath="/icons/service4.webp"
              title="Free Airport Pickup & Drop"
              description="Enjoy complimentary airport pickup and drop-off services."
            >
              <AirportPickup />
            </FeatureItem>
          </div>
          <div>
            <FeatureItem
              ImgPath="/icons/service1.webp"
              title="Free Translator"
              description="Get access to a free translator during your visit."
            >
              <GetTranslator />
            </FeatureItem>
          </div>
          <div>
            <FeatureItem
              ImgPath="/icons/service2.webp"
              title="Accommodation Arrangement"
              description="We assist with finding suitable accommodation."
            >
              <AccommodationArrangement />
            </FeatureItem>
          </div>
          <div>
            <FeatureItem
              ImgPath="/icons/service3.webp"
              title="24/7 Helpline"
              description="Our helpline is available 24/7 for your assistance."
            >
              <button
                onClick={() => router.push("/consult-online")}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Request
              </button>
            </FeatureItem>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FeatureItemProps {
  title: string;
  description: string;
  ImgPath: string;
  children?: React.ReactNode; // Optional children prop
}

function FeatureItem({
  title,
  description,
  ImgPath,
  children,
}: FeatureItemProps) {
  return (
    <div className="flex flex-col h-full justify-between bg-white shadow-lg rounded-3xl p-4 items-center">
      <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
        <Image src={ImgPath} alt={title} width={56} height={56} />
      </div>
      <h3 className="mb-2 text-center text-lg font-semibold md:text-lg">
        {title}
      </h3>
      <p className="mb-2 text-center text-gray-500 text-sm">{description}</p>
      {children && <div>{children}</div>}
    </div>
  );
}
