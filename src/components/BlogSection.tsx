import { motion } from 'motion/react';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { BlogPost } from '../types';
import { useLanguage } from '../i18n';

interface BlogSectionProps {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  const { copy, text } = useLanguage();

  return (
    <section id="blog" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">{copy.blog.title}</h2>
          <p className="text-zinc-500">{copy.blog.description}</p>
        </div>
        <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">
          {copy.blog.viewAll} <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="space-y-4">
        {posts.map((post, i) => (
          <motion.a
            key={post.id}
            href="#"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group block p-6 rounded-3xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {post.imageUrl && (
                <div className="w-full md:w-48 aspect-video md:aspect-square rounded-2xl overflow-hidden shrink-0">
                  <img
                    src={post.imageUrl}
                    alt={text(post.title)}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                    <Calendar size={12} /> {post.date}
                  </div>
                  <div className="flex gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={`${post.id}-${tagIndex}`} className="text-[10px] uppercase tracking-wider text-indigo-400 font-semibold">
                        {text(tag)}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                  {text(post.title)}
                </h3>
                <p className="text-zinc-400 line-clamp-2 leading-relaxed">
                  {text(post.excerpt)}
                </p>
              </div>
              <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-zinc-800 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-all">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
