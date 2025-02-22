import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      period: "2020 - 2025 (Current)",
      title: "Secondary Education",
      institution: "Sargachi Ramakrishna Mission High School (H.S.)",
      location: "Sargachi, Murshidabad, WB, India",
      description: "I became a bit naughty but remained respectful to teachers. I matured, learned much, and am now preparing for the Madhyamik examination in Class 10."
    },
    {
      period: "2013 - 2019",
      title: "Primary Education",
      institution: "Pranab Bharati",
      location: "Beldanga, Murshidabad, WB, India",
      description: "From kindergarten through Class Four, I was a quiet, honest student. I learned many lessons and values from my beloved school and dedicated teachers, igniting a lifelong passion for learning."
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Education Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.period}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'} md:w-1/2`}
            >
              {/* Timeline Point */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-ping" />
              </div>

              <div className="relative p-6 bg-gray-900 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                  {edu.period}
                </span>
                <h3 className="text-xl font-bold mb-2 text-white">{edu.title}</h3>
                <h4 className="text-lg font-semibold mb-2 text-blue-400">{edu.institution}</h4>
                <p className="text-gray-400 mb-2">{edu.location}</p>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;