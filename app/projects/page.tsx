import Image from "next/image";
import { GrDomain } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import Projects from "../components/data";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center text-xl lg:text-3xl font-bold text-green-600 mb-6 bg-green-100 p-3 rounded-md">
        My Projects
      </div>
      {Object.values(Projects).map((project, index) => (
        <div
          key={index}
          className="mb-8 p-5 border-4 border-gray-700 rounded-lg"
        >
          {/* Title */}
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold mb-2 text-center">
            {project.title}
          </h1>

          {/* Project Layout */}
          <div className="flex flex-wrap md:flex-nowrap items-center border-b border-gray-300 py-4">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
              <Image
                className="border-black border-2 rounded"
                src={project.img}
                alt={project.title}
                width={600}
                height={800}
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 md:pl-6">
              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  <p className="font-semibold text-l lg:text-2xl">
                    Tech stack :{" "}
                  </p>
                  {project.tech.map((tech, i) => (
                    <p
                      key={i}
                      className="px-2 py-1 bg-gray-700 text-white rounded text-xs sm:text-sm lg:text-lg"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>

              {/* Info */}
              <p className="mb-4 text-sm sm:text-xl lg:text-2xl">
                {project.info}
              </p>

              {/* Links */}
              <div className="flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded flex-grow flex items-center justify-center gap-2 hover:bg-cyan-700 transition"
                  >
                    <GrDomain className="text-sm sm:text-lg lg:text-2xl" />
                    <p className="font-semibold text-sm sm:text-md lg:text-lg">
                      Live Demo
                    </p>
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-gray-800 hover:text-white px-4 py-2 rounded border-2 border-gray-700 flex-grow flex items-center justify-center gap-2 transition"
                  >
                    <FaCode className="text-sm sm:text-lg lg:text-2xl" />
                    <p className="font-bold text-sm sm:text-md lg:text-lg">
                      Code
                    </p>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
