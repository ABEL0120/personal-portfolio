import {
  Database,
  Layout,
  Server,
  Smartphone,
  HardDrive,
  Cloud,
  Monitor,
  Cpu,
} from "lucide-react";

export const personalData = {
  en: {
    name: "Fernando Abel Lujan Lomas",
    role: "Junior Full Stack Developer",
    description:
      "I’m a junior developer starting my journey in software development, learning by building real projects and constantly improving my skills.",
    aboutTitle: "About Me",
    aboutText1:
      "I’m a junior developer who is just starting to step into the professional world of software development. I enjoy building things, understanding how they work, and learning from mistakes along the way.",
    aboutText2:
      "Most of my experience comes from academic and personal projects, where I’ve worked on both frontend and backend development. I’m motivated to keep learning, improve my code, and gain real-world experience.",
    stats: {
      exp: "Learning Experience",
      projects: "Projects Built",
    },
    personalProjectsTitle: "Personal Projects",
    schoolProjectsTitle: "Academic Projects",
    skillsTitle: "Skills I’m Learning",
    contactTitle: "Get In Touch",
    contactHeading: "Let’s Talk",
    contactText:
      "I’m looking for opportunities to learn, collaborate, and grow as a developer. If you have advice, feedback, or a project where I can contribute, feel free to reach out.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
    },
    status: "Open to opportunities",
  },
  es: {
    name: "Fernando Abel Luján Lomas",
    role: "Desarrollador Full Stack Junior",
    description:
      "Soy un desarrollador junior iniciando mi camino en el desarrollo de software, aprendiendo a través de proyectos reales y mejorando constantemente.",
    aboutTitle: "Sobre Mí",
    aboutText1:
      "Soy un desarrollador junior que está comenzando a integrarse al mundo profesional del desarrollo de software. Me gusta crear cosas, entender cómo funcionan y aprender de los errores en el proceso.",
    aboutText2:
      "Mi experiencia proviene principalmente de proyectos académicos y personales, donde he trabajado tanto en frontend como en backend. Tengo muchas ganas de seguir aprendiendo, mejorar mi código y obtener experiencia real.",
    stats: {
      exp: "Experiencia en Aprendizaje",
      projects: "Proyectos Realizados",
    },
    personalProjectsTitle: "Proyectos Personales",
    schoolProjectsTitle: "Proyectos Académicos",
    skillsTitle: "Habilidades en Desarrollo",
    contactTitle: "Contáctame",
    contactHeading: "Hablemos",
    contactText:
      "Estoy buscando oportunidades para aprender, colaborar y crecer como desarrollador. Si tienes algún consejo, retroalimentación o un proyecto donde pueda aportar, no dudes en contactarme.",
    form: {
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      send: "Enviar Mensaje",
    },
    status: "Abierto a oportunidades",
  },
  common: {
    email: "lujanlom0120@gmail.com",
    socials: {
      github: "https://github.com/ABEL0120",
      linkedin: "https://linkedin.com",
      instagram: "https://www.instagram.com/abel0120",
    },
  },
};

export const navLinks = {
  en: [
    { name: "Projects", href: "#PersonalProjects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
  es: [
    { name: "Proyectos", href: "#PersonalProjects" },
    { name: "Habilidades", href: "#skills" },
    { name: "Sobre Mí", href: "#about" },
    { name: "Contacto", href: "#contact" },
  ],
};

export const skills = [
  {
    name: { en: "Frontend Development", es: "Desarrollo Frontend" },
    icon: Layout,
    items: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Blade (Laravel)",
      "Bootstrap",
      "Ionic UI",
      "ASP.NET Web Forms",
      "Windows Forms",
      "PWA",
    ],
  },
  {
    name: { en: "Backend Development", es: "Desarrollo Backend" },
    icon: Server,
    items: [
      "Laravel (PHP)",
      "C# (.NET)",
      "JavaScript",
      "VB.NET",
      "ASP.NET",
      "Node.js",
      "Express.js",
      "RESTful APIs",
    ],
  },
  {
    name: { en: "Mobile Development", es: "Desarrollo Móvil" },
    icon: Smartphone,
    items: [
      "Ionic Framework",
      "Capacitor",
      "React Native",
      "Progressive Web Apps (PWA)",
    ],
  },
  {
    name: { en: "Databases", es: "Bases de Datos" },
    icon: HardDrive,
    items: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"],
  },
  {
    name: { en: "Cloud & Hosting", es: "Nube y Hosting" },
    icon: Cloud,
    items: [
      "DigitalOcean (Droplets)",
      "Load Balancers",
      "Vercel",
      "Firebase Cloud Messaging (FCM)",
      "Cloudflare",
    ],
  },
  {
    name: {
      en: "Server, Security & Infrastructure",
      es: "Servidores, Seguridad e Infraestructura",
    },
    icon: Monitor,
    items: [
      "Ubuntu Server",
      "Linux CLI",
      "Nginx",
      "SSH",
      "Load Balancers",
      "BD Replication",
      "HTTPS / SSL",
      "VPN",
      "Firewall Rules",
    ],
  },
  {
    name: { en: "IoT & Hardware", es: "IoT y Hardware" },
    icon: Cpu,
    items: ["Arduino", "Sensors"],
  },
  {
    name: {
      en: "Tools, DevOps & Testing",
      es: "Herramientas, DevOps y Testing",
    },
    icon: Database,
    items: ["Git", "Postman", "HttpClient (.NET)", "API Testing", "DataTables"],
  },
];

export const personalProjects = [
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

export const schoolProjects = [
  {
    title: "Milwaukee Tool Audits API",
    description: {
      en: "Robust backend infrastructure for audit management and real-time data processing, featuring a secure RESTful API.",
      es: "Infraestructura robusta de backend para la gestión de auditorías y procesamiento de datos en tiempo real, con una API RESTful segura.",
    },
    tech: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap"],
    link: "#",
    github: "https://github.com/ABEL0120/Audits-API.git",
  },
  {
    title: "Milwaukee Tool Audits PWA",
    description: {
      en: "High-performance Progressive Web App for industrial audits, featuring offline capabilities and a mobile-first interface.",
      es: "Aplicación Web Progresiva de alto rendimiento para auditorías industriales, con soporte offline e interfaz optimizada para dispositivos móviles.",
    },
    tech: ["React", "Ionic", "Capacitor", "Tailwind CSS", "JavaScript", "PWA"],
    link: "#",
    github: "https://github.com/ABEL0120/audits-app-pwa.git",
  },
  {
    title: "Security Project",
    description: {
      en: "A cloud-based security platform deployed on DigitalOcean, designed with strong emphasis on secure infrastructure, access control, and auditability. The project follows industry best practices in both application development and cloud architecture.",
      es: "Plataforma de seguridad desarrollada y desplegada sobre infraestructura cloud en DigitalOcean, diseñada bajo estrictas buenas prácticas tanto a nivel de desarrollo como de arquitectura en la nube. El proyecto incluyó la configuración segura de servidores, control de accesos, auditoría de acciones y comunicación cifrada, implementando una infraestructura escalable, robusta y orientada a la protección de la información.",
    },
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "Blade",
      "Bootstrap",
      "CSS",
      "DigitalOcean",
      "Droplets",
      "Load Balancers",
      "VPC",
      "SSH (Key-based Authentication)",
      "HTTPS / SSL",
      "VPN",
      "Cloudflare",
      "Linux (Ubuntu)",
      "Nginx",
      "Firewall Rules",
    ],
    link: "#",
    github: "https://github.com/ABEL0120/proyecto-seguridad.git",
  },
  {
    title: "Math Calculator",
    description: {
      en: "Web application designed to solve numerical methods problems using Improved Euler, Newton-Raphson, and Fourth-Order Runge-Kutta, featuring a SymPy-based engine for mathematical expression parsing.",
      es: "Aplicación web diseñada para resolver problemas de métodos numéricos mediante Euler Mejorado, Newton-Raphson y Runge-Kutta de Cuarto Orden, con un motor basado en SymPy para el procesamiento de expresiones matemáticas.",
    },
    tech: ["Python", "Flask", "HTML", "CSS", "Sympy"],
    link: "#",
    github: "https://github.com/ABEL0120/calculadora-mate2-python.git",
  },
  {
    title: "Coffee Web SEO",
    description: {
      en: "Static web application optimized for high-performance SEO and Google PageSpeed Insights metrics, achieving maximum scores in accessibility, best practices, and Core Web Vitals.",
      es: "Aplicación web estática optimizada para SEO de alto rendimiento y métricas de Google PageSpeed Insights, logrando puntajes máximos en accesibilidad, mejores prácticas y Core Web Vitals.",
    },
    tech: ["React", "Vite", "Tailwind CSS", "SEO Optimization", "PageSpeed"],
    link: "#",
    github: "https://github.com/ABEL0120/coffe-web8",
  },
];
