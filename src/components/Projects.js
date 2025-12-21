// components/Projects.js
"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourrepo",
    demo: "https://yourportfolio.com",
    img: "/project1.png"
  },
  // Add more projects here
]

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {projects.map(({title, description, tech, github, demo, img}) => (
          <motion.div
            key={title}
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl"
          >
            <img src={img} alt={title} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 mb-4">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tech.map(t => <span key={t} className="bg-blue-700 text-blue-300 px-2 py-1 rounded">{t}</span>)}
              </div>
              <div className="flex gap-4 mt-4 text-blue-400">
                <a href={github} target="_blank" className="hover:underline">GitHub</a>
                <a href={demo} target="_blank" className="hover:underline">Live Demo</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
