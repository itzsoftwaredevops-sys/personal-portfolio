export type ProficiencyLevel = "Experienced With" | "Working Knowledge" | "Currently Exploring";

export interface SkillItem {
  name: string;
  level: ProficiencyLevel;
  highlight?: boolean;
  notes?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Blockchain & Web3",
    description: "Smart contract development, protocol design, EVM architecture, and decentralized verification systems.",
    skills: [
      { name: "Solidity", level: "Experienced With", highlight: true, notes: "Smart contract architecture, ERC standards, state machines" },
      { name: "Smart Contract Development", level: "Experienced With", highlight: true },
      { name: "Ethereum & EVM", level: "Experienced With", highlight: true },
      { name: "Ethereum Sepolia", level: "Experienced With", notes: "Testnet deployment, relayer pipelines, transaction tracing" },
      { name: "Hardhat", level: "Experienced With", notes: "Local test environments, deployment scripts, unit testing" },
      { name: "Decentralized Applications (DApps)", level: "Experienced With" },
      { name: "On-Chain Verification", level: "Experienced With", highlight: true, notes: "Cryptographic hash anchoring & status registries" },
      { name: "Smart Contract Testing", level: "Experienced With" },
      { name: "Blockchain Architecture", level: "Working Knowledge" },
      { name: "Web3 Protocol Design", level: "Working Knowledge" },
    ],
  },
  {
    category: "Frontend Engineering",
    description: "Modern, responsive, accessible web interfaces engineered with component-driven architecture.",
    skills: [
      { name: "React.js", level: "Experienced With", highlight: true },
      { name: "Next.js", level: "Experienced With", highlight: true, notes: "App Router, SSR, Server Components, SEO optimization" },
      { name: "TypeScript", level: "Experienced With", highlight: true, notes: "Strict typing, interface contracts, generics" },
      { name: "JavaScript (ES6+)", level: "Experienced With" },
      { name: "Tailwind CSS", level: "Experienced With", highlight: true, notes: "Utility-first design, dark-mode themes, responsive systems" },
      { name: "Responsive Web Design", level: "Experienced With" },
      { name: "HTML5 & Semantic Markup", level: "Experienced With" },
      { name: "CSS3 & Modern Layouts", level: "Experienced With" },
    ],
  },
  {
    category: "Backend & Systems",
    description: "Robust server-side architectures, RESTful APIs, database design, and secure authentication.",
    skills: [
      { name: "Node.js", level: "Experienced With", highlight: true },
      { name: "REST APIs", level: "Experienced With", highlight: true },
      { name: "Express.js", level: "Experienced With" },
      { name: "PostgreSQL", level: "Working Knowledge", highlight: true },
      { name: "Prisma ORM", level: "Working Knowledge", notes: "Schema design, migrations, relational queries" },
      { name: "SQL & Relational Databases", level: "Working Knowledge" },
      { name: "Authentication & Authorization (RBAC)", level: "Working Knowledge" },
      { name: "NestJS", level: "Currently Exploring", notes: "Enterprise-grade TypeScript backend architecture" },
    ],
  },
  {
    category: "Programming Languages",
    description: "Core programming and query languages applied across web, blockchain, and data workflows.",
    skills: [
      { name: "Solidity", level: "Experienced With", highlight: true },
      { name: "JavaScript", level: "Experienced With", highlight: true },
      { name: "TypeScript", level: "Experienced With", highlight: true },
      { name: "Python", level: "Working Knowledge", notes: "Data structures, problem solving, algorithms, scripting" },
      { name: "SQL", level: "Working Knowledge" },
    ],
  },
  {
    category: "Tools & Engineering Practices",
    description: "Development environments, version control workflows, cloud backends, and tooling.",
    skills: [
      { name: "Git", level: "Experienced With", highlight: true },
      { name: "GitHub", level: "Experienced With", highlight: true, notes: "Branching, issue resolution, PR workflows, code reviews" },
      { name: "Firebase", level: "Working Knowledge", notes: "Hosting, auth, real-time database" },
      { name: "Supabase", level: "Working Knowledge" },
      { name: "CI/CD Workflows", level: "Working Knowledge", notes: "GitHub Actions automation and testing pipelines" },
      { name: "Antigravity IDE", level: "Working Knowledge" },
      { name: "Replit", level: "Working Knowledge" },
      { name: "Figma", level: "Working Knowledge", notes: "UI/UX inspection, wireframes, design tokens" },
      { name: "AI-Assisted Development", level: "Working Knowledge" },
    ],
  },
];
