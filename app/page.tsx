import Image from "next/image";
import srphoto from "@/public/photo1.jpg";
import Link from "next/link";
import Skills from "./components/skills";
import { FaRegMessage } from "react-icons/fa6";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* Full-Screen Gradient Background */}
      <div className="min-h-screen  flex items-center justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly">
          <div className="space-y-7 ml-8">
            <h1 className="font-extrabold text-5xl">Sri Ram Singarapu</h1>
            <h2 className={`font-semibold text-3xl ${inter.className}`}>
              Crafting Scalable Solutions, One Line of Code at a Time!.
            </h2>
            <h3 className="font-bold text-2xl">
              – Full Stack Developer | Innovator | Problem Solver
            </h3>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-gray-800 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-cyan-700 transition"
              >
                <span>Contact Me</span>
                <FaRegMessage />
              </Link>
              <a
                href="https://drive.google.com/file/d/1esSLzGgMhzF5QmAXfa9DIb-TvwcfLS00/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gray-800 hover:text-white px-4 py-2 rounded border-2 border-gray-700 flex items-center space-x-2 transition"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center m-8">
            <Image
              src={srphoto}
              alt="footer-photo"
              height={300}
              width={300}
              className="rounded-full aspect-square object-cover"
            />
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
}
