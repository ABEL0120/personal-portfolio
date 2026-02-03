import React from "react";
import { Mail, MapPin, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { personalData } from "../data";
import { useLanguage } from "../context/LanguageContext";
import Section from "./Section";

const Contact = () => {
  const { language } = useLanguage();
  const t = personalData[language];

  return (
    <Section id="contact" title={t.contactTitle} className="pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/60 dark:bg-white/5 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl shadow-gray-200/50 dark:shadow-none"
      >
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-heading font-bold mb-4 text-text-primary dark:text-white">
            {t.contactHeading}
          </h3>
          <p className="text-text-secondary dark:text-gray-400 text-base mb-8 leading-relaxed">
            {t.contactText}
          </p>

          <div className="flex flex-col gap-6">
            <a
              href={`mailto:${personalData.common.email}`}
              className="flex items-center gap-4 group p-4 rounded-xl bg-white dark:bg-white/5 hover:shadow-md transition-all border border-transparent hover:border-gray-200 dark:hover:border-white/10"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Mail size={20} />
              </div>
              <span className="text-text-primary dark:text-white font-medium group-hover:text-primary transition-colors">
                {personalData.common.email}
              </span>
            </a>
            <div className="flex items-center gap-4 p-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MapPin size={20} />
              </div>
              <span className="text-text-primary dark:text-white font-medium">
                {language === "en" ? "Remote / Worldwide" : "Remoto / Mundial"}
              </span>
            </div>
          </div>
        </div>

        <form
          className="flex flex-col gap-5 bg-white/50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/10"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-text-secondary dark:text-gray-400 ml-1"
            >
              {t.form.name}
            </label>
            <input
              type="text"
              id="name"
              required
              className="p-3.5 bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-text-primary dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-text-secondary dark:text-gray-400 ml-1"
            >
              {t.form.email}
            </label>
            <input
              type="email"
              id="email"
              required
              className="p-3.5 bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-text-primary dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-text-secondary dark:text-gray-400 ml-1"
            >
              {t.form.message}
            </label>
            <textarea
              id="message"
              rows="4"
              required
              className="p-3.5 bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl text-text-primary dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="flex items-center justify-center gap-2 w-full py-4 mt-2 bg-primary text-text-primary dark:text-white font-bold rounded-xl shadow-lg shadow-primary-glow hover:shadow-primary/40 transition-shadow"
          >
            {t.form.send} <ArrowRight size={18} />
          </motion.button>
        </form>
      </motion.div>
    </Section>
  );
};

export default Contact;
