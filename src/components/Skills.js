// components/Skills.js
"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Node.js", level: 80 },
  {name: "Tailwind CSS", level: 90},
]

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {skills.map(({name, level}) => (
          <motion.div 
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{opacity:1, y:0}}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
          >
            <h3 className="mb-2 font-semibold">{name}</h3>
            <div className="w-full h-4 bg-gray-700 rounded-full">
              <motion.div 
                className="h-4 bg-blue-500 rounded-full"
                initial={{width: 0}}
                animate={{width: `${level}%`}}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
