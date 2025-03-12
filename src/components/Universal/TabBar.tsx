"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { Nav } from "./Nav";
import Link from "next/link";
import HealthAdvisor from "../Forms/HealthAdvisor";
import { ClipboardPlus } from "lucide-react";


export default function TabBar() {

  return (
    <>
      <div className="bg-[#e1f5ff] w-full flex">
        <HealthAdvisor/>
        <Link
              href={"/consult-online"}
              className="flex items-center  justify-start leading-none text-xs font-semibold bg-myred gap-x-4 px-2 py-2 lg:px-4  cursor-pointer text-white  rounded-md hover:bg-white hover:text-mybg-myred hover:border-mybg-myred border-2 duration-300"
            >
              <ClipboardPlus size={25} />
              Get Free Consults
            </Link>
      </div>
    </>
  );
}
