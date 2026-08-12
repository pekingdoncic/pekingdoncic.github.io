import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Language, LocalizedText, LocalizedValue } from './types';

const STORAGE_KEY = 'lukas-language';

const en = {
  meta: {
    title: 'Lukas Peking — AI & Game Creator',
  },
  nav: {
    about: 'About',
    hackathon: 'Hackathon',
    workflows: 'Workflows',
    projects: 'Projects',
    blog: 'Blog',
    paper: 'Paper',
    demo: 'Demo',
    contact: 'Contact',
    backToTop: 'Lukas Peking — back to top',
    avatarAlt: 'Lukas Peking',
    github: 'Open Lukas Peking on GitHub',
    email: 'Email Lukas Peking',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    openProfileMenu: 'Open contact menu',
    closeProfileMenu: 'Close contact menu',
    contactMenu: 'Contact links',
    switchLanguage: 'Switch to Chinese',
  },
  hero: {
    availability: 'Available for collaboration',
    descriptionStart: 'An ',
    aiGeek: 'AI Geek',
    descriptionMiddle: ' & ',
    gameCreator: 'Game Creator',
    descriptionBody: ' obsessed with the bleeding edge. Crafting ',
    frontierTech: 'frontier tech',
    descriptionEnd: ' and products that redefine ',
    possibility: "what's possible.",
    scroll: 'Scroll to explore',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
  },
  hackathon: {
    title: 'Hackathon Projects',
    description: 'Fast-paced builds from hackathons and game jams — where ideas go from zero to demo in 48 hours.',
    sourceTitle: 'View Source on GitHub',
    demoTitle: 'Live Demo',
  },
  workflows: {
    title: 'AI Workflows',
    description: 'Automation pipelines I built to let AI handle the busywork — from paper digests to game worldbuilding.',
    viewTitle: 'View Workflow',
  },
  projects: {
    title: 'Featured Projects',
    description: 'A selection of my most impactful work in AI, systems, and creative technology.',
    sourceTitle: 'View Source on GitHub',
    demoTitle: 'Live Demo',
    details: 'View Details',
    source: 'View Source',
  },
  paper: {
    badge: 'Featured Research',
    author: 'Author:',
    read: 'Read Paper',
    watch: 'Watch Demo',
    code: 'View Code',
    imageAlt: 'Personal Protection Equipment Training in VR',
  },
  demo: {
    badge: 'Interactive Demos',
    title: 'Digital Twins, Games & Immersive Realms',
    description: 'From AI-driven 3D vision reconstruction to multisensory virtual reality and interactive games, these demos bring together my explorations in 3D modeling, physics simulation, and interactive systems.',
    openVideo: 'Open video on Bilibili',
  },
  blog: {
    title: 'Writing & Insights',
    description: 'Thoughts on technology, design, and the future of AI.',
    viewAll: 'View all posts',
  },
  repositories: {
    title: 'More Repositories',
    description: 'Explore my other open-source projects, experiments, and contributions on GitHub.',
    action: 'Explore on GitHub',
  },
  footer: {
    heading: "Let's build",
    headingAccent: 'something great.',
    description: 'Always open to interesting projects, research collaborations, or just a friendly chat about the future of tech.',
    contact: 'Contact',
    location: 'Based in China',
    backToTop: 'Back to top',
    copyright: '© 2026 Lukas Peking. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    github: 'GitHub',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    email: 'Email',
  },
};

type Messages = typeof en;

const zh: Messages = {
  meta: {
    title: 'Lukas Peking — AI 极客与游戏创作者',
  },
  nav: {
    about: '关于',
    hackathon: '黑客松',
    workflows: 'AI 工作流',
    projects: '项目',
    blog: '博客',
    paper: '论文',
    demo: '演示',
    contact: '联系',
    backToTop: 'Lukas Peking — 返回顶部',
    avatarAlt: 'Lukas Peking 头像',
    github: '在 GitHub 查看 Lukas Peking',
    email: '给 Lukas Peking 发送邮件',
    openMenu: '打开导航菜单',
    closeMenu: '关闭导航菜单',
    openProfileMenu: '打开联系方式菜单',
    closeProfileMenu: '关闭联系方式菜单',
    contactMenu: '联系方式链接',
    switchLanguage: '切换到英文',
  },
  hero: {
    availability: '欢迎合作交流',
    descriptionStart: '一名 ',
    aiGeek: 'AI 极客',
    descriptionMiddle: ' 与 ',
    gameCreator: '游戏创作者',
    descriptionBody: '，痴迷于科技前沿。专注打造 ',
    frontierTech: '前沿技术',
    descriptionEnd: ' 与产品，重新定义 ',
    possibility: '未来的可能性。',
    scroll: '向下探索',
    viewProjects: '查看项目',
    contactMe: '联系我',
  },
  hackathon: {
    title: '黑客松项目',
    description: '在紧凑赛程中将创意快速落地，从想法到可演示产品。',
    sourceTitle: '在 GitHub 查看源码',
    demoTitle: '在线演示',
  },
  workflows: {
    title: 'AI 工作流',
    description: '用 AI 自动处理繁琐工作，从论文摘要到游戏世界观构建。',
    viewTitle: '查看工作流',
  },
  projects: {
    title: '精选项目',
    description: '我在人工智能、系统开发与创意技术领域的代表性作品。',
    sourceTitle: '在 GitHub 查看源码',
    demoTitle: '在线演示',
    details: '查看详情',
    source: '查看源码',
  },
  paper: {
    badge: '精选研究',
    author: '作者：',
    read: '阅读论文',
    watch: '观看演示',
    code: '查看代码',
    imageAlt: '虚拟现实个人防护装备培训',
  },
  demo: {
    badge: '交互演示',
    title: '数字孪生、游戏与沉浸式空间',
    description: '从人工智能驱动的三维视觉重建，到多感官沉浸的虚拟现实环境与互动游戏，这些演示融合了我在三维建模、物理仿真与交互式系统方面的技术探索。',
    openVideo: '在哔哩哔哩打开视频',
  },
  blog: {
    title: '文章与洞见',
    description: '关于技术、设计与人工智能未来的思考。',
    viewAll: '查看全部文章',
  },
  repositories: {
    title: '更多代码仓库',
    description: '在 GitHub 查看我的其他开源项目、实验与技术贡献。',
    action: '前往 GitHub',
  },
  footer: {
    heading: '一起创造',
    headingAccent: '出色的作品。',
    description: '欢迎有趣的项目、研究合作，也欢迎聊聊科技的未来。',
    contact: '联系方式',
    location: '常驻中国',
    backToTop: '返回顶部',
    copyright: '© 2026 Lukas Peking。保留所有权利。',
    privacy: '隐私政策',
    terms: '服务条款',
    github: 'GitHub',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    email: '电子邮件',
  },
};

const messages: Record<Language, Messages> = { en, zh };

interface LanguageContextValue {
  language: Language;
  copy: Messages;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  text: (value: LocalizedValue) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'zh') return stored;
  } catch {
    // Storage may be unavailable in privacy-restricted browsers.
  }

  return window.navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

export function localize(value: LocalizedValue, language: Language): string {
  return typeof value === 'string' ? value : value[language];
}

export function localized(enText: string, zhText: string): LocalizedText {
  return { en: enText, zh: zhText };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((current) => current === 'en' ? 'zh' : 'en');
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = messages[language].meta.title;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Keep the in-memory preference when storage is unavailable.
    }
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    copy: messages[language],
    setLanguage,
    toggleLanguage,
    text: (content) => localize(content, language),
  }), [language, setLanguage, toggleLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}
