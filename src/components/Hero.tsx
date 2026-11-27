'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowDown, FileText, Sparkles, CheckCircle2, MapPin, GraduationCap, Award } from 'lucide-react';
import { personalInfo } from '@/data/personal';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle neural / hand-landmark constellation background canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Simulated 21 MediaPipe hand landmark points and connections
    const points: Array<{ x: number; y: number; vx: number; vy: number; radius: number }> = [];
    const count = 28;
    for (let i = 0; i < count; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connecting lines
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw points
      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99, 102, 241, 0.45)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
    >
      {/* Background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60 z-0"
      />

      {/* Radial ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-cyan-500/30 text-xs text-cyan-300 font-mono mb-6">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Graduating 2027 • Open for AI/ML & Backend Roles</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        {/* Positioning Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-200 max-w-2xl mb-4">
          Engineering Intelligent Systems that Reason & Scale.
        </p>

        {/* Role Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            AI / ML Engineer
          </span>
          <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            Python Backend (FastAPI)
          </span>
          <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
            Data Analyst & Forecasting
          </span>
          <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
            Agentic AI Architect
          </span>
        </div>

        {/* Summary Narrative */}
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mb-8 leading-relaxed">
          AI Engineering undergraduate at SVCE Bengaluru. Creator of{' '}
          <strong className="text-slate-200">SignBridge AI</strong> (Bi-LSTM sign translation),{' '}
          <strong className="text-slate-200">VaultMind-RAG</strong> (framework-free RAG for Obsidian), and intern at{' '}
          <strong className="text-slate-200">LuminAI</strong> building LLM-driven dashboard forecasting pipelines.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-10 w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <span>Explore Featured Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="mailto:rohanpawar0006@gmail.com"
            className="w-full sm:w-auto px-6 py-3 rounded-xl glass-panel glass-panel-hover text-slate-200 hover:text-white font-semibold text-sm flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Contact Rohan</span>
          </a>
        </div>

        {/* Quick Proof Metrics Strip */}
        <div className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="glass-panel p-3 rounded-xl text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mb-1">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Education</span>
            </div>
            <div className="text-sm font-bold text-white">SVCE Bengaluru</div>
            <div className="text-[11px] text-cyan-400 font-mono">B.E. AIML (CGPA 7.45)</div>
          </div>

          <div className="glass-panel p-3 rounded-xl text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mb-1">
              <Award className="w-3.5 h-3.5 text-indigo-400" />
              <span>Certified</span>
            </div>
            <div className="text-sm font-bold text-white">Oracle Agentic AI</div>
            <div className="text-[11px] text-indigo-400 font-mono">Foundations Assoc</div>
          </div>

          <div className="glass-panel p-3 rounded-xl text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>LeetCode</span>
            </div>
            <div className="text-sm font-bold text-white">100+ Solved</div>
            <div className="text-[11px] text-emerald-400 font-mono">DSA & Algorithms</div>
          </div>

          <div className="glass-panel p-3 rounded-xl text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mb-1">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>Location</span>
            </div>
            <div className="text-sm font-bold text-white">Bengaluru, IN</div>
            <div className="text-[11px] text-purple-400 font-mono">Open to Relocation</div>
          </div>
        </div>
      </div>
    </section>
  );
};
