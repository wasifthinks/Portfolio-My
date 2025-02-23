import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  github: string;
  live: string;
  tags: string[];
  features: string[];
}

const Projects = ({ isDark }: { isDark: boolean }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'AI-Powered Smart Home System',
      description: 'An innovative IoT project using Arduino and machine learning algorithms for intelligent home automation.',
      longDescription: 'A comprehensive smart home system that integrates Arduino-based hardware with machine learning algorithms to create an intelligent and automated living environment. The system learns from user behavior and automatically adjusts settings for optimal comfort and energy efficiency.',
      image: 'https://images.unsplash.com/photo-1585139786570-475036ed796a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      github: 'https://github.com/wasifthinks',
      live: 'https://your-project-url.com',
      tags: ['Arduino', 'IoT', 'Python', 'Machine Learning'],
      features: [
        'Automated temperature control',
        'Smart lighting system',
        'Security monitoring',
        'Energy usage optimization',
        'Mobile app control interface'
      ]
    },
    {
      title: 'School Management System',
      description: 'A comprehensive web application for managing school operations and student records.',
      longDescription: 'A full-featured school management system that streamlines administrative tasks, student record keeping, and academic tracking. Built with modern web technologies and designed for optimal user experience.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      github: 'https://github.com/wasifthinks',
      live: 'https://your-school-project-url.com',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      features: [
        'Student attendance tracking',
        'Grade management system',
        'Parent communication portal',
        'Curriculum planning tools',
        'Administrative dashboard'
      ]
    },
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with advanced features and seamless user experience.',
      longDescription: 'A feature-rich e-commerce platform built with the latest web technologies. Includes advanced product management, user authentication, and secure payment processing.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      github: 'https://github.com/wasifthinks',
      live: 'https://your-ecommerce-url.com',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
      features: [
        'Product catalog management',
        'User authentication',
        'Secure payment processing',
        'Order tracking system',
        'Admin dashboard'
      ]
    }
  ];

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} relative overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group perspective"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(index)}
            >
              <motion.div
                className={`relative rounded-xl overflow-hidden transform-gpu transition-all duration-500 ease-out ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } shadow-xl hover:shadow-2xl`}
                style={{
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  rotateX: hoveredIndex === index ? 5 : 0,
                  rotateY: hoveredIndex === index ? 5 : 0,
                  scale: hoveredIndex === index ? 1.02 : 1,
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={false}
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className={`absolute inset-0 ${
                    isDark ? 'bg-gradient-to-t from-gray-900 via-gray-900/40' : 'bg-gradient-to-t from-black/60 via-black/30'
                  } to-transparent`} />
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className={`text-xl font-semibold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 line-clamp-3 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2 py-1 rounded-full ${
                          isDark 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center ${
                        isDark 
                          ? 'text-gray-300 hover:text-white' 
                          : 'text-gray-600 hover:text-gray-900'
                      } transition-colors group`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5 mr-2" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center ${
                        isDark 
                          ? 'text-gray-300 hover:text-white' 
                          : 'text-gray-600 hover:text-gray-900'
                      } transition-colors group`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  </div>

                  {/* Hover Effects */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: "translateZ(20px)",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative max-w-2xl w-full ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-2xl`}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-4 right-4 ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <ArrowRight className="w-6 h-6" />
              </button>

              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />

              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {projects[selectedProject].title}
              </h3>

              <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {projects[selectedProject].longDescription}
              </p>

              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Key Features
                </h4>
                <ul className={`list-disc list-inside ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {projects[selectedProject].features.map((feature, index) => (
                    <li key={index} className="mb-2">{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4">
                <motion.a
                  href={projects[selectedProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </motion.a>
                <motion.a
                  href={projects[selectedProject].live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-gray-600 hover:to-gray-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
