import React, { useState } from "react";
import { Download, Menu, X } from "lucide-react";

const links = [
  { label: "home", path: "/" },
  { label: "about", path: "/about" },
  { label: "skills", path: "/skills" },
  { label: "projects", path: "/projects" },
  { label: "experience", path: "/experience" },
  { label: "contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="w-full backdrop-blur-xl bg-[#0b0a10]/85 border-b border-[#262230]">
        <div className="flex items-center justify-between px-6 md:px-14 lg:px-20 py-4">

          <a href="/" className="flex items-center gap-2 group">
            <span className="font-mono text-sm text-[#6e6878] group-hover:text-[#ff6b5e] transition-colors">
              ~/
            </span>
            <span className="font-display text-2xl font-semibold tracking-tight text-[#f3efea]">
              sushmita
            </span>
            <span className="w-2 h-4 bg-[#ff6b5e] cursor-blink ml-0.5"></span>
          </a>

          <ul className="hidden md:flex items-center gap-10 font-mono text-sm text-[#a8a2b0]">
            {links.map((l) => (
              <li key={l.path}>
                <a
                  href={l.path}
                  className="relative hover:text-[#4fd1c5] transition-colors"
                >
                  <span className="text-[#3d3748]">./</span>{l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/Sushmita_Resume.pdf"
            download="Sushmita_Maurya_Resume.pdf"
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#ff6b5e] to-[#4fd1c5] px-5 py-2.5 font-mono text-sm text-[#0b0a10] font-semibold hover:opacity-90 transition-opacity"
          >
            Sushmita_Software_developer.pdf
            <Download size={15} />
          </a>

          <button
            className="md:hidden text-[#f3efea]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-[#262230] px-6 py-6 flex flex-col gap-5 font-mono text-sm text-[#a8a2b0]">
            {links.map((l) => (
              <a
                key={l.path}
                href={l.path}
                onClick={() => setOpen(false)}
                className="hover:text-[#4fd1c5] transition-colors"
              >
                <span className="text-[#3d3748]">./</span>{l.label}
              </a>
            ))}
            <a
              href="/Sushmita_Resume.pdf"
              download="Sushmita_Maurya_Resume.pdf"
              className="flex items-center gap-2 bg-gradient-to-r from-[#ff6b5e] to-[#4fd1c5] px-5 py-3 text-[#0b0a10] font-semibold w-fit"
            >
              resume.pdf
              <Download size={15} />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
