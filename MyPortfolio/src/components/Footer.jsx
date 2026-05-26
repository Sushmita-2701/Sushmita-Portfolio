import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#020817] text-slate-300 border-t border-white/10 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* NAME + SUMMARY */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Sushmita Anil Maurya
            </h2>

            <p className="text-slate-400 mt-3 leading-relaxed">
              Software Developer skilled in React.js, Node.js, MongoDB and modern web
              technologies. Passionate about building scalable and responsive applications.
            </p>

            <p className="mt-3 text-slate-500 text-sm">
              Pune, India
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>

            <ul className="space-y-2 text-slate-400 text-sm">
              <li>📞 +91 7972945300</li>

              <li>
                📧
                <a
                  href="mailto:mauryasushmita9422@gmail.com"
                  className="text-cyan-400 ml-1 hover:underline"
                >
                  mauryasushmita9422@gmail.com
                </a>
              </li>

              <li>
                🔗 LinkedIn:
                <a
                  href="https://www.linkedin.com/in/sushmita-anil-maurya-a86120325/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 ml-1 hover:underline"
                >
                  Profile
                </a>
              </li>

              <li>
                💻 GitHub:
                <a
                  href="https://github.com/Sushmita-2701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 ml-1 hover:underline"
                >
                  Profile
                </a>
              </li>

              <li>
                🧠 LeetCode:
                <a
                  href="https://leetcode.com/u/sushmita_2701/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 ml-1 hover:underline"
                >
                  Profile
                </a>
              </li>
            </ul>
          </div>

          {/* SKILLS SNAPSHOT */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Technical Skills
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed">
              C, C++, JavaScript, React.js, Tailwind CSS, Bootstrap,
              Node.js, Express.js, REST API, MongoDB, MySQL, Docker, Git, GitHub
            </p>

            <p className="mt-4 text-slate-500 text-sm">
              Focus: Full Stack Development & Problem Solving
            </p>
          </div>

        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-5 mt-10">

          <a
            href="https://github.com/Sushmita-2701"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sushmita-anil-maurya-a86120325/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mauryasushmita9422@gmail.com"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* EDUCATION MINI LINE */}
        <div className="mt-10 text-slate-500 text-sm border-t border-white/10 pt-6">
          <p>
            B.Tech CSE | Dr. Shakuntala Misra National Rehabilitation University,
            Lucknow | CGPA: 7.30 (till 7th semester)
          </p>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-6 text-center text-slate-600 text-sm">
          © {new Date().getFullYear()} Sushmita Maurya. Built with React & Tailwind CSS.
        </div>

      </div>
    </footer>
  );
};

export default Footer;