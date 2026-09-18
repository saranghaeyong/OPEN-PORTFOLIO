import { useState } from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Globe, 
  Database, 
  Cpu, 
  Wrench,
  Check,
  Layers
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  programming: <Code2 className="w-5 h-5 text-cyan-400" />,
  'ai-ml': <BrainCircuit className="w-5 h-5 text-purple-400" />,
  web: <Globe className="w-5 h-5 text-indigo-400" />,
  database: <Database className="w-5 h-5 text-emerald-400" />,
  automation: <Cpu className="w-5 h-5 text-amber-400" />,
  tools: <Wrench className="w-5 h-5 text-rose-400" />,
};

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredCategories =
    activeFilter === 'all'
      ? PORTFOLIO_CONFIG.skillCategories
      : PORTFOLIO_CONFIG.skillCategories.filter((cat) => cat.id === activeFilter);

  return (
    <section
      id="skills"
      aria-label="Technical Skills Section"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-indigo-400 tracking-widest uppercase mb-3">
          <span className="text-slate-500">//</span>
          <span>02. TECHNICAL PROFICIENCIES</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          SKILLS
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
      </div>

      {/* Category Filter Pills */}
      <div
        id="skills-filter-container"
        className="flex flex-wrap items-center gap-2 mb-10"
        role="tablist"
        aria-label="Skill Category Filters"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeFilter === 'all'}
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
            activeFilter === 'all'
              ? 'bg-indigo-600/30 border border-indigo-400/60 text-white shadow-[0_0_15px_rgba(99,102,241,0.25)]'
              : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
          }`}
        >
          ALL CATEGORIES ({PORTFOLIO_CONFIG.skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
        </button>

        {PORTFOLIO_CONFIG.skillCategories.map((cat) => {
          const isSelected = activeFilter === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-indigo-600/30 border border-indigo-400/60 text-white shadow-[0_0_15px_rgba(99,102,241,0.25)]'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat.category}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            id={`skill-category-card-${category.id}`}
            className="glass-panel rounded-2xl p-6 border border-slate-800/90 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8),0_0_20px_-5px_rgba(99,102,241,0.15)]"
          >
            <div>
              {/* Category Header with Icon */}
              <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 group-hover:border-slate-700 transition-colors">
                    {CATEGORY_ICONS[category.id] || <Layers className="w-5 h-5 text-indigo-400" />}
                  </div>
                  <h3 className="font-display font-bold text-sm tracking-wider text-slate-100 uppercase">
                    {category.category}
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-slate-500 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                  {category.skills.length}
                </span>
              </div>

              {/* Skill Badges (No fake percentages as required) */}
              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900/90 border border-slate-800 hover:border-indigo-400/50 hover:bg-indigo-950/30 text-slate-300 hover:text-white font-mono text-xs tracking-wide transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/60 group-hover:bg-indigo-400 transition-colors" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Subtle card bottom accent */}
            <div className="mt-6 pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>SYSTEM VERIFIED</span>
              <span className="text-indigo-400/70">ACTIVE</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
