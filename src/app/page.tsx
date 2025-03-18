"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";


interface Blog {
  objectId: string;
  Title: string;
  Image?: string; 
  Category?: string;
  Content?: string;
}

export default function BlogList() {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState<Blog[]>([]); 

  const handleGetBlogs = async () => {
    try {
      const response = await axios.get("/api/blogs"); 
      if (response.data && Array.isArray(response.data)) {
        setBlogs(response.data);
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

        <div className="flex flex-wrap gap-4 justify-center">
          {blogs.length === 0 ? (
            <p className="text-gray-500">No blogs available.</p>
          ) : (
            blogs
              .filter((blog) => menu === "All" || blog?.Category === menu)
              .map((blog) => (
                <Link
                  key={blog.objectId}
                  href={`/blog/${decodeURIComponent(blog.objectId)}`} 
                  className="block p-4 mb-2 max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px]"
                >
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
      </div>
    </>
  );
}
