# ANTIGRAVITY PROMPT — Portfolio Website for Rohan Pawar

> HOW TO USE: Put `Universal_Project_Documentation_Prompt.md` in the project root (or attach it to the Antigravity chat), then paste everything below the line into Antigravity in **Planning mode**.

---

You are a senior software architect, product manager, UI/UX designer, and AI coding agent working inside Antigravity.

## STEP 0 — Follow the Documentation System

I have attached `Universal_Project_Documentation_Prompt.md`. Treat it as your operating manual for this entire project.

1. Read it fully before doing anything else.
2. Treat the **PROJECT DESCRIPTION** below as the content for its `[PASTE YOUR PROJECT IDEA HERE]` slot.
3. Generate all six files in the project root: `PRD.md`, `Architecture.md`, `Rules.md`, `Phases.md`, `Design.md`, `Memory.md`.
4. Run the "BEFORE CODING" review and give me the **Documentation Summary**.
5. **STOP and wait for my approval. Do not write application code until I say "start Phase 0".**
6. After approval, work phase by phase, and update `Memory.md` after every meaningful task, exactly as the doc says.

Follow its rules on assumptions: label each one clearly as User-provided, Assumption, Recommendation, or Future. Never fabricate content about me. If a fact is missing, use a visible `TBD` placeholder, not an invention.

---

## PROJECT DESCRIPTION

### What it is
A personal portfolio website for **Rohan Pawar**, a final-year (graduating 2027) AIML-DS engineering student at SVCE, Bengaluru, targeting **AI/ML Engineer, Backend Developer (Python), and Data Analyst** roles and internships.

### The problem
Most student portfolios are a template with a name, a skills list, and project screenshots. Recruiters skim them for seconds and remember nothing. I want a portfolio that **proves** ability instead of claiming it.

### Core strategy: "Proof over claims"
The site must make a recruiter think "this person ships real things" within 10 seconds, and let them verify it within 60. Every claim links to evidence: a live demo, a repo, a metric, or a write-up.

### Audience
- **Primary:** recruiters and internship hiring teams (skim in under a minute, mostly on laptop, sometimes phone).
- **Secondary:** engineers and hiring managers who go deep into the technical write-ups.

### Required sections (MVP)
1. **Hero** — name, one-line positioning, 2 primary CTAs (View Projects, Download Resume), and links to GitHub and LinkedIn. Must load fast and feel distinctive.
2. **Featured Projects** (3 deep case studies, see below).
3. **Experience** — internships and project work (see below).
4. **Skills** — grouped by real use (AI/ML, Backend, Data, Tools), not a bar-chart of fake percentages. Each skill should be backed by a project where it is used.
5. **Certifications and Learning** — Oracle Certified Foundations Associate in Agentic AI (issued 23 Jul 2026, valid to 23 Jul 2028); NPTEL NLP course (in progress, show as in progress).
6. **Resume** — in-page preview plus PDF download.
7. **Contact** — email (`rohanpawar0006@gmail.com`), LinkedIn (`https://www.linkedin.com/in/rohan-pawar-bba78b290/`), GitHub (`https://github.com/rohanpawar0006`), Bengaluru, India. Simple contact form or mailto. (Phone: do not hardcode personal mobile numbers in the repo).

### Featured case studies (the "standout" part)

Each case study is its own page with this structure: **Problem → Approach → Architecture diagram → Key decisions and trade-offs → Results/metrics → What I would improve → Links (live demo, GitHub)**.

**1. SignBridge AI — Bidirectional Indian Sign Language Communication Platform** (tagline: "Bridging Signs and Speech.")
- Real-time two-way communication between ISL users and non-signers.
- Sign → text/speech: webcam + MediaPipe hand landmarks → PyTorch Bi-LSTM (16-word vocabulary, 960 training sequences) + on-device 36-class geometric classifier (A–Z, 0–9) with a 10-frame confidence smoother; sentence builder; TTS.
- Speech/text → sign: dictionary of 52+ signs with Hindi/English, ClipPlayer playback, ISL-CSLTR sentence dataset integration.
- Extras: Live Conversation Mode, practice/quiz mode with streaks, prediction HUD, dark/light theme.
- Deployed: frontend on Vercel (https://sign-bridge-ai-alpha.vercel.app/), backend on Render (https://signbridge-ai-qybu.onrender.com). Repo: https://github.com/rohanpawar0006/SignBridge-AI
- Be honest in the write-up: the reported 100% accuracy is on my own 16-class dataset; add a short "limitations" note rather than overclaiming.
- Embed an interactive teaser or short demo video/GIF placeholder.

**2. VaultMind-RAG — Custom RAG assistant for Obsidian vaults**
- Built **without LangChain** on purpose, to show I understand core RAG mechanics.
- Pipeline: sanitize notes (strip frontmatter, clean wikilinks/callouts) → custom sliding-window chunker (~1200 chars, 200 overlap) → sentence-transformers (all-MiniLM-L6-v2) → ChromaDB → cosine search with 0.30 threshold fallback → strict grounding prompt → Gemini Flash.
- Cites sources and refuses to answer when nothing relevant is found. Streamlit UI with an Obsidian-dark theme; 18-note sample vault.
- Repo: https://github.com/rohanpawar0006/vaultmind-rag
- Show the pipeline as an animated architecture diagram.

**3. LuminAI — AI & LLM Dashboard Forecasting Analysis Platform (Internship)**
- Worked as an AI/ML intern helping businesses with intelligent dashboard forecasting and analytics powered by LLMs and predictive AI.
- Automated data consolidation, time-series forecasting, EDA, and generative KPI insights/summaries using LLMs for business intelligence decision-making.
- Write this as a case study highlighting system architecture: data pipeline → forecasting models & LLM summarization layer → interactive executive dashboard. Keep metrics and business intelligence client-safe with realistic benchmarks.

Optional 4th card (lighter, not a full case study): other resume projects (FundNest, placement prediction model) only if I confirm them. Do not invent details about them.

### Experience section
Include verified internships and student leadership roles:
1. **LuminAI** — AI & Analytics Intern (`Present / Ongoing`)
   - Helped businesses build dashboard forecasting analysis combining LLMs and AI.
   - Built predictive analytics pipelines and generative LLM reporting for executive dashboards.
2. **SOITA** — AI Agent Development Intern (`1 Month Duration`)
   - Developed autonomous AI agents, tool-calling pipelines, agentic workflows, and task execution systems.
3. **InAmigos Foundation** — Web Development Intern (`2 Weeks Duration`)
   - Built responsive web pages, frontend components, and assisted in site improvements and layout optimization.
4. **Student Tech Lead / "Student Tech Guy"** — SVCE, Bengaluru (`Oct 2023 – Present`)
   - Campus technical lead and student tech organizer: conducted workshops on tech/AI tools, organized hackathons and coding events, handled tech infrastructure/demos for college fests, and mentored peers.

### The "extra outstanding" features (make these the heart of the MVP)
Prioritize these over decoration:
1. **"Ask my portfolio" AI assistant** — a small RAG chatbot grounded only on my portfolio content (projects, skills, resume). It answers recruiter questions like "What has Rohan built with LSTMs?", always cites the section it used, and refuses to answer outside that content. This both demonstrates my skills live and reuses the approach from VaultMind-RAG. Rules: strict grounding, rate limiting, prompt-injection protection, no personal phone/email leaked, graceful fallback if the LLM API fails.
2. **Live project proof** — each project card shows live-demo status, repo link, tech badges, and one headline metric.
3. **Live GitHub activity** — fetched at build time or via a cached serverless call (not on every page load) so the site never breaks if the API is down.
4. **Interactive architecture diagrams** for the case studies (SVG or Mermaid, animated on scroll).
5. **10-second recruiter mode** — a toggle or top strip that condenses the page into role, top 3 projects, key stack, resume, and contact.
6. **Resume tailor view (stretch, Post-MVP)** — switch between "AI/ML", "Backend", and "Data Analyst" views that reorder projects and skills.

### Design direction
- **Vibe:** futuristic AI with glassmorphism, matching my GitHub profile aesthetic, but restrained: premium, not cluttered.
- Dark theme by default with a light theme toggle.
- Smooth scroll-reveal animations that respect `prefers-reduced-motion`.
- One distinctive hero element (for example, a subtle animated hand-landmark / neural-graph motif tying into SignBridge) that does not hurt performance.
- Strong typography hierarchy, accessible contrast (WCAG AA), fully responsive, keyboard navigable.
- Propose the exact palette, fonts, spacing scale, and component specs in `Design.md`.

### Technical requirements and constraints
- **Assumption (change if you recommend better, but justify in Architecture.md):** Next.js (App Router) + TypeScript + Tailwind CSS, deployed on Vercel. Content stored as typed data/MDX files in the repo (no database needed for MVP).
- The AI assistant runs through a serverless API route; the LLM API key lives in environment variables only, never in client code or the repo. Use Gemini (I already use it) unless you give a better reason. Include a `.env.example`.
- Performance targets: Lighthouse 90+ on Performance, Accessibility, Best Practices, and SEO; LCP under 2.5s on mobile.
- SEO: proper meta tags, Open Graph image, sitemap, robots.txt, structured data (Person schema).
- Analytics: privacy-friendly and optional; document the choice.
- Cost: free tier only. Document any rate limits and quotas.
- Dependencies: justify every one, per `Rules.md` rules from the documentation prompt. Prefer fewer, well-known libraries.
- Testing: component and unit tests for the assistant's grounding/refusal logic, plus Lighthouse and basic accessibility checks in CI.
- CI/CD: GitHub Actions + Vercel previews.

### Out of scope (do not build)
- A blog engine, CMS, or login/admin panel.
- A database or user accounts.
- Heavy 3D/WebGL scenes that hurt performance or accessibility.
- Fake testimonials, fake metrics, fake logos, or placeholder claims presented as real.
- Any content about applications that have not become real experience.

### Success criteria
- A recruiter can find who I am, what I build, and the best proof in under 30 seconds.
- Every featured project has a working live link and repo link.
- All Lighthouse targets met; zero console errors; works on mobile.
- The assistant answers 10 test recruiter questions correctly with citations and refuses 5 off-topic or injection-style prompts.
- No secrets in the repo; no confidential client data on the site.

---

## SUGGESTED PHASE SHAPE (refine in Phases.md, do not treat as fixed)

- Phase 0 — Repo, tooling, CI, docs committed
- Phase 1 — Design system + layout shell + theme toggle
- Phase 2 — Content model + Hero + Projects overview
- Phase 3 — Three case study pages with diagrams
- Phase 4 — Experience, Skills, Certifications, Resume, Contact
- Phase 5 — "Ask my portfolio" assistant (RAG over site content)
- Phase 6 — GitHub activity, recruiter mode, SEO, OG images
- Phase 7 — Accessibility, performance, security pass, tests
- Phase 8 — Deployment, custom domain (TBD), post-launch checklist

Each phase must produce something I can open and test, and have acceptance criteria per the documentation prompt.

---

## HOW TO COMMUNICATE WITH ME

- If you need information that materially changes architecture, security, or content (for example, which projects are public, the contact email, resume text), ask me **at once, in a single grouped list**, not one question at a time.
- For everything else, make a labeled assumption and keep going.
- Before major changes, explain what, why, which files, and risks, per `Rules.md`.
- Never claim something is done, deployed, or tested unless you actually ran it and can show the result.

## FIRST ACTION

Create the six documentation files, run the consistency review, output the Documentation Summary, list my open questions in one grouped list, and then wait for my approval before any code.
