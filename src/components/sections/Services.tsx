import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Smartphone,
  Globe,
  Database,
  Palette,
  Cloud,
  Search,
  Shield,
  Zap,
  Users,
  BarChart3,
  Wrench,
} from "lucide-react";

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and best practices for optimal performance and user experience.",
      features: [
        "React/Vue.js Development",
        "Responsive Design",
        "Progressive Web Apps",
        "Performance Optimization",
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Cross-platform mobile applications that deliver native performance and seamless user experiences across iOS and Android.",
      features: [
        "React Native",
        "Flutter Development",
        "App Store Deployment",
        "Push Notifications",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Scalable server-side solutions with robust APIs, database design, and cloud infrastructure management.",
      features: [
        "RESTful APIs",
        "Database Design",
        "Authentication Systems",
        "Cloud Integration",
      ],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design approach creating intuitive interfaces that enhance user engagement and satisfaction.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Comprehensive cloud infrastructure setup, deployment automation, and scalable architecture design.",
      features: [
        "AWS/GCP Setup",
        "CI/CD Pipelines",
        "Docker Containers",
        "Monitoring & Analytics",
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Technical SEO implementation and optimization strategies to improve search engine rankings and visibility.",
      features: [
        "Technical SEO Audit",
        "Performance Optimization",
        "Schema Markup",
        "Analytics Setup",
      ],
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "Understanding your requirements, goals, and target audience to create a comprehensive project roadmap.",
      icon: Users,
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description:
        "Creating wireframes, mockups, and interactive prototypes to visualize the final product.",
      icon: Palette,
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Building the solution with clean, maintainable code and thorough testing for quality assurance.",
      icon: Code,
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "Launching your project and providing ongoing maintenance and support for optimal performance.",
      icon: Zap,
    },
  ];

  return (
    <section
      id="services"
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
            Services & Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive development services to transform your ideas into
            powerful digital solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}
                    ></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a href="#contact">
                <button
                  className={`px-6 py-2 bg-gradient-to-r ${service.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Get Quote
                </button>
              </a>
              {/* Hover Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            My Development Process
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery from
            concept to launch
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-4 right-20 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-2 border-blue-600">
                  <span className="text-blue-600 font-bold text-sm">
                    {step.step}
                  </span>
                </div>
              </div>

              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {step.title}
              </h4>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.description}
              </p>

              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-x-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together.
              Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Free Consultation */}
              <a href="#contact">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold  hover:text-white hover:bg-blue-600  transition-colors hover:border-2 hover:border-white">
                  Get Free Consultation
                </button>
              </a>

              {/* View Portfolio*/}
              <a href="#portfolio">
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Portfolio
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
