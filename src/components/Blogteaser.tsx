"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

// ✅ Definisikan tipe data untuk blog
interface Blog {
  objectId: string;
  Title: string;
  Image?: string;
  Category?: string;
  Content?: string;
}

export default function BlogTeaser() {
  const [blogs, setBlogs] = useState<Blog[]>([]); // ✅ Pastikan ini array Blog[]

  // ✅ Ambil data blogs dari API
  const handleGetBlogs = async () => {
    try {
      const response = await axios.get("/api/blogs"); // ✅ Gunakan relative path agar bisa di-host online
      if (response.data && Array.isArray(response.data)) {
        setBlogs(response.data); // ✅ Pastikan data dalam bentuk array
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    handleGetBlogs();
  }, []);

  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {blogs.length === 0 ? (
        <p className="text-gray-500">No blogs available.</p>
      ) : (
        blogs.slice(0, 3).map((blog) => (
          <Link
            key={blog.objectId} // ✅ Pastikan objectId ada
            href={`/blog/${decodeURIComponent(blog.objectId)}`} 
            className="block p-4 mb-2 max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px]"
          >
            {/* ✅ Gunakan next/image untuk optimasi */}
            <div className="relative w-full h-[200px]">
              <Image
                src={blog?.Image || "/default-image.jpg"}
                alt={blog?.Title || "Blog Image"}
                fill
                className="object-cover border-b border-black"
              />
            </div>

            <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
              {blog?.Category || "Uncategorized"}
            </p>
            <h2 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
              {blog?.Title || "Untitled"}
            </h2>
            <p className="mb-3 text-sm tracking-tight text-gray-700">
              {blog?.Content ? `${blog.Content.substring(0, 100)}...` : "No content available."}
            </p>
            <div className="inline-flex items-center py-2 font-semibold text-center">
              Read more <FaArrowRight className="ml-2" />
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
