import Image from "next/image";

export default function Skills() {
  const skill = [
    { skl: "Next JS", img: "/skills/Next.js.png" },
    { skl: "React JS", img: "/skills/React.png" },
    { skl: "JavaScript", img: "/skills/js.png" },
    { skl: "Node JS", img: "/skills/Node.js.png" },
    { skl: "HTML5", img: "/skills/HTML5.png" },
    { skl: "Tailwind CSS", img: "/skills/TailwindCSS.png" },
    { skl: "Bootstrap", img: "/skills/Bootstrap.png" },
    { skl: "Azure", img: "/skills/Azure.png" },
    { skl: "MySQL", img: "/skills/MYSQL.png" },
    { skl: "Flutter", img: "/skills/Flutter.png" },
    { skl: "Git", img: "/skills/Git.png" },
    { skl: "GitHub", img: "/skills/GitHub.png" },
    { skl: "BitBucket", img: "/skills/BitBucket.png" },
    { skl: "Jira", img: "/skills/Jira.png" },
  ];

  return (
    <>
      <div className="m-16">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold  text-center text-gray-800">
          Tech Stack
        </h2>
        <p className="text-2xl font-semibold m-8">
          I specialize in ReactJS, Node.js, and Next.js, crafting dynamic and
          scalable web applications. With expertise in frontend development,
          backend systems, and database management, I deliver efficient,
          responsive, and robust solutions.
        </p>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-5 justify-center">
          {skill.map((skill, index) => (
            <div
              key={index}
              className="flex items-center border-4 border-gray-800 font-bold p-2 gap-4"
            >
              <Image src={skill.img} alt={skill.skl} height={50} width={50} />
              <h3 className="font-bold text-xl">{skill.skl}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
