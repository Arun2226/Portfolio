// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from "react-icons/fa";
// import { HiArrowDown } from "react-icons/hi";
// import { useState, useEffect, Suspense } from "react";
// import dynamic from "next/dynamic";

// // Lazy load 3D scene - only for Hero
// // const Scene3D = dynamic(() => import("./Objects/Scene3D"), {
// //   ssr: false,
// //   loading: () => null,
// // });

// export default function Hero() {
//   const [currentRole, setCurrentRole] = useState(0);
//   // const [show3D, setShow3D] = useState(false);

//   const roles = ["Software Developer", "Full Stack Engineer", "Problem Solver", "Tech Enthusiast"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRole((prev) => (prev + 1) % roles.length);
//     }, 3000);

//     // const timer = setTimeout(() => setShow3D(true), 500);

//     return () => {
//       clearInterval(interval);
//       // clearTimeout(timer);
//     };
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
//   };

//   const imageVariants = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   const stats = [
//     { label: "Years Experience", value: "3+" },
//     { label: "Projects Completed", value: "15+" },
//     { label: "Happy Clients", value: "10+" },
//   ];

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
//       {/* 3D Background */}
//       {/* {show3D && (
//         <div className="absolute inset-0 z-1">
//           <Suspense fallback={null}>
//             <Scene3D />
//           </Suspense>
//         </div>
//       )} */}

//       {/* Animated background grid */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

//       <div className="relative container mx-auto px-6 py-0 z-10">
//         <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col lg:flex-row items-center justify-between gap-12 h-screen">
//           {/* Left side - Text */}
//           <div className="flex-1 text-center lg:text-left flex flex-col justify-center h-full">
//             <motion.div variants={itemVariants} className="mb-4">
//               <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-400 text-sm font-medium backdrop-blur-sm">
//                 👋 Welcome to my portfolio
//               </span>
//             </motion.div>

//             <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
//               <span className="block">Hi, I'm</span>
//               <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                 Bondada Arun
//               </span>
//             </motion.h1>

//             <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 h-16 flex items-center justify-center lg:justify-start">
//               <span className="inline-block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                 {roles[currentRole]}
//               </span>
//             </motion.h2>

//             <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
//               I craft scalable and efficient web applications with{" "}
//               <span className="text-emerald-400 font-semibold">React</span>,{" "}
//               <span className="text-cyan-400 font-semibold">Next.js</span>, and modern technologies. Passionate about clean code and exceptional user experiences.
//             </motion.p>

//             <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start flex-wrap">
//               <a
//                 href="#projects"
//                 className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-semibold text-lg shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
//               >
//                 View Projects →
//               </a>

//               <a
//                 href="#contact"
//                 className="px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold text-lg text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
//               >
//                 <FaEnvelope />
//                 Contact Me
//               </a>

//               <a
//                 href="/resume.pdf"
//                 download
//                 className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-full font-semibold text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
//               >
//                 <FaDownload />
//                 Resume
//               </a>
//             </motion.div>
//           </div>

//           {/* Right side - Profile Image */}
//           <motion.div variants={imageVariants} className="flex-shrink-0 relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 blur-2xl opacity-40" />
//             <div className="relative w-80 h-[450px] md:w-96 md:h-[520px] lg:w-[420px] lg:h-[560px] hover:scale-105 transition-transform duration-500">
//               <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-emerald-400 animate-pulse"></div>
//               <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-cyan-400 animate-pulse"></div>
//               <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-cyan-400 animate-pulse"></div>
//               <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-blue-400 animate-pulse"></div>

//               <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 p-1 rounded-2xl">
//                 <div className="w-full h-full bg-slate-900 rounded-xl p-2">
//                   <div className="relative w-full h-full overflow-hidden border-4 border-slate-800 rounded-lg group">
//                     <Image
//                       src="/arun.jpg"
//                       alt="Bondada Arun - Software Developer"
//                       fill
//                       className="object-cover object-top"
//                       priority
//                       sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 420px"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
//                       <span className="text-white font-semibold text-xl">Let's Connect!</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Scroll Down */}
//         <motion.a
//           href="#about"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 2, duration: 1 }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer group"
//         >
//           <div className="flex flex-col items-center gap-2">
//             <span className="text-sm text-slate-400 group-hover:text-emerald-400 transition-colors">Scroll to explore</span>
//             <HiArrowDown className="text-2xl text-emerald-400 animate-bounce" />
//           </div>
//         </motion.a>
//       </div>
//     </section>
//   );
// }



//----------------------------// phase 2



// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from "react-icons/fa";
// import { HiArrowDown } from "react-icons/hi";
// import { useState, useEffect, Suspense } from "react";
// import dynamic from "next/dynamic";

// // Lazy load 3D scene - only for Hero
// // const Scene3D = dynamic(() => import("./Objects/Scene3D"), {
// //   ssr: false,
// //   loading: () => null,
// // });

// export default function Hero() {
//   const [currentRole, setCurrentRole] = useState(0);
//   const [hovered, setHovered] = useState(false);
//   // const [show3D, setShow3D] = useState(false);

//   const roles = ["Software Developer", "Full Stack Engineer", "Problem Solver", "Tech Enthusiast"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRole((prev) => (prev + 1) % roles.length);
//     }, 3000);

//     // const timer = setTimeout(() => setShow3D(true), 500);

//     return () => {
//       clearInterval(interval);
//       // clearTimeout(timer);
//     };
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
//   };

//   const imageVariants = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   const stats = [
//     { label: "Years Experience", value: "3+" },
//     { label: "Projects Completed", value: "15+" },
//     { label: "Happy Clients", value: "10+" },
//   ];

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
//       {/* 3D Background */}
//       {/* {show3D && (
//         <div className="absolute inset-0 z-1">
//           <Suspense fallback={null}>
//             <Scene3D />
//           </Suspense>
//         </div>
//       )} */}

//       {/* Animated background grid */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

//       <div className="relative container mx-auto px-6 py-0 z-10">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="flex flex-col lg:flex-row items-center justify-between gap-12 h-screen"
//         >
//           {/* Left side - Text */}
//           <div className="flex-1 text-center lg:text-left flex flex-col justify-center h-full">
//             <motion.div variants={itemVariants} className="mb-4">
//               <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-400 text-sm font-medium backdrop-blur-sm">
//                 👋 Welcome to my portfolio
//               </span>
//             </motion.div>

//             <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
//               <span className="block">Hi, I'm</span>
//               <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                 Bondada Arun
//               </span>
//             </motion.h1>

//             <motion.h2
//               variants={itemVariants}
//               className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 h-16 flex items-center justify-center lg:justify-start"
//             >
//               <span className="inline-block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                 {roles[currentRole]}
//               </span>
//             </motion.h2>

//             <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
//               I craft scalable and efficient web applications with{" "}
//               <span className="text-emerald-400 font-semibold">React</span>,{" "}
//               <span className="text-cyan-400 font-semibold">Next.js</span>, and modern technologies. Passionate about clean code and exceptional user experiences.
//             </motion.p>

//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start flex-wrap"
//             >
//               <a
//                 href="#projects"
//                 className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-semibold text-lg shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
//               >
//                 View Projects →
//               </a>

//               <a
//                 href="#contact"
//                 className="px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold text-lg text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
//               >
//                 <FaEnvelope />
//                 Contact Me
//               </a>

//               <a
//                 href="/resume.pdf"
//                 download
//                 className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-full font-semibold text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
//               >
//                 <FaDownload />
//                 Resume
//               </a>
//             </motion.div>
//           </div>

//           {/* Right side - Profile Image */}
//           <motion.div variants={imageVariants} className="flex-shrink-0 relative">
//             <div
//               className="relative w-80 h-[450px] md:w-96 md:h-[520px] lg:w-[420px] lg:h-[560px] hover:scale-105 transition-transform duration-500"
//               onMouseEnter={() => setHovered(true)}
//               onMouseLeave={() => setHovered(false)}
//               style={{ perspective: "1000px" }}
//             >
//               {/* Decorative border corners */}
//               <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-emerald-400 animate-pulse"></div>
//               <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-cyan-400 animate-pulse"></div>
//               <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-cyan-400 animate-pulse"></div>
//               <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-blue-400 animate-pulse"></div>

//               {/* Main Image */}
//               <div
//                 className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 p-1 rounded-2xl transition-transform duration-700"
//                 style={{
//                   transformStyle: "preserve-3d",
//                   transform: hovered ? "rotateY(180deg)" : "rotateY(0deg)",
//                 }}
//               >
//                 {/* Front */}
//                 <div className="w-full h-full bg-slate-900 rounded-xl p-2 relative border-4 border-slate-800 overflow-hidden" style={{ backfaceVisibility: "hidden" }}>
//                   <Image
//                     src="/arun.jpg"
//                     alt="Bondada Arun - Software Developer"
//                     fill
//                     className="object-cover object-top"
//                     priority
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
//                     <span className="text-white font-semibold text-xl">Let's Connect!</span>
//                   </div>
//                 </div>

//                 {/* Back */}
//                 <a
//                   href="#contact"
//                   className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold bg-slate-900/70 rounded-xl"
//                   style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
//                 >
//                   Let's Connect!
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Scroll Down */}
//         <motion.a
//           href="#about"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 2, duration: 1 }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer group"
//         >
//           <div className="flex flex-col items-center gap-2">
//             <span className="text-sm text-slate-400 group-hover:text-emerald-400 transition-colors">Scroll to explore</span>
//             <HiArrowDown className="text-2xl text-emerald-400 animate-bounce" />
//           </div>
//         </motion.a>
//       </div>
//     </section>
//   );
// }


//----------------------------// phase 3

// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload, FaReact, FaNodeJs, FaPython, FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";
// import { HiArrowDown } from "react-icons/hi";
// import { useState, useEffect, Suspense } from "react";
// import dynamic from "next/dynamic";

// // Lazy load 3D scene - only for Hero
// // const Scene3D = dynamic(() => import("./Objects/Scene3D"), { ssr: false, loading: () => null });

// export default function Hero() {
//   const [currentRole, setCurrentRole] = useState(0);
//   const [hovered, setHovered] = useState(false);
//   // const [show3D, setShow3D] = useState(false);

//   const roles = ["Software Developer", "Full Stack Engineer", "Problem Solver", "Tech Enthusiast"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRole((prev) => (prev + 1) % roles.length);
//     }, 3000);

//     // const timer = setTimeout(() => setShow3D(true), 500);

//     return () => {
//       clearInterval(interval);
//       // clearTimeout(timer);
//     };
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
//   };

//   const imageVariants = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   const stats = [
//     { label: "Years Experience", value: "3+" },
//     { label: "Projects Completed", value: "15+" },
//     { label: "Happy Clients", value: "10+" },
//   ];

//   // Tech icons floating around profile image
//   const techIcons = [
//     { icon: FaReact, position: "top-10 left-0", color: "text-blue-400" },
//     { icon: FaNodeJs, position: "top-20 right-0", color: "text-green-500" },
//     { icon: FaPython, position: "bottom-10 left-0", color: "text-yellow-400" },
//     { icon: FaJsSquare, position: "bottom-16 right-0", color: "text-yellow-300" },
//     { icon: FaHtml5, position: "top-0 left-20", color: "text-orange-500" },
//     { icon: FaCss3Alt, position: "bottom-0 right-20", color: "text-blue-600" },
//   ];

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
//       {/* 3D Background */}
//       {/* {show3D && (
//         <div className="absolute inset-0 z-1">
//           <Suspense fallback={null}>
//             <Scene3D />
//           </Suspense>
//         </div>
//       )} */}

//       {/* Animated background grid */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

//       {/* Floating tech icons */}
//       {techIcons.map((tech, idx) => {
//         const Icon = tech.icon;
//         return <Icon key={idx} className={`absolute ${tech.position} ${tech.color} text-3xl md:text-4xl animate-bounce`} />;
//       })}

//       <div className="relative container mx-auto px-6 py-0 z-10">
//         <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col lg:flex-row items-center justify-between gap-12 h-screen">
//           {/* Left side - Text */}
//           <div className="flex-1 text-center lg:text-left flex flex-col justify-center h-full">
//             <motion.div variants={itemVariants} className="mb-4">
//               <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-400 text-sm font-medium backdrop-blur-sm">
//                 👋 Welcome to my portfolio
//               </span>
//             </motion.div>

//             <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
//               <span className="block">Hi, I'm</span>
//               <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                 Bondada Arun
//               </span>
//             </motion.h1>

//             <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 h-16 flex items-center justify-center lg:justify-start">
//               <span className="inline-block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                 {roles[currentRole]}
//               </span>
//             </motion.h2>

//             <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
//               I craft scalable and efficient web applications with{" "}
//               <span className="text-emerald-400 font-semibold">React</span>,{" "}
//               <span className="text-cyan-400 font-semibold">Next.js</span>, and modern technologies. Passionate about clean code and exceptional user experiences.
//             </motion.p>

//             <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start flex-wrap">
//               <a href="#projects" className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-semibold text-lg shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
//                 View Projects →
//               </a>

//               <a href="#contact" className="px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold text-lg text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
//                 <FaEnvelope />
//                 Contact Me
//               </a>

//               <a href="/resume.pdf" download className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-full font-semibold text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
//                 <FaDownload />
//                 Resume
//               </a>
//             </motion.div>
//           </div>

//           {/* Right side - Profile Image */}
//           <motion.div variants={imageVariants} className="flex-shrink-0 relative">
//             <div
//               className="relative w-80 h-[450px] md:w-96 md:h-[520px] lg:w-[420px] lg:h-[560px] hover:scale-105 transition-transform duration-500"
//               onMouseEnter={() => setHovered(true)}
//               onMouseLeave={() => setHovered(false)}
//               style={{ perspective: "1000px" }}
//             >
//               {/* Decorative border corners */}
//               <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-emerald-400 animate-pulse"></div>
//               <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-cyan-400 animate-pulse"></div>
//               <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-cyan-400 animate-pulse"></div>
//               <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-blue-400 animate-pulse"></div>

//               {/* Main Image */}
//               <div
//                 className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 p-1 rounded-2xl transition-transform duration-700"
//                 style={{
//                   transformStyle: "preserve-3d",
//                   transform: hovered ? "rotateY(180deg)" : "rotateY(0deg)",
//                 }}
//               >
//                 {/* Front */}
//                 <div className="w-full h-full bg-slate-900 rounded-xl p-2 relative border-4 border-slate-800 overflow-hidden" style={{ backfaceVisibility: "hidden" }}>
//                   <Image src="/arun.jpg" alt="Bondada Arun - Software Developer" fill className="object-cover object-top" priority />
//                   <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
//                     <span className="text-white font-semibold text-xl">Let's Connect!</span>
//                   </div>
//                 </div>

//                 {/* Back */}
//                 <a
//                   href="#contact"
//                   className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold bg-slate-900/70 rounded-xl"
//                   style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
//                 >
//                   Let's Connect!
//                 </a>
//               </div>

//               {/* Badges on corners */}
//               <div className="absolute -top-4 -right-4 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm whitespace-nowrap">✅ Available for work</div>
//               <div className="absolute -bottom-4 -left-4 bg-teal-600 text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">🚀 15+ Projects</div>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Scroll Down */}
//         <motion.a
//           href="#about"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 2, duration: 1 }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer group"
//         >
//           <div className="flex flex-col items-center gap-2">
//             <span className="text-sm text-slate-400 group-hover:text-emerald-400 transition-colors">Scroll to explore</span>
//             <HiArrowDown className="text-2xl text-emerald-400 animate-bounce" />
//           </div>
//         </motion.a>
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaDownload,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaAws,
} from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs, SiSpringboot } from "react-icons/si";
import { HiArrowDown } from "react-icons/hi";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Software Developer", "Full Stack Engineer", "Problem Solver", "Tech Enthusiast"];
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Happy Clients", value: "10+" },
  ];

  // Floating tech icons
  const floatingIcons = [
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

  return (
    <section className="relative min-h-[110vh] flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden pt-20">
      {/* Floating tech icons around page */}
      {floatingIcons.map((Icon, idx) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = 30 + Math.random() * 20;
        return (
          <Icon
            key={idx}
            className="absolute text-white/30 animate-bounce"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              fontSize: `${size}px`,
              pointerEvents: "none",
            }}
          />
        );
      })}

      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

      <div className="relative container mx-auto px-6 py-20 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-400 text-sm font-medium backdrop-blur-sm">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
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
              I craft scalable and efficient web applications with{" "}
              <span className="text-emerald-400 font-semibold">React</span>,{" "}
              <span className="text-cyan-400 font-semibold">Next.js</span>, and modern technologies. Passionate about clean code
              and exceptional user experiences.
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
                href="/resume.pdf"
                download
                className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-full font-semibold text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <FaDownload />
                Resume
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

          {/* Right side - Profile Image */}
          {/* Right side - Profile Image */}
        <motion.div variants={imageVariants} className="flex-shrink-0 relative">
  <div
    className="relative w-80 h-[450px] md:w-96 md:h-[520px] lg:w-[420px] lg:h-[560px] hover:scale-105 transition-transform duration-500"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    style={{ perspective: "1000px" }}
  >
    {/* Decorative border corners */}
    <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-emerald-400 animate-pulse"></div>
    <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-cyan-400 animate-pulse"></div>
    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-cyan-400 animate-pulse"></div>
    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-blue-400 animate-pulse"></div>

    {/* Image Flip Card */}
    <div
      className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 p-1 rounded-2xl transition-transform duration-700"
      style={{
        transformStyle: "preserve-3d",
        transform: hovered ? "rotateY(180deg)" : "rotateY(0deg)",
      }}
    >
      {/* Front */}
      <div
        className="w-full h-full  rounded-xl p-2 relative border-4 border-slate-800 overflow-hidden"
        style={{ backfaceVisibility: "hidden" }}
      >
        <Image
          src="/arun.jpg"
          alt="Bondada Arun - Software Developer"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Back — Glowing “Let’s Connect!” */}
      <a
        href="#contact"
        className="absolute inset-0 flex flex-col items-center justify-center rounded-xl text-center overflow-hidden
           from-slate-900/90 via-slate-800/80 to-slate-900/90
          transition-all duration-700 ease-in-out
          hover:scale-110
          hover:shadow-[0_0_45px_10px_rgba(56,189,248,0.8)]
          group"
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        {/* Soft animated glow layers */}
        <div className="absolute inset-0  from-cyan-500/20 via-emerald-400/20 to-blue-400/20 rounded-xl blur-xl animate-pulse-slow"></div>
        <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_70%)] animate-pulse-slower"></div>

        {/* Main text */}
        <span className="relative z-10 text-4xl font-extrabold bg-gradient-to-r from-cyan-300 via-emerald-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.8)] animate-glow">
          Let’s Connect!
        </span>
        <span className="z-10 mt-3 text-sm text-cyan-200 font-medium tracking-wide drop-shadow-[0_0_10px_rgba(56,189,248,0.6)] group-hover:text-emerald-200 transition-colors duration-500">
          Click to reach me 🚀
        </span>
      </a>
    </div>

    {/* Badges */}
    <div className="absolute -top-4 -right-4 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm whitespace-nowrap">
      ✅ Available for work
    </div>
    <div className="absolute -bottom-4 -left-4 bg-teal-600 text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
      🚀 15+ Projects
    </div>
  </div>
</motion.div>


        </motion.div>

        {/* Scroll Down */}
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
