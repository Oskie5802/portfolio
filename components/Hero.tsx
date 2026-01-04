
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export const Hero: React.FC = () => {
  // Define animation variants with explicit 'Variants' type to ensure compatibility
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  // Explicitly typing variants avoids inference issues with cubic-bezier easing arrays
  const item: Variants = {
    hidden: { y: 150, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative pt-32 pb-20">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col relative z-10"
      >
        <motion.div variants={item} className="overflow-hidden mb-[-2vw]">
          <h1 className="font-display text-[16vw] leading-[0.8] font-black tracking-tighter text-offwhite uppercase">
            Oskar
          </h1>
        </motion.div>
        
        <motion.div variants={item} className="overflow-hidden flex items-baseline gap-4 md:gap-12 flex-wrap">
          <h1 className="font-display text-[16vw] leading-[0.8] font-black tracking-tighter text-transparent stroke-text-bold hover:text-acid transition-all duration-700 cursor-default uppercase">
            Minor
          </h1>
          <div className="w-full md:w-auto mt-12 md:mt-4">
             <div className="flex flex-col gap-4 font-mono text-concrete max-w-md text-sm md:text-lg leading-relaxed pl-6 border-l border-acid/30">
              <p>16-year-old Creative Developer based in Poland.</p>
              <p className="text-offwhite/60">Merging software engineering with uncompromising design. Building the future of human-computer interaction.</p>
              <div className="flex gap-4 mt-2">
                <span className="text-acid px-2 py-1 bg-acid/10 rounded text-[10px] tracking-widest uppercase font-bold border border-acid/20">Build '26</span>
                <span className="text-concrete/50 px-2 py-1 bg-white/5 rounded text-[10px] tracking-widest uppercase font-bold border border-white/10">EUROPE_WARSAW</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative vertical line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: '20vh' }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute right-12 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-acid to-transparent hidden md:block"
      />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-6 text-acid font-mono text-xs uppercase tracking-[0.5em]"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full border border-acid/20 group hover:bg-acid hover:text-black transition-all cursor-pointer">
          <ArrowDownRight className="w-5 h-5 animate-bounce" />
        </div>
        <span className="hidden md:inline">Explore Portfolio</span>
      </motion.div>
      
      <style>{`
        .stroke-text-bold {
          -webkit-text-stroke: 4px #E1E1E1;
        }
        @media (max-width: 1024px) {
           .stroke-text-bold {
            -webkit-text-stroke: 2px #E1E1E1;
          }
        }
        @media (max-width: 768px) {
           .stroke-text-bold {
            -webkit-text-stroke: 1px #E1E1E1;
          }
        }
      `}</style>
    </section>
  );
};
