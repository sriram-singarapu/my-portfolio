import Image from "next/image";
import srphoto from "@/public/photo1.jpg";
import Skills from "./components/skills";
import { FaRegMessage } from "react-icons/fa6";
import { PiReadCvLogo } from "react-icons/pi";
import NextJsCarousel from "./components/achievements";
import Education from "./components/Education";
import Button from "./UI/Button";

export default function Home() {
  return (
    <>
      {/* Full-Screen Gradient Background */}
      <div className="min-h-screen  flex items-center justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly">
          <div className="space-y-7 ml-8">
            <h1 className="font-extrabold text-2xl lg:text-4xl">
              Sri Ram Singarapu
            </h1>
            <h2 className="font-semibold text-xl lg:text-2xl">
              Crafting Scalable Solutions, One Line of Code at a Time!.
            </h2>
            <h3 className="font-semibold text-md lg:text-xl">
              – Full Stack Developer | Innovator | Problem Solver
            </h3>
            <div className="flex gap-4">
              <Button
                href="/contact"
                icon={<FaRegMessage />}
                text="Let's talk"
              />
              <a
                href="https://drive.google.com/file/d/1DTWoJcHjwsPIz7ilSSRYwE9soemtB3SK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gray-800 hover:text-white px-4 py-2 rounded border-2 border-gray-700 flex items-center space-x-2 transition"
              >
                <span> View Resume</span>
                <PiReadCvLogo />
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center m-8">
            <Image
              src={srphoto}
              alt="footer-photo"
              height={400}
              width={400}
              className="rounded-full aspect-square object-cover"
            />
          </div>
        </div>
      </div>
      <Skills />
      <Education />
      <NextJsCarousel />
    </>
  );
}
