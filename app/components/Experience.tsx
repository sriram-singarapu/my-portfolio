"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";

const Experience = () => {
  const experience = [
    {
      company: "BRV Technologies",
      location: "Hyderabad",
      role: "Software Engineer",
      duration: "Aug 2024 – Present",
      type: "Intern → Full-Time",
      achievements: [
        "Contributed to the design and development of a large-scale enterprise interior design & project management platform used across admin, vendor, and customer roles",
        "Built and maintained Next.js admin dashboards for managing users, vendors, projects, workflows, configurations, and approvals",
        "Developed NestJS microservices for project tracking, task scheduling, work orders, product mapping, and internal operational workflows",
        "Implemented Razorpay payment flows including booking, partial payments, order lifecycle handling, and payment verification",
        "Designed secure REST APIs with role-based access control and data isolation across multiple user types",
        "Supported production deployments, bug fixes, and feature enhancements in an Agile environment",
      ],
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
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building production-grade solutions and driving technical excellence
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600 hidden md:block" />

              {/* Experience Card */}
              <div className="glass-effect rounded-2xl p-8 hover:border-blue-600/50 hover:shadow-xl transition-all duration-300 relative">
                {/* Icon */}
                <div className="absolute left-0 top-8 -ml-4 hidden md:block z-10">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full shadow-lg hover:shadow-glow transition-all duration-300">
                    <FaBriefcase className="text-2xl text-white" />
                  </div>
                  <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20" />
                </div>

                {/* Content */}
                <div className="md:ml-16">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-xl text-blue-600 font-semibold mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-600">{exp.location}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold text-sm mb-2">
                        {exp.duration}
                      </span>
                      <p className="text-sm text-gray-600">{exp.type}</p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
