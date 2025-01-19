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
    { skl: "MySQL", img: "/skills/MySQL.png" },
    { skl: "Flutter", img: "/skills/Flutter.png" },
    { skl: "Git", img: "/skills/Git.png" },
    { skl: "GitHub", img: "/skills/GitHub.png" },
    { skl: "BitBucket", img: "/skills/BitBucket.png" },
    { skl: "Jira", img: "/skills/Jira.png" },
  ];

  return (
    <>
      <div className="my-10">
        {/* Heading */}
        <h2 className="text-center text-2xl lg:text-3xl font-bold text-green-600 m-5 bg-green-100 p-3 rounded-md">
          Tech Stack
        </h2>
        <p className="text-lg lg:text-2xl m-8">
          I specialize in ReactJS, Node.js, and Next.js, crafting dynamic and
          scalable web applications. With expertise in frontend development,
          backend systems, and database management, I deliver efficient,
          responsive, and robust solutions.
        </p>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-5 justify-center mx-16">
          {skill.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center border-4 border-gray-800 font-bold p-2 gap-4 w-full sm:w-auto"
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
