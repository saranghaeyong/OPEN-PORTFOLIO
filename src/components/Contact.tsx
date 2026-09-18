import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  PhoneCall,
  Copy,
  Check,
  Github,
  Linkedin,
  FileText,
  ExternalLink,
  Code2
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolioConfig';

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const socials = PORTFOLIO_CONFIG.socialPlaceholders;

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-14">
        <div className="flex items-center gap-2 font-mono text-xs text-indigo-400 tracking-widest uppercase mb-3">
          <span className="text-slate-500">//</span>
          <span>05. COMMUNICATION NODE</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          LET'S CONNECT
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Invitation and Primary Channels */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 relative overflow-hidden">
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal mb-8">
              Interested in software development, machine learning, AI, cybersecurity and building useful digital experiences.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div
                id="contact-email-card"
                className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-indigo-500/40 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${PORTFOLIO_CONFIG.email}`}
                      className="font-display font-semibold text-white hover:text-indigo-300 transition-colors text-sm sm:text-base"
                    >
                      {PORTFOLIO_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(PORTFOLIO_CONFIG.email, 'email')}
                    title="Copy Email"
                    className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  <a
                    id="contact-email-btn"
                    href={`mailto:${PORTFOLIO_CONFIG.email}`}
                    className="px-4 py-2 rounded-lg font-display font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/40 shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Email Me</span>
                    <Send className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div
                id="contact-phone-card"
                className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-indigo-500/40 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                      Phone Contact
                    </span>
                    <a
                      href={`tel:${PORTFOLIO_CONFIG.phone}`}
                      className="font-display font-semibold text-white hover:text-purple-300 transition-colors text-sm sm:text-base font-mono"
                    >
                      {PORTFOLIO_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(PORTFOLIO_CONFIG.phone, 'phone')}
                    title="Copy Phone Number"
                    className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Copy Phone Number"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  <a
                    id="contact-call-btn"
                    href={`tel:${PORTFOLIO_CONFIG.phone}`}
                    className="px-4 py-2 rounded-lg font-display font-semibold text-xs text-white bg-purple-600 hover:bg-purple-500 border border-purple-400/40 shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Call Me</span>
                    <PhoneCall className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div
                id="contact-location-card"
                className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-3.5"
              >
                <div className="p-3 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                    Location
                  </span>
                  <span className="font-display font-medium text-white text-sm sm:text-base">
                    {PORTFOLIO_CONFIG.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Future Profiles & Documentation Hub */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-mono text-indigo-400 uppercase">
                <Code2 className="w-4 h-4" />
                <span>Configured External Endpoints</span>
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                External Profiles & Resume
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                To maintain complete authenticity, no speculative or dummy profiles are linked. These placeholders are ready to receive your links directly in <code className="text-indigo-300 font-mono text-xs">src/config/portfolioConfig.ts</code>.
              </p>

              <div className="space-y-3">
                {/* GitHub Placeholder */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-slate-400" />
                    <span className="font-mono text-xs text-slate-200">GitHub Repository</span>
                  </div>
                  {socials.github ? (
                    <a
                      href={socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                    >
                      <span>Connect</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                      Placeholder Ready
                    </span>
                  )}
                </div>

                {/* LinkedIn Placeholder */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-slate-400" />
                    <span className="font-mono text-xs text-slate-200">LinkedIn Profile</span>
                  </div>
                  {socials.linkedin ? (
                    <a
                      href={socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                    >
                      <span>Connect</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                      Placeholder Ready
                    </span>
                  )}
                </div>

                {/* Resume Placeholder */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-slate-400" />
                    <span className="font-mono text-xs text-slate-200">Resume / CV Document</span>
                  </div>
                  {socials.resume ? (
                    <a
                      href={socials.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                    >
                      <span>View File</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                      Placeholder Ready
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500">
              Direct verification channel: rnsarang@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
