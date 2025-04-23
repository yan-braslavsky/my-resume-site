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
    iconName: "FaUsers", // Icon name as string
    skills: [
      "Team Leadership & Growth",
      "Tech Strategy & Vision",
      "Budget Management",
      "OKRs & Roadmap Planning",
      "Cross-functional Collaboration"
    ]
  },
  {
    category: "Software Engineering",
    iconName: "FaCode", // Icon name as string
    skills: [
      "Microservice Architecture",
      "Cloud Infrastructure (AWS/GCP)",
      "Mobile Development",
      "Front-end Technologies",
      "CI/CD & DevOps"
    ]
  },
  {
    category: "Product Development",
    iconName: "FaRegLightbulb", // Icon name as string
    skills: [
      "Agile Methodologies",
      "Product Strategy",
      "UX/UI Best Practices",
      "Performance Optimization",
      "Technical Debt Management"
    ]
  },
  {
    category: "Business Acumen",
    iconName: "FaBusinessTime", // Icon name as string
    skills: [
      "E-Commerce Expertise",
      "Stakeholder Management",
      "Cost-benefit Analysis",
      "Resource Allocation",
      "Process Optimization"
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
    company: "Home24",
    position: "Director of Engineering",
    date: "2017 - Present",
    description: "Leading engineering teams across multiple product lines, managing budget and resources, implementing technical strategy, and working with key stakeholders to deliver scalable e-commerce solutions."
  },
  {
    company: "Previous Role",
    position: "Senior Engineering Manager",
    date: "2014 - 2017",
    description: "Led the development of multiple mobile applications, implemented CI/CD pipelines, and improved development process efficiency resulting in 40% faster time-to-market."
  },
  {
    company: "Early Career",
    position: "Software Engineer",
    date: "2010 - 2014",
    description: "Developed full-stack solutions for enterprise clients, focusing on web applications and early mobile development projects."
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