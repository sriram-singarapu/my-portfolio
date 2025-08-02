"use client";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import ProjectsHomeSection from "./components/projects";
import srphoto from "@/public/photo1.jpg";
import Skills from "./components/skills";
import { FaRegMessage } from "react-icons/fa6";
import { PiReadCvLogo } from "react-icons/pi";
import NextJsCarousel from "./components/achievements";
import Education from "./components/Education";
import Button from "./UI/Button";
import Experience from "./components/Experience";

export default function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: easeOut,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  return (
    <>
      {/* Full-Screen Gradient Background */}
      <motion.div
        className="min-h-screen flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly">
          <motion.div className="space-y-7 ml-8" variants={containerVariants}>
            <motion.h1
              className="font-extrabold text-2xl lg:text-4xl"
              variants={textVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              Sri Ram Singarapu
            </motion.h1>

            <motion.h2
              className="font-semibold text-xl lg:text-2xl"
              variants={textVariants}
            >
              Crafting Scalable Solutions, One Line of Code at a Time!
            </motion.h2>

            <motion.h3
              className="font-semibold text-md lg:text-xl"
              variants={textVariants}
            >
              – Full Stack Developer | Innovator | Problem Solver
            </motion.h3>

            <motion.div className="flex gap-4" variants={textVariants}>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  href="/contact"
                  icon={<FaRegMessage />}
                  text="Let's talk"
                />
              </motion.div>

              <motion.a
                href="https://drive.google.com/file/d/1DTWoJcHjwsPIz7ilSSRYwE9soemtB3SK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gray-800 hover:text-white px-4 py-2 rounded border-2 border-gray-700 flex items-center space-x-2 transition"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span>View Resume</span>
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  <PiReadCvLogo />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center items-center m-8"
            variants={imageVariants}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={srphoto}
                alt="Sri Ram Singarapu - Full Stack Developer"
                height={400}
                width={400}
                className="rounded-full aspect-square object-cover shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Sections */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Skills />
      </motion.div>
      <ProjectsHomeSection />
      <Experience />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Education />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <NextJsCarousel />
      </motion.div>
    </>
  );
}
