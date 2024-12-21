import React from 'react'

interface HeadingProps {
    children: React.ReactNode;
}

export default function Heading({children}: HeadingProps) {
    return (
        <h2 className="mb-4 text-center mt-4 text-2xl font-bold text-indigo-950 md:mb-6 lg:text-3xl">
            {children}
        </h2>
    )
}
