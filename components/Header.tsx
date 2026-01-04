import React from 'react';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference text-offwhite"
    >
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold text-xl tracking-tighter">OM.</span>
        <span className="font-mono text-[10px] text-acid">PORTFOLIO '26</span>
      </div>

      <nav className="hidden md:flex gap-8 font-mono text-sm tracking-widest uppercase">
        <a href="#projects" className="hover:text-acid transition-colors">Projects</a>
        <a href="#about" className="hover:text-acid transition-colors">About</a>
        <a href="#contact" className="hover:text-acid transition-colors">Contact</a>
      </nav>

      <a href="mailto:minoroskar2009@gmail.com" className="font-mono text-xs border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
        AVAILABLE
      </a>
    </motion.header>
  );
};