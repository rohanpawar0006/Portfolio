'use client';

import React from 'react';
import { skillCategories } from '@/data/skills';
import { Cpu, ShieldCheck, Check } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs text-purple-300 font-mono mb-3">
          <Cpu className="w-3.5 h-3.5 text-purple-400" />
          <span>Verifiable Competence</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Technical Skills & Proof Links
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          No arbitrary percentage bars. Every listed technology is cross-referenced with production systems, custom RAG builds, or internships where it was used.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="glass-panel glass-panel-hover p-6 rounded-2xl border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">
                  {cat.category}
                </h3>
              </div>

              <div className="space-y-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-2 hover:bg-white/[0.05] transition-colors"
                  >
                    <span className="text-xs font-medium text-slate-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                      {skill.name}
                    </span>

                    <div className="flex gap-1 shrink-0">
                      {skill.backedByProjects.map((pId, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                          title={`Backed by verified project: ${pId}`}
                        >
                          {pId}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>All skills backed by verified code</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
