'use client';

import React from 'react';
import { experienceData } from '@/data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs text-indigo-300 font-mono mb-3">
          <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
          <span>Work History & Leadership</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Experience & Technical Impact
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Hands-on software and AI internships, client business intelligence, and campus engineering leadership.
        </p>
      </div>

      <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-10">
        {experienceData.map((item) => (
          <div key={item.id} className="relative pl-6 sm:pl-8 group">
            {/* Pulsating timeline node */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0d0f17] border-2 border-indigo-400 group-hover:border-cyan-400 transition-colors flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:bg-cyan-400"></div>
            </div>

            <div className="glass-panel glass-panel-hover p-6 rounded-2xl border-white/10">
              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-indigo-300">
                    {item.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/5">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{item.duration || item.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/5">
                    <MapPin className="w-3 h-3 text-purple-400" />
                    <span>{item.location}</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Highlights List */}
              <ul className="space-y-2 mb-5">
                {item.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Applied Badges */}
              <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/5">
                <span className="text-[11px] font-mono text-slate-400 mr-1 flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-cyan-400" />
                  Stack:
                </span>
                {item.skillsApplied.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
