import { Project } from '@/types';

export const featuredProjects: Project[] = [
  {
    id: 'signbridge-ai',
    number: '01',
    title: 'SignBridge AI',
    tagline: 'Bridging Signs and Speech.',
    shortDescription:
      'A bidirectional Indian Sign Language communication platform designed to make communication easier between sign-language users and non-signers.',
    category: 'Computer Vision / Deep Learning / Assistive Technology',
    featured: true,
    status: 'Live',
    tags: ['PyTorch', 'MediaPipe', 'FastAPI', 'React', 'WebSockets'],
    keyFeatures: [
      'Real-time Sign-to-Speech communication',
      'Speech-to-Sign communication',
      'Extraction of 21 3D hand landmarks using MediaPipe',
      'PyTorch Bidirectional LSTM for gesture recognition',
      'Real-time communication through FastAPI and WebSockets',
      'Bilingual voice output & interactive React interface',
    ],
    links: {
      github: 'https://github.com/rohanpawar0006/SignBridge-AI',
      demo: 'https://frontend-rohanpawar0006s-projects.vercel.app/',
    },
    headlineMetric: '21 3D Hand Landmarks • BiLSTM • Real-Time WebSockets',
    caseStudy: {
      overview:
        'SignBridge AI is a bidirectional Indian Sign Language (ISL) communication platform built to reduce friction between sign-language users and non-signers through real-time computer vision, sequence modeling, and speech synthesis.',
      problem:
        'Deaf and hard-of-hearing individuals often face communication barriers in everyday public, educational, and workplace interactions due to the limited availability of human sign-language interpreters and the lack of accessible two-way translation tools.',
      solution:
        'Built an end-to-end bidirectional system supporting both Sign-to-Speech and Speech-to-Sign workflows. On the Sign-to-Speech side, MediaPipe extracts 21 3D hand landmarks per frame from a live webcam stream and feeds temporal sequences into a PyTorch Bidirectional LSTM model over FastAPI WebSockets, converting recognized gestures into text and bilingual voice output. On the Speech-to-Sign side, spoken input is parsed and mapped to visual sign representations in an interactive React frontend.',
      architectureFlow: [
        { label: 'Webcam', sublabel: 'Live Video Stream' },
        { label: 'MediaPipe', sublabel: 'Hand Tracking' },
        { label: '3D Hand Landmarks', sublabel: '21 Keypoints (x, y, z)' },
        { label: 'BiLSTM', sublabel: 'PyTorch Sequence Model' },
        { label: 'Gesture Prediction', sublabel: 'FastAPI WebSockets' },
        { label: 'Text', sublabel: 'Sentence Assembly' },
        { label: 'Speech', sublabel: 'Bilingual Voice Output' },
      ],
      individualContribution: [
        'Designed and implemented the MediaPipe 21-point 3D hand-landmark extraction and coordinate normalization pipeline.',
        'Trained and evaluated the PyTorch Bidirectional LSTM sequence classifier for ISL gesture recognition.',
        'Built the FastAPI WebSocket backend for low-latency bidirectional frame streaming and prediction delivery.',
        'Developed the interactive React user interface supporting both Sign-to-Speech and Speech-to-Sign modes with bilingual voice output.',
      ],
      keyDecisions: [
        {
          decision: '3D Hand Landmarks + BiLSTM over Raw Video CNNs',
          rationale:
            'Extracting 21 normalized 3D hand landmarks via MediaPipe drastically reduces input dimensionality and compute requirements compared to raw frame 3D CNNs, enabling responsive real-time inference.',
          tradeOff:
            'Model accuracy depends on consistent MediaPipe landmark detection under varying lighting, camera angles, and hand occlusion.',
        },
        {
          decision: 'FastAPI WebSockets for Real-Time Streaming',
          rationale:
            'Full-duplex WebSocket connections eliminate repeated HTTP handshake overhead, keeping gesture streaming and prediction feedback responsive.',
          tradeOff:
            'Requires careful client-side connection state management and frame-rate throttling to avoid saturating bandwidth.',
        },
        {
          decision: 'Bidirectional Workflow Design',
          rationale:
            'Supporting both Sign-to-Speech and Speech-to-Sign makes the interface practical for two-way conversations rather than one-sided gesture demos.',
          tradeOff:
            'Increases frontend state complexity across camera capture, speech recognition, and visual sign playback.',
        },
      ],
      challenges: [
        'Handling frame jitter and transient hand-tracking noise during continuous webcam capture.',
        'Synchronizing real-time WebSocket message flow between the React client and FastAPI inference server without UI lag.',
        'Maintaining consistent landmark normalization across different user distances from the camera.',
      ],
      resultsAndMetrics: [
        {
          label: 'Landmark Pipeline',
          value: '21 3D Points',
          description: 'Real-time hand keypoint extraction per frame using MediaPipe.',
        },
        {
          label: 'Sequence Model',
          value: 'PyTorch BiLSTM',
          description: 'Bidirectional temporal modeling over normalized landmark sequences.',
        },
        {
          label: 'Transport Layer',
          value: 'WebSockets',
          description: 'Low-latency bidirectional streaming via FastAPI and React.',
        },
      ],
      limitationsAndFuture: [
        'Recognition is scoped to the trained gesture vocabulary and controlled signing conditions — it does not claim universal Indian Sign Language coverage.',
        'Non-manual facial expressions and complex two-handed continuous grammar remain outside the current model scope.',
        'Future work includes expanding the curated gesture dataset, improving robustness to occlusion, and exploring transformer-based temporal sequence encoders.',
      ],
    },
  },
  {
    id: 'vaultmind-rag',
    number: '02',
    title: 'VaultMind-RAG',
    tagline: 'Your Knowledge. Searchable. Understandable.',
    shortDescription:
      'A custom Retrieval-Augmented Generation assistant that allows users to ask natural-language questions across their personal Obsidian notes — built from scratch without LangChain.',
    category: 'Generative AI / RAG / NLP',
    featured: true,
    status: 'Live',
    tags: ['Python', 'Sentence-Transformers', 'ChromaDB', 'Gemini API', 'Streamlit'],
    keyFeatures: [
      'Custom RAG pipeline developed from scratch without LangChain',
      'Obsidian note sanitization (frontmatter, wikilinks, markdown cleanup)',
      'Sliding-window chunking for context continuity',
      'MiniLM embeddings & persistent vector search via ChromaDB',
      'Cosine similarity retrieval with relevance threshold and fallback',
      'Grounded answers with source citations and refusal when info is unavailable',
    ],
    links: {
      github: 'https://github.com/rohanpawar0006/vaultmind-rag',
      demo: 'https://vaultmind-rag.streamlit.app/',
    },
    headlineMetric: 'Zero-LangChain Custom RAG • ChromaDB • Grounded Citations',
    caseStudy: {
      overview:
        'VaultMind-RAG is a Retrieval-Augmented Generation assistant built completely from scratch in Python without LangChain, enabling users to query their personal Obsidian Markdown vaults in natural language and receive strictly grounded answers with source citations.',
      problem:
        'Personal Obsidian vaults grow into hundreds of interconnected Markdown notes where keyword search misses semantic intent, while high-level RAG orchestration frameworks like LangChain abstract away chunking, similarity thresholds, and grounding mechanics.',
      solution:
        'Implemented every stage of the RAG pipeline manually: an Obsidian-aware preprocessor that sanitizes YAML frontmatter and wikilink syntax, a sliding-window chunker to preserve semantic boundaries, local MiniLM embeddings via Sentence-Transformers, persistent vector indexing in ChromaDB, cosine similarity retrieval with a relevance threshold, and a strict Gemini API synthesis prompt that cites source notes or refuses when relevant context is missing.',
      architectureFlow: [
        { label: 'Obsidian Notes', sublabel: 'Markdown Vault' },
        { label: 'Preprocessing', sublabel: 'Syntax Sanitization' },
        { label: 'Chunking', sublabel: 'Sliding Window' },
        { label: 'Embeddings', sublabel: 'MiniLM Vectors' },
        { label: 'ChromaDB', sublabel: 'Vector Index' },
        { label: 'Similarity Search', sublabel: 'Cosine + Threshold' },
        { label: 'Gemini', sublabel: 'Strict Grounding' },
        { label: 'Grounded Answer', sublabel: 'With Citations' },
      ],
      individualContribution: [
        'Architected the entire RAG pipeline from scratch in Python without LangChain or external orchestration wrappers.',
        'Built the Obsidian Markdown sanitizer and sliding-window chunking logic to keep note context intact.',
        'Integrated Sentence-Transformers (MiniLM) embeddings with ChromaDB for local persistent vector search.',
        'Engineered the cosine similarity threshold gate, fallback refusal behavior, and Gemini API citation prompt inside a Streamlit interface.',
      ],
      keyDecisions: [
        {
          decision: 'Custom RAG Pipeline Without LangChain',
          rationale:
            'Building retrieval, chunking, and prompt assembly directly in Python provides full transparency, simpler debugging, and zero framework bloat.',
          tradeOff:
            'Requires writing custom ingestion, metadata tracking, and prompt formatting utilities instead of relying on pre-built chains.',
        },
        {
          decision: 'Cosine Similarity Relevance Threshold & Refusal',
          rationale:
            'Enforcing a minimum similarity threshold prevents passing weak or unrelated chunks to Gemini, ensuring the assistant refuses rather than hallucinates when notes lack the answer.',
          tradeOff:
            'Highly abstract queries with low lexical or semantic overlap may trigger conservative refusals.',
        },
        {
          decision: 'Local MiniLM Embeddings + ChromaDB',
          rationale:
            'Generating embeddings locally with Sentence-Transformers eliminates per-token embedding API costs and works cleanly with persistent ChromaDB collections.',
          tradeOff:
            'Compact embedding models have lower representational capacity than large commercial embedding endpoints.',
        },
      ],
      challenges: [
        'Cleaning Obsidian-specific Markdown artifacts (YAML frontmatter, wikilinks, tags) without stripping meaningful context.',
        'Tuning chunk window size and overlap so retrieved passages contain complete thoughts rather than cut-off sentences.',
        'Calibrating the similarity threshold so relevant notes pass reliably while out-of-vault questions trigger clean fallbacks.',
      ],
      resultsAndMetrics: [
        {
          label: 'Framework Overhead',
          value: 'Zero LangChain',
          description: '100% custom Python pipeline from ingestion to grounded generation.',
        },
        {
          label: 'Vector Engine',
          value: 'ChromaDB + MiniLM',
          description: 'Local Sentence-Transformers embeddings with cosine similarity retrieval.',
        },
        {
          label: 'Hallucination Guard',
          value: 'Threshold + Refusal',
          description: 'Cites source notes or explicitly refuses when context is insufficient.',
        },
      ],
      limitationsAndFuture: [
        'Currently focused on Markdown text notes; embedded images, PDFs, and canvas files are not indexed.',
        'Dense vector retrieval alone can miss exact keyword or acronym matches.',
        'Future improvements include hybrid BM25 + vector retrieval and optional cross-encoder reranking.',
      ],
    },
  },
];
