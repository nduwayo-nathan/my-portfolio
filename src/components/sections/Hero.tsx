import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ChevronDownIcon,
  PlayIcon,
  EnvelopeIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { ReactTyped } from "react-typed";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import profile from "../assets/images/naythan.png";
import { Linkedin, Github, Twitter, Mail, Instagram } from "lucide-react";
import my_cv from "../assets/docs/NDUWAYO_Nathana_CV.pdf";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const [showCVModal, setShowCVModal] = useState(false);

  // Entry animations
  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".hero-animate"),
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }

    if (profileRef.current) {
      gsap.fromTo(
        profileRef.current,
        { x: 100, opacity: 0, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.8,
        }
      );
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left column */}
          <div ref={heroRef} className="space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-animate"
            >
              <span className="inline-block px-4 py-2 bg-blue-600/30 backdrop-blur-sm border border-blue-500/30 rounded-lg text-blue-600 text-sm font-medium mb-9">
                {t('hero.welcome')}
              </span>
            </motion.div>

            <div className="hero-animate">
              <h1 className="text-5xl md:text-7xl font-bold text-blue-400 dark:text-white mb-6 leading-tight">
                <span className="block">{t('hero.greeting')}</span>
              </h1>
            </div>

            <div className="hero-animate">
              <div className="text-2xl md:text-4xl font-light text-blue-400 mb-8 h-16">
                <ReactTyped
                  strings={t('hero.roles', { returnObjects: true }) as string[]}
                  typeSpeed={80}
                  backSpeed={50}
                  loop
                />
              </div>
            </div>

            <div className="hero-animate">
              <p className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
                {t('hero.description')}
              </p>
            </div>

            {/* Action buttons */}
            <div className="hero-animate flex flex-col sm:flex-row gap-6 justify-center lg:justify-start w-full">
              <a href="/#portfolio" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center justify-center gap-3 px-8 py-4 border-2 border-teal-500 bg-teal-500/10 text-teal-500 rounded-full font-semibold text-lg shadow-lg hover:bg-teal-500/20 hover:shadow-xl transition-all duration-300 w-full"
                >
                  <PlayIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  {t('hero.viewWork')}
                </motion.button>
              </a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCVModal(true)}
                className="group flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-400 dark:border-white/30 text-blue-400 dark:text-white rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
              >
                <ArrowDownTrayIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {t('hero.viewCV')}
              </motion.button>
            </div>

            {/* Social links */}
            <div className="hero-animate flex items-center gap-6 pt-8 justify-center lg:justify-start">
              <span className="text-gray-400 text-sm">{t('hero.followMe')}</span>
              <div className="flex gap-4">
                {[
                  {
                    icon: <Linkedin size={20} />,
                    href: "https://www.linkedin.com/in/nduwayo-n-b333bb261",
                    label: "LinkedIn",
                  },
                  { icon: <Github size={20} />, href: "https://github.com/nduwayo-nathan", label: "GitHub" },
                  { icon: <Twitter size={20} />, href: "https://x.com/Pro_Naythan", label: "Twitter" },
                  { icon: <Mail size={20} />, href: "mailto:nduwayonath5@gmail.com", label: "Email" },
                  { icon: < Instagram size={20} />, href: "https://www.instagram.com/naythan____", label: "Instagram" },

                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                    className="w-12 h-12 text-teal-500 bg-black/20 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xl hover:bg-gray-500/20 dark:hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div ref={profileRef} className="relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-400/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white dark:bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-lg shadow-black">
                {/* Profile Image */}
                <div className="relative mb-4 ">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={profile}
                      alt="NDUWAYO Nathan - Full Stack Developer"
                      className="w-full h-80 object-cover object-center z-50 bg-black/10 dark:bg-white/20"
                    />
                    <div className="absolute inset-0" />
                  </div>

                  {/* Status Badge */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      {t('hero.availableForWork')}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold dark:text-white text-black">
                    NDUWAYO Nathan
                  </h3>
                  <p className="text-blue-400 font-medium">
                    {t('hero.fullStackDeveloper')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {t('hero.experienceYears')}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-2 pt-6 border-t border-white/20">
                  {[
                    { value: "10+", label: t('hero.projects') },
                    { value: "5+", label: t('hero.years') },
                    { value: "7+", label: t('hero.technologies') },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-blue-500 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Contact button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = '/#contact'}
                  className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-3 border-2 border-teal-500 bg-teal-500/10 text-teal-500 rounded-xl font-medium hover:bg-teal-500/20 transition-all duration-300"
                >
                  <EnvelopeIcon className="w-5 h-5" />
                  {t('hero.getInTouch')}
                </motion.button>
              </div>

              {/* Floating icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* CV Modal */}
      {showCVModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center h-screen   ">
          <div className="relative bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh]  overflow-auto">
            <button
              onClick={() => setShowCVModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="p-0">
              {/*cv download*/}
              <iframe
                src={my_cv}
                className="w-full h-[84vh] border-0"
                title="Nathan's CV"
              />
              <div className=" p-2 flex justify-center bg-slate-400">
                <a
                  href={my_cv}
                  download="Nathan-Nduwayo-CV.pdf"
                  className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  Download Full CV
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2 mt-20">
          <span className="text-black dark:text-white/70 text-sm">
            {t('hero.scrollToExplore')}
          </span>
          <ChevronDownIcon className="w-6 h-6 text-black dark:text-white/70" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
