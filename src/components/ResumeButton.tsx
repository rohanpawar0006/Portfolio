'use client';

import React, { useEffect, useState } from 'react';
import { Download, FileText, AlertCircle } from 'lucide-react';
import { personalInfo } from '@/data/personal';

interface ResumeButtonProps {
  variant?: 'primary' | 'secondary' | 'compact';
  className?: string;
}

export const ResumeButton: React.FC<ResumeButtonProps> = ({
  variant = 'secondary',
  className = '',
}) => {
  const [hasResume, setHasResume] = useState<boolean | null>(null);
  const [showMissingNotice, setShowMissingNotice] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(personalInfo.resumePath, { method: 'HEAD' })
      .then((res) => {
        if (active) setHasResume(res.ok);
      })
      .catch(() => {
        if (active) setHasResume(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const baseStyles =
    variant === 'primary'
      ? 'px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/20'
      : variant === 'compact'
        ? 'px-3 py-1.5 rounded-xl glass-panel glass-panel-hover text-xs font-semibold text-[var(--text-primary)]'
        : 'px-6 py-3 rounded-xl glass-panel glass-panel-hover text-[var(--text-primary)] font-semibold text-sm';

  if (hasResume) {
    return (
      <a
        href={personalInfo.resumePath}
        download="Rohan_Pawar_Resume.pdf"
        className={`inline-flex items-center justify-center gap-2 transition-all ${baseStyles} ${className}`}
      >
        <Download className="w-4 h-4 text-cyan-400" />
        <span>{variant === 'compact' ? 'Resume' : 'Download Resume'}</span>
      </a>
    );
  }

  return (
    <div className="relative inline-flex flex-col items-start">
      <button
        type="button"
        onClick={() => setShowMissingNotice((prev) => !prev)}
        className={`inline-flex items-center justify-center gap-2 transition-all cursor-pointer ${baseStyles} ${className}`}
        title="Resume PDF (public/resume.pdf) pending upload"
      >
        <FileText className="w-4 h-4 text-cyan-400" />
        <span>{variant === 'compact' ? 'Resume' : 'Download Resume'}</span>
      </button>

      {showMissingNotice && (
        <div
          role="status"
          className="mt-2 p-3 rounded-xl glass-panel border border-amber-500/30 text-xs text-[var(--text-secondary)] max-w-xs z-30 shadow-xl"
        >
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[var(--text-primary)] mb-0.5">
                Resume PDF Not Yet Added
              </p>
              <p>
                Add <code className="text-cyan-400">public/resume.pdf</code> to enable direct PDF
                download, or{' '}
                <a
                  href={`mailto:${personalInfo.email}?subject=Resume%20Request%20-%20Rohan%20Pawar`}
                  className="text-cyan-400 underline hover:text-cyan-300"
                >
                  request via email
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
