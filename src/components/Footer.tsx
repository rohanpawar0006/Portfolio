'use client';

import React from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data/personal';
import { Mail, Heart, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#08090d]/80 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-white text-base">{personalInfo.name}</span>
            <span className="text-xs text-cyan-400 font-mono">• {personalInfo.degree}</span>
          </div>
          <p className="text-xs text-slate-400">
            {personalInfo.college} • Graduating {personalInfo.graduationYear}
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 text-xs text-slate-400">
          <Link href="#projects" className="hover:text-cyan-400 transition-colors">
            Projects
          </Link>
          <Link href="#experience" className="hover:text-cyan-400 transition-colors">
            Experience
          </Link>
          <Link href="#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </Link>
          <Link href="#certifications" className="hover:text-cyan-400 transition-colors">
            Certifications
          </Link>
          <Link href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </Link>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl glass-panel glass-panel-hover text-slate-400 hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl glass-panel glass-panel-hover text-slate-400 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-xl glass-panel glass-panel-hover text-slate-400 hover:text-white transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl glass-panel glass-panel-hover text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
        <span>© 2026 Rohan Pawar. Built with Next.js, TypeScript & Gemini.</span>
        <span>Philosophy: Proof Over Claims</span>
      </div>
    </footer>
  );
};
