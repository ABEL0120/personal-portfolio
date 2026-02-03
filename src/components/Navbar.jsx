import React, { useState, useEffect } from "react";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalData } from "../data";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full h-[5rem] z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-200/50 dark:border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-full flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-heading font-bold text-text-primary dark:text-white tracking-tight transition-colors duration-300"
        >
          {personalData[language].name}
          <span className="text-primary">.</span>
        </a>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 transition-colors"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            className="flex items-center gap-2 bg-primary/10 dark:bg-white/10 border border-primary/20 dark:border-white/10 px-3 py-1.5 rounded-full text-text-primary dark:text-white text-sm font-medium hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300"
            onClick={toggleLanguage}
          >
            <Globe size={18} />
            <span>{language === "en" ? "ES" : "EN"}</span>
          </button>
          <div
            className="text-text-primary dark:text-white cursor-pointer hover:text-secondary transition-colors"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </div>
        </div>

        <div
          className={`md:flex items-center gap-8 ${
            isOpen
              ? "fixed top-[5rem] right-0 w-full h-[calc(100vh-5rem)] bg-white/95 backdrop-blur-xl flex-col justify-center border-t border-gray-100"
              : "hidden md:flex"
          }`}
        >
          <ul
            className={`flex ${isOpen ? "flex-col gap-8 text-center" : "gap-10"}`}
          >
            {navLinks[language].map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[0.95rem] font-medium text-text-secondary dark:text-gray-400 hover:text-text-primary dark:hover:text-white hover:border-b-2 hover:border-primary transition-all duration-200"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-text-primary dark:text-white border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-text-primary dark:text-white text-sm font-medium transition-all duration-300 border border-primary/40 dark:border-primary/60 hover:bg-primary hover:text-white hover:shadow-primary-glow"
              onClick={toggleLanguage}
            >
              <Globe size={18} />
              <span>{language.toUpperCase()}</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
