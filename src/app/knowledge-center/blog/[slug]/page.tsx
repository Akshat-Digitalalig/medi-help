"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

type BlogPost = {
  id: string;
  title: string;
  content: string;
  author: string;
  authorBio: string;
  date: string;
};



const BlogViewPage: React.FC = () => {
  const [blog, setBlog] = useState<BlogPost | null>(null);

  // Simulate fetching data
  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    // Simulated fetch
    const fetchedBlog: BlogPost = {
      id: '1',
      title: 'How to make your website fully responsive with Tailwind CSS',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula urna nec orci condimentum, at hendrerit orci malesuada. how to ',
      author: 'John Doe',
      authorBio: 'Fullstack developer specializing in modern JavaScript frameworks.',
      date: 'October 15, 2023',
    };
    setBlog(fetchedBlog);
  };

  
  return (
    <div className="max-w-4xl mx-auto p-6">
      {blog ? (
        <div className="space-y-8">
          {/* Blog Title */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold">{blog.title}</h1>
            <p className="text-gray-500 mt-2">{blog.date}</p>
          </div>

          {/* Author */}
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gray-200 rounded-full w-10 h-10 flex justify-center items-center">
                <span className="text-gray-600 font-semibold">{blog.author.charAt(0)}</span>
              </div>
              <div>
                <p className="font-semibold">{blog.author}</p>
                <p className="text-sm text-gray-500">{blog.authorBio}</p>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-sm sm:prose lg:prose-lg mx-auto mt-6">
            <Image src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=600" className='rounded-2xl mb-6' alt="Blog Image" width={800} height={700}  />
            <p>{blog.content}</p>
          </div>         
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogViewPage;
