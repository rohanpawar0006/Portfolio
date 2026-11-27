import React from 'react';
import { personalInfo } from '@/data/personal';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { education } = personalInfo;

  return (
    <section id="education" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full surface-subtle text-xs text-cyan-400 font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            {education.degree}
          </h2>

          <p className="text-sm sm:text-base font-medium text-indigo-400">{education.college}</p>
        </div>

        <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2.5 shrink-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl surface-subtle text-xs font-mono text-[var(--text-primary)]">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>{education.period}</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400">
            <Award className="w-3.5 h-3.5" />
            <span>CGPA: {education.cgpa}</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl surface-subtle text-xs font-mono text-[var(--text-secondary)]">
            <MapPin className="w-3.5 h-3.5 text-indigo-400" />
            <span>{personalInfo.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
