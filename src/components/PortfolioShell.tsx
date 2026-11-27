'use client';

import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { RecruiterModeModal } from './RecruiterModeModal';
import { AssistantDrawer } from './AssistantDrawer';
import { Bot } from 'lucide-react';

interface PortfolioShellProps {
  children: React.ReactNode;
}

export const PortfolioShell: React.FC<PortfolioShellProps> = ({ children }) => {
  const [recruiterMode, setRecruiterMode] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative bg-[var(--bg-base)] selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar
        recruiterMode={recruiterMode}
        setRecruiterMode={setRecruiterMode}
        openAssistant={() => setAssistantOpen(true)}
      />

      <main className="flex-1 flex flex-col">{children}</main>

      <RecruiterModeModal
        isOpen={recruiterMode}
        onClose={() => setRecruiterMode(false)}
      />

      <AssistantDrawer
        isOpen={assistantOpen}
        onClose={() => setAssistantOpen(false)}
      />

      {/* Floating Ask My Portfolio Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setAssistantOpen(true)}
          className="group flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-2xl shadow-indigo-500/30 transition-all hover:-translate-y-0.5 cursor-pointer border border-white/20"
          title="Ask AI about Rohan"
        >
          <Bot className="w-4 h-4 text-white" />
          <span>Ask My Portfolio</span>
        </button>
      </div>
    </div>
  );
};
