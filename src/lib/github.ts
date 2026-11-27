import { GitHubProfileData, GitHubRepoSummary } from '@/types';
import { personalInfo } from '@/data/personal';

const FALLBACK_GITHUB_DATA: GitHubProfileData = {
  login: personalInfo.githubUsername,
  name: personalInfo.name,
  bio: 'AI/ML Engineer | AI Agent Developer | Python Backend Developer',
  public_repos: 0,
  followers: 0,
  following: 0,
  html_url: personalInfo.github,
  avatar_url: '',
  repos: [
    {
      name: 'SignBridge-AI',
      description:
        'Bidirectional Indian Sign Language communication platform using PyTorch BiLSTM, MediaPipe 3D hand landmarks, FastAPI WebSockets, and React.',
      html_url: 'https://github.com/rohanpawar0006/SignBridge-AI',
      language: 'Python',
      stargazers_count: 0,
      forks_count: 0,
      updated_at: '',
    },
    {
      name: 'vaultmind-rag',
      description:
        'Custom Retrieval-Augmented Generation assistant for Obsidian vaults built from scratch without LangChain using Sentence-Transformers, ChromaDB, and Gemini API.',
      html_url: 'https://github.com/rohanpawar0006/vaultmind-rag',
      language: 'Python',
      stargazers_count: 0,
      forks_count: 0,
      updated_at: '',
    },
  ],
  isFallback: true,
};

export async function getGitHubActivity(): Promise<GitHubProfileData> {
  const username = personalInfo.githubUsername;
  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'rohanpawar-portfolio',
  };

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6&type=owner`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return FALLBACK_GITHUB_DATA;
    }

    const userJson = await userRes.json();
    const reposJson = (await reposRes.json()) as GitHubRepoSummary[];

    const repos: GitHubRepoSummary[] = Array.isArray(reposJson)
      ? reposJson
          .filter((r) => !r.name.startsWith('.'))
          .slice(0, 4)
          .map((r) => ({
            name: r.name,
            description: r.description,
            html_url: r.html_url,
            language: r.language,
            stargazers_count: r.stargazers_count ?? 0,
            forks_count: r.forks_count ?? 0,
            updated_at: r.updated_at ?? '',
          }))
      : FALLBACK_GITHUB_DATA.repos;

    return {
      login: userJson.login || username,
      name: userJson.name || personalInfo.name,
      bio: userJson.bio || FALLBACK_GITHUB_DATA.bio,
      public_repos: typeof userJson.public_repos === 'number' ? userJson.public_repos : repos.length,
      followers: typeof userJson.followers === 'number' ? userJson.followers : 0,
      following: typeof userJson.following === 'number' ? userJson.following : 0,
      html_url: userJson.html_url || personalInfo.github,
      avatar_url: userJson.avatar_url || '',
      repos: repos.length > 0 ? repos : FALLBACK_GITHUB_DATA.repos,
      isFallback: false,
    };
  } catch {
    return FALLBACK_GITHUB_DATA;
  }
}
