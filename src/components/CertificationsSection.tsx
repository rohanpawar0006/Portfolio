import React from 'react';
import { certificationsData } from '@/data/certifications';
import { Award, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs text-emerald-400 font-mono mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>Certifications</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight mb-3">
          Verified Credentials &amp; Specializations
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          Formal certifications across Agentic AI, Generative AI, SQL, GitHub, Docker, and Natural
          Language Processing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificationsData.map((cert) => (
          <div
            key={cert.title}
            className="p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <ShieldCheck className="w-4 h-4" />
                </span>

                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                  <CheckCircle2 className="w-3 h-3" />
                  {cert.issuedDate}
                </span>
              </div>

              <h3 className="font-heading text-base font-bold text-[var(--text-primary)] mb-1.5 leading-snug">
                {cert.title}
              </h3>

              <p className="text-xs font-medium text-[var(--text-secondary)]">{cert.issuer}</p>
            </div>

            {cert.credentialUrl && (
              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)]">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:underline"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
