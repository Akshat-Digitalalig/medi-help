import { blogs } from '@/lib/constant/Knowlege';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function page() {
  return (
    <div> <div className="w-full my-4 h-auto">
    <h1 className="text-xl font-bold text-center pb-6 my-4">Blogs</h1>
    <div className="grid gap-8 mx-11 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
      {blogs.map((blog) => (
        <Blogs key={blog.id} blog={blog} />
      ))}
      
    </div>
  </div></div>
  )
}

interface BlogProps {
  blog: {
    id: number;
    image: string;
    title: string;
    content: string;
  };
}

const Blogs = ({ blog }: BlogProps) => {
  function truncateText(text: string, wordLimit: number) {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  }

  return (
    <div className="flex flex-col items-start gap-4 md:flex-row lg:gap-6">
      <Link href={`/knowledge-center/blog/${blog.id}`} className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
        <Image src={blog.image} loading="lazy" alt="Photo by" height={200} width={300} className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
      </Link>

      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-400">July 19, 2021</span>
        <h2 className="text-xl font-bold text-gray-800">
          <Link href={`/knowledge-center/blog/${blog.id}`} className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{blog.title}</Link>
        </h2>
        <p className="text-gray-500">{truncateText(blog.content, 15)}</p>
        <div>
          <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
        </div>
      </div>
    </div>
  );
};

