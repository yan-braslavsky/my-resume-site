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
    title: "AI & ML Ops Enablement at Scale",
    description: "Led the operational enablement and scalability of AWS machine learning services across Europe (Bedrock, SageMaker, Amazon Q), ensuring technical readiness and seamless service integration. Scaled a 12-person team while driving automation and skill development. Executed technical roadmaps aligned with aggressive go-to-market timelines. Delivered service reliability improvements and readiness for enterprise adoption.",
    tech: ["AWS", "SageMaker", "Amazon Q", "Ops Excellence", "Tech Roadmaps"],
    iconName: "FaRobot", // AI/ML related icon
    impact: "Improved operational readiness across 3 major ML services, driving 40% efficiency gains in service onboarding."
  },
  {
    title: "Cross-Platform UI Libraries Overhaul",
    description: "Coordinated a cross-team initiative with 30+ engineers to standardize UI components at SoundCloud, leading to faster delivery and consistency across platforms. Improved lead time by 18% across client-facing applications. Established DORA metrics to measure and improve team performance. Unified component strategy, reducing UI-related bugs by 30%.",
    tech: ["React", "Design Systems", "CI/CD", "DORA Metrics"],
    iconName: "FaPalette", // UI/Design related icon
    impact: "Enabled a scalable and maintainable UI architecture across mobile and web apps."
  },
  {
    title: "Mobile Platform Revamp & B2B App Rollout",
    description: "Spearheaded the mobile transformation at Quandoo by replacing a legacy hardware-based B2B solution with a scalable, app-based platform—driving product growth and enhancing customer onboarding. Migrated from proprietary hardware to mobile-first app architecture, reducing deployment costs and support overhead. Led full rewrite of the business application with modern tooling and architecture. Introduced cross-platform development frameworks and CI/CD, improving release velocity and user experience. Onboarded 30% more clients within the first quarter post-launch.",
    tech: ["Flutter", "GraphQL", "CI/CD", "Mobile Architecture", "React Native"],
    iconName: "FaMobileAlt", // Mobile-related icon
    impact: "Enabled global scalability and reduced onboarding friction by modernizing the B2B customer experience."
  },
  {
    title: "Domain Formation & Delivery Strategy",
    description: "Built and structured 4 new product teams from scratch within Klarna's mobile domain, delivering a clear mission, tech strategy, and execution model for each. Defined team KPIs, rituals, and cross-team standards (testing, monitoring, alerting). Delivered multiple features aligned with domain goals and budget allocation. Advocated for and implemented a scalable hiring and mentoring model. Influenced company-wide engineering evaluation practices.",
    tech: ["Team Design", "OKRs", "Cross-Team Standards", "Hiring & Mentoring"],
    iconName: "FaUsers", // Team structure icon
    impact: "Established a scalable domain with sustainable delivery, adopted across Klarna."
  },
  {
    title: "Mobile Department Leadership",
    description: "Took over and scaled the mobile department at Home24, shaping technical direction and visibility of mobile efforts both internally and publicly. Reduced technical debt and modernized the mobile stack. Represented mobile engineering at summits and events, elevating brand and attracting talent. Drove mobile CI/CD implementation and continuous delivery culture. Mentored junior engineers into senior roles and improved team retention.",
    tech: ["Android", "Kotlin", "CI/CD", "Tech Evangelism", "Architecture Decisions"],
    iconName: "FaCodeBranch", // Code management/direction icon
    impact: "Transformed the mobile team into a respected, high-performing unit within the company."
  },
  {
    title: "Custom Game Engine & Cross-Platform Development",
    description: "Developed a custom game engine for real-time multiplayer games at GameDuell, enabling smooth cross-platform experiences and fast iteration for new titles. Implemented reusable core systems for game physics, rendering, and networking. Reduced time-to-market for new games through modular engine design. Integrated with analytics and A/B testing to optimize player engagement. Supported both iOS and Android using shared codebase strategies.",
    tech: ["C++", "Game Development", "Cross-Platform Engines", "Mobile Performance"],
    iconName: "FaGamepad", // Gaming-related icon
    impact: "Powered GameDuell's ability to rapidly launch multiplayer games with consistent quality."
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
  avatar: string; // Added avatar URL field
}

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "I had the opportunity to work with Yan during his time as a Systems Development Manager at AWS, where we were peers. Yan brought a structured approach to building and managing his team, and his leadership experience was evident from the start.He consistently identified areas for improvement and addressed potential risks early, contributing significantly to the team’s operational stability. I appreciated his proactive attitude and focus on continuous improvement.I would be happy to work with Yan again in the future.", 
    author: "Tamar Inbar Shelach",
    role: "Systems Development Manager at AWS",
    avatar: "https://media.licdn.com/dms/image/v2/C4D03AQGCXdiSCX4joQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516272428850?e=1751500800&v=beta&t=iFUBaG7yzC5YVITQKuVyIQBuUboUZVjX6d7Z8usFk2s"
  },
  {
    text: "Yan is a dedicated and skilled leader whose technical expertise and empathy provide a strong foundation for any team. He strikes an excellent balance between delivering features and ensuring the product remains maintainable. Yan supports his team by shielding them when necessary while encouraging their growth and development. I highly recommend Yan and believe he is destined for great achievements.", 
    author: "Danny Preussler",
    role: "Google Developer Expert Android",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHKpVrMeynt2g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728388190247?e=1750896000&v=beta&t=LcOnx4E6gTg0_-uVQn0FFEODVky2KSqkyGBB8q06HQE"
  },
  {
    text: "Working with Yan for nearly two years was a rewarding experience, during which I gained valuable insights and built a lasting friendship. Yan is highly goal-driven, always ensuring team members are engaged and aligned with project objectives. His ability to communicate ideas clearly and keep everyone on the same page is a vital asset in leadership. Thank you, Yan, for your dedication and camaraderie. I look forward to collaborating again in the future. Keep up the great work!",
    author: "Antônio Carlos",
    role: "Senior iOS Engineer at Quandoo",
    avatar: "https://media.licdn.com/dms/image/v2/C4D03AQGnWsRpLray8A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1588426308719?e=1750896000&v=beta&t=oVKLlaCa7Aqyr4ru2j1N_tJBU9TiXee-0S5nqf9nh1c"
  },
  {
    text: "I've seen Yan lead with confidence and competence. He consistently resolved conflicts smoothly and ensured a strong team spirit. Our collaboration resulted in top-performing products, including an app that climbed the Apple Store charts. Yan is the kind of leader any team would be lucky to have.",
    author: "Eugene Belov",
    role: "Head of Engineering, Zalando SE",
    avatar: "https://media.licdn.com/dms/image/v2/C4D03AQF1CNvFaNJwjQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517563393375?e=1750896000&v=beta&t=h1IdzymKCCZH3g64hplkYWn3Svs2rEdzWkRglQj5ccA"
  },
  {
    text: "Yan has deep technical knowledge and a natural eye for scalable, clean architecture. He transitioned seamlessly between tech stacks and was always eager to explore new tools and methodologies. A strong work ethic and an eagerness to learn make him an asset in any environment.",
    author: "Marco Pappalardo",
    role: "Lead Programmer at GameDuell",
    avatar: "https://media.licdn.com/dms/image/v2/C4D03AQFWEcC2fE0ZoA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516280926637?e=1750896000&v=beta&t=5r3K7h1LS2_ZFQ6pZsZrroxL8T5X6YvscH1TCcUX-fo"
  },
  {
    text: "Yan was a key developer on our most challenging features and core infrastructure. His perspective, depth of understanding, and positive attitude made him a standout member of our team. Collaborating with him was not only productive but also a pleasure.",
    author: "Vadim Harnas",
    role: "CTO & R&D Manager at Sync.ME",
    avatar: "https://media.licdn.com/dms/image/v2/C5603AQFk2OWHq3d1IQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1528214737905?e=1750896000&v=beta&t=2co3v9nEHXgFRSMlnHEab-gFT6DJKBZ_HjIrV37utN8"
  },
  {
    text: "Yan is a fast learner with a proactive mindset. He picks up new technologies quickly and always delivers on time. Dependable and outcome-oriented, he brings energy and reliability to any team he's on.",
    author: "Stas Oskin",
    role: "Co-Founder at Pontem",
    avatar: "https://media.licdn.com/dms/image/v2/C5603AQFhwHsV6gdFag/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1602686663784?e=1750896000&v=beta&t=RJJddgBTfMEJvzx1uFYe_wdJQL7LRm5Yq0eW-kqTcUo"
  }
];