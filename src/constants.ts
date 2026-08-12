import { localized as l } from './i18n';
import { Project, Paper, BlogPost, SocialLink, HackathonProject, AIWorkflow, DemoItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: l('File Manage System', '文件管理系统'),
    description: l('A comprehensive file management system designed for efficient organization, storage, and retrieval of digital assets.', '面向数字资产高效组织、存储与检索的综合文件管理系统。'),
    tags: ['C++', l('System Design', '系统设计'), l('File IO', '文件 I/O')],
    githubUrl: 'https://github.com/pekingdoncic/File_Manage_System',
    imageUrl: 'https://picsum.photos/seed/filesys/800/600',
    size: 'large',
  },
  {
    id: '2',
    title: l('License Plate Recognition System', '车牌识别系统'),
    description: l('Digital Video Processing course design implementing real-time license plate detection and character recognition algorithms.', '数字视频处理课程设计，实现实时车牌检测与字符识别算法。'),
    tags: ['Python', 'OpenCV', l('Image Processing', '图像处理')],
    githubUrl: 'https://github.com/pekingdoncic/License-Plate-Recognition-System---Digital-Video-Processing-Course-Design',
    imageUrl: 'https://picsum.photos/seed/license/600/400',
    size: 'medium',
  },
  {
    id: '3',
    title: l('Digital Image Processing System', '数字图像处理系统'),
    description: l('A robust system for digital image manipulation, featuring various filtering, enhancement, and analysis tools.', '集成多种滤波、增强与分析工具的数字图像处理系统。'),
    tags: ['C++', 'Qt', l('Image Processing', '图像处理')],
    githubUrl: 'https://github.com/pekingdoncic/Digital-Image-Processing-System',
    imageUrl: 'https://picsum.photos/seed/imageproc/600/400',
    size: 'medium',
  },
];

export const FEATURED_PAPER: Paper = {
  title: l('Personal Protection Equipment Training as a Virtual Reality Game in Immersive Environments: Development Study and Pilot Randomized Controlled Trial', '沉浸式环境中的个人防护装备培训虚拟现实游戏：开发研究与试点随机对照试验'),
  venue: 'JMIR Serious Games 2025',
  abstract: l('This study investigates the efficacy of VR-based training for Personal Protection Equipment (PPE). Through a pilot randomized controlled trial, we demonstrate that immersive VR environments significantly improve training outcomes and learner engagement compared to traditional methods.', '本研究探讨基于虚拟现实的个人防护装备（PPE）培训效果。试点随机对照试验表明，与传统方法相比，沉浸式虚拟现实环境能够显著改善培训成效与学习者参与度。'),
  pdfUrl: 'https://games.jmir.org/2025/1/e69021/',
  videoUrl: 'https://www.bilibili.com/video/BV1fqnoeiETB/',
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: l('The Future of Edge AI', '边缘人工智能的未来'),
    excerpt: l('Exploring how on-device inference is changing the landscape of privacy and performance.', '探讨端侧推理如何重塑隐私保护与性能体验。'),
    date: '2024-03-15',
    tags: ['AI', l('Edge Computing', '边缘计算')],
    imageUrl: 'https://picsum.photos/seed/edge/400/300',
  },
  {
    id: '2',
    title: l('Mastering Framer Motion', '掌握 Framer Motion'),
    excerpt: l('A deep dive into creating fluid, physics-based animations in React.', '深入了解如何在 React 中构建流畅、符合物理规律的动画。'),
    date: '2024-02-28',
    tags: [l('Frontend', '前端'), l('Animation', '动画')],
    imageUrl: 'https://picsum.photos/seed/motion/400/300',
  },
  {
    id: '3',
    title: l('Rust for Web Developers', '面向 Web 开发者的 Rust'),
    excerpt: l('Why Rust is becoming the go-to language for high-performance web services.', '解析 Rust 为何正在成为高性能 Web 服务的重要选择。'),
    date: '2024-01-10',
    tags: ['Rust', l('WebDev', 'Web 开发')],
    imageUrl: 'https://picsum.photos/seed/rust/400/300',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', kind: 'github', url: 'https://github.com/pekingdoncic?page=1&tab=repositories' },
  { name: l('Email', '电子邮件'), kind: 'email', url: 'mailto:jordanpeking6@gmail.com' },
  { name: 'Twitter', kind: 'twitter', url: 'https://twitter.com' },
  { name: 'LinkedIn', kind: 'linkedin', url: 'https://linkedin.com' },
];

export const HACKATHON_PROJECTS: HackathonProject[] = [
  {
    id: 'pawclaw',
    title: 'PawClaw',
    event: l('Hackathon 2026', '2026 黑客松'),
    award: l('1st Place', '第一名'),
    date: '2026-08',
    description: l('A cat-companion AI task manager for people with ADHD, turning voice or text captures into smaller actionable steps with contextual prompts, rewards, and an interactive 3D home.', '面向 ADHD 用户的猫咪陪伴式 AI 任务管理应用，将语音或文字想法拆解为更容易执行的小步骤，并提供场景提示、奖励反馈与互动 3D 家园。'),
    tags: ['React', 'TypeScript', 'AI', 'Three.js'],
    githubUrl: 'https://github.com/pekingdoncic/PawClaws',
  },
  {
    id: 'memo-bloom',
    title: 'Memo Bloom',
    event: l('Horizon Hackathon 2026', 'Horizon 黑客松 2026'),
    date: '2026-07',
    description: l('An immersive 3D memory room that turns voice conversations into a handwritten AI diary, with interactive creatures, spatial effects, and milestone-driven storytelling.', '沉浸式 3D 记忆空间，将语音对话整理为手写风格的 AI 日记，并融入互动萌物、空间特效与里程碑叙事。'),
    tags: ['React', 'Three.js', 'Whisper', 'GPT-4.1'],
    githubUrl: 'https://github.com/pekingdoncic/memo-bloom',
  },
  {
    id: 'hackathon-stock',
    title: l('Who Is The Tycoon', '谁是大富翁'),
    event: l('QingKeSong Hackathon 2026', '清客松 2026'),
    date: '2026-05',
    description: l('A social stock-market party game where friends trade with simulated funds, uncover a hidden misinformation agent, and get nightly reports from an AI roast host.', '熟人股票派对游戏：使用模拟资金交易、识别隐藏的假消息卧底，并由 AI 毒舌主持人生成每晚战报。'),
    tags: ['React', 'TypeScript', l('AI Agents', 'AI 智能体'), l('Social Game', '社交游戏')],
    githubUrl: 'https://github.com/pekingdoncic/Hackathon-Stock',
  },
];

export const AI_WORKFLOWS: AIWorkflow[] = [
  {
    id: '1',
    name: l('Paper2Video Digest', '论文转视频摘要'),
    description: l('Watches arXiv for new papers in my fields, generates a Chinese summary with GPT-4o, and auto-publishes a narrated short video.', '持续关注 arXiv 相关领域的新论文，使用 GPT-4o 生成中文摘要，并自动发布带旁白的短视频。'),
    tools: ['n8n', 'GPT-4o', 'FFmpeg', 'Bilibili API'],
    steps: [l('arXiv RSS trigger', 'arXiv RSS 触发'), l('LLM summarization', '大模型生成摘要'), l('Auto-publish video', '自动发布视频')],
    linkUrl: 'https://github.com/pekingdoncic',
  },
  {
    id: '2',
    name: l('Game Lore Generator', '游戏世界观生成器'),
    description: l('A Dify pipeline that turns a one-line game idea into a full worldbuilding doc, character sheets, and quest outlines for my jam projects.', '使用 Dify 将一句游戏创意扩展为完整世界观文档、角色设定与任务大纲。'),
    tools: ['Dify', 'LangChain', 'Notion API'],
    steps: [l('Idea input', '输入创意'), l('Multi-agent expansion', '多智能体扩展'), l('Notion knowledge base', '写入 Notion 知识库')],
    linkUrl: 'https://github.com/pekingdoncic',
  },
  {
    id: '3',
    name: l('AI News Radar', 'AI 新闻雷达'),
    description: l('A Coze bot that aggregates AI product launches daily, dedupes and ranks them by relevance, then pushes a digest to my inbox.', '使用 Coze 每日聚合 AI 产品发布信息，自动去重、按相关性排序，并推送摘要。'),
    tools: ['Coze', 'RSSHub', 'Telegram Bot'],
    steps: [l('Multi-source crawl', '多源抓取'), l('Relevance ranking', '相关性排序'), l('Daily digest push', '每日摘要推送')],
  },
];

export const DEMO_ITEMS: DemoItem[] = [
  {
    title: l('Single-View 3D Object Reconstruction Demo', '单视角单物体三维重建演示'),
    bvid: 'BV1WPdaBKEgs',
    category: '3DGS / AI Vision',
    description: l('High-fidelity 3D object geometry reconstruction from a single image.', '基于单张影像实现高精度三维物体几何重建。'),
  },
  {
    title: l('Ancient Mathematics Achievement Museum Game Demo', '古代数学成就展览馆游戏演示（彭罗斯三角、赵州桥、日晷计时系统）'),
    bvid: 'BV1wZHeeUEiB',
    category: 'Unity / Digital Heritage',
    description: l('An interactive, game-based showcase of achievements in ancient Chinese mathematics and architecture.', '通过交互游戏化方式展示中国古代数学与建筑成就。'),
  },
  {
    title: l('Three.js Online Museum with Virtual Joystick and First-Person FPS', '基于 Three.js 的虚拟摇杆线上展览馆与第一人称 FPS 游戏'),
    bvid: 'BV119HeenEP2',
    category: 'Web3D / Three.js',
    description: l('A highly interactive first-person 3D space built for the web.', '在网页端构建高度交互的第一人称三维空间。'),
  },
  {
    title: l('Immersive Unity VR Escape Room and FPS Game', '基于 Unity 与 VR 的密室逃脱及 FPS 沉浸式游戏'),
    bvid: 'BV1usHveFEDc',
    category: 'VR Gaming / Unity',
    description: l('A deeply immersive VR experience combining escape-room puzzles with shooting mechanics.', '结合密室解谜与射击机制的深度沉浸式 VR 体验。'),
  },
  {
    title: l('Drone Virtual Simulation Platform Demo', '无人机虚拟仿真平台演示'),
    bvid: 'BV1zRhXz5EV6',
    category: 'UE / Simulation',
    description: l('A physics-engine-driven platform for drone environment sensing and flight simulation.', '物理引擎驱动的无人机环境感知与飞行仿真。'),
  },
  {
    title: l('Boxing Rising Star — Combining 3D Animation with Virtual Display', '拳击新星——三维动画与虚拟显示的结合'),
    bvid: 'BV1DfnfeFEiy',
    category: 'Unity / Animation',
    description: l('An exploration of expressive 3D character animation in virtual display environments.', '探索三维角色动画在虚拟显示环境下的表现力。'),
  },
];
