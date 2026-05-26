import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Learning Management System (LMS)",
    description:
      "Built a full-stack Learning Management System where users can browse, enroll, and access online courses with secure authentication and role-based access.",
    features: [
      "Course browsing and enrollment system",
      "Clerk Authentication with role-based access",
      "RESTful APIs using Express.js",
      "MongoDB integration for data storage",
      "Educator dashboard for course management",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Clerk", "REST API"],
    github: "https://github.com/Sushmita-2701/lms",
    live: "#",
  },
  {
    title: "Airbnb Full Stack Web Application",
    description:
      "Developed a full-stack Airbnb-inspired platform with secure authentication, property listings, search and filtering features.",
    features: [
      "Secure user authentication",
      "CRUD for property listings",
      "Advanced search & filtering",
      "Responsive UI using Bootstrap & Material UI",
      "MongoDB Atlas cloud database",
    ],
    tech: ["Node.js", "Express.js", "MongoDB Atlas", "Bootstrap", "Material UI"],
    github: "https://github.com/Sushmita-2701/Airbnb-full-stack-project",
    live: "#",
  },
  {
    title: "Full Stack Trading Website",
    description:
      "A full-stack trading platform with user dashboard, data management, and secure backend APIs for financial operations.",
    features: [
      "User dashboard system",
      "Real-time data handling",
      "Secure backend APIs",
      "Responsive UI design",
      "Database integration for transactions",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    github: "https://github.com/Sushmita-2701/FullStack--trading-website",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#020817] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mt-8">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-slate-400 mt-6 text-lg">
            Full-stack applications built using modern technologies with a
            focus on scalability, performance, and user experience.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#07111F]/80 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-8">

                {/* LEFT */}
                <div className="h-80 lg:h-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center px-6">
                    <h3 className="text-3xl font-bold">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mt-3">
                      Project Preview
                    </p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* FEATURES */}
                  <ul className="space-y-3 mb-6">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <span className="text-cyan-400 mt-1">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 rounded-xl border border-slate-700 hover:border-cyan-400 transition"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 transition"
                    >
                      Live Demo
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="bg-[#07111F]/80 border border-slate-800 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">3+</h3>
            <p className="text-slate-400 mt-2">Major Projects</p>
          </div>

          <div className="bg-[#07111F]/80 border border-slate-800 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
            <p className="text-slate-400 mt-2">Technologies Used</p>
          </div>

          <div className="bg-[#07111F]/80 border border-slate-800 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
            <p className="text-slate-400 mt-2">Responsive Design</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;