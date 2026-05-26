import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiCplusplus,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={40} /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} /> },
  { name: "JavaScript", icon: <FaJs size={40} /> },
  { name: "React.js", icon: <FaReact size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "Express.js", icon: <SiExpress size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
  { name: "C++", icon: <SiCplusplus size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "GitHub", icon: <FaGithub size={40} /> },
  { name: "Docker", icon: <FaDocker size={40} /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#020817] text-white py-2 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-slate-400 mt-8 text-lg">
            Technologies and tools I use to build modern, scalable,
            responsive, and high-performance web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                group
                bg-[#07111F]/80
                backdrop-blur-xl
                border border-slate-800
                rounded-3xl
                p-8
                flex flex-col items-center justify-center
                text-center
                hover:border-cyan-400/40
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-20">
          <div className="bg-[#07111F]/80 border border-slate-800 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">13+</h3>
            <p className="text-slate-400 mt-2">Technologies</p>
          </div>

          <div className="bg-[#07111F]/80 border border-slate-800 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">6+</h3>
            <p className="text-slate-400 mt-2">Projects</p>
          </div>

          <div className="bg-[#07111F]/80 border border-slate-800 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">200+</h3>
            <p className="text-slate-400 mt-2">DSA Problems</p>
          </div>

          <div className="bg-[#07111F]/80 border border-slate-800 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">1</h3>
            <p className="text-slate-400 mt-2">Internship</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;