"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      title: "Junior Back-End Developer",
      company: "AAS International Pvt. Ltd.",
      location: "Bhubaneswar, Odisha",
      period: "Dec 2024 - Present",
      type: "Full-time",
      achievements: [
        "Developed and maintained the back-end of an in-house HRMS using Node.js and MongoDB",
        "Built RESTful APIs for Employee Onboarding, Attendance, and Leave Management",
        "Upgraded QR code attendance system to face recognition, saving substantial time for employees",
        "Collaborated with front-end teams to integrate APIs and deliver seamless user experiences",
        "Participated in code reviews, debugging, and optimization tasks to maintain clean, efficient codebases",
      ],
      current: true,
    },
    {
      title: "Java Developer (Intern)",
      company: "Envision Enterprise Solutions",
      location: "Hyderabad, Telangana",
      period: "May 2024 - June 2024",
      type: "Internship",
      achievements: [
        "Developed and maintained Java-based applications as part of the software development team",
        "Assisted in designing and implementing new features in existing applications",
        "Conducted code reviews and participated in peer reviews to ensure code quality",
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 scroll-mt-20 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Work Experience
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-400 via-cyan-400 to-blue-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className={`relative flex items-center ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full border-4 border-slate-900 z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/20 hover:border-cyan-400/40 transition-all hover:scale-105">
                      {exp.current && (
                        <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full mb-3">
                          Current Position
                        </span>
                      )}
                      
                      <h3 className="text-2xl font-bold text-emerald-400 mb-2">{exp.title}</h3>
                      <p className="text-xl text-cyan-400 font-semibold mb-3">{exp.company}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-slate-400 text-sm">
                        <div className="flex items-center gap-2">
                          <FaCalendar className="text-emerald-400" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-cyan-400" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <FaBriefcase className="text-blue-400" />
                          {exp.type}
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, j) => (
                          <li key={j} className="flex gap-2 text-slate-300">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
