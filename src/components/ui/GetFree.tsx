import { ClipboardPlus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function GetFree() {
    return (
        <Link href={'/consult-online'} className="flex items-center mx-2 leading-none text-xs font-semibold bg-myred gap-1 px-2 md:px-4 py-2 cursor-pointer text-white  rounded-md hover:bg-myred/70 duration-300">
            Get Free Consults
            <ClipboardPlus size={20} />
        </Link>
    )
}
