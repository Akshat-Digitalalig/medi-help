import Image from 'next/image'
import React from 'react'
import GetFree from '../ui/GetFree'
import { Facebook, Instagram,  Mail, Youtube } from 'lucide-react'


export default function Footer() {
    return (
        <footer className="bg-[#E1F5FF] pt-4 sm:pt-6 lg:pt-8">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            </div>
            <div className="pt-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
                        <div className="col-span-full lg:col-span-2">

                            <div className="mb-4 lg:-mt-2">
                                <a href="" className="inline-flex items-center gap-2 text-xl font-bold text-white md:text-2xl" aria-label="logo">
                                <Image src="/medilogo.webp" alt="MediHelp" width={300} height={150} />
                                </a>
                                
                            </div>
                           


                            <p className="mb-6 text-myblue font-semibold sm:pr-8">One Destination For All Treatment</p>
                           

                              
                            <div className="flex gap-4 pl-2">
                                <a href="https://www.facebook.com/profile.php?id=100040951937272&mibextid=ZbWKwL" target="_blank" className="text-myblue border-myblue rounded-full p-1 border-2 transition duration-100 hover:text-blue-500 active:text-blue-600">
                                <Facebook />
                                </a>

                                <a href="https://www.instagram.com/medihelpglobal/profilecard/?igsh=MWJhejJ0cTd0cmd3aA==" target="_blank" className="text-myblue border-myblue rounded-full p-1 border-2 transition duration-100 hover:text-blue-500 active:text-blue-600">
                                <Instagram />
                                </a>

                                <a href="https://youtube.com/@medihelpglobal?si=6ejgn6QYEyJWhE-p" target="_blank" className="text-myblue border-myblue rounded-full p-1 border-2 transition duration-100 hover:text-blue-500 active:text-blue-600">
                                <Youtube />
                                </a>
                                <a href="mailto:help@medihelpglobal.com" className="text-myblue border-myblue rounded-full p-1 border-2 transition duration-100 hover:text-blue-500 active:text-blue-600">
                                <Mail />
                                </a>

                                
                            </div>
                            
                            <div className='w-fit my-2 pt-4'> <GetFree /></div>

                        </div>


                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-myblue">Products</div>

                            <nav className="flex flex-col gap-4">
                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Overview</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Solutions</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Pricing</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Customers</a>
                                </div>
                            </nav>
                        </div>

                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-myblue">Company</div>

                            <nav className="flex flex-col gap-4">
                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Investor Relations</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
                                </div>
                            </nav>
                        </div>

                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-myblue">Support</div>

                            <nav className="flex flex-col gap-4">
                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Documentation</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Chat</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">FAQ</a>
                                </div>
                            </nav>
                        </div>

                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-myblue">Legal</div>

                            <nav className="flex flex-col gap-4">
                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms of Service</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>
                                </div>

                                <div>
                                    <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Cookie settings</a>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div className="border-t py-8 text-center text-sm text-gray-400">© 2024 - Present MediHelp. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}
