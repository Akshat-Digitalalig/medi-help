"use client"
import React from 'react'
import "./main.css"
import { useParams } from 'next/navigation'
import { data } from "./data"
import GetFreeConsult from '@/components/ReusableComponents/GetFreeConsult'

export default function Page() {

	const { slug } = useParams();
	console.log(data.length)
	const content = data.find((treatment) => treatment.name === slug)?.data || "";
	return (
		<div className="main flex flex-col-reverse mt-10 mx-2 md:mx-8 md:flex-row">
			<div dangerouslySetInnerHTML={{ __html: content }} className='mx-2 my-4 mb-8 md:mx-10 text-pretty md:w-[60%]'>
			</div>
			<div className="mx-2 my-4">
				<GetFreeConsult />
			</div>
		</div>
	)
}
