'use client';

import React from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data/personal';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]/70 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1">
            <span className="font-heading font-bold text-[var(--text-primary)] text-base">
              {personalInfo.name}
            </span>
            <span className="text-xs text-cyan-400 font-mono">
              • {personalInfo.education.shortDegree}
            </span>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">
            {personalInfo.education.college} • {personalInfo.education.period}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-[var(--text-secondary)]">
          <Link href="/#about" className="hover:text-cyan-400 transition-colors">
            About
          </Link>
          <Link href="/#projects" className="hover:text-cyan-400 transition-colors">
            Projects
          </Link>
          <Link href="/#experience" className="hover:text-cyan-400 transition-colors">
            Experience
          </Link>
          <Link href="/#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </Link>
          <Link href="/#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </Link>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-2.5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl glass-panel glass-panel-hover text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            aria-label="GitHub"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl glass-panel glass-panel-hover text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-xl glass-panel glass-panel-hover text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            aria-label="Email"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-xl glass-panel glass-panel-hover text-cyan-400 cursor-pointer"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[var(--text-muted)] gap-2">
        <span>© 2026 Rohan Pawar. Bengaluru, India.</span>
        <span>BUILD → EXPERIMENT → ENGINEER → DEPLOY</span>
      </div>
    </footer>
  );
};
