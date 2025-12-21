// components/Blog.js
"use client";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Understanding React Hooks",
    date: "Oct 2025",
    excerpt: "A beginner’s guide to React Hooks and how to use them effectively...",
    url: "#",
  },
  {
    title: "Getting Started with Next.js",
    date: "Sep 2025",
    excerpt: "Learn the basics of Next.js and how it extends React to build great apps...",
    url: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="container mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-12 text-blue-500 text-center">Blog / Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {posts.map(({ title, date, excerpt, url }) => (
          <motion.a
            href={url}
            key={title}
            className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-sm text-blue-400 mb-3">{date}</p>
            <p className="text-gray-300">{excerpt}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

