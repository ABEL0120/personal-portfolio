import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PersonalProyects from "./components/PersonalProjects";
import SchoolProyects from "./components/SchoolProyects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="flex flex-col min-h-screen relative transition-colors duration-300">
          <Background />
          <Navbar />
          <main>
            <Hero />
            <PersonalProyects />
            <SchoolProyects />
            <Skills />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
