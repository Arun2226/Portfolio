// components/Certifications.js
"use client";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "AWS Certified Developer",
    issuer: "Amazon",
    date: "2023",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="container mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-12 text-blue-500 text-center">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {certifications.map(({ title, issuer, date }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg p-6 shadow-md text-gray-300 text-center"
          >
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="italic text-blue-400">{issuer}</p>
            <p className="text-gray-400 mt-2">{date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
