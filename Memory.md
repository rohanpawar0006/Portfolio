# Project Memory & Decisions Log — Rohan Pawar Portfolio

**Current State:** Phase 0 Preparation (Documentation Complete, Awaiting User Approval to Start Phase 0)  
**Last Updated:** 2026-10-09  
**Repository:** `d:/Portfolio`  

---

## 1. Project Context & Objectives

- **Candidate:** Rohan Pawar (Final-year B.E. AIML-DS Engineering, SVCE Bengaluru, Graduating 2027) `[User-provided]`.
- **Target Roles:** AI/ML Engineer, Backend Developer (Python), Data Analyst `[User-provided]`.
- **Core Mantra:** "Proof Over Claims" — Every claim links to live evidence, repos, metrics, or case study write-ups `[User-provided]`.
- **Goal:** Build a portfolio web app that enables recruiters to verify capability in < 60 seconds (or < 15 seconds via Recruiter Mode) `[User-provided]`.

---

## 2. Active Inventory of Verified Content

### 2.1 Featured Projects
1. **SignBridge AI** `[User-provided]`
   - Real-time bidirectional Indian Sign Language (ISL) communication platform.
   - Stack: PyTorch Bi-LSTM (16-word vocab, 960 sequences), MediaPipe hand landmarks, on-device 36-class geometric classifier (A–Z, 0–9, 10-frame confidence smoother), ClipPlayer, TTS.
   - Deployments: Frontend on Vercel (`https://sign-bridge-ai-alpha.vercel.app/`), Backend on Render (`https://signbridge-ai-qybu.onrender.com`). Repo: `https://github.com/rohanpawar0006/SignBridge-AI`.
   - Limitations clause: 100% accuracy bounded to 16-word closed dataset.
2. **VaultMind-RAG** `[User-provided]`
   - Custom RAG assistant for Obsidian vaults built **without LangChain** from scratch.
   - Stack: Sliding-window chunker (~1200 chars, 200 overlap), `all-MiniLM-L6-v2`, ChromaDB, cosine similarity (0.30 threshold fallback), strict grounding prompt, Gemini Flash, Streamlit Obsidian-dark UI.
   - Repo: `https://github.com/rohanpawar0006/vaultmind-rag`.
3. **LuminAI (Internship Project)** `[User-provided]`
   - AI & LLM Dashboard Forecasting Analysis Platform.
   - Stack: Time-series forecasting, automated data consolidation, EDA, generative LLM KPI summarization layer for executive dashboards.
   - Safeguard: Written in generic, client-safe language with realistic benchmarks and zero proprietary data.
4. **Optional 4th Project (Lighter Card)** `[User-provided / Pending Confirmation]`
   - FundNest or Placement Prediction Model (Only if confirmed by Rohan).

### 2.2 Experience & Leadership Inventory
1. **LuminAI** — AI & Analytics Intern (`Present / Ongoing`) `[User-provided]`.
   - Helping businesses with dashboard forecasting analysis using LLMs and AI.
   - Automated data consolidation, time-series forecasting, EDA, and generative KPI insights/summaries.
2. **SOITA** — AI Agent Development Intern (`1 Month Duration`) `[User-provided]`.
   - Autonomous AI agent development, tool-calling pipelines, agent workflows, and task execution systems.
3. **InAmigos Foundation** — Web Development Intern (`2 Weeks Duration`) `[User-provided]`.
   - Responsive web page development, UI components, layout optimization.
4. **Student Tech Lead / "Student Tech Guy"** — SVCE, Bengaluru (`Oct 2023 – Present`) `[User-provided]`.
   - Organizing tech workshops, hackathons, college fest tech tools/demos, and peer mentoring.

### 2.3 Certifications & Education
1. **Oracle Certified Foundations Associate – Agentic AI** (Issued: July 2026, Valid through: July 2028) `[User-provided]`.
2. **Solved 100+ coding problems on LeetCode** `[User-provided]`.
3. **Career Essentials in Generative AI** (Microsoft & LinkedIn) `[User-provided]`.
4. **Master SQL for Data Science** `[User-provided]`.
5. **Microsoft Azure AI Essentials Professional Certificate** (Microsoft & LinkedIn) `[User-provided]`.
6. **Getting Started with AI and Machine Learning** `[User-provided]`.
7. **NPTEL NLP Course** (`[In Progress]`) `[User-provided]`.
8. **B.E. in Computer Science – Artificial Intelligence (AIML)**, Sri Venkateshwara College of Engineering (SVCE), Bengaluru (Oct 2023 – Present, CGPA: 7.45) `[User-provided]`.

### 2.4 Verified Contact & Social Links
- **Email:** `rohanpawar0006@gmail.com` `[User-provided]`
- **LinkedIn:** `https://www.linkedin.com/in/rohan-pawar-bba78b290/` `[User-provided]`
- **GitHub:** `https://github.com/rohanpawar0006` `[User-provided]`
- **Location:** Bengaluru, India `[User-provided]`

---

## 3. Decisions & Classifications Log

| ID | Decision | Classification | Rationale |
| :--- | :--- | :--- | :--- |
| **DEC-001** | Replace Sphoorti with LuminAI in Case Study 3 and Experience | `[User-provided]` | User instruction: highlight LuminAI dashboard forecasting analysis with LLMs & AI. |
| **DEC-002** | Add SOITA as AI Agent Development internship (1 month) | `[User-provided]` | User instruction to showcase agentic workflow experience. |
| **DEC-003** | Add InAmigos Foundation web dev internship (2 weeks) | `[User-provided]` | User instruction to document web engineering work. |
| **DEC-004** | Add SVCE Student Tech Guy / Tech Lead activities | `[User-provided]` | User instruction to show hands-on campus leadership and community engagement. |
| **DEC-005** | Add verified resume certifications & LeetCode (100+) | `[User-provided]` | Extracted directly from Rohan's verified resume. |
| **DEC-006** | Use Next.js 14/15 App Router + TypeScript + Tailwind CSS | `[User-provided / Recommendation]` | Best balance of static speed (SSG), developer velocity, and secure serverless route for Gemini AI assistant. |
| **DEC-007** | Gemini Flash serverless route for "Ask My Portfolio" | `[User-provided]` | Generous free tier, fast TTFT, native fit with Rohan's existing Gemini experience. |
| **DEC-008** | Strict grounding and prompt-injection defense | `[Recommendation]` | Prevents API abuse, hallucinations, and private data leaks. |

---

## 4. Status of Phases & Execution

- [x] **Phase 0: Tooling & Scaffolding:** Next.js 16/React 19 initialized with TypeScript, Tailwind CSS, App Router, `.env.example`, and directory structure.
- [x] **Phase 1: Design System & Shell:** Dark obsidian palette, glassmorphism tokens, accessible contrast, smooth scroll, responsive `Navbar`, and `Footer`.
- [x] **Phase 2: Content Model & Hero:** Typed data schemas for projects, experience, skills, and certifications. High-impact Hero with neural constellation landmark canvas, role pills, and proof stat pills.
- [x] **Phase 3: Deep Case Studies:** Integrated case studies for **SignBridge AI** (PyTorch Bi-LSTM), **VaultMind-RAG** (custom chunker, ChromaDB, no LangChain), and **LuminAI** (dashboard forecasting with LLMs) with full problem, approach, architecture, trade-offs, and honest limitations.
- [x] **Phase 4: Experience & Skills:** Full timeline for LuminAI (Ongoing), SOITA (1 Month), InAmigos Foundation (2 Weeks), and SVCE Student Tech Guy (Oct 2023 – Present). Categorized skills matrix with project-backed proof tags.
- [x] **Phase 5: 'Ask My Portfolio' AI Assistant:** Serverless route `/api/assistant` with strict grounding and citations. Interactive drawer with suggested recruiter prompts.
- [x] **Phase 6 (Initial): 10-Second Recruiter Mode:** Instant executive summary modal with top 3 proof points, core stack, resume, and direct contact.
- [x] **Build Verification:** `npm run build` succeeds with zero errors (SSG + serverless route). Dev server active at `http://localhost:3000`.

---

## 5. Next Steps & User Review

1. User can preview the running application at `http://localhost:3000` in their local browser.
2. Provide feedback or request styling/copy refinements.
3. Prepare for deployment (Phase 8) on Vercel whenever ready.
