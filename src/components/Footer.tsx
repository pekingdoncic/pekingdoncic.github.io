import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Footer() {
  const { copy } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-24 px-6 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
              {copy.footer.heading} <br />
              <span className="text-gradient">{copy.footer.headingAccent}</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-md">
              {copy.footer.description}
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/pekingdoncic?page=1&tab=repositories', label: copy.footer.github },
                { icon: Twitter, href: '#', label: copy.footer.twitter },
                { icon: Linkedin, href: '#', label: copy.footer.linkedin },
                { icon: Mail, href: 'mailto:jordanpeking6@gmail.com', label: copy.footer.email },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between items-start md:items-end">
            <div className="space-y-4 text-left md:text-right">
              <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest">{copy.footer.contact}</p>
              <a href="mailto:jordanpeking6@gmail.com" className="text-2xl font-medium hover:text-indigo-400 transition-colors">
                jordanpeking6@gmail.com
              </a>
              <p className="text-zinc-500">{copy.footer.location}</p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-12 group flex items-center gap-3 text-zinc-500 hover:text-zinc-100 transition-colors"
            >
              <span className="text-xs font-mono uppercase tracking-widest">{copy.footer.backToTop}</span>
              <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-all">
                <ArrowUp size={18} />
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-900 gap-4 text-zinc-600 text-xs font-mono uppercase tracking-widest">
          <p>{copy.footer.copyright}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-400 transition-colors">{copy.footer.privacy}</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">{copy.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
