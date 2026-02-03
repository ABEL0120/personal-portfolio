import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { personalData } from "../data";
import { useLanguage } from "../context/LanguageContext";
import Section from "./Section";

const Hero = () => {
  const { language } = useLanguage();
  const t = personalData[language];

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      <div className="max-w-[900px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          className="mb-6 flex items-center gap-3"
        >
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
          </div>
          <span className="text-secondary font-mono text-sm tracking-wider uppercase">
            {t.status}
          </span>
        </motion.div>

        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            ...variants,
            visible: {
              ...variants.visible,
              transition: { delay: 0.1, duration: 0.6 },
            },
          }}
          className="text-6xl md:text-8xl font-heading font-bold leading-[1.1] mb-8 text-text-primary dark:text-white tracking-tight"
        >
          {t.name}
        </motion.h1>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            ...variants,
            visible: {
              ...variants.visible,
              transition: { delay: 0.2, duration: 0.6 },
            },
          }}
          className="text-3xl md:text-5xl font-heading font-semibold mb-8 text-text-secondary dark:text-gray-400"
        >
          {t.role}
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            ...variants,
            visible: {
              ...variants.visible,
              transition: { delay: 0.3, duration: 0.6 },
            },
          }}
          className="text-xl text-text-secondary dark:text-gray-400 max-w-[650px] mb-12 leading-relaxed"
        >
          {t.description}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            ...variants,
            visible: {
              ...variants.visible,
              transition: { delay: 0.4, duration: 0.6 },
            },
          }}
          className="flex flex-col md:flex-row gap-5"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#PersonalProjects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold text-base rounded-full transition-all shadow-primary-glow hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-1"
          >
            {language === "en" ? "View Projects" : "Ver Proyectos"}{" "}
            <ArrowRight size={20} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="/resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/50 dark:bg-white/10 border border-gray-300 dark:border-white/10 text-text-primary dark:text-white font-medium text-base rounded-full transition-colors hover:bg-white dark:hover:bg-white/20 hover:border-gray-400 dark:hover:border-white/30 hover:shadow-md"
          >
            {language === "en" ? "Download CV" : "Descargar CV"}{" "}
            <Download size={20} />
          </motion.a>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
