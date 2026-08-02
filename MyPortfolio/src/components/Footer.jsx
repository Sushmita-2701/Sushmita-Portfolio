import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#0b0a10] text-[#a8a2b0] border-t border-[#262230]">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="font-display text-2xl font-semibold text-[#f3efea]">
              Sushmita Anil Maurya
            </h2>
            <p className="text-[#a8a2b0] mt-4 leading-relaxed">
              Software Developer skilled in React.js, Node.js, Express.js and
              MongoDB. Building scalable, real-time web applications.
            </p>
            <p className="mt-4 text-[#6e6878] text-sm font-mono">Pune, India</p>
          </div>

          <div>
            <h3 className="font-mono text-sm uppercase tracking-wide text-[#ff8a7f] mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>+91 7972945300</li>
              <li>
                <a
                  href="mailto:mauryasushmita9422@gmail.com"
                  className="hover:text-[#4fd1c5] transition-colors"
                >
                  mauryasushmita9422@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sushmita-anil-maurya-a86120325/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4fd1c5] transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sushmita-2701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4fd1c5] transition-colors"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/u/sushmita_2701/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4fd1c5] transition-colors"
                >
                  LeetCode ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-sm uppercase tracking-wide text-[#7fe3d9] mb-5">
              Technical Skills
            </h3>
            <p className="text-sm leading-relaxed">
              JavaScript, C, C++, React.js, Tailwind CSS, Bootstrap, Node.js,
              Express.js, REST APIs, Socket.io, MongoDB, MySQL, Docker, Git,
              GitHub
            </p>
            <p className="mt-4 text-[#6e6878] text-sm font-mono">
              Focus: Full Stack Development &amp; Problem Solving
            </p>
          </div>

        </div>

        <div className="flex gap-4 mt-12">
          <a
            href="https://github.com/Sushmita-2701"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border border-[#262230] hover:bg-[#ff6b5e] hover:text-[#0b0a10] hover:border-[#ff6b5e] transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sushmita-anil-maurya-a86120325/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border border-[#262230] hover:bg-[#4fd1c5] hover:text-[#0b0a10] hover:border-[#4fd1c5] transition-colors"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://leetcode.com/u/sushmita_2701/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border border-[#262230] hover:bg-[#ff6b5e] hover:text-[#0b0a10] hover:border-[#ff6b5e] transition-colors"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mauryasushmita9422@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border border-[#262230] hover:bg-[#4fd1c5] hover:text-[#0b0a10] hover:border-[#4fd1c5] transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="mt-10 text-[#6e6878] text-sm border-t border-[#262230] pt-6 font-mono">
          B.Tech CSE — Dr. Shakuntala Misra National Rehabilitation University,
          Lucknow — CGPA 7.49/10
        </div>

        <div className="mt-6 text-center text-[#6e6878] text-sm font-mono">
          © {new Date().getFullYear()} Sushmita Maurya. Built with React &amp; Tailwind CSS.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
