"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Filter, Search } from "lucide-react";
import { Projects, categories } from "../Data/data";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    return Object.entries(Projects).filter(([_, project]) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.info.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-xl lg:text-3xl font-bold text-blue-600 mb-4 bg-blue-100 p-4 rounded-lg">
            All Projects
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore my complete portfolio of web applications and digital
            solutions
          </p>
        </motion.div>

        {/* Search & Filter Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10"
        >
          {/* Filter Dropdown */}
          <div className="relative w-full md:w-1/3">
            <Filter
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full appearance-none pl-10 pr-4 py-3 border border-gray-300 rounded-2xl bg-white text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-2/3">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl bg-white text-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </motion.div>

        {/* Count */}
        <p className="text-center text-gray-600 mb-8">
          Showing {filteredProjects.length} of {Object.keys(Projects).length}{" "}
          projects
        </p>

        {/* Projects List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          {filteredProjects.map(([projectId, project]) => (
            <motion.div
              key={projectId}
              variants={cardVariants}
              className="flex flex-col md:flex-row gap-6 border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white hover:shadow-md transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="flex items-center justify-center bg-gray-100 h-48 md:h-auto md:w-1/3">
                <div className="text-6xl font-bold text-blue-600 opacity-30">
                  {project.title.split(" ")[0].charAt(0)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between md:w-2/3">
                <div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    {project.title.split(" | ")[0]}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {project.info}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-md font-medium">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 text-sm mt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:underline flex items-center gap-1"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
