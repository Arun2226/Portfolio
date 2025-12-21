"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,200,0.15),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(0,150,255,0.1),transparent_60%)]"></div>

      {/* Main Container */}
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Profile Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Neon border frame */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-3xl border-4 border-transparent bg-gradient-to-tr from-emerald-400 via-cyan-400 to-blue-500 p-[2px] shadow-[0_0_40px_rgba(0,255,200,0.2)] group-hover:shadow-[0_0_60px_rgba(0,255,200,0.4)] transition-all duration-700 ease-in-out">
            <div className="w-full h-full rounded-3xl overflow-hidden ">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={300}
                height={300}
                className="object-cover w-full h-full rounded-3xl transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Animated border corners */}
          <div className="absolute top-0 left-0 w-14 h-14 border-t-4 border-l-4 border-emerald-400 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-14 h-14 border-b-4 border-r-4 border-cyan-400 animate-pulse"></div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl text-gray-300 z-10"
        >
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-lg mb-6 leading-relaxed text-gray-400">
            I’m a passionate <span className="text-emerald-400 font-semibold">Software Developer</span> who loves
            crafting beautiful and high-performance web applications. With hands-on experience
            in <span className="text-cyan-400 font-semibold">React.js</span>,{" "}
            <span className="text-blue-400 font-semibold">Next.js</span>, and{" "}
            <span className="text-emerald-400 font-semibold">Spring Boot</span>, I bring ideas to life
            through clean, efficient, and scalable code.
          </p>

          <p className="text-lg leading-relaxed text-gray-400">
            I focus on delivering user-centric experiences with a touch of innovation — blending
            modern design principles with robust backend logic. Currently, I’m exploring
            <span className="text-cyan-400 font-semibold"> AI integration</span> and{" "}
            <span className="text-emerald-400 font-semibold">system architecture</span> to
            push the boundaries of modern web applications.
          </p>

          {/* Glowing Button */}
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(0,255,200,0.6)",
            }}
            className="inline-block mt-10 px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-slate-900 font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(0,255,200,0.6)] transition-all duration-300"
          >
            View My Work 🚀
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
