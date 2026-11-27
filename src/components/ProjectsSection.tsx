import React from 'react';
import Link from 'next/link';
import { featuredProjects } from '@/data/projects';
import { ArrowRight, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs text-cyan-400 font-mono mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>Featured Engineering Work</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight mb-3">
          Selected AI Systems &amp; Applications
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          Two production-focused systems built end-to-end — from computer vision and WebSocket
          streaming to a custom RAG pipeline implemented from scratch without LangChain.
        </p>
      </div>

      {/* Dominant 2-Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {featuredProjects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col justify-between rounded-2xl glass-panel glass-panel-hover p-6 sm:p-7 group"
          >
            <div>
              {/* Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/25">
                    PROJECT {project.number}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {project.category}
                  </span>
                </div>

                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {project.status}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] group-hover:text-cyan-400 transition-colors mb-1">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-cyan-400 mb-3">&ldquo;{project.tagline}&rdquo;</p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                {project.shortDescription}
              </p>

              {/* Inline Architecture Pipeline */}
              <div className="mb-5 p-3.5 rounded-xl surface-subtle">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                  System Architecture
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                  {project.caseStudy.architectureFlow.map((step, idx) => (
                    <React.Fragment key={step.label}>
                      <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {step.label}
                      </span>
                      {idx < project.caseStudy.architectureFlow.length - 1 && (
                        <span className="text-[var(--text-muted)]">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <ul className="space-y-1.5 mb-5">
                {project.keyFeatures.slice(0, 4).map((feature) => (
                  <li
                    key={feature}
                    className="text-xs sm:text-sm text-[var(--text-secondary)] flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono surface-subtle text-[var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3">
              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border border-indigo-500/25 text-xs font-semibold transition-colors"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <div className="flex items-center gap-2">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl surface-subtle text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/25 text-xs font-semibold transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
