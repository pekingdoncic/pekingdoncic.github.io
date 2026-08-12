import { motion } from 'motion/react';
import { Github, ExternalLink, Trophy } from 'lucide-react';
import { HackathonProject } from '../types';
import { useLanguage } from '../i18n';

interface HackathonSectionProps {
  projects: HackathonProject[];
}

export default function HackathonSection({ projects }: HackathonSectionProps) {
  const { copy, text } = useLanguage();

  return (
    <section id="hackathon" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4">{copy.hackathon.title}</h2>
        <p className="text-zinc-500 max-w-lg">
          {copy.hackathon.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bento-card group flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              {project.award ? (
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
                  <Trophy size={12} /> {text(project.award)}
                </span>
              ) : (
                <span />
              )}
              <div className="flex gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-zinc-800 hover:bg-indigo-500 text-zinc-300 transition-colors"
                    title={copy.hackathon.sourceTitle}
                    aria-label={`${copy.hackathon.sourceTitle}: ${text(project.title)}`}
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
                    title={copy.hackathon.demoTitle}
                    aria-label={`${copy.hackathon.demoTitle}: ${text(project.title)}`}
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-1 group-hover:text-indigo-400 transition-colors">{text(project.title)}</h3>
            <p className="text-xs font-mono text-zinc-500 mb-3">{text(project.event)} · {project.date}</p>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-1">{text(project.description)}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span key={`${project.id}-${tagIndex}`} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                  {text(tag)}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
