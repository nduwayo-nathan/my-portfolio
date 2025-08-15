import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import verygoodprof from "../assets/images/vergood.png";
import avatar from "../assets/images/avatar.png";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Muhirwa Verygood",
      role: "Software Engineer",
      company: "",
      image: `${verygoodprof}`,
      rating: 5,
      text: "Nathan built a great website that did more than we asked for. He paid close attention to every detail and knew exactly what he was doing. Working with him was easy and everything went smoothly",
      phone: "+250795100416",
    },
    {
      name: "Fils Alliance Dieudonne",
      role: "Software Developer",
      company: "",
      image:`${avatar}`,
      rating: 4,
      text: "Working with Nathan was a game-changer for our startup. He built a scalable platform smoothly. Highly recommended!",
      phone: "+250785940012",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-teal-400 mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-500 text-lg">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-500/20 dark:bg-gray-800/50 p-8 rounded-xl border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-teal-600 dark:text-teal-400 mr-4" />
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-orange-500 dark:text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              <p className="text-black/60 dark:text-gray-300 text-lg leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-teal-500"
                />
                <div>
                  <h4 className="text-blue-900 dark:text-white font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-teal-600 dark:text-teal-400">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-800 dark:text-gray-400 text-sm">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-gray-800 border border-gray-700 rounded-full hover:border-teal-500 hover:text-teal-400 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5  text-white" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-teal-400" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-gray-800 border border-gray-700 rounded-full hover:border-teal-500 hover:text-teal-400 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
