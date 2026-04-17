import { motion } from 'motion/react';
import { ExternalLink, Gamepad2 } from 'lucide-react';

const DEMOS = [
  {
    title: '【单视角单物体三维重建演示demo】',
    bvid: 'BV1WPdaBKEgs',
    category: '3DGS / AI Vision',
    description: '基于单张影像实现高精度三维物体几何重建。'
  },
  {
    title: '【古代数学成就展览馆游戏demo（彭罗斯三角，赵州桥，日晷计时系统）】',
    bvid: 'BV1wZHeeUEiB',
    category: 'Unity / Digital Heritage',
    description: '通过交互游戏化方式展示中国古代数学与建筑成就。'
  },
  {
    title: '【基于three.js实现的有虚拟摇杆的线上展览馆和第一人称视角的FPS游戏】',
    bvid: 'BV119HeenEP2',
    category: 'Web3D / Three.js',
    description: '在网页端构建高度交互的第一人称三维空间。'
  },
  {
    title: '【利用Unity和VR实现的密室逃脱和FPS射击的沉浸式游戏】',
    bvid: 'BV1usHveFEDc',
    category: 'VR Gaming / Unity',
    description: '结合密室解谜与射击机制的深度沉浸式 VR 体验。'
  },
  {
    title: '【无人机虚拟仿真平台演示demo】',
    bvid: 'BV1zRhXz5EV6',
    category: 'UE / Simulation',
    description: '物理引擎驱动的无人机环境感知与飞行仿真。'
  },
  {
    title: '【拳击新星——三维动画与虚拟显示的结合实现】',
    bvid: 'BV1DfnfeFEiy',
    category: 'Unity / Animation',
    description: '探索三维角色动画在虚拟显示环境下的表现力。'
  },
];

export default function DemoSection() {
  return (
    <section id="demo" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-6 uppercase tracking-wider">
          <Gamepad2 size={12} /> Interactive Demos
        </div>
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Digital Twins, Games & Immersive Realms</h2>
        <p className="text-zinc-500 max-w-2xl text-lg leading-relaxed">
          从人工智能驱动的三维视觉重建，到多感官沉浸的虚拟现实环境与互动游戏。
          这些 Demo 展示了我在三维建模、物理仿真与交互式系统开发方面的技术探索与融合。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DEMOS.map((demo, i) => (
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
                >
                  <ExternalLink size={14} />
                </a>
              </div>
              <h3 className="text-sm font-bold leading-tight line-clamp-2 mb-2 group-hover:text-indigo-400 transition-colors">
                {demo.title}
              </h3>
              <p className="text-xs text-zinc-500 line-clamp-2 mt-auto">
                {demo.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
