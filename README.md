# Rohan Pawar — AI/ML Engineering Portfolio

Personal engineering portfolio for **Rohan Pawar** (B.E. Computer Science & Engineering — Artificial Intelligence, SVCE Bengaluru, 2023–2027), built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS 4**.

> *"I don't just experiment with AI. I build systems that solve practical problems."*

---

## Featured Systems

1. **SignBridge AI** — Bidirectional Indian Sign Language (ISL) communication platform using MediaPipe (21 3D hand landmarks), PyTorch Bidirectional LSTM, FastAPI WebSockets, and React.
   - Live Demo: https://frontend-rohanpawar0006s-projects.vercel.app/
   - Repository: https://github.com/rohanpawar0006/SignBridge-AI
2. **VaultMind-RAG** — Custom Retrieval-Augmented Generation assistant for personal Obsidian Markdown vaults, implemented from scratch in Python without LangChain using Sentence-Transformers (MiniLM), ChromaDB, Gemini API, and Streamlit.
   - Live Demo: https://vaultmind-rag.streamlit.app/
   - Repository: https://github.com/rohanpawar0006/vaultmind-rag

---

## Key Features

- **Dedicated Project Case Studies (`/projects/[id]`):** Overview, problem statement, solution, architecture flow diagram, individual contributions, engineering decisions & trade-offs, challenges, and honest limitations.
- **Interactive Experience Timeline:** Highlights internships at **LuminAI** (AI & Data Analytics Intern) and **SOiTA** (AI Agent Development Intern).
- **Domain-Organized Skills & Credentials:** Categorized technical stack with project/internship references (no arbitrary percentage bars) and verified certifications.
- **Recruiter View & Ask My Portfolio:** Executive summary modal (`Recruiter View`) and a rate-limited, strictly grounded AI assistant (`/api/assistant`) backed by Google Gemini with offline fallback.
- **Cached GitHub Activity:** Fetches public repositories for `rohanpawar0006` with Next.js revalidation (`3600s`) and graceful fallback.
- **Theme Switcher & SEO:** Dark mode default with persisted light mode toggle, `Space Grotesk` / `Inter` / `JetBrains Mono` typography, `sitemap.xml`, `robots.txt`, OpenGraph metadata, and `Person` JSON-LD structured data.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router) & React 19
- **Language:** TypeScript (`strict: true`)
- **Styling:** Tailwind CSS 4 + CSS design tokens
- **Icons:** Lucide React
- **AI Assistant:** Server-side Google Gemini API (`POST /api/assistant`)

---

## Project Structure

```text
src/
├── app/
│   ├── api/assistant/route.ts    # Rate-limited grounded AI assistant endpoint
│   ├── projects/[id]/page.tsx    # Dedicated static case study pages
│   ├── globals.css               # Dark/light theme tokens & typography
│   ├── layout.tsx                # Fonts, SEO metadata & JSON-LD schema
│   ├── page.tsx                  # Main portfolio page
│   ├── robots.ts                 # Dynamic robots.txt
│   └── sitemap.ts                # Dynamic sitemap.xml
├── components/                   # Reusable UI & section components
├── data/                         # Centralized content stores (projects, experience, skills, etc.)
├── lib/                          # GitHub API helper with ISR & fallback
└── types/                        # TypeScript interfaces
```

---

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables (optional):**
   Copy `.env.example` to `.env.local` and add your Gemini API key if you want live LLM responses in the portfolio assistant (without it, the assistant uses its grounded local fallback):
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   NEXT_PUBLIC_SITE_URL=https://rohanpawar.dev
   ```

3. **Add your resume PDF (optional):**
   Place your resume at `public/resume.pdf` to enable direct downloads from the Resume buttons.

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

5. **Lint & production build:**
   ```bash
   npm run lint
   npm run build
   ```

---

## Deployment (Vercel)

1. Connect `https://github.com/rohanpawar0006/Portfolio` to a new Vercel project.
2. Add `GEMINI_API_KEY` (and `NEXT_PUBLIC_SITE_URL`) in **Project Settings → Environment Variables**.
3. Deploy.

---

## Contact

- **GitHub:** https://github.com/rohanpawar0006
- **LinkedIn:** https://www.linkedin.com/in/rohan-pawar-bba78b290/
- **Email:** rohanpawar0006@gmail.com
- **Location:** Bengaluru, India
