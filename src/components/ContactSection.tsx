'use client';

import React from 'react';
import { personalInfo } from '@/data/personal';
import { Mail, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border-white/10 relative overflow-hidden text-center">
        {/* Ambient glow */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/15 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs text-cyan-300 font-mono mb-4">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s Build Impactful AI Systems Together
          </h2>

          <p className="text-sm sm:text-base text-slate-400 mb-8 leading-relaxed">
            I am currently open for full-time AI/ML Engineering, Python Backend Developer, and Data Analytics roles & internships.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Email Rohan Directly</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl glass-panel glass-panel-hover text-slate-200 hover:text-white font-semibold text-sm flex items-center justify-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Metadata badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-6 border-t border-white/5">
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GithubIcon className="w-3.5 h-3.5 text-indigo-400" />
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                github.com/rohanpawar0006
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
