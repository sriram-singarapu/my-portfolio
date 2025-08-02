"use client";

import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { motion, easeInOut } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electrical and Electronics Engineering",
    institution: "Christu Jyothi Institute of Technology and Science",
    duration: "2020 – 2023",
    grade: "GPA: 7.46",
    icon: <FaGraduationCap />,
    color: "blue",
  },
  {
    degree: "Diploma",
    field: "Electrical and Electronics Engineering",
    institution: "Government Polytechnic Yadagirigutta",
    duration: "2017 – 2020",
    grade: "Percentage: 77.92%",
    icon: <FaUniversity />,
    color: "purple",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    field: "",
    institution: "Sri Aurobindo High School",
    duration: "2016 – 2017",
    grade: "GPA: 9.8",
    icon: <FaSchool />,
    color: "green",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.3,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};

export default function Education() {
  return (
    <motion.div
      className="mb-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="text-center text-xl lg:text-3xl font-bold text-blue-600 mb-8">
        <h2>Educational Journey</h2>
      </div>

      <Timeline
        sx={{
          [`& .MuiTimelineItem-root:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {educationData.map((edu, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot className={`!bg-${edu.color}-500`}>
                <motion.div
                  className="text-white text-xl"
                  variants={iconVariants}
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  {React.cloneElement(edu.icon, { className: "text-white" })}
                </motion.div>
              </TimelineDot>
              {index !== educationData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent className="!py-2">
              <div
                className={`rounded-xl shadow-lg border-l-4 border-${edu.color}-500 p-6 hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg lg:text-xl font-bold text-gray-800">
                        {edu.degree}
                      </h3>
                      <span
                        className={`text-sm font-semibold px-3 py-1 bg-${edu.color}-100 text-${edu.color}-700 rounded-full`}
                      >
                        {edu.duration}
                      </span>
                    </div>

                    {edu.field && (
                      <p className="text-gray-600 font-medium mb-2">
                        {edu.field}
                      </p>
                    )}

                    <p className="text-gray-700 mb-2">{edu.institution}</p>

                    <div
                      className={`inline-flex items-center px-3 py-1 bg-${edu.color}-50 text-${edu.color}-700 rounded-lg font-semibold`}
                    >
                      <span className="text-sm">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </motion.div>
  );
}
