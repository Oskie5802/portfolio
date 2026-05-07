import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Music } from 'lucide-react';

import omniosImg from '../icons/omnios.webp';
import stresctoImg from '../icons/strescto.webp';
import iamdogImg from '../icons/iamdog.webp';
import hungrypiggyImg from '../icons/hungrypiggy.webp';
import meImg from '../icons/me.jpeg';
import moturImg from '../icons/motur.webp';
import keepyImg from '../icons/keepy.png';
import czytajdalejImg from '../icons/czytajdalej.png';
import safelabsImg from '../icons/safelabs.png';
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
    className="text-[#505050] hover:text-[#c0c0c0] transition-colors duration-200"
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
      staggerChildren: 0.07,
      delayChildren: 0.05
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

type ProjectCardProps = {
  title?: string;
  titleNode?: React.ReactNode;
  description: string;
  href: string;
  icon?: string;
  iconNode?: React.ReactNode;
  role?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, titleNode, description, href, icon, iconNode, role }) => (
  <motion.div variants={itemVariants}>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-full flex items-center gap-4 p-4 rounded-xl bg-[#111] border border-white/[0.06] hover:border-white/[0.1] hover:bg-[#141414] transition-all duration-200 overflow-hidden"
    >
      <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-[#0c0c0c] rounded-xl flex items-center justify-center border border-white/[0.06] group-hover:border-white/[0.09] transition-all duration-200">
        {icon ? (
          <img
            src={icon}
            alt={title || ''}
            className="w-8 h-8 md:w-9 md:h-9 object-contain"
          />
        ) : iconNode}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-[14px] font-semibold text-[#e0e0e0] mb-0.5 flex items-center gap-1.5">
          {titleNode ?? title}
          <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-40 transition-opacity shrink-0" />
        </h4>
        <p className="text-[#585858] text-[13px] leading-snug group-hover:text-[#777] transition-colors">{description}</p>
        {role && <span className="sr-only">{role}</span>}
      </div>
    </a>
  </motion.div>
);

const CATEGORIES = ['All', 'Social', 'Web', 'Mobile', 'Desktop'] as const;
type Category = typeof CATEGORIES[number];

export const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const allProjects = [
    {
      title: 'SafeLabs',
      category: 'Social' as Category,
      description: 'Interactive cybersecurity workshops for primary school students, built with friends and presented live at public events.',
      href: 'https://safelabs.pl',
      icon: safelabsImg,
      role: 'Co-creator & Public presenter',
    },
    {
      title: 'streść.to',
      category: 'Web' as Category,
      description: 'Understand any Polish school reading in minutes - character profiles, plot breakdowns and key themes in one place.',
      href: 'https://strescto.pl',
      icon: stresctoImg,
      role: 'Founder',
    },
    {
      title: 'Keepy',
      category: 'Mobile' as Category,
      description: 'Scan and digitize paper receipts, track warranties and never miss a return deadline again.',
      href: 'https://play.google.com/store/apps/details?id=com.ronimstudio.keepy&hl=pl',
      icon: keepyImg,
      role: 'Creator & CEO ronimstudio',
    },
    {
      title: 'Motur',
      category: 'Mobile' as Category,
      description: 'Track your rides, discover new routes with AI, share your adventures and compete with riders. Strava for motorcyclists.',
      href: 'https://play.google.com/store/apps/details?id=com.ronimstudio.motar',
      icon: moturImg,
      role: 'Creator & CEO ronimstudio',
    },
    {
      title: 'I Am Dog',
      category: 'Mobile' as Category,
      description: 'Dog simulator for kids - explore the world as a dog, complete missions and unlock new levels.',
      href: 'https://play.google.com/store/apps/details?id=com.ronimstudio.iamdog',
      icon: iamdogImg,
      role: 'Creator & CEO ronimstudio',
    },
    {
      title: 'Hungry Piggy',
      category: 'Mobile' as Category,
      description: 'Arcade game - flick coins into the world\'s hungriest piggy bank using your finger as the catapult.',
      href: 'https://play.google.com/store/apps/details?id=com.ronimstudio.hitacoin',
      icon: hungrypiggyImg,
      role: 'Creator & CEO ronimstudio',
    },
    {
      title: 'Audio Lab',
      category: 'Desktop' as Category,
      description: 'My audio player lacked a feature I needed, so I built my own.',
      href: 'https://github.com/Oskie5802/audiolab',
      iconNode: <Music className="w-7 h-7 text-[#444] group-hover:text-[#777] transition-colors duration-200" />,
      role: 'Creator',
    },
  ];

  const filteredProjects = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#e0e0e0] selection:bg-white selection:text-[#0c0c0c]">
      <Background />

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-32 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header / Intro */}
          <section className="mb-24">
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-10 md:items-start justify-between">
              <div className="flex-1">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-5 text-white leading-none">
                  Oskar Minor
                </h1>
                <p className="text-base md:text-lg text-[#666] leading-relaxed max-w-md mb-8">
                  17y developer from Poland. <br /> If you need something, just do it yourself instead of looking for it.
                </p>
                <div className="flex items-center gap-5">
                  <SocialLink href="https://github.com/oskie5802" icon={<Github size={17} />} label="GitHub" />
                  <SocialLink href="https://www.linkedin.com/in/oskar-minor-704245343/" icon={<Linkedin size={17} />} label="LinkedIn" />
                  <SocialLink href="https://x.com/oskarminor" icon={<XIcon className="w-[17px] h-[17px]" />} label="X" />
                  <SocialLink href="https://play.google.com/store/apps/dev?id=7728087098258584312" icon={<GooglePlayIcon className="w-[17px] h-[17px]" />} label="Google Play" />
                  <a href="mailto:minoroskar2009@gmail.com" className="text-[#505050] hover:text-[#c0c0c0] transition-colors duration-200" aria-label="Email">
                    <Mail size={17} />
                  </a>
                </div>
              </div>

              <div className="flex-shrink-0 order-first md:order-last">
                <img
                  src={meImg}
                  alt="Oskar Minor"
                  className="w-28 h-28 md:w-44 md:h-44 object-cover rounded-2xl border border-white/[0.08]"
                />
              </div>
            </motion.div>
          </section>

          {/* Featured Projects */}
          <section className="mb-16">
            <motion.div variants={itemVariants}>
              <h2 className="text-[11px] uppercase tracking-[0.25em] text-[#444] font-semibold mb-6">Featured</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Omni */}
                <a
                  href="https://heyomni.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 rounded-2xl bg-[#111] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-200 overflow-hidden flex flex-col gap-5"
                >
                  <div className="absolute top-0 right-0 p-5">
                    <ArrowUpRight className="text-[#2a2a2a] group-hover:text-[#666] transition-colors duration-200" size={18} />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 flex-shrink-0 rounded-2xl overflow-hidden">
                      <img
                        src={omniosImg}
                        alt="Omni"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                        <span className="px-2 py-0.5 rounded-md bg-white/[0.05] text-[#555] text-[10px] uppercase tracking-widest font-medium">
                          Early 2026
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-white/[0.05] text-[#444] text-[10px] uppercase tracking-widest font-medium">
                          Co-founder
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Omni</h3>
                    </div>
                  </div>

                  <p className="text-[#606060] text-sm leading-relaxed group-hover:text-[#888] transition-colors duration-200">
                    Omni finds your lost files, installs apps, manages your email and calendar, and almost anything else - just by asking.
                  </p>
                </a>

                {/* czytaj dalej */}
                <a
                  href="https://czytajdalej.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 rounded-2xl bg-[#f7f3ef] border border-[#e8e0d8] hover:border-[#d4c8be] transition-all duration-200 overflow-hidden flex flex-col gap-5"
                >
                  <div className="absolute top-0 right-0 p-5">
                    <ArrowUpRight className="text-[#ccc0b8] group-hover:text-[#c96447] transition-colors duration-200" size={18} />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 flex-shrink-0 rounded-2xl overflow-hidden">
                      <img
                        src={czytajdalejImg}
                        alt="czytaj dalej"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                        <span className="px-2 py-0.5 rounded-md bg-black/[0.05] text-[#c96447] text-[10px] uppercase tracking-widest font-medium">
                          Building
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-black/[0.05] text-black/40 text-[10px] uppercase tracking-widest font-medium">
                          Founder
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight">
                        <span style={{ color: '#1a1008' }}>czytaj</span><span style={{ color: '#c96447' }}>dalej</span>
                      </h3>
                    </div>
                  </div>

                  <p className="text-[#7a6a5e] text-sm leading-relaxed group-hover:text-[#5a4a3e] transition-colors duration-200">
                    Share books with people around you. Find what's worth reading - from your neighbours, not algorithms.
                  </p>
                </a>

              </div>
            </motion.div>
          </section>

          {/* Other Projects */}
          <section>
            <motion.div variants={itemVariants} className="flex flex-col gap-4 mb-5">
              <h2 className="text-[11px] uppercase tracking-[0.25em] text-[#444] font-semibold">Projects</h2>
              <div className="flex flex-wrap gap-1">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] uppercase tracking-[0.15em] font-medium transition-all duration-150 ${
                      activeCategory === cat
                        ? 'bg-white/[0.08] text-[#ccc]'
                        : 'text-[#444] hover:text-[#777]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                className="grid grid-cols-1 md:grid-cols-2 gap-3"
              >
                {filteredProjects.map(project => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </motion.div>
            </AnimatePresence>
          </section>

          {/* Footer */}
          <footer className="mt-28 pt-10 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-5">
            <motion.div variants={itemVariants} className="text-[#333] text-[11px] tracking-widest uppercase">
              &copy; 2026 Oskar Minor
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-5 items-center flex-wrap justify-center">
              <a href="mailto:minoroskar2009@gmail.com" className="text-[#505050] hover:text-[#aaa] transition-colors text-[13px]">
                minoroskar2009@gmail.com
              </a>
              <span className="text-[#2a2a2a] hidden md:block">·</span>
              <div className="flex gap-4">
                <a href="https://x.com/oskarminor" target="_blank" className="text-[#404040] hover:text-[#aaa] transition-colors text-[13px]">X</a>
                <a href="https://github.com/oskie5802" target="_blank" className="text-[#404040] hover:text-[#aaa] transition-colors text-[13px]">GitHub</a>
                <a href="https://www.linkedin.com/in/oskar-minor-704245343/" target="_blank" className="text-[#404040] hover:text-[#aaa] transition-colors text-[13px]">LinkedIn</a>
              </div>
            </motion.div>
          </footer>
        </motion.div>
      </main>
    </div>
  );
};
