import { ReactNode } from 'react';

// Resume PDF path
export const resumePDF = '/yan_braslavsky_cv.pdf';

// Key projects data
export interface KeyProject {
  title: string;
  description: string;
  tech: string[];
  iconName: string; // Changed to string instead of ReactNode
  impact: string;
}

export const KEY_PROJECTS: KeyProject[] = [
  {
    title: "E-commerce Platform Modernization",
    description: "Led the architectural redesign and implementation of a microservices-based platform that improved site reliability by 45% and reduced deployment time by 70%.",
    tech: ["Microservices", "Kubernetes", "React", "Node.js", "PostgreSQL"],
    iconName: "FaShoppingCart", // Icon name as string
    impact: "Supported 200% growth in transaction volume with 30% fewer infrastructure resources."
  },
  {
    title: "Mobile App Development Framework",
    description: "Created a cross-platform development framework that enabled simultaneous iOS and Android releases, reducing time-to-market by 40% and development costs by 35%.",
    tech: ["React Native", "TypeScript", "GraphQL", "CI/CD", "Jest"],
    iconName: "FaMobileAlt", // Icon name as string
    impact: "Adopted by 5 internal product teams resulting in consistent user experience across all mobile products."
  },
  {
    title: "Cloud Infrastructure Migration",
    description: "Planned and executed migration of legacy systems to cloud infrastructure, designing a scalable and resilient architecture with proper security controls.",
    tech: ["AWS", "Terraform", "Docker", "Prometheus", "Grafana"],
    iconName: "FaServer", // Icon name as string
    impact: "Reduced operational costs by 50% while significantly improving system observability and uptime."
  }
];

// Languages data
export interface Language {
  name: string;
  icon: string;
  level: number;
}

export const LANGUAGES: Language[] = [
  { name: 'English', icon: '🇬🇧', level: 100 },
  { name: 'German', icon: '🇩🇪', level: 70 },
  { name: 'Hebrew', icon: '🇮🇱', level: 90 },
  { name: 'Russian', icon: '🇷🇺', level: 100 },
];

// Skills data
export interface Skill {
  category: string;
  iconName: string; // Changed to string
  skills: string[];
}

export const SKILLS: Skill[] = [
  {
    category: "Leadership & Management",
    iconName: "FaUserTie", // Professional leadership icon
    skills: [
      "Team Leadership & Growth",
      "Tech Strategy & Vision",
      "Cross-functional Collaboration",
      "Mentorship & Coaching",
      "Hiring & Team Structuring"
    ]
  },
  {
    category: "Software Engineering",
    iconName: "FaLaptopCode", // Modern code/development icon
    skills: [
      "Microservice Architecture",
      "Mobile & Web Development",
      "Cloud Infrastructure (AWS/GCP)",
      "Front-end Frameworks (React/Next.js)",
      "CI/CD & DevOps"
    ]
  },
  {
    category: "Product & UX",
    iconName: "FaPencilRuler", // Design and product icon
    skills: [
      "Agile Product Development",
      "Product Strategy & Roadmaps",
      "UX/UI Design Principles",
      "A/B Testing & User Feedback Loops",
      "Accessibility Best Practices"
    ]
  },
  {
    category: "Business & Operations",
    iconName: "FaChartLine", // Business growth icon
    skills: [
      "E-Commerce Expertise",
      "Stakeholder Communication",
      "Resource Allocation & Cost Management",
      "Budgeting & Forecasting",
      "Process Optimization"
    ]
  },
  {
    category: "AI & Data",
    iconName: "FaBrain", // AI/Machine learning icon
    skills: [
      "Machine Learning Basics",
      "Data-driven Decision Making",
      "AIOps & Observability",
      "Monitoring & Alerting Systems",
      "Experimentation at Scale"
    ]
  },
  {
    category: "Innovation & Growth",
    iconName: "FaRocket", // Growth/innovation icon
    skills: [
      "Scaling Startups",
      "Strategic Partnerships",
      "GTM (Go-to-Market) Planning",
      "Innovation Culture & Enablement",
      "Personal Branding & Thought Leadership"
    ]
  }
];

// Experience data
export interface Experience {
  company: string;
  position: string;
  date: string;
  description: string;
}

export const EXPERIENCE: Experience[] = [
  {
    company: "AWS (Amazon Web Services)",
    position: "System Delivery Manager",
    date: "2024 - Present",
    description: "Leading operations of AWS's machine learning services across Europe (Bedrock, SageMaker, Amazon Q), with a focus on team growth, technical readiness, and scaling operations. Built and led a 12-person team driving operational excellence. Orchestrated technical roadmaps and stakeholder engagement under aggressive timelines. Oversaw hiring, promotion, talent development, and people management. Streamlined processes to support rapid ML service integration."
  },
  {
    company: "SoundCloud",
    position: "Engineering Manager",
    date: "2021 - 2024",
    description: "Directed multiple teams responsible for infrastructure and client-facing systems. Delivered cross-team initiatives involving 30+ engineers, enhancing UI systems. Led Android platform with 24 engineers; mentored and promoted top talent. Integrated AI features and shaped engineering processes company-wide. Supported strategic alignment of OKRs and stakeholder collaboration."
  },
  {
    company: "Klarna",
    position: "Engineering Manager",
    date: "2020 - 2021",
    description: "Founded and led 4 teams within Klarna's application domain. Defined engineering KPIs, workflows, and ceremonies adopted at scale. Mentored engineers, drove promotions, and structured career progression. Aligned technical strategy with product goals and stakeholder priorities."
  },
  {
    company: "Quandoo",
    position: "Engineering Manager",
    date: "2018 - 2020",
    description: "Managed 3 cross-functional teams building mobile B2B products. Led architecture migration from monolith to microservices (KAPPA). Advocated Flutter and GraphQL adoption for platform consistency. Defined performance KPIs and built a company-wide competency matrix. Scaled team size by 40% through structured hiring improvements."
  },
  {
    company: "Early Career",
    position: "Mobile & Full-Stack Development",
    date: "2011 - 2018",
    description: "Hands-on engineering roles across startups and scale-ups including Home24, GameDuell, Sync.Me, Zemingo, and NeoVSP. Led mobile engineering at Home24, representing the company at summits and blog posts. Delivered high-quality Android and cross-platform apps using modern frameworks. Migrated legacy stacks and reduced technical debt through architecture ownership. Introduced CI/CD, mentored juniors, and drove technical decision-making."
  }
];

// Education data
export interface Education {
  degree: string;
  school: string;
}

export const EDUCATION: Education[] = [
  { degree: 'B.Sc. Software Engineering', school: 'Afeka College of Engineering, Tel Aviv, Israel' },
  { degree: 'Applied Electronics Engineering', school: 'Midrashat Hagalil, Migdal Haemek, Israel' }
];

// Hobbies data
export interface Hobby {
  name: string;
  iconName: string; // Changed to string
}

export const HOBBIES: Hobby[] = [
  { name: 'Calisthenics', iconName: 'FaDumbbell' },
  { name: 'Cycling', iconName: 'FaBiking' },
  { name: 'HIIT', iconName: 'FaHeartbeat' }
];

// Testimonials data
export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "Yan's ability to lead teams through complex technical challenges while maintaining focus on product goals is exceptional. His strategic vision transformed our engineering approach.",
    author: "Jane Doe",
    role: "VP of Product, Home24"
  },
  {
    text: "Working with Yan has been transformative for our organization. His technical leadership combined with his people-first approach created a high-performing, motivated team.",
    author: "John Smith",
    role: "CTO, Previous Company"
  }
];