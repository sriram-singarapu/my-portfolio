"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Projects } from "../Data/data";

const ProjectsHomeSection = () => {
  const router = useRouter();
  const featuredProjects = Object.entries(Projects).slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const navigateToProjects = () => router.push("/projects");

  return (
    <section className="py-20 px-6 lg:px-8 relative z-10">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Production-grade applications built with modern technologies and best practices
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {featuredProjects.map(([projectId, project]) => (
            <motion.div
              key={projectId}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect rounded-2xl overflow-hidden cursor-pointer group hover:border-blue-600/50 hover:shadow-xl transition-all duration-300"
              onClick={navigateToProjects}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-bold text-gray-300">
                    {project.title.split(" ")[0].charAt(0)}
                  </div>
                </div>
                {project.category && (
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-blue-600 border border-blue-200">
                    {project.category}
                  </div>
                )}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors border border-blue-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={18} className="text-blue-600" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 line-clamp-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title.split(" | ")[0]}
                </h3>
                <p className="text-sm mb-4 line-clamp-3 text-gray-600 leading-relaxed">
                  {project.info}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-xs rounded-lg font-medium text-blue-700 border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-xs rounded-lg font-medium text-gray-600 border border-gray-200">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                  View Details
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            onClick={navigateToProjects}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Projects
            <ArrowRight size={20} className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHomeSection;
