import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { navLinks, personalData } from "../data";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
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
          ? "bg-bg/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-full flex justify-between items-center">
        {/* Name: White text, Cream Beige accent point */}
        <a
          href="#"
          className="text-2xl font-heading font-bold text-text-primary tracking-tight"
        >
          {personalData[language].name}
          <span className="text-secondary">.</span>
        </a>

        <div className="md:hidden flex items-center gap-4">
          <button
            className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full text-text-primary text-sm font-medium hover:bg-primary hover:border-transparent transition-all duration-300"
            onClick={toggleLanguage}
          >
            <Globe size={18} />
            <span>{language === "en" ? "ES" : "EN"}</span>
          </button>
          <div
            className="text-text-primary cursor-pointer hover:text-secondary transition-colors"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </div>
        </div>

        <div
          className={`md:flex items-center gap-8 ${
            isOpen
              ? "fixed top-[5rem] right-0 w-full h-[calc(100vh-5rem)] bg-bg flex-col justify-center border-t border-border"
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
                  className="text-[0.95rem] font-medium text-text-secondary hover:text-text-primary hover:border-b-2 hover:border-primary transition-all duration-200"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Language Toggle: Bronze border/hover to denote action */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-text-primary text-sm font-medium transition-all duration-300 border border-primary/40 hover:bg-primary hover:shadow-primary-glow"
            onClick={toggleLanguage}
          >
            <Globe size={18} />
            <span>{language.toUpperCase()}</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
