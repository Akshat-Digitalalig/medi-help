import Image from 'next/image';
import React from 'react';
import GetFree from '../ui/GetFree';
import { Facebook, Instagram, Mail, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {

    // const Footer = [
    //     {
    //         title: 'Products', links: [
    //             'Overview',
    //             'Solutions',
    //             'Pricing',
    //             'Customers'
    //         ]
    //     },
    //     { title: 'Support', links: ['Contact', 'Documentation', 'Chat', 'FAQ'] },
    //     { title: 'Legal', links: ['Terms of Service', 'Privacy Policy', 'Cookie Settings'] },
    // ]
    


    return (
        <footer className="bg-[#E1F5FF] pt-16">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                {/* Top Section */}
                <div className="grid gap-12 lg:grid-cols-5 lg:gap-8">
                    {/* Logo & Social Links */}
                    <div className="lg:col-span-2">
                        <div className="mb-4">
                            <Link href="/" >
                                <Image src="/medilogo.webp" alt="MediHelp" width={300} height={150} />
                            </Link>
                        </div>
                        <p className="mb-6 text-myblue font-semibold">One Destination For All Treatment</p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/profile.php?id=100040951937272&mibextid=ZbWKwL"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-myblue border-myblue rounded-full p-1 border-2 transition hover:text-blue-500"
                            >
                                <Facebook />
                            </a>
                            <a
                                href="https://www.instagram.com/medihelpglobal/profilecard/?igsh=MWJhejJ0cTd0cmd3aA=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-myblue border-myblue rounded-full p-1 border-2 transition hover:text-blue-500"
                            >
                                <Instagram />
                            </a>
                            <a
                                href="https://youtube.com/@medihelpglobal?si=6ejgn6QYEyJWhE-p"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-myblue border-myblue rounded-full p-1 border-2 transition hover:text-blue-500"
                            >
                                <Youtube />
                            </a>
                            <a
                                href="mailto:help@medihelpglobal.com"
                                className="text-myblue border-myblue rounded-full p-1 border-2 transition hover:text-blue-500"
                            >
                                <Mail />
                            </a>
                        </div>
                        <div className="mt-6 w-fit">
                            <GetFree />
                        </div>
                    </div>

                    {/* Footer Links */}
                    {[
                        { title: 'Products', links: ['Overview', 'Solutions', 'Pricing', 'Customers'] },
                        // { title: 'Services', links: ['Video Consult', 'Free Visa Invitation', 'Free Airport Pickup & Drop', 'Free Translator', 'Accommodation Arrangement', '24/7 Helpline'] },
                        { title: 'Support', links: ['Contact', 'Documentation', 'Chat', 'FAQ'] },
                        { title: 'Legal', links: ['Terms of Service', 'Privacy Policy', 'Cookie Settings'] },
                    ].map((section, index) => (
                        <div key={index}>
                            <h3 className="mb-4 font-bold uppercase tracking-widest text-myblue">{section.title}</h3>
                            <nav className="flex flex-col gap-4">
                                {section.links.map((link, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="text-gray-500 transition hover:text-indigo-500"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t mt-12 py-8 text-center text-sm text-gray-400">
                © 2024 - Present MediHelp. All rights reserved.
            </div>
        </footer>
    );
}
