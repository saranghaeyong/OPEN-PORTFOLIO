import { useState } from 'react';
import {
  ShieldAlert,
  Terminal,
  Cpu,
  Workflow,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Layers,
  Search,
  Scan,
  CheckCircle2,
  Sliders,
  Compass,
  ArrowDown
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';
import { ProjectLinkModal } from './ProjectLinkModal';

export function FeaturedProject() {
  const project = PORTFOLIO_CONFIG.project;
  const [selectedNodeIndex, setSelectedNodeIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const activeNode = project.pipeline[selectedNodeIndex];

  const handleViewProject = () => {
    if (project.projectUrlPlaceholder && project.projectUrlPlaceholder.trim() !== '') {
      window.open(project.projectUrlPlaceholder, '_blank', 'noopener,noreferrer');
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <section
      id="project"
      aria-label="Featured Research Project"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-14">
        <div className="flex items-center gap-2 font-mono text-xs text-indigo-400 tracking-widest uppercase mb-3">
          <span className="text-slate-500">//</span>
          <span>03. FLAGSHIP RESEARCH & ARCHITECTURE</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 w-full">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              FEATURED PROJECT
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 rounded-full mt-3" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-purple-500/30 bg-purple-950/30 text-purple-300 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>ACADEMIC CAPSTONE PROJECT</span>
          </div>
        </div>
      </div>

      {/* Futuristic AI Research Terminal Card */}
      <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 lg:p-10 border border-indigo-500/30 relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-bl-full pointer-events-none blur-3xl" />

        {/* Project Header Bar / Telemetry */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 font-mono text-xs font-semibold tracking-wider">
                {project.date}
              </span>
              <span className="px-3 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-semibold tracking-wider">
                {project.grade}
              </span>
              <span className="px-3 py-1 rounded-md bg-purple-950/80 border border-purple-500/40 text-purple-300 font-mono text-xs font-semibold tracking-wider">
                {project.credits} Credits
              </span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight pt-2">
              {project.title}
            </h3>

            <p className="font-mono text-xs sm:text-sm text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              {project.institution}
            </p>
          </div>

          <div className="flex items-center shrink-0">
            <button
              id="view-project-cta-button"
              type="button"
              onClick={handleViewProject}
              className="px-6 py-3 rounded-xl font-display font-semibold text-xs sm:text-sm tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/40 shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] transition-all duration-300 flex items-center gap-2.5 cursor-pointer group"
            >
              <span>View Project</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Project Description & Research Disciplines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 pb-8 border-b border-slate-800/80">
          <div className="lg:col-span-7 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-indigo-400 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>Project Abstract</span>
            </h4>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
              {project.description}
            </p>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="font-mono text-[11px] text-purple-300 font-semibold uppercase tracking-wider">
                Key Architectural Methodology:
              </div>
              <p className="leading-relaxed">
                Worked with character-level CNN and attention mechanisms for URL-based phishing classification, combined with deep webpage multimodal assessment.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-indigo-400 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Research Disciplines</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.areas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 font-mono text-xs tracking-wide"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <h4 className="font-mono text-xs uppercase tracking-widest text-indigo-400 mb-2">
                Technology Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 font-mono text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE CONCEPTUAL ARCHITECTURE FLOW (As explicitly requested) */}
        <div className="space-y-6 my-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase mb-1">
                <Workflow className="w-4 h-4" />
                <span>Conceptual Pipeline Flow</span>
              </div>
              <h4 className="font-display font-bold text-lg sm:text-xl text-white">
                Interactive Detection Pipeline Visualization
              </h4>
            </div>
            <span className="font-mono text-[11px] text-slate-400">
              [Click stages to inspect details]
            </span>
          </div>

          {/* Flow Stepper Container */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {project.pipeline.map((node, index) => {
              const isSelected = selectedNodeIndex === index;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedNodeIndex(index)}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all duration-200 cursor-pointer relative group ${
                    isSelected
                      ? 'bg-indigo-600/25 border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className={`font-mono text-[10px] font-bold ${
                          isSelected ? 'text-indigo-300' : 'text-slate-500'
                        }`}
                      >
                        0{node.stepNumber}
                      </span>
                      {index < project.pipeline.length - 1 && (
                        <ChevronRight className="w-3 h-3 text-slate-600 hidden lg:block" />
                      )}
                    </div>
                    <div
                      className={`font-display font-bold text-xs tracking-tight leading-tight ${
                        isSelected ? 'text-white' : 'text-slate-300 group-hover:text-slate-100'
                      }`}
                    >
                      {node.label}
                    </div>
                  </div>

                  <div className="mt-2 pt-2 border-t border-slate-800/60 text-[9px] font-mono text-slate-400 truncate">
                    {node.badge}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Node Detail Inspector HUD */}
          <div className="p-5 rounded-2xl bg-[#090d16] border border-indigo-500/25 relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-md bg-indigo-600/30 border border-indigo-400/40 text-indigo-300 flex items-center justify-center font-mono text-xs font-bold">
                  {activeNode.stepNumber}
                </span>
                <div>
                  <h5 className="font-display font-bold text-sm text-white">
                    {activeNode.label}
                  </h5>
                  <span className="font-mono text-xs text-indigo-400">
                    {activeNode.subtitle}
                  </span>
                </div>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 self-start sm:self-auto">
                Component: {activeNode.badge}
              </span>
            </div>
            <p className="pt-3 text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              {activeNode.detail}
            </p>
          </div>
        </div>

        {/* Applied Techniques & Core Architecture Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 pt-8 border-t border-slate-800/80">
          {/* Applied Capabilities */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800/90">
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-indigo-400 uppercase">
              <Scan className="w-4 h-4" />
              <span>Applied Analysis Capabilities</span>
            </div>
            <ul className="space-y-2.5">
              {project.appliedTechniques.map((tech) => (
                <li key={tech} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deep Learning Architecture */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800/90">
            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-purple-400 uppercase">
              <Cpu className="w-4 h-4" />
              <span>Deep Learning Architecture</span>
            </div>
            <div className="space-y-3">
              {project.coreArchitecture.map((arch) => (
                <div
                  key={arch}
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-purple-500/20 text-slate-200 font-mono text-xs sm:text-sm flex items-center justify-between"
                >
                  <span>{arch}</span>
                  <span className="text-[11px] text-purple-300 font-semibold px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/30">
                    URL Classification
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Model Evaluation Framework (Visual Representation, No Invented Numbers) */}
        <div className="pt-6 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase">
              <Sliders className="w-4 h-4" />
              <span>Evaluation Framework</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">
              Standard statistical validation criteria
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.evaluationMetrics.map((metric) => (
              <div
                key={metric}
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 text-center flex flex-col items-center justify-center hover:border-emerald-500/30 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 mb-2" />
                <span className="font-display font-bold text-sm sm:text-base text-white">
                  {metric}
                </span>
                <span className="font-mono text-[10px] text-slate-400 mt-1 uppercase tracking-wider">
                  Model Criterion
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Configurable Link Modal */}
      <ProjectLinkModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
