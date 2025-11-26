import React from "react";
import { motion } from "framer-motion";
import { HeartIcon } from "@heroicons/react/24/solid";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/nduwayo-nathan",
      icon: <Github className="w-5 h-5 text-gray-200" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/nduwayo-n-b333bb261",
      icon: <Linkedin className="w-5 h-5 text-blue-600" />,
    },
    {
      name: "Twitter",
      href: "https://x.com/Pro_Naythan",
      icon: <Twitter className="w-5 h-5 text-sky-500" />,
    },
    {
      name: "Email",
      href: "mailto:nduwayonath5@gmail.com",
      icon: <Mail className="w-5 h-5 text-red-500" />,
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-items-center">
        <div className="grid md:grid-cols-2 place-items-center gap-8 mb-8 ">
          {/* Brand */}
          <div >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 dark:from-blue-400 to-purple-600 dark:to-purple-400 bg-clip-text text-transparent">
              NDUWAYO Nathan
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital
              experiences with modern technologies and innovative solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Get In Touch</h4>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-500" />
                nduwayonath5@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-500" />
                +250 790 774 445
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                Kigali, Rwanda
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            Made with <HeartIcon className="w-5 h-5 text-red-500" /> by NDUWAYO
            Nathan
            <span className="mx-2">•</span>© 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
