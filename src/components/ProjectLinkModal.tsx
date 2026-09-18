import { X, Code, ExternalLink, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ProjectLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectLinkModal({ isOpen, onClose }: ProjectLinkModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const codeSnippet = `// In src/config/portfolioConfig.ts:
project: {
  ...
  projectUrlPlaceholder: 'https://github.com/your-username/phishing-detection-llm-cnn',
}`;

  const copySnippet = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="glass-panel-elevated rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-indigo-500/40 relative shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-indigo-400">
            <Code className="w-5 h-5" />
          </div>
          <div>
            <h3 id="project-modal-title" className="font-display font-bold text-lg text-white">
              Project Link Configuration
            </h3>
            <p className="font-mono text-xs text-indigo-400">STATUS: READY FOR REPOSITORY URL</p>
          </div>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed mb-5">
          As requested, no fake URL has been generated for this academic project. You can link your real GitHub repository, documentation, or paper whenever you are ready:
        </p>

        <div className="relative mb-6">
          <pre className="p-4 rounded-xl bg-[#090d16] border border-slate-800 text-indigo-300 font-mono text-xs overflow-x-auto">
            <code>{codeSnippet}</code>
          </pre>
          <button
            type="button"
            onClick={copySnippet}
            className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-display text-xs font-semibold tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 transition-colors cursor-pointer"
          >
            Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
}
