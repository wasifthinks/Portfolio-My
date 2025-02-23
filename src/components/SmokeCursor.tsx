import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const SmokeCursor = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Create multiple particles for the smoke effect
  const particles = Array.from({ length: 12 });

  useEffect(() => {
    // Check if it's a touch device
    setIsTouchDevice('ontouchstart' in window);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Only add mouse event listener if it's not a touch device
    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (!isTouchDevice) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isTouchDevice, cursorX, cursorY]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="w-10 h-10 rounded-full bg-white/30 filter blur-md"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 0.4, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Smoke particles */}
      {particles.map((_, index) => (
        <motion.div
          key={index}
          className="fixed pointer-events-none z-40 mix-blend-screen"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: '-50%',
            translateY: '-50%',
          }}
        >
          <motion.div
            className="absolute rounded-full"
            style={{
              background: `hsla(${(index * 360) / particles.length}, 100%, 50%, 0.3)`,
              width: `${Math.random() * 30 + 15}px`,
              height: `${Math.random() * 30 + 15}px`,
              filter: 'blur(8px)',
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              scale: [1, 0.2],
              opacity: [0.8, 0],
            }}
            transition={{
              duration: 1.5 + Math.random(),
              repeat: Infinity,
              ease: "easeOut",
              delay: index * 0.1,
            }}
          />
        </motion.div>
      ))}
    </>
  );
};

export default SmokeCursor;
