import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 px-6 md:px-12 border-t border-white/10 mt-20 bg-black">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="flex flex-col gap-6">
          <h3 className="font-display text-4xl font-bold text-offwhite">Get in touch.</h3>
          <a href="mailto:minoroskar2009@gmail.com" className="font-mono text-acid text-lg md:text-xl hover:underline decoration-wavy underline-offset-4 break-all">
            minoroskar2009@gmail.com
          </a>
          
          <div className="flex gap-6 mt-4">
             <a href="https://x.com/oskarminor" target="_blank" rel="noopener noreferrer" className="text-concrete hover:text-white transition-colors">
               <XLogo className="w-6 h-6" />
             </a>
             <a href="https://github.com/Oskie5802" target="_blank" rel="noopener noreferrer" className="text-concrete hover:text-white transition-colors">
               <Github className="w-6 h-6" />
             </a>
             <a href="https://www.linkedin.com/in/oskar-minor-704245343/" target="_blank" rel="noopener noreferrer" className="text-concrete hover:text-white transition-colors">
               <Linkedin className="w-6 h-6" />
             </a>
          </div>
        </div>
        
        <div className="flex flex-col md:items-end gap-2 font-mono text-xs text-concrete uppercase tracking-widest">
           <p>© 2026 Oskar Minor.</p>
           <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};