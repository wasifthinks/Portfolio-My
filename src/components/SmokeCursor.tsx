import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const SmokeCursor = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Create multiple particles for the smoke effect
  const particles = Array.from({ length: 8 });

  useEffect(() => {
    // Check if it's a touch device
    setIsTouchDevice('ontouchstart' in window);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleTouchMove = (e: TouchEvent) => {
      cursorX.set(e.touches[0].clientX);
      cursorY.set(e.touches[0].clientY);
      setIsVisible(true);
    };

    const handleTouchEnd = () => {
      setIsVisible(false);
    };

    if (isTouchDevice) {
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    } else {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (isTouchDevice) {
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      } else {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isTouchDevice, cursorX, cursorY]);

  if (!isVisible && isTouchDevice) return null;

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
          className="w-8 h-8 rounded-full bg-white filter blur-sm"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.3, 0.7],
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
              background: `hsl(${(index * 360) / particles.length}, 100%, 50%)`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 50],
              y: [0, (Math.random() - 0.5) * 50],
              scale: [0.8, 0.1],
              opacity: [0.8, 0],
            }}
            transition={{
              duration: 1 + Math.random(),
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
