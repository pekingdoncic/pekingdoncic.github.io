export type Language = 'en' | 'zh';

export interface LocalizedText {
  en: string;
  zh: string;
}

export type LocalizedValue = string | LocalizedText;

export interface Project {
  id: string;
  title: LocalizedValue;
  description: LocalizedValue;
  tags: LocalizedValue[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  size: 'small' | 'medium' | 'large';
}

export interface Paper {
  title: LocalizedValue;
  venue: LocalizedValue;
  abstract: LocalizedValue;
  pdfUrl?: string;
  codeUrl?: string;
  videoUrl?: string;
}

export interface BlogPost {
  id: string;
  title: LocalizedValue;
  excerpt: LocalizedValue;
  date: string;
  tags: LocalizedValue[];
  imageUrl?: string;
}

export interface SocialLink {
  name: LocalizedValue;
  kind: 'github' | 'email' | 'twitter' | 'linkedin';
  url: string;
}

export interface HackathonProject {
  id: string;
  title: LocalizedValue;
  event: LocalizedValue;
  award?: LocalizedValue;
  date: string;
  description: LocalizedValue;
  tags: LocalizedValue[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

export interface AIWorkflow {
  id: string;
  name: LocalizedValue;
  description: LocalizedValue;
  tools: LocalizedValue[];
  steps?: LocalizedValue[];
  linkUrl?: string;
}

export interface DemoItem {
  title: LocalizedValue;
  bvid: string;
  category: string;
  description: LocalizedValue;
}
