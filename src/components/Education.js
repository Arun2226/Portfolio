"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

export default function Education() {
  const certifications = [
    {
      name: "Java Full Stack Development",
      issuer: "Professional Certification",
      icon: "☕",
    },
    {
      name: "OASIS INFOBYTE Web Development Internship",
      issuer: "OASIS INFOBYTE",
      icon: "🌐",
    },
  ];

  return (
    <section id="education" className="min-h-screen py-20 scroll-mt-20 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Education & Certifications
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 hover:border-cyan-400/40 transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-emerald-500/20 rounded-xl">
                <FaGraduationCap className="text-4xl text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-400">Bachelor of Technology</h3>
                <p className="text-cyan-400">Electronics & Telecommunication</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Institution</span>
                <span className="text-white font-semibold">Parala Maharaja Engineering College</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Graduation Year</span>
                <span className="text-white font-semibold">2023</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">CGPA</span>
                <span className="text-emerald-400 font-bold text-2xl">8.5</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-lg border border-emerald-500/30">
              <p className="text-slate-300 text-sm leading-relaxed">
                Completed comprehensive coursework in software engineering, algorithms, data structures, and system design. 
                Gained hands-on experience through various academic and practical projects.
              </p>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-cyan-500/20 rounded-xl">
                <FaCertificate className="text-4xl text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-400">Professional Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-4 bg-slate-700/50 rounded-lg border border-emerald-500/20 hover:border-cyan-400/40 transition-all hover:scale-105"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{cert.icon}</span>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
                      <p className="text-slate-400 text-sm">{cert.issuer}</p>
                    </div>
                    <span className="text-emerald-400 text-xl">✓</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/30">
              <p className="text-slate-300 text-sm leading-relaxed">
                Continuously upskilling through industry-recognized certifications and professional development programs 
                to stay current with the latest technologies and best practices.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
