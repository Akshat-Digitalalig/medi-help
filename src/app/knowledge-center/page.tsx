import React from 'react'
import { Blogs as BlogsData, blogs, Videos as VideosData, videos } from "@/lib/constant/Knowlege"
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function page() {
  return (
    <div>
      {/* <h1 className='font-bold text-xl text-black text-center mt-2'>Knowledge Center</h1> */}
      <div className="main flex flex-col mx-8 md:flex-row">
        <div className="w-full my-4 h-auto ">
          <h1 className="text-xl font-bold my-4  ">Blogs</h1>
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
  
          {blogs.map((blog) => (
            <Blogs key={blog.id} blogs={blog} />
          ))}
           <Button className='w-40'>Show more</Button>
          </div>
          </div>
       
        <div className="mx-2 my-4">
        <h1 className="text-xl font-bold my-2 ">Videos</h1>
          {videos.map((video) => (
            <Videos key={video.id} videos={video} />
          ))}
          <Button>Show more</Button>
        </div>
        </div>
    </div>
  )
}

type VideoProps = {
  videos: VideosData;
};

const Videos = ({ videos }: VideoProps) => {
  return (
    <div  key={videos.id}  className='w-80 border border-sky-600 flex flex-col p-4 rounded-xl my-4   ' >
      <Image src={videos.image}  height={300} width={500}  alt={"video"} className='rounded-md'  />
      <div className="about flex flex-col items-start">
        <h1 className='font-semibold'>{videos.title}</h1>
        <h1 className='text-xs'>{videos.content}</h1>
      </div>
    </div>
  )
}

type BlogsProps = {
  blogs: BlogsData;
};
const Blogs = ({blogs}:BlogsProps) => {
  function truncateText(text:string, wordLimit:number) {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  }

  return (
    <div className="flex flex-col items-start gap-4 md:flex-row lg:gap-6">
        <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <Image src={blogs.image} loading="lazy" alt="Photo by" height={200} width={300} className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">July 19, 2021</span>

          <h2 className="text-xl font-bold text-gray-800">
            <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{blogs.title}</a>
          </h2>

          <p className="text-gray-500">{truncateText(blogs.content, 15)}</p>

          <div>
            <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
          </div>
        </div>
      </div>
  )

}