"use client";

import { motion } from "framer-motion";
import { 
  FaJava, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, 
  FaDatabase, FaCode, FaServer, FaCloud, FaEnvelope, FaLaptopCode ,FaAws 
} from "react-icons/fa";
import { 
  SiSpringboot, SiHibernate, SiMongodb, SiMysql, SiJavascript, SiUbuntu, 
   SiFastapi, SiNetlify, SiVercel, SiAmazonaws 
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export default function Skills() {
  const skillCategories = [
    {
      category: "Backend Development",
      icon: <FaNodeJs className="text-4xl text-emerald-400" />,
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Hibernate", icon: <SiHibernate /> },
        { name: "Python", icon: <FaPython /> },
        { name: "FastAPI", icon: <SiFastapi /> },
      ],
    },
    {
      category: "Frontend Development",
      icon: <FaReact className="text-4xl text-cyan-400" />,
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <RiNextjsFill /> },
      ],
    },
    {
      category: "Databases",
      icon: <SiMongodb className="text-4xl text-emerald-400" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "JDBC", icon: <FaJava /> },
      ],
    },
    {
      category: "DevOps & Deployment",
      icon: <FaAws  className="text-4xl text-cyan-400" />,
      skills: [
        { name: "AWS EC2", icon: <FaAws  /> },
        { name: "Netlify", icon: <SiNetlify /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Git/GitHub", icon: <FaGitAlt /> },
        { name: "Ubuntu", icon: <SiUbuntu /> },
      ],
    },
    {
      category: "Tools & APIs",
      icon: <FaCode className="text-4xl text-emerald-400" />,
      skills: [
        { name: "VS Code", icon: <FaCode /> },
        { name: "Eclipse IDE", icon: <FaLaptopCode /> },
        { name: "Microsoft Graph API", icon: <FaEnvelope /> },
      ],
    },
  ];

  const softSkills = [
    { name: "Time Management", icon: "⏰" },
    { name: "Team Work", icon: "👥" },
    { name: "Leadership", icon: "🎯" },
    { name: "Communication", icon: "💬" },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once:  true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/20 hover:border-cyan-400/40 transition-all hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-8">
                  {cat.icon}
                  <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
                    {cat.category}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {cat.skills.map((skill, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.1, duration: 0.5 }}
                      className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/80 transition-all group cursor-default"
                    >
                      <div className="text-cyan-400 text-xl flex-shrink-0">{skill.icon}</div>
                      <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/30"
          >
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text mb-6 text-center">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-slate-800/50 p-6 rounded-xl border border-emerald-500/20 hover:border-cyan-400/40 transition-all hover:scale-105 text-center"
                >
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <p className="text-slate-300 font-medium">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
