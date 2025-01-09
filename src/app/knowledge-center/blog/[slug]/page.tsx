"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { blogs } from '@/lib/constant/Knowlege'; // Make sure this path is correct
import { useParams } from 'next/navigation';

type BlogPost = {
  id: number; // Changed to match your `blogs` data
  title: string;
  content: string;
  image: string;
};

const BlogViewPage: React.FC = () => {
  const { slug } = useParams(); // Slug comes as a string
  const [blog, setBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const fetchBlog = () => {
    // Convert `slug` to a number for comparison
    const blogId = parseInt(Array.isArray(slug) ? slug[0] : slug || "0", 10); // Fallback to 0 if slug is undefined
    const fetchedBlog = blogs.find((blog) => blog.id === blogId);
    setBlog(fetchedBlog || null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {blog ? (
        <div className="space-y-8">
          {/* Blog Title */}
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold">{blog.title}</h1>
          </div>

          {/* Blog Content */}
          <div className="prose prose-sm sm:prose lg:prose-lg mx-auto mt-6">
            <Image
              src={blog.image}
              className="rounded-2xl object-center h-96  mb-6"
              alt="Blog Image"
              width={800}
              height={200}
            />
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
