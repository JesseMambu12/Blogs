"use client";
import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="py-4 px-4 sm:px-6 md:px-12 lg:px-28 bg-white shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          id="logo"
          className="text-black text-2xl sm:text-3xl font-extrabold"
        >
          GrindFirst !
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm sm:text-base font-medium">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/Bloglist" className="hover:text-blue-600">
            Categories
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
        </nav>

        {/* Burger Menu Button (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl self-end mb-4"
            >
              <IoClose />
            </button>
            <nav className="flex flex-col gap-4 text-lg">
              <Link
                href="/"
                className="hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/Bloglist"
                className="hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="/about"
                className="hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
