'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Cpu, Database, Hand, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ResumeButton } from './ResumeButton';
import { personalInfo } from '@/data/personal';

const pipelineNodes = [
  {
    id: 'vision',
    label: 'SignBridge AI',
    sublabel: '21 3D Landmarks → BiLSTM',
    tag: 'Computer Vision',
    icon: Hand,
  },
  {
    id: 'rag',
    label: 'VaultMind-RAG',
    sublabel: 'Chunking → ChromaDB → Gemini',
    tag: 'Custom RAG',
    icon: Database,
  },
  {
    id: 'agents',
    label: 'Agentic Workflows',
    sublabel: 'Claude API → Tool Calling → REST',
    tag: 'AI Agents',
    icon: Cpu,
  },
];

// Stylized 21-point hand landmark topology inspired by MediaPipe Hands
const handLandmarks = [
  { x: 110, y: 185 }, // 0 wrist
  { x: 82, y: 165 }, { x: 65, y: 140 }, { x: 52, y: 118 }, { x: 42, y: 98 }, // thumb
  { x: 85, y: 118 }, { x: 80, y: 86 }, { x: 78, y: 62 }, { x: 77, y: 42 }, // index
  { x: 105, y: 112 }, { x: 106, y: 76 }, { x: 107, y: 50 }, { x: 108, y: 28 }, // middle
  { x: 125, y: 118 }, { x: 132, y: 84 }, { x: 136, y: 60 }, { x: 139, y: 40 }, // ring
  { x: 142, y: 130 }, { x: 154, y: 104 }, { x: 163, y: 86 }, { x: 170, y: 70 }, // pinky
];

const handConnections = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [0, 9], [9, 10], [10, 11], [11, 12],
  [0, 13], [13, 14], [14, 15], [15, 16],
  [0, 17], [17, 18], [18, 19], [19, 20],
  [5, 9], [9, 13], [13, 17],
];

export const Hero: React.FC = () => {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % pipelineNodes.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden bg-grid-pattern"
    >
      {/* Subtle Ambient Gradient Accents */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Positioning & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Availability Indicator */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel text-xs font-mono text-cyan-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wider uppercase">{personalInfo.roleBadge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08] mb-5">
            {personalInfo.heroHeadline}
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-7">
            {personalInfo.heroSupportingText}
          </p>

          {/* Engineering Workflow Pill */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--text-muted)] mb-8">
            <span className="px-2.5 py-1 rounded-md surface-subtle text-[var(--text-primary)]">BUILD</span>
            <span>→</span>
            <span className="px-2.5 py-1 rounded-md surface-subtle text-[var(--text-primary)]">EXPERIMENT</span>
            <span>→</span>
            <span className="px-2.5 py-1 rounded-md surface-subtle text-[var(--text-primary)]">ENGINEER</span>
            <span>→</span>
            <span className="px-2.5 py-1 rounded-md surface-subtle text-cyan-400">DEPLOY</span>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/20 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <ResumeButton variant="secondary" />

            <div className="flex items-center gap-2 ml-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="p-3 rounded-xl glass-panel glass-panel-hover text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="p-3 rounded-xl glass-panel glass-panel-hover text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Verified Metadata */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[var(--text-muted)]">
            <span>{personalInfo.education.shortCollege} • {personalInfo.education.period}</span>
            <span>•</span>
            <span>{personalInfo.location}</span>
            <span>•</span>
            <span className="text-emerald-400">LuminAI &amp; SOiTA Intern</span>
          </div>
        </div>

        {/* Right Column: Lightweight Interactive AI Architecture & Hand-Landmark Visual */}
        <div className="lg:col-span-5">
          <div className="glass-panel rounded-2xl p-5 sm:p-6 relative overflow-hidden">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-[var(--text-secondary)]">
                  rohan_ai_systems.py
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <Sparkles className="w-3 h-3" />
                Active Systems
              </span>
            </div>

            {/* Interactive Hand-Landmark + Architecture Topology */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-5">
              {/* MediaPipe 21-Landmark SVG */}
              <div className="sm:col-span-5 surface-subtle rounded-xl p-3 flex flex-col items-center justify-center">
                <svg
                  viewBox="0 0 210 210"
                  className="w-36 h-36"
                  role="img"
                  aria-label="MediaPipe 21 3D hand landmark visualization inspired by SignBridge AI"
                >
                  {handConnections.map(([a, b], idx) => (
                    <line
                      key={idx}
                      x1={handLandmarks[a].x}
                      y1={handLandmarks[a].y}
                      x2={handLandmarks[b].x}
                      y2={handLandmarks[b].y}
                      stroke="rgba(6, 182, 212, 0.45)"
                      strokeWidth="1.6"
                    />
                  ))}
                  {handLandmarks.map((pt, idx) => (
                    <circle
                      key={idx}
                      cx={pt.x}
                      cy={pt.y}
                      r={idx === 0 ? 4 : 2.8}
                      className={idx % 4 === 0 ? 'fill-cyan-400' : 'fill-indigo-400'}
                    />
                  ))}
                </svg>
                <span className="text-[10px] font-mono text-[var(--text-muted)] mt-1">
                  21 Hand Landmarks (ISL)
                </span>
              </div>

              {/* Active AI Pipeline Nodes */}
              <div className="sm:col-span-7 space-y-2.5">
                {pipelineNodes.map((node, idx) => {
                  const Icon = node.icon;
                  const isActive = activeNode === idx;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setActiveNode(idx)}
                      className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-indigo-500/10 border-indigo-500/40 shadow-sm'
                          : 'surface-subtle hover:border-[var(--border-active)]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                          <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-indigo-400'}`} />
                          {node.label}
                        </span>
                        <span className="text-[10px] font-mono text-cyan-400">{node.tag}</span>
                      </div>
                      <p className="text-[11px] font-mono text-[var(--text-secondary)]">
                        {node.sublabel}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Compact Stack Readout */}
            <div className="surface-subtle rounded-xl p-3 font-mono text-[11px] text-[var(--text-secondary)] space-y-1">
              <div>
                <span className="text-cyan-400">stack</span> = [
                <span className="text-[var(--text-primary)]">&quot;PyTorch&quot;</span>,{' '}
                <span className="text-[var(--text-primary)]">&quot;FastAPI&quot;</span>,{' '}
                <span className="text-[var(--text-primary)]">&quot;ChromaDB&quot;</span>,{' '}
                <span className="text-[var(--text-primary)]">&quot;Claude/Gemini&quot;</span>]
              </div>
              <div>
                <span className="text-indigo-400">focus</span> ={' '}
                <span className="text-emerald-400">&quot;Practical AI Systems &amp; Agents&quot;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
