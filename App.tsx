
import React from 'react';
import { Background } from './components/Background';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { Footer } from './components/Footer';
import { projects } from './data';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-transparent selection:bg-acid selection:text-black">
      <Background />
      <Header />
      
      <main className="max-w-[1800px] mx-auto w-full">
        <Hero />
        
        <section id="projects" className="px-6 md:px-12 py-32 min-h-screen">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12"
          >
            <div>
              <span className="font-mono text-acid text-sm tracking-[0.4em] uppercase block mb-4">Portfolio</span>
              <h2 className="font-display text-7xl md:text-[10vw] font-black text-offwhite leading-[0.8] tracking-tighter uppercase">
                Selected<br/>Works
              </h2>
            </div>
            <div className="font-mono text-concrete text-right hidden md:block uppercase text-xs tracking-widest leading-loose">
              01 — Digital Systems<br/>
              02 — Mobile Gaming<br/>
              03 — AI Solutions
            </div>
          </motion.div>

          <div className="flex flex-col">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="about" className="px-6 md:px-12 py-40 bg-white/5 backdrop-blur-3xl border-y border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                <div className="sticky top-32">
                   <span className="font-mono text-acid text-sm tracking-[0.4em] uppercase block mb-6">Manifesto</span>
                   <h2 className="font-display text-6xl md:text-8xl font-black text-offwhite tracking-tighter leading-[0.9] uppercase">
                    About<br/>Me
                   </h2>
                   <div className="mt-12 flex gap-4">
                     <div className="w-16 h-1 bg-acid" />
                     <div className="w-8 h-1 bg-white/10" />
                     <div className="w-4 h-1 bg-white/10" />
                   </div>
                </div>
                <div className="space-y-12">
                    <p className="font-display text-2xl md:text-4xl text-offwhite leading-tight font-medium">
                        I am 16 years old and I've been coding as long as I can remember. Mediocrity doesn't interest me.
                    </p>
                    <p className="font-mono text-concrete text-lg md:text-xl leading-relaxed">
                        In my projects, I strive for perfection, blending advanced engineering with bold design. 
                        I believe software should not only be functional but also evoke emotion and curiosity.
                    </p>
                    <div className="p-8 border border-acid/20 rounded-2xl bg-acid/5 backdrop-blur-md">
                      <p className="font-mono text-offwhite text-lg leading-relaxed">
                        My primary focus is <span className="text-acid font-bold">OmniOS</span> — a system that will redefine our perception of privacy and artificial intelligence in daily life.
                      </p>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
