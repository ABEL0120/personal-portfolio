import React from "react";
import { motion } from "framer-motion";
import { skills, personalData } from "../data";
import { useLanguage } from "../context/LanguageContext";
import Section from "./Section";

const Skills = () => {
  const { language } = useLanguage();
  const t = personalData[language];

  return (
    <Section id="skills" title={t.skillsTitle}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup, index) => {
          const Icon = skillGroup.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-secondary transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-heading font-semibold text-text-primary dark:text-white">
                  {skillGroup.name[language]}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-text-secondary dark:text-gray-300 hover:text-white hover:bg-primary hover:border-transparent transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
