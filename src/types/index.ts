export interface ProjectMetric {
  label: string;
  value: string;
  description: string;
}

export interface ArchitectureStep {
  label: string;
  sublabel?: string;
}

export interface CaseStudySection {
  overview: string;
  problem: string;
  solution: string;
  architectureFlow: ArchitectureStep[];
  individualContribution: string[];
  keyDecisions: Array<{
    decision: string;
    rationale: string;
    tradeOff: string;
  }>;
  challenges: string[];
  resultsAndMetrics: ProjectMetric[];
  limitationsAndFuture: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  category: string;
  featured: boolean;
  status: 'Live' | 'Open Source' | 'Completed';
  tags: string[];
  keyFeatures: string[];
  links: {
    github?: string;
    demo?: string;
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
  workMode: string;
  type: 'Internship' | 'College Leadership' | 'Open Source';
  location: string;
  summary: string;
  highlights: string[];
  skillsApplied: string[];
  isClientProject?: boolean;
}

export interface Skill {
  name: string;
  description: string;
  backedByProjects: string[];
}

export interface SkillCategory {
  id: string;
  category: string;
  iconName: 'brain' | 'code' | 'library' | 'server' | 'layout' | 'database' | 'wrench';
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

export interface GitHubRepoSummary {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export interface GitHubProfileData {
  login: string;
  name: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  avatar_url: string;
  repos: GitHubRepoSummary[];
  isFallback?: boolean;
}
