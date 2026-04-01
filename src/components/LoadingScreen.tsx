import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    t('loading.initializing'),
    t('loading.loadingPortfolio'),
    t('loading.preparingExperience'),
    t('loading.almostReady'),
  ];

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    const textTimer = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => {
      clearInterval(progressTimer);
      clearInterval(textTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-blue-900 flex items-center justify-center z-50"
      >
       
        <div className="text-center">
          {/* Animated Logo */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity },
            }}
            className="w-24 h-24 mx-auto mb-8 relative"
          >
            <div className="w-full h-full border-4 border-blue-500/30 border-t-blue-500 rounded-full"></div>
            <div className="absolute inset-2 border-4 border-purple-500/30 border-b-purple-500 rounded-full"></div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img src="/logo.svg" alt="logo" className="w-40 h-40" />
            </motion.div>
          </motion.div>
          

          {/* Brand Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-4"
          >
            NDUWAYO Nathan
          </motion.h1>

          {/* Loading Text */}
          <motion.p
            key={currentText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-blue-400 text-lg mb-8 h-6"
          >
            {loadingTexts[currentText]}
          </motion.p>

          {/* Progress Bar */}
          <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto mb-4">
            <motion.div
              className="h-full bg-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Progress Percentage */}
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-400 text-sm"
          >
            {progress}%
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
