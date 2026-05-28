import React from "react";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "../components/Footer";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";



import profile from "../assets/Profile.png";

const Home = () => {
     const navigate = useNavigate();
  return (
    <div className="bg-[#020817] text-white">

      {/* HOME SECTION */}
      <section
        id="home"
        className="min-h-screen relative overflow-hidden pt-40"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0a1d40,transparent_70%)]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>
              <div className="flex items-center gap-3 text-cyan-400 font-semibold uppercase tracking-wider">
                Web Developer
                <span className="w-3 h-3 bg-violet-500 rounded-full"></span>
              </div>

              <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-violet-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Sushmita Anil Maurya
                </span>
              </h1>

              {/* FIXED TEXT VISIBILITY */}
              <p className="mt-4 text-slate-300 text-lg max-w-xl leading-relaxed">
                I build modern, scalable and responsive web applications
                using React.js, Node.js, MongoDB and modern technologies.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                 <button
      onClick={() => navigate("/projects")}
      className="bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 rounded-2xl flex items-center gap-3 text-lg font-semibold"
    >
      View Projects <FaArrowRight />
    </button>

               <a
  href="/Sushmita_Resume.pdf"
  download
  className="border border-white/20 px-8 py-4 rounded-2xl text-lg text-slate-200 hover:border-cyan-400 transition"
>
  Download Resume
</a>
              </div>

             <div className="flex gap-5 mt-10">

  {/* GitHub */}
  <a
    href="https://github.com/Sushmita-2701"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-xl hover:border-cyan-400 transition"
  >
    <FaGithub />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/sushmita-anil-maurya-a86120325/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-xl hover:border-cyan-400 transition"
  >
    <FaLinkedinIn />
  </a>

  {/* LeetCode */}
  <a
    href="https://leetcode.com/u/sushmita_2701/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-xl hover:border-cyan-400 transition"
  >
    🧠
  </a>

  {/* Email */}
 <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=mauryasushmita9422@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-xl hover:border-cyan-400 transition"
>
  <FaEnvelope />
</a>

</div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">
              <div className="absolute w-[500px] h-[500px] bg-violet-500/20 blur-[120px] rounded-full"></div>

              <div className="relative w-[300px] md:w-[380px] lg:w-[450px] h-[450px] rounded-[50px] bg-gradient-to-br from-[#1b2149] to-[#111827] border border-cyan-500/30 overflow-hidden shadow-[0_0_80px_rgba(13,92,246,0.4)]">
  <img
    src={profile}
    alt=""
    className="w-full h-full object-cover"
  />
</div>
            </div>

          </div>

          {/* STATS */}
          

          
        </div>
      </section>

      {/* IMPORTANT FIX: separate sections cleanly */}
      <div className="bg-[#020817] text-white">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
 <Footer />
    </div>
  );
};

export default Home;