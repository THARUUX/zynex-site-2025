"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function GradientBg() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for mouse responsiveness
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Turn mouse position into subtle movement (-30px to +30px)
  const moveX = useTransform(springX, [0, window.innerWidth], [-30, 30]);
  const moveY = useTransform(springY, [0, window.innerHeight], [-30, 30]);

  // Track mouse
  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX * 2);
      mouseY.set(e.clientY * 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* Blur background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full backdrop-blur-[200px] z-2 pointer-events-none"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main animated gradient blob */}
      <motion.div
        className="w-100 h-50 bg-gradient-to-br from-[#AE00FF] to-[#4000FF] absolute top-1/2 left-2/6 transform -translate-x-1/2 -translate-y-1/2 rounded-full z-1 pointer-events-none"
        style={{ x: moveX, y: moveY }}
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 25, 0],
          borderRadius: ["40%", "60%", "40%"], // Organic morphing
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="w-100 h-100 bg-gradient-to-br from-[#AE00FF] to-[#AE00FF] absolute top-1/2 left-3/6 transform -translate-x-1/2 -translate-y-1/2 rounded-full z-1 pointer-events-none"
        style={{ x: moveX, y: moveY }}
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 25, 0],
          borderRadius: ["40%", "60%", "40%"], // Organic morphing
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div id="model-background" className="absolute top-0 left-0 w-full h-full backdrop-blur-[200px] z-2 pointer-events-none"></div>

    </>
  );
}
