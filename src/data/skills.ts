import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'AI / Machine Learning & Agents',
    skills: [
      { name: 'PyTorch & Bi-LSTM', backedByProjects: ['signbridge-ai'] },
      { name: 'MediaPipe Hands (3D Landmarks)', backedByProjects: ['signbridge-ai'] },
      { name: 'Custom RAG (No-Framework)', backedByProjects: ['vaultmind-rag'] },
      { name: 'Agentic AI & Tool Calling', backedByProjects: ['soita'] },
      { name: 'Vector Databases (ChromaDB)', backedByProjects: ['vaultmind-rag'] },
      { name: 'Sentence-Transformers', backedByProjects: ['vaultmind-rag'] },
      { name: 'Google Gemini API / LLMs', backedByProjects: ['vaultmind-rag', 'luminai'] },
      { name: 'Time-Series Forecasting', backedByProjects: ['luminai'] },
      { name: 'NLP & Tokenization', backedByProjects: ['signbridge-ai'] },
    ],
  },
  {
    category: 'Backend & Systems (Python)',
    skills: [
      { name: 'Python (OOP & Scripting)', backedByProjects: ['signbridge-ai', 'vaultmind-rag', 'luminai', 'soita'] },
      { name: 'FastAPI', backedByProjects: ['signbridge-ai'] },
      { name: 'REST APIs & WebSockets', backedByProjects: ['signbridge-ai'] },
      { name: 'Streamlit', backedByProjects: ['vaultmind-rag'] },
      { name: 'MySQL & Relational Modeling', backedByProjects: ['luminai'] },
      { name: 'MongoDB', backedByProjects: ['signbridge-ai'] },
    ],
  },
  {
    category: 'Data Analytics & Engineering',
    skills: [
      { name: 'Pandas & NumPy', backedByProjects: ['luminai', 'signbridge-ai'] },
      { name: 'SQL Querying & Optimization', backedByProjects: ['luminai'] },
      { name: 'Exploratory Data Analysis (EDA)', backedByProjects: ['luminai'] },
      { name: 'Data Visualization (Matplotlib)', backedByProjects: ['luminai'] },
      { name: 'Dashboard Business Intelligence', backedByProjects: ['luminai'] },
    ],
  },
  {
    category: 'Frontend & Web Platforms',
    skills: [
      { name: 'React', backedByProjects: ['signbridge-ai'] },
      { name: 'Next.js & TypeScript', backedByProjects: ['signbridge-ai'] },
      { name: 'HTML5 & CSS3', backedByProjects: ['inamigos'] },
      { name: 'Tailwind CSS & Glassmorphism', backedByProjects: ['signbridge-ai'] },
      { name: 'Responsive UI Design', backedByProjects: ['inamigos'] },
    ],
  },
  {
    category: 'Developer Tools & Workflows',
    skills: [
      { name: 'Git & GitHub Workflows', backedByProjects: ['signbridge-ai', 'vaultmind-rag', 'svce-tech-guy'] },
      { name: 'VS Code & Jupyter Notebooks', backedByProjects: ['luminai', 'vaultmind-rag'] },
      { name: 'Google Colab GPU Compute', backedByProjects: ['signbridge-ai'] },
      { name: 'CI/CD & Cloud Deployment (Vercel/Render)', backedByProjects: ['signbridge-ai'] },
    ],
  },
];
