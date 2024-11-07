'use client';
import { CircleX, ClipboardPlus, Contact, GraduationCap, HandCoins, HeartPulse, HomeIcon, Hospital, Menu, Search } from 'lucide-react'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { Manrope } from 'next/font/google';
import { Nav } from './Nav';
import Link from 'next/link';
import { LanguageSwitcher } from './LangSwitcher';


const manrope = Manrope({
    subsets: ['latin'],
    weight: ['200', '400', '600', '800'],
});

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const sidebarRef = useRef<HTMLDivElement>(null);

    return (
        <div className='bg-[#e1f5ff] w-full '>
            <header className={` ${manrope.className} max-w-screen-2xl mx-auto flex items-center justify-between`}>
                <Link href={'/'} className="inline-flex cursor-pointer flex-row items-center gap-1 my-2 mx-1 md:mx-2 text-lg text-white font-semibold" aria-label="logo">
                    <Image src="/medilogo.svg" alt="MediHelp" width={70} className=' rounded-full' height={70} />
                    <div>
                        <h1 className='leading-none text-xl md:text-2xl font-bold text-indigo-950'>MediHelp.in</h1>
                        <p className=" text-xs md:text-sm  leading-none text-indigo-950
                        ">Your Health Partner</p>
                    </div>
                </Link>
                <Nav />
                <nav  className="relative hidden md:flex items-center gap-2.5 bg-white border-2 px-2 py-1 rounded-2xl">
                    <input
                        type="text"
                        placeholder="Search Disease, Procedure, Doctors or Hospital"
                        
                        className={`bg-transparent text-xs py-1 outline-0 ${isExpanded ? 'w-48' : 'w-0'
                            } text-gray-600 transition-all duration-300 ease-in-out overflow-hidden`}
                    />
                    <Search onClick={() => setIsExpanded((prev) => !prev)}  color="blue" size={20} />
                </nav>

                <LanguageSwitcher />
                <Link href={'/consult-online'} className="hidden md:flex items-center mx-2 leading-none text-xs font-semibold bg-red-500 gap-1 px-2 md:px-4 py-2 cursor-pointer text-white  rounded-md hover:bg-red-700 duration-300">
                    Free Consults
                    <ClipboardPlus size={20} />
                </Link>

                <button onClick={toggleSidebar} className='text-indigo-950 block md:hidden border-[1px] p-1 rounded-md mx-2'>
                    <Menu size={24} />
                </button>

            </header>

            <div ref={sidebarRef} className={`flex flex-col justify-between fixed inset-y-0 right-0 bg-black bg-opacity-50 z-50 transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"
                } lg:hidden w-3/4 md:w-1/2`}
            >

                <div className="bg-[#f7faff]/90 h-full p-4 ">
                    <h1 onClick={() => toggleSidebar()} className='text-center flex justify-end'>
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
                        { title: "Cost", icon: <HandCoins />, path: "/cost" },
                        { title: "Contact Us", icon: <Contact />, path: "/consult-online" },
                        { title: "Knowledge", icon: <GraduationCap />, path: "/knowledge-center" }
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
                    ))} </div>
            </div>
        </div>
    );
}

