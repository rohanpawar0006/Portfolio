import { Project } from '@/types';

export const featuredProjects: Project[] = [
  {
    id: 'signbridge-ai',
    title: 'SignBridge AI',
    tagline: 'Bidirectional Indian Sign Language Communication Platform ("Bridging Signs and Speech")',
    category: 'AI/ML',
    featured: true,
    status: 'Live',
    tags: ['PyTorch', 'Bidirectional LSTM', 'MediaPipe', 'React', 'FastAPI', 'WebSockets'],
    links: {
      github: 'https://github.com/rohanpawar0006/SignBridge-AI',
      demo: 'https://sign-bridge-ai-alpha.vercel.app/',
    },
    headlineMetric: '960 Training Sequences • 16-Sign Bi-LSTM',
    caseStudy: {
      problem:
        'Over 60 million deaf and hard-of-hearing individuals face significant communication barriers due to the scarcity of accessible, real-time Indian Sign Language (ISL) interpreters in daily public and professional interactions.',
      approach:
        'Architected a low-latency bidirectional pipeline. Sign-to-Speech captures 21 3D hand landmarks per frame via MediaPipe, feeding coordinate sequences into a PyTorch Bidirectional LSTM for gesture classification, paired with an on-device 36-class geometric classifier (A–Z, 0–9) and temporal confidence smoothing. Speech-to-Sign integrates the Web Speech API with an ISL NLP tokenization and canonical gloss sequencer, rendering signs through an interactive SVG visualizer.',
      keyDecisions: [
        {
          decision: 'Bi-LSTM over Heavy 3D CNNs',
          rationale: 'Normalized 21 landmark coordinate streams require drastically less compute and run smoothly on consumer webcams.',
          tradeOff: 'Dependent on reliable landmark tracking under low lighting or occlusions.',
        },
        {
          decision: '10-Frame Confidence Smoothing Window',
          rationale: 'Filters transient hand noise and frame jitter before committing predictions to the sentence builder.',
          tradeOff: 'Introduces ~160ms latency before committing a completed sign, an acceptable UX compromise.',
        },
        {
          decision: 'WebSocket Streaming with FastAPI',
          rationale: 'Provides bi-directional full-duplex socket streaming for near real-time predictions compared to HTTP polling.',
          tradeOff: 'Requires persistent socket connections and reconnection logic on serverless/container hosts.',
        },
      ],
      resultsAndMetrics: [
        {
          label: 'Controlled Accuracy',
          value: '100%',
          description: 'Achieved across 16-sign closed vocabulary on 960 collected sequences.',
        },
        {
          label: 'Geometric Classifier',
          value: '36 Classes',
          description: 'On-device recognition for A–Z and 0–9 finger spelling.',
        },
        {
          label: 'Inference Latency',
          value: '< 45ms',
          description: 'End-to-end model inference per frame on CPU.',
        },
      ],
      limitationsAndFuture: [
        'High accuracy is currently bounded to single-person signing within the 16-sign closed vocabulary.',
        'Continuous dynamic sentence signing with two-handed compound gestures is an active research and expansion area.',
        'Planning to incorporate transformer-based temporal self-attention (Sign Language Transformers) for full continuous ISL discourse.',
      ],
    },
  },
  {
    id: 'vaultmind-rag',
    title: 'VaultMind-RAG',
    tagline: 'Zero-Framework Obsidian Vault Knowledge Assistant with Grounded Citations',
    category: 'RAG / LLM',
    featured: true,
    status: 'Live',
    tags: ['Python', 'Streamlit', 'ChromaDB', 'Gemini Flash', 'Sentence-Transformers', 'Embeddings'],
    links: {
      github: 'https://github.com/rohanpawar0006/vaultmind-rag',
    },
    headlineMetric: 'Custom Chunker • 0.30 Fallback Threshold',
    caseStudy: {
      problem:
        'Knowledge workers compile extensive personal knowledge bases in Obsidian Markdown, but existing search mechanisms lack semantic context, while out-of-the-box RAG wrappers like LangChain hide core mechanics and introduce unpredictable hallucinations.',
      approach:
        'Engineered a custom RAG architecture from the ground up without LangChain. Developed a specialized Obsidian syntax sanitizer that strips YAML frontmatter, cleans wikilinks and callout tags, followed by a deterministic sliding-window chunker (~1200 characters, 200 overlap). Embedded chunks locally using Sentence-Transformers (all-MiniLM-L6-v2), indexed in persistent ChromaDB, and enforced cosine similarity thresholding (0.30 cut-off) to refuse off-target queries before passing strictly grounded context to Google Gemini Flash.',
      keyDecisions: [
        {
          decision: 'Zero-Framework Implementation (No LangChain)',
          rationale: 'Exposes and optimizes every stage of chunking, indexing, retrieval, and prompt synthesis directly.',
          tradeOff: 'Requires building custom prompt formatting, retry mechanisms, and memory management manually.',
        },
        {
          decision: 'Hard Similarity Cutoff (0.30 Threshold)',
          rationale: 'Prevents LLM hallucinations by immediately returning an honest refusal when retrieved chunks lack relevance.',
          tradeOff: 'May reject highly abstract or metaphorically phrased questions that lack direct semantic overlap.',
        },
        {
          decision: 'Local Embeddings (all-MiniLM-L6-v2)',
          rationale: 'Fast, lightweight embedding generation running locally with zero API dependency or latency cost.',
          tradeOff: 'Lower embedding dimensionality (384) compared to large commercial models like text-embedding-3-large.',
        },
      ],
      resultsAndMetrics: [
        {
          label: 'Framework Overhead',
          value: '0 KB',
          description: 'Built purely with native Python, ChromaDB, and Gemini SDK.',
        },
        {
          label: 'Chunking Precision',
          value: '1200 / 200',
          description: 'Character window with overlap preserving semantic paragraph continuity.',
        },
        {
          label: 'Hallucination Defense',
          value: '100% Grounded',
          description: 'Refuses queries without citations when cosine distance exceeds 0.70.',
        },
      ],
      limitationsAndFuture: [
        'Currently optimized for text and markdown; embedded images and canvas files are ignored during ingestion.',
        'Future roadmap includes adding hybrid BM25 + dense vector reranking (Cohere Rerank) for keyword-dense queries.',
      ],
    },
  },
  {
    id: 'luminai',
    title: 'LuminAI',
    tagline: 'AI & LLM Dashboard Forecasting Analysis Platform',
    category: 'Analytics & BI',
    featured: true,
    status: 'Live',
    tags: ['Python', 'LLMs', 'Time-Series Forecasting', 'EDA', 'Pandas', 'Business Intelligence'],
    links: {
      github: 'https://github.com/rohanpawar0006',
    },
    headlineMetric: 'Automated EDA & Generative Forecasting Insights',
    caseStudy: {
      problem:
        'Business stakeholders often struggle to interpret raw time-series trends and multidimensional procurement/sales data spreadsheets, leading to delayed decision-making and inventory bottlenecks.',
      approach:
        'Engineered an intelligent forecasting and analytics system combining statistical predictive models with LLM-powered insight generation. Automated data extraction, consolidation, and exploratory data analysis (EDA), delivering real-time trend forecasts and automated natural language executive briefings on key business performance indicators.',
      keyDecisions: [
        {
          decision: 'Hybrid Statistical + Generative Architecture',
          rationale: 'Pairs deterministic numerical forecasts with LLM natural language summaries for executive comprehension.',
          tradeOff: 'Must strictly constrain the LLM to verify and never alter computed statistical values.',
        },
        {
          decision: 'Automated Data Pipeline Sanitation',
          rationale: 'Normalizes varied spreadsheet schemas into uniform columnar time-series structures automatically.',
          tradeOff: 'Requires robust schema validation to catch unexpected data types or missing historical ranges.',
        },
      ],
      resultsAndMetrics: [
        {
          label: 'Analysis Velocity',
          value: 'Automated',
          description: 'Eliminated manual spreadsheet compilation and trend computation.',
        },
        {
          label: 'Synthesis Layer',
          value: 'LLM Powered',
          description: 'Automated executive narrative summaries for non-technical leadership.',
        },
        {
          label: 'Data Integrity',
          value: 'Strictly Client-Safe',
          description: 'Anonymized B2B forecasting pipeline with protected proprietary benchmarks.',
        },
      ],
      limitationsAndFuture: [
        'Continuous model retraining scheduled for future releases based on streaming transaction feeds.',
        'Exploration of autonomous agentic alerts for anomaly spikes in supply chain metrics.',
      ],
    },
  },
];
