export type Project = {
  name: string;
  label: string;
  description: string;
  tech: string[];
  images?: string[];
  github: string;
  demo: string;
  id: number;
};

export type Experience = {
  role: string;
  company: string;
  duration: string;
  achievements: string[];
};

export type Skill = {
  name: string;
  level: "Advanced" | "Intermediate" | "Familiar";
};

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const frontendSkills: Skill[] = [
  { name: "Angular", level: "Advanced" },
  { name: "React", level: "Intermediate" },
  { name: "Next.js", level: "Intermediate" },
  { name: "TypeScript", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "RxJS", level: "Intermediate" },
  { name: "Redux", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Ionic", level: "Advanced" },
];

export const backendSkills: Skill[] = [
  { name: "NestJS", level: "Advanced" },
  { name: "Node.js", level: "Advanced" },
  { name: "PostgreSQL", level: "Advanced" },
  { name: "TypeORM", level: "Advanced" },
  { name: "REST APIs", level: "Advanced" },
  { name: "WebSockets", level: "Intermediate" },
  { name: "JWT Authentication", level: "Intermediate" },
];

export const toolSkills: Skill[] = [
  { name: "Git & GitHub", level: "Advanced" },
  { name: "Docker", level: "Intermediate" },
  { name: "OpenAPI / Swagger", level: "Intermediate" },
  { name: "Bitbucket", level: "Advanced" },
  { name: "Agile / Scrum", level: "Advanced" },
];

export const projects: Project[] = [
  {
    name: "My Business Invoice",
    label: "Professional Project",
    description:
      "Full-stack business application focused on invoice management, employee workflows, and real-time operations. Features include invoice customization and PDF export (single & bulk), CSV imports, time tracking, project/task management, live notifications and live chat.",
    tech: [
      "Angular",
      "Tailwind",
      "Ionic",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "WebSockets",
      "OpenAPI",
      "Docker",
      "Swagger",
      "Playwright",
      "Puppeteer",
    ],
    images: [
      "/projects/myb-sc1.png",
      "/projects/myb-sc2.png",
      "/projects/myb-sc3.png",
      "/projects/myb-sc4.png",
      "/projects/myb-sc5.png",
      "/projects/myb-sc6.png",
    ],
    github: "#",
    demo: "#",
    id: 1,
  },
  {
    name: "Social Media Platform",
    label: "Internship Project",
    description:
      "Collaborative full-stack application built with React and Redux, delivering dynamic UI experiences and efficient state management with seamless REST API integration.",
    tech: ["React", "Redux", "Node.js", "REST API"],
    github: "#",
    demo: "#",
    id: 2,
  },
  {
    name: "Developer Portfolio",
    label: "Personal Project",
    description:
      "High-performance portfolio built with Next.js, Tailwind CSS, and Framer Motion, focused on modern UI, smooth animations, and optimized user experience.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/YlliLutfiu/Portfolio",
    demo: "#",
    id: 3,
  },
  {
    name: "StaffBase",
    label: "Personal Project",
    description:
      "A full-stack employee management system for handling organizational workforce data, including employee records, departments, tasks, and salary management. The application features secure authentication, structured backend architecture, and a modern dashboard with data visualization and reporting capabilities.",
    tech: ["Angular", "NestJS", "TypeORM", "PostgreSQL", "Docker"],
    github: "https://github.com/YlliLutfiu/StaffBase",
    demo: "#",
    id: 4,
  },
  {
    name: "HotiInterior",
    label: "Personal Project",
    description:
      "A modern frontend website built to showcase an interior business, with a clean layout and smooth animations. It includes project showcases with detailed pages and focuses on creating a premium, responsive user experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "EmailJS"],
    github: "https://github.com/YlliLutfiu/HotiInterior",
    demo: "https://hoti-interior.vercel.app",
    id: 5,
  },
  {
    name: "destiLL",
    label: "Personal Project",
    description:
      "A modern frontend website built to showcase destiLL, a tapas bar, art café, bookstore, and hidden garden space. It features a clean layout, smooth animations, and focuses on delivering a warm, premium, and fully responsive user experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "EmailJS"],
    github: "https://github.com/YlliLutfiu/destiLL",
    demo: "https://destill-gamma.vercel.app/",
    id: 6,
  },
  {
    name: "BankSystem",
    label: "Personal Project",
    description:
      "A console-based banking system built in Java that simulates core banking operations such as account management, deposits, withdrawals, and transfers between accounts. The system follows object-oriented design principles and includes transaction handling with configurable fees, as well as tracking of total transfers and fees collected. It demonstrates core backend logic, encapsulation, and real-world financial operation simulation.",
    tech: ["Java (OOP, CLI Application)"],
    github: "https://github.com/YlliLutfiu/BankSystem",
    demo: "#",
    id: 7,
  },
  {
    name: "BiteCosmetics",
    label: "Personal Project",
    description:
      "A full-stack e-commerce web application for browsing and displaying cosmetic products with dynamic content management. The project integrates frontend and backend functionality with a MySQL database, allowing product data to be retrieved and managed through server-side logic using PHP.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    github: "https://github.com/YlliLutfiu/BiteCosmetics",
    demo: "#",
    id: 8,
  },
];

export const experience: Experience[] = [
  {
    role: "Full-Stack Software Developer",
    company: "Code202",
    duration: "07/2024 - 03/2026",
    achievements: [
      "Engineered and maintained a scalable full-stack application using Angular and NestJS.",
      "Designed and implemented RESTful APIs with PostgreSQL for reliable data management.",
      "Developed a real-time notification system using WebSockets for instant updates.",
      "Improved performance through Angular SSR and frontend optimizations.",
      "Implemented dynamic PDF generation and export functionality.",
      "Contributed to secure authentication and authorization systems.",
      "Collaborated in code reviews and architectural decision-making.",
      "Enhanced UI responsiveness and overall user experience.",
    ],
  },
  {
    role: "ReactJS Intern",
    company: "StarLabs",
    duration: "2023",
    achievements: [
      "Contributed to a full-stack social media application using React and Redux.",
      "Built reusable UI components and integrated REST APIs.",
      "Collaborated with a team to deliver scalable frontend features.",
    ],
  },
];