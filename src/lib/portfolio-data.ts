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

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const frontendSkills = [
  "Angular",
  "RxJS",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Redux",
  "Tailwind CSS",
  "Framer Motion",
  "Chart.js",
  "SCSS",
  "Ionic",
];

export const backendSkills = [
  "NestJS",
  "Node.js",
  "PostgreSQL",
  "TypeORM",
  "REST APIs",
  "WebSockets",
  "OpenAPI / Swagger",
  "JWT Authentication",
  "RBAC (Role-Based Access Control)",
  "PDF Generation (Puppeteer / Playwright)",
];

export const toolSkills = [
  "Git & GitHub",
  "Bitbucket",
  "Docker",
  "OpenAPI Generator",
  "Agile / Scrum",
  "Database Migrations",
];

export const projects: Project[] = [
  {
    name: "My Business Invoice",
    label: "Professional Project",
    description:
      "Full-stack business application focused on invoice management, employee workflows, and real-time operations. Features include invoice customization and PDF export (single & bulk), CSV imports, time tracking, project/task management, live notifications and live chat.",
    tech: [
      "Angular 17+",
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
    name: "Test project 1",
    label: "Test Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tech: ["React", "Redux", "Node.js", "REST API"],
    github: "#",
    demo: "#",
    id: 4,
  },
  {
    name: "Test project 2",
    label: "Test Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tech: ["React", "Redux", "Node.js", "REST API"],
    github: "#",
    demo: "#",
    id: 5,
  },
];

export const experience: Experience[] = [
  {
    role: "Full-Stack Software Developer",
    company: "Code202",
    duration: "07/2024 - Present",
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