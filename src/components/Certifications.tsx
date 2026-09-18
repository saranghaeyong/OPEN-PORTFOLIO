import { Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-label="Certifications Section"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header - Subtle and Minimal */}
      <div className="flex flex-col items-start mb-10">
        <div className="flex items-center gap-2 font-mono text-xs text-indigo-400 tracking-widest uppercase mb-2">
          <span className="text-slate-500">//</span>
          <span>04. CREDENTIALS</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
          CERTIFICATIONS
        </h2>
        <div className="h-0.5 w-12 bg-indigo-500/60 rounded-full mt-2" />
      </div>

      {/* Minimal 3-card layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {PORTFOLIO_CONFIG.certifications.map((cert) => (
          <div
            key={cert.id}
            id={`cert-card-${cert.id}`}
            className="glass-panel rounded-xl p-5 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-200 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="p-2 rounded-lg bg-indigo-950/40 border border-indigo-500/20 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  <Award className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-indigo-300 font-semibold">
                  {cert.year}
                </span>
              </div>

              <h3 className="font-display font-semibold text-base text-white group-hover:text-indigo-200 transition-colors mb-1">
                {cert.title}
              </h3>
            </div>

            <div className="pt-3 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>{cert.institution}</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
