import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setErrors({});

    // Basic validation
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          budget: formData.budget,
          timeline: formData.timeline,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to send message');

      setIsSubmitted(true);
      resetForm();
    } catch (err: any) {
      setError(err.message || 'Failed to send message. Please try again later.');
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
      label: t('contact.info.email'),
      value: "nduwayonathan5@gmail.com",
      href: "mailto:nduwayonathan5@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: "+250 790 774 445",
      href: "tel:+250790774445",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: MapPin,
      label: t('contact.info.location'),
      value: "Kigali, Rwanda",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      label: t('contact.info.availability'),
      value: t('contact.info.availabilityValue'),
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
    { key: "under200", label: t('contact.form.budgetOptions.under200') },
    { key: "200to500", label: t('contact.form.budgetOptions.200to500') },
    { key: "500to1000", label: t('contact.form.budgetOptions.500to1000') },
    { key: "1500to2000", label: t('contact.form.budgetOptions.1500to2000') },
    { key: "2000plus", label: t('contact.form.budgetOptions.2000plus') },
  ];

  const timelineOptions = [
    { key: "asap", label: t('contact.form.timelineOptions.asap') },
    { key: "1to2weeks", label: t('contact.form.timelineOptions.1to2weeks') },
    { key: "1month", label: t('contact.form.timelineOptions.1month') },
    { key: "2to3months", label: t('contact.form.timelineOptions.2to3months') },
    { key: "3plusmonths", label: t('contact.form.timelineOptions.3plusmonths') },
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
          className={`w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border dark:text-white ${
            errors[name]
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-600"
          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none`}
          placeholder={t('contact.form.enterYour', { field: label.toLowerCase() })}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={formData[name as keyof typeof formData] as string}
          onChange={handleInputChange}
          required={required}
          className={`w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border ${
            errors[name]
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-600"
          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
          placeholder={t('contact.form.enterYour', { field: label.toLowerCase() })}
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
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
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
                {t('contact.getInTouch')}
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
                      className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
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
                  {t('contact.followMe')}
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
                {t('contact.sendMessage')}
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {t('contact.success.title')}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {t('contact.success.message')}
                  </p>
                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border-2 border-blue-600 bg-blue-600/10 text-blue-600 rounded-lg font-semibold hover:bg-blue-600/20 transition-all duration-300"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {renderFormField("firstName", t('contact.form.firstName'))}
                    {renderFormField("lastName", t('contact.form.lastName'))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {renderFormField("email", t('contact.form.email'), "email")}
                    {renderFormField("phone", t('contact.form.phone'), "tel", false)}
                  </div>

                  {renderFormField("subject", t('contact.form.subject'))}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className=" dark:text-white">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ">
                        {t('contact.form.budget')}
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-600 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">{t('contact.form.selectBudget')}</option>
                        {budgetOptions.map((option) => (
                          <option key={option.key} value={option.label}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contact.form.timeline')}
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:text-white dark:bg-gray-700 text-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">{t('contact.form.selectTimeline')}</option>
                        {timelineOptions.map((option) => (
                          <option key={option.key} value={option.label}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {renderFormField("message", t('contact.form.message'), "text", true, true)}

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
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 border-2 border-blue-600 bg-blue-600/10 text-blue-600 rounded-lg font-semibold hover:bg-blue-600/20 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        {t('contact.form.sending')}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t('contact.form.sendMessage')}
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
              {t('contact.location.title')}
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
