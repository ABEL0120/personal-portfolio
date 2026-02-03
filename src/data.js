import {
  Code,
  Database,
  Layout,
  Server,
  Smartphone,
  Globe,
  Palette,
  Terminal,
  Cpu,
} from "lucide-react";

export const personalData = {
  en: {
    name: "User Name",
    role: "Full Stack Developer",
    description:
      "I build accessible, pixel-perfect, and performant web experiences. Focused on creating software that helps people.",
    aboutTitle: "About Me",
    aboutText1:
      "I am a dedicated developer with a passion for building digital products that look great and feel even better to use. My journey in web development started with simple static pages and has evolved into building complex, full-stack applications.",
    aboutText2:
      "I believe in clean code, user-centric design, and constant learning. When I'm not coding, you can find me exploring new technologies or contributing to open source.",
    stats: {
      exp: "Years Experience",
      projects: "Projects Completed",
      clients: "Happy Clients",
    },
    projectsTitle: "Featured Projects",
    projectsLink: "Live Demo",
    skillsTitle: "Skills & Expertise",
    contactTitle: "Get In Touch",
    contactHeading: "Let's Talk",
    contactText:
      "I'm currently available for freelance projects and full-time opportunities. If you have a project that needs some creative touch, or just want to say hi, feel free to drop a message.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
    },
    status: "Available for work",
  },
  es: {
    name: "Fernando Abel Luján Lomas",
    role: "Desarrollador Full Stack",
    description:
      "Desarrollo experiencias web accesibles, perfectas y de alto rendimiento. Enfocado en crear software que ayude a las personas.",
    aboutTitle: "Sobre Mí",
    aboutText1:
      "Soy un desarrollador dedicado con pasión por crear productos digitales que se vean bien y se sientan aún mejor al usarlos. Mi viaje en el desarrollo web comenzó con páginas estáticas simples y ha evolucionado hacia la construcción de aplicaciones complejas full-stack.",
    aboutText2:
      "Creo en el código limpio, el diseño centrado en el usuario y el aprendizaje constante. Cuando no estoy programando, puedes encontrarme explorando nuevas tecnologías o contribuyendo al código abierto.",
    stats: {
      exp: "Años de Experiencia",
      projects: "Proyectos Completados",
      clients: "Clientes Felices",
    },
    projectsTitle: "Proyectos Destacados",
    projectsLink: "Demo en Vivo",
    skillsTitle: "Habilidades y Experiencia",
    contactTitle: "Contáctame",
    contactHeading: "Hablemos",
    contactText:
      "Actualmente estoy disponible para proyectos freelance y oportunidades de tiempo completo. Si tienes un proyecto que necesita un toque creativo, o simplemente quieres saludar, no dudes en enviar un mensaje.",
    form: {
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      send: "Enviar Mensaje",
    },
    status: "Disponible para trabajar",
  },
  common: {
    email: "contact@example.com",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
};

export const navLinks = {
  en: [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
  es: [
    { name: "Proyectos", href: "#projects" },
    { name: "Habilidades", href: "#skills" },
    { name: "Sobre Mí", href: "#about" },
    { name: "Contacto", href: "#contact" },
  ],
};

export const skills = [
  {
    name: { en: "Frontend Development", es: "Desarrollo Frontend" },
    icon: Layout,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    name: { en: "Backend Development", es: "Desarrollo Backend" },
    icon: Server,
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    name: { en: "Mobile Development", es: "Desarrollo Móvil" },
    icon: Smartphone,
    items: ["React Native", "Flutter"],
  },
  {
    name: { en: "Tools & DevOps", es: "Herramientas y DevOps" },
    icon: Database,
    items: ["Git", "Docker", "AWS", "CI/CD"],
  },
];

export const projects = [
  {
    title: "E-commerce Front End",
    description: {
      en: "A comprehensive dashboard for analytics and data visualization. Built with performance in mind.",
      es: "Un panel completo para análisis y visualización de datos. Construido pensando en el rendimiento.",
    },
    tech: ["React", "JavaScript", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/ABEL0120/ecommerce-front.git",
  },
  {
    title: "E-commerce Back End",
    description: {
      en: "A comprehensive dashboard for analytics and data visualization. Built with performance in mind.",
      es: "Un panel completo para análisis y visualización de datos. Construido pensando en el rendimiento.",
    },
    tech: ["Node.js", "Express", "MySQL"],
    link: "#",
    github: "https://github.com/ABEL0120/ecommerce-api.git",
  },
];
