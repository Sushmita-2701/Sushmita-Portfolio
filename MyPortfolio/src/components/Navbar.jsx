import React, { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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
      <nav className="w-full backdrop-blur-xl bg-[#0a0a0a]/85 border-b border-[#2a2a2a]">
        <div className="flex items-center justify-between px-6 md:px-14 lg:px-20 py-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-mono text-sm text-[#6b6b68] group-hover:text-[#a3a3a0] transition-colors">
              ~/
            </span>

            <span className="font-display text-2xl font-semibold tracking-tight text-[#f2f2ee]">
              sushmita
            </span>

            <span className="w-2 h-4 bg-[#f2f2ee] cursor-blink ml-0.5"></span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 font-mono text-sm text-[#a3a3a0]">
            {links.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className="relative hover:text-[#f2f2ee] transition-colors"
                >
                  <span className="text-[#5c5c5c]">./</span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Resume */}
          <a
            href="/Sushmita_Resume.pdf"
            download="Sushmita_Maurya_Resume.pdf"
            className="hidden md:flex items-center gap-2 border border-[#f2f2ee] px-5 py-2.5 font-mono text-sm text-[#f2f2ee] hover:bg-[#f2f2ee] hover:text-[#0a0a0a] transition-colors"
          >
            resume.pdf
            <Download size={15} />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#f2f2ee]"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-[#2a2a2a] px-6 py-6 flex flex-col gap-5 font-mono text-sm text-[#a3a3a0]">
            {links.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
                className="hover:text-[#f2f2ee] transition-colors"
              >
                <span className="text-[#5c5c5c]">./</span>
                {l.label}
              </Link>
            ))}

            <a
              href="/Sushmita_Resume.pdf"
              download="Sushmita_Maurya_Resume.pdf"
              className="flex items-center gap-2 border border-[#f2f2ee] px-5 py-3 text-[#f2f2ee] w-fit"
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