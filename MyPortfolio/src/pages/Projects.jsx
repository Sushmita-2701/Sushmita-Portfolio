import React from "react";
import { MessageSquare, UtensilsCrossed, GraduationCap } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    index: "01",
    title: "QuickChat",
    tagline: "Real-Time Chat Application",
    icon: <MessageSquare size={22} />,
    accent: "coral",
    description:
      "A full-stack real-time chat application with secure JWT authentication and protected routes, built for instant, seamless communication.",
    features: [
      "Real-time messaging, typing indicators & online status via Socket.io",
      "Secure login and protected routes with JWT authentication",
      "Image sharing through Cloudinary integration",
      "Responsive interface built with Tailwind CSS & DaisyUI",
      "REST APIs to manage chat data and user interactions",
    ],
    tech: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/Sushmita-2701",
    year: "2026",
  },
  {
    index: "02",
    title: "Multi-Restaurant Booking Platform",
    tagline: "Full-Stack Reservation System",
    icon: <UtensilsCrossed size={22} />,
    accent: "teal",
    description:
      "A full-stack booking platform supporting customer reservations, restaurant registration, and table management across multiple restaurants.",
    features: [
      "Role-based dashboards for customers, restaurant owners & admins",
      "Secure authentication and role-based authorization",
      "Table management and reservation workflows",
      "RESTful APIs with a MongoDB database architecture",
      "Responsive UI built with React.js, TypeScript & Tailwind CSS",
    ],
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Sushmita-2701",
    year: "2026",
  },
  {
    index: "03",
    title: "Learning Management System",
    tagline: "Course Platform with RBAC",
    icon: <GraduationCap size={22} />,
    accent: "coral",
    description:
      "A full-stack LMS with Clerk authentication and role-based access control, giving students and educators purpose-built dashboards.",
    features: [
      "Role-Based Access Control for students & educators",
      "Educator dashboard for course creation and management",
      "Student enrollment and course browsing features",
      "REST APIs for seamless client–server communication",
      "Component-based, responsive UI across devices",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Clerk Auth"],
    github: "https://github.com/Sushmita-2701/lms",
    year: "2025",
  },
];

const accentText = { coral: "text-[#ff8a7f]", teal: "text-[#7fe3d9]" };
const accentBorder = { coral: "hover:border-[#ff6b5e]/60", teal: "hover:border-[#4fd1c5]/60" };
const accentBg = { coral: "from-[#ff6b5e]/10", teal: "from-[#4fd1c5]/10" };

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0b0a10] text-[#f3efea] py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff6b5e]">// 03 — projects</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mt-4">
          Featured Projects
        </h2>
        <div className="hairline-grad w-full mt-8 mb-16"></div>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.index}
              className={`border border-[#262230] transition-colors duration-300 ${accentBorder[project.accent]}`}
            >
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

                {/* LEFT — code-panel visual */}
                <div className={`border-b lg:border-b-0 lg:border-r border-[#262230] p-8 flex flex-col justify-between bg-gradient-to-br ${accentBg[project.accent]} to-[#131019] min-h-[260px]`}>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-5xl text-[#262230]">
                      {project.index}
                    </span>
                    <span className={accentText[project.accent]}>{project.icon}</span>
                  </div>

                  <div>
                    <p className="font-mono text-xs text-[#6e6878] tracking-wider">{project.year}</p>
                    <h4 className={`font-mono text-sm mt-2 ${accentText[project.accent]}`}>{project.tagline}</h4>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="p-8">
                  <h3 className="font-display text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-[#a8a2b0] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#a8a2b0] text-sm">
                        <span className={`font-mono mt-0.5 ${accentText[project.accent]}`}>›</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="font-mono tag-mono px-3 py-1.5 border border-[#262230] text-[#a8a2b0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-3 border border-[#262230] font-mono text-sm transition-colors ${accentBorder[project.accent]}`}
                  >
                    <FaGithub size={16} />
                    view code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#262230] mt-16">
          {[
            { value: "3+", label: "Major Projects" },
            { value: "12+", label: "Technologies Used" },
            { value: "100%", label: "Responsive Design" },
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

export default Projects;
