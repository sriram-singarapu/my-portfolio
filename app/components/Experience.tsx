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
import { easeOut, motion } from "framer-motion";
import { FaBriefcase, FaCode } from "react-icons/fa";

const experiences = [
  {
    title: "Software Engineer",
    company: "BRV Technologies",
    location: "Hyderabad",
    duration: "May 2025 – Present",
    type: "Full-time",
    achievements: [
      "Developed scalable full-stack apps using Next.js, React.js, and Spring Boot",
      "Built admin dashboard with real-time analytics and access control",
      "Reduced load times by 40% with performance optimizations",
    ],
    icon: <FaBriefcase />,
    color: "blue",
  },
  {
    title: "Developer Intern",
    company: "BRV Technologies",
    location: "Hyderabad",
    duration: "Aug 2024 – Apr 2025",
    type: "Internship",
    achievements: [
      "Built responsive UIs with React, Next.js, Tailwind CSS",
      "Integrated RESTful APIs for dynamic content handling",
      "Collaborated with backend teams and used Git-based workflows",
    ],
    icon: <FaCode />,
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
      ease: easeOut,
    },
  },
};

const ExperienceTimeline = () => {
  return (
    <motion.div
      className="mb-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Heading */}
      <div className="text-center text-xl lg:text-3xl font-bold text-green-600 mb-8 bg-green-100 p-4 rounded-lg mx-5">
        <h2>Professional Journey</h2>
      </div>

      {/* Timeline */}
      <Timeline
        sx={{
          [`& .MuiTimelineItem-root:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot className={`!bg-${exp.color}-500`}>
                <motion.div
                  className="text-white text-xl"
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  {React.cloneElement(exp.icon, { className: "text-white" })}
                </motion.div>
              </TimelineDot>
              {index !== experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent className="!py-2">
              <div
                className={`rounded-xl shadow-lg border-l-4 border-${exp.color}-500 p-6 hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg lg:text-xl font-bold text-gray-800">
                        {exp.title}
                      </h3>
                      <span
                        className={`text-sm font-semibold px-3 py-1 bg-${exp.color}-100 text-${exp.color}-700 rounded-full`}
                      >
                        {exp.duration}
                      </span>
                    </div>

                    <p className="text-gray-600 font-medium mb-2">
                      {exp.company} – {exp.location}
                    </p>

                    <div
                      className={`inline-flex items-center px-3 py-1 bg-${exp.color}-50 text-${exp.color}-700 rounded-lg font-semibold mb-3`}
                    >
                      <span className="text-sm">{exp.type}</span>
                    </div>

                    <ul className="list-disc pl-5 space-y-1">
                      {exp.achievements.map((achieve, i) => (
                        <li key={i} className="text-sm text-gray-700">
                          {achieve}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </motion.div>
  );
};

export default ExperienceTimeline;
