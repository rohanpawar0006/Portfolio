import React from 'react';
import { skillCategories } from '@/data/skills';
import { SkillCategory } from '@/types';
import {
  Brain,
  Code2,
  Package,
  Server,
  Layout,
  Database,
  Wrench,
  Cpu,
} from 'lucide-react';

const iconMap: Record<SkillCategory['iconName'], React.ComponentType<{ className?: string }>> = {
  brain: Brain,
  code: Code2,
  library: Package,
  server: Server,
  layout: Layout,
  database: Database,
  wrench: Wrench,
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs text-cyan-400 font-mono mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Skills</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight mb-3">
          Engineering Stack &amp; Practical Context
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          Organized by domain with concise descriptions and direct references to the projects and
          internships where each technology was applied.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => {
          const Icon = iconMap[cat.iconName];
          return (
            <div
              key={cat.id}
              className={`glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col ${
                cat.id === 'ai-ml' ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[var(--border-subtle)]">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-base font-bold text-[var(--text-primary)]">
                  {cat.category}
                </h3>
              </div>

              <div
                className={`grid gap-3 ${
                  cat.id === 'ai-ml' ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
                }`}
              >
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl surface-subtle flex flex-col justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-sm font-semibold text-[var(--text-primary)]">
                          {skill.name}
                        </span>
                        <div className="flex flex-wrap gap-1 justify-end">
                          {skill.backedByProjects.map((ref) => (
                            <span
                              key={ref}
                              className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                            >
                              {ref}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
