export interface ExperienceItem {
  id: string;
  type: "Education" | "Industrial Training" | "Open Source" | "Team Initiative";
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  bulletPoints: string[];
  technologies: string[];
  verifiedReference?: string;
  verifiedReferenceUrl?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "fud-bsc",
    type: "Education",
    title: "B.Sc. in Software Engineering",
    organization: "Federal University Dutse (FUD)",
    period: "Undergraduate (In Progress)",
    location: "Jigawa State, Nigeria",
    description:
      "Pursuing a comprehensive Bachelor of Science degree in Software Engineering, building rigorous theoretical foundations in software architecture, algorithms, database management systems, distributed systems, and computer science principles.",
    bulletPoints: [
      "Rigorous coursework in software engineering principles, algorithms, data structures, and system design.",
      "Hands-on technical implementation of database systems, object-oriented programming, and computer networks.",
      "Active participant in technical problem-solving, peer code reviews, and software project teams.",
      "Dedicated focus on smart contract development, cryptographic integrity, and modern full-stack web architectures.",
    ],
    technologies: ["Software Engineering", "Algorithms", "Data Structures", "Database Systems", "Computer Architecture"],
  },
  {
    id: "crai-lab-siwes",
    type: "Industrial Training",
    title: "Industrial Training / SIWES Technical Intern",
    organization: "Compute Research Acceleration Initiative AI Research Laboratory (CRAI LAB), Federal University Dutse",
    period: "1 June 2026 – 13 November 2026",
    location: "Dutse, Jigawa State, Nigeria",
    description:
      "Completed an intensive industrial training program focused on core software engineering disciplines, responsive web engineering, advanced Python programming, relational database systems, and introductory machine learning concepts.",
    bulletPoints: [
      "Front-End Engineering: Built responsive web interfaces with semantic HTML5, CSS3, modern flexbox/grid architectures, and JavaScript.",
      "Python Programming & Data Structures: Engineered technical solutions using advanced Python data structures and algorithmic routines.",
      "Relational Database Management (RDBMS): Designed relational schemas, executed complex SQL queries, and implemented data normalization.",
      "Artificial Intelligence & Machine Learning: Studied foundational AI/ML concepts and practical computational problem-solving workflows.",
      "Software Development Lifecycle: Participated in structured development cycles, documentation, debugging, and code reviews.",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "Responsive Web Design",
      "JavaScript",
      "Python",
      "Advanced Python Data Structures",
      "SQL",
      "RDBMS",
      "Machine Learning Fundamentals",
    ],
  },
  {
    id: "stellar-open-source",
    type: "Open Source",
    title: "Open-Source Contributor (Drips Stellar Waves 9, 10 & 11)",
    organization: "Stellar Blockchain Developer Community",
    period: "Waves 9, 10 & 11",
    location: "Global / Distributed",
    description:
      "Active open-source contributor across Drips Stellar Waves 9, 10, and 11, achieving a 100% completion rate by resolving 105 out of 105 assigned issues (20/20 in Wave 9, 45/45 in Wave 10, 40/40 in Wave 11) and earning 21,800 all-time points across 18+ community repositories.",
    bulletPoints: [
      "Resolved 105 assigned issues across three consecutive 7-day sprints (Wave 9: 20/20, 3,600 pts; Wave 10: 45/45, 7,650 pts; Wave 11: 40/40, 10,550 pts).",
      "Contributed across frontends, backends, Soroban/smart contract interfaces, escrow systems, and CI/CD automation pipelines.",
      "Hardened failing GitHub Actions workflows, resolved package dependency discrepancies, and configured automated test runs.",
      "Adhered to strict maintainer review standards with reproducible tests and atomic, well-documented pull requests across 18+ ecosystem repositories.",
    ],
    technologies: ["TypeScript", "React", "Node.js", "Rust", "Soroban", "GitHub Actions", "CI/CD", "Stellar SDK"],
    verifiedReference: "Drips Stellar Waves 9, 10 & 11",
  },
  {
    id: "byzantine-nexus",
    type: "Team Initiative",
    title: "Co-Founder & Blockchain Engineer",
    organization: "Byzantine Nexus NG",
    period: "Collaborative Initiative",
    location: "Nigeria / Remote",
    description:
      "Co-founded Byzantine Nexus NG alongside Muhammad Mukhtar Balogun as a dedicated Web3 research and development group operating under the ethos: 'Built for Faults. Designed to Dominate.'",
    bulletPoints: [
      "Collaborative engineering of resilient smart contracts and fault-tolerant decentralized applications.",
      "Researching EVM execution mechanics, zero-knowledge verification patterns, and modular rollup architectures.",
      "Prototyping decentralized tools and participating in competitive blockchain hackathons.",
    ],
    technologies: ["Solidity", "TypeScript", "EVM", "Hardhat", "Decentralized Systems"],
  },
];
