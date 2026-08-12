import { motion } from 'motion/react';
import { ArrowUpRight, Brain, Workflow, Wrench, Zap } from 'lucide-react';
import { AIWorkflow } from '../types';
import { useLanguage } from '../i18n';

const STEP_ICONS = [Zap, Brain, Wrench];

interface WorkflowSectionProps {
  workflows: AIWorkflow[];
}

export default function WorkflowSection({ workflows }: WorkflowSectionProps) {
  const { copy, text } = useLanguage();

  return (
    <section id="workflows" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4">{copy.workflows.title}</h2>
        <p className="text-zinc-500 max-w-lg">
          {copy.workflows.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {workflows.map((workflow, i) => (
          <motion.div
            key={workflow.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bento-card group flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-indigo-400 transition-colors">
                <Workflow size={20} />
              </div>
              {workflow.linkUrl && (
                <a
                  href={workflow.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-zinc-800 hover:bg-indigo-500 text-zinc-300 transition-colors"
                  title={copy.workflows.viewTitle}
                  aria-label={`${copy.workflows.viewTitle}: ${text(workflow.name)}`}
                >
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{text(workflow.name)}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">{text(workflow.description)}</p>

            {workflow.steps && (
              <div className="flex flex-col mb-6">
                {workflow.steps.map((step, j) => {
                  const Icon = STEP_ICONS[j % STEP_ICONS.length];
                  return (
                    <div key={j} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-zinc-500 shrink-0">
                          <Icon size={12} />
                        </div>
                        {j < workflow.steps!.length - 1 && <div className="w-px flex-1 bg-zinc-800" />}
                      </div>
                      <span className="text-xs text-zinc-500 font-mono pb-4 pt-1">{text(step)}</span>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-auto">
              {workflow.tools.map((tool, toolIndex) => (
                <span key={`${workflow.id}-${toolIndex}`} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                  {text(tool)}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
