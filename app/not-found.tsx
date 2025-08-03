// app/not-found.tsx
"use client";
import Link from "next/link";
import { motion, easeInOut, easeOut } from "framer-motion";
import { HiHome, HiRefresh } from "react-icons/hi";
import { FaRocket, FaStar } from "react-icons/fa";

export default function NotFound() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const starVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Stars */}
        <motion.div
          className="absolute top-20 left-20"
          variants={starVariants}
          animate="animate"
        >
          <FaStar className="text-yellow-400 text-2xl opacity-60" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-32"
          variants={starVariants}
          animate="animate"
          transition={{ delay: 1 }}
        >
          <FaStar className="text-blue-400 text-xl opacity-50" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-40"
          variants={starVariants}
          animate="animate"
          transition={{ delay: 2 }}
        >
          <FaStar className="text-purple-400 text-lg opacity-70" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20"
          variants={starVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          <FaStar className="text-pink-400 text-xl opacity-60" />
        </motion.div>

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-32 right-16 w-16 h-16 border-2 border-blue-300 rounded-full opacity-30"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-16 w-12 h-12 bg-purple-300 opacity-20 rounded-lg"
          animate={{
            rotate: [0, 45, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="text-center max-w-2xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated 404 SVG Illustration */}
        <motion.div className="mb-8" variants={floatVariants} animate="animate">
          <svg
            viewBox="0 0 400 200"
            className="w-80 h-40 mx-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Planet/Moon */}
            <motion.circle
              cx="100"
              cy="100"
              r="40"
              fill="url(#planetGradient)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Rocket */}
            <motion.g
              initial={{ x: -50, y: 50, rotate: -45 }}
              animate={{ x: 0, y: 0, rotate: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              <path
                d="M200 80 L200 120 L220 110 L240 120 L240 80 L220 70 Z"
                fill="url(#rocketGradient)"
              />
              <circle cx="220" cy="85" r="3" fill="#fff" />
              <motion.path
                d="M200 120 L195 130 L200 125 L205 130 Z"
                fill="#ff6b6b"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            </motion.g>

            {/* 404 Text */}
            <motion.text
              x="300"
              y="110"
              fontSize="48"
              fontWeight="bold"
              fill="url(#textGradient)"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              404
            </motion.text>

            {/* Gradients */}
            <defs>
              <linearGradient
                id="planetGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#a8d8ff" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
              <linearGradient
                id="rocketGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#f1f5f9" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
              <linearGradient
                id="textGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Main Content */}
        <motion.div variants={itemVariants}>
          <motion.h1
            className="text-7xl md:text-8xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            404
          </motion.h1>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
          variants={itemVariants}
        >
          Lost in Space? 🚀
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed max-w-lg mx-auto"
          variants={itemVariants}
        >
          Oops! It looks like you've ventured into uncharted territory. The page
          you're looking for has drifted away into the digital cosmos.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl flex items-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <HiHome className="text-xl" />
              <span>Return Home</span>
              <motion.div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => window.history.back()}
              className="group relative overflow-hidden bg-white/70 backdrop-blur-sm hover:bg-white/90 text-gray-800 font-semibold px-8 py-4 rounded-xl border-2 border-gray-300 hover:border-gray-400 flex items-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <HiRefresh className="text-xl" />
              <span>Go Back</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Fun Interactive Element */}
        <motion.div className="mt-12" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200"
            whileHover={{ scale: 1.05 }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaRocket className="text-blue-500" />
            <span className="text-gray-700 font-medium">
              Need help navigating? Contact me!
            </span>
          </motion.div>
        </motion.div>

        {/* Additional Links */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-6 text-sm"
          variants={itemVariants}
        >
          <Link
            href="/projects"
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>

      {/* Subtle Animation Elements */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-1 h-8 bg-gradient-to-b from-transparent via-blue-400 to-transparent rounded-full" />
      </motion.div>
    </div>
  );
}
