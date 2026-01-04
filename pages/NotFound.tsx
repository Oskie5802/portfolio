import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

export const NotFound = () => {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 200;
    
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 0.5,
          color: Math.random() > 0.5 ? '#00f5ff' : '#ffffff'
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.2)'; // Trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        // Basic movement
        p.x += p.vx;
        p.y += p.vy;

        // Boundary wrap
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Mouse interaction (gravity/repulsion)
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          // Pull towards mouse
          p.vx += (dx / distance) * force * 0.5;
          p.vy += (dy / distance) * force * 0.5;
        }

        // Friction to prevent infinite speed
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Connect particles near mouse
        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(0, 245, 255, ${0.2 * (1 - distance / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#e0e0e0] overflow-hidden font-mono selection:bg-[#00f5ff] selection:text-black">
      
      {/* Interactive Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-60"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 pointer-events-none">
        
        {/* Giant Glitch Text */}
        <div className="relative mb-8 pointer-events-auto">
          <h1 className="text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-[#333] select-none relative z-10 mix-blend-difference">
            404
          </h1>
          <h1 className="absolute top-0 left-1 text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter text-[#00f5ff] opacity-50 blur-[2px] animate-pulse">
            404
          </h1>
          <h1 className="absolute top-0 -left-1 text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter text-[#ff0055] opacity-30 blur-[4px] animate-pulse delay-75">
            404
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center pointer-events-auto"
        >
          <div className="inline-block px-4 py-1 mb-6 border border-[#00f5ff] text-[#00f5ff] text-xs tracking-[0.2em] uppercase bg-[#00f5ff10] backdrop-blur-md">
            Critical System Failure
          </div>
          
          <h2 className="text-2xl md:text-4xl font-light mb-8 text-[#ccc]">
            You have ventured into the <span className="text-[#00f5ff] font-bold">void</span>.
          </h2>

          <motion.button
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-white text-black font-bold tracking-widest uppercase text-sm overflow-hidden"
          >
            <span className="relative z-10 mix-blend-exclusion">Return to Base</span>
            <motion.div
              className="absolute inset-0 bg-[#00f5ff]"
              initial={{ x: "-100%" }}
              animate={{ x: hovered ? "0%" : "-100%" }}
              transition={{ duration: 0.3, ease: "circOut" }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Vignette & Scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000000_120%)] z-20" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%]" />
    </div>
  );
};
