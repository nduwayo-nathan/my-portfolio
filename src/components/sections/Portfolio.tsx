import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Play, Palette, Award, X } from "lucide-react";

import Spring_MVC_Spring_Boot_and_Rest_ControllersImg from "../assets/docs/Spring_MVC_Spring_Boot_and_Rest_Controllers.png";
import Technology_for_Emergencies_T4E_ETT_EPR_Certificate_of_CompletionImg from "../assets/docs/Technology_for_Emergencies_(T4E)_ETT-EPR-Certificate_of_Completion.png";
import Technology_for_Emergencies_T4E_ETT_MGT_Certificate_of_CompletionImg from "../assets/docs/Technology_for_Emergencies_(T4E)_ETT-MGT-Certificate_of_Completion.png";
import Technology_for_Emergencies_T4E_ETT_MSS_Certificate_of_CompletionImg from "../assets/docs/Technology_for_Emergencies_(T4E)_ETT-MSS-Certificate_of_Completion.png";
import Technology_for_Emergencies_T4E_ETT_POWER_Certificate_of_CompletionImg from "../assets/docs/Technology_for_Emergencies_(T4E)_ETT-POWER-Certificate_of_Completion.png";
import Technology_for_Emergencies_T4E_Certificate_of_CompletionImg from "../assets/docs/Technology_for_Emergencies_(T4E)_T4E-Certificate_of_Completion.png";
import Developing_Back_End_Apps_with_Nodejs_and_ExpressImg from "../assets/docs/Developing_Back-End_Apps_with_Node.js_and_Express.png";
import NodeandExpressEssentials_BadgeImg from "../assets/docs/NodeandExpressEssentials_Badge20240422-37-qpkedh.png";
import climate_science_semi_finalImg from "../assets/docs/climate_science_semi_final.png";

import Spring_MVC_Spring_Boot_and_Rest_Controllers from "../assets/docs/Spring_MVC_Spring_Boot_and_Rest_Controllers.pdf";
import Technology_for_Emergencies_T4E_ETT_EPR_Certificate_of_Completion from "../assets/docs/Technology_for_Emergencies_(T4E)_ETT-EPR-Certificate_of_Completion.pdf";
import Technology_for_Emergencies_T4E_ETT_MGT_Certificate_of_Completion from "../assets/docs/Technology_for_Emergencies_(T4E)_ETT-MGT-Certificate_of_Completion.pdf";
import Technology_for_Emergencies_T4E_ETT_MSS_Certificate_of_Completion from "../assets/docs/Technology_for_Emergencies_(T4E)_ETT-MSS-Certificate_of_Completion.pdf";
import Technology_for_Emergencies_T4E_ETT_POWER_Certificate_of_Completion from "../assets/docs/Technology_for_Emergencies_(T4E)_ETT-POWER-Certificate_of_Completion.pdf";
import Technology_for_Emergencies_T4E_Certificate_of_Completion from "../assets/docs/Technology_for_Emergencies_(T4E)_T4E-Certificate_of_Completion.pdf";
import Developing_Back_End_Apps_with_Nodejs_and_Express from "../assets/docs/Developing_Back-End_Apps_with_Node.js_and_Express.pdf";
import NodeandExpressEssentials_Badge from "../assets/docs/NodeandExpressEssentials_Badge20240422-37-qpkedh.pdf";
import climate_science_semi_final from "../assets/docs/climate_science_semi_final.pdf";
import climate_science_crash_cource from "../assets/docs/climate_science_crash_cource.png";
import carplate from "../assets/images/carplate.png";
import barrier from "../assets/images/barrier.png";
import text_to_speech from "../assets/images/text_to_speech.png";
import banking_system from "../assets/images/bankingImng.png";
import pygameImg from "../assets/images/pygame.png";
import quizImg from "../assets/images/quiz.png";
import zamanImg from "../assets/images/frontendImage.png";
import chatImg from "../assets/images/chat.png";
import subscription from "../assets/images/subscribe.png";
import aimlink from "../assets/images/aimalink.png";

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(
    null
  );
  const [showCertificates, setShowCertificates] = useState(false);

  const filters = ["All", "Web App", "API", "AI, IOT, Robotics & Automation"];

  const projects = [
    {
      id: 1,
      title: "Aimalink",
      category: "Web App",
      description:
        "A user-friendly platform facilitating easy blood donation processes, built with React and Vite.",
      longDescription:
        "Aimalink is a web application designed to streamline the blood donation process, connecting donors with recipients efficiently. The platform allows users to register as donors, request blood, and track donation history. Built with React and Vite, it ensures a responsive and fast user experience. The application aims to simplify the process of blood donation, making it more accessible and organized.",
      image: `${aimlink}`,
      technologies: ["React", "Vite", "JavaScript", "CSS"],
      features: [
        "User Registration and Authentication",
        "Donor and Recipient Profiles",
        "Blood Donation Requests",
        "Donation History Tracking",
        "Responsive Design",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/nduwayo-nathan/aimalink",
      icon: Palette,
      color: "from-red-600 to-orange-600",
    },
    {
      id: 2,
      title: "Quiz App (Spring Boot Backend)",
      category: "API",
      description:
        "A backend quiz management system built with Spring Boot, providing APIs for quiz creation, participation, and scoring.",
      longDescription:
        "This project is a backend-only quiz application developed with Spring Boot. It offers RESTful API endpoints for managing quizzes, storing questions, validating answers, and tracking user scores. The application is designed for modularity and scalability, making it easy to integrate with any frontend framework or mobile app. Ideal for e-learning platforms, trivia games, and assessment tools.",
      image: `${quizImg}`,
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "PostgreSQL",
        "REST API",
        "Maven",
      ],
      features: [
        "Quiz & Question CRUD Operations",
        "Answer Submission & Scoring Logic",
        "User Score Tracking",
        "RESTful API Endpoints",
        "Database Integration with PostgreSQL",
        "Modular Architecture for Easy Integration",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/nduwayo-nathan/Quiz_App",
      icon: Palette,
      color: "from-green-700 to-blue-600",
    },
    {
      id: 3,
      title: "ZamaniVault",
      category: "Web App",
      description:
        "An immersive digital platform for preserving and exploring African history, culture, and heritage.",
      longDescription:
        "ZamaniVault is an innovative platform dedicated to preserving, exploring, and celebrating African history, culture, and heritage through immersive multimedia content. It offers an extensive library of videos, books, artifacts, and educational materials, enhanced by AI-powered recommendations and personalized learning paths. Designed to engage users through secure, interactive, and culturally rich experiences.",
      image: `${zamanImg}`,
      technologies: ["React", "Python", "Django", "PostgreSQL", "AI/ML", "AWS"],
      features: [
        "Extensive Multimedia Content Library",
        "Advanced Search & Filtering",
        "AI-Powered Content Recommendations",
        "Secure Authentication",
        "Personalized User Profiles",
        "Flexible Subscription Models",
        "Watchlist & Favorites",
        "Personalized Learning Paths",
      ],
      liveUrl: "#",
      githubUrl: "#",
      icon: Palette,
      color: "from-amber-600 to-yellow-500",
    },
    {
      id: 4,
      title: "Subscription Management (Django)",
      category: "Web App",
      description:
        "A Django-based subscription management system for handling user plans and access control.",
      longDescription:
        "A web application built with Django that allows users to manage subscription plans. It includes functionality for selecting plans, managing user access based on subscription level, and rendering plan-based content. Designed with a modular architecture for easy integration into larger systems. Ideal for SaaS platforms, content-gated websites, or membership services.",
      image: `${subscription}`,
      technologies: ["Python", "Django", "SQLite (or PostgreSQL)", "HTML"],
      features: [
        "User Subscription Plan Selection",
        "Subscription-Based Access Control",
        "Django Templating for Plan Interfaces",
        "Modular Subscription Logic",
        "Easy Integration with Other Django Apps",
      ],
      liveUrl: "#",
      githubUrl:
        "https://github.com/nduwayo-nathan/subscription-management-django",
      icon: Palette,
      color: "from-indigo-500 to-blue-500",
    },

    {
      id: 5,
      title: "Small Chat App",
      category: "Web App",
      description:
        "A lightweight real-time chat application using modern web technologies.",
      longDescription:
        "This is a simple, real-time web chat application enabling users to exchange messages instantly in chat rooms. Built using JavaScript and WebSocket technology, it features basic message broadcasting, multiple user support, and seamless real-time communication. Ideal as a foundation for learning real-time messaging and expanding into more sophisticated chat systems.",
      image: `${chatImg}`,
      technologies: ["React", "JavaScript", "WebSocket API", "HTML", "CSS"],
      features: [
        "Real-time Messaging via WebSockets",
        "Lightweight and Fast",
        "Supports Multiple Concurrent Users",
        "Minimalistic Design",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/nduwayo-nathan/small-chat-app",
      icon: Palette,
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: 6,
      title: "Banking System (Spring Boot)",
      category: "API",
      description:
        "A secure and scalable banking system backend built with Spring Boot and PostgreSQL.",
      longDescription:
        "This backend application provides core banking functionalities such as account management, transaction processing, and user authentication. Developed using Spring Boot and PostgreSQL, it ensures data integrity and security. The system is designed to handle financial operations efficiently, making it suitable for integration with frontend applications or as a standalone service in a microservices architecture.",
      image: `${banking_system}`,
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "PostgreSQL",
        "JPA",
        "Maven",
      ],
      features: [
        "User Registration and Authentication",
        "Account Creation and Management",
        "Fund Transfers and Transaction History",
        "Role-Based Access Control",
        "Secure Password Storage",
        "RESTful API Endpoints",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/nduwayo-nathan/banking_system",
      icon: Palette,
      color: "from-green-500 to-blue-500",
    },
    {
      id: 7,
      title: "Auto Parking System",
      category: "AI, IOT, Robotics & Automation",
      description:
        "Smart parking system with automatic license plate detection and vehicle entry/exit automation.",
      longDescription:
        "An intelligent IoT-based parking management system that uses AI-powered license plate recognition to automate vehicle access. Features include real-time slot availability tracking, automated gate control, secure payment integration, and detailed parking analytics. Built with computer vision and cloud integration for scalability and reliability.",
      image: `${barrier}`,
      technologies: [
        "Embedded Systems",
        "Python",
        "OpenCV",
        "YOLO",
        "FastAPI",
        "PostgreSQL",
      ],
      features: [
        "Automatic License Plate Detection",
        "Real-time Parking Slot Tracking",
        "Automated Gate Control",
        "Secure Online Payments",
        "Parking Data Analytics",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/nduwayo-nathan/auto_parking",
      icon: Palette,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 8,
      title: "KinyaVoice",
      category: "AI, IOT, Robotics & Automation",
      description:
        "An intelligent Kinyarwanda-speaking voice assistant for real-time human-computer interaction.",
      longDescription:
        "KinyaVoice is an advanced voice assistant designed to understand and speak Kinyarwanda, developed as part of the Intelligent Robotics course. It integrates cutting-edge speech recognition, contextual understanding, and natural language processing to enable seamless, real-time interactions in Kinyarwanda. Applications include education, accessibility, customer service, and home automation.",
      image: `${text_to_speech}`,
      technologies: [
        "Python",
        "TensorFlow",
        "SpeechRecognition API",
        "gTTS",
        "FastAPI",
      ],
      features: [
        "Real-time Kinyarwanda Speech Recognition",
        "Context-aware Response Generation",
        "Text-to-Speech in Kinyarwanda",
        "Multi-domain Conversation Support",
        "Integration with IoT and Automation Systems",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/nduwayo-nathan/KinyaVoice",
      icon: Palette,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 9,
      title: "YOLO Car Plate Annotations",
      category: "AI, IOT, Robotics & Automation",
      description:
        "Annotated dataset of car plates in YOLO format for training object detection models.",
      longDescription:
        "This project provides a high-quality annotated dataset for car plate detection in the YOLO (You Only Look Once) format. The labels are compatible with YOLO-based object detection models such as YOLOv3, YOLOv4, and YOLOv5, allowing developers to train models out of the box. Each annotation is optimized for accuracy, ensuring precise bounding boxes for license plates in various lighting and angle conditions. Ideal for AI-powered traffic monitoring, automated parking systems, and law enforcement applications.",
      image: `${carplate}`,
      technologies: ["YOLOv5", "OpenCV", "LabelImg", "Python"],
      features: [
        "YOLO-compatible annotation format",
        "Accurate bounding boxes for license plates",
        "Supports YOLOv3, YOLOv4, YOLOv5",
        "Optimized for various environments and angles",
        "Ready-to-use for training object detection models",
      ],
      liveUrl: "#",
      githubUrl:
        "https://github.com/nduwayo-nathan/CAR_PLATE_yolo_format_labels",
      icon: Palette,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 11,
      title: "Car Driving Game (Pygame)",
      category: "AI, IOT, Robotics & Automation",
      description:
        "A simple 2D car driving game built with Pygame, complete with obstacles and sound effects.",
      longDescription:
        "This is the first Python game I created, built using Pygame. Players navigate a car along a scrolling road, avoiding obstacles while collecting items and reacting to collisions. The game features sprite-based graphics, sound effects for collection and collisions, and basic but engaging gameplay mechanics. A fun introduction to game development using Pygame.",
      image: `${pygameImg}`,
      technologies: ["Python", "Pygame"],
      features: [
        "2D Scrolling Road",
        "Car Obstacle Avoidance",
        "Item Collection Mechanics",
        "Collision and Collect Sound Effects",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/nduwayo-nathan/pygame_car-driving",
      icon: Palette,
      color: "from-red-500 to-yellow-500",
    },
  ];

  const certificates = [
  {
    id: 1,
    title: "Developing Back-End Apps with Node.js and Express",
    issuer: "Coursera / IBM",
    date: "April 2024",
    description:
      "Completed training in designing and building scalable back-end applications using Node.js and Express, including API development and integration.",
    image: `${Developing_Back_End_Apps_with_Nodejs_and_ExpressImg}`,
    certificateFile: `${Developing_Back_End_Apps_with_Nodejs_and_Express}`,
    icon: Award,
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: 2,
    title: "Node and Express Essentials",
    issuer: "Coursera / IBM",
    date: "April 2024",
    description:
      "Learned core concepts of Node.js and Express, covering middleware, routing, and REST API creation for dynamic web applications.",
    image: `${NodeandExpressEssentials_BadgeImg}`,
    certificateFile: `${NodeandExpressEssentials_Badge}`,
    icon: Award,
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: 3,
    title: "Climate Science Crash Course",
    issuer: "ClimateScience",
    date: "March 2023",
    description:
      "Gained foundational knowledge on climate change, environmental science, and global sustainability challenges.",
    image: `${climate_science_crash_cource}`,
    certificateFile: `${climate_science_crash_cource}`,
    icon: Award,
    color: "from-emerald-500 to-green-500",
  },
  {
    id: 4,
    title: "Climate Science Olympiad – Semi Finalist",
    issuer: "ClimateScience",
    date: "August 2024",
    description:
      "Achieved Semi-Finalist status in the Climate Science Olympiad, showcasing problem-solving skills in environmental and sustainability issues.",
    image: `${climate_science_semi_finalImg}`,
    certificateFile: `${climate_science_semi_final}`,
    icon: Award,
    color: "from-emerald-500 to-green-500",
  },
  {
    id: 5,
    title: "Technology for Emergencies – ETT EPR",
    issuer: "UNICEF",
    date: "Frebruary 2024",
    description:
      "Completed the Emergency Preparedness Response (EPR) module, focusing on technology solutions for emergency situations.",
    image: `${Technology_for_Emergencies_T4E_ETT_EPR_Certificate_of_CompletionImg}`,
    certificateFile: `${Technology_for_Emergencies_T4E_ETT_EPR_Certificate_of_Completion}`,
    icon: Award,
    color: "from-sky-500 to-blue-500",
  },
  {
    id: 6,
    title: "Technology for Emergencies – ETT MGT",
    issuer: "UNICEF",
    date: "February 2024",
    description:
      "Trained in emergency management technologies, focusing on coordination and deployment during crises.",
    image: `${Technology_for_Emergencies_T4E_ETT_MGT_Certificate_of_CompletionImg}`,
    certificateFile: `${Technology_for_Emergencies_T4E_ETT_MGT_Certificate_of_Completion}`,
    icon: Award,
    color: "from-sky-500 to-blue-500",
  },
  {
    id: 7,
    title: "Technology for Emergencies – ETT MSS",
    issuer: "UNICEF",
    date: "Februal 2024",
    description:
      "Focused on mobile and satellite communication solutions for emergency and disaster response operations.",
    image: `${Technology_for_Emergencies_T4E_ETT_MSS_Certificate_of_CompletionImg}`,
    certificateFile: `${Technology_for_Emergencies_T4E_ETT_MSS_Certificate_of_Completion}`,
    icon: Award,
    color: "from-sky-500 to-blue-500",
  },
  {
    id: 8,
    title: "Technology for Emergencies – ETT Power",
    issuer: "UNICEF",
    date: "February 2024",
    description:
      "Learned about emergency power systems and technologies for humanitarian field operations.",
    image: `${Technology_for_Emergencies_T4E_ETT_POWER_Certificate_of_CompletionImg}`,
    certificateFile: `${Technology_for_Emergencies_T4E_ETT_POWER_Certificate_of_Completion}`,
    icon: Award,
    color: "from-sky-500 to-blue-500",
  },
  {
    id: 9,
    title: "Technology for Emergencies – Core Training",
    issuer: "UNICEF",
    date: "February 2024",
    description:
      "Comprehensive training on technology applications in humanitarian aid, emergency preparedness, and disaster response.",
    image: `${Technology_for_Emergencies_T4E_Certificate_of_CompletionImg}`,
    certificateFile: `${Technology_for_Emergencies_T4E_Certificate_of_Completion}`,
    icon: Award,
    color: "from-sky-500 to-blue-500",
  },
  {
    id: 10,
    title: "Spring MVC, Spring Boot, and REST Controllers",
    issuer: "Coursera / Meta",
    date: "April 2024",
    description:
      "Acquired skills in developing Spring MVC and Spring Boot applications, with a focus on building and managing RESTful APIs.",
    image: `${Spring_MVC_Spring_Boot_and_Rest_ControllersImg}`,
    certificateFile: `${Spring_MVC_Spring_Boot_and_Rest_Controllers}`,
    icon: Award,
    color: "from-purple-500 to-pink-500",
  },
];


  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and toggle buttons remain the same */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Work & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions, cutting-edge technologies, and
            professional certifications
          </p>
        </motion.div>

        {/* Toggle between Projects and Certificates */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-gray-100 dark:bg-gray-800 p-1">
            <button
              onClick={() => setShowCertificates(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                !showCertificates
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setShowCertificates(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                showCertificates
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              Certificates
            </button>
          </div>
        </div>

        {!showCertificates ? (
          <>
            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedProject(project.id)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white rounded-full text-sm font-medium`}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="absolute top-4 right-4">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-3">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.githubUrl}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer "
                onClick={() => setSelectedCertificate(certificate.id)}
              >
                <div className="relative h-48 overflow-hidden ">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent/20"></div>
                  <div className="absolute top-4 right-4">
                    <certificate.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${certificate.color} text-white rounded-full text-sm font-medium`}
                    >
                      {certificate.issuer}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {certificate.title}
                  </h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Issued: {certificate.date}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {certificate.description}
                  </p>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    Click to view
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Certificate Modal - Centered on Screen */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const certificate = certificates.find(
                    (c) => c.id === selectedCertificate
                  );
                  if (!certificate) return null;

                  return (
                    <>
                      <button
                        onClick={() => setSelectedCertificate(null)}
                        className="absolute top-4 right-4 z-10 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>

                      <div className="p-1 h-full flex flex-col ">
                        <div className="flex-grow  w-full">
                          {" "}
                          <iframe
                            src={certificate.certificateFile}
                            className="w-full h-full border-0 "
                            title={`${certificate.title} Certificate`}
                            style={{ minHeight: "686px" }}
                          >
                            <p>
                              Your browser does not support PDFs.{" "}
                              <a href={certificate.certificateFile}>
                                Download the certificate
                              </a>
                              .
                            </p>
                          </iframe>
                        </div>

                        <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {certificate.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Issued by: {certificate.issuer} | {certificate.date}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(
                    (p) => p.id === selectedProject
                  );
                  if (!project) return null;

                  return (
                    <div>
                      <div className="relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 md:h-80 object-cover"
                        />
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        >
                          ×
                        </button>
                      </div>

                      <div className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                            {project.title}
                          </h3>
                          <span
                            className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white rounded-full text-sm font-medium`}
                          >
                            {project.category}
                          </span>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {project.longDescription}
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                              Key Features
                            </h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, index) => (
                                <li
                                  key={index}
                                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                                >
                                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <a
                           target="_blank"
                           rel="noopener noreferrer"
                            href={project.githubUrl}
                            className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          >
                            <Github className="w-5 h-5" />
                            View Source Code
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
