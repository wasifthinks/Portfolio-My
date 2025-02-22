import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Arduino', 'Figma', 'DaVinci Resolve', 'Canva',
    'HTML5', 'CSS3', 'JavaScript', 'Python'
  ];

  const skillLevels = {
    'Arduino': 90,
    'Figma': 80,
    'DaVinci Resolve': 70,
    'Canva': 90,
    'HTML5': 90,
    'CSS3': 75,
    'JavaScript': 50,
    'Python': 70
  };

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">About Me</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group mx-auto lg:mx-0 w-full max-w-md"
            >
              <motion.div
                className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 blur-lg group-hover:opacity-100 transition duration-500"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="relative aspect-square rounded-[2rem] overflow-hidden transform group-hover:scale-[1.02] transition duration-500">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden">
                    <img
                      src="pixelcut-export (1).jpg"
                      alt="Wasif Azim"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
                    />
                  </div>
                </div>
                {/* Decorative Elements */}
                <motion.div
                  className="absolute -inset-1 border-2 border-blue-500/20 rounded-[2.25rem] pointer-events-none"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="prose prose-lg prose-invert">
                <p className="text-gray-300 leading-relaxed mb-6 text-base sm:text-lg">
                  I'm Wasif Azim, a passionate full-stack web developer and AI/ML enthusiast. I specialize in building responsive websites, interactive web applications, and intelligent AI-powered solutions. With skills in HTML, CSS, JavaScript, Python, AI/ML, and IoT, I love exploring new technologies and creating innovative digital experiences.
                </p>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  Currently, I'm a student at Sargachi Ramakrishna Mission High School (Class 10), where I continuously expand my knowledge in web development, AI, and data science. My journey into programming started as a curiosity and quickly turned into a passion.
                </p>
              </div>

              {/* Skills */}
              <div className="mt-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Skills</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="relative"
                    >
                      <div className="bg-gray-700 rounded-lg p-4 relative overflow-hidden group hover:bg-gray-600 transition-colors duration-300">
                        <div className="relative z-10">
                          <h4 className="font-medium text-gray-200 mb-2">{skill}</h4>
                          <div className="h-2 bg-gray-600 rounded-full">
                            <motion.div
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skillLevels[skill]}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 * index }}
                            />
                          </div>
                          <span className="text-sm text-gray-400 mt-1 block">
                            {skillLevels[skill]}%
                          </span>
                        </div>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
