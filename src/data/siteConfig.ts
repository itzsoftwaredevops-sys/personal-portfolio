export interface SiteConfig {
  name: string;
  brand: string;
  headline: string;
  role: string;
  subHeadline: string;
  bio: string;
  extendedBio: string;
  location: string;
  email: string;
  socials: {
    github: string;
    twitter: string;
    telegram: string;
    whatsapp: string;
    whatsappLink: string;
    linkedin: string | null; // Configurable: leave null until real URL is provided
  };
  domain: {
    current: string; // Current Vercel or deployed origin
    recommended: string[];
  };
  seo: {
    titleTemplate: string;
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
  };
  navItems: { name: string; href: string }[];
  status: {
    availableForOpportunities: boolean;
    label: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Abdulganiyyu Mustapha Muhammad",
  brand: "Itz Software DevOps",
  role: "Software Engineer & Blockchain Developer",
  headline: "Software Engineer | Full-Stack Developer | Blockchain Engineer | Smart Contract Developer",
  subHeadline: "Building Software. Engineering Trust. Exploring Decentralized Systems.",
  bio: "Software Engineer and Blockchain Developer focused on building scalable web applications, decentralized systems, blockchain-powered solutions, smart contracts, and modern digital products. Interested in the intersection of software engineering, Web3 infrastructure, distributed systems, developer tooling, and emerging technologies.",
  extendedBio: `I am an undergraduate Software Engineering student at Federal University Dutse (FUD) and an active builder across full-stack and decentralized architectures. 
  
My engineering philosophy revolves around determinism, verifiable state, security-first smart contract implementation, and clean architectural separation. From engineering cryptographic verification in VeriCred on Ethereum Sepolia to contributing high-velocity solutions in the Stellar open-source ecosystem, I focus on shipping working, resilient software.`,
  location: "Nigeria",
  email: "agmuhammadmustapha@gmail.com",
  socials: {
    github: "https://github.com/itzsoftwaredevops-sys",
    twitter: "https://x.com/AbdulganiyyuMM",
    telegram: "https://t.me/itzsoftwaredevops1005",
    whatsapp: "+2347039492702",
    whatsappLink: "https://wa.me/2347039492702",
    linkedin: null, // Configured to null until verified profile is provided
  },
  domain: {
    current: "https://abdulganiyyu.dev",
    recommended: ["abdulganiyyu.dev", "abdulganiyyu.com", "itzsoftwaredevops.dev"],
  },
  seo: {
    titleTemplate: "%s | Abdulganiyyu Mustapha Muhammad (Itz Software DevOps)",
    defaultTitle: "Abdulganiyyu Mustapha Muhammad | Software Engineer & Blockchain Developer",
    defaultDescription: "Official portfolio of Abdulganiyyu Mustapha Muhammad (Itz Software DevOps). Software Engineer and Blockchain Developer specializing in full-stack web applications, Ethereum & EVM smart contracts, and decentralized systems.",
    keywords: [
      "Abdulganiyyu Mustapha Muhammad",
      "Abdulganiyyu Muhammad Mustapha",
      "Abdulganiyyu Mustapha Muhammad Software Engineer",
      "Abdulganiyyu Mustapha Muhammad Blockchain Developer",
      "Itz Software DevOps",
      "Abdulganiyyu GitHub",
      "VeriCred Developer",
      "Nigerian Blockchain Developer",
      "Full-Stack Software Engineer Nigeria",
      "Solidity Developer Nigeria",
      "Web3 Developer FUD",
      "Federal University Dutse Software Engineering",
      "Stellar Ecosystem Developer"
    ],
  },
  navItems: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Skills", href: "/skills" },
    { name: "Achievements", href: "/achievements" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  status: {
    availableForOpportunities: true,
    label: "Available for engineering roles, technical collaboration & open-source projects",
  },
};
