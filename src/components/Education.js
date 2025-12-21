// components/Education.js
"use client";
import { motion } from "framer-motion";

const education = [
  {
    school: "University of Example",
    degree: "B.Sc. Computer Science",
    period: "2017 - 2021",
    description: "Graduated with honors; focus on software development and algorithms.",
  },
  {
    school: "Example High School",
    degree: "High School Diploma",
    period: "2015 - 2017",
    description: "Completed with distinction.",
  },
];

export default function Education() {
  return (
    <section id="education" className="container mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-12 text-blue-500 text-center">Education</h2>
      <div className="space-y-8 max-w-3xl mx-auto">
        {education.map(({ school, degree, period, description }) => (
          <motion.div
            key={school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">{degree}</h3>
            <h4 className="text-blue-400 mb-1">{school}</h4>
            <p className="italic text-gray-400 mb-3">{period}</p>
            <p className="text-gray-300">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
