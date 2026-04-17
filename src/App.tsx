/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Github, Mail, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import PaperSection from './components/PaperSection';
import BlogSection from './components/BlogSection';
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';
import { PROJECTS, FEATURED_PAPER, BLOG_POSTS, SOCIAL_LINKS } from './constants';
import StarTrail from './components/StarTrail';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-indigo-500/30">
      <CustomCursor />
      <StarTrail />
      <Navbar />
      
      <main>
        <Hero />

        {/* Quick Links Section */}
        <section className="px-6 max-w-7xl mx-auto pb-12 pt-0 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SOCIAL_LINKS.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgb(113 113 122)' }}
                className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-zinc-100 transition-colors">
                    {link.name === 'GitHub' && <Github size={20} />}
                    {link.name === 'Email' && <Mail size={20} />}
                    {link.name === 'Twitter' && <Twitter size={20} />}
                    {link.name === 'LinkedIn' && <Linkedin size={20} />}
                  </div>
                  <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-100 transition-colors">
                    {link.name}
                  </span>
                </div>
                <ExternalLink size={14} className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
              </motion.a>
            ))}
          </div>
        </section>

        <BentoGrid projects={PROJECTS} />
        
        <PaperSection paper={FEATURED_PAPER} />
        
        <DemoSection />
        
        <BlogSection posts={BLOG_POSTS} />

        {/* More Repos Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="bento-card bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">More Repositories</h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Explore my other open-source projects, experiments, and contributions on GitHub.
            </p>
            <motion.a
              href="https://github.com/pekingdoncic?page=1&tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-zinc-100 text-zinc-950 font-semibold hover:bg-white transition-all"
            >
              <Github size={20} /> Explore on GitHub
            </motion.a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
