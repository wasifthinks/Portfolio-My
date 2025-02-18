import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-1000">
      {/* Dynamic 3D Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>
      </div>
      
      {/* 3D Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              perspective: 1000,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              rotateX: [0, 360],
              rotateY: [0, 360],
              scale: [1, 1.2, 1],
              z: [0, 100, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          >
            <div className={`w-full h-full ${i % 2 === 0 ? 'border-2 border-blue-500/20' : 'bg-blue-500/10'} 
              ${i % 3 === 0 ? 'rounded-full' : 'rounded-lg'} transform-gpu`} 
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* 3D Rotating Avatar */}
          <motion.div
            className="mb-12 relative"
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="relative inline-block"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="text-7xl relative">
                <motion.span
                  className="absolute -left-4 -top-4 text-blue-500/20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  👨‍💻
                </motion.span>
                <motion.span
                  className="relative z-10"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                >
                  👨‍💻
                </motion.span>
              </div>
            </motion.div>
          </motion.div>

          {/* Animated Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm{" "}
            <motion.span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
              whileHover={{
                scale: 1.1,
                textShadow: "0 0 8px rgb(59, 130, 246)",
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Wasif Azim
            </motion.span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div
            className="text-xl md:text-2xl text-gray-300 mb-12 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="relative inline-block"
              animate={{
                rotateX: [0, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ perspective: 1000 }}
            >
              <motion.span
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 font-semibold"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Full Stack Developer & AI/ML Enthusiast
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Animated CTA Button */}
          <motion.a
            href="#projects"
            className="relative inline-block group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              delay: 0.6,
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
          >
            <motion.span
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 opacity-75 group-hover:opacity-100 blur-lg transition-opacity"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <span className="relative block px-8 py-3 rounded-full bg-blue-500 text-white text-lg font-semibold transform transition-transform group-hover:translate-y-0.5">
              View My Work
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  );
};

export default Hero;