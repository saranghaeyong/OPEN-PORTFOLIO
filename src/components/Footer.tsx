import { Terminal } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer
      id="portfolio-footer"
      className="relative border-t border-slate-900 bg-[#07090e] py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-5 h-5 rounded border border-indigo-500/40 bg-indigo-950/40 flex items-center justify-center text-indigo-400 text-xs">
              <Terminal className="w-3 h-3" />
            </div>
            <span className="font-display font-bold text-base tracking-wider text-white">
              {PORTFOLIO_CONFIG.name}
            </span>
          </div>
          <p className="font-mono text-xs text-slate-400">
            MCA Graduate | Software Development | Python | Machine Learning
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-1 font-mono text-xs text-slate-500">
          <span>&copy; {currentYear} SARANG R N. All rights reserved.</span>
          <span className="text-[11px] text-slate-600">
            Cochin University of Science and Technology Alumni
          </span>
        </div>
      </div>
    </footer>
  );
}
