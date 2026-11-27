import React from 'react';
import { getGitHubActivity } from '@/lib/github';
import { GithubIcon } from './Icons';
import { ExternalLink, Star, GitFork, Code2 } from 'lucide-react';

export async function GitHubActivitySection() {
  const profile = await getGitHubActivity();

  return (
    <section id="github" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel text-xs text-cyan-400 font-mono mb-3">
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub Activity</span>
          </div>
          <h2 className="font-heading text-3xl font-bold text-[var(--text-primary)] tracking-tight">
            Open Source &amp; Public Repositories
          </h2>
        </div>

        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-panel glass-panel-hover text-xs font-semibold text-[var(--text-primary)] self-start sm:self-auto"
        >
          <GithubIcon className="w-4 h-4" />
          <span>@{profile.login}</span>
          {!profile.isFallback && profile.public_repos > 0 && (
            <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 font-mono text-[10px]">
              {profile.public_repos} repos
            </span>
          )}
          <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)]" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {profile.repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-heading text-base font-bold text-[var(--text-primary)] group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                  <span>{repo.name}</span>
                </h3>
                <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-cyan-400 transition-colors" />
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                {repo.description || 'Public repository by Rohan Pawar.'}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] pt-3 border-t border-[var(--border-subtle)]">
              <span>{repo.language || 'Python'}</span>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400" />
                  {repo.stargazers_count}
                </span>
                <span className="inline-flex items-center gap-1">
                  <GitFork className="w-3.5 h-3.5 text-indigo-400" />
                  {repo.forks_count}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
