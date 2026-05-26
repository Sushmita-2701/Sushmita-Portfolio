import React from "react";
import { Download } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
  <nav className="w-full backdrop-blur-xl bg-[#0F172A]/80 border-b border-white/10">
    <div className="flex items-center justify-between px-8 md:px-16 lg:px-24 py-4">
      
      <h1 className="text-3xl font-bold text-white">
        Sushmita
      </h1>

      <ul className="hidden md:flex items-center gap-12 text-white text-lg font-medium">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

     <a
  href="/Sushmita_Resume.pdf"
  download="Sushmita_Maurya_Resume.pdf"
  className="bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-3 rounded-xl flex items-center gap-2 text-white font-semibold"
>
  Resume
  <Download size={18} />
</a>

    </div>
  </nav>
</header>
  );
};

export default Navbar;