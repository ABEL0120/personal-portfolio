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
              className="p-8 rounded-2xl bg-bg-secondary border border-white/5 hover:border-secondary transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
            >
              <div className="flex items-center gap-4 mb-6">
                {/* Icon: Cream Beige */}
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-heading font-semibold text-text-primary">
                  {skillGroup.name[language]}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-lg bg-bg border border-white/10 text-text-secondary hover:text-text-primary hover:border-secondary/50 transition-colors"
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
