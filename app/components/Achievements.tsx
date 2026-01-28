"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
    FaTrophy,
    FaUsers,
    FaRocket,
    FaLightbulb,
    FaMicrosoft,
} from "react-icons/fa";
import { useState } from "react";

export default function Achievements() {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const images = [
        { src: "/Achivements/sr-ma.png", alt: "Sri Ram at Microsoft Summit" },
        {
            src: "/Achivements/satya-ma.png",
            alt: "Satya Nadella at Future Ready Summit",
        },
        { src: "/Achivements/grp-ma.png", alt: "Group photo at Microsoft Summit" },
    ];

    const achievementCards = [
        {
            title: "Microsoft Future Ready Technology Summit 2023",
            description:
                "Selected participant at Microsoft Future Ready Technology Summit 2023, learning directly from industry leaders like Satya Nadella",
            icon: <FaMicrosoft className="text-blue-600" />,
            category: "Industry Recognition",
            impact:
                "Gained insights into Microsoft's vision for technology-enabled growth",
            color: "blue",
        },
        {
            title: "IoT Project Leadership",
            description:
                "Led a 4-member team to develop an IoT-powered automated trash collector boat with real-time Azure data visualization at CJITS",
            icon: <FaRocket className="text-green-600" />,
            category: "Innovation Project",
            impact: "Successfully demonstrated IoT integration with cloud analytics",
            color: "green",
        },
        {
            title: "Research & Development Club Convenor",
            description:
                "Served as Club Convenor of the Research & Development Club, organizing tech events and guiding peers in project development",
            icon: <FaUsers className="text-purple-600" />,
            category: "Leadership Role",
            impact: "Enhanced technical community engagement and peer mentorship",
            color: "purple",
        },
        {
            title: "Intern Mentorship Program",
            description:
                "Mentored interns on live projects, improving project delivery outcomes and team capabilities",
            icon: <FaLightbulb className="text-orange-600" />,
            category: "Professional Development",
            impact: "Strengthened team knowledge transfer and project success rates",
            color: "orange",
        },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const imageVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            className="mb-16 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
        >
            {/* Heading */}
            <motion.div
                className="text-center text-xl lg:text-3xl font-bold text-yellow-600 mb-8 bg-yellow-100 p-4 rounded-lg mx-5"
                variants={cardVariants}
            >
                <motion.h2
                    className="flex items-center justify-center gap-3"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <FaTrophy />
                    </motion.div>
                    Leadership & Achievements
                </motion.h2>
            </motion.div>

            {/* Featured Achievement - Microsoft Summit */}
            <motion.div className="max-w-6xl mx-auto mb-12" variants={cardVariants}>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* Text Content */}
                        <motion.div
                            className="lg:w-1/2 p-8"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.div
                                className="flex items-center gap-3 mb-4"
                                whileHover={{ scale: 1.02 }}
                            >
                                <FaMicrosoft className="text-3xl text-blue-600" />
                                <div>
                                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800">
                                        Future Ready Technology Summit 2023
                                    </h3>
                                    <p className="text-sm text-gray-600">Microsoft India</p>
                                </div>
                            </motion.div>

                            <motion.p
                                className="text-gray-700 leading-relaxed mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                Honoured to be selected for the 'Future Ready Technology Summit,
                                2023' hosted by Microsoft India, where I gained insights into
                                Microsoft's vision for technology-enabled growth, with{" "}
                                <strong>Satya Nadella</strong> as the guest of honour.
                            </motion.p>

                            <motion.div
                                className="flex gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9 }}
                            >
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                    Industry Leadership
                                </span>
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                    Technology Vision
                                </span>
                            </motion.div>
                        </motion.div>

                        {/* Image Gallery */}
                        <motion.div className="lg:w-1/2 p-8" variants={imageVariants}>
                            <div className="relative">
                                <motion.div
                                    className="aspect-video relative rounded-xl overflow-hidden shadow-lg"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={images[activeImageIndex].src}
                                        alt={images[activeImageIndex].alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </motion.div>

                                {/* Image Navigation */}
                                <motion.div
                                    className="flex justify-center gap-2 mt-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                >
                                    {images.map((_, index) => (
                                        <motion.button
                                            key={index}
                                            className={`w-3 h-3 rounded-full transition-colors duration-200 ${activeImageIndex === index
                                                ? "bg-blue-600"
                                                : "bg-gray-300"
                                                }`}
                                            onClick={() => setActiveImageIndex(index)}
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                        />
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
