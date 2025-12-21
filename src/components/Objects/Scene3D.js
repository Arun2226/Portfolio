// "use client";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Float, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import { Suspense, useMemo, useRef } from "react";
// import * as THREE from "three";

// // 🏙️ Glowing City Blocks
// function CityGrid() {
//   const groupRef = useRef();
//   const count = 300;

//   const blocks = useMemo(() => {
//     const temp = [];
//     for (let i = 0; i < count; i++) {
//       const x = (Math.random() - 0.5) * 20;
//       const z = (Math.random() - 0.5) * 20;
//       const h = Math.random() * 2 + 0.3;
//       temp.push({ position: [x, h / 2, z], height: h, hueOffset: Math.random() * 360 });
//     }
//     return temp;
//   }, []);

//   useFrame((state) => {
//     const t = state.clock.elapsedTime;
//     if (!groupRef.current) return;
//     groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.2;

//     groupRef.current.children.forEach((child, i) => {
//       if (child.material) {
//         // Spark blue to violet gradient cycling
//         const hue = (t * 25 + blocks[i].hueOffset) % 360;
//         child.material.color.setHSL(hue / 360, 0.75, 0.55); // base color
//         child.material.emissive.setHSL(hue / 360, 0.9, 0.6); // glow
//       }
//     });
//   });

//   return (
//     <group ref={groupRef}>
//       {blocks.map((b, i) => (
//         <mesh key={i} position={b.position} castShadow receiveShadow>
//           <boxGeometry args={[0.4, b.height, 0.4]} />
//           <meshStandardMaterial roughness={0.3} metalness={0.7} />
//         </mesh>
//       ))}
//     </group>
//   );
// }

// // 🌆 Grid Floor + Pulsing Energy Lines
// function EnergyGrid() {
//   const linesRef = useRef();
//   const size = 20;

//   useFrame((state) => {
//     const t = state.clock.elapsedTime * 2;
//     if (linesRef.current && linesRef.current.material) {
//       linesRef.current.material.opacity = 0.4 + Math.sin(t) * 0.2;
//       const hue = (t * 40) % 360;
//       linesRef.current.material.color.setHSL(hue / 360, 0.7, 0.5); // teal/cyan
//     }
//   });

//   const grid = useMemo(() => {
//     const lines = new THREE.BufferGeometry();
//     const points = [];
//     for (let i = -size; i <= size; i++) {
//       points.push(new THREE.Vector3(i, 0, -size), new THREE.Vector3(i, 0, size));
//       points.push(new THREE.Vector3(-size, 0, i), new THREE.Vector3(size, 0, i));
//     }
//     lines.setFromPoints(points);
//     return lines;
//   }, []);

//   return (
//     <lineSegments ref={linesRef} geometry={grid}>
//       <lineBasicMaterial transparent opacity={0.4} linewidth={1} />
//     </lineSegments>
//   );
// }

// // 🌌 Floating Neon Data Orbs
// function DataOrbs() {
//   const group = useRef();
//   const orbs = 30;

//   const positions = useMemo(() => {
//     const pos = [];
//     for (let i = 0; i < orbs; i++) {
//       pos.push([
//         (Math.random() - 0.5) * 15,
//         Math.random() * 4 + 1,
//         (Math.random() - 0.5) * 15,
//       ]);
//     }
//     return pos;
//   }, []);

//   useFrame((state) => {
//     const t = state.clock.elapsedTime;
//     if (!group.current) return;
//     group.current.rotation.y = t * 0.2;

//     group.current.children.forEach((child, i) => {
//       const mesh = child.children[0];
//       if (mesh && mesh.material) {
//         const hue = (state.clock.elapsedTime * 50 + i * 12) % 360;
//         mesh.material.color.setHSL(hue / 360, 0.9, 0.55); // neon cyan/violet
//         mesh.material.emissive.setHSL(hue / 360, 0.9, 0.65);
//       }
//     });
//   });

//   return (
//     <group ref={group}>
//       {positions.map((p, i) => (
//         <Float key={i} speed={1 + Math.random()} rotationIntensity={0.5} floatIntensity={0.6}>
//           <mesh position={p}>
//             <sphereGeometry args={[0.15, 32, 32]} />
//             <meshStandardMaterial transparent opacity={0.8} />
//           </mesh>
//         </Float>
//       ))}
//     </group>
//   );
// }

// // 🚀 Main Scene
// export default function Scene3D() {
//   return (
//     <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
//       <Canvas
//         shadows
//         dpr={[1, 2]}
//         gl={{
//           antialias: true,
//           alpha: true,
//           toneMapping: THREE.ACESFilmicToneMapping,
//           toneMappingExposure: 1.1,
//         }}
//       >
//         <PerspectiveCamera makeDefault position={[8, 6, 8]} fov={45} />
//         <Suspense fallback={null}>
//           {/* Lights */}
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
//           <pointLight position={[-5, 5, -5]} intensity={0.6} />

//           {/* Scene Objects */}
//           <EnergyGrid />
//           <CityGrid />
//           <DataOrbs />

//           <Environment preset="city" />
//           <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }
