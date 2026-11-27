'use client';

import React, { useState, useEffect, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { Moon, Sun, Zap, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ResumeButton } from './ResumeButton';
import { personalInfo } from '@/data/personal';

interface NavbarProps {
  recruiterMode?: boolean;
  setRecruiterMode?: (val: boolean) => void;
  openAssistant?: () => void;
}

const navLinks = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];

const subscribeTheme = (callback: () => void) => {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  return () => observer.disconnect();
};

const getThemeSnapshot = (): 'dark' | 'light' => {
  const attr = document.documentElement.getAttribute('data-theme');
  return attr === 'light' ? 'light' : 'dark';
};

const getServerThemeSnapshot = (): 'dark' | 'light' => 'dark';

export const Navbar: React.FC<NavbarProps> = ({
  recruiterMode = false,
  setRecruiterMode,
  openAssistant,
}) => {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('portfolio-theme', nextTheme);
    } catch {
      // Ignore storage errors in restricted contexts
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-4">
      <nav
        aria-label="Primary Navigation"
        className={`w-full max-w-6xl rounded-2xl transition-all duration-300 glass-panel px-4 sm:px-5 py-2.5 flex items-center justify-between gap-3 ${
          scrolled ? 'shadow-2xl shadow-black/25' : ''
        }`}
      >
        {/* Brand */}
        <Link href="/#hero" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            RP
          </div>
          <div>
            <span className="font-heading font-semibold text-sm sm:text-base tracking-tight text-[var(--text-primary)] flex items-center gap-1.5">
              Rohan Pawar
              <span className="relative flex h-2 w-2" title="Available for AI/ML roles">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </span>
            <span className="hidden sm:block text-[10px] text-cyan-400 font-mono uppercase tracking-wider">
              AI / ML Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-5 text-xs sm:text-sm font-medium text-[var(--text-secondary)]">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ResumeButton variant="compact" />
          </div>

          {setRecruiterMode && (
            <button
              type="button"
              onClick={() => setRecruiterMode(!recruiterMode)}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                recruiterMode
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                  : 'bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 border border-indigo-500/25'
              }`}
              title="Toggle Recruiter View"
            >
              <Zap className={`w-3.5 h-3.5 ${recruiterMode ? 'fill-amber-400' : ''}`} />
              <span className="hidden md:inline">Recruiter View</span>
              <span className="md:hidden">Recruiter</span>
            </button>
          )}

          {openAssistant && (
            <button
              type="button"
              onClick={openAssistant}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Ask AI
            </button>
          )}

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-colors"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-colors"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 transition-colors cursor-pointer"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-4 right-4 rounded-2xl glass-panel p-4 flex flex-col gap-2.5 z-50 shadow-2xl">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[var(--text-primary)] py-2 border-b border-[var(--border-subtle)] last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 flex items-center justify-between gap-2">
            <ResumeButton variant="compact" />
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg surface-subtle text-[var(--text-secondary)]"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg surface-subtle text-[var(--text-secondary)]"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
