export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  size: 'small' | 'medium' | 'large';
}

export interface Paper {
  title: string;
  venue: string;
  abstract: string;
  pdfUrl?: string;
  codeUrl?: string;
  videoUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  imageUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
