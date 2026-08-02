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
  FaBootstrap,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiC,
  SiJsonwebtokens,
  SiSocketdotio,
  SiMui,
} from "react-icons/si";

const categories = [
  {
    label: "Frontend",
    accent: "coral",
    items: [
      { name: "React.js", icon: <FaReact /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Material UI", icon: <SiMui /> },
    ],
  },
  {
    label: "Backend & Databases",
    accent: "teal",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    label: "Auth, APIs & Real-Time",
    accent: "coral",
    items: [
      { name: "JWT", icon: <SiJsonwebtokens /> },
      { name: "REST APIs", icon: <span className="font-mono text-sm">{"{ }"}</span> },
      { name: "Socket.io", icon: <SiSocketdotio /> },
      { name: "WebSockets", icon: <span className="font-mono text-sm">WS</span> },
    ],
  },
  {
    label: "Languages & Tools",
    accent: "teal",
    items: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Docker", icon: <FaDocker /> },
    ],
  },
];

const fundamentals = [
  "OOP",
  "Data Structures & Algorithms",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
];

const accentText = { coral: "text-[#ff8a7f]", teal: "text-[#7fe3d9]" };
const accentHoverBorder = { coral: "hover:border-[#ff6b5e]", teal: "hover:border-[#4fd1c5]" };
const accentIconHover = { coral: "group-hover:text-[#ff6b5e]", teal: "group-hover:text-[#4fd1c5]" };

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0b0a10] text-[#f3efea] py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff6b5e]">// 02 — skills</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mt-4">
          Technical Skills
        </h2>
        <div className="hairline-grad w-full mt-8 mb-16"></div>

        {categories.map((cat, i) => (
          <div key={i} className="mb-14">
            <h3 className={`font-mono text-sm uppercase tracking-wider mb-5 ${accentText[cat.accent]}`}>
              {cat.label}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {cat.items.map((skill, index) => (
                <div
                  key={index}
                  className={`group border border-[#262230] p-5 flex flex-col items-center justify-center gap-3 text-center transition-colors ${accentHoverBorder[cat.accent]}`}
                >
                  <div className={`text-2xl text-[#a8a2b0] transition-colors ${accentIconHover[cat.accent]}`}>
                    {skill.icon}
                  </div>
                  <p className="text-sm font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Core CS fundamentals */}
        <div className="mt-4">
          <h3 className="font-mono text-sm text-[#a8a2b0] uppercase tracking-wider mb-5">
            Core CS Fundamentals
          </h3>
          <div className="flex flex-wrap gap-3">
            {fundamentals.map((f, i) => (
              <span
                key={i}
                className="font-mono text-xs tag-mono border border-[#262230] px-4 py-2.5 text-[#a8a2b0] hover:border-[#3d3748] transition-colors"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-[#262230] mt-20">
          {[
            { value: "20+", label: "Technologies" },
            { value: "6+", label: "Projects" },
            { value: "200+", label: "DSA Problems" },
            { value: "1", label: "Internship" },
          ].map((s, i) => (
            <div
              key={i}
              className={`text-center p-7 ${
                i !== 3 ? "border-r border-[#262230]" : ""
              }`}
            >
              <h3 className="font-display text-3xl font-semibold grad-text">{s.value}</h3>
              <p className="text-[#6e6878] mt-2 font-mono text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
