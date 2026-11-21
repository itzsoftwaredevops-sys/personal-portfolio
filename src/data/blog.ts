export interface TableOfContentItem {
  id: string;
  title: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  tagline: string;
  excerpt: string;
  category: "Blockchain and Web3" | "Solidity and Smart Contracts" | "Full-Stack Development" | "Open Source" | "Software Engineering" | "Developer Productivity";
  publishedAt: string;
  readingTime: string;
  author: {
    name: string;
    role: string;
    brand: string;
  };
  tableOfContents: TableOfContentItem[];
  tags: string[];
  content: string; // Markdown or rich HTML sections
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-vericred-decentralized-academic-credential-verification",
    title: "Building VeriCred: Engineering a Decentralized Academic Credential Verification Network",
    tagline: "How cryptographic hashing, RFC 8785 canonical JSON, and Ethereum Sepolia eliminate credential fraud.",
    excerpt:
      "A deep technical breakdown of VeriCred's architecture: exploring deterministic 4-stage verification, hybrid relational and on-chain registries, secure backend relayers, and state machine lifecycle management.",
    category: "Blockchain and Web3",
    publishedAt: "2026-10-15",
    readingTime: "7 min read",
    author: {
      name: "Abdulganiyyu Mustapha Muhammad",
      role: "Software Engineer & Blockchain Developer",
      brand: "Itz Software DevOps",
    },
    tags: ["Blockchain", "Solidity", "VeriCred", "Cryptography", "Ethereum Sepolia", "RFC 8785"],
    tableOfContents: [
      { id: "the-verification-problem", title: "The Problem with Academic Credential Verification" },
      { id: "core-architecture", title: "Hybrid On-Chain and Off-Chain Architecture" },
      { id: "rfc-8785-canonical-json", title: "Why RFC 8785 Canonical JSON Matters" },
      { id: "four-stage-verification", title: "The Deterministic 4-Stage Verification Model" },
      { id: "smart-contract-lifecycle", title: "Smart Contract State Machine & Relayers" },
      { id: "key-takeaways", title: "Engineering Takeaways & Lessons Learned" },
    ],
    content: `## The Problem with Academic Credential Verification

In higher education, verifying academic certificates remains slow, manual, and susceptible to document forgery. Traditional approaches rely on centralized registrar databases or PDF documents with visual stamps that can be manipulated in desktop image editors.

While storing certificates on a blockchain is often proposed as a solution, naive implementations make critical mistakes:
1. **Storing private student data directly on-chain**, violating data privacy standards and creating immutable leaks of personally identifiable information (PII).
2. **Excessive gas overhead** by writing full certificate records instead of compact cryptographic proofs.
3. **Non-deterministic serialization**, where whitespace changes or differing JSON key orders produce mismatched cryptographic digests for the same certificate data.

VeriCred was engineered as a self-directed research project to address these challenges with an architecture combining relational data stores, canonical JSON serialization, and immutable cryptographic proofs on Ethereum Sepolia.

---

## Hybrid On-Chain and Off-Chain Architecture

VeriCred splits concerns strictly into two layers:

- **Off-Chain Relational Store (PostgreSQL + Prisma ORM):** Manages institution registration, administrative roles, private student metadata, issuing audit logs, and search indexing.
- **On-Chain Proof Anchor (Ethereum Sepolia):** A minimal Solidity smart contract registry that stores only deterministic 32-byte hashes (\`bytes32\`), issuing timestamp, issuing authority public address, and current lifecycle state.

This model preserves student privacy: the public ledger contains only uninvertible cryptographic hashes.

\`\`\`
[Academic Institution] 
         │
         ▼
[RFC 8785 Canonical Serializer] ──> [SHA-256 Digest]
         │                                   │
         ▼                                   ▼
[PostgreSQL Database (Private Metadata)]    [Secure Relayer Worker]
                                                     │
                                                     ▼
                                            [Ethereum Sepolia Contract]
                                            (bytes32 digest, state, timestamp)
\`\`\`

---

## Why RFC 8785 Canonical JSON Matters

Standard \`JSON.stringify()\` in JavaScript does not guarantee key ordering across platforms or language runtimes. If an institution generates a hash from a JSON object where \`studentId\` precedes \`grade\`, but an independent verifier serializes with \`grade\` first, the resulting SHA-256 digests will differ completely.

VeriCred addresses this by strictly adhering to **RFC 8785 (JSON Canonicalization Scheme - JCS)**:
- Object keys are sorted lexicographically by UTF-16 code units.
- Whitespace is stripped outside string literals.
- Numbers follow IEEE 754-2008 representation without trailing decimal zeros.

With RFC 8785, any verifier anywhere in the world who inputs the certificate metadata will compute the exact same SHA-256 byte sequence.

---

## The Deterministic 4-Stage Verification Model

A core contribution of VeriCred's engineering is separating credential validity into four distinct checks:

1. **Stage 1: Record Existence** — Verifies whether the credential identifier exists in the registry index.
2. **Stage 2: Cryptographic Integrity** — Recomputes the canonical JSON SHA-256 digest of the presented payload and confirms it matches the recorded root digest.
3. **Stage 3: Blockchain Proof Anchor** — Verifies that the hash was successfully mined into an Ethereum block, extracting the transaction receipt and block timestamp.
4. **Stage 4: State Machine Lifecycle** — Confirms that the credential's status is explicitly \`ACTIVE\` and has not transitioned to \`SUSPENDED\` or \`REVOKED\`.

By separating integrity from lifecycle status, the system can distinguish between a corrupted/forged document and a real document that was revoked for academic misconduct.

---

## Smart Contract State Machine & Relayers

The Solidity contract models credential state as an explicit enum:

\`\`\`solidity
enum CredentialStatus {
    DRAFT,
    ACTIVE,
    SUSPENDED,
    REVOKED
}

struct CredentialRecord {
    bytes32 dataHash;
    address issuer;
    uint64 issuedAt;
    uint64 updatedAt;
    CredentialStatus status;
}
\`\`\`

End users and registrars do not need direct cryptocurrency wallets to issue credentials. Instead, an authorized backend relayer signs and broadcasts transactions to the Sepolia testnet, absorbing gas costs while strictly enforcing authenticated institution sessions.

---

## Engineering Takeaways & Lessons Learned

1. **Decentralization belongs at the trust boundary:** Don't put business logic or relational queries on-chain; use the blockchain as an immutable verification anchor.
2. **Determinism requires strict specifications:** Never rely on default serialization engines when computing cryptographic fingerprints.
3. **Explicit state machines prevent logic flaws:** Lifecycle enums on-chain make state transitions auditable and irreversible where appropriate.`,
  },
  {
    slug: "deterministic-hashing-rfc-8785-canonical-json-web3",
    title: "Deterministic State & Hashing: Implementing RFC 8785 Canonical JSON in Web3",
    tagline: "Eliminating subtle verification mismatches between frontend clients and smart contract relayers.",
    excerpt:
      "Why standard JSON serialization fails in cryptographic verification and how RFC 8785 provides deterministic guarantees for hashing, zero-knowledge proofs, and on-chain credentialing.",
    category: "Software Engineering",
    publishedAt: "2026-10-28",
    readingTime: "5 min read",
    author: {
      name: "Abdulganiyyu Mustapha Muhammad",
      role: "Software Engineer & Blockchain Developer",
      brand: "Itz Software DevOps",
    },
    tags: ["Cryptography", "Web3", "JavaScript", "Python", "JSON", "Security"],
    tableOfContents: [
      { id: "serialization-trap", title: "The Serialization Trap in Cryptography" },
      { id: "anatomy-of-rfc-8785", title: "Anatomy of RFC 8785 JCS" },
      { id: "implementation-patterns", title: "Implementation Patterns Across JS and Python" },
      { id: "production-considerations", title: "Production Considerations & Edge Cases" },
    ],
    content: `## The Serialization Trap in Cryptography

When verifying signatures or anchoring state hashes on-chain, developers frequently encounter the "serialization trap": two objects containing identical data compute two completely different SHA-256 hashes.

Consider this trivial example:

\`\`\`json
// Object A
{"name": "Mustapha", "role": "Engineer"}

// Object B
{"role": "Engineer", "name": "Mustapha"}
\`\`\`

Semantically, Object A and Object B represent the identical record. However, standard string serialization hashes Object A to one digest and Object B to another. If a client validates a document produced by an institutional backend, the verification fails simply due to key reordering.

---

## Anatomy of RFC 8785 JCS

RFC 8785 (JSON Canonicalization Scheme) specifies deterministic rules:
- **Lexicographical Key Sorting:** Keys are sorted by Unicode code point values.
- **Strict Number Formatting:** Exponents and decimals are normalized.
- **Whitespace Elimination:** No spaces, tabs, or newlines between structural characters.
- **UTF-8 Byte Encoding:** Deterministic byte stream for direct ingestion into SHA-256 or Keccak-256 hash functions.

Applying RFC 8785 ensures that regardless of whether the encoder runs in a Node.js server, a Python SIWES script, or a browser frontend, the calculated hash is byte-for-byte identical.`,
  },
  {
    slug: "resolving-45-issues-in-7-days-stellar-ecosystem",
    title: "45 Issues in 7 Days: High-Velocity Engineering Lessons in Open Source",
    tagline: "How rigorous intake triage, minimal scoped diffs, and reproducible tests unlocked 100% completion in Drips Stellar Wave 10.",
    excerpt:
      "A retrospective on resolving 45 assigned issues across eight distinct Stellar ecosystem codebases in a single week. Tactical insights into code triage, CI/CD pipeline fixing, and maintainer alignment.",
    category: "Open Source",
    publishedAt: "2026-11-05",
    readingTime: "6 min read",
    author: {
      name: "Abdulganiyyu Mustapha Muhammad",
      role: "Software Engineer & Blockchain Developer",
      brand: "Itz Software DevOps",
    },
    tags: ["Open Source", "Stellar", "CI/CD", "TypeScript", "Engineering Discipline", "DevOps"],
    tableOfContents: [
      { id: "the-challenge", title: "The 7-Day Sprint Challenge" },
      { id: "triage-framework", title: "The 3-Step Triage Framework" },
      { id: "solving-ci-cd", title: "Rescuing Broken CI/CD Workflows" },
      { id: "maintainer-first-prs", title: "Engineering Maintainer-Friendly Pull Requests" },
      { id: "conclusion", title: "Conclusion: Velocity with Engineering Discipline" },
    ],
    content: `## The 7-Day Sprint Challenge

During Drips Stellar Wave 10, I took on the commitment to resolve 45 assigned engineering issues across eight independent community repositories in seven days.

Working across multiple unfamiliar codebases in parallel introduces severe risks:
- Broken local setups and unpinned package managers.
- Unclear bug reports.
- Risk of unintended regressions.
- Merge conflicts from concurrent contributors.

Achieving a 100% completion rate required an uncompromising engineering intake discipline.

---

## The 3-Step Triage Framework

To maintain speed without sacrificing quality, every issue followed a strict triage pipeline:

1. **Verify & Isolate:** Reproduce the problem with a minimal test case before writing any fix. If a bug cannot be reproduced locally, investigate the environment rather than guessing at the code.
2. **Minimal Surgical Edit:** Identify the single source of failure. Never combine a bug fix with style reformatting or unrelated file cleanup. Maintainers reject noisy diffs.
3. **Local Validation Gate:** Execute type-checking, linting, and targeted unit tests to ensure zero regressions before opening the pull request.

---

## Rescuing Broken CI/CD Workflows

A recurring obstacle in multiple repositories was decaying GitHub Actions configurations: deprecated runner versions, missing secret stubs for PR forks, and broken dependency caching.

Fixing these pipelines unblocked other contributors and demonstrated immediate value to repository maintainers:
- Updated stale Node.js matrix versions.
- Added deterministic package-lock verification (\`npm ci\`).
- Isolated integration tests that required live network testnets into optional workflow triggers.

---

## Engineering Maintainer-Friendly Pull Requests

The easiest way to get a pull request merged is to write it from the perspective of an exhausted maintainer:
- Clearly state what broke.
- Explain why the chosen fix works.
- Include logs or terminal output demonstrating local test execution.
- Link the exact issue number (\`Closes #123\`).

By treating every pull request as a professional deliverable, all 45 issues were successfully landed within the sprint timeframe.`,
  },
];
