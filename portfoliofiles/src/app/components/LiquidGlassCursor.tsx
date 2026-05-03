import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const LiquidGlassCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring configuration for the liquid feel
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      const isInteractive = target.tagName.toLowerCase() === 'a' || 
                            target.tagName.toLowerCase() === 'button' || 
                            target.closest('a') !== null || 
                            target.closest('button') !== null ||
                            target.hasAttribute('data-interactive') ||
                            window.getComputedStyle(target).cursor === 'pointer';
                            
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none z-[99999]">
        <motion.div
          className="absolute rounded-full border border-white/10 backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
          style={{
            left: cursorXSpring,
            top: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
            backgroundColor: "rgba(12, 12, 12, 0.96)",
          }}
          animate={{
            width: isHovering ? 20 : 8,
            height: isHovering ? 20 : 8,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 500,
            mass: 0.4
          }}
        />
      </div>
    </>
  );
};