import React from "react";
import { Briefcase } from "lucide-react";

const highlights = [
  "Developed responsive, reusable React.js components using JavaScript, Tailwind CSS, HTML5 and CSS improving cross-device compatibility and code maintainability.",
  "Integrated REST APIs to implement dynamic frontend functionality and collaborated with developers using Git and GitHub in an Agile environment.",
  "Participated in sprint planning, code reviews, bug fixing and feature implementation to deliver high-quality, user-friendly web applications.",
];

const skillsUsed = [
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "REST APIs",
  "Git",
  "GitHub",
  "Agile",
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0b0a10] text-[#f3efea] py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#4fd1c5]">// 04 — experience</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mt-4">
          Work Experience
        </h2>
        <div className="hairline-grad w-full mt-8 mb-16"></div>

        <div className="border border-[#262230] p-8 md:p-10 hover:border-[#ff6b5e]/50 transition-colors duration-300">
          <div className="flex flex-col md:flex-row gap-8">

            <div className="flex items-start">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b5e]/15 to-[#4fd1c5]/15 border border-[#262230] flex items-center justify-center text-[#ff8a7f]">
                <Briefcase size={26} />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-semibold">Web Developer Intern</h3>

              <p className="text-[#a8a2b0] text-lg mt-2">
                Marcaids &nbsp;•&nbsp; Gurugram, Haryana
              </p>

              <p className="font-mono text-sm text-[#7fe3d9] mt-2">
                Oct 2025 — Jan 2026 &nbsp;·&nbsp; 4-month internship
              </p>

              <div className="mt-8 space-y-4">
                {highlights.map((h, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="font-mono text-[#ff6b5e] mt-0.5">›</span>
                    <p className="text-[#a8a2b0]">{h}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {skillsUsed.map((skill, index) => (
                  <span
                    key={index}
                    className="font-mono tag-mono px-3 py-1.5 border border-[#262230] text-[#a8a2b0] hover:border-[#4fd1c5]/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#262230] mt-10">
          {[
            { value: "1", label: "Internship" },
            { value: "4", label: "Months Experience" },
            { value: "8+", label: "Technologies Used" },
          ].map((s, i) => (
            <div
              key={i}
              className={`text-center p-7 ${i !== 2 ? "md:border-r border-[#262230]" : ""} ${i !== 2 ? "border-b md:border-b-0 border-[#262230]" : ""}`}
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

export default Experience;
