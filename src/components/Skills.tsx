import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  proficiency: number;
  icon: string;
  color: string;
}

const Skills = ({ isDark }: { isDark: boolean }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills: Skill[] = [
    { name: 'Arduino', proficiency: 90, icon: '🤖', color: 'from-teal-500 to-cyan-500' },
    { name: 'Figma', proficiency: 80, icon: '🎨', color: 'from-purple-500 to-pink-500' },
    { name: 'DaVinci Resolve', proficiency: 70, icon: '🎬', color: 'from-orange-500 to-red-500' },
    { name: 'Canva', proficiency: 90, icon: '🎯', color: 'from-blue-500 to-indigo-500' },
    { name: 'HTML5', proficiency: 90, icon: '🌐', color: 'from-orange-500 to-red-600' },
    { name: 'CSS3', proficiency: 75, icon: '🎨', color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', proficiency: 50, icon: '⚡', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Python', proficiency: 70, icon: '🐍', color: 'from-blue-500 to-green-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            className={`text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600`}
            variants={itemVariants}
          >
            Technical Proficiency
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    {skill.name}
                  </h3>
                </div>

                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${isDark ? 'text-white bg-gray-700' : 'text-gray-600 bg-gray-200'}`}>
                        Proficiency
                      </span>
                    </div>
                    <div className={`text-right ${isDark ? 'text-white' : 'text-gray-600'}`}>
                      <span className="text-xs font-semibold inline-block">
                        {skill.proficiency}%
                      </span>
                    </div>
                  </div>

                  <div className={`overflow-hidden h-2 mb-4 text-xs flex rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${skill.color}`}
                    >
                      <motion.div
                        className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/20"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;