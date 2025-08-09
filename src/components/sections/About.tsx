import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, DevicePhoneMobileIcon, GlobeAltIcon, ServerIcon } from '@heroicons/react/24/outline';
import aboutImage from '../assets/images/aboutme.png';

const About: React.FC = () => {
  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '5+', label: 'Certifications' },
    { number: '7+', label: 'Technologies' },
  ];

  const highlights = [
    {
      icon: CodeBracketIcon,
      title: 'Frontend Development',
      description: 'Creating stunning, responsive user interfaces with React, Vue.js, and modern CSS frameworks.',
    },
    {
      icon: ServerIcon,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Python, and cloud technologies.',
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile apps with React Native and Flutter.',
    },
    {
      icon: GlobeAltIcon,
      title: 'Full Stack Solutions',
      description: 'End-to-end development from concept to deployment with modern tech stacks.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with a love for creating innovative digital solutions. 
            With expertise spanning frontend, backend, and mobile development, I bring ideas to life through clean, efficient code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={aboutImage}
                alt="Developer workspace"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years of Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Turning Ideas Into Reality
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in creating comprehensive digital solutions that combine beautiful design with powerful functionality. 
              My approach focuses on understanding client needs and delivering products that exceed expectations.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              From concept to deployment, I handle every aspect of the development process, ensuring seamless user experiences 
              and robust, scalable applications that grow with your business.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['JavaScript','Java','PHP', 'Python', 'Database', 'Frameworks','Embedded systems','Testing','DSA'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;