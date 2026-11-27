'use client';

import React from 'react';
import { Project } from '@/types';
import { X, ExternalLink, CheckCircle2, AlertTriangle, ArrowRight, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl glass-panel bg-[#0d0f17] border-white/10 shadow-2xl overflow-hidden my-auto">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-start justify-between gap-4 bg-white/[0.02]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                {project.status}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{project.title}</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">{project.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed">
          {/* External Links */}
          <div className="flex flex-wrap gap-3 pb-2">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500 text-black hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold glass-panel glass-panel-hover text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          {/* Problem */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-mono tracking-wider text-cyan-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              The Problem & Context
            </h3>
            <p className="bg-white/[0.02] p-4 rounded-xl border border-white/5">{caseStudy.problem}</p>
          </div>

          {/* Approach & Pipeline */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-mono tracking-wider text-indigo-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              Technical Approach & Architecture
            </h3>
            <p className="bg-white/[0.02] p-4 rounded-xl border border-white/5">{caseStudy.approach}</p>
          </div>

          {/* Key Decisions & Trade-Offs Matrix */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-mono tracking-wider text-purple-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" />
              Key Architectural Decisions & Trade-offs
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {caseStudy.keyDecisions.map((kd, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
                  <div className="font-semibold text-xs text-white flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    {kd.decision}
                  </div>
                  <div className="text-[12px] text-slate-300">
                    <span className="text-slate-400 font-mono">Why:</span> {kd.rationale}
                  </div>
                  <div className="text-[12px] text-amber-300/90">
                    <span className="text-amber-400/80 font-mono">Trade-off:</span> {kd.tradeOff}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results & Metrics */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-mono tracking-wider text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Verified Results & Metrics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {caseStudy.resultsAndMetrics.map((rm, idx) => (
                <div key={idx} className="glass-panel p-3.5 rounded-xl text-center border-emerald-500/20">
                  <div className="text-xl font-extrabold text-white mb-0.5">{rm.value}</div>
                  <div className="text-xs font-semibold text-emerald-300 mb-1">{rm.label}</div>
                  <div className="text-[11px] text-slate-400 leading-tight">{rm.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Honest Limitations & Future Work */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-mono tracking-wider text-amber-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Honest Limitations & Next Steps
            </h3>
            <ul className="space-y-1.5 bg-amber-500/[0.04] border border-amber-500/20 p-4 rounded-xl">
              {caseStudy.limitationsAndFuture.map((lim, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 flex justify-end bg-white/[0.02]">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold glass-panel glass-panel-hover text-white cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
