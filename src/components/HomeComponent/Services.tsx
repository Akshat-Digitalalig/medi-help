import Image from 'next/image';
import React from 'react';

export default function Services() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-12">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-indigo-950 md:mb-6 lg:text-3xl">
          Why Choose Us?
          </h2>  
        </div>
        <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 x">
          <FeatureItem ImgPath={"/icons/service6.webp"} title="Free Video Consultation" description="Schedule a free video consultation with our experts." />
          <FeatureItem ImgPath={"/icons/service5.webp"} title="Free Visa Invitation" description="Receive an invitation for visa application at no cost." />
          <FeatureItem ImgPath={"/icons/service4.webp"} title="Free Airport Pickup & Drop" description="Enjoy complimentary airport pickup and drop-off services." />
          <FeatureItem ImgPath={"/icons/service1.webp"} title="Free Translator" description="Get access to a free translator during your visit." />
          <FeatureItem ImgPath={"/icons/service2.webp"} title="Accommodation Arrangement" description="We assist with finding suitable accommodation." />
          <FeatureItem ImgPath={"/icons/service3.webp"} title="24/7 Helpline" description="Our helpline is available 24/7 for your assistance." />
        </div>
      </div>
    </div>
  );
}

interface FeatureItemProps {
  title: string;
  description: string;
  ImgPath: string;
}

function FeatureItem({ title, description, ImgPath }: FeatureItemProps) {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-3xl p-4 items-center">
      <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
        <Image src={ImgPath} alt={title} width={56} height={56} />
      </div>
      <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">{title}</h3>
      <p className="mb-2 text-center text-gray-500 text-sm">{description}</p>
      <a href="#" className="font-bold text-indigo-600 transition duration-100 hover:text-indigo-600 active:text-indigo-700">
        More
      </a>
    </div>
  );
}
