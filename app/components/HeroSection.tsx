"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import srphoto from "@/public/photo1.jpg";

const HeroSection = () => {
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
            transition: { duration: 0.6, ease: "easeOut" as const },
        },
    };

    return (
        <motion.section
            className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-20 relative z-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left Content */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        {/* Role Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full text-sm font-semibold text-blue-600"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Software Engineer at BRV Technologies
                        </motion.div>

                        {/* Name */}
                        <div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-2">
                                Sri Ram
                            </h1>
                            <h1 className="text-5xl lg:text-7xl font-bold gradient-text">
                                Singarapu
                            </h1>
                        </div>

                        {/* Tagline */}
                        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                            Full Stack Developer
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                            Building and deploying production-grade web applications with expertise in
                            React, Next.js, Node.js, NestJS, and Java Spring Boot. Focused on scalable
                            architecture, secure authentication, and real-world business workflows.
                        </p>

                        {/* Contact Info */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <a
                                href="mailto:sriramsingarapu2@gmail.com"
                                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                            >
                                <FaEnvelope className="text-blue-600" />
                                sriramsingarapu2@gmail.com
                            </a>
                            <a
                                href="tel:+919866521020"
                                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                            >
                                <FaPhone className="text-blue-600" />
                                +91 98665 21020
                            </a>
                            <span className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-blue-600" />
                                Hyderabad, India
                            </span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <motion.a
                                href="/contact"
                                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Let's Collaborate
                            </motion.a>
                            <motion.a
                                href="https://drive.google.com/file/d/15-91oeNzOJrhfWelLWNOoJRJiQmjV1xY/view?usp=sharing"
                                target="_blank"
                                className="px-8 py-3 glass-effect text-gray-700 font-semibold rounded-lg hover:border-blue-600/50 transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Resume
                            </motion.a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            <motion.a
                                href="https://github.com/sriram-singarapu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 glass-effect rounded-lg text-gray-700 hover:text-blue-600 hover:border-blue-600/50 transition-all duration-300"
                                whileHover={{ y: -5, scale: 1.1 }}
                            >
                                <FaGithub className="text-2xl" />
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/sriram-singarapu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 glass-effect rounded-lg text-gray-700 hover:text-blue-600 hover:border-blue-600/50 transition-all duration-300"
                                whileHover={{ y: -5, scale: 1.1 }}
                            >
                                <FaLinkedin className="text-2xl" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center lg:justify-end"
                    >
                        <motion.div
                            className="relative"
                            whileHover={{ scale: 1.05 }}
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                scale: { duration: 0.3 }
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-30 animate-pulse" />
                            <Image
                                src={srphoto}
                                alt="Sri Ram Singarapu"
                                width={400}
                                height={400}
                                className="relative rounded-full aspect-square object-cover border-4 border-white shadow-2xl z-10"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default HeroSection;
