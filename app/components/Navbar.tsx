"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full h-20 bg-gray-800 sticky top-0 text-white shadow-md z-50">
      <div className="container mx-auto h-full flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-24">
          <Link
            href="/"
            className={`text-lg lg:text-2xl hover:underline ${
              pathname === "/" ? "font-bold underline" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`text-lg lg:text-2xl hover:underline ${
              pathname === "/projects" ? "font-bold underline" : ""
            }`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`text-lg lg:text-2xl hover:underline ${
              pathname === "/contact" ? "font-bold underline" : ""
            }`}
          >
            Contact
          </Link>
        </div>

        {/* GitHub Button */}
        <div className="hidden lg:flex">
          <a
            href="https://github.com/sriram-singarapu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-cyan-800 px-4 py-2 rounded flex items-center space-x-2 hover:bg-cyan-700 hover:text-white transition"
          >
            <FaGithub />
            <span className="text-xl">GitHub Profile</span>
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={closeMenu}
            className="cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
          >
            <IoMdMenu className="text-3xl" />
          </button>

          {menuOpen && (
            <div className="flex flex-col items-start space-y-6 px-4 py-6 bg-cyan-700 absolute top-20 left-0 min-h-screen w-60 z-50">
              <Link
                href="/"
                className={`w-full hover:underline ${
                  pathname === "/" ? "font-bold underline" : ""
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className={`w-full hover:underline ${
                  pathname === "/projects" ? "font-bold underline" : ""
                }`}
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className={`w-full hover:underline ${
                  pathname === "/contact" ? "font-bold underline" : ""
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
              <a
                href="https://github.com/sriram-singarapu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-cyan-800 px-4 py-2 rounded hover:bg-cyan-700 hover:text-white transition w-full"
                onClick={closeMenu}
              >
                GitHub Profile
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
