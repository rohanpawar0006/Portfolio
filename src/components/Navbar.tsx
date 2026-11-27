'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun, Zap, Mail, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '@/data/personal';

interface NavbarProps {
  recruiterMode: boolean;
  setRecruiterMode: (val: boolean) => void;
  openAssistant: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  recruiterMode,
  setRecruiterMode,
  openAssistant,
}) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-4">
      <nav
        className={`w-full max-w-6xl rounded-2xl transition-all duration-300 glass-panel px-4 sm:px-6 py-3 flex items-center justify-between ${
          scrolled ? 'shadow-2xl shadow-black/40 bg-opacity-90' : 'bg-opacity-60'
        }`}
      >
        {/* Brand */}
        <Link href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            RP
          </div>
          <div>
            <span className="font-semibold text-sm sm:text-base tracking-tight text-slate-100 flex items-center gap-1.5">
              Rohan Pawar
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </span>
            <span className="hidden sm:block text-[10px] text-cyan-400 font-mono uppercase tracking-wider">
              AIML Engineer • Grad 2027
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
          <Link href="#projects" className="hover:text-cyan-400 transition-colors">
            Projects
          </Link>
          <Link href="#experience" className="hover:text-cyan-400 transition-colors">
            Experience
          </Link>
          <Link href="#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </Link>
          <Link href="#certifications" className="hover:text-cyan-400 transition-colors">
            Certifications
          </Link>
          <Link href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </Link>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* 10-Second Recruiter Mode Toggle */}
          <button
            onClick={() => setRecruiterMode(!recruiterMode)}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              recruiterMode
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-lg shadow-amber-500/20'
                : 'bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 border border-indigo-500/20'
            }`}
            title="Toggle 10-Second Recruiter Snapshot"
          >
            <Zap className={`w-3.5 h-3.5 ${recruiterMode ? 'text-amber-400 fill-amber-400' : ''}`} />
            <span className="hidden sm:inline">10s Recruiter Mode</span>
            <span className="sm:hidden">10s Mode</span>
          </button>

          {/* Ask AI Assistant */}
          <button
            onClick={openAssistant}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            Ask AI
          </button>

          {/* Social Links */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-colors cursor-pointer"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-100 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 rounded-2xl glass-panel p-4 flex flex-col gap-3 z-50 bg-[#0d0f17]/95">
          <Link
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-200 py-2 border-b border-white/5"
          >
            Projects
          </Link>
          <Link
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-200 py-2 border-b border-white/5"
          >
            Experience
          </Link>
          <Link
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-200 py-2 border-b border-white/5"
          >
            Skills
          </Link>
          <Link
            href="#certifications"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-200 py-2 border-b border-white/5"
          >
            Certifications
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-200 py-2"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};
