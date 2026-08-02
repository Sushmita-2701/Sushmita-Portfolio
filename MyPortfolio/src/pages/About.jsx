import React from "react";
import {
  GraduationCap,
  MapPin,
  Code2,
  Briefcase,
  Trophy,
  Target,
  Award,
} from "lucide-react";
import profileImg from "../assets/Profile.png";

const education = [
  {
    title: "Dr. Shakuntala Misra National Rehabilitation University",
    degree: "B.Tech in Computer Science Engineering",
    location: "Lucknow, India",
    year: "Nov 2022 — Jul 2026",
    score: "CGPA 7.49 / 10",
  },
  {
    title: "Nirmal Bethany English High School and College",
    degree: "Higher Secondary Education",
    location: "Pune, India",
    year: "Jun 2021 — May 2022",
    score: "64.67%",
  },
  {
    title: "Maharshi Vidya Mandir English Medium School",
    degree: "Secondary Education",
    location: "Pune, India",
    year: "Jun 2019 — May 2020",
    score: "85%",
  },
];

const certifications = [
  {
    name: "Full Stack Web Development",
    issuer: "Udemy",
    accent: "coral",
  },
  {
    name: "Artificial Intelligence",
    issuer: "Infosys Springboard",
    accent: "teal",
  },
];

const stats = [
  {
    icon: <Briefcase size={28} />,
    value: "4",
    label: "Months Internship",
    accent: "coral",
  },
  {
    icon: <Code2 size={28} />,
    value: "6",
    label: "Full-Stack Projects",
    accent: "teal",
  },
  {
    icon: <Trophy size={28} />,
    value: "200+",
    label: "DSA Problems",
    accent: "coral",
  },
  {
    icon: <Target size={28} />,
    value: "2",
    label: "Certifications",
    accent: "teal",
  },
];

const accentText = {
  coral: "text-[#ff8a7f]",
  teal: "text-[#7fe3d9]",
};

const accentBorder = {
  coral: "hover:border-[#ff6b5e]",
  teal: "hover:border-[#4fd1c5]",
};

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0b0a10] text-[#f3efea] py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff6b5e]">
            // 01 — about
          </p>

      

          <div className="hairline-grad w-full mt-8"></div>

          {/* Image + About */}
          <div className="mt-14 flex flex-col lg:flex-row items-center gap-14">

            {/* Left Image */}
            <div className="flex justify-center w-full lg:w-auto">
              <img
                src={profileImg}
                alt="Profile"
                className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#262230] shadow-2xl transition duration-500 hover:scale-105 hover:border-[#4fd1c5]"
              />
            </div>

            {/* Right Text */}
            <div className="flex-1">
              <p className="text-[#a8a2b0] text-lg leading-8">
                Software Developer with hands-on experience across React.js,
                Node.js, Express.js and MongoDB, gained through an internship
                and multiple end-to-end MERN projects.
              </p>

              <p className="mt-6 text-[#a8a2b0] text-lg leading-8">
                I've built real-time chat applications, multi-tenant booking
                systems, and a Learning Management System with secure
                authentication, REST APIs, responsive UI, and scalable backend
                architecture.
              </p>

              <p className="mt-6 text-[#a8a2b0] text-lg leading-8">
                I have a strong foundation in Data Structures & Algorithms,
                DBMS, Operating Systems, and OOP concepts. I have solved
                <span className="text-[#ff8a7f] font-semibold">
                  {" "}
                  200+ LeetCode problems
                </span>{" "}
                and enjoy building clean, user-friendly web applications while
                continuously learning modern technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-[#262230]">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-start gap-4 p-7 transition-colors ${accentBorder[s.accent]}
              ${i !== stats.length - 1 ? "border-r border-[#262230]" : ""}
              ${i < 2 ? "border-b md:border-b-0 border-[#262230]" : ""}`}
            >
              <span className={accentText[s.accent]}>{s.icon}</span>

              <div>
                <h3 className="font-display text-3xl font-semibold">
                  {s.value}
                </h3>

                <p className="text-[#6e6878] text-sm mt-1 font-mono">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-24">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#4fd1c5]">
            // education
          </p>

          <h2 className="font-display text-2xl font-semibold mt-4 mb-10">
            Education
          </h2>

          <div className="space-y-4">
            {education.map((item, index) => (
              <div
                key={index}
                className="border border-[#262230] p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 hover:border-[#4fd1c5]/50 transition-colors"
              >
                <div className="flex gap-5">
                  <div className="min-w-[56px] h-[56px] bg-gradient-to-br from-[#ff6b5e]/15 to-[#4fd1c5]/15 border border-[#262230] flex items-center justify-center text-[#ff8a7f] rounded-lg">
                    <GraduationCap size={26} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>

                    <p className="text-[#a8a2b0] mt-1">{item.degree}</p>

                    <div className="flex items-center gap-2 mt-2 text-[#6e6878] text-sm">
                      <MapPin size={14} />
                      {item.location}
                    </div>
                  </div>
                </div>

                <div className="lg:border-l border-[#262230] lg:pl-8 font-mono">
                  <h4 className="text-sm text-[#7fe3d9]">{item.year}</h4>

                  <p className="text-[#f3efea] mt-2">{item.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff6b5e]">
            // certifications
          </p>

          <h2 className="font-display text-2xl font-semibold mt-4 mb-10">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((c, i) => (
              <div
                key={i}
                className={`border border-[#262230] p-6 flex items-center gap-5 transition-colors ${accentBorder[c.accent]}`}
              >
                <div
                  className={`min-w-[52px] h-[52px] border border-[#262230] flex items-center justify-center rounded-lg ${accentText[c.accent]}`}
                >
                  <Award size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">{c.name}</h3>

                  <p className="text-[#6e6878] text-sm mt-1 font-mono">
                    {c.issuer}
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