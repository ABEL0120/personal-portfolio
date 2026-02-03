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
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-bg-secondary p-8 md:p-12 rounded-3xl border border-white/5"
      >
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-heading font-bold mb-4 text-text-primary">
            {t.contactHeading}
          </h3>
          <p className="text-text-secondary text-base mb-8 leading-relaxed">
            {t.contactText}
          </p>

          <div className="flex flex-col gap-6">
            <a
              href={`mailto:${personalData.common.email}`}
              className="flex items-center gap-4 group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <Mail size={20} />
              </div>
              <span className="text-text-primary font-medium group-hover:text-secondary transition-colors">
                {personalData.common.email}
              </span>
            </a>
            <div className="flex items-center gap-4 p-4">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <MapPin size={20} />
              </div>
              <span className="text-text-primary font-medium">
                {language === "en" ? "Remote / Worldwide" : "Remoto / Mundial"}
              </span>
            </div>
          </div>
        </div>

        <form
          className="flex flex-col gap-5 bg-bg p-6 rounded-2xl border border-white/5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-text-secondary ml-1"
            >
              {t.form.name}
            </label>
            <input
              type="text"
              id="name"
              required
              className="p-3.5 bg-bg-secondary border border-white/10 rounded-xl text-text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-sans"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-text-secondary ml-1"
            >
              {t.form.email}
            </label>
            <input
              type="email"
              id="email"
              required
              className="p-3.5 bg-bg-secondary border border-white/10 rounded-xl text-text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-sans"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-text-secondary ml-1"
            >
              {t.form.message}
            </label>
            <textarea
              id="message"
              rows="4"
              required
              className="p-3.5 bg-bg-secondary border border-white/10 rounded-xl text-text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-sans resize-none"
            ></textarea>
          </div>

          {/* Submit: Bronze (Action) */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="flex items-center justify-center gap-2 w-full py-4 mt-2 bg-primary text-text-primary font-bold rounded-xl shadow-lg shadow-primary-glow hover:shadow-primary/40 transition-shadow"
          >
            {t.form.send} <ArrowRight size={18} />
          </motion.button>
        </form>
      </motion.div>
    </Section>
  );
};

export default Contact;
