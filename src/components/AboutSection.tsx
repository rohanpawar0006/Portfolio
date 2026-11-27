import React from 'react';
import { personalInfo } from '@/data/personal';
import { Compass, Layers, Cpu, BarChart3 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Philosophy & Narrative */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs text-cyan-400 font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>Professional Snapshot</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Practical AI Engineering, Not Just Prototypes
          </h2>

          <blockquote className="p-4 rounded-2xl glass-panel border-l-2 border-l-cyan-400 text-sm sm:text-base font-medium text-[var(--text-primary)] italic">
            &ldquo;{personalInfo.philosophy}&rdquo;
          </blockquote>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {personalInfo.title} based in {personalInfo.location}. My work spans real-time
            computer vision models, framework-free RAG pipelines, LLM-powered business workflow
            agents, and enterprise procurement and sales analytics.
          </p>
        </div>

        {/* Right: Core Focus & Interests Grid */}
        <div className="lg:col-span-7 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass-panel p-4 rounded-2xl">
              <Cpu className="w-5 h-5 text-cyan-400 mb-2.5" />
              <h3 className="font-heading text-sm font-semibold text-[var(--text-primary)] mb-1">
                AI &amp; Agents
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Custom RAG without LangChain, tool-calling agents, and PyTorch sequence models.
              </p>
            </div>

            <div className="glass-panel p-4 rounded-2xl">
              <Layers className="w-5 h-5 text-indigo-400 mb-2.5" />
              <h3 className="font-heading text-sm font-semibold text-[var(--text-primary)] mb-1">
                Python Backends
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                FastAPI, WebSockets, REST integrations with email, calendar, and CRM systems.
              </p>
            </div>

            <div className="glass-panel p-4 rounded-2xl">
              <BarChart3 className="w-5 h-5 text-emerald-400 mb-2.5" />
              <h3 className="font-heading text-sm font-semibold text-[var(--text-primary)] mb-1">
                Data &amp; Forecasting
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Multi-year data consolidation, ABC spend analysis, and forecasting dashboards.
              </p>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3">
              Core Engineering Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {personalInfo.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium surface-subtle text-[var(--text-secondary)]"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
