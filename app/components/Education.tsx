"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaCertificate } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Electrical and Electronics Engineering",
      institution: "Christu Jyothi Institute of Technology and Science",
      duration: "2020 – 2023",
      grade: "GPA: 7.46",
    },
    {
      degree: "Diploma",
      field: "Electrical and Electronics Engineering",
      institution: "Government Polytechnic Yadagirigutta",
      duration: "2017 – 2020",
      grade: "Percentage: 77.92%",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      field: "",
      institution: "Sri Aurobindo High School",
      duration: "2016 – 2017",
      grade: "GPA: 9.8",
    },
  ];

  const certifications = [
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      icon: <FaCertificate />,
    },
    {
      title: "Microsoft Future Ready Talent – Virtual Internship",
      issuer: "Microsoft",
      icon: <FaCertificate />,
    },
  ];

  const recognition = {
    title: "Recognition from BRV Technologies",
    description:
      "Recognized by BRV Technologies Private Limited for significant contributions to the Persft project, delivering key features and supporting production readiness.",
  };

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
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Education */}
          <motion.div variants={itemVariants}>
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
                  <FaGraduationCap className="text-3xl text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white/50 rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-300"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">
                          {edu.degree}
                          {edu.field && ` - ${edu.field}`}
                        </h4>
                        <p className="text-gray-700 font-medium">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-semibold mb-1">
                          {edu.duration}
                        </span>
                        <p className="text-sm font-semibold text-green-600">{edu.grade}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications & Recognition */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <div className="glass-effect rounded-2xl p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl">
                    <FaCertificate className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
                </div>

                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white/50 rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-blue-600 text-xl mt-1">{cert.icon}</div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{cert.title}</h4>
                          <p className="text-sm text-gray-600">{cert.issuer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Recognition */}
            <motion.div variants={itemVariants}>
              <div className="glass-effect rounded-2xl p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl">
                    <FaAward className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Recognition</h3>
                </div>

                <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">
                    {recognition.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{recognition.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
