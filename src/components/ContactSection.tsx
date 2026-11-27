import React from 'react';
import { personalInfo } from '@/data/personal';
import { Mail, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ResumeButton } from './ResumeButton';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center">
        {/* Ambient glow */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full surface-subtle text-xs text-cyan-400 font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
            Let&apos;s Build Practical AI Systems Together
          </h2>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-8 leading-relaxed">
            Open to AI/ML Engineering, AI Agent Development, Python Backend, and Data Analytics
            roles. Feel free to reach out directly.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/20 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Email Rohan</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl glass-panel glass-panel-hover text-[var(--text-primary)] font-semibold text-sm inline-flex items-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            </a>
            <ResumeButton variant="secondary" />
          </div>

          {/* Metadata badges */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono text-[var(--text-secondary)] pt-6 border-t border-[var(--border-subtle)]">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personalInfo.email}</span>
            </a>
            <div className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
              <span>{personalInfo.location}</span>
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-indigo-400" />
              <span>github.com/rohanpawar0006</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
