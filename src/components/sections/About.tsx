import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, DevicePhoneMobileIcon, GlobeAltIcon, ServerIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import aboutImage from '../assets/images/aboutme.png';

const About: React.FC = () => {
  const { t } = useTranslation();
  
  

  const highlights = [
    {
      icon: CodeBracketIcon,
      title: t('about.highlights.frontend.title'),
      description: t('about.highlights.frontend.description'),
    },
    {
      icon: ServerIcon,
      title: t('about.highlights.backend.title'),
      description: t('about.highlights.backend.description'),
    },
    {
      icon: DevicePhoneMobileIcon,
      title: t('about.highlights.mobile.title'),
      description: t('about.highlights.mobile.description'),
    },
    {
      icon: GlobeAltIcon,
      title: t('about.highlights.fullstack.title'),
      description: t('about.highlights.fullstack.description'),
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
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
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
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('about.yearsExperience')}</div>
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
              {t('about.sectionTitle')}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('about.description1')}
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('about.description2')}
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
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
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