import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Cloud, Star } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme }) => {
  return (
    <motion.div
      className="fixed top-6 right-24 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        onClick={toggleTheme}
        className={`relative w-20 h-10 rounded-full p-1 transition-colors duration-500 ease-in-out
          ${isDark ? 'bg-gray-800' : 'bg-blue-300'}
          transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
          shadow-lg hover:shadow-xl`}
        whileTap={{ scale: 0.95 }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-full">
          {/* Stars (Dark Mode) */}
          <motion.div
            className="absolute inset-0"
            initial={false}
            animate={isDark ? { opacity: 1 } : { opacity: 0 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0.8, 1, 0.8],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                <Star className="w-2 h-2 text-yellow-200" />
              </motion.div>
            ))}
          </motion.div>

          {/* Clouds (Light Mode) */}
          <motion.div
            className="absolute inset-0"
            initial={false}
            animate={!isDark ? { opacity: 1 } : { opacity: 0 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  x: [0, 10, 0],
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                <Cloud className="w-3 h-3 text-white" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Toggle Knob */}
        <motion.div
          className={`absolute w-8 h-8 rounded-full shadow-lg transform transition-transform duration-500
            ${isDark ? 'translate-x-10 bg-gray-700' : 'translate-x-0 bg-yellow-300'}`}
          layout
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30
          }}
        >
          {/* Sun/Moon Icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={false}
            animate={{ rotate: isDark ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {isDark ? (
              <Moon className="w-5 h-5 text-yellow-200" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-600" />
            )}
          </motion.div>
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default ThemeToggle;
