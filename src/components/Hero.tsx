import { motion } from 'motion/react';
import { ArrowRight, Github, Mail, Send } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          {/* Avatar Circle */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring' }}
            className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-full blur-2xl opacity-40 animate-pulse" />
            <div className="relative w-full h-full rounded-full border-2 border-zinc-800 p-1 overflow-hidden bg-zinc-900 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/lukas/400/400" 
                alt="Lukas Peking" 
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-[10px] font-mono text-zinc-400 mb-8 tracking-[0.2em] uppercase backdrop-blur-sm"
          >
            Available for collaboration
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="text-6xl md:text-9xl font-bold tracking-tighter mb-10 font-display"
          >
            <span className="text-gradient">Lukas Peking</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
            className="text-xl md:text-2xl text-zinc-400/90 font-light leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            An <span className="text-zinc-100 font-medium">AI Geek</span> & <span className="text-zinc-100 font-medium">Game Creator</span> obsessed with the bleeding edge. 
            Crafting <span className="text-zinc-100 font-medium">frontier tech</span> and products that redefine <span className="text-zinc-100 font-medium">what's possible</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col items-center gap-1 mb-4"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-medium">Scroll to explore</span>
            <div className="w-px h-4 bg-gradient-to-b from-zinc-600 to-transparent" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full bg-zinc-100 text-zinc-950 font-bold flex items-center gap-2 group transition-all hover:bg-white shadow-xl shadow-indigo-500/10"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-100 font-bold flex items-center gap-2 hover:bg-zinc-800 transition-all backdrop-blur-sm"
            >
              Contact Me
              <Send size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
