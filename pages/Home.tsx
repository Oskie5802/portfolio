import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

import omniosImg from '../icons/omnios.webp';
import stresctoImg from '../icons/strescto.webp';
import iamdogImg from '../icons/iamdog.webp';
import hungrypiggyImg from '../icons/hungrypiggy.webp';
import meImg from '../icons/me.jpeg';
import moturImg from '../icons/motur.webp';
import { Background } from '../components/Background';

// Custom X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Custom Google Play icon component
const GooglePlayIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M5.18 1.41c-.24.13-.43.34-.54.6L4.2 2.89l8.64 8.64 3.73-3.73-11.39-6.39zm12.37 6.39L13.84 11.5l3.74 3.74 1.34-1.34c.48-.48.48-1.26 0-1.74l-1.37-1.36zM3.8 3.29l-.02.02c-.13.33-.2.69-.2 1.07v15.24c0 .38.07.74.2 1.07l.02.02L13.13 11.5 3.8 3.29zM4.64 21.99c.11.26.3.47.54.6l11.39-6.39-3.73-3.73-8.64 8.64.44.88z" />
  </svg>
);

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-white/5 hover:bg-[#00f5ff20] hover:text-[#00f5ff] transition-all duration-300 text-[#666]"
    aria-label={label}
  >
    {icon}
  </a>
);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const ProjectCard = ({ title, description, href, icon, role }: { title: string; description: string; href: string; icon: string; role?: string }) => (
  <motion.div variants={itemVariants}>
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative h-full flex items-center gap-6 p-6 rounded-3xl bg-[#111] border border-white/5 hover:border-white/10 hover:bg-[#161616] transition-all duration-300 overflow-hidden"
    >
      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00f5ff05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-[#000] rounded-2xl p-3 border border-white/5 shadow-2xl group-hover:scale-105 transition-transform duration-500 flex items-center justify-center relative z-10">
        <img 
          src={icon} 
          alt={title} 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="relative z-10">
        <h4 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
          {title}
          <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </h4>
        <p className="text-[#666] text-sm leading-snug group-hover:text-[#aaa] transition-colors">{description}</p>
        {role && <span className="sr-only">{role}</span>}
      </div>
    </a>
  </motion.div>
);

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] selection:bg-[#00f5ff] selection:text-[#050505]">
      <Background />

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-32 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header / Intro */}
          <section className="mb-24">
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8 md:items-start justify-between">
              <div className="flex-1">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 text-white leading-none">
                  Oskar Minor
                </h1>
                <div className="flex flex-col md:flex-row md:items-end gap-6">
                  <p className="text-xl md:text-2xl text-[#888] leading-relaxed max-w-xl">
                    16-year-old developer based in Poland. 
                    Building the future of personal computing and immersive mobile experiences.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end gap-6 order-first md:order-last mb-6 md:mb-0">
                <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
                   <div className="absolute inset-0 bg-[#00f5ff20] rounded-full blur-xl animate-pulse" />
                   <img 
                     src={meImg} 
                     alt="Oskar Minor" 
                     className="relative w-full h-full object-cover rounded-full border-2 border-white/10 shadow-2xl"
                   />
                </div>
                <div className="flex gap-4">
                  <SocialLink href="https://github.com/oskie5802" icon={<Github size={20} />} label="GitHub" />
                  <SocialLink href="https://www.linkedin.com/in/oskar-minor-704245343/" icon={<Linkedin size={20} />} label="LinkedIn" />
                  <SocialLink href="https://x.com/oskarminor_" icon={<XIcon className="w-5 h-5" />} label="X" />
                  <SocialLink href="https://play.google.com/store/apps/dev?id=7728087098258584312" icon={<GooglePlayIcon className="w-5 h-5" />} label="CEO ronimstudio" />
                </div>
              </div>
            </motion.div>
          </section>

          {/* Featured Project: Omni OS */}
          <section className="mb-16">
            <motion.div variants={itemVariants}>
              <h2 className="text-xs uppercase tracking-[0.3em] text-[#00f5ff] font-bold mb-8">Featured OS</h2>
              <a 
                href="https://omniaios.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#111] to-[#080808] border border-white/5 hover:border-[#00f5ff50] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,245,255,0.05),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-0 right-0 p-8">
                  <ArrowUpRight className="text-[#333] group-hover:text-[#00f5ff] transition-colors duration-300" size={32} />
                </div>
                
                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start relative z-10">
                  <div className="w-32 h-32 md:w-48 md:h-48 relative flex-shrink-0">
                    <div className="absolute inset-0 bg-[#00f5ff20] blur-2xl rounded-full animate-pulse group-hover:bg-[#00f5ff40] transition-all duration-500" />
                    <img 
                      src={omniosImg} 
                      alt="Omni OS Icon" 
                      className="relative w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,245,255,0.3)] group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-block px-3 py-1 rounded-full border border-[#00f5ff30] bg-[#00f5ff05] text-[#00f5ff] text-[10px] uppercase tracking-widest font-bold">
                        Coming Early 2026
                      </div>
                      <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-[10px] uppercase tracking-widest font-bold">
                        Co-founder
                      </div>
                      <span className="sr-only">Co-Founder with Mikołaj Piech</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Omni OS</h3>
                    <p className="text-[#888] text-lg leading-relaxed group-hover:text-[#ccc] transition-colors duration-300">
                      A fully local, privacy-focused operating system where AI isn't just a feature—it's the core. 
                      Semantic understanding, proactive intelligence, and privacy by design. Join the future of personal computing.
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          </section>

          {/* Other Projects */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              title="Motur"
              description="Social platform for motorcycle enthusiasts."
              href="https://play.google.com/store/apps/details?id=com.ronimstudio.motar"
              icon={moturImg}
              role="Creator & CEO ronimstudio"
            />
            <ProjectCard 
              title="streść.to"
              description="Mobile & Web summarizing platform."
              href="https://strescto.pl"
              icon={stresctoImg}
              role="Founder"
            />
            <ProjectCard 
              title="I Am Dog"
              description="Interactive mobile game experience."
              href="https://play.google.com/store/apps/details?id=com.ronimstudio.iamdog"
              icon={iamdogImg}
              role="Creator & CEO ronimstudio"
            />
            <ProjectCard 
              title="Hungry Piggy"
              description="Casual mobile gaming for high-stakes fun."
              href="https://play.google.com/store/apps/details?id=com.ronimstudio.hitacoin"
              icon={hungrypiggyImg}
              role="Creator & CEO ronimstudio"
            />
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center items-center p-8 rounded-3xl border border-dashed border-white/10 text-center hover:bg-white/[0.02] transition-colors cursor-default group"
            >
              <p className="text-[#444] italic mb-2 group-hover:text-[#666] transition-colors">More coming soon...</p>
              <div className="w-1 h-1 rounded-full bg-[#333] group-hover:scale-150 transition-transform" />
            </motion.div>
          </section>

          {/* Footer */}
          <footer className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <motion.div variants={itemVariants} className="text-[#444] text-sm tracking-widest uppercase">
              &copy; 2026 Oskar Minor
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex gap-6 md:gap-8 flex-col md:flex-row items-center">
              <a 
                href="mailto:minoroskar2009@gmail.com" 
                className="group flex items-center gap-3 text-[#888] hover:text-white transition-colors"
              >
                <Mail size={18} className="group-hover:text-[#00f5ff] transition-colors" />
                <span className="font-medium text-sm md:text-base">minoroskar2009@gmail.com</span>
              </a>

              <div className="flex gap-6 text-[#444]">
                <a href="https://x.com/oskarminor_" target="_blank" className="hover:text-white transition-colors">X</a>
                <a href="https://github.com/oskie5802" target="_blank" className="hover:text-white transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/oskar-minor-704245343/" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
              </div>
            </motion.div>
          </footer>
        </motion.div>
      </main>
    </div>
  );
};
