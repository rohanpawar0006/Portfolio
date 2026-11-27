import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { featuredProjects } from '@/data/projects';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProjectArchitectureDiagram } from '@/components/ProjectArchitectureDiagram';
import { GithubIcon } from '@/components/Icons';
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Layers,
  UserCheck,
  Wrench,
} from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = featuredProjects.find((p) => p.id === id);
  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = featuredProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)]">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 max-w-5xl mx-auto w-full space-y-10">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>

        {/* Project Header */}
        <header className="glass-panel rounded-3xl p-6 sm:p-8 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/25">
                PROJECT {project.number}
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)]">{project.category}</span>
            </div>
            <span className="px-3 py-0.5 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25">
              {project.status}
            </span>
          </div>

          <div>
            <h1 className="font-heading text-3xl sm:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-2">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-cyan-400 font-medium mb-3">
              &ldquo;{project.tagline}&rdquo;
            </p>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          {/* Technologies Used */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-mono surface-subtle text-[var(--text-primary)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-500/20"
              >
                <span>Open Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-panel glass-panel-hover text-[var(--text-primary)] text-xs sm:text-sm font-semibold"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </header>

        {/* Problem & Solution */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel rounded-2xl p-6 space-y-2.5">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Problem Statement
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 space-y-2.5">
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400">
              My Solution
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </section>

        {/* Architecture Diagram */}
        <section>
          <ProjectArchitectureDiagram steps={caseStudy.architectureFlow} />
        </section>

        {/* Key Features & Individual Contribution */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel rounded-2xl p-6 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Key Capabilities</span>
            </h2>
            <ul className="space-y-2.5">
              {project.keyFeatures.map((feat) => (
                <li
                  key={feat}
                  className="text-sm text-[var(--text-secondary)] flex items-start gap-2.5"
                >
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel rounded-2xl p-6 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <UserCheck className="w-4 h-4" />
              <span>My Individual Contribution</span>
            </h2>
            <ul className="space-y-2.5">
              {caseStudy.individualContribution.map((contrib) => (
                <li
                  key={contrib}
                  className="text-sm text-[var(--text-secondary)] flex items-start gap-2.5"
                >
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>{contrib}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Important Engineering Decisions */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>Important Engineering Decisions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudy.keyDecisions.map((kd) => (
              <div key={kd.decision} className="glass-panel rounded-2xl p-5 space-y-2.5">
                <h3 className="font-heading text-sm font-bold text-[var(--text-primary)]">
                  {kd.decision}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  <span className="font-mono text-cyan-400">Why: </span>
                  {kd.rationale}
                </p>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  <span className="font-mono text-amber-400">Trade-off: </span>
                  {kd.tradeOff}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Results */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 glass-panel rounded-2xl p-6 space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              <span>Engineering Challenges</span>
            </h2>
            <ul className="space-y-2.5">
              {caseStudy.challenges.map((ch) => (
                <li key={ch} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>{ch}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
            {caseStudy.resultsAndMetrics.map((rm) => (
              <div key={rm.label} className="glass-panel rounded-2xl p-4">
                <div className="text-xs font-mono text-emerald-400">{rm.label}</div>
                <div className="font-heading text-lg font-bold text-[var(--text-primary)] mt-0.5">
                  {rm.value}
                </div>
                <div className="text-xs text-[var(--text-secondary)] mt-1">{rm.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Limitations & Future Scope */}
        <section className="glass-panel rounded-2xl p-6 border-amber-500/25 space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span>Results Scope &amp; Limitations</span>
          </h2>
          <ul className="space-y-2">
            {caseStudy.limitationsAndFuture.map((lim) => (
              <li
                key={lim}
                className="text-sm text-[var(--text-secondary)] flex items-start gap-2.5"
              >
                <span className="text-amber-400 mt-1">•</span>
                <span>{lim}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
