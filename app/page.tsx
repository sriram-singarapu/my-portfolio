"use client";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import ProjectsHomeSection from "./components/projects";
import srphoto from "@/public/photo1.jpg";
import Skills from "./components/skills";
import { FaRegMessage } from "react-icons/fa6";
import { PiReadCvLogo } from "react-icons/pi";
import { HiCode, HiLightningBolt, HiTrendingUp } from "react-icons/hi";
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

  const highlightVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
      },
    },
  };

  return (
    <>
      {/* Enhanced Hero Section */}
      <motion.div
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-40 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.25, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="space-y-8 ml-8 max-w-2xl"
            variants={containerVariants}
          >
            <motion.div variants={textVariants}>
              <motion.span
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold text-sm lg:text-base tracking-wide uppercase mb-2 mt-5"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Full Stack Developer & Technical Leader
              </motion.span>
            </motion.div>

            <motion.h1
              className="font-extrabold text-3xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight"
              variants={textVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              Sri Ram Singarapu
            </motion.h1>

            <motion.h2
              className="font-semibold text-xl lg:text-3xl xl:text-4xl text-gray-800 leading-relaxed"
              variants={textVariants}
            >
              Architecting Scalable Solutions with{" "}
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                40% Faster Performance
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl"
              variants={textVariants}
            >
              Transforming ideas into high-performance web applications using
              React.js, Next.js, and Spring Boot. Proven track record of
              mentoring teams and delivering enterprise-grade solutions.
            </motion.p>

            {/* Achievement Highlights */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-gray-200"
                variants={highlightVariants}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <HiLightningBolt className="text-yellow-500 text-2xl" />
                <div>
                  <p className="font-semibold text-gray-900">40% Faster</p>
                  <p className="text-sm text-gray-600">Load Times</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-gray-200"
                variants={highlightVariants}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <HiTrendingUp className="text-green-500 text-2xl" />
                <div>
                  <p className="font-semibold text-gray-900">25% Faster</p>
                  <p className="text-sm text-gray-600">Development</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-gray-200"
                variants={highlightVariants}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <HiCode className="text-blue-500 text-2xl" />
                <div>
                  <p className="font-semibold text-gray-900">Team Leader</p>
                  <p className="text-sm text-gray-600">& Mentor</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={textVariants}
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  href="/contact"
                  icon={<FaRegMessage />}
                  text="Let's Build Together"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg"
                />
              </motion.div>

              <motion.a
                href="https://drive.google.com/file/d/15jAcvbjQzoYmNVyITFcJvBwFoFwlUPjv/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white/80 backdrop-blur-sm hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg border-2 border-gray-300 flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="font-semibold">View Resume</span>
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="text-lg"
                >
                  <PiReadCvLogo />
                </motion.div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center items-center m-8"
            variants={imageVariants}
          >
            <motion.div
              className="relative"
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glowing ring effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-pulse">
                <div className="bg-transparent rounded-full h-full w-full" />
              </div>

              <Image
                src={srphoto}
                alt="Sri Ram Singarapu - Full Stack Developer & Technical Leader"
                height={400}
                width={400}
                className="relative z-10 rounded-full aspect-square object-cover shadow-2xl border-4 border-white"
              />

              {/* Floating badges */}
              <motion.div
                className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Available
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                Open to Work
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Sections with improved spacing */}
      <div className="mt-10">
        <Skills />
      </div>

      <div>
        <ProjectsHomeSection />
      </div>

      <div>
        <Experience />
      </div>

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
