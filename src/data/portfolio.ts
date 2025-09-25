import {
  PersonalInfo,
  SocialLinks,
  Project,
  Skill,
  Experience,
  Education,
  Certificate,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Dede Febriansyah",
  title: "Full Stack Developer",
  subtitle: "Building digital experiences with modern technologies",
  bio: "Passionate full-stack developer with expertise in modern web technologies. I love creating efficient, scalable, and user-friendly applications that solve real-world problems. Always eager to learn new technologies and best practices.",
  location: "Indonesia",
  email: "febriansyahd65@gmail.com",
  phone: "+62 838-9891-1244",
  website: "https://dedeproject.dev",
  avatar: "/avatar.jpg",
  resumeUrl: "/resume.pdf",
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/dedeez14",
  linkedin: "https://linkedin.com/in/dede-febriansyah",
  twitter: "https://twitter.com/dedefebriansyah",
  instagram: "https://instagram.com/dede.febriansyah",
  medium: "https://medium.com/@dedefebriansyah",
  dev: "https://dev.to/dedefebriansyah",
};

export const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    category: "frontend",
    proficiency: "expert",
    yearsOfExperience: 4,
  },
  {
    name: "Next.js",
    category: "frontend",
    proficiency: "advanced",
    yearsOfExperience: 3,
  },
  {
    name: "TypeScript",
    category: "language",
    proficiency: "advanced",
    yearsOfExperience: 3,
  },
  {
    name: "JavaScript",
    category: "language",
    proficiency: "expert",
    yearsOfExperience: 5,
  },
  {
    name: "Vue.js",
    category: "frontend",
    proficiency: "intermediate",
    yearsOfExperience: 2,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    proficiency: "advanced",
    yearsOfExperience: 3,
  },
  {
    name: "HTML5",
    category: "frontend",
    proficiency: "expert",
    yearsOfExperience: 6,
  },
  {
    name: "CSS3",
    category: "frontend",
    proficiency: "expert",
    yearsOfExperience: 6,
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    proficiency: "advanced",
    yearsOfExperience: 4,
  },
  {
    name: "Express.js",
    category: "backend",
    proficiency: "advanced",
    yearsOfExperience: 3,
  },
  {
    name: "Python",
    category: "language",
    proficiency: "intermediate",
    yearsOfExperience: 2,
  },
  {
    name: "Django",
    category: "backend",
    proficiency: "intermediate",
    yearsOfExperience: 2,
  },
  {
    name: "FastAPI",
    category: "backend",
    proficiency: "intermediate",
    yearsOfExperience: 1,
  },
  {
    name: "PHP",
    category: "language",
    proficiency: "intermediate",
    yearsOfExperience: 3,
  },
  {
    name: "Laravel",
    category: "backend",
    proficiency: "intermediate",
    yearsOfExperience: 2,
  },

  // Database
  {
    name: "PostgreSQL",
    category: "database",
    proficiency: "advanced",
    yearsOfExperience: 3,
  },
  {
    name: "MySQL",
    category: "database",
    proficiency: "advanced",
    yearsOfExperience: 4,
  },
  {
    name: "MongoDB",
    category: "database",
    proficiency: "intermediate",
    yearsOfExperience: 2,
  },
  {
    name: "Redis",
    category: "database",
    proficiency: "intermediate",
    yearsOfExperience: 2,
  },

  // Tools & Others
  {
    name: "Git",
    category: "tools",
    proficiency: "advanced",
    yearsOfExperience: 5,
  },
  {
    name: "Docker",
    category: "tools",
    proficiency: "intermediate",
    yearsOfExperience: 2,
  },
  {
    name: "AWS",
    category: "tools",
    proficiency: "intermediate",
    yearsOfExperience: 2,
  },
  {
    name: "Vercel",
    category: "tools",
    proficiency: "advanced",
    yearsOfExperience: 3,
  },
  {
    name: "Figma",
    category: "tools",
    proficiency: "intermediate",
    yearsOfExperience: 2,
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and Node.js, featuring user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and a complete admin dashboard for inventory and sales management.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
      "Prisma",
    ],
    githubUrl: "https://github.com/dedeez14/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.dedefebriansyah.dev",
    imageUrl: "/projects/ecommerce.jpg",
    featured: true,
    category: "web",
    startDate: "2024-01-15",
    endDate: "2024-04-30",
    status: "completed",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates and team features.",
    longDescription:
      "A modern task management application built with React and Socket.io for real-time collaboration. Features include project creation, task assignment, progress tracking, team chat, file attachments, and comprehensive reporting dashboard.",
    technologies: [
      "React",
      "Socket.io",
      "Express.js",
      "MongoDB",
      "JWT",
      "Material-UI",
    ],
    githubUrl: "https://github.com/dedeez14/task-manager",
    liveUrl: "https://taskflow.dedefebriansyah.dev",
    imageUrl: "/projects/taskmanager.jpg",
    featured: true,
    category: "web",
    startDate: "2023-08-01",
    endDate: "2023-11-15",
    status: "completed",
  },
  {
    id: "3",
    title: "Weather Forecast API",
    description:
      "RESTful API service providing accurate weather forecasts with caching and rate limiting.",
    longDescription:
      "A robust weather API built with FastAPI and Python, integrating multiple weather services for accurate forecasts. Features include data caching with Redis, rate limiting, user authentication, historical weather data, and comprehensive API documentation.",
    technologies: [
      "Python",
      "FastAPI",
      "Redis",
      "PostgreSQL",
      "Docker",
      "OpenWeatherMap API",
    ],
    githubUrl: "https://github.com/dedeez14/weather-api",
    liveUrl: "https://weather-api.dedefebriansyah.dev",
    imageUrl: "/projects/weather-api.jpg",
    featured: false,
    category: "api",
    startDate: "2023-05-01",
    endDate: "2023-07-30",
    status: "completed",
  },
  {
    id: "4",
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio website showcasing projects and skills.",
    longDescription:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations, dark/light mode toggle, contact form with email integration, blog section, and optimized performance with excellent SEO scores.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    githubUrl: "https://github.com/dedeez14/portfolio",
    liveUrl: "https://dedefebriansyah.dev",
    imageUrl: "/projects/portfolio.jpg",
    featured: true,
    category: "web",
    startDate: "2024-06-01",
    endDate: "2024-07-15",
    status: "completed",
  },
  {
    id: "5",
    title: "Expense Tracker Mobile App",
    description:
      "Cross-platform mobile app for personal expense tracking and budget management.",
    longDescription:
      "A comprehensive expense tracking mobile application built with React Native. Features include expense categorization, budget setting, financial insights with charts, receipt scanning, multi-currency support, and data synchronization across devices.",
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Firebase",
      "Chart.js",
    ],
    githubUrl: "https://github.com/dedeez14/expense-tracker",
    imageUrl: "/projects/expense-tracker.jpg",
    featured: false,
    category: "mobile",
    startDate: "2024-03-01",
    status: "in-progress",
  },
  {
    id: "6",
    title: "Blog CMS",
    description:
      "Content Management System for blogs with rich text editor and SEO optimization.",
    longDescription:
      "A headless CMS built with Laravel and Vue.js, designed specifically for bloggers and content creators. Features include a rich text editor, media management, SEO optimization tools, multi-author support, comment system, and analytics dashboard.",
    technologies: ["Laravel", "Vue.js", "MySQL", "Eloquent ORM", "Quill.js"],
    githubUrl: "https://github.com/dedeez14/blog-cms",
    liveUrl: "https://blog-cms.dedefebriansyah.dev",
    imageUrl: "/projects/blog-cms.jpg",
    featured: false,
    category: "web",
    startDate: "2023-02-01",
    endDate: "2023-06-30",
    status: "completed",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tech Solutions Indonesia",
    position: "Senior Full Stack Developer",
    location: "Jakarta, Indonesia",
    startDate: "2022-01-15",
    description: [
      "Led a team of 5 developers in building scalable web applications using React, Node.js, and PostgreSQL",
      "Architected and implemented microservices architecture reducing system response time by 40%",
      "Mentored junior developers and established coding standards and best practices",
      "Collaborated with product managers and designers to deliver high-quality user experiences",
      "Implemented CI/CD pipelines using GitHub Actions and Docker for automated deployment",
    ],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "AWS",
      "TypeScript",
    ],
    type: "full-time",
  },
  {
    id: "2",
    company: "Digital Agency Kreativa",
    position: "Full Stack Developer",
    location: "Bandung, Indonesia",
    startDate: "2020-03-01",
    endDate: "2021-12-31",
    description: [
      "Developed custom web applications for clients using modern JavaScript frameworks",
      "Built responsive e-commerce platforms with payment gateway integrations",
      "Optimized application performance resulting in 60% faster page load times",
      "Worked directly with clients to gather requirements and provide technical solutions",
      "Maintained and updated legacy PHP applications while migrating to modern stack",
    ],
    technologies: [
      "Vue.js",
      "Laravel",
      "MySQL",
      "JavaScript",
      "PHP",
      "Stripe API",
    ],
    type: "full-time",
  },
  {
    id: "3",
    company: "StartupXYZ",
    position: "Frontend Developer",
    location: "Remote",
    startDate: "2019-06-01",
    endDate: "2020-02-28",
    description: [
      "Built responsive web interfaces using React and modern CSS frameworks",
      "Collaborated with UX/UI designers to implement pixel-perfect designs",
      "Integrated RESTful APIs and implemented state management with Redux",
      "Participated in code reviews and maintained high code quality standards",
      "Contributed to the development of the company's design system",
    ],
    technologies: ["React", "Redux", "Sass", "JavaScript", "Material-UI"],
    type: "full-time",
  },
  {
    id: "4",
    company: "Freelance",
    position: "Web Developer",
    location: "Remote",
    startDate: "2018-01-01",
    endDate: "2019-05-31",
    description: [
      "Developed custom websites and web applications for small to medium businesses",
      "Created responsive WordPress themes and custom PHP applications",
      "Provided technical consultation and digital transformation solutions",
      "Managed multiple projects simultaneously while maintaining quality standards",
      "Built long-term relationships with clients resulting in repeat business",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "jQuery", "MySQL"],
    type: "freelance",
  },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "Universitas Indonesia",
    degree: "Bachelor of Computer Science",
    field: "Software Engineering",
    startDate: "2014-09-01",
    endDate: "2018-07-31",
    gpa: "3.75",
    achievements: [
      "Graduated Cum Laude",
      "Dean's List for 6 semesters",
      "Best Final Project in Software Engineering",
      "Active member of Programming Club",
    ],
  },
  {
    id: "2",
    institution: "SMA Negeri 1 Jakarta",
    degree: "High School Diploma",
    field: "Natural Sciences",
    startDate: "2011-07-01",
    endDate: "2014-05-31",
    achievements: [
      "Valedictorian",
      "National Mathematics Olympiad participant",
      "Student Council President",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    id: "1",
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023-08-15",
    url: "https://aws.amazon.com/certification/",
    imageUrl: "/certificates/aws-cert.jpg",
  },
  {
    id: "2",
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2023-03-20",
    url: "https://developers.facebook.com/",
    imageUrl: "/certificates/react-cert.jpg",
  },
  {
    id: "3",
    name: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2022-11-10",
    url: "https://cloud.google.com/certification",
    imageUrl: "/certificates/gcp-cert.jpg",
  },
  {
    id: "4",
    name: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2021-09-05",
    url: "https://freecodecamp.org/",
    imageUrl: "/certificates/freecodecamp-cert.jpg",
  },
];
