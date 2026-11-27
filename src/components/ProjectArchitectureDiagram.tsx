import React from 'react';
import { ArchitectureStep } from '@/types';
import { ArrowRight } from 'lucide-react';

interface ProjectArchitectureDiagramProps {
  steps: ArchitectureStep[];
  title?: string;
}

export const ProjectArchitectureDiagram: React.FC<ProjectArchitectureDiagramProps> = ({
  steps,
  title = 'End-to-End Architecture Pipeline',
}) => {
  return (
    <div className="glass-panel rounded-2xl p-5 sm:p-6">
      <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-4">
        {title}
      </div>
      <div className="flex flex-wrap items-center gap-2.5">
        {steps.map((step, idx) => (
          <React.Fragment key={step.label}>
            <div className="surface-subtle rounded-xl px-3.5 py-2.5 min-w-[110px]">
              <div className="text-xs font-semibold text-[var(--text-primary)]">{step.label}</div>
              {step.sublabel && (
                <div className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">
                  {step.sublabel}
                </div>
              )}
            </div>
            {idx < steps.length - 1 && (
              <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" aria-hidden="true" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
