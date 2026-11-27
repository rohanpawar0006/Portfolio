import React from 'react';
import { experienceData } from '@/data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs text-indigo-400 font-mono mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Experience</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight mb-3">
          Internships &amp; Applied Engineering
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          Hands-on industry experience building enterprise analytics &amp; forecasting workflows and
          LLM-powered AI agents integrated with business systems.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l border-[var(--border-subtle)] ml-3 sm:ml-6 space-y-8">
        {experienceData.map((item) => (
          <div key={item.id} className="relative pl-6 sm:pl-9 group">
            {/* Timeline Node */}
            <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-[var(--bg-base)] border-2 border-indigo-400 group-hover:border-cyan-400 transition-colors flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:bg-cyan-400"></div>
            </div>

            <article className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl">
              {/* Role Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] group-hover:text-cyan-400 transition-colors">
                      {item.role}
                    </h3>
                    {item.isClientProject && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                        Enterprise Analytics
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-indigo-400">{item.company}</div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg surface-subtle">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.duration || item.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg surface-subtle">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>

              <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                {item.summary}
              </p>

              {/* Highlights List */}
              <ul className="space-y-2 mb-5">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-xs sm:text-sm text-[var(--text-secondary)] flex items-start gap-2.5 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Applied */}
              <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-[var(--border-subtle)]">
                <span className="text-[11px] font-mono text-[var(--text-muted)] mr-1 inline-flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-cyan-400" />
                  Highlights:
                </span>
                {item.skillsApplied.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono surface-subtle text-[var(--text-secondary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};
