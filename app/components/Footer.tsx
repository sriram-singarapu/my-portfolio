import Image from "next/image";
import Link from "next/link";
import srphoto from "@/public/photo1.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap justify-between items-start">
          {/* Personal Branding */}
          <div className="mb-6 w-full md:w-1/3">
            <h2 className="text-2xl font-bold">Sri Ram Singarapu</h2>
            <Image
              src={srphoto}
              alt="footer-photo"
              height={120}
              width={120}
              className="rounded-full aspect-square object-cover m-3"
            />
            <p className="mt-2 text-sm">
              A passionate developer crafting solutions and experiences.
            </p>
          </div>

          {/* Portfolio Links */}
          <div className="mb-6 w-full md:w-1/3">
            <h3 className="font-semibold text-lg">Explore</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:underline">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media and Contact */}
          <div className="mb-6 w-full md:w-1/3">
            <h3 className="font-semibold text-lg">Stay Connected</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://github.com/sriram-singarapu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sriram-singarapu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/_I_am_sr_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <FaTwitter />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sriramsingarapu2@gmail.com"
                  className="hover:underline flex items-center gap-2"
                >
                  <IoIosMail />
                  <span>sriramsingarapu2@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Sri Ram Singarapu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
