import { motion } from 'motion/react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { cn } from '../lib/utils';

interface BentoGridProps {
  projects: Project[];
}

export default function BentoGrid({ projects }: BentoGridProps) {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-zinc-500 max-w-lg">A selection of my most impactful work in AI, systems, and creative technology.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              'bento-card group',
              project.size === 'large' && 'md:col-span-2 md:row-span-2',
              project.size === 'medium' && 'md:col-span-2 lg:col-span-1 lg:row-span-2',
              project.size === 'small' && 'col-span-1 row-span-1'
            )}
          >
            {project.imageUrl && (
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
              </div>
            )}

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full bg-zinc-800 hover:bg-indigo-500 text-zinc-300 transition-colors"
                        title="View Source on GitHub"
                      >
                        <Github size={14} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full bg-zinc-800 hover:bg-indigo-500 text-zinc-300 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed">{project.description}</p>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs font-medium">
                <div className="flex items-center text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  View Details <ArrowUpRight size={14} className="ml-1" />
                </div>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <Github size={12} /> View Source
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
