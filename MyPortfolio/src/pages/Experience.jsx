import React from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#020817] text-white py-1 px-1"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
         

          <h2 className="text-3xl md:text-4xl font-bold mt-8">
            Work{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-slate-400 mt-6 text-lg">
            My professional journey as a software developer intern,
            building modern web applications and collaborating in agile teams.
          </p>
        </div>

        {/* Experience Card */}
        <div className="bg-[#07111F]/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-10 hover:border-cyan-400/40 transition-all duration-300">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Icon */}
            <div className="flex items-start">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                <Briefcase size={30} />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold">
                
                
                Web Developer Intern
              </h3>

              <p className="text-cyan-400 text-lg mt-2">
                Marcaids • Gurugram, Haryana
              </p>

              <p className="text-slate-400 mt-2">
                October 2025 – January 2026
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-3">
                  <span className="text-cyan-400">▹</span>
                  <p className="text-slate-300">
                    Built responsive and interactive user interfaces using
                    HTML, CSS, JavaScript, and React.js while maintaining
                    clean and scalable code.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-cyan-400">▹</span>
                  <p className="text-slate-300">
                    Improved UI/UX using Tailwind CSS, resulting in better
                    responsiveness, faster loading times, and enhanced user
                    experience across devices.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-cyan-400">▹</span>
                  <p className="text-slate-300">
                    Collaborated with the development team using Git and
                    GitHub while following Agile methodologies for feature
                    development, code reviews, and project delivery.
                  </p>
                </div>
              </div>

              {/* Skills Used */}
              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "React.js",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "Git",
                  "GitHub",
                  "Agile",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full text-sm bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-[#07111F]/80 border border-slate-800 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">1</h3>
            <p className="text-slate-400 mt-2">Internship</p>
          </div>

          <div className="bg-[#07111F]/80 border border-slate-800 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">4+</h3>
            <p className="text-slate-400 mt-2">Months Experience</p>
          </div>

          <div className="bg-[#07111F]/80 border border-slate-800 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">8+</h3>
            <p className="text-slate-400 mt-2">Technologies Used</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;