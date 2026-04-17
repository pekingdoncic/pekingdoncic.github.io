import { Project, Paper, BlogPost, SocialLink } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'File Manage System',
    description: 'A comprehensive file management system designed for efficient organization, storage, and retrieval of digital assets.',
    tags: ['C++', 'System Design', 'File IO'],
    githubUrl: 'https://github.com/pekingdoncic/File_Manage_System',
    imageUrl: 'https://picsum.photos/seed/filesys/800/600',
    size: 'large',
  },
  {
    id: '2',
    title: 'License Plate Recognition System',
    description: 'Digital Video Processing course design implementing real-time license plate detection and character recognition algorithms.',
    tags: ['Python', 'OpenCV', 'Image Processing'],
    githubUrl: 'https://github.com/pekingdoncic/License-Plate-Recognition-System---Digital-Video-Processing-Course-Design',
    imageUrl: 'https://picsum.photos/seed/license/600/400',
    size: 'medium',
  },
  {
    id: '3',
    title: 'Digital Image Processing System',
    description: 'A robust system for digital image manipulation, featuring various filtering, enhancement, and analysis tools.',
    tags: ['C++', 'Qt', 'Image Processing'],
    githubUrl: 'https://github.com/pekingdoncic/Digital-Image-Processing-System',
    imageUrl: 'https://picsum.photos/seed/imageproc/600/400',
    size: 'medium',
  },
];

export const FEATURED_PAPER: Paper = {
  title: 'Personal Protection Equipment Training as a Virtual Reality Game in Immersive Environments: Development Study and Pilot Randomized Controlled Trial',
  venue: 'JMIR Serious Games 2025',
  abstract: 'This study investigates the efficacy of VR-based training for Personal Protection Equipment (PPE). Through a pilot randomized controlled trial, we demonstrate that immersive VR environments significantly improve training outcomes and learner engagement compared to traditional methods.',
  pdfUrl: 'https://games.jmir.org/2025/1/e69021/',
  videoUrl: 'https://www.bilibili.com/video/BV1fqnoeiETB/',
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Edge AI',
    excerpt: 'Exploring how on-device inference is changing the landscape of privacy and performance.',
    date: '2024-03-15',
    tags: ['AI', 'Edge Computing'],
    imageUrl: 'https://picsum.photos/seed/edge/400/300',
  },
  {
    id: '2',
    title: 'Mastering Framer Motion',
    excerpt: 'A deep dive into creating fluid, physics-based animations in React.',
    date: '2024-02-28',
    tags: ['Frontend', 'Animation'],
    imageUrl: 'https://picsum.photos/seed/motion/400/300',
  },
  {
    id: '3',
    title: 'Rust for Web Developers',
    excerpt: 'Why Rust is becoming the go-to language for high-performance web services.',
    date: '2024-01-10',
    tags: ['Rust', 'WebDev'],
    imageUrl: 'https://picsum.photos/seed/rust/400/300',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/pekingdoncic?page=1&tab=repositories', icon: 'Github' },
  { name: 'Email', url: 'mailto:jordanpeking6@gmail.com', icon: 'Mail' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
];
