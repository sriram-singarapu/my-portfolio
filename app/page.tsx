import Image from "next/image";
import srphoto from "@/public/photo1.jpg";
import Link from "next/link";
import { FaRegMessage } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="m-8 flex items-center justify-between ">
      <div className="space-y-7 ml-8">
        <h1 className="font-extrabold text-4xl">Sri Ram Singarapu</h1>
        <h2 className="font-semibold text-xl">
          Crafting Scalable Solutions, One Line of Code at a Time !.
        </h2>
        <h3 className="font-bold text-l">
          – Full Stack Developer | Innovator | Problem Solver
        </h3>
        <div className="flex gap-4">
          <Link
            href="/contact"
            className="bg-gray-800 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-cyan-700  transition"
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
  );
}
