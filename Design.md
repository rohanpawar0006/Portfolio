# Design System & UI/UX Specification — Rohan Pawar Portfolio

**Status:** Draft / Pending Approval  
**Design Theme:** Futuristic AI / Dark Glassmorphism (Restrained & High-Performance)  
**Accessibility Target:** WCAG 2.1 Level AA Compliance  

---

## 1. Visual Identity & Design Philosophy

### 1.1 Aesthetic Pillars
- **Futuristic & Intelligent:** Subtle neon accents, dark obsidian canvases, soft cyber glows, and precision-engineered typography evoke state-of-the-art AI systems.
- **Restrained & Editorial:** Avoid chaotic gamer/crypto tropes. Clean grids, generous whitespace, balanced micro-interactions, and deliberate hierarchy ensure recruiters focus on evidence and proof.
- **Glassmorphism with Discipline:** Translucent card surfaces (`backdrop-blur-md`) with 1px border highlights (`border-white/10`) to create spatial depth without rendering lag.

---

## 2. Color Palette & Design Tokens

### 2.1 Dark Mode (Default)
| Token Name | Hex / Value | Usage & Semantics |
| :--- | :--- | :--- |
| `--bg-base` | `#08090D` | Primary deep obsidian background |
| `--bg-surface` | `#11131A` | Secondary surface / Card background |
| `--bg-glass` | `rgba(17, 19, 26, 0.72)` | Translucent glass container (`backdrop-blur-md`) |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Standard card and divider borders |
| `--border-active` | `rgba(99, 102, 241, 0.35)` | Interactive hover & focus ring borders |
| `--accent-cyan` | `#06B6D4` | AI & Vision highlights (SignBridge motif) |
| `--accent-indigo` | `#6366F1` | Primary CTA, active states, LLM features |
| `--accent-emerald`| `#10B981` | "Live / Shipped" status indicators & success badges |
| `--text-primary` | `#F8FAFC` | Headings and high-contrast body text (Contrast > 14:1) |
| `--text-secondary`| `#94A3B8` | Subtitles, metadata, secondary descriptions (Contrast > 6:1) |
| `--text-muted` | `#64748B` | Subtle footnotes and disabled states |

### 2.2 Light Mode (Toggle State)
| Token Name | Hex / Value | Usage & Semantics |
| :--- | :--- | :--- |
| `--bg-base` | `#F8FAFC` | Crisp off-white primary canvas |
| `--bg-surface` | `#FFFFFF` | Solid card container |
| `--bg-glass` | `rgba(255, 255, 255, 0.85)` | Frosted glass card with subtle shadow |
| `--border-subtle` | `rgba(15, 23, 42, 0.08)` | Subtle light borders |
| `--accent-indigo` | `#4F46E5` | High-contrast indigo for buttons and focus rings |
| `--text-primary` | `#0F172A` | Deep slate for maximum legibility |
| `--text-secondary`| `#475569` | Mid-slate body text |

---

## 3. Typography Scale & Fonts

- **Primary Sans Font:** `Inter` or `Plus Jakarta Sans` (Clean, geometric, legible at small code sizes).
- **Display / Heading Font:** `Outfit` or `Space Grotesk` (Modern, futuristic tech aesthetic).
- **Monospace Font:** `JetBrains Mono` or `Fira Code` (For architecture metrics, terminal tags, and code snippets).

### Scale Hierarchy
- **Display 1 (Hero Title):** `3.25rem` / `52px` (Mobile: `2.25rem` / `36px`), Bold (700), tracking -0.02em.
- **Heading 1 (Section Titles):** `2.25rem` / `36px` (Mobile: `1.75rem` / `28px`), SemiBold (600).
- **Heading 2 (Card Titles):** `1.35rem` / `22px`, SemiBold (600).
- **Body Regular:** `1.00rem` / `16px`, Regular (400), line-height 1.6.
- **Body Small / Badges:** `0.875rem` / `14px`, Medium (500).
- **Micro / Tags:** `0.75rem` / `12px`, Mono, uppercase, tracking +0.05em.

---

## 4. Key Component Specifications

### 4.1 Header & Navigation
- Fixed floating glass bar (`top-4`, centered, max-w-5xl, rounded-full or rounded-2xl).
- Left: Monogram `RP / AI` with active pulsating status dot ("Open to Roles").
- Center: Anchor navigation links (`Projects`, `Experience`, `Skills`, `Resume`, `Contact`).
- Right: **10-Second Recruiter Toggle** + Dark/Light Theme Switch + GitHub icon.

### 4.2 Hero Section & Neural Landmark Motif
- **Positioning:** Full viewport height or `min-h-[85vh]`, flex column, centered vertical alignment.
- **Neural Landmark Canvas:** Subtle HTML5 canvas rendering connecting nodes and simulated hand-landmark points in background. Moves smoothly on gentle mouse hover; throttled to 30 FPS to preserve mobile battery; disabled when `prefers-reduced-motion` is active.
- **Headline:** *"Rohan Pawar — Engineering Systems that Reason & Scale."*
- **Sub-headline:** *"AIML-DS Engineer specializing in AI/ML systems, Python backends, and data analytics. Built SignBridge AI, VaultMind-RAG, and enterprise forecasting pipelines."*
- **CTAs:**
  - Button A (Solid Glow): "Explore Featured Projects" (smooth scroll to `#projects`).
  - Button B (Glass Outline): "Download Resume (PDF)" (opens `/resume.pdf`).

### 4.3 10-Second Recruiter Mode
- A sticky header toggle that, when enabled, transforms the page into an executive summary overlay:
  - **Candidate Snapshot:** Rohan Pawar | B.E. AIML-DS (Grad 2027) | SVCE Bengaluru.
  - **Core Roles:** AI/ML Engineer • Python Backend Developer • Data Analyst.
  - **Top 3 Proof Points:** SignBridge AI (Bi-LSTM ISL), VaultMind-RAG (Scratch RAG), LuminAI (LLM Forecasting).
  - **Core Stack:** Python, PyTorch, Next.js, FastAPI, ChromaDB, Gemini, SQL.
  - **Direct Actions:** One-click PDF download & Email trigger.

### 4.4 Case Study Cards & Deep Dive Pages
- **Card Anatomy:**
  - Top: Category pill (e.g. `Vision + NLP`, `RAG Architecture`, `Predictive Analytics`) + Status badge (`Live Demo`, `Open Source`).
  - Middle: Project Title + 2-line problem-solution statement.
  - Key Headline Metric pill (e.g. *"960 sequences • 16-word Bi-LSTM"*, *"0.30 threshold fallback"*, *"Automated time-series EDA"*).
  - Bottom: Tech stack icons + "Read Deep Case Study →" link.
- **Deep Case Study Layout:**
  - Sticky sub-nav for fast jump: Problem, Approach, Architecture, Trade-offs, Results, Limitations, Repos.
  - Architecture flow rendered via high-contrast Mermaid diagrams or animated SVG pipes.

### 4.5 Experience Timeline
- Vertical timeline with glowing line connecting cards:
  1. **LuminAI** — AI & Analytics Intern (`TBD: dates`)
  2. **SOITA** — AI Agent Development Intern (`TBD: dates`)
  3. **InAmigos Foundation** — Web Development Intern (2 weeks, `TBD: dates`)
  4. **Student Tech Lead / "Student Tech Guy"** — SVCE, Bengaluru (`TBD: dates/club`)
- Each card displays company, role, key achievements, and skills applied tags.

### 4.6 "Ask My Portfolio" AI Assistant Drawer
- Trigger: Floating action button bottom-right with glowing gradient ring and badge: *"Ask AI about Rohan"*.
- Modal UI: Slide-over drawer on desktop, bottom sheet on mobile.
- Features:
  - Welcome greeting with 3 clickable prompt suggestions (*"What has Rohan built with PyTorch?"*, *"Explain the VaultMind-RAG pipeline"*, *"Tell me about his internship at LuminAI"*).
  - Real-time markdown streaming with code snippets and source pills.
  - Disclaimer footer: *"Grounded exclusively on Rohan's verified portfolio. Rate-limited."*

---

## 5. Animation & Interaction Guidelines

- **Transitions:** Standard cubic bezier easing: `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Durations:** Hover micro-interactions: `150ms – 250ms`; Section reveal on scroll: `400ms – 600ms`.
- **Card Hover:** Subtle translate `-4px` on Y-axis with accent border glow `box-shadow: 0 0 25px rgba(99, 102, 241, 0.15)`.
- **Accessibility Safeguard:**
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
