"use client";

import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { easeInOut } from "framer-motion";
import { Typography, Paper, Box } from "@mui/material";
import { motion } from "framer-motion";
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
      "Reduced load times by 40%",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Kolval",
    location: "Remote",
    duration: "Jan 2025 – Apr 2025",
    type: "Internship",
    achievements: [
      "Contributed to responsive UI for blockchain and workforce management platforms",
      "Enhanced SEO and accessibility",
    ],
  },
];

const iconVariants = {
  hidden: {
    scale: 0,
    rotate: -180,
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: easeInOut, // ✅ valid easing string
    },
  },
};

const ExperienceTimeline = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Timeline position="alternate">
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {exp.duration}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={iconVariants}
                viewport={{ once: true }}
              >
                <TimelineDot color="primary">
                  {index % 2 === 0 ? (
                    <FaBriefcase size={16} />
                  ) : (
                    <FaCode size={16} />
                  )}
                </TimelineDot>
              </motion.div>
              {index !== experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Paper elevation={3} sx={{ p: 2 }}>
                  <Typography variant="h6" component="span">
                    {exp.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {exp.company} – {exp.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {exp.type}
                  </Typography>
                  <ul>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>
                        <Typography variant="body2">{achievement}</Typography>
                      </li>
                    ))}
                  </ul>
                </Paper>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default ExperienceTimeline;
