"use client";
import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link"; 

export default function BlogList() {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const handleGetBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/blogs");
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

        {/* ✅ Filter blogs berdasarkan kategori yang dipilih */}
        <div className="flex flex-wrap gap-4 justify-center">
          {blogs
            .filter((blog) => menu === "All" || blog.Category === menu) // 🔹 Filter kategori
            .map((blog) => (
              <Link
                key={blog.objectId}
                href={`/blog/${blog.objectId}`}
                className="block p-4 mb-2 max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px]"
              >
                <img
                  src={blog.Image}
                  width={400}
                  height={400}
                  alt={blog.Title}
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
      </div>
    </>
  );
}
