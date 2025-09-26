export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  liveUrlNew?: string;
  imageUrl?: string;
  featured: boolean;
  category: "web" | "mobile" | "desktop" | "api" | "other";
  startDate: string;
  endDate?: string;
  status: "completed" | "in-progress" | "planned";
}

export interface Skill {
  name: string;
  category:
    | "frontend"
    | "backend"
    | "database"
    | "tools"
    | "language"
    | "framework";
  proficiency: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: string;
  yearsOfExperience?: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies: string[];
  type: "full-time" | "part-time" | "freelance" | "contract" | "internship";
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate?: string;
  gpa?: string;
  achievements?: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle?: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
  avatar?: string;
  resumeUrl?: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  dribbble?: string;
  behance?: string;
  medium?: string;
  dev?: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
  imageUrl?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
