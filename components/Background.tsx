import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const Background: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 50 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-obsidian">
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-noise mix-blend-overlay" />
      
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Glowing Orb follower */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-acid rounded-full mix-blend-screen filter blur-[120px] opacity-10"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Static Ambient Light */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-alert rounded-full mix-blend-screen filter blur-[150px] opacity-[0.05]" />
    </div>
  );
};