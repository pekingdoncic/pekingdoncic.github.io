import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export default function StarTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);

  const addParticle = useCallback((x: number, y: number) => {
    const id = Math.random();
    const size = Math.random() * 4 + 2;
    const colors = ['#818cf8', '#a78bfa', '#c084fc', '#ffffff'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    setParticles((prev) => {
      // Limit the number of particles for performance
      const newParticles = [...prev.slice(-15), { id, x, y, size, color }];
      return newParticles;
    });

    // Remove particle after animation
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id));
    }, 1000);
  }, []);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    const threshold = 10; // Only add particle if mouse moved enough

    const handleMouseMove = (e: MouseEvent) => {
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      if (dist > threshold) {
        addParticle(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [addParticle]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0.8, scale: 1, x: particle.x, y: particle.y }}
            animate={{ 
              opacity: 0, 
              scale: 0, 
              y: particle.y + (Math.random() * 50 - 25),
              x: particle.x + (Math.random() * 50 - 25)
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              boxShadow: `0 0 10px ${particle.color}, 0 0 20px ${particle.color}44`,
              left: -particle.size / 2,
              top: -particle.size / 2,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
