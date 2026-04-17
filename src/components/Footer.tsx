import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-24 px-6 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
              Let's build <br /> 
              <span className="text-gradient">something great.</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-md">
              Always open to interesting projects, research collaborations, or just a friendly chat about the future of tech.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/pekingdoncic?page=1&tab=repositories' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: 'mailto:jordanpeking6@gmail.com' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between items-start md:items-end">
            <div className="space-y-4 text-left md:text-right">
              <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Contact</p>
              <a href="mailto:jordanpeking6@gmail.com" className="text-2xl font-medium hover:text-indigo-400 transition-colors">
                jordanpeking6@gmail.com
              </a>
              <p className="text-zinc-500">Based in China</p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-12 group flex items-center gap-3 text-zinc-500 hover:text-zinc-100 transition-colors"
            >
              <span className="text-xs font-mono uppercase tracking-widest">Back to top</span>
              <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-all">
                <ArrowUp size={18} />
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-900 gap-4 text-zinc-600 text-xs font-mono uppercase tracking-widest">
          <p>© 2024 Lukas Peking. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
