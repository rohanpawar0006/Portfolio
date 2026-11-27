'use client';

import React from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data/personal';
import { featuredProjects } from '@/data/projects';
import { experienceData } from '@/data/experience';
import { X, Zap, Mail, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { ResumeButton } from './ResumeButton';

interface RecruiterModeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterModeModal: React.FC<RecruiterModeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Recruiter View Summary"
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl glass-panel border-amber-500/30 shadow-2xl overflow-hidden my-auto">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-amber-500/15 to-indigo-500/10 border-b border-[var(--border-subtle)] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
              <Zap className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <h2 className="font-heading text-base sm:text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                Recruiter View
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400">
                  Executive Summary
                </span>
              </h2>
              <p className="text-xs text-[var(--text-secondary)]">
                Condensed overview of education, internships, featured projects, and stack.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Recruiter View"
            className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-[var(--text-secondary)]">
          {/* Candidate Snapshot */}
          <div className="p-4 rounded-xl surface-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-heading font-bold text-lg text-[var(--text-primary)]">
                {personalInfo.name}
              </div>
              <div className="text-xs text-cyan-400 font-mono mt-0.5">
                {personalInfo.education.degree} • {personalInfo.education.shortCollege} (
                {personalInfo.education.period}) • CGPA {personalInfo.education.cgpa}
              </div>
              <div className="text-xs text-[var(--text-secondary)] mt-1">
                Target Roles: {personalInfo.title}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
              <ResumeButton variant="compact" />
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-mono tracking-wider text-amber-400">
              Featured Projects
            </h3>
            <div className="grid gap-3">
              {featuredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-3.5 rounded-xl surface-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <div className="font-semibold text-sm text-[var(--text-primary)] flex items-center gap-2">
                      <span>{proj.title}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md surface-subtle text-[var(--text-muted)]">
                        {proj.category}
                      </span>
                    </div>
                    <div className="text-xs text-cyan-400 font-mono mt-0.5">
                      {proj.headlineMetric}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <Link
                      href={`/projects/${proj.id}`}
                      onClick={onClose}
                      className="text-xs font-semibold text-indigo-400 hover:underline"
                    >
                      Case Study
                    </Link>
                    {proj.links.demo && (
                      <a
                        href={proj.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-cyan-400 hover:underline inline-flex items-center gap-1"
                      >
                        Demo <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {proj.links.github && (
                      <a
                        href={proj.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-1"
                      >
                        Repo <GithubIcon className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-mono tracking-wider text-indigo-400">
              Internship Experience
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {experienceData.map((exp) => (
                <div key={exp.id} className="p-3.5 rounded-xl surface-subtle">
                  <div className="font-bold text-xs text-[var(--text-primary)]">{exp.role}</div>
                  <div className="text-xs text-indigo-400 font-semibold">{exp.company}</div>
                  <div className="text-[11px] font-mono text-[var(--text-muted)] mt-1">
                    {exp.duration} • {exp.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Technical Stack */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-mono tracking-wider text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Main Technical Stack
            </h3>
            <p className="text-xs text-[var(--text-primary)] font-mono surface-subtle p-3 rounded-xl">
              Python • PyTorch • MediaPipe • FastAPI • ChromaDB • Sentence-Transformers • Gemini
              API • Anthropic Claude API • SQL • Pandas • React • Docker
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[var(--border-subtle)] flex justify-between items-center surface-subtle">
          <span className="text-xs font-mono text-[var(--text-muted)]">
            {personalInfo.email} • {personalInfo.location}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold glass-panel glass-panel-hover text-[var(--text-primary)] cursor-pointer"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};
