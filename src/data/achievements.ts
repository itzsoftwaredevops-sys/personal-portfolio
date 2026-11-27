export interface Achievement {
  id: string;
  title: string;
  category: "Open Source" | "Hackathon / Competition" | "Protocol Engineering";
  context: string;
  metric: string;
  dateOrWave: string;
  pointsEarned?: string;
  rewardGrant?: string;
  logo?: string;
  logoLightBg?: boolean;
  description: string;
  verificationDetails: string;
  relatedProjectSlug?: string;
  badge: string;
}

export const stellarWaveSummary = {
  program: "Drips Stellar Wave Program",
  logo: "/images/projects/stellar-wave-logo.png",
  allTimePoints: "21,800 pts",
  totalIssuesResolved: "105 / 105 (100%)",
  wavesCompleted: "Waves 9, 10 & 11",
  confirmedGrants: "$46+ ($18 Wave 9, $28 Wave 10, Wave 11 TBD)",
};

export const achievements: Achievement[] = [
  {
    id: "stellar-wave-11",
    title: "40/40 Assigned Issues Resolved in 7 Days",
    category: "Open Source",
    context: "Drips Stellar Wave 11",
    metric: "100% Completion (40/40)",
    dateOrWave: "Stellar Wave 11",
    pointsEarned: "10,550 pts",
    rewardGrant: "TBD",
    logo: "/images/projects/drips-waves.jpg",
    logoLightBg: false,
    description:
      "Maintained a 100% completion rate in Drips Stellar Wave 11 by resolving all 40 assigned issues within seven days, earning 10,550 points in the wave.",
    verificationDetails:
      "Delivered verified pull requests across Stellar ecosystem repositories spanning smart contracts, full-stack web features, and automated workflows. Wave 11 reward grant is currently TBD.",
    relatedProjectSlug: "stellar-contributions",
    badge: "10,550 pts • 40/40",
  },
  {
    id: "stellar-wave-10",
    title: "45/45 Assigned Issues Resolved in 7 Days",
    category: "Open Source",
    context: "Drips Stellar Wave 10",
    metric: "100% Completion (45/45)",
    dateOrWave: "Stellar Wave 10",
    pointsEarned: "7,650 pts",
    rewardGrant: "$28",
    logo: "/images/projects/drips-waves.jpg",
    logoLightBg: false,
    description:
      "Achieved a 100% resolution rate by diagnosing, fixing, testing, and successfully submitting pull requests for all 45 assigned issues across eight distinct Stellar ecosystem repositories within seven days, earning 7,650 points and a $28 reward grant.",
    verificationDetails:
      "Covered full-stack debugging, React frontend fixes, backend API validations, smart contract interface corrections, and GitHub Actions CI/CD pipeline repairs across community projects.",
    relatedProjectSlug: "stellar-contributions",
    badge: "7,650 pts • $28 Grant",
  },
  {
    id: "stellar-wave-9",
    title: "20/20 Assigned Issues Resolved in 7 Days",
    category: "Open Source",
    context: "Drips Stellar Wave 9",
    metric: "100% Completion (20/20)",
    dateOrWave: "Stellar Wave 9",
    pointsEarned: "3,600 pts",
    rewardGrant: "$18",
    logo: "/images/projects/drips-waves.jpg",
    logoLightBg: false,
    description:
      "Resolved 20 out of 20 assigned open-source issues in seven days during Drips Stellar Wave 9, earning 3,600 points and a $18 reward grant.",
    verificationDetails:
      "Delivered clean, scoped bug fixes, UI refinements, and integration improvements across participating Stellar ecosystem repositories.",
    relatedProjectSlug: "stellar-contributions",
    badge: "3,600 pts • $18 Grant",
  },
  {
    id: "dagpulse-wave-3",
    title: "Top 4 Placement in Wave 3",
    category: "Hackathon / Competition",
    context: "DAGPulse Mining DApp Competition",
    metric: "Top 4 Placement",
    dateOrWave: "Wave 3",
    logo: "/images/projects/dagpulse-logo.jpg",
    logoLightBg: true,
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
    logo: "/images/projects/intentx-logo.jpg",
    logoLightBg: true,
    description:
      "Architected and deployed protocol modules for decentralized intent-based settlement on BlockDAG, achieving a verified leaderboard score of 74.0/100 and moving from 13th to 14th position.",
    verificationDetails:
      "Scored on intent verification logic, gas execution optimization, cryptographic signature handling, and contract state transition safety.",
    relatedProjectSlug: "blockdag-intentx",
    badge: "Leaderboard Ranked",
  },
];
