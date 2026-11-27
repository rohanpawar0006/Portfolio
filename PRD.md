# Product Requirements Document (PRD) — Portfolio Website for Rohan Pawar

**Status:** Draft / Pending Approval  
**Owner:** Rohan Pawar (AIML-DS Engineering, SVCE Bengaluru, Graduating 2027)  
**Target Roles:** AI/ML Engineer, Backend Developer (Python), Data Analyst  
**Version:** 1.0.0  

---

## 1. Executive Summary & Problem Statement

### 1.1 The Problem
Most student software engineering portfolios are superficial templates consisting of a static headshot, an unverified skills checklist with arbitrary percentage bars, and repository links with minimal context. Technical recruiters and hiring managers skim student portfolios in 15–30 seconds. Because claims of competence are unverified, recruiters default to skepticism and move on.

### 1.2 The Solution & Core Philosophy: "Proof Over Claims"
A high-performance, futuristic yet restrained portfolio web application engineered around the core thesis of **verifiable evidence**. Within 10 seconds, a recruiter grasps Rohan's specialization and positioning. Within 60 seconds, they can test live systems, inspect architecture diagrams, review engineering trade-offs, and query an on-site, strictly-grounded AI assistant about Rohan's verified work.

---

## 2. Target Audience & User Personas

| Persona | Role & Context | Primary Need | Time to Value |
| :--- | :--- | :--- | :--- |
| **P1: Technical Recruiter** | High-volume scanning on laptop/mobile; needs immediate role fit (AI/ML, Python Backend, Data Analyst). | Quick proof of shipped work, resume download, tech stack summary, contact links. | < 15 seconds (via **10-Second Recruiter Mode**) |
| **P2: Engineering Hiring Manager** | Deep-dives into top candidates; evaluates code quality, architectural depth, trade-offs, and problem-solving. | In-depth case studies with interactive architecture flows, technical limitations, and GitHub repos. | 1 – 3 minutes |
| **P3: Peer / Collaborator** | Fellow engineers and community members exploring AI agent and ML implementations. | Exploring open-source repos, interactive AI assistant, and technical implementations. | 2 – 5 minutes |

---

## 3. Scope & Feature Matrix

### 3.1 MVP Requirements (P0 — Must Have)

1. **Hero Section `[User-provided]`**
   - Headline positioning: AI/ML Engineer | Backend Developer (Python) | Data Analyst.
   - Primary CTAs: "View Projects" (anchor scroll), "Download Resume" (direct PDF download).
   - Social & code links: GitHub (`https://github.com/rohanpawar0006`), LinkedIn (`https://www.linkedin.com/in/rohan-pawar-bba78b290/`), Email (`rohanpawar0006@gmail.com`), Bengaluru, India.
   - Distinctive visual: Subtle neural graph / hand-landmark motif honoring the SignBridge AI project without degrading performance.

2. **10-Second Recruiter Mode `[User-provided]`**
   - High-contrast toggle at top of viewport.
   - Instantly collapses or highlights a condensed summary card: Top 3 roles targeted, Top 3 projects with key metric, Core tech stack, Resume PDF link, One-click contact.

3. **Featured Deep Case Studies (3 Projects) `[User-provided]`**
   - Standard Case Study Structure: *Problem → Approach → Architecture Diagram → Key Decisions & Trade-offs → Results & Metrics → Limitations & Future Work → Live & Repo Links*.
   - **Project 1: SignBridge AI** (Bidirectional ISL Communication Platform)
     - Tech: React, FastAPI, PyTorch Bi-LSTM (16-word vocab, 960 sequences), MediaPipe Hands (21 3D landmarks), WebSocket streaming, on-device 36-class geometric classifier (A–Z, 0–9, 10-frame confidence smoother), ClipPlayer, Indian English TTS.
     - Live demo: `https://sign-bridge-ai-alpha.vercel.app/`
     - Repo: `https://github.com/rohanpawar0006/SignBridge-AI`
     - Honesty clause: Document 100% accuracy boundary (tested on curated 16-class dataset) with clear limitations.
   - **Project 2: VaultMind-RAG** (Custom RAG Assistant for Obsidian Vaults)
     - Tech: Built **without LangChain** from scratch; custom sliding-window chunker (~1200 chars, 200 overlap), `sentence-transformers` (`all-MiniLM-L6-v2`), ChromaDB, cosine similarity with 0.30 threshold fallback, strict grounding prompt, Gemini Flash, Streamlit Obsidian-dark UI.
     - Repo: `https://github.com/rohanpawar0006/vaultmind-rag`
     - Interactive feature: Animated RAG pipeline architecture diagram.
   - **Project 3: LuminAI** (AI & LLM Dashboard Forecasting Analysis Platform — Internship)
     - Tech: Time-series forecasting models, EDA pipelines, automated data consolidation, generative LLM KPI summarization layer for executive dashboards.
     - Presentation: Generic, client-safe wording with realistic benchmarks and no proprietary data.

4. **Experience Section `[User-provided]`**
   - **LuminAI** — AI & Analytics Intern (Ongoing / Current)
     - Helping businesses with intelligent dashboard forecasting and analytics powered by LLMs and predictive AI.
   - **SOITA** — AI Agent Development Intern (1 Month)
     - Autonomous AI agent development, tool-calling pipelines, agentic workflows, and task execution systems.
   - **InAmigos Foundation** — Web Development Intern (2 Weeks)
     - Responsive web interface development, UI components, layout optimization, and performance.
   - **Student Tech Lead / "Student Tech Guy"** — SVCE, Bengaluru (Oct 2023 – Present)
     - Organizing tech workshops, hackathons, college fest tech tools/demos, and peer mentoring.

5. **Skills Section `[User-provided]`**
   - Categorized by practical domain: **AI/ML**, **Backend & Systems**, **Data Analytics**, **Tools & Platforms**.
   - No arbitrary percentage bars; each skill badge cross-references the project or internship where it was applied.

6. **Certifications & Education `[User-provided]`**
   - Oracle Certified Foundations Associate – Agentic AI (Issued: July 2026, Valid through: July 2028).
   - Solved 100+ coding problems on LeetCode.
   - Career Essentials in Generative AI (Microsoft & LinkedIn).
   - Master SQL for Data Science.
   - Microsoft Azure AI Essentials Professional Certificate (Microsoft & LinkedIn).
   - Getting Started with AI and Machine Learning.
   - NPTEL Natural Language Processing Course (Marked visibly as `[In Progress]`).
   - B.E. in Computer Science – Artificial Intelligence (AIML), Sri Venkateshwara College of Engineering (SVCE), Bengaluru (Oct 2023 – Present, CGPA: 7.45, Graduating 2027).

7. **"Ask My Portfolio" AI Assistant `[User-provided]`**
   - In-app interactive drawer/modal powered by Gemini Flash serverless endpoint.
   - Strictly grounded on portfolio markdown knowledge base (projects, experience, skills, certifications).
   - Rules: Cites exact section used, explicitly refuses off-topic queries and prompt injection attempts, rate-limited, zero personal contact leakage, graceful fallback if offline.

8. **Live Proof & GitHub Activity `[User-provided]`**
   - Live availability badge for deployed URLs.
   - GitHub activity cached at build time / ISR serverless call to avoid third-party rate limit failures.

9. **Resume & Contact `[User-provided]`**
   - In-page accessible PDF viewer / preview card + direct download button.
   - Accessible contact card (Email `TBD`, LinkedIn, GitHub, verified mailto trigger).

### 3.2 Optional & Stretch Features

| Feature | Priority | Description |
| :--- | :--- | :--- |
| **Optional 4th Project Card** | P1 (MVP+) | FundNest / Placement Prediction model (Only if confirmed with user). |
| **Resume Tailor View** | P2 (Post-MVP) | Role filter toggle (AI/ML vs Backend vs Data) that dynamically reorganizes projects and skills. |
| **SignBridge Interactive Teaser** | P1 (MVP+) | Interactive canvas / lightweight GIF walkthrough of landmark tracking. |

### 3.3 Out of Scope (Explicit Non-Goals) `[User-provided]`
- ❌ CMS, blog engine, or admin dashboard.
- ❌ Database or user authentication systems.
- ❌ Heavy WebGL / 3D scenes that degrade mobile performance or battery life.
- ❌ Fabricated testimonials, mock metrics, or fake partner logos.
- ❌ Unconfirmed internship applications or unverified company claims.

---

## 4. Non-Functional Requirements (NFRs)

- **Performance:** Google Lighthouse score ≥ 90 in Performance, Accessibility, Best Practices, and SEO. Largest Contentful Paint (LCP) < 2.5s on 4G mobile.
- **Accessibility:** WCAG 2.1 AA compliance; full keyboard navigation, accessible contrast ratios, visible focus indicators, screen reader ARIA landmarks.
- **Motion:** Full adherence to `prefers-reduced-motion` media query.
- **Security:** Zero client-side API keys. LLM API keys isolated strictly in server-side environment variables. Rate-limiting on AI assistant route (e.g. 5 requests/min per IP). Strict prompt injection sanitization.
- **SEO & Social Sharing:** Dynamic OpenGraph (OG) image, Twitter card, sitemap.xml, robots.txt, and valid `Person` Schema.org JSON-LD structured data.
- **Browser & Device Support:** Chrome, Safari, Firefox, Edge across modern iOS, Android, macOS, and Windows. Responsive down to 320px width.

---

## 5. Risks & Mitigations

| Risk | Impact | Mitigation Strategy |
| :--- | :--- | :--- |
| **Proprietary Client Data in LuminAI write-up** | High (Legal/Professional) | Use generic, sanitized terminology (e.g., "B2B client data", "enterprise SKU forecasting"). Label unconfirmed metrics as `TBD`. |
| **Gemini API Key exhaustion / rate limiting** | Medium (UX) | In-memory token bucket rate limiter, client-side debounce, and graceful fallback message with suggested pre-written questions. |
| **GitHub API Rate Limit (60 req/hr unauthenticated)** | Medium (Visual) | Fetch GitHub contributions and repository stats at build-time with incremental revalidation (ISR), falling back to static cache. |
| **Overclaiming accuracy (SignBridge AI)** | High (Credibility) | Transparently state dataset bounds: "100% on 16-word controlled training dataset; real-world continuous signing is an active improvement area." |
