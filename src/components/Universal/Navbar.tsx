"use client";
import {
  CircleX,
  ClipboardPlus,
  Contact,
  GraduationCap,
  HandCoins,
  HeartPulse,
  HomeIcon,
  Hospital,
  Menu,
} from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Nav } from "./Nav";
import Link from "next/link";
import UtilsBar from "./UtilsBar";
import SearchBar from "./SearchBar";
import HealthAdvisor from "../Forms/HealthAdvisor";
import NavBarHealthAdvisor from '../Forms/NavBarHealthAdvisor';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const sidebarRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <UtilsBar />
      <div className="bg-[#e1f5ff] w-full">
        <header
          className={`mx-auto px-2 grid grid-cols-3 sm:flex items-center justify-around`}
        >
          <Link
            href={"/"} 
            className="cursor-pointer relative w-[45%] h-[67px] sm:h-[100px] sm:w-[30%] md:w-[30%] md:h-[60px] lg:h-[90px] lg:w-[25%] my-1 mx-1 text-lg text-white font-semibold p-2 sm:p-0"
            aria-label="logo"
          >
            <Image
              src="/medilogo.webp"
              alt="MediHelp"
              fill
              className="object-cover"
            />
          </Link>
          <Nav />
          <HealthAdvisor />
          <Link
            href={"/consult-online"}
            className="hidden lg:w-[110px] lg:flex items-center justify-center leading-none text-xs font-semibold bg-myred gap-1 px-2 lg:px-4 py-2 cursor-pointer text-white rounded-md hover:bg-white hover:text-myred hover:border-myred border-2 duration-300"
          >
            Free Consults
            <ClipboardPlus size={25} />
          </Link>

          <div className="flex md:hidden">
            <SearchBar />
          </div>
          <button
            onClick={toggleSidebar}
            className="text-indigo-950 block md:hidden border-2 border-myblue p-1 rounded-md mx-2"
          >
            <Menu size={24} />
          </button>
        </header>

        <div
          ref={sidebarRef}
          className={`flex flex-col justify-between fixed inset-y-0 right-0 bg-black bg-opacity-50 z-50 transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"
            } lg:hidden w-3/4 md:w-1/2`}
        >
          <div className="bg-[#f7faff]/90 h-full p-4 ">
            <h1
              onClick={() => toggleSidebar()}
              className="text-center flex justify-end"
            >
              <CircleX />
            </h1>
            {[
              { title: "Home", icon: <HomeIcon />, path: "/" },
              {
                title: "Hospitals",
                icon: <Hospital />,
                path: "/hospitals",
              },
              {
                title: "Doctors",
                icon: <HeartPulse />,
                path: "/doctors",
              },
              { title: "Treatment", icon: <HandCoins />, path: "/treatments" },
              {
                title: "Contact Us",
                icon: <Contact />,
                path: "/consult-online",
              },
              {
                title: "Knowledge",
                icon: <GraduationCap />,
                path: "/knowledge-center",
              },
            ].map((option, idx) => (
              <Link
                href={option.path}
                key={idx}
                className="flex gap-2 p-4 text-black font-semibold hover:bg-blue-400 hover:text-white rounded-md transition duration-100 hover:cursor-pointer"
                onClick={() => {
                  toggleSidebar();
                }}
              >
                {option.icon}
                <span>{option.title}</span>
              </Link>
            ))}

            <NavBarHealthAdvisor />
            <Link
              href={"/consult-online"}
              className="flex items-center  justify-start mt-2  leading-none text-xs font-semibold bg-myred gap-x-4 px-4 py-2 cursor-pointer text-white  rounded-md hover:bg-white hover:text-mybg-myred hover:border-mybg-myred border-2 duration-300"
            >
              <ClipboardPlus size={25} />
              Get Free Consults
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
