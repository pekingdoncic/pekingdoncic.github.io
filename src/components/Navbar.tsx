import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Languages, Mail, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../i18n';

function LanguageToggle() {
  const { language, toggleLanguage, copy } = useLanguage();
  const label = language === 'en' ? '中文' : 'EN';

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={copy.nav.switchLanguage}
      title={copy.nav.switchLanguage}
      className="h-9 px-2.5 rounded-full border border-zinc-800 bg-zinc-900/70 text-zinc-300 hover:text-zinc-50 hover:border-zinc-700 transition-colors inline-flex items-center gap-1.5"
    >
      <Languages size={15} aria-hidden="true" />
      <span className="text-xs font-semibold leading-none" lang={language === 'en' ? 'zh-CN' : 'en'}>{label}</span>
    </button>
  );
}

function ContactMenu() {
  const { copy } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isOpen = isHovered || isFocused || isPinned;

  const closeMenu = () => {
    setIsHovered(false);
    setIsFocused(false);
    setIsPinned(false);
  };

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsHovered(false);
        setIsFocused(false);
        setIsPinned(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsHovered(false);
        setIsFocused(false);
        setIsPinned(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false);
      }}
    >
      <motion.button
        type="button"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => {
          setIsPinned((pinned) => {
            if (pinned) setIsFocused(false);
            return !pinned;
          });
        }}
        aria-label={isOpen ? copy.nav.closeProfileMenu : copy.nav.openProfileMenu}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className={cn(
          'relative block w-11 h-11 rounded-full border bg-zinc-950/75 overflow-hidden transition-all duration-200',
          isOpen
            ? 'border-violet-400/60 shadow-[0_0_22px_rgba(139,92,246,0.28)]'
            : 'border-zinc-800 hover:border-zinc-600 hover:shadow-[0_0_18px_rgba(139,92,246,0.18)]'
        )}
      >
        <img
          src={`${import.meta.env.BASE_URL}lukas-avatar-final.png`}
          alt={copy.nav.avatarAlt}
          className="block w-full h-full object-contain object-center scale-110"
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.16 }}
            className="absolute right-0 top-full pt-3 z-50 origin-top-right"
          >
            <div
              role="menu"
              aria-label={copy.nav.contactMenu}
              className="relative flex items-center gap-1.5 rounded-2xl border border-zinc-800 bg-zinc-950/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl"
            >
              <span className="absolute -top-1.5 right-4 h-3 w-3 rotate-45 border-l border-t border-zinc-800 bg-zinc-950" aria-hidden="true" />
              <a
                href="https://github.com/pekingdoncic?page=1&tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                title={copy.nav.github}
                aria-label={copy.nav.github}
                onClick={closeMenu}
                className="relative z-10 grid h-10 w-10 place-items-center rounded-xl text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <Github size={21} aria-hidden="true" />
              </a>
              <a
                href="mailto:jordanpeking6@gmail.com"
                role="menuitem"
                title={copy.nav.email}
                aria-label={copy.nav.email}
                onClick={closeMenu}
                className="relative z-10 grid h-10 w-10 place-items-center rounded-xl text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <Mail size={21} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const { copy } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: copy.nav.about, href: '#about' },
    { name: copy.nav.hackathon, href: '#hackathon' },
    { name: copy.nav.workflows, href: '#workflows' },
    { name: copy.nav.projects, href: '#projects' },
    { name: copy.nav.blog, href: '#blog' },
    { name: copy.nav.paper, href: '#paper' },
    { name: copy.nav.demo, href: '#demo' },
    { name: copy.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'backdrop-blur-xl bg-zinc-950/70 border-b border-zinc-800/50 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center shrink-0"
          aria-label={copy.nav.backToTop}
        >
          <span className="text-xl font-bold tracking-tighter text-gradient">LUKAS.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
          <LanguageToggle />
          <ContactMenu />
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-1.5">
          <LanguageToggle />
          <button
            className="p-2 text-zinc-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? copy.nav.closeMenu : copy.nav.openMenu}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ContactMenu />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-zinc-900 border-b border-zinc-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-zinc-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
