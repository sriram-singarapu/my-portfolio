"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion, easeOut } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
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
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const navigateToProjects = () => router.push("/projects");

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Showcasing innovative solutions built with modern technologies
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
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group"
              onClick={navigateToProjects}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold opacity-30">
                    {project.title.split(" ")[0].charAt(0)}
                  </div>
                </div>
                {project.category && (
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-xs font-semibold">
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
                    className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                  {project.code && (
                    <motion.a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title.split(" | ")[0]}
                </h3>
                <p className="text-sm mb-4 line-clamp-3">{project.info}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md font-medium">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex items-center text-sm font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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
