import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { personalData } from "../data";
import Section from "./Section";

const About = () => {
  const { language } = useLanguage();
  const t = personalData[language];
  return (
    <Section id="about" title={t.aboutTitle}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-text-secondary leading-loose space-y-6"
        >
          <p className="border-l-4 border-secondary pl-6">{t.aboutText1}</p>
          <p className="pl-6">{t.aboutText2}</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
          {[
            { number: "3+", label: t.stats.exp },
            { number: "20+", label: t.stats.projects },
            { number: "10+", label: t.stats.clients },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-bg-secondary border border-white/5 relative overflow-hidden group hover:border-secondary/30 transition-colors"
            >
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-secondary blur-2xl"></div>
              </div>
              <span className="text-5xl font-heading font-bold text-text-primary block mb-2">
                {stat.number}
              </span>
              <span className="text-text-secondary text-sm uppercase tracking-wider font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
