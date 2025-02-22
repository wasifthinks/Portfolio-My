import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useMotionValue, useTransform } from 'framer-motion';
import { ChevronDown, Instagram, Twitter, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  const socialLinks = [
    {
      icon: Instagram,
      url: "https://www.instagram.com/tousif__wasif?igsh=MWhpYTR3NXRoaDdzZA==",
      label: "Instagram",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Twitter,
      url: "https://x.com/mrwasifazim?t=-qt9SNNrDnl3u-MfZE3DpA&s=09",
      label: "Twitter",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/wasif-azim-390a3434a",
      label: "LinkedIn",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Github,
      url: "https://github.com/wasifthinks",
      label: "GitHub",
      color: "from-gray-700 to-gray-900"
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current?.getBoundingClientRect() || {};
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isInView, controls, mouseX, mouseY]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-1000">
      {/* Hero Background with Your Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/70 mix-blend-multiply" />
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:<img
                      src="welcome-banner.jpg"
                      alt="Wasif",
            />
            filter: "brightness(0.8) contrast(1.1)"
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        style={{ 
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: 1000
        }}
      >
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {/* Animated Title */}
          <motion.div
            className="relative inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white"
              initial={{ opacity: 0, z: -100 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hello, I'm{" "}
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Wasif Azim
              </motion.span>
            </motion.h1>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>

          {/* Animated Subtitle */}
          <motion.div
            className="text-2xl md:text-3xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 font-semibold"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Full Stack Developer & AI/ML Enthusiast
            </motion.span>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            className="flex justify-center space-x-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                whileHover={{ scale: 1.2, rotate: 360 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 * index,
                  rotate: { duration: 0.5 }
                }}
              >
                <motion.div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-100 blur-lg transition-opacity`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <social.icon className="w-8 h-8 relative z-10 text-white transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-75"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.a
              href="#projects"
              className="relative block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-lg font-semibold overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative">View My Work</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
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
        <motion.div
          className="p-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm"
          whileHover={{ scale: 1.2 }}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
