// components/Header.js
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const sections = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Certifications",
    "Blog",
    "Contact"
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur z-50 border-b border-gray-700"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.h1 className="text-2xl font-bold text-blue-500">Bondada Arun</motion.h1>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-300">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition scale-100 hover:scale-110"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4 text-gray-300">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition scale-100 hover:scale-110"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition scale-100 hover:scale-110"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-300">
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-gray-900 text-gray-300"
        >
          <div className="flex flex-col p-4 space-y-4">
            {sections.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
