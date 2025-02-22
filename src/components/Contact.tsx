import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Get In Touch</h2>
          <p className="text-gray-300 mb-12 text-base sm:text-lg">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
          
          <div className="flex justify-center space-x-4 sm:space-x-8 mb-12">
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center text-gray-300 hover:text-white transition-colors"
            >
              <div className="p-3 bg-gray-700 rounded-full mb-2 hover:bg-gray-600 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-sm sm:text-base">Email</span>
            </motion.a>
            
            <motion.a
              href="https://github.com/wasifthinks"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center text-gray-300 hover:text-white transition-colors"
            >
              <div className="p-3 bg-gray-700 rounded-full mb-2 hover:bg-gray-600 transition-colors">
                <Github className="w-6 h-6" />
              </div>
              <span className="text-sm sm:text-base">GitHub</span>
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/wasif-azim-390a3434a"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center text-gray-300 hover:text-white transition-colors"
            >
              <div className="p-3 bg-gray-700 rounded-full mb-2 hover:bg-gray-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-sm sm:text-base">LinkedIn</span>
            </motion.a>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto space-y-6"
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20 -z-10 blur opacity-0 transition-opacity duration-300 group-focus-within:opacity-100" />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;