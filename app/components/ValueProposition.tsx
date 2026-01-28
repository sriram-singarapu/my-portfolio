"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaUsers, FaRocket } from "react-icons/fa";

const ValueProposition = () => {
    const values = [
        {
            icon: <FaCode />,
            title: "Full Stack Expertise",
            description:
                "Hands-on experience building production-grade applications across frontend (React, Next.js) and backend (Node.js, NestJS, Spring Boot) with scalable architecture.",
            color: "from-blue-500 to-blue-600",
        },
        {
            icon: <FaUsers />,
            title: "Team Collaboration",
            description:
                "Proven contributor in Agile teams, owning features end-to-end, mentoring interns, and supporting onboarding for new team members.",
            color: "from-cyan-500 to-cyan-600",
        },
        {
            icon: <FaRocket />,
            title: "Production Ready",
            description:
                "Supporting live production systems with secure authentication, role-based access control, payment integrations, and real-world business workflows.",
            color: "from-blue-600 to-cyan-600",
        },
    ];

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
            className="py-20 px-6 lg:px-8 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
        >
            <div className="container mx-auto">
                {/* Header */}
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        What I Bring to <span className="gradient-text">Your Team</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Combining technical excellence with strategic thinking to deliver measurable business impact
                    </p>
                </motion.div>

                {/* Value Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="glass-effect rounded-2xl p-8 hover:border-blue-600/50 hover:shadow-xl transition-all duration-300"
                            whileHover={{ y: -10 }}
                        >
                            <div className={`inline-flex p-4 bg-gradient-to-r ${value.color} rounded-xl mb-6`}>
                                <div className="text-3xl text-white">{value.icon}</div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mt-16"
                >
                    <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Ready to Build Something Great Together?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Let's discuss how I can contribute to your team's success
                        </p>
                        <motion.a
                            href="/contact"
                            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ValueProposition;
