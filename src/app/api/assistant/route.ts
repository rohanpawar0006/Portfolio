import { NextRequest, NextResponse } from 'next/server';
import { personalInfo } from '@/data/personal';
import { featuredProjects } from '@/data/projects';
import { experienceData } from '@/data/experience';
import { certificationsData } from '@/data/certifications';

// In-memory sliding-window rate limiter (10 requests per 15 minutes per IP)
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 10;
const ipRequestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (ipRequestLog.get(ip) || []).filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS
  );
  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    ipRequestLog.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  ipRequestLog.set(ip, timestamps);
  return false;
}

const INJECTION_PATTERNS = [
  /ignore\s+(all\s+)?previous\s+instructions/i,
  /system\s*prompt/i,
  /you\s+are\s+now/i,
  /act\s+as\s+/i,
  /bypass\s+rules/i,
];

function hasPromptInjection(text: string): boolean {
  return INJECTION_PATTERNS.some((pattern) => pattern.test(text));
}

const portfolioKnowledge = `
You are the personal portfolio assistant for Rohan Pawar. Provide accurate, factual, and strictly grounded answers to technical recruiters and engineers about Rohan's engineering work, projects, internships, skills, and education.

CANDIDATE INFORMATION:
Name: ${personalInfo.name}
Positioning: ${personalInfo.title}
Philosophy: ${personalInfo.philosophy}
Education: ${personalInfo.education.degree} at ${personalInfo.education.college} (${personalInfo.education.period}), CGPA: ${personalInfo.education.cgpa}.
Location: ${personalInfo.location}
Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin}
GitHub: ${personalInfo.github}

FEATURED PROJECTS:
${featuredProjects
  .map(
    (p) => `
Project ${p.number}: ${p.title} (${p.category})
Tagline: ${p.tagline}
Description: ${p.shortDescription}
Technologies: ${p.tags.join(', ')}
Features: ${p.keyFeatures.join('; ')}
Problem: ${p.caseStudy.problem}
Solution: ${p.caseStudy.solution}
Architecture: ${p.caseStudy.architectureFlow.map((s) => s.label).join(' -> ')}
Decisions: ${p.caseStudy.keyDecisions.map((kd) => `${kd.decision} (Why: ${kd.rationale})`).join(' | ')}
Limitations: ${p.caseStudy.limitationsAndFuture.join(' ')}
GitHub: ${p.links.github || 'N/A'} | Demo: ${p.links.demo || 'N/A'}
`
  )
  .join('\n')}

INTERNSHIP EXPERIENCE:
${experienceData
  .map(
    (e) => `
Company: ${e.company}
Role: ${e.role}
Duration: ${e.period} (${e.workMode}, ${e.location})
Highlights:
${e.highlights.map((h) => `- ${h}`).join('\n')}
Skills Applied: ${e.skillsApplied.join(', ')}
`
  )
  .join('\n')}

CERTIFICATIONS:
${certificationsData.map((c) => `- ${c.title} (${c.issuer})`).join('\n')}

RULES:
1. ONLY answer questions related to Rohan Pawar's portfolio, projects, internships, skills, certifications, and education.
2. If asked unrelated questions, reply: "I am grounded specifically on Rohan Pawar's engineering portfolio. I can answer questions about his projects (SignBridge AI, VaultMind-RAG), internships (LuminAI, SOiTA), or technical skills."
3. Always cite the relevant section in brackets, e.g. [Source: SignBridge AI] or [Source: SOiTA Experience].
4. Never fabricate metrics, credentials, or confidential client details.
`;

export async function POST(req: NextRequest) {
  try {
    const forwardedFor = req.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown';

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please wait a few minutes before asking again.' },
        { status: 429 }
      );
    }

    let query = '';
    try {
      const body = await req.json();
      query = typeof body === 'object' && body?.query ? body.query : '';
    } catch {
      query = '';
    }

    if (!query || typeof query !== 'string' || query.trim().length === 0) {
      return NextResponse.json({ error: 'Query is required.' }, { status: 400 });
    }

    const trimmedQuery = query.trim();
    if (trimmedQuery.length > 500) {
      return NextResponse.json({ error: 'Query exceeds 500 characters limit.' }, { status: 400 });
    }

    if (hasPromptInjection(trimmedQuery)) {
      return NextResponse.json({
        answer:
          "I can only answer questions related to Rohan Pawar's engineering portfolio, projects, internships, and technical skills.",
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Grounded local fallback when GEMINI_API_KEY is not configured
    if (!apiKey) {
      const lower = trimmedQuery.toLowerCase();

      if (lower.includes('pytorch') || lower.includes('signbridge') || lower.includes('lstm') || lower.includes('mediapipe')) {
        return NextResponse.json({
          answer:
            'In **SignBridge AI**, Rohan used **PyTorch** to train a Bidirectional LSTM for Indian Sign Language gesture recognition. MediaPipe extracts 21 3D hand landmarks from a live webcam stream, which are streamed over FastAPI WebSockets to the BiLSTM model and converted into text and bilingual speech output in a React interface.\n\n[Source: SignBridge AI Case Study]',
        });
      }

      if (lower.includes('rag') || lower.includes('vaultmind') || lower.includes('obsidian') || lower.includes('langchain')) {
        return NextResponse.json({
          answer:
            'In **VaultMind-RAG**, Rohan implemented a custom Retrieval-Augmented Generation pipeline from scratch in Python **without LangChain**. It sanitizes Obsidian Markdown notes, applies sliding-window chunking, generates local MiniLM embeddings with Sentence-Transformers, stores vectors in ChromaDB, and enforces a cosine similarity threshold before prompting the Gemini API for grounded answers with source citations.\n\n[Source: VaultMind-RAG Case Study]',
        });
      }

      if (lower.includes('soita') || lower.includes('agent') || lower.includes('claude')) {
        return NextResponse.json({
          answer:
            'As an **AI Agent Development Intern at SOiTA** (October 2026, 1 Month, Remote), Rohan built and tested AI agents and chatbots across four business workflows: customer support, invoicing follow-ups, scheduling, and inventory. He integrated Anthropic Claude APIs, connected agents to email, calendar, and CRM systems via Python and REST APIs, debugged prompt/API issues, and documented two reusable workflows.\n\n[Source: SOiTA Experience]',
        });
      }

      if (lower.includes('luminai') || lower.includes('analytics') || lower.includes('forecast') || lower.includes('internship') || lower.includes('technolog')) {
        return NextResponse.json({
          answer:
            'Across his internships at **LuminAI** (AI & Data Analytics Intern, Oct 2026 – Present) and **SOiTA** (AI Agent Development Intern), Rohan has worked with Python, SQL, Pandas, Anthropic Claude APIs, REST APIs, and forecasting dashboards. At LuminAI, he consolidated 19 months of procurement/consumption data and 3+ years of sales invoices, standardized material IDs, performed ABC spend analysis (identifying Class-A items driving 70% of spend), and contributed to monthly, quarterly, and half-yearly forecasting dashboards.\n\n[Source: LuminAI & SOiTA Experience]',
        });
      }

      return NextResponse.json({
        answer:
          'Rohan Pawar is a final-year B.E. CSE (Artificial Intelligence) student at SVCE Bengaluru (2023–2027, CGPA 7.41/10). His two featured projects are **SignBridge AI** (PyTorch BiLSTM, MediaPipe, FastAPI, WebSockets, React) and **VaultMind-RAG** (custom Python RAG without LangChain, Sentence-Transformers, ChromaDB, Gemini API, Streamlit). He has also interned at **LuminAI** and **SOiTA**.\n\n[Source: Portfolio Overview]',
      });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text: `${portfolioKnowledge}\n\nUSER QUESTION: ${trimmedQuery}\n\nAnswer concisely following all rules:`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.15,
            maxOutputTokens: 500,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.statusText}`);
    }

    const data = await response.json();
    const answer =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Unable to synthesize a grounded answer right now.';

    return NextResponse.json({ answer });
  } catch (error) {
    console.error('Assistant error:', error);
    return NextResponse.json(
      {
        answer:
          'Unable to reach the live AI service right now. You can explore all project details, internships, and skills directly on the page.',
      },
      { status: 200 }
    );
  }
}
