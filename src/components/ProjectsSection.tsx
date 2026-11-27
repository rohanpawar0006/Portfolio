'use client';

import React, { useState } from 'react';
import { featuredProjects } from '@/data/projects';
import { Project } from '@/types';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, FileCode, Layers, Activity } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs text-cyan-300 font-mono mb-3">
          <Activity className="w-3.5 h-3.5 text-cyan-400" />
          <span>Proof Over Claims</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Featured Engineering Projects
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Production systems, custom RAG pipelines, and enterprise forecasting models backed by live demos, open repos, and verified metrics.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between rounded-2xl glass-panel glass-panel-hover p-6 border-white/10 group relative"
          >
            {/* Top metadata */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {project.category}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {project.status}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-xs text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                {project.tagline}
              </p>

              {/* Headline Proof Metric */}
              <div className="mb-5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2 text-xs font-semibold text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>{project.headlineMetric}</span>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.slice(0, 4).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
              <button
                onClick={() => setSelectedProject(project)}
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Deep Case Study</span>
              </button>

              <div className="flex items-center gap-2">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
                    title="Open Live Deployment"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
