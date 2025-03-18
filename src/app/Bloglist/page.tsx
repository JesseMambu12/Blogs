"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

// ✅ Definisikan tipe data untuk blog
interface Blog {
  objectId: string;
  Title: string;
  Image: string;
  Category: string;
  Content: string;
}

export default function BlogList() {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState<Blog[]>([]); // ✅ Tambahkan tipe data agar tidak jadi "never"

  // ✅ Ambil data blogs dari API
  const handleGetBlogs = async () => {
    try {
      const response = await axios.get("/api/blogs"); // ✅ Gunakan relative path agar tidak bermasalah di production
      if (response.data && Array.isArray(response.data.data)) {
        setBlogs(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    handleGetBlogs();
  }, []);

  return (
    <>
      <div>
        {/* 🔹 Kategori filter */}
        <div className="flex justify-center gap-6 my-10">
          {["All", "Technology", "Startup", "Lifestyle"].map((category) => (
            <button
              key={category}
              onClick={() => setMenu(category)}
              className={`py-1 px-4 rounded-sm ${
                menu === category ? "bg-black text-white" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ✅ Filter blogs berdasarkan kategori */}
        <div className="flex flex-wrap gap-4 justify-center">
          {blogs
            .filter((blog) => menu === "All" || blog?.Category === menu) // ✅ Gunakan optional chaining (?.) untuk keamanan
            .map((blog) => (
              <Link
                key={blog.objectId}
                href={`/blog/${decodeURIComponent(blog.objectId)}`} // ✅ Decode slug untuk keamanan
                className="block p-4 mb-2 max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px]"
              >
                {/* ✅ Gunakan next/image untuk optimasi */}
                <div className="relative w-full h-[200px]">
                  <Image
                    src={blog?.Image || "/default-image.jpg"}
                    alt={blog?.Title || "Blog Image"}
                    layout="fill"
                    objectFit="cover"
                    className="border-b border-black"
                  />
                </div>

                <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
                  {blog?.Category}
                </p>
                <h2 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
                  {blog?.Title}
                </h2>
                <p className="mb-3 text-sm tracking-tight text-gray-700">
                  {blog?.Content.substring(0, 100)}... 
                </p>
                <div className="inline-flex items-center py-2 font-semibold text-center">
                  Read more <FaArrowRight className="ml-2" />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
