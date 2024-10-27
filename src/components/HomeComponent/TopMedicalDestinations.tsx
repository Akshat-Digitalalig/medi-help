import Image from 'next/image'
import React from 'react'


const destinations = [
    {
        name: 'India',
        image: 'https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/india-flag.webp'
    },
    {
        name: 'UAE',
        image: 'https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/uae-flag.webp'
    },
    {
        name: 'Turkey',
        image: 'https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/thailand-flag.webp'
    },
    {
        name: 'Egypt',
        image: 'https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/egypt-flag.webp'
    },
    {
        name: 'Germany',
        image: 'https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/germany-flag.webp'
    },
    {
        name: 'Thailand',
        image: 'https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/thailand-flag.webp'
    },
]
export default function TopMedicalDestinations() {
    return (
        <div className='flex flex-col justify-center items-center pt-10 pb-10'>
            <h1 className='font-bold text-xl'>Top Medical Destinations</h1>
            <p className='text-sm w-[80vw] text-center'>Our network spans the top medical tourism hubs worldwide - giving you the choice of cities, doctors and price.</p>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-4 my-4 '>
                {destinations.map((destination, index) => (
                    <div key={index} className=' flex py-2 md:py-3 px-2 md:px-3 gap-x-2 rounded-lg w-40 border-blue-800 border-[1px] bg-blue-700/20'>
                        <Image src={destination.image} height={20} width={20} alt={destination.name} />
                        <p className='font-semibold text-sm'>{destination.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )   

}
