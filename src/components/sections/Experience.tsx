import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Code, Award, Github } from "lucide-react";
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
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Development Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            3+ years of hands-on experience through projects, freelance work,
            and continuous learning
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-3 z-10">
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <Code className="w-3 h-3 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  } ml-16 md:ml-0`}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-4">
                      <Code className="w-5 h-5 text-blue-600" />
                      <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-6 text-gray-500 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.projects && exp.projects.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Notable Projects
                        </h4>
                        <div className="space-y-2">
                          {exp.projects.map((project, projIndex) => (
                            <div
                              key={projIndex}
                              className="flex items-center gap-3"
                            >
                              <span className="text-gray-600 dark:text-gray-300">
                                {project.name}
                              </span>
                              <div className="flex gap-2">
                                {project.github && (
                                  <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-blue-600 transition-colors"
                                  >
                                    <Github className="w-4 h-4" />
                                  </a>
                                )}
                                {/* {project.url && (
                                  <a href={project.url}  target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                                    <Link className="w-4 h-4" />
                                  </a>
                                )} */}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Image */}
                <div
                  className={`w-full md:w-6/12 ${
                    index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                  } mt-8 md:mt-0 ml-16 md:ml-0`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative overflow-hidden rounded-2xl shadow-lg"
                  >
                    <img
                      src={exp.image}
                      alt={`${exp.company} workspace`}
                      className="w-full h-84 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
