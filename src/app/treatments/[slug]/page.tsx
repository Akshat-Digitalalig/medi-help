"use client";
import React from "react";
import "./main.css";
import { useParams } from "next/navigation";
import { data } from "./data";
import GetFreeConsult from "@/components/ReusableComponents/GetFreeConsult";
import Image from "next/image";

export default function Page() {
  const { slug } = useParams();
  console.log(data.length);
  const content = data.find((treatment) => treatment.name === slug)?.data || "";
  const img = data.find((treatment) => treatment.name === slug)?.img || "";
  return (
    <div className="main flex flex-col-reverse mt-4 mx-4 md:mx-8 md:flex-row">
      <div className="w-full md:max-w-[60%] my-10 mb-8  pb-10 md:mx-10">
        <Image
          src={img}
          width={800}
          height={500}
          alt="treatment-Image"
          className=" w-full "
        ></Image>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className=" text-pretty w-full mt-4"
        ></div>
      </div>
      <div className="mx-2  md:w-[40%]">
        <div className="sticky -top-10 scale-90">
          <GetFreeConsult />
        </div>
      </div>
    </div>
  );
}
