import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Gamepad2, Smartphone, Terminal, CircleDashed } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isOmniOS = project.id === 'omnios';

  const getIcon = (category: string) => {
    switch (category) {
      case 'Mobile Game': return <Gamepad2 className="w-8 h-8 md:w-10 md:h-10 text-offwhite" />;
      case 'Web/AI': return <Cpu className="w-8 h-8 md:w-10 md:h-10 text-offwhite" />;
      case 'OS / System': return <Terminal className="w-8 h-8 md:w-10 md:h-10 text-acid" />;
      default: return <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-offwhite" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative w-full py-16 md:py-20 flex flex-col md:flex-row gap-8 items-start md:items-center 
        ${isOmniOS ? 'my-20 border border-acid/30 bg-acid/[0.03] rounded-3xl p-8 md:p-16' : 'border-t border-white/10 hover:border-white/30 transition-colors'}
      `}
    >
      {/* Icon / Image Placeholder */}
      <div className={`
        flex-shrink-0 flex items-center justify-center rounded-2xl overflow-hidden relative
        ${isOmniOS ? 'w-24 h-24 md:w-32 md:h-32 bg-acid/10 border border-acid/20' : 'w-20 h-20 bg-white/5 border border-white/10'}
      `}>
         {project.imageUrl ? (
           <img 
             src={project.imageUrl} 
             alt={`${project.title} icon`} 
             className="w-full h-full object-cover"
           />
         ) : (
           getIcon(project.category)
         )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 flex-grow z-10">
        <div className="flex items-center gap-3">
          {isOmniOS && (
            <span className="px-3 py-1 bg-acid text-black font-mono text-[10px] font-bold uppercase tracking-widest rounded-full">
              Flagship Project
            </span>
          )}
          <span className="font-mono text-concrete text-xs uppercase tracking-widest">
            {project.category}
          </span>
        </div>

        <h2 className={`font-display font-bold text-offwhite ${isOmniOS ? 'text-5xl md:text-7xl' : 'text-3xl md:text-5xl'}`}>
          {project.title}
        </h2>
        
        <p className={`font-mono text-concrete leading-relaxed ${isOmniOS ? 'text-base md:text-xl max-w-2xl text-white/90' : 'text-sm md:text-base max-w-xl'}`}>
          {project.description}
        </p>

        {isOmniOS && project.releaseLabel && (
          <div className="mt-4 flex items-center gap-2 text-acid font-mono text-sm tracking-widest uppercase animate-pulse">
            <CircleDashed className="w-4 h-4" />
            <span>Releasing {project.releaseLabel}</span>
          </div>
        )}
      </div>

      {/* Action */}
      <div className="flex-shrink-0 flex justify-start md:justify-end items-center z-10 w-full md:w-auto mt-4 md:mt-0">
        <a 
          href={project.link || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`
            group/btn flex items-center gap-3 px-8 py-4 font-mono text-sm uppercase transition-all duration-300 rounded-full
            ${isOmniOS 
              ? 'bg-acid text-black hover:bg-white hover:scale-105' 
              : 'bg-white/5 border border-white/10 hover:bg-white hover:text-black'}
          `}
        >
          <span>{isOmniOS ? 'Explore Omni' : 'Open'}</span>
          <ArrowUpRight className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};