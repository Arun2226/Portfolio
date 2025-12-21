"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [step, setStep] = useState("hi"); // hi -> letsgo -> done
  const canvasRef = useRef(null);
  const [sparkles, setSparkles] = useState([]);

  // Particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = Array.from(
      { length: window.innerWidth < 768 ? 30 : 60 },
      () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 1.2,
        dy: (Math.random() - 0.5) * 1.2,
      })
    );

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.3 + Math.random() * 0.4})`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intro timers + sparkle burst on transition
  useEffect(() => {
    const hiTimer = setTimeout(() => {
      setStep("letsgo");
      const newSparkles = Array.from({ length: 15 }, () => ({
        id: Math.random(),
        x: window.innerWidth / 2 + (Math.random() - 0.5) * 200,
        y: window.innerHeight / 2 + (Math.random() - 0.5) * 100,
      }));
      setSparkles(newSparkles);
    }, 1500);

    const doneTimer = setTimeout(() => setStep("done"), 3000);

    return () => {
      clearTimeout(hiTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 🌌 Unified background gradient */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-950 to-black"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "400% 400%",
        }}
      />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none -z-5"
      />

      {/* Floating icons (optional, like in hero) */}
      <motion.div className="absolute inset-0 -z-5 opacity-30">
        <motion.div
          className="absolute text-cyan-400 text-4xl"
          style={{ top: "20%", left: "10%" }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ⚙️
        </motion.div>
        <motion.div
          className="absolute text-emerald-400 text-5xl"
          style={{ bottom: "15%", right: "12%" }}
          animate={{
            y: [0, 15, 0],
            rotate: [0, -15, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          💻
        </motion.div>
      </motion.div>

      {/* Sparkle effect */}
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          initial={{ opacity: 1, scale: 0 }}
          animate={{
            opacity: 0,
            scale: 1.5,
            x: s.x - window.innerWidth / 2,
            y: s.y - window.innerHeight / 2,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute w-2 h-2 bg-white rounded-full z-20"
        />
      ))}

      {/* Intro / Hi -> LetsGo */}
      {step !== "done" && (
        <motion.div className="fixed inset-0 z-[9999] flex items-center justify-center">
          {step === "hi" ? (
            <motion.h1
              key="hi"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: [1, 1.03, 1] }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl z-10"
            >
              Hi
            </motion.h1>
          ) : (
            <motion.div
              key="letsgo-container"
              className="flex flex-col items-center justify-center z-10 h-screen px-4"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-xl text-center px-6"
              >
                Let’s go for Arun&apos;s portfolio
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-4 text-lg md:text-xl text-gray-300 text-center"
              >
                Welcome to my personal portfolio
              </motion.p>
            </motion.div>
          )}
        </motion.div>
      )}

      {/* ✅ Main content after intro */}
      {step === "done" && (
        <>
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Blog />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
}
