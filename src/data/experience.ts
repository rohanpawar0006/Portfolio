import { ExperienceItem } from '@/types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'luminai',
    company: 'LuminAI',
    role: 'AI & Data Analytics Intern',
    period: 'October 2026 – Present',
    duration: 'Oct 2026 – Present',
    workMode: 'On-site',
    type: 'Internship',
    location: 'Bengaluru, Karnataka',
    summary:
      'Contributing to an enterprise Sales, Procurement, and Finite Capacity Planning analytics platform for a manufacturing business.',
    highlights: [
      'Working on a Sales, Procurement and Finite Capacity Planning analytics platform for a manufacturing business.',
      'Gathering requirements and coordinating directly with procurement, stores, and planning teams.',
      'Consolidating 19 months of procurement and consumption data alongside 3+ years of sales invoices.',
      'Standardizing material IDs and identifying master-data inconsistencies across historical records.',
      'Performing ABC analysis to identify Class-A procurement items responsible for 70% of spend.',
      'Comparing monthly procured and consumed quantities to identify approximately 27% excess buying above consumption.',
      'Contributing to forecasting dashboards across monthly, quarterly, and half-yearly horizons and demonstrating them to the client.',
    ],
    skillsApplied: [
      'Python',
      'Pandas',
      'SQL',
      'ABC Analysis',
      'Data Consolidation',
      'Forecasting Dashboards',
      'Stakeholder Collaboration',
    ],
    isClientProject: true,
  },
  {
    id: 'soita',
    company: 'SOiTA',
    role: 'AI Agent Development Intern',
    period: 'October 2026',
    duration: 'Oct 2026 • 1 Month',
    workMode: 'Remote',
    type: 'Internship',
    location: 'Remote',
    summary:
      'Built, tested, and debugged LLM-powered AI agents and chatbots integrated with business workflows and external APIs.',
    highlights: [
      'Built and tested AI agents and chatbots across four business workflows: customer support, invoicing follow-ups, scheduling, and inventory.',
      'Integrated Anthropic Claude APIs for structured reasoning and conversational task execution.',
      'Connected AI agents with email, calendar, and CRM systems using Python and REST APIs.',
      'Tested and debugged agent behavior across multiple edge-case scenarios.',
      'Fixed prompt engineering and API integration issues to improve reliability.',
      'Documented two reusable agentic workflows for team adoption.',
    ],
    skillsApplied: [
      'AI Agents',
      'LLM Integration',
      'Anthropic Claude API',
      'Tool Calling',
      'Python',
      'REST APIs',
      'Workflow Automation',
    ],
  },
];
