import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 100, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative pt-20">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col"
      >
        <motion.div variants={item} className="overflow-hidden">
          <h1 className="font-display text-[12vw] leading-[0.85] font-extrabold tracking-tighter text-offwhite">
            OSKAR
          </h1>
        </motion.div>
        
        <motion.div variants={item} className="overflow-hidden flex items-baseline gap-4 md:gap-8 flex-wrap">
          <h1 className="font-display text-[12vw] leading-[0.85] font-extrabold tracking-tighter text-transparent stroke-text hover:text-acid transition-colors duration-500 cursor-default">
            MINOR
          </h1>
          <div className="w-full md:w-auto mt-8 md:mt-0">
             <div className="flex flex-col gap-2 font-mono text-concrete max-w-sm text-sm md:text-base leading-relaxed pl-1 border-l-2 border-acid/50">
              <p>16 y/o Creative Developer from Poland.</p>
              <p>Building digital experiences at the intersection of art and technology.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-acid font-mono text-xs md:text-sm uppercase tracking-widest"
      >
        <ArrowDownRight className="w-5 h-5 animate-bounce" />
        <span>Scroll to Explore</span>
      </motion.div>
      
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 2px #E1E1E1;
        }
        @media (max-width: 768px) {
           .stroke-text {
            -webkit-text-stroke: 1px #E1E1E1;
          }
        }
      `}</style>
    </section>
  );
};