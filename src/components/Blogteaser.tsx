"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";

interface Blog {
  objectId: string;
  Image: string;
  Category: string;
  Title: string;
  Content: string;
}
interface BlogTeaserProps {
  title: string;
  description: string;
  category: string;
  image: string;
}

export default function BlogTeaser({ title, description, category, image }: BlogTeaserProps) {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const handleGetBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/blogs");
      setBlogs(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetBlogs();
  }, []);

  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {blogs.slice(0, 3).map((blog) => (
        <Link
          key={blog.objectId} 
          href={`/blog/${blog.objectId}`} 
          className="block p-4 mb-2 max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px]"
        >
          <img
            src={blog.Image}
            width={400}
            height={400}
            alt="Foto Blog"
            className="border-b border-black"
          />
          <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
            {blog.Category}
          </p>
          <h2 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
            {blog.Title}
          </h2>
          <p className="mb-3 text-sm tracking-tight text-gray-700">
            {blog.Content.substring(0, 100)}...
          </p>
          <div className="inline-flex items-center py-2 font-semibold text-center">
            Read more <FaArrowRight className="ml-2" />
          </div>
        </Link>
      ))}
    </div>
  );
}
