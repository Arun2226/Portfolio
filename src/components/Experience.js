// components/Experience.js
"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Tech Company Inc.",
    position: "Senior Software Developer",
    duration: "Jan 2022 - Present",
    responsibilities: [
      "Led development of microservices architecture serving 1M+ users",
      "Mentored team of 5 junior developers",
      "Improved application performance by 40%",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
  },
  {
    company: "Startup Solutions",
    position: "Full Stack Developer",
    duration: "Jun 2020 - Dec 2021",
    responsibilities: [
      "Built responsive web applications using React and Node.js",
      "Designed and implemented RESTful APIs",
      "Collaborated with UX team to improve user experience",
      "Integrated third-party APIs and payment gateways",
    ],
  },
  {
    company: "Digital Agency",
    position: "Junior Developer",
    duration: "Jan 2019 - May 2020",
    responsibilities: [
      "Developed client websites using modern JavaScript frameworks",
      "Maintained and updated existing codebases",
      "Participated in code reviews and agile ceremonies",
      "Learned best practices in software development",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-14 text-blue-600">
        Work Experience
      </h2>
      <div className="space-y-16 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">
              {exp.position}
            </h3>
            <h4 className="text-xl text-blue-400 mb-1">{exp.company}</h4>
            <p className="italic text-gray-400 mb-6">{exp.duration}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {exp.responsibilities.map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-blue-500 transition-colors cursor-default"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
