export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: "Full-Stack" | "Blockchain / Web3" | "Smart Contracts" | "Open Source" | "Developer Tools";
  subCategory: string;
  status: "Live & Deployed" | "Completed Protocol" | "Active Research" | "Open Source Contributions";
  summary: string;
  featured: boolean;
  image?: string;
  logo?: string;
  logoLightBg?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  repoLinks?: { label: string; url: string }[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
  disclaimer?: string;
  architectureDetails: {
    problemStatement: string;
    architectureOverview: string;
    keyFeatures: string[];
    technicalDecisions: { title: string; explanation: string }[];
    engineeringChallenges: { challenge: string; solution: string }[];
    verificationModel?: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "vericred",
    name: "VeriCred",
    tagline: "Verified Credentials. Trusted Futures.",
    category: "Blockchain / Web3",
    subCategory: "EdTech & Cryptographic Verification",
    status: "Live & Deployed",
    summary:
      "A decentralized academic credential verification network that guarantees certificate authenticity through canonical JSON hashing, SHA-256 proofs, and smart contracts deployed on Ethereum Sepolia.",
    featured: true,
    image: "/images/projects/vericred-banner.jpg",
    logo: "/images/projects/vericred-icon.jpg",
    liveUrl: "https://vericred.web.app/",
    technologies: [
      "Solidity",
      "Ethereum Sepolia",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "React.js",
      "RFC 8785 Canonical JSON",
      "SHA-256",
      "Hardhat",
    ],
    metrics: [
      { label: "Deployment Target", value: "Ethereum Sepolia" },
      { label: "Hashing Standard", value: "RFC 8785 + SHA-256" },
      { label: "Verification Model", value: "4-Stage Deterministic" },
      { label: "Project Nature", value: "Self-Directed Engineering" },
    ],
    disclaimer:
      "Note: VeriCred is a self-directed engineering project designed to research and demonstrate decentralized credential integrity. It is not currently an official institutional partnership of Federal University Dutse, FUTA, UNILAG, or any other academic body.",
    architectureDetails: {
      problemStatement:
        "Academic credential fraud and manual verification backlogs across higher education institutions cause severe delays, security vulnerabilities, and vulnerability to forged physical/PDF certificates. Existing database-only solutions fail because they lack tamper-evident decentralized auditability.",
      architectureOverview:
        "VeriCred employs a dual-layer hybrid architecture: an off-chain relational layer (PostgreSQL + Prisma ORM) for fast querying and institution administration, paired with an on-chain immutable registry on Ethereum Sepolia. Raw personal data is never stored on-chain; only deterministic SHA-256 digests produced from RFC 8785 canonical JSON are anchored through smart contracts via a secure backend relayer.",
      keyFeatures: [
        "Cryptographic Credential Issuance: Generates deterministic hashes using canonical JSON to eliminate whitespace/formatting variance.",
        "Public Instant Verification: Zero-login public verification interface allowing anyone with the credential ID or payload to verify integrity.",
        "Deterministic 4-Stage Verification: Separates existence, hash integrity, blockchain proof anchor, and lifecycle status.",
        "Full Lifecycle Management: Supports explicit state transitions: DRAFT → ACTIVE → SUSPENDED → ACTIVE / REVOKED.",
        "Role-Based Access Control (RBAC): Multi-tier permissions for system administrators, institution registrars, and public verifiers.",
        "Secure Relayer Architecture: Protects end users from gas volatility while enforcing strict authorization checks before submitting on-chain transactions.",
        "Comprehensive Audit Logging: Every state transition and verification query is tracked with immutable event metadata.",
      ],
      technicalDecisions: [
        {
          title: "RFC 8785 Canonical JSON Standard",
          explanation:
            "Standard JSON serialization is non-deterministic due to key ordering and whitespace differences. Implementing RFC 8785 guarantees that the identical data structure always hashes to the exact same SHA-256 digest regardless of environment or client.",
        },
        {
          title: "Hybrid Off-Chain / On-Chain Separation",
          explanation:
            "To comply with privacy considerations and avoid exorbitant gas fees, private student identifiers remain in an encrypted relational database, while only the root cryptographic hash is published to Ethereum Sepolia.",
        },
        {
          title: "Explicit State Machine in Smart Contract",
          explanation:
            "Credentials can be revoked or temporarily suspended (e.g., pending administrative audit) with deterministic on-chain status checks, preventing revoked credentials from ever verifying successfully.",
        },
      ],
      engineeringChallenges: [
        {
          challenge:
            "Ensuring client-side and server-side hash generation yield identical bytes without relying on environment-specific serialization libraries.",
          solution:
            "Engineered an RFC 8785 compliance module that deterministically sorts object keys recursively before UTF-8 encoding and computing SHA-256.",
        },
        {
          challenge:
            "Preventing race conditions and nonce synchronization failures on the Ethereum backend relayer when issuing batch certificates.",
          solution:
            "Implemented an asynchronous queued relayer worker that manages transaction nonce sequencing and automatically retries gas-price spikes.",
        },
      ],
      verificationModel: [
        "Stage 1: Record Existence — Verifies that the credential identifier exists in the registry.",
        "Stage 2: Cryptographic Integrity — Recomputes canonical hash of candidate data and validates match with recorded digest.",
        "Stage 3: On-Chain Proof Anchor — Verifies presence and timestamp of the transaction receipt on Ethereum Sepolia.",
        "Stage 4: Lifecycle Validity — Confirms state is explicitly ACTIVE and not SUSPENDED or REVOKED.",
      ],
    },
  },
  {
    slug: "stellar-contributions",
    name: "Stellar Open-Source Contributions",
    tagline: "105/105 issues resolved across Waves 9, 10 & 11 (21,800 All-Time Points).",
    category: "Open Source",
    subCategory: "Stellar Blockchain Tooling & Ecosystem",
    status: "Open Source Contributions",
    summary:
      "High-velocity open-source engineering across Drips Stellar Waves 9, 10, and 11, resolving 105 out of 105 assigned issues (20/20 in Wave 9, 45/45 in Wave 10, 40/40 in Wave 11) and earning 21,800 all-time points across smart contracts, frontends, backends, and CI/CD.",
    featured: true,
    logo: "/images/projects/stellar-wave-logo.png",
    logoLightBg: true,
    technologies: [
      "Rust",
      "Soroban",
      "TypeScript",
      "React",
      "Node.js",
      "GitHub Actions",
      "CI/CD Workflows",
      "Stellar SDK",
    ],
    metrics: [
      { label: "Total Issues Resolved", value: "105 / 105 (100%)" },
      { label: "All-Time Points", value: "21,800 pts" },
      { label: "Waves Completed", value: "Waves 9, 10 & 11" },
      { label: "Work Streams", value: "Full-Stack, Contracts & CI/CD" },
    ],
    repoLinks: [
      { label: "Emmy123222/Stellar-MarketPay-", url: "https://github.com/Emmy123222/Stellar-MarketPay-" },
      { label: "safetrustcr/frontend-SafeTrust", url: "https://github.com/safetrustcr/frontend-SafeTrust/" },
      { label: "gloam-labs/wraith", url: "https://github.com/gloam-labs/wraith/" },
      { label: "safetrustcr/backend-SafeTrust", url: "https://github.com/safetrustcr/backend-SafeTrust" },
      { label: "OFFER-HUB/OFFER-HUB-Frontend", url: "https://github.com/OFFER-HUB/OFFER-HUB-Frontend" },
      { label: "ToluLabs/StellarCred", url: "https://github.com/ToluLabs/StellarCred" },
      { label: "Divinity-Labs/Lens", url: "https://github.com/Divinity-Labs/Lens" },
      { label: "Obiajulu-gif/Prompt-Hash-Stellar", url: "https://github.com/Obiajulu-gif/Prompt-Hash-Stellar" },
      { label: "salazarsebas/Cougr", url: "https://github.com/salazarsebas/Cougr/" },
      { label: "TevaLabs/Xelma-Blockchain", url: "https://github.com/TevaLabs/Xelma-Blockchain/" },
      { label: "Stellopay/stellopay-frontend", url: "https://github.com/Stellopay/stellopay-frontend" },
      { label: "accesslayerorg/accesslayer-contracts", url: "https://github.com/accesslayerorg/accesslayer-contracts" },
      { label: "ssupportme/support-me", url: "https://github.com/ssupportme/support-me" },
      { label: "Neurowealth/NeuroWealth-Smartcontract", url: "https://github.com/Neurowealth/NeuroWealth-Smartcontract" },
      { label: "Heliobond/backend", url: "https://github.com/Heliobond/backend" },
      { label: "DocForum/docforum-escrow", url: "https://github.com/DocForum/docforum-escrow" },
      { label: "naninu123/4evergent", url: "https://github.com/naninu123/4evergent" },
      { label: "Savitura/Savitools", url: "https://github.com/Savitura/Savitools" },
    ],
    disclaimer:
      "All pull requests and issue resolutions were completed as assigned open-source contributions across community repositories during Drips Stellar Waves 9, 10, and 11.",
    architectureDetails: {
      problemStatement:
        "Ecosystem projects across the Stellar blockchain network faced critical backlog bottlenecks ranging from UI rendering bugs and state race conditions to missing automated test pipelines and broken CI/CD integration scripts.",
      architectureOverview:
        "Tackled diverse codebases in parallel across 18+ community repositories. Prioritized rapid root-cause diagnosis, reproducible test case generation, minimal scoped fixes, and clean PR documentation satisfying maintainer standards.",
      keyFeatures: [
        "100% resolution rate across three consecutive sprints: 20/20 (Wave 9), 45/45 (Wave 10), and 40/40 (Wave 11) for 105 total issues resolved.",
        "Full-stack breadth: Fixed frontend hydration bugs, backend REST validation flaws, and smart contract interaction serialization.",
        "CI/CD Workflow Hardening: Restored failing GitHub Actions pipelines, dependency cache configuration, and automated test runners.",
        "Cross-team communication: Collaborated transparently with community maintainers following strict contribution guidelines.",
      ],
      technicalDecisions: [
        {
          title: "Triage & Reproducibility First",
          explanation:
            "Before touching code, reproduced each reported issue locally with automated tests to verify the defect and avoid regression.",
        },
        {
          title: "Minimal Scoped Pull Requests",
          explanation:
            "Ensured each PR focused exclusively on the exact issue without unrelated cosmetic refactors, enabling maintainers to review and merge with zero friction.",
        },
      ],
      engineeringChallenges: [
        {
          challenge:
            "Navigating disparate code conventions, dependency mismatches, and undocumented project architectures across 18+ different repositories in tight 7-day sprint windows.",
          solution:
            "Structured an internal intake pipeline: inspecting git log, reviewing package locks, reproducing issues in isolated branches, and running targeted test suites before submission.",
        },
      ],
    },
  },
  {
    slug: "dagpulse-mining-dapp",
    name: "DAGPulse Mining DApp",
    tagline: "Wave 3 Top 4 placement decentralized mining application.",
    category: "Blockchain / Web3",
    subCategory: "Decentralized Applications & Mining Interfaces",
    status: "Completed Protocol",
    summary:
      "A high-performance decentralized application designed for real-time blockchain mining metrics, telemetry tracking, and Web3 wallet interactions. Awarded Top 4 placement in Wave 3 competition.",
    featured: true,
    image: "/images/projects/dagpulse-hero.jpg",
    logo: "/images/projects/dagpulse-logo.jpg",
    logoLightBg: true,
    technologies: ["React", "TypeScript", "Ethers.js / Web3", "Tailwind CSS", "REST APIs", "WebSocket"],
    metrics: [
      { label: "Competition Placement", value: "Top 4 (Wave 3)" },
      { label: "Category", value: "Mining & DApp Architecture" },
      { label: "Real-time Telemetry", value: "WebSocket Stream" },
    ],
    disclaimer:
      "Achievement achieved during the official Wave 3 hackathon/builder wave. Placement verified as Top 4 in the mining DApp category.",
    architectureDetails: {
      problemStatement:
        "Decentralized mining interfaces often suffer from high-latency metric updates, poor connection recovery, and confusing hash-rate calculations for end users.",
      architectureOverview:
        "Constructed an event-driven user interface connecting to streaming telemetry endpoints with optimistic UI updates and responsive charting for mining stats.",
      keyFeatures: [
        "Live Hash-rate and Share Monitoring: Real-time calculation and visualization of worker output.",
        "Seamless Web3 Wallet Integration: Connect and manage worker payouts securely.",
        "Responsive Telemetry Dashboard: Engineered with dark-mode optimized components and zero UI lag.",
      ],
      technicalDecisions: [
        {
          title: "State Throttling for High-Frequency Events",
          explanation:
            "Applied requestAnimationFrame and throttled state updates to prevent browser layout thrashing during heavy metric streams.",
        },
      ],
      engineeringChallenges: [
        {
          challenge: "Handling intermittent connection drops without losing historical telemetry data.",
          solution:
            "Engineered local indexed caching and automatic reconnection backoff to seamlessly resume telemetry feeds.",
        },
      ],
    },
  },
  {
    slug: "blockdag-intentx",
    name: "BlockDAG IntentX Protocol",
    tagline: "Decentralized intent-based systems & protocol engineering.",
    category: "Smart Contracts",
    subCategory: "Protocol Engineering & Intent Architecture",
    status: "Completed Protocol",
    summary:
      "A protocol development project focused on decentralized intent-based systems and protocol architecture on BlockDAG. Ranked on Wave 1 leaderboard with an official score of 74.0/100 (position 13th to 14th).",
    featured: true,
    image: "/images/projects/intentx-hero.jpg",
    logo: "/images/projects/intentx-logo.jpg",
    logoLightBg: true,
    technologies: ["Solidity", "Smart Contracts", "Protocol Design", "Intent Architecture", "Web3"],
    metrics: [
      { label: "Leaderboard Score", value: "74.0 / 100" },
      { label: "Wave 1 Standing", value: "Ranked 13th – 14th" },
      { label: "Architecture Type", value: "Intent-Based Protocol" },
    ],
    disclaimer:
      "Score and leaderboard positions are documented from official Wave 1 competition results.",
    architectureDetails: {
      problemStatement:
        "Traditional transaction execution models require users to explicitly specify transaction paths, resulting in higher slippage, MEV exploitation, and poor UX compared to declarative intent-based architectures.",
      architectureOverview:
        "Researched and built smart contract mechanisms that allow users to sign declarative intents which can be filled by competing solvers, optimizing execution efficiency.",
      keyFeatures: [
        "Declarative Intent Submission: Users define desired outcomes rather than imperative execution instructions.",
        "Solver Verification Logic: Smart contract guards ensuring solver settlements fulfill user conditions before executing state transitions.",
        "Gas-Efficient Settlement: Minimized on-chain execution footprint.",
      ],
      technicalDecisions: [
        {
          title: "Cryptographic Intent Validation",
          explanation: "Utilized EIP-712 structured data hashing to allow gasless user signatures for intent declarations.",
        },
      ],
      engineeringChallenges: [
        {
          challenge: "Preventing replay attacks and stale intent executions across fluctuating network states.",
          solution: "Implemented deterministic nonce management, cancellation bitmaps, and strict block-deadline checks.",
        },
      ],
    },
  },
  {
    slug: "byzantine-nexus-ng",
    name: "Byzantine Nexus NG",
    tagline: "Built for Faults. Designed to Dominate.",
    category: "Blockchain / Web3",
    subCategory: "Collaborative Web3 Development Initiative",
    status: "Active Research",
    summary:
      "A collaborative blockchain development initiative founded alongside Muhammad Mukhtar Balogun, focused on resilient Web3 systems, smart contract engineering, and fault-tolerant distributed applications.",
    featured: false,
    technologies: ["Solidity", "TypeScript", "EVM Architecture", "Decentralized Systems", "Hardhat"],
    metrics: [
      { label: "Team Initiative", value: "Byzantine Nexus NG" },
      { label: "Core Teammate", value: "Muhammad Mukhtar Balogun" },
      { label: "Focus", value: "Fault-Tolerant Web3 Systems" },
    ],
    disclaimer:
      "Byzantine Nexus NG is an ongoing collaborative engineering group. Contributions are shared between founders and presented transparently.",
    architectureDetails: {
      problemStatement:
        "Building decentralized infrastructure in emerging Web3 environments requires deep familiarity with Byzantine fault tolerance, resilient contract patterns, and modular protocols.",
      architectureOverview:
        "Formed to prototype, benchmark, and deploy decentralized applications with rigorous security standards and distributed system principles.",
      keyFeatures: [
        "Collaborative research into EVM edge cases and reentrancy vectors.",
        "Joint hackathon participation and protocol prototyping.",
        "Modular smart contract library development.",
      ],
      technicalDecisions: [
        {
          title: "Strict Test-Driven Contract Development",
          explanation: "All collaborative contracts require 100% branch test coverage before testnet deployment.",
        },
      ],
      engineeringChallenges: [
        {
          challenge: "Coordinating multi-author smart contract architectures with zero merge conflicts or conflicting invariants.",
          solution: "Adopted strict git branching conventions, modular contract interfaces, and automated CI test gates.",
        },
      ],
    },
  },
  {
    slug: "ciphermesh-ominimesh",
    name: "CipherMesh / OminiMesh",
    tagline: "Decentralized mesh networks and private distributed pipelines.",
    category: "Developer Tools",
    subCategory: "Decentralized Systems & Networking",
    status: "Active Research",
    summary:
      "An engineering exploration into decentralized mesh topologies, peer-to-peer relaying, and cryptographic data routing for censorship-resistant communication pipelines.",
    featured: false,
    technologies: ["Python", "Networking Protocols", "P2P", "Cryptography", "Distributed Systems"],
    metrics: [
      { label: "Domain", value: "P2P & Mesh Systems" },
      { label: "Stage", value: "Architectural Specification" },
    ],
    disclaimer:
      "Currently documented as an architectural exploration and case-study blueprint. Implementation details are updated as verified modules are published.",
    architectureDetails: {
      problemStatement:
        "Centralized communication hubs remain vulnerable to single-point failures, DNS hijacking, and traffic interception.",
      architectureOverview:
        "Proposes a lightweight overlay mesh where nodes communicate over encrypted peer-to-peer transport layers with decentralized routing tables.",
      keyFeatures: [
        "Peer-to-peer packet propagation protocol specification.",
        "Cryptographic node identity generation.",
        "Fault-resilient multi-hop routing heuristics.",
      ],
      technicalDecisions: [
        {
          title: "Zero-Trust Node Design",
          explanation: "Every packet is end-to-end encrypted; intermediate relayers cannot inspect payload contents.",
        },
      ],
      engineeringChallenges: [
        {
          challenge: "Designing routing algorithms that converge quickly in dynamic high-churn network environments.",
          solution: "Simulated gossip-based routing heuristics with TTL decay to prune stale routes without packet storms.",
        },
      ],
    },
  },
];
