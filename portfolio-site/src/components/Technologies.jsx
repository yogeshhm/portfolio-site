import React from "react";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaNodeJs, 
  FaJava, 
  FaGitAlt, 
  FaBootstrap 
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiJavascript, 
  SiMongodb, 
  SiMysql 
} from "react-icons/si";

export default function Technologies() {
  const techs = [
    { icon: <FaHtml5 className="text-orange-500 text-5xl" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, name: "CSS3" },
    { icon: <SiJavascript className="text-yellow-400 text-5xl" />, name: "JavaScript" },
    { icon: <FaReact className="text-cyan-400 text-5xl" />, name: "React" },
    { icon: <SiTailwindcss className="text-sky-400 text-5xl" />, name: "Tailwind CSS" },
    { icon: <FaNodeJs className="text-green-500 text-5xl" />, name: "Node.js" },
    { icon: <SiMongodb className="text-green-600 text-5xl" />, name: "MongoDB" },
    { icon: <SiMysql className="text-blue-400 text-5xl" />, name: "MySQL" },
    { icon: <FaBootstrap className="text-purple-500 text-5xl" />, name: "Bootstrap" },
    { icon: <FaGitAlt className="text-red-500 text-5xl" />, name: "Git" },
    { icon: <FaJava className="text-orange-600 text-5xl" />, name: "Java" },
  ];

  return (
    <section
      id="technologies"
      className="min-h-[70vh] bg-[#1c1d23] text-gray-200 flex flex-col items-center justify-center py-16 px-8"
    >
      <h2 className="text-lg font-mono mb-8 text-gray-100">
        Technologies I Work With
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#2b2d35] p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {tech.icon}
            <p className="mt-3 text-sm text-gray-300">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
