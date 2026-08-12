import { motion } from 'motion/react';
import { ExternalLink, Gamepad2 } from 'lucide-react';
import { DEMO_ITEMS } from '../constants';
import { useLanguage } from '../i18n';

export default function DemoSection() {
  const { copy, text } = useLanguage();

  return (
    <section id="demo" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-6 uppercase tracking-wider">
          <Gamepad2 size={12} /> {copy.demo.badge}
        </div>
        <h2 className="text-4xl font-bold mb-4 tracking-tight">{copy.demo.title}</h2>
        <p className="text-zinc-500 max-w-2xl text-lg leading-relaxed">
          {copy.demo.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DEMO_ITEMS.map((demo, i) => (
          <motion.div
            key={demo.bvid}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bento-card p-0 flex flex-col bg-zinc-900 overflow-hidden"
          >
            {/* Player Container */}
            <div className="aspect-video w-full bg-black relative">
              <iframe 
                src={`//player.bilibili.com/player.html?bvid=${demo.bvid}&page=1&high_quality=1&danmaku=0`} 
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen={true}
                loading="lazy"
                title={text(demo.title)}
              />
            </div>
            
            {/* Content Preview */}
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 bg-indigo-400/5 px-2 py-0.5 rounded">
                  {demo.category}
                </span>
                <a 
                  href={`https://www.bilibili.com/video/${demo.bvid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-zinc-100 transition-colors"
                  aria-label={`${copy.demo.openVideo}: ${text(demo.title)}`}
                >
                  <ExternalLink size={14} />
                </a>
              </div>
              <h3 className="text-sm font-bold leading-tight line-clamp-2 mb-2 group-hover:text-indigo-400 transition-colors">
                {text(demo.title)}
              </h3>
              <p className="text-xs text-zinc-500 line-clamp-2 mt-auto">
                {text(demo.description)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
