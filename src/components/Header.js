'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    // { name: 'Home', href: '#hero', icon: <FaHome /> },
    { name: 'About', href: '#about', icon: <FaUser /> },
    { name: 'Skills', href: '#skills', icon: <FaCode /> },
   { name: 'Work Experience', href: '#experience', icon: <FaCode /> },
    { name: 'Projects', href: '#projects', icon: <FaProjectDiagram /> },
    { name: 'Education', href: '#education', icon: <FaGraduationCap /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope /> },
  ];

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scroll
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-emerald-500/30' 
        : 'bg-slate-950/80 backdrop-blur-md border-b border-emerald-500/20'
    }`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
        >
          <FaCode className="text-emerald-400" />
          Arun's Portfolio
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-all duration-300 font-medium relative group cursor-pointer py-2 px-3 rounded-lg hover:bg-emerald-500/10"
            >
              {link.icon}
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-300 origin-left"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-emerald-400 hover:text-cyan-400 transition-all duration-300 p-2 rounded-lg hover:bg-emerald-500/20"
          onClick={() => {
            setIsOpen(!isOpen);
            document.body.style.overflow = isOpen ? 'auto' : 'hidden';
          }}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-lg border-t border-emerald-500/30 px-4 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <div className="grid grid-cols-2 gap-4 pt-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/20 p-4 rounded-xl transition-all duration-300 group"
              >
                <div className="text-emerald-400 p-2 bg-emerald-500/10 rounded-lg group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <span className="font-medium text-lg">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
