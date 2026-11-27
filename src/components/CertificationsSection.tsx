'use client';

import React from 'react';
import { certificationsData } from '@/data/certifications';
import { Award, CheckCircle2, Clock, ShieldCheck, Code2 } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs text-emerald-300 font-mono mb-3">
          <Award className="w-3.5 h-3.5 text-emerald-400" />
          <span>Accreditations & Continuous Learning</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Certifications & Milestones
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Official credentials in Agentic AI, Cloud & Generative AI, and competitive programming achievements.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificationsData.map((cert, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-2xl glass-panel glass-panel-hover border-white/10 flex flex-col justify-between ${
              idx === 0 ? 'sm:col-span-2 lg:col-span-1 border-indigo-500/40 bg-indigo-500/[0.04]' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="p-2 rounded-xl bg-white/5 text-cyan-400">
                  {cert.title.includes('LeetCode') ? (
                    <Code2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  )}
                </span>

                {cert.inProgress ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    <Clock className="w-3 h-3 text-amber-400" />
                    In Progress
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Verified
                  </span>
                )}
              </div>

              <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 leading-snug">
                {cert.title}
              </h3>

              <div className="text-xs font-medium text-slate-300 mb-1">
                {cert.issuer}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Issued: {cert.issuedDate}</span>
              {cert.validUntil && <span className="text-indigo-300">Valid: {cert.validUntil}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
