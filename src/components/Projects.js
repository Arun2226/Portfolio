"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Restaurant Billing System",
      desc: "Developed a comprehensive restaurant billing system using Java and MySQL, featuring user registration, login, order entry, and automatic bill generation with backend logic implemented via JDBC for efficient data management.",
      tech: ["Java", "JDBC", "MySQL", "Swing/AWT"],
      github: "#",
      category: "Full Stack",
      highlights: [
        "User authentication & registration",
        "Order management system",
        "Automatic bill calculation",
        "Database integration with JDBC",
      ],
    },
    {
      title: "Apple Website Clone",
      desc: "Created a pixel-perfect clone of Apple's website using modern HTML, CSS, and JavaScript, featuring responsive design and smooth animations.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "#",
      category: "Frontend",
    },
    {
      title: "Samsung Website Demo",
      desc: "Built a professional Samsung website demo showcasing product displays, interactive elements, and modern UI/UX design principles.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "#",
      category: "Frontend",
    },
    {
      title: "Netflix Landing Page",
      desc: "Designed and developed a Netflix-inspired landing page with responsive layout, hero section, and dynamic content sections.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "#",
      category: "Frontend",
    },
    {
      title: "Portfolio Website",
      desc: "Created a personal portfolio website showcasing projects, skills, and professional experience with modern design and animations.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "#",
      category: "Frontend",
    },
    {
      title: "Temperature Converter",
      desc: "Built an interactive temperature converter application supporting Celsius, Fahrenheit, and Kelvin conversions with real-time calculations.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "#",
      category: "Frontend",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/20 hover:border-cyan-400/40 transition-all hover:scale-105 group flex flex-col"
            >
              <div className="mb-3">
                <span className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">
                  {proj.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-emerald-400 mb-3 group-hover:text-cyan-400 transition-colors">
                {proj.title}
              </h3>
              
              <p className="text-slate-300 mb-4 leading-relaxed text-sm flex-grow">
                {proj.desc}
              </p>

              {proj.highlights && (
                <ul className="mb-4 space-y-1">
                  {proj.highlights.map((highlight, j) => (
                    <li key={j} className="text-slate-400 text-xs flex gap-2">
                      <span className="text-emerald-400">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t, j) => (
                  <span
                    key={j}
                    className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto pt-4 border-t border-slate-700">
                {/* {proj.github && (
                  <a
                    href={proj.github}
                    className="flex items-center gap-2 text-cyan-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    <FaGithub /> Code
                  </a>
                )} */}
                {/* {proj.demo && (
                  <a
                    href={proj.demo}
                    className="flex items-center gap-2 text-cyan-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )} */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
