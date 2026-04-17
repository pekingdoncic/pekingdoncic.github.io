import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // No lag for the "Normal" feeling, or very high stiffness
  const cursorX = useSpring(mouseX, { damping: 50, stiffness: 1000 });
  const cursorY = useSpring(mouseY, { damping: 50, stiffness: 1000 });
  
  const cursorScale = useMotionValue(1);
  const smoothScale = useSpring(cursorScale, { damping: 20, stiffness: 200 });

  const lastPos = useRef({ x: 0, y: 0, time: Date.now() });
  const shakeAmount = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      const now = Date.now();
      const dt = now - lastPos.current.time;
      
      if (dt > 0) {
        const dx = e.clientX - lastPos.current.x;
        const dy = e.clientY - lastPos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Shake detection: accumulation of rapid movement
        if (distance > 5) {
          shakeAmount.current = Math.min(shakeAmount.current + distance * 0.05, 60);
        }
        
        lastPos.current = { x: e.clientX, y: e.clientY, time: now };
      }
      
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Continuous decay loop for the shake effect
    let animationFrameId: number;
    const updateDecay = () => {
      if (shakeAmount.current > 0.1) {
        shakeAmount.current *= 0.94; // Smooth decay
        const targetScale = 1 + (shakeAmount.current / 15);
        cursorScale.set(Math.min(targetScale, 4));
      } else if (shakeAmount.current !== 0) {
        shakeAmount.current = 0;
        cursorScale.set(1);
      }
      animationFrameId = requestAnimationFrame(updateDecay);
    };
    animationFrameId = requestAnimationFrame(updateDecay);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, mouseX, mouseY, cursorScale]);

  return (
    <>
      <style>{`
        body, a, button {
          cursor: ${isVisible ? 'none' : 'auto'} !important;
        }
      `}</style>
      
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
          style={{
            x: cursorX,
            y: cursorY,
            scale: smoothScale,
            originX: 0,
            originY: 0,
          }}
        >
          {/* Standard Cursor Arrow SVG with Inversion Effect */}
          <svg 
            width="22" 
            height="22" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M4.5 4V19.5L8.5 15.5L11.5 21.5L14.5 20L11.5 14H17L4.5 4Z" 
              fill="white"
            />
          </svg>
        </motion.div>
      )}
    </>
  );
}
