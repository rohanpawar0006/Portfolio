import type { Metadata } from 'next';
import './globals.css';
import { personalInfo } from '@/data/personal';

export const metadata: Metadata = {
  title: `${personalInfo.name} | AI/ML Engineer & Backend Developer`,
  description:
    'Personal engineering portfolio of Rohan Pawar. Creator of SignBridge AI (Bi-LSTM ISL communication), VaultMind-RAG, and LuminAI forecasting analytics.',
  keywords: [
    'Rohan Pawar',
    'AI/ML Engineer',
    'Python Backend Developer',
    'Data Analyst',
    'SignBridge AI',
    'VaultMind-RAG',
    'FastAPI',
    'PyTorch',
    'SVCE Bengaluru',
    'Agentic AI',
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.github }],
  openGraph: {
    title: `${personalInfo.name} | AI/ML Engineer & Backend Developer`,
    description: 'Engineering Intelligent Systems that Reason & Scale. Built with Proof Over Claims.',
    url: 'https://rohanpawar.dev',
    siteName: `${personalInfo.name} Portfolio`,
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <head>
        <meta name="theme-color" content="#08090D" />
      </head>
      <body className="min-h-full flex flex-col bg-[#08090D] text-slate-100">
        {children}
      </body>
    </html>
  );
}
