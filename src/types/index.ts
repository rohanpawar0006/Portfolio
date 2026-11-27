export interface ProjectMetric {
  label: string;
  value: string;
  description: string;
}

export interface CaseStudySection {
  problem: string;
  approach: string;
  architectureDiagram?: string;
  keyDecisions: Array<{
    decision: string;
    rationale: string;
    tradeOff: string;
  }>;
  resultsAndMetrics: ProjectMetric[];
  limitationsAndFuture: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI/ML' | 'RAG / LLM' | 'Analytics & BI';
  featured: boolean;
  status: 'Live' | 'Open Source' | 'Completed';
  tags: string[];
  links: {
    github?: string;
    demo?: string;
    paper?: string;
  };
  headlineMetric: string;
  caseStudy: CaseStudySection;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  duration?: string;
  type: 'Internship' | 'College Leadership' | 'Open Source';
  location: string;
  highlights: string[];
  skillsApplied: string[];
  isClientProject?: boolean;
}

export interface Skill {
  name: string;
  level?: 'Proficient' | 'Familiar';
  backedByProjects: string[];
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  validUntil?: string;
  credentialUrl?: string;
  inProgress?: boolean;
}
