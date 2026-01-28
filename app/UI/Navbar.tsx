"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-effect shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-20 px-6 lg:px-8">
        {/* Left: Logo */}
        <Link href="/" className="flex-shrink-0 relative z-10">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/logo1.png"
              alt="Sri Ram Singarapu"
              width={80}
              height={80}
              className="object-contain"
            />
          </motion.div>
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex flex-grow justify-center space-x-8">
          {navLinks.map(({ name, href }) => (
            <Link key={href} href={href} className="relative group">
              <span
                className={`text-base font-medium transition-colors duration-200 ${
                  pathname === href
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {name}
              </span>
              {/* Active indicator */}
              {pathname === href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {/* Hover indicator */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right: GitHub Button */}
        <div className="hidden lg:flex">
          <motion.a
            href="https://github.com/sriram-singarapu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-lg" />
            <span>GitHub</span>
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none text-gray-900 relative z-10"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <IoMdClose className="text-3xl" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <IoMdMenu className="text-3xl" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-effect border-t border-gray-200"
          >
            <div className="flex flex-col items-center space-y-4 p-6">
              {navLinks.map(({ name, href }, index) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={href}
                    className={`text-lg block py-2 transition-colors duration-200 ${
                      pathname === href
                        ? "font-bold text-gray-900"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={toggleMenu}
                  >
                    {name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="https://github.com/sriram-singarapu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                onClick={toggleMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-lg" />
                <span>GitHub Profile</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
