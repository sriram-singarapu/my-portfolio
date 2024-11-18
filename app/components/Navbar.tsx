import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full h-20 bg-cyan-800 sticky top-0 text-white shadow-md z-50">
      <div className="container mx-auto h-full flex justify-between items-center px-4">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        <div className="hidden lg:flex space-x-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <div className="hidden peer-checked:flex flex-col items-start space-y-4 px-4 py-4 bg-cyan-700 absolute top-20 left-0 min-h-screen w-60">
            <Link href="/" className="hover:underline w-full">
              Home
            </Link>
            <Link href="/about" className="hover:underline w-full">
              About
            </Link>
            <Link href="/services" className="hover:underline w-full">
              Services
            </Link>
            <Link href="/contact" className="hover:underline w-full">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
