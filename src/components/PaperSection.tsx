import { motion } from 'motion/react';
import { FileText, Github, ArrowRight, Play } from 'lucide-react';
import { Paper } from '../types';

interface PaperSectionProps {
  paper: Paper;
}

export default function PaperSection({ paper }: PaperSectionProps) {
  return (
    <section id="paper" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="bento-card p-8 md:p-12 relative overflow-hidden group">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10 grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-6">
              <FileText size={14} /> Featured Research
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{paper.title}</h2>
            <div className="flex items-center gap-3 mb-6">
              <p className="text-indigo-400 font-mono text-sm">{paper.venue}</p>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <p className="text-zinc-300 font-medium text-sm">Author: <span className="text-indigo-300 underline underline-offset-4 decoration-indigo-500/30">Haoyang Liu</span></p>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
              {paper.abstract}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {paper.pdfUrl && (
                <a 
                  href={paper.pdfUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-zinc-100 text-zinc-950 font-semibold hover:bg-white transition-all flex items-center gap-2"
                >
                  Read Paper <ArrowRight size={18} />
                </a>
              )}
              {paper.videoUrl && (
                <a 
                  href={paper.videoUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-all flex items-center gap-2"
                >
                  <Play size={18} fill="currentColor" /> Watch Demo
                </a>
              )}
              {paper.codeUrl && (
                <a 
                  href={paper.codeUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-zinc-800 text-zinc-100 font-semibold hover:bg-zinc-700 transition-all flex items-center gap-2"
                >
                  <Github size={18} /> View Code
                </a>
              )}
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="aspect-[3/4] rounded-2xl bg-zinc-900 border border-zinc-800 p-6 flex flex-col gap-6 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 group/mockup">
              <div className="space-y-3">
                <div className="w-full h-2 bg-zinc-800 rounded opacity-50" />
                <div className="w-5/6 h-2 bg-zinc-800 rounded opacity-50" />
                <div className="w-4/6 h-2 bg-zinc-800 rounded opacity-50" />
              </div>
              <div className="flex-grow relative rounded-xl border border-zinc-800 overflow-hidden bg-zinc-950 shadow-inner">
                <img 
                  src="https://picsum.photos/seed/vr-ppe-training/600/600" 
                  alt="Personal Protection Equipment Training in VR"
                  className="w-full h-full object-cover grayscale opacity-40 group-hover/mockup:grayscale-0 group-hover/mockup:opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-[8px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">FIG. 01</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="w-full h-1.5 bg-zinc-800 rounded opacity-30" />
                <div className="w-2/3 h-1.5 bg-zinc-800 rounded opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
