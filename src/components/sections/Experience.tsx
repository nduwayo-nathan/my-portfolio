import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Calendar,
  MapPin,
  Code,
  Award,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import todoImg from "../assets/images/todo.png";
import frontendImg from "../assets/images/frontendImage.png";
import backendImg from "../assets/images/backendImg.png";
import mobileImg from "../assets/images/mobileImbg.png";
import chatImg from "../assets/images/chat.png";
import aimalinkImg from "../assets/images/aimalink.png";
import bankingImg from "../assets/images/bankingImng.png";
import insurance_img1 from "../assets/images/insurance_img1.png"
import insuramce_img2 from "../assets/images/insurance_img2.png"
import insurance_img3 from "../assets/images/insurance_img3.png"

import pmts_img1 from "../assets/images/pmts_img1.png"
import pmts_img2 from "../assets/images/pmts_img2.png"
import pmts_img3 from "../assets/images/pmts_img3.png"



const ImageSlider: React.FC<{ images: string[]; alt: string }> = ({
  images,
  alt,
}) => {
  const [current, setCurrent] = useState(0);
  const hovered = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovered.current) {
        setCurrent((prev) => (prev + 1) % images.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => {
        hovered.current = true;
      }}
      onMouseLeave={() => {
        hovered.current = false;
      }}
    >
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${alt} ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-contain bg-gray-100 dark:bg-gray-800 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Prev / Next buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + images.length) % images.length)
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-1.5 bg-white/80 dark:bg-gray-900/80 rounded-full shadow hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-4 h-4 text-gray-800 dark:text-white" />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-1.5 bg-white/80 dark:bg-gray-900/80 rounded-full shadow hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-4 h-4 text-gray-800 dark:text-white" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-blue-600 w-4" : "bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t("experience.experiences.student.title"),
      company: t("experience.experiences.student.company"),
      location: t("experience.experiences.student.location"),
      period: "2021 - 2025",
      type: t("experience.experiences.student.type"),
      description: t("experience.experiences.student.description"),
      achievements: t("experience.experiences.student.achievements", {
        returnObjects: true,
      }) as string[],
      technologies: [
        "JavaScript",
        "HTML/CSS",
        "React",
        "Nextjs",
        "TypeScript",
        "Tailwind",
        "Redux",
        "Figma",
        "Java",
        "PHP",
        "Python",
        "Data Structures",
         "React",
        "Reactnative",
        "Node.js",
        "TypeScript",
        "Next.js",
        "Springboot",
        "MongoDB",
        "PostgreSQL",
      ],
      projects: [

        {
          name: "Small chat App",
          url: "#",
          github: "https://github.com/nduwayo-nathan/small-chat-app",
        },
         {
          name: "Portfolio Website",
          url: "#",
          github: "https://github.com/nduwayo-nathan/my-portfolio",
        },
        {
          name: "Aimlink",
          url: "#",
          github: "https://github.com/nduwayo-nathan/aimalink",
        },
         {
          name: "Quiz_App",

          github: "https://github.com/nduwayo-nathan/Quiz_App",
        },
        {
          name: "Banking System",

          github: "https://github.com/nduwayo-nathan/banking_system",
        },
      ],
      image: [todoImg, frontendImg,chatImg, aimalinkImg,backendImg, bankingImg],
    },
    {
      title: t("experience.experiences.internship.title"),
      company: t("experience.experiences.internship.company"),
      location: t("experience.experiences.internship.location"),
      period: "Aug 2025 - feb 2026",
      type: t("experience.experiences.internship.type"),
      description: t("experience.experiences.internship.description"),
      achievements: t("experience.experiences.internship.achievements", {
        returnObjects: true,
      }) as string[],
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Express",
        "Tailwind",
        "JWT",
        "Docker"
      ],
      projects: [
        {
          name: "Project Management & Tracking System",
          url: "https://imishinga.environment.gov.rw"
        },
      ],
      image: [pmts_img1, pmts_img2, pmts_img3],
    },
    {
      title: t("experience.experiences.sonarwa.title"),
      company: t("experience.experiences.sonarwa.company"),
      location: t("experience.experiences.sonarwa.location"),
      period: "March 2026 - Present",
      type: t("experience.experiences.sonarwa.type"),
      description: t("experience.experiences.sonarwa.description"),
      achievements: t("experience.experiences.sonarwa.achievements", {
        returnObjects: true,
      }) as string[],
      technologies: [
        "Python",
        "SQL",
        "React",
        "Node.js",
        "PostgreSQL",
        "ETL Pipelines",
        "REST APIs",
        "TypeScript",
      ],
      projects: [
        
      ],
      image: [insuramce_img2, insuramce_img2, insurance_img3],
    },
    // {
    //   title: t("experience.experiences.frontend.title"),
    //   company: t("experience.experiences.frontend.company"),
    //   location: t("experience.experiences.frontend.location"),
    //   period: "2022 - 2023",
    //   type: t("experience.experiences.frontend.type"),
    //   description: t("experience.experiences.frontend.description"),
    //   achievements: t("experience.experiences.frontend.achievements", {
    //     returnObjects: true,
    //   }) as string[],
    //   technologies: [
    //     "React",
    //     "Nextjs",
    //     "TypeScript",
    //     "Tailwind",
    //     "Redux",
    //     "Figma",
    //   ],
    //   projects: [
    //     {
    //       name: "Portfolio Website",
    //       url: "#",
    //       github: "https://github.com/nduwayo-nathan/my-portfolio",
    //     },
    //     {
    //       name: "Aimlink",
    //       url: "#",
    //       github: "https://github.com/nduwayo-nathan/aimalink",
    //     },
    //   ],
    //   image: [frontendImg, aimalinkImg],
    // },
    // {
    //   title: t("experience.experiences.backend.title"),
    //   company: t("experience.experiences.backend.company"),
    //   location: t("experience.experiences.backend.location"),
    //   period: "2023 - 2023",
    //   type: t("experience.experiences.backend.type"),
    //   description: t("experience.experiences.backend.description"),
    //   achievements: t("experience.experiences.backend.achievements", {
    //     returnObjects: true,
    //   }) as string[],
    //   technologies: [
    //     "Node.js",
    //     "Express",
    //     "PostgreSQL",
    //     "MongoDB",
    //     "JWT",
    //     "REST",
    //     "Springboot",
    //     "FastAPI",
    //   ],
    //   projects: [
    //     {
    //       name: "Quiz_App",

    //       github: "https://github.com/nduwayo-nathan/Quiz_App",
    //     },
    //     {
    //       name: "Banking System",

    //       github: "https://github.com/nduwayo-nathan/banking_system",
    //     },
    //   ],
    //   image: [backendImg, bankingImg, quizImg],
    // },
    // {
    //   title: t("experience.experiences.fullstack.title"),
    //   company: t("experience.experiences.fullstack.company"),
    //   location: t("experience.experiences.fullstack.location"),
    //   period: "2024 - Present",
    //   type: t("experience.experiences.fullstack.type"),
    //   description: t("experience.experiences.fullstack.description"),
    //   achievements: t("experience.experiences.fullstack.achievements", {
    //     returnObjects: true,
    //   }) as string[],
    //   technologies: [
    //     "React",
    //     "Reactnative",
    //     "Node.js",
    //     "TypeScript",
    //     "Next.js",
    //     "Springboot",
    //     "MongoDB",
    //     "PostgreSQL",
    //   ],
    //   projects: [
    //     {
    //       name: "Banking System",

    //       github: "https://github.com/nduwayo-nathan/banking_system",
    //     },
    //     {
    //       name: "Aimlink",
    //       url: "#",
    //       github: "https://github.com/nduwayo-nathan/aimalink",
    //     },
    //   ],
    //   image: [mobileImg, bankingImg, aimalinkImg],
    // },
  ];

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-20 lg:py-32 pb-40 sm:pb-48 md:pb-64 lg:pb-80 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-28"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold tracking-wide uppercase">
              {t("experience.journey")}
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            {t("experience.title")}
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("experience.description")}
          </p>
        </motion.div>

        <div className="space-y-32 sm:space-y-40 md:space-y-48 lg:space-y-64 xl:space-y-80">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative"
            >
              {/* Magazine-style Layout */}
              <div
                className={`relative ${index % 2 === 0 ? "md:pr-8 lg:pr-20" : "md:pl-8 lg:pl-20"}`}
              >
                {/* Main Content Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                  className={`relative z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 ${
                    index % 2 === 0 ? "lg:mr-0" : "lg:ml-0"
                  }`}
                >
                  <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-0">
                    {/* Image Column - Larger on desktop */}
                    <div
                      className={`md:col-span-2 lg:col-span-3 relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] overflow-hidden group ${
                        index % 2 === 0 ? "" : "md:order-2 lg:order-2"
                      }`}
                    >
                      <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
                      <ImageSlider images={exp.image} alt={exp.title} />

                      {/* Floating Period Badge */}
                      <motion.div
                        initial={{ scale: 0, rotate: -10 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.4, type: "spring" }}
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-20"
                      >
                        <div className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg rounded-xl md:rounded-2xl border-2 border-blue-200 dark:border-blue-800">
                          <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            <span className="text-base font-bold text-gray-900 dark:text-white">
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Type Badge */}
                      <div className="absolute bottom-6 left-6 z-20">
                        <span className="px-6 py-3 bg-blue-600 text-white rounded-2xl text-sm font-bold uppercase tracking-widest shadow-lg backdrop-blur-sm">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`md:col-span-1 lg:col-span-2 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center ${
                        index % 2 === 0 ? "" : "md:order-1 lg:order-1"
                      }`}
                    >
                      {/* Header */}
                      <div className="mb-6">
                        <motion.h3
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-3 sm:mb-4 leading-tight"
                        >
                          {exp.title}
                        </motion.h3>

                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="flex items-center gap-3 mb-4"
                        >
                          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                            <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                            {exp.company}
                          </span>
                        </motion.div>

                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.35 }}
                          className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4"
                        >
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {exp.location}
                          </span>
                        </motion.div>

                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="text-gray-600 dark:text-gray-300 leading-relaxed"
                        >
                          {exp.description}
                        </motion.p>
                      </div>

                      {/* Technologies - Compact */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mb-6"
                      >
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies
                            .slice(0, 6)
                            .map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default"
                              >
                                {tech}
                              </span>
                            ))}
                          {exp.technologies.length > 6 && (
                            <span className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-bold">
                              +{exp.technologies.length - 6}{" "}
                              {t("experience.more")}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Details Card - Static on mobile, floating on larger screens */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className={`relative md:absolute mt-6 md:top-full md:-mt-8 lg:-mt-16 z-20 w-full md:w-[400px] lg:w-[450px] ${
                    index % 2 === 0
                      ? "md:right-0 md:-translate-x-6 lg:-translate-x-12"
                      : "md:left-0 md:translate-x-6 lg:translate-x-12"
                  }`}
                >
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl border border-blue-200/50 dark:border-blue-800/50">
                    {/* Achievements */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="w-5 h-5 text-amber-500" />
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          {t("experience.keyAchievements")}
                        </h4>
                      </div>
                      <div className="space-y-2">
                        {exp.achievements
                          .slice(0, 3)
                          .map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="flex items-start gap-3 text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 leading-snug">
                                {achievement}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* Projects */}
                    {exp.projects && exp.projects.length > 0 && (
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-sm">
                          {t("experience.notableProjects")}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.projects.map((project, projIndex) => (
                            <div
                              key={projIndex}
                              className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 group"
                            >
                              <span className="text-gray-900 dark:text-white font-medium text-sm">
                                {project.name}
                              </span>
                              <div className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                                {project.github && (
                                  <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                  >
                                    <Github className="w-3.5 h-3.5" />
                                  </a>
                                )}
                                {project.url && project.url !== "#" && (
                                  <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                  >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                  </a>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Decorative diagonal line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className={`hidden lg:block absolute top-1/2 w-32 h-0.5 bg-blue-500/30 ${
                    index % 2 === 0 ? "-right-32" : "-left-32"
                  }`}
                  style={{ transform: "translateY(-50%) rotate(-45deg)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
