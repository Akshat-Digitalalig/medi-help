import React from 'react'
import GetFreeConsult from '../ReusableComponents/GetFreeConsult'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import AvatarCircles from '../ui/avatar-circles'

const patientsImg = [
     "https://randomuser.me/api/portraits/men/34.jpg", "https://randomuser.me/api/portraits/men/31.jpg", "https://randomuser.me/api/portraits/women/30.jpg", "https://randomuser.me/api/portraits/women/35.jpg",
]


export default function Hero() {
    return (
        <section
            className=" gradient flex flex-col px-4 md:px-20  py-2 justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            <div className="flex flex-col  xl:w-5/12 ">
                <div className="sm:text-center lg:py-10 lg:text-left ">
                    <p className="mb-2 font-semibold text-indigo-950 mt-4 text-center md:mb-2 md:text-lg xl:text-xl">Connecting You to Trusted Medical Care Worldwide</p>
                    <h1 className="mb-4 text-3xl font-bold text-[#4973fd] text-center sm:text-5xl md:mb-4 md:text-5xl">Quality <span className='text-red-500'>Medical </span>Treatment, Delivered with Compassion</h1>
                </div>

                <div className='flex gap-x-2 justify-center'>
                    <AvatarCircles numPeople={100} avatarUrls={patientsImg} />
                </div>

                <p className='text-center mt-2'><span className='font-semibold'>1,00,000+ </span>Patients Assisted Since 2016</p>
                <div className=" flex items-center my-2 justify-center gap-4 lg:justify-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-black sm:text-base">Social</span>
                    <span className="h-px w-12 bg-black"></span>

                    <div className="flex gap-4">
                        <a href="#" target="_blank" className="text-black transition duration-100 hover:text-gray-400 active:text-black">
                            <Instagram />
                        </a>

                        <a href="#" target="_blank" className="text-black transition duration-100 hover:text-gray-400 active:text-black">
                            <Twitter />
                        </a>

                        <a href="#" target="_blank" className="text-black transition duration-100 hover:text-gray-400 active:text-black">
                            <Facebook />
                        </a>

                    </div>
                </div>
            </div>

            <div className="h-fit overflow-hidden rounded-lg  lg:h-auto xl:w-5/12">
                <GetFreeConsult />
            </div>
        </section>
    )
}
