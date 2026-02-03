import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import { personalData } from "../data";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const { socials } = personalData.common;

  return (
    <footer className="py-12 border-t border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/80 backdrop-blur-lg transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-left">
          <span className="text-xl font-heading font-bold text-text-primary dark:text-white tracking-tight">
            {personalData[language].name}
            <span className="text-primary">.</span>
          </span>
        </div>

        <div className="flex gap-6">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full bg-primary/5 dark:bg-white/5 flex items-center justify-center text-text-secondary dark:text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Github size={18} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full bg-primary/5 dark:bg-white/5 flex items-center justify-center text-text-secondary dark:text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={socials.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-primary/5 dark:bg-white/5 flex items-center justify-center text-text-secondary dark:text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Instagram size={18} />
          </a>
        </div>

        <p className="text-text-secondary text-sm md:text-right">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
