import React from 'react';
import { PortfolioShell } from '@/components/PortfolioShell';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { EducationSection } from '@/components/EducationSection';
import { GitHubActivitySection } from '@/components/GitHubActivitySection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <PortfolioShell>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <CertificationsSection />
      <EducationSection />
      <GitHubActivitySection />
      <ContactSection />
      <Footer />
    </PortfolioShell>
  );
}
