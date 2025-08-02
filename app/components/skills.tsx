"use client";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";

export default function Skills() {
  const allSkills = [
    { skl: "React JS", img: "/skills/React.png" },
    { skl: "Next JS", img: "/skills/Next.js.png" },
    { skl: "JavaScript", img: "/skills/js.png" },
    { skl: "HTML5", img: "/skills/HTML5.png" },
    { skl: "Tailwind CSS", img: "/skills/TailwindCSS.png" },
    { skl: "Bootstrap", img: "/skills/Bootstrap.png" },
    { skl: "Node JS", img: "/skills/Node.js.png" },
    { skl: "MySQL", img: "/skills/MySQL.png" },
    { skl: "Azure", img: "/skills/Azure.png" },
    { skl: "Git", img: "/skills/Git.png" },
    { skl: "GitHub", img: "/skills/GitHub.png" },
    { skl: "BitBucket", img: "/skills/BitBucket.png" },
    { skl: "Jira", img: "/skills/Jira.png" },
    { skl: "Flutter", img: "/skills/Flutter.png" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <motion.div
      className="mb-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.div variants={headerVariants}>
        <motion.h2
          className="text-center text-xl lg:text-3xl font-bold text-green-600 mx-5 bg-green-100 p-4 rounded-lg mb-6"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          Tech Stack & Expertise
        </motion.h2>

        <motion.p
          className="text-md lg:text-xl m-8 text-center text-gray-700 leading-relaxed"
          variants={headerVariants}
        >
          I specialize in ReactJS, Node.js, and Next.js, crafting dynamic and
          scalable web applications. With expertise in frontend development,
          backend systems, and database management, I deliver efficient,
          responsive, and robust solutions.
        </motion.p>
      </motion.div>

      {/* All Skills in Flex Wrap */}
      <motion.div
        className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4"
        variants={containerVariants}
      >
        {allSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center border-2 border-gray-300 hover:border-green-500 font-bold p-4 gap-3 bg-gray-50 hover:bg-green-50 rounded-lg transition-colors duration-300 min-w-[160px]"
            variants={skillVariants}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              whileHover={{
                rotate: 360,
                transition: { duration: 0.6 },
              }}
            >
              <Image
                src={skill.img}
                alt={skill.skl}
                height={40}
                width={40}
                className="object-contain"
              />
            </motion.div>
            <motion.h4
              className="font-semibold text-sm lg:text-base text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.05 }}
            >
              {skill.skl}
            </motion.h4>
          </motion.div>
        ))}
      </motion.div>

      {/* Development Practices */}
      <motion.div className="mt-12 max-w-4xl mx-auto" variants={skillVariants}>
        <motion.h3
          className="text-center text-lg lg:text-2xl font-bold text-indigo-600 mb-6 bg-indigo-100 p-3 rounded-lg"
          variants={headerVariants}
        >
          Development Practices & Methodologies
        </motion.h3>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={containerVariants}
        >
          {[
            "Agile",
            "Scrum",
            "Test-Driven Development",
            "Code Reviews",
            "RESTful APIs",
            "Responsive Design",
            "Cross-Browser Compatibility",
            "CI/CD",
          ].map((practice, index) => (
            <motion.div
              key={index}
              className="bg-indigo-50 text-indigo-700 p-3 rounded-lg text-center font-semibold border border-indigo-200"
              variants={skillVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#e0e7ff",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                {practice}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
