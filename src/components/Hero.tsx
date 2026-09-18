import { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Terminal, ChevronDown } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';
import { ParticleCanvas } from './ParticleCanvas';

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      if (mediaQuery.matches) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-20 pb-16"
    >
      {/* Background Image Container with Cinematic Framing */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
        style={{
          transform: prefersReducedMotion
            ? 'none'
            : `translate3d(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px, 0) scale(1.04)`,
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <img
          src={PORTFOLIO_CONFIG.heroImage}
          alt="Cinematic anime concept of lone developer on a high-tech rooftop overlooking futuristic cyberpunk city at night"
          referrerPolicy="no-referrer"
          loading="eager"
          className="w-full h-full object-cover object-center opacity-45 filter brightness-90 contrast-105"
        />

        {/* Cinematic Vignettes & Gradient Meshes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080a0f]/90 via-[#080a0f]/60 to-[#080a0f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080a0f] via-transparent to-[#080a0f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(79,70,229,0.12)_0%,_transparent_75%)]" />
        <div className="absolute inset-0 cyber-grid opacity-30" />
      </div>

      {/* Floating Particles Canvas */}
      <ParticleCanvas density={45} className="z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Cyber Status Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-[#0c111c]/80 backdrop-blur-md mb-6 shadow-[0_0_20px_-3px_rgba(99,102,241,0.25)]">
          <Terminal className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-[11px] sm:text-xs font-mono tracking-widest text-indigo-300 uppercase">
            CUSAT ALUMNUS // TECH PORTFOLIO
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
        </div>

        {/* Hero Name - Large Dramatic Heading */}
        <h1
          id="hero-developer-name"
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white uppercase text-glow-violet mb-6"
        >
          {PORTFOLIO_CONFIG.name}
        </h1>

        {/* 4 Required Core Role Pills */}
        <div
          id="hero-title-roles-container"
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl mb-8"
        >
          {PORTFOLIO_CONFIG.titleRoles.map((role, idx) => (
            <div
              key={role}
              id={`hero-role-pill-${idx}`}
              className="px-4 py-1.5 rounded-lg border border-slate-700/80 bg-slate-900/70 backdrop-blur-sm shadow-sm hover:border-indigo-400/50 hover:bg-slate-800/80 transition-all duration-300 group"
            >
              <span className="text-xs sm:text-sm font-mono font-semibold tracking-wider text-slate-200 group-hover:text-indigo-300 transition-colors">
                {role}
              </span>
            </div>
          ))}
        </div>

        {/* Quiet, technical, intelligent, futuristic atmospheric statement */}
        <p className="max-w-xl text-slate-400 text-sm sm:text-base font-normal leading-relaxed mb-10 text-center">
          Quiet, analytical inquiry meets modern software architecture and applied neural systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <button
            id="hero-explore-work-btn"
            type="button"
            onClick={() => scrollToSection('project')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-display font-semibold text-sm tracking-wide text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/50 shadow-[0_0_30px_-5px_rgba(79,70,229,0.5)] hover:shadow-[0_0_35px_rgba(99,102,241,0.7)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            id="hero-contact-me-btn"
            type="button"
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-display font-semibold text-sm tracking-wide text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-indigo-400/40 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Contact Me</span>
          </button>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group opacity-80 hover:opacity-100 transition-opacity"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] text-slate-400 uppercase group-hover:text-indigo-300 transition-colors">
          SCROLL TO EXPLORE
        </span>
        <div className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center p-1 group-hover:border-indigo-400 transition-colors">
          <div className="w-1 h-2 rounded-full bg-indigo-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
