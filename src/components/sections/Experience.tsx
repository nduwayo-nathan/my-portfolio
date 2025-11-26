import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Code, Award, Github, ExternalLink } from "lucide-react";
import todoImg from "../assets/images/todo.png";
import frontendImg from "../assets/images/frontendImage.png";
import backendImg from "../assets/images/backendImg.png";
import mobileImg from "../assets/images/mobileImbg.png";

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Programming Student",
      company: "School & Self-taught",
      location: "School (in-person) & Remote (self-taught)",
      period: "2021 - 2022",
      type: "Learning",
      description:
        "Dedicated myn hours to learning programming fundamentals, data structures, and algorithms. Built small projects to practice new concepts.",
      achievements: [
        "Completed online courses and class cources",
        "Built 10+ small projects",
        "Learned core programming concepts",
        "Participated in coding challenges",
      ],
      technologies: [
        "JavaScript",
        "HTML/CSS",
        "Java",
        "PHP",
        "Python",
        "Data Structures",
      ],
      projects: [
        {
          name: "To-Do App",
          url: "#",
          github: "#",
        },
        {
          name: "Small chat App",
          url: "#",
          github: "https://github.com/nduwayo-nathan/small-chat-app",
        },
      ],
      image: `${todoImg}`,
    },
    {
      title: "Frontend Developer",
      company: "Personal Projects & Freelance",
      location: "Remote",
      period: "2022 - 2023",
      type: "Freelance",
      description:
        "Worked with clients to build responsive web interfaces and implement modern frontend architectures. Collaborated with designers to create pixel-perfect UIs.",
      achievements: [
        "Delivered client projects",
        "Improved page load speeds by 40%",
        "Implemented responsive designs",
        "Enhanced accessibility standards",
      ],
      technologies: [
        "React",
        "Nextjs",
        "TypeScript",
        "Tailwind",
        "Redux",
        "Figma",
      ],
      projects: [
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
      ],
      image: `${frontendImg}`,
    },
    {
      title: "Backend Developer",
      company: "Personal Projects & Freelance",
      location: "Remote",
      period: "2023 - 2023",
      type: "Freelance",
      description:
        "Developed server-side logic, database schemas, and API endpoints for various clients. Ensured high performance and responsiveness to requests.",
      achievements: [
        "Created CRUD APIs with authentication",
        "Integrated third-party APIs (payment, email)",
        "Implemented data validation and sanitization",
        "Reduced API response times by 40%",
      ],
      technologies: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "JWT",
        "REST",
        "Springboot",
        "FastAPI",
      ],
      projects: [
        {
          name: "Quiz_App",

          github: "https://github.com/nduwayo-nathan/Quiz_App",
        },
        {
          name: "Banking System",

          github: "https://github.com/nduwayo-nathan/banking_system",
        },
      ],
      image: `${backendImg}`,
    },
    {
      title: "Full Stack & Mobile Developer",
      company: "Personal Projects & Freelance",
      location: "Remote",
      period: "2024 - Present",
      type: "Self-employed",
      description:
        "Developed multiple full-stack applications and contributed to open-source projects. Gained expertise through building real-world applications and solving complex problems.",
      achievements: [
        "Built full-stack applications from scratch",
        "Implemented CI/CD pipelines for personal projects",
        "Mastered modern web development technologies",
      ],
      technologies: [
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
          name: "Banking System",

          github: "https://github.com/nduwayo-nathan/banking_system",
        },
        {
          name: "Aimlink",
          url: "#",
          github: "https://github.com/nduwayo-nathan/aimalink",
        },
      ],
      image: `${mobileImg}`,
    },
  ];

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-20 lg:py-32 pb-40 sm:pb-48 md:pb-64 lg:pb-80 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-900 relative overflow-hidden"
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
              Journey
            </span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            My Development Journey
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            3+ years of hands-on experience through projects, freelance work,
            and continuous learning
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
              <div className={`relative ${index % 2 === 0 ? 'md:pr-8 lg:pr-20' : 'md:pl-8 lg:pl-20'}`}>
                {/* Main Content Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                  className={`relative z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 ${
                    index % 2 === 0 ? 'lg:mr-0' : 'lg:ml-0'
                  }`}
                >
                  <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-0">
                    {/* Image Column - Larger on desktop */}
                    <div className={`md:col-span-2 lg:col-span-3 relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] overflow-hidden group ${
                      index % 2 === 0 ? '' : 'md:order-2 lg:order-2'
                    }`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-blue-600/10 to-purple-600/30 mix-blend-overlay z-10 group-hover:opacity-80 transition-opacity duration-500" />
                      <motion.img
                        whileHover={{ scale: 1.1, rotate: 1 }}
                        transition={{ duration: 0.6 }}
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-contain bg-gray-100 dark:bg-gray-800"
                      />
                      
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
                            <span className="text-base font-bold text-gray-900 dark:text-white">{exp.period}</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Type Badge */}
                      <div className="absolute bottom-6 left-6 z-20">
                        <span className="px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl text-sm font-bold uppercase tracking-widest shadow-lg backdrop-blur-sm">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`md:col-span-1 lg:col-span-2 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center ${
                      index % 2 === 0 ? '' : 'md:order-1 lg:order-1'
                    }`}>
                      {/* Header */}
                      <div className="mb-6">
                        <motion.h3 
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4 leading-tight"
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
                          <span className="text-sm font-medium">{exp.location}</span>
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
                          {exp.technologies.slice(0, 6).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg text-xs font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 6 && (
                            <span className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-bold">
                              +{exp.technologies.length - 6} more
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
                    index % 2 === 0 ? 'md:right-0 md:-translate-x-6 lg:-translate-x-12' : 'md:left-0 md:translate-x-6 lg:translate-x-12'
                  }`}
                >
                  <div className="bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-gray-800/90 dark:to-blue-900/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl border border-blue-200/50 dark:border-blue-800/50">
                    {/* Achievements */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="w-5 h-5 text-amber-500" />
                        <h4 className="font-bold text-gray-900 dark:text-white">Key Achievements</h4>
                      </div>
                      <div className="space-y-2">
                        {exp.achievements.slice(0, 3).map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="flex items-start gap-3 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1.5 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300 leading-snug">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    {exp.projects && exp.projects.length > 0 && (
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-sm">Notable Projects</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.projects.map((project, projIndex) => (
                            <div
                              key={projIndex}
                              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 rounded-xl border border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 group"
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
                  className={`hidden lg:block absolute top-1/2 w-32 h-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-transparent ${
                    index % 2 === 0 ? '-right-32' : '-left-32'
                  }`}
                  style={{ transform: 'translateY(-50%) rotate(-45deg)' }}
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
