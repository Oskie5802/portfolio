import React from 'react';
import { motion } from 'framer-motion';

export const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#050505]">
      {/* Animated Gradient Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 100, 0],
          y: [0, 50, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#00f5ff10] blur-[120px] rounded-full" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, -50, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#00f5ff05] blur-[120px] rounded-full" 
      />


      {/* Floating Particles (Stars) */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5 + 0.1,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -100],
            opacity: [null, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
          }}
        />
      ))}
    </div>
  );
};
