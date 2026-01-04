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
      
      <main className="max-w-[1600px] mx-auto w-full">
        <Hero />
        
        <section id="projects" className="px-6 md:px-12 py-20 min-h-screen flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex items-end gap-4 border-b border-white/10 pb-4"
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold text-offwhite">SELECTED</h2>
            <span className="font-mono text-acid text-xl mb-2">PROJECTS</span>
          </motion.div>

          <div className="flex flex-col">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="about" className="px-6 md:px-12 py-20 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                   <h2 className="font-display text-4xl font-bold text-offwhite mb-8">ABOUT ME</h2>
                </div>
                <div>
                    <p className="font-mono text-concrete text-sm md:text-lg leading-relaxed mb-6">
                        I'm 16 years old and I've been coding for as long as I can remember. I have no interest in mediocrity. 
                        In my projects, I strive for perfection, fusing advanced engineering with distinctive design.
                    </p>
                    <p className="font-mono text-concrete text-sm md:text-lg leading-relaxed">
                        My main focus is <span className="text-acid">OmniOS</span> — a system that will redefine our perspective on privacy and AI.
                    </p>
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;