export interface EducationItem {
  id: string;
  degree: string;
  fullDegreeName: string;
  institution: string;
  campus?: string;
  period: string;
  score: string;
  gradeClassification: string;
}

export interface PipelineNode {
  id: string;
  stepNumber: number;
  label: string;
  subtitle: string;
  detail: string;
  badge: string;
}

export interface ProjectData {
  title: string;
  institution: string;
  date: string;
  grade: string;
  credits: number;
  technologies: string[];
  areas: string[];
  description: string;
  appliedTechniques: string[];
  coreArchitecture: string[];
  evaluationMetrics: string[];
  pipeline: PipelineNode[];
  projectUrlPlaceholder: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  year: string;
  institution: string;
}

export interface SocialLinksPlaceholder {
  github: string;
  linkedin: string;
  resume: string;
}

export interface PortfolioData {
  name: string;
  titleRoles: string[];
  tagline: string;
  email: string;
  phone: string;
  location: string;
  statusBadge: string;
  heroImage: string;
  aboutIntro: string;
  aboutFocus: string;
  education: EducationItem[];
  project: ProjectData;
  skillCategories: SkillCategory[];
  certifications: CertificationItem[];
  socialPlaceholders: SocialLinksPlaceholder;
}
