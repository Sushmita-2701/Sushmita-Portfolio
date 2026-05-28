import React from "react";
import { GraduationCap, MapPin } from "lucide-react";
import {
  Code2,
  Briefcase,
  Trophy,
  Heart,
} from "lucide-react";
const About = () => {
  const education = [
    {
      title: "Dr. Shakuntala Misra National Rehabilitation University",
      degree: "Bachelor of Technology in Computer Science Engineering",
      location: "Lucknow, India",
      year: "Oct 2022 - Jul 2026",
      score: "CGPA 7.30 till 7th semester",
    },
    {
      title: "Nirmal Bethany English High School and College",
      degree: "Higher Secondary Education",
       location: "Pune, India",
      year: "Jun 2021 - May 2022",
      score: "Percentage - 64.67%",
    },
    {
      title: "Maharshi Vidya Mandir English Medium School",
      degree: "Secondary Education",
        location: "Pune, India",
      year: "Jun 2019 - May 2020",
      score: "Percentage - 85%",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-[#020817] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="uppercase tracking-[6px] text-cyan-400 text-xl">
            About Me
          </h3>

          

          

          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="w-16 h-[2px] bg-cyan-400"></div>
            <div className="w-3 h-3 bg-purple-500 rotate-45"></div>
            <div className="w-16 h-[2px] bg-purple-500"></div>
          </div>

          <p className="max-w-4xl mx-auto mt-10 text-slate-300 text-lg leading-10">
            Web Developer skilled in HTML, CSS, JavaScript, React.js,
            Tailwind CSS, Node.js, MongoDB, SQL, and MySQL, specializing in
            creating scalable, responsive applications and secure backend
            architectures. Strong in C++ and problem solving; currently
            pursuing a B.Tech in Computer Science to deepen my technical
            capabilities.
          </p>
        </div>
        <div className="mt-24 mb-20 bg-[#071223]/80 border border-white/10 rounded-[35px] p-6 grid grid-cols-2 md:grid-cols-4 gap-8">

            <div className="flex gap-4 items-center">
              <Code2 size={45} className="text-violet-400" />
              <div>
                <h2 className="text-4xl font-bold">3</h2>
                <p className="text-slate-400">Months Experience</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <Briefcase size={45} className="text-cyan-400" />
              <div>
                <h2 className="text-4xl font-bold">6+</h2>
                <p className="text-slate-400">Projects</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <Trophy size={45} className="text-green-400" />
              <div>
                <h2 className="text-4xl font-bold">5+</h2>
                <p className="text-slate-400">Certifications</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <Heart size={45} className="text-pink-400" />
              <div>
                <h2 className="text-4xl font-bold">100%</h2>
                <p className="text-slate-400">Dedication</p>
              </div>
            </div>
            </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold tracking-[5px] uppercase mb-4">
            Education
          </h2>

          <div className="w-28 h-[3px] bg-cyan-400 rounded-full mb-10"></div>

          <div className="space-y-8 ">
            {education.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-800 bg-[#07111F]/80 backdrop-blur-xl p-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex gap-6">
                  <div className="min-w-[90px] h-[90px] rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center">
                    <GraduationCap size={40} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>

                    <p className="text-cyan-400 text-xl mt-3">
                      {item.degree}
                    </p>

                    {item.location && (
                      <div className="flex items-center gap-2 mt-4 text-slate-300">
                        <MapPin size={18} />
                        {item.location}
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:border-l border-slate-700 lg:pl-10">
                  <h4 className="text-purple-400 text-xl font-semibold">
                    {item.year}
                  </h4>

                  <p className="text-slate-300 text-l mt-4">
                    {item.score}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default About;