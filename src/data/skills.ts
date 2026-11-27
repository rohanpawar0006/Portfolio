import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-ml',
    category: 'AI / Machine Learning',
    iconName: 'brain',
    skills: [
      {
        name: 'PyTorch',
        description: 'Bidirectional LSTM sequence modeling for gesture recognition.',
        backedByProjects: ['SignBridge AI'],
      },
      {
        name: 'Deep Learning',
        description: 'Temporal neural architectures and landmark sequence training.',
        backedByProjects: ['SignBridge AI'],
      },
      {
        name: 'NLP',
        description: 'Text preprocessing, tokenization, and semantic query handling.',
        backedByProjects: ['VaultMind-RAG', 'SignBridge AI'],
      },
      {
        name: 'RAG',
        description: 'End-to-end custom retrieval-augmented generation without LangChain.',
        backedByProjects: ['VaultMind-RAG'],
      },
      {
        name: 'LLMs',
        description: 'Grounded generation with Gemini API and Anthropic Claude APIs.',
        backedByProjects: ['VaultMind-RAG', 'SOiTA'],
      },
      {
        name: 'AI Agents',
        description: 'Multi-workflow agents for support, invoicing, scheduling, and inventory.',
        backedByProjects: ['SOiTA'],
      },
      {
        name: 'Tool Calling',
        description: 'Connecting LLM agents to email, calendar, and CRM endpoints.',
        backedByProjects: ['SOiTA'],
      },
      {
        name: 'Prompt Engineering',
        description: 'Strict grounding prompts, refusal rules, and agent debugging.',
        backedByProjects: ['VaultMind-RAG', 'SOiTA'],
      },
      {
        name: 'MediaPipe',
        description: 'Real-time extraction of 21 3D hand landmarks from webcam streams.',
        backedByProjects: ['SignBridge AI'],
      },
    ],
  },
  {
    id: 'programming',
    category: 'Programming',
    iconName: 'code',
    skills: [
      {
        name: 'Python',
        description: 'Core language for ML pipelines, FastAPI backends, agents, and analytics.',
        backedByProjects: ['SignBridge AI', 'VaultMind-RAG', 'LuminAI', 'SOiTA'],
      },
      {
        name: 'SQL',
        description: 'Querying, data consolidation, and master-data standardization.',
        backedByProjects: ['LuminAI'],
      },
    ],
  },
  {
    id: 'libraries',
    category: 'Libraries',
    iconName: 'library',
    skills: [
      {
        name: 'NumPy',
        description: 'Numerical array operations for landmark coordinates and similarity math.',
        backedByProjects: ['SignBridge AI', 'VaultMind-RAG'],
      },
      {
        name: 'Pandas',
        description: 'Multi-year sales, procurement consolidation, and ABC spend analysis.',
        backedByProjects: ['LuminAI'],
      },
      {
        name: 'Matplotlib',
        description: 'Exploratory analysis and trend visualization for forecasting workflows.',
        backedByProjects: ['LuminAI'],
      },
      {
        name: 'Sentence-Transformers',
        description: 'Local MiniLM embeddings for semantic search over Markdown notes.',
        backedByProjects: ['VaultMind-RAG'],
      },
    ],
  },
  {
    id: 'backend',
    category: 'Backend',
    iconName: 'server',
    skills: [
      {
        name: 'FastAPI',
        description: 'High-throughput Python APIs and real-time inference serving.',
        backedByProjects: ['SignBridge AI'],
      },
      {
        name: 'REST APIs',
        description: 'Integrating email, calendar, CRM, and LLM services cleanly.',
        backedByProjects: ['SOiTA', 'VaultMind-RAG'],
      },
      {
        name: 'WebSockets',
        description: 'Full-duplex real-time gesture streaming and prediction delivery.',
        backedByProjects: ['SignBridge AI'],
      },
    ],
  },
  {
    id: 'frontend',
    category: 'Frontend',
    iconName: 'layout',
    skills: [
      {
        name: 'React',
        description: 'Interactive web interfaces for real-time SignBridge AI translation.',
        backedByProjects: ['SignBridge AI'],
      },
      {
        name: 'Flutter',
        description: 'Cross-platform mobile UI development.',
        backedByProjects: ['Mobile Apps'],
      },
      {
        name: 'HTML5',
        description: 'Accessible semantic markup and structured web layouts.',
        backedByProjects: ['SignBridge AI', 'Portfolio'],
      },
      {
        name: 'CSS3',
        description: 'Responsive styling, modern layouts, and visual polish.',
        backedByProjects: ['SignBridge AI', 'Portfolio'],
      },
    ],
  },
  {
    id: 'databases',
    category: 'Databases',
    iconName: 'database',
    skills: [
      {
        name: 'PostgreSQL',
        description: 'Relational data modeling and structured analytical queries.',
        backedByProjects: ['Backend Systems'],
      },
      {
        name: 'MySQL',
        description: 'Structured business records and relational schema querying.',
        backedByProjects: ['LuminAI'],
      },
      {
        name: 'MongoDB',
        description: 'Document-oriented storage for flexible application data.',
        backedByProjects: ['Backend Systems'],
      },
      {
        name: 'ChromaDB',
        description: 'Persistent vector database for cosine-similarity RAG retrieval.',
        backedByProjects: ['VaultMind-RAG'],
      },
    ],
  },
  {
    id: 'tools-deployment',
    category: 'Tools and Deployment',
    iconName: 'wrench',
    skills: [
      {
        name: 'Git',
        description: 'Version control, branching, and clean commit workflows.',
        backedByProjects: ['SignBridge AI', 'VaultMind-RAG'],
      },
      {
        name: 'GitHub',
        description: 'Repository hosting, collaboration, and open-source project delivery.',
        backedByProjects: ['SignBridge AI', 'VaultMind-RAG'],
      },
      {
        name: 'Docker',
        description: 'Containerized environments for reproducible Python services.',
        backedByProjects: ['Backend Systems'],
      },
      {
        name: 'Vercel',
        description: 'Production frontend hosting for SignBridge AI and Next.js apps.',
        backedByProjects: ['SignBridge AI', 'Portfolio'],
      },
      {
        name: 'Streamlit',
        description: 'Rapid interactive Python UI for VaultMind-RAG.',
        backedByProjects: ['VaultMind-RAG'],
      },
      {
        name: 'Jupyter Notebook',
        description: 'Iterative data exploration, ABC analysis, and model prototyping.',
        backedByProjects: ['LuminAI', 'SignBridge AI'],
      },
      {
        name: 'Google Colab',
        description: 'GPU-accelerated PyTorch BiLSTM training and experimentation.',
        backedByProjects: ['SignBridge AI'],
      },
    ],
  },
];
