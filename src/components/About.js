"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section id="about" className="min-h-screen py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Bio */}
            <motion.div {...fadeInUp} className="lg:col-span-2 space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 hover:border-cyan-400/40 transition-all">
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">Professional Objective</h3>
                <p className="text-slate-300 leading-relaxed text-lg mb-4">
                  To obtain a challenging software engineering position in a prestigious organization where I can utilize my 
                  <span className="text-cyan-400 font-semibold"> technical skills, creativity, and passion for problem-solving</span> to 
                  develop innovative software solutions.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg">
                  I am committed to <span className="text-emerald-400 font-semibold">continuous learning and growth</span> in the field 
                  of software engineering, currently working as a Junior Back-End Developer at AAS International Pvt. Ltd.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Current Role Highlights</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-emerald-400 text-2xl">🚀</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">HRMS Development</h4>
                      <p className="text-slate-300">Developed and maintained back-end of in-house HRMS using Node.js and MongoDB</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-cyan-400 text-2xl">⚡</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">RESTful API Design</h4>
                      <p className="text-slate-300">Built APIs for Employee Onboarding, Attendance, and Leave Management</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 text-2xl">🤖</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Innovation</h4>
                      <p className="text-slate-300">Upgraded QR code attendance to face recognition system, saving substantial employee time</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-emerald-400 text-2xl">👥</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Team Collaboration</h4>
                      <p className="text-slate-300">Collaborated with front-end teams for seamless API integration and user experiences</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              {/* Contact Card */}
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/20 hover:border-cyan-400/40 transition-all">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Contact Info</h3>
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-cyan-400 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white">Location</p>
                      <p className="text-sm">Berhampur, Odisha</p>
                      <p className="text-sm">India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <FaEnvelope className="text-emerald-400 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <a href="mailto:arunmadhu.b@gmail.com" className="text-sm text-cyan-400 hover:text-emerald-400 transition-colors break-all">
                        arunmadhu.b@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <FaPhone className="text-blue-400 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white">Phone</p>
                      <a href="tel:+919938956999" className="text-sm text-cyan-400 hover:text-emerald-400 transition-colors">
                        +91 9938956999
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-400 pl-4">
                    <p className="text-3xl font-bold text-emerald-400">1+</p>
                    <p className="text-slate-400 text-sm">Years Experience</p>
                  </div>
                  <div className="border-l-4 border-cyan-400 pl-4">
                    <p className="text-3xl font-bold text-cyan-400">8.5</p>
                    <p className="text-slate-400 text-sm">CGPA (B.Tech)</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="text-3xl font-bold text-blue-400">10+</p>
                    <p className="text-slate-400 text-sm">Technologies</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/20">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Arun2226"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-700/50 hover:bg-emerald-500/20 border border-slate-600 hover:border-emerald-400 p-3 rounded-lg transition-all hover:scale-105 flex items-center justify-center"
                  >
                    <FaGithub className="text-2xl text-emerald-400" />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-700/50 hover:bg-cyan-500/20 border border-slate-600 hover:border-cyan-400 p-3 rounded-lg transition-all hover:scale-105 flex items-center justify-center"
                  >
                    <FaLinkedin className="text-2xl text-cyan-400" />
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm p-4 rounded-xl border border-emerald-400/30 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></span>
                  <p className="text-emerald-400 font-bold">Currently Employed</p>
                </div>
                <p className="text-slate-300 text-sm">Open to new opportunities</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
