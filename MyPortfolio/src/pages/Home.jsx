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
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { ArrowRight } from "lucide-react";

const socials = [
  { icon: <FaGithub />, href: "https://github.com/Sushmita-2701" },
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/sushmita-anil-maurya-a86120325/" },
  { icon: <SiLeetcode />, href: "https://leetcode.com/u/sushmita_2701/" },
  { icon: <FaEnvelope />, href: "https://mail.google.com/mail/?view=cm&fs=1&to=mauryasushmita9422@gmail.com" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0b0a10] text-[#f3efea]">
      {/* HOME / HERO */}
      <section id="home" className="min-h-screen relative overflow-hidden pt-36 pb-20">
        {/* ambient glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#ff6b5e]/10 blur-[140px] rounded-full"></div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#4fd1c5]/10 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">

            {/* LEFT */}
            <div>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-[#a8a2b0]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b5e]"></span>
                available for opportunities
              </div>

              <h1 className="mt-8 font-display text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
                Sushmita 
                <br />
                <span className="grad-text">Maurya</span>
              </h1>

              <p className="mt-5 font-mono text-sm md:text-base text-[#a8a2b0] tracking-wide">
                Software Developer — MERN&nbsp;·&nbsp;React.js&nbsp;·&nbsp;Node.js
              </p>

              <p className="mt-6 text-[#a8a2b0] text-lg max-w-xl leading-relaxed">
                I build full-stack web applications with real-time chat, booking
                platforms, learning systems with React, Node.js, Express and
                MongoDB. 200+ DSA problems solved, one internship shipped.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <button
                  onClick={() => navigate("/projects")}
                  className="bg-[#ff6b5e] text-[#0b0a10] px-7 py-3.5 flex items-center gap-2 font-mono text-sm font-semibold hover:bg-[#ff8a7f] transition-colors"
                >
                  view projects <ArrowRight size={16} />
                </button>

                <a
                  href="/Sushmita_Software_developer.pdf"
                  download
                  className="border border-[#4fd1c5]/40 px-7 py-3.5 font-mono text-sm text-[#4fd1c5] hover:border-[#4fd1c5] hover:bg-[#4fd1c5]/10 transition-colors"
                >
                  download resume
                </a>
              </div>

              <div className="flex gap-4 mt-10">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-[#262230] flex items-center justify-center text-lg text-[#a8a2b0] hover:text-[#0b0a10] hover:bg-[#4fd1c5] hover:border-[#4fd1c5] transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT — TERMINAL SIGNATURE ELEMENT */}
            <div className="relative">
              <div className="border border-[#262230] bg-[#131019] grain glow-coral">
                {/* window bar */}
                <div className="flex items-center gap-2 border-b border-[#262230] px-4 py-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b5e]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffd166]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4fd1c5]"></span>
                  <span className="ml-3 font-mono text-xs text-[#6e6878]">about.js</span>
                </div>

                <div className="p-6 font-mono text-[13px] md:text-sm leading-7 overflow-x-auto">
                  <p><span className="text-[#6e6878]">01</span>&nbsp;&nbsp;<span className="text-[#a8a2b0]">const</span> <span className="text-[#4fd1c5]">sushmita</span> = {"{"}</p>
                  <p><span className="text-[#6e6878]">02</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7fe3d9]">role</span>: <span className="text-[#ff8a7f]">"Software Developer"</span>,</p>
                  <p><span className="text-[#6e6878]">03</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7fe3d9]">stack</span>: [<span className="text-[#ff8a7f]">"React"</span>, <span className="text-[#ff8a7f]">"Node"</span>, <span className="text-[#ff8a7f]">"Express"</span>, <span className="text-[#ff8a7f]">"MongoDB"</span>],</p>
                  <p><span className="text-[#6e6878]">04</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7fe3d9]">focus</span>: [<span className="text-[#ff8a7f]">"real-time systems"</span>, <span className="text-[#ff8a7f]">"REST APIs"</span>],</p>
                  <p><span className="text-[#6e6878]">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7fe3d9]">experience</span>: <span className="text-[#ff8a7f]">"Web Dev Intern @ Marcaids"</span>,</p>
                  <p><span className="text-[#6e6878]">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7fe3d9]">dsaSolved</span>: <span className="text-[#ffd166]">200</span>+,</p>
                  <p><span className="text-[#6e6878]">07</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7fe3d9]">location</span>: <span className="text-[#ff8a7f]">"Pune, India"</span>,</p>
                  <p><span className="text-[#6e6878]">08</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7fe3d9]">openToWork</span>: <span className="text-[#ffd166]">true</span>,</p>
                  <p><span className="text-[#6e6878]">09</span>&nbsp;{"}"};<span className="cursor-blink ml-1"></span></p>
                </div>
              </div>

              <div className="hairline-grad mt-8"></div>
              <div className="grid grid-cols-3 mt-8 font-mono text-center">
                <div>
                  <p className="text-3xl font-display font-semibold grad-text">6+</p>
                  <p className="text-xs text-[#6e6878] mt-1 tracking-wide">projects</p>
                </div>
                <div className="border-x border-[#262230]">
                  <p className="text-3xl font-display font-semibold grad-text">200+</p>
                  <p className="text-xs text-[#6e6878] mt-1 tracking-wide">dsa solved</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-semibold grad-text">4</p>
                  <p className="text-xs text-[#6e6878] mt-1 tracking-wide">months internship</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="bg-[#0b0a10] text-[#f3efea]">
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
