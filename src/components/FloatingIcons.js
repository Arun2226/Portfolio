"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaAws } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs, SiSpringboot } from "react-icons/si";

export default function FloatingIcons() {
  const [icons, setIcons] = useState([]);
  const [mounted, setMounted] = useState(false);

  const iconComponents = [
    FaReact,
    FaNodeJs,
    FaPython,
    FaJsSquare,
    FaHtml5,
    FaCss3Alt,
    DiJava,
    FaAws,
    SiTailwindcss,
    SiNextdotjs,
    SiSpringboot,
  ];

  useEffect(() => {
    // Generate random positions ONLY on client side after mount
    const generatedIcons = iconComponents.map((Icon, idx) => ({
      Icon,
      id: idx,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 30 + Math.random() * 20,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 2,
    }));
    
    setIcons(generatedIcons);
    setMounted(true);
  }, []);

  // Don't render anything until client-side mount
  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {icons.map(({ Icon, id, top, left, size, duration, delay }) => (
        <motion.div
          key={id}
          className="absolute text-white/15 opacity-70"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            fontSize: `${size}px`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
}
