'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { RecruiterModeModal } from '@/components/RecruiterModeModal';
import { AssistantDrawer } from '@/components/AssistantDrawer';
import { Bot } from 'lucide-react';

export default function Home() {
  const [recruiterMode, setRecruiterMode] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col relative bg-[#08090D] selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar
        recruiterMode={recruiterMode}
        setRecruiterMode={setRecruiterMode}
        openAssistant={() => setAssistantOpen(true)}
      />

      {/* Main Page Content */}
      <div className="flex-1 flex flex-col">
        <Hero />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />

      {/* 10-Second Recruiter Mode Modal */}
      <RecruiterModeModal
        isOpen={recruiterMode}
        onClose={() => setRecruiterMode(false)}
      />

      {/* 'Ask My Portfolio' AI Assistant Drawer */}
      <AssistantDrawer
        isOpen={assistantOpen}
        onClose={() => setAssistantOpen(false)}
      />

      {/* Persistent Floating AI Action Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setAssistantOpen(true)}
          className="group flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-2xl shadow-indigo-500/30 transition-all transform hover:-translate-y-1 cursor-pointer border border-white/20"
          title="Ask AI about Rohan"
        >
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-cyan-300 opacity-75"></span>
            <Bot className="w-4 h-4 text-white relative z-10" />
          </div>
          <span>Ask My Portfolio</span>
        </button>
      </div>
    </main>
  );
}
