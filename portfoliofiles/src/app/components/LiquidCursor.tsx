import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const LiquidCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      if (target) {
        const style = window.getComputedStyle(target);
        setIsPointer(
          style.cursor === 'pointer' || 
          target.closest('a') !== null || 
          target.closest('button') !== null ||
          target.hasAttribute('data-interactive')
        );
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999]">
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -10,
          top: -10,
        }}
        className="absolute"
      >
        <motion.div
          className="rounded-full border border-white/40 bg-white/5 backdrop-blur-[4px] mix-blend-difference"
          animate={{
            width: isPointer ? 48 : 20,
            height: isPointer ? 48 : 20,
            backgroundColor: isPointer ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)",
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 250
          }}
        />
        
        {/* Simple liquid center point */}
        <motion.div 
          className="absolute inset-0 m-auto w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          animate={{
            scale: isPointer ? 0 : 1,
            opacity: isPointer ? 0 : 1
          }}
        />
      </motion.div>
    </div>
  );
};
