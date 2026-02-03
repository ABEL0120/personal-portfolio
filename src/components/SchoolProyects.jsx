import React from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { schoolProjects, personalData } from "../data";
import { useLanguage } from "../context/LanguageContext";
import Section from "./Section";

const SchoolProjects = () => {
  const { language } = useLanguage();
  const t = personalData[language];

  return (
    <Section id="schoolProjects" title={t.schoolProjectsTitle}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {schoolProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-bg-secondary rounded-2xl border border-white/5 flex flex-col h-full hover:border-secondary/50 transition-all duration-300 hover:shadow-secondary-glow"
          >
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                  <ArrowUpRight size={24} />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-text-secondary hover:text-white transition-colors"
                    title="View Code"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-text-secondary hover:text-primary transition-colors"
                    title="Live Link"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-heading font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-text-secondary text-base mb-8 flex-grow leading-relaxed">
                {project.description[language]}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-semibold rounded-md bg-secondary/5 border border-secondary/20 text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default SchoolProjects;
