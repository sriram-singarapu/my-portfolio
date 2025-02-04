"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        {/* Left: Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="KolVal"
            width={60}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex flex-grow justify-center space-x-12">
          {navLinks.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-lg transition hover:text-cyan-400 ${
                pathname === href ? "font-bold text-cyan-500" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Right: GitHub Button */}
        <div className="hidden lg:flex">
          <a
            href="https://github.com/sriram-singarapu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-md hover:bg-cyan-700 hover:text-white transition"
          >
            <FaGithub className="text-xl" />
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
          {menuOpen ? (
            <IoMdClose className="text-3xl" />
          ) : (
            <IoMdMenu className="text-3xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-md">
          <div className="flex flex-col items-center space-y-4 p-6">
            {navLinks.map(({ name, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-lg block py-2 transition hover:text-cyan-400 ${
                  pathname === href ? "font-bold text-cyan-500" : ""
                }`}
                onClick={toggleMenu}
              >
                {name}
              </Link>
            ))}
            <a
              href="https://github.com/sriram-singarapu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-md hover:bg-cyan-700 hover:text-white transition"
              onClick={toggleMenu}
            >
              <FaGithub className="text-xl" />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
