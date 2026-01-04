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
      case 'Mobile Game': return <Gamepad2 className="w-8 h-8 text-offwhite/50" />;
      case 'Web/AI': return <Cpu className="w-8 h-8 text-offwhite/50" />;
      case 'OS / System': return <Terminal className="w-8 h-8 text-acid/50" />;
      default: return <Smartphone className="w-8 h-8 text-offwhite/50" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative w-full py-12 md:py-24 flex flex-col md:flex-row gap-10 items-start md:items-center border-b border-white/5 last:border-0
        ${isOmniOS ? 'bg-acid/[0.02] -mx-4 px-4 md:-mx-12 md:px-12 rounded-lg' : ''}
      `}
    >
      {/* Project Visual */}
      <div className="relative flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
        <div className={`
          relative z-10 w-32 h-32 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-white/10 bg-charcoal flex items-center justify-center
          ${isOmniOS ? 'border-acid/30 shadow-[0_0_40px_rgba(204,255,0,0.1)]' : ''}
        `}>
          {project.imageUrl ? (
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                // Fallback to icon if image missing
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).parentElement?.classList.add('flex-col');
              }}
            />
          ) : (
            getIcon(project.category)
          )}
        </div>
        {/* Decorative background behind image */}
        <div className="absolute -inset-4 bg-acid opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 flex-grow">
        <div className="flex items-center gap-4">
          <span className="font-mono text-acid text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
            {project.category}
          </span>
          {project.status === 'working' && (
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-alert/10 border border-alert/20 text-alert font-mono text-[9px] uppercase tracking-tighter">
              <span className="w-1 h-1 rounded-full bg-alert animate-pulse" />
              In Progress
            </span>
          )}
        </div>

        <h2 className={`font-display font-extrabold text-offwhite leading-none transition-colors group-hover:text-acid ${isOmniOS ? 'text-6xl md:text-9xl tracking-tighter' : 'text-4xl md:text-7xl tracking-tight'}`}>
          {project.title}
        </h2>
        
        <p className={`font-mono text-concrete leading-relaxed max-w-2xl ${isOmniOS ? 'text-lg md:text-xl text-white/80' : 'text-sm md:text-base'}`}>
          {project.description}
        </p>

        {isOmniOS && project.releaseLabel && (
          <div className="mt-2 flex items-center gap-2 text-acid font-mono text-xs tracking-[0.3em] uppercase">
            <CircleDashed className="w-4 h-4 animate-spin-slow" />
            <span>Deployment Target: {project.releaseLabel}</span>
          </div>
        )}
      </div>

      {/* Link Arrow */}
      <div className="flex-shrink-0 self-end md:self-center">
        <a 
          href={project.link || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-6 md:p-8 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300 group/link"
        >
          <ArrowUpRight className="w-8 h-8 transition-transform duration-500 group-hover/link:rotate-45 group-hover/link:scale-110" />
        </a>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </motion.div>
  );
};