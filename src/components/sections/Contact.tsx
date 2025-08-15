import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  };

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setErrors({});

    try {
      const { data } = await axios.post(`${API_URL}/api/contact`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      // Handle validation errors from backend
      if (data.errors) {
        setErrors(data.errors);
        return;
      }

      setIsSubmitted(true);
      resetForm();
    } catch (err: any) {
      console.error("Submission error:", err);

      if (err.response && err.response.data) {
        // If backend returned validation or error message
        const respData = err.response.data;
        if (respData.errors) {
          setErrors(respData.errors);
        } else if (respData.message) {
          setError(respData.message);
        } else {
          setError("Failed to send message. Please try again later.");
        }
      } else {
        setError("Failed to send message. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      budget: "",
      timeline: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nduwayonathan5@gmail.com",
      href: "mailto:nduwayonathan5@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+250 790 774 445",
      href: "tel:+250790774445",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kigali, Rwanda",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      label: "Availability",
      value: "All days-Saturday",
      href: "#",
      color: "from-orange-500 to-red-500",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nduwayo-n-b333bb261",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/nduwayo-nathan",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/nduwayo_nathan",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/naythan____",
      color: "hover:text-pink-600",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/250790774445",
      color: "hover:text-green-600",
    },
  ];

  const budgetOptions = [
    "Under $200",
    "$200 - $500",
    "$500 - $1,000",
    "$1,500 - $2,000",
    "$2,000+",
  ];

  const timelineOptions = [
    "ASAP",
    "1-2 weeks",
    "1 month",
    "2-3 months",
    "3+ months",
  ];

  const renderFormField = (
    name: string,
    label: string,
    type = "text",
    required = true,
    isTextarea = false
  ) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label} {required && "*"}
      </label>
      {isTextarea ? (
        <textarea
          name={name}
          value={formData[name as keyof typeof formData] as string}
          onChange={handleInputChange}
          required={required}
          rows={6}
          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border ${
            errors[name]
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-600"
          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none`}
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={formData[name as keyof typeof formData] as string}
          onChange={handleInputChange}
          required={required}
          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border ${
            errors[name]
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-600"
          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
      )}
      {errors[name] && (
        <p className="mt-1 text-sm text-red-500 dark:text-red-400">
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <section
      id="contact"
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
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and
            create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Get In Touch
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.label}
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Send Me a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thank you for reaching out. I'll get back to you within 24
                    hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {renderFormField("firstName", "First Name")}
                    {renderFormField("lastName", "Last Name")}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {renderFormField("email", "Email", "email")}
                    {renderFormField("phone", "Phone", "tel", false)}
                  </div>

                  {renderFormField("subject", "Subject")}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select budget range</option>
                        {budgetOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {renderFormField("message", "Message", "text", true, true)}

                  {error && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-500 dark:text-red-400" />
                      <p className="text-red-500 dark:text-red-400">{error}</p>
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              My Current Location
            </h3>
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.84796262847!2d30.019740000000003!3d-1.9440270000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kigali, Rwanda Location"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
