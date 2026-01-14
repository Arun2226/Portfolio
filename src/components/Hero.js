"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaEnvelope, FaDownload } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { useState, useEffect } from "react";

export default function Hero() {
  // ✅ FIX: Client-only hydration state
  const [isClient, setIsClient] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [hovered, setHovered] = useState(false);

  const roles = ["Junior Backend Developer", "Java Developer", "Node.js Developer", "Full Stack Enthusiast"];

  // ✅ FIX 1: Set client state after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ✅ FIX 2: Role cycling only after client mount
  useEffect(() => {
    if (!isClient) return;
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isClient]);

  // ✅ FIX 3: Skeleton during hydration (same structure)
  if (!isClient) {
    return (
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden py-20">
        <div className="relative container mx-auto px-6 py-20 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              {/* Skeleton matches your exact layout */}
              <div className="mb-4">
                <div className="inline-block w-40 h-8 bg-slate-700 rounded-full animate-pulse"></div>
              </div>
              <div className="text-5xl md:text-7xl lg:text-7xl font-extrabold mb-6 h-32 bg-slate-700 rounded-2xl animate-pulse"></div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 h-16 bg-slate-700 rounded-xl animate-pulse mx-auto lg:ml-0 w-64"></div>
              <div className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl h-8 bg-slate-700 rounded-lg animate-pulse"></div>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                <div className="px-8 py-4 bg-slate-700 rounded-full animate-pulse w-32"></div>
                <div className="px-8 py-4 border-2 border-slate-700 rounded-full animate-pulse w-32"></div>
                <div className="px-8 py-4 bg-slate-700 border border-slate-700 rounded-full animate-pulse w-36"></div>
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-2xl">
                <div className="bg-slate-700 rounded-xl p-4 animate-pulse h-20"></div>
                <div className="bg-slate-700 rounded-xl p-4 animate-pulse h-20"></div>
                <div className="bg-slate-700 rounded-xl p-4 animate-pulse h-20"></div>
              </div>
            </div>
            <div className="flex-shrink-0 relative w-80 h-[450px] md:w-96 md:h-[520px] lg:w-[420px] lg:h-[560px] bg-slate-700 rounded-2xl animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const stats = [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "6+" },
    { label: "CGPA", value: "8.5" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden py-20">
      <div className="relative container mx-auto px-6 py-20 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Left side - Text content (UNCHANGED) */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-400 text-sm font-medium backdrop-blur-sm">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="block">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Bondada Arun
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 h-16 flex items-center justify-center lg:justify-start"
            >
              <span className="inline-block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {roles[currentRole]}
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Results-driven <span className="text-emerald-400 font-semibold">Junior Backend Developer</span> with hands-on experience in{" "}
              <span className="text-cyan-400 font-semibold">Node.js, Java Spring Boot</span>, MongoDB, and RESTful API development. 
              Passionate about building scalable web applications and continuously learning modern technologies.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start flex-wrap"
            >
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-semibold text-lg shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                View Projects →
              </a>

              <a
                href="#contact"
                className="px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold text-lg text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <FaEnvelope />
                Contact Me
              </a>

              <a
                href="/Arun's_Resume.pdf"
                download
                className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-full font-semibold text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <FaDownload />
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 max-w-2xl">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - YOUR EXACT FLIP CARD (FIXED) */}
          <motion.div variants={imageVariants} className="flex-shrink-0 relative">
            <div
              className="relative w-80 h-[450px] md:w-96 md:h-[520px] lg:w-[420px] lg:h-[560px] hover:scale-105 transition-transform duration-500"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{ perspective: "1000px" }}
            >
              {/* Decorative border corners - UNCHANGED */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-emerald-400 animate-pulse"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-cyan-400 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-cyan-400 animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-blue-400 animate-pulse"></div>

              {/* ✅ FIX 4: Flip Card with suppressHydrationWarning */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 p-1 rounded-2xl transition-transform duration-700"
                style={{
                  transformStyle: "preserve-3d",
                  transform: hovered ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
                suppressHydrationWarning={true}
              >
                {/* Front - UNCHANGED */}
                <div
                  className="w-full h-full rounded-xl p-2 relative border-4 border-slate-800 overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                  suppressHydrationWarning={true}
                >
                  <Image
                    src="/arun.jpg"
                    alt="Bondada Arun - Software Developer"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Back - YOUR EXACT DESIGN (FIXED className) */}
                <a
                  href="#contact"
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-xl text-center overflow-hidden from-slate-900/90 via-slate-800/80 to-slate-900/90 transition-all duration-700 ease-in-out hover:scale-110 hover:shadow-[0_0_45px_10px_rgba(56,189,248,0.8)] group"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                  suppressHydrationWarning={true}
                >
                  <div className="absolute inset-0 from-cyan-500/20 via-emerald-400/20 to-blue-400/20 rounded-xl blur-xl animate-pulse-slow"></div>
                  <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_70%)] animate-pulse-slower"></div>
                  <span className="relative z-10 text-4xl font-extrabold bg-gradient-to-r from-cyan-200 via-emerald-300 to-blue-400 bg-clip-text drop-shadow-[0_0_20px_rgba(56,189,248,0.8)] animate-glow">
                    Let's Connect!
                  </span>
                  <span className="z-10 mt-3 text-sm text-cyan-200 font-medium tracking-wide drop-shadow-[0_0_10px_rgba(56,189,248,0.6)] group-hover:text-emerald-200 transition-colors duration-500">
                    Click to reach me 🚀
                  </span>
                </a>
              </div>

              {/* Badges - UNCHANGED */}
              <div className="absolute -top-4 -right-4 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm whitespace-nowrap">
                ✅ Currently Employed
              </div>
              <div className="absolute -bottom-4 -left-4 bg-teal-600 text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
                🚀 Open to new opportunities
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Down - UNCHANGED */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer group"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-slate-400 group-hover:text-emerald-400 transition-colors">Scroll to explore</span>
            <HiArrowDown className="text-2xl text-emerald-400 animate-bounce" />
          </div>
        </motion.a>
      </div>
    </section>
  );
}
