import { GraduationCap, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

export function About() {
  return (
    <section
      id="about"
      aria-label="About Me Section"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="flex items-center gap-2 font-mono text-xs text-indigo-400 tracking-widest uppercase mb-3">
          <span className="text-slate-500">//</span>
          <span>01. PROFILE</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          ABOUT ME
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3" />
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Professional Introduction */}
        <div className="lg:col-span-6 space-y-6">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/80 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full pointer-events-none" />
            
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal mb-6">
              {PORTFOLIO_CONFIG.aboutIntro}
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal text-slate-300/90 mb-8">
              {PORTFOLIO_CONFIG.aboutFocus}
            </p>

            {/* Quick Metadata Badges */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap gap-4 items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{PORTFOLIO_CONFIG.location}</span>
              </div>
              <div className="flex items-center gap-2 text-indigo-300 bg-indigo-950/40 px-3 py-1 rounded-md border border-indigo-500/20">
                <BookOpen className="w-3.5 h-3.5" />
                <span>MCA Post-Graduate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Education Timeline */}
        <div className="lg:col-span-6 space-y-5">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-400 tracking-wider uppercase mb-2">
            <GraduationCap className="w-4 h-4 text-purple-400" />
            <span>Academic Background</span>
          </div>

          <div className="space-y-4">
            {PORTFOLIO_CONFIG.education.map((edu, index) => (
              <div
                key={edu.id}
                id={`education-card-${edu.id}`}
                className="glass-panel rounded-xl p-5 sm:p-6 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 relative group"
              >
                {/* Visual Step Marker */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="font-display font-bold text-xl text-white group-hover:text-indigo-300 transition-colors">
                        {edu.degree}
                      </span>
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/30 text-indigo-300">
                        {edu.period}
                      </span>
                    </div>
                    <h3 className="text-sm font-medium text-slate-300 mt-1">
                      {edu.institution}
                      {edu.campus && <span className="text-slate-400">, {edu.campus}</span>}
                    </h3>
                  </div>
                </div>

                {/* Score & Classification */}
                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800/60 text-xs font-mono">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700/60 text-slate-200">
                    <Award className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{edu.score}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700/60 text-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{edu.gradeClassification}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
