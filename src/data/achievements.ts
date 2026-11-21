export interface Achievement {
  id: string;
  title: string;
  category: "Open Source" | "Hackathon / Competition" | "Protocol Engineering";
  context: string;
  metric: string;
  dateOrWave: string;
  description: string;
  verificationDetails: string;
  relatedProjectSlug?: string;
  badge: string;
}

export const achievements: Achievement[] = [
  {
    id: "stellar-wave-10",
    title: "45/45 Assigned Issues Resolved in 7 Days",
    category: "Open Source",
    context: "Drips Stellar Wave 10 Challenge",
    metric: "100% Completion (45/45)",
    dateOrWave: "Drips Wave 10",
    description:
      "Achieved a 100% resolution rate by diagnosing, fixing, testing, and successfully submitting pull requests for all 45 assigned issues across eight distinct Stellar ecosystem repositories within a single seven-day window.",
    verificationDetails:
      "Covered full-stack debugging, React frontend fixes, backend API validations, smart contract interface corrections, and GitHub Actions CI/CD pipeline repairs across community projects.",
    relatedProjectSlug: "stellar-contributions",
    badge: "100% Completion Rate",
  },
  {
    id: "dagpulse-wave-3",
    title: "Top 4 Placement in Wave 3",
    category: "Hackathon / Competition",
    context: "DAGPulse Mining DApp Competition",
    metric: "Top 4 Placement",
    dateOrWave: "Wave 3",
    description:
      "Engineered and submitted the DAGPulse Mining DApp, earning a verified Top 4 ranking in the decentralized mining application category.",
    verificationDetails:
      "Evaluated on real-time telemetry streaming responsiveness, UI/UX architecture, Web3 wallet interaction reliability, and overall engineering stability.",
    relatedProjectSlug: "dagpulse-mining-dapp",
    badge: "Top 4 Finalist",
  },
  {
    id: "blockdag-intentx-wave-1",
    title: "Wave 1 Leaderboard Score: 74.0/100",
    category: "Protocol Engineering",
    context: "BlockDAG IntentX Protocol Challenge",
    metric: "74.0 / 100 (Pos 13th – 14th)",
    dateOrWave: "Wave 1",
    description:
      "Architected and deployed protocol modules for decentralized intent-based settlement on BlockDAG, achieving a verified leaderboard score of 74.0/100 and rising from 13th to 14th position.",
    verificationDetails:
      "Scored on intent verification logic, gas execution optimization, cryptographic signature handling, and contract state transition safety.",
    relatedProjectSlug: "blockdag-intentx",
    badge: "Leaderboard Ranked",
  },
];
