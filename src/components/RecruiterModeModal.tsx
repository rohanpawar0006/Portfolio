'use client';

import React from 'react';
import { personalInfo } from '@/data/personal';
import { featuredProjects } from '@/data/projects';
import { experienceData } from '@/data/experience';
import { X, Zap, Download, Mail, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

interface RecruiterModeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterModeModal: React.FC<RecruiterModeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl glass-panel bg-[#0d0f17] border-amber-500/30 shadow-2xl overflow-hidden my-auto">
        {/* Header banner */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-amber-500/15 to-indigo-500/10 border-b border-amber-500/20 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300">
              <Zap className="w-5 h-5 fill-amber-300" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                10-Second Recruiter Snapshot
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300">
                  Fast Review
                </span>
              </h2>
              <p className="text-xs text-slate-300">
                Key qualification highlights and verified links in under 60 seconds.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          {/* Quick Profile Summary */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-extrabold text-lg text-white">{personalInfo.name}</div>
              <div className="text-xs text-cyan-300 font-mono mt-0.5">
                B.E. AIML @ SVCE Bengaluru (CGPA 7.45) • Graduating 2027
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Targeting: AI/ML Engineer | Python Backend (FastAPI) | Data Analyst
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-black hover:bg-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-semibold glass-panel glass-panel-hover text-white flex items-center gap-1.5"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Top 3 Verified Proof Points */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-mono tracking-wider text-amber-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Top 3 Engineering Proof Points
            </h3>
            <div className="grid gap-3">
              {featuredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <div className="font-semibold text-sm text-white flex items-center gap-2">
                      <span>{proj.title}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300">
                        {proj.category}
                      </span>
                    </div>
                    <div className="text-xs text-cyan-400 font-mono mt-0.5">
                      {proj.headlineMetric}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {proj.links.demo && (
                      <a
                        href={proj.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-cyan-400 hover:underline flex items-center gap-1"
                      >
                        Live Demo <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {proj.links.github && (
                      <a
                        href={proj.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1"
                      >
                        Repo <GithubIcon className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Experience Snapshot */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-mono tracking-wider text-indigo-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              Work History & Experience
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {experienceData.map((exp) => (
                <div key={exp.id} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="font-bold text-xs text-white">{exp.role}</div>
                  <div className="text-[11px] text-indigo-300 font-semibold">{exp.company}</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-1">
                    {exp.duration || exp.period} • {exp.type}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Stack */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-mono tracking-wider text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Production Stack
            </h3>
            <p className="text-xs text-slate-300 font-mono bg-white/[0.02] p-3 rounded-xl border border-white/5">
              Python • PyTorch • FastAPI • MediaPipe • ChromaDB • Gemini Flash • Next.js • SQL • Pandas
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 flex justify-end bg-white/[0.02]">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold glass-panel glass-panel-hover text-white cursor-pointer"
          >
            Back to Full Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};
