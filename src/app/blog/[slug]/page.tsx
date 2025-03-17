"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

export default function BlogDetail() {
  const { slug } = useParams(); // Ambil objectId dari URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      axios
        .get(`/api/blogs/${slug}`)
        .then((res) => {
          setBlog(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching blog:", err);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) return <p className="text-center mt-10">Loading...</p>; 
  if (!blog) return <p className="text-center mt-10">Blog not found</p>;

  return (
    <>
      {/* Blog History */}
      <Link href="/Bloglist" className="flex ml-20 pl-10 pt-5">
      <IoMdArrowRoundBack className="text-black text-5xl "/>
 
      </Link>
      <section className="flex flex-col text-center max-w-4xl mx-auto p-6 space-y-8">
        <img
          src={blog.Image}
          alt={blog.Title}
          className="border-b border-black"
        />
        <h1 className="text-3xl font-bold pt-12 mb-0 pb-2">{blog.Title}</h1>
        <p className="text-gray-500 text-sm mb-8 italic">Author: {blog.Author || "Unknown"}</p>
        <p className="text-gray-600 mb-8">{blog.Content}</p>
      </section>
    </>
  );
}
