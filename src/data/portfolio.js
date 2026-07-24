import agendaWeb1 from '../assets/imgs/agendaWeb1.jpeg'
import agendaWeb2 from '../assets/imgs/agendaWeb2.jpeg'
import paginaWeb1 from '../assets/imgs/paginaWeb1.jpeg'
import paginaWeb2 from '../assets/imgs/paginaWeb2.jpeg'

export const personalInfo = {
  name: 'DevJosL',
  role: 'Full stack Developer',
  location: 'Guatemala',
  summary:
    'Soy desarrollador Full Stack en formación, enfocado en crear aplicaciones web y móviles claras, funcionales y bien organizadas.',
  email: 'jmoran-2022388@kinal.edu.gt',
  phone: '55655375',
  linkedinUrl: 'https://www.linkedin.com/in/jose-mor%C3%A1n-980428424/',
  cvUrl: '/cv-devjosl-2026.pdf',
}

export const quickLinks = [
  {
    id: 1,
    icon: 'github-icon',
    label: 'GitHub',
    href: 'https://github.com/DevJosL',
  },
]

export const projects = [
  {
    id: 1,
    name: 'auth-service',
    repositoryUrl: 'https://github.com/DevJosL/auth-service',
    type: 'Servicio de autenticación',
    description: 'API de autenticación construida con .NET 8, JWT, Entity Framework Core y PostgreSQL.',
    technologies: ['C#', 'ASP.NET Core', '.NET 8', 'Entity Framework Core', 'PostgreSQL', 'JWT'],
    learning: ['Autenticación con JWT', 'Arquitectura de servicios', 'Persistencia con PostgreSQL'],
    preview: {
      title: 'Flujo de acceso',
      lines: ['Login seguro', 'Tokens JWT', 'Usuarios y roles'],
    },
  },
  {
    id: 2,
    name: 'flim_Gestion-Proyectos',
    repositoryUrl: 'https://github.com/DevJosL/flim_Gestion-Proyectos',
    type: 'Gestión de proyectos',
    description: 'Sistema de gestión y manejo de tareas desarrollado con Java, Spring Boot, JPA y PrimeFaces.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'PrimeFaces', 'MySQL', 'HTML'],
    learning: ['Gestión de tareas', 'Seguridad con Spring', 'Interfaces con PrimeFaces'],
    preview: {
      title: 'Panel de gestión',
      lines: ['Proyectos', 'Tareas', 'Usuarios'],
    },
  },
  {
    id: 3,
    name: 'GestorOpiniones',
    repositoryUrl: 'https://github.com/DevJosL/GestorOpiniones',
    type: 'API de opiniones',
    description: 'Backend para gestión de opiniones con Node.js, Express, MongoDB, JWT y manejo de archivos.',
    technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Cloudinary'],
    learning: ['APIs REST', 'Subida de archivos', 'Modelado con MongoDB'],
    preview: {
      title: 'Moderación de opiniones',
      lines: ['Opiniones', 'Categorías', 'Archivos'],
    },
  },
  {
    id: 4,
    name: 'agendaweb',
    repositoryUrl: 'https://github.com/DevJosL/agendaweb',
    type: 'Agenda web',
    description: 'Aplicación web para contactos y tareas creada con JavaScript, HTML, CSS y almacenamiento local.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
    learning: ['Manejo del DOM', 'Almacenamiento local', 'Organización de tareas'],
    preview: {
      title: 'Vista de agenda',
      lines: ['Contactos', 'Tareas', 'Recordatorios'],
    },
    screenshots: [
      { id: 'agendaweb-1', label: 'Captura 1', src: agendaWeb1 },
      { id: 'agendaweb-2', label: 'Captura 2', src: agendaWeb2 },
    ],
  },
  {
    id: 5,
    name: 'PaginaWeb',
    repositoryUrl: 'https://github.com/DevJosL/PaginaWeb',
    type: 'Página estática',
    description: 'Sitio web estático con páginas HTML, estilos CSS y recursos visuales.',
    technologies: ['HTML', 'CSS'],
    learning: ['Estructura HTML', 'Estilos CSS', 'Organización visual'],
    preview: {
      title: 'Sitio informativo',
      lines: ['Secciones', 'Estilos', 'Recursos'],
    },
    screenshots: [
      { id: 'paginaweb-1', label: 'Captura 1', src: paginaWeb1 },
      { id: 'paginaweb-2', label: 'Captura 2', src: paginaWeb2 },
    ],
  },
]

export const skills = [
  {
    id: 1,
    name: 'React',
    percentage: 80,
  },
  {
    id: 2,
    name: 'React Native',
    percentage: 75,
  },
  {
    id: 3,
    name: 'Bootstrap',
    percentage: 90,
  },
  {
    id: 4,
    name: 'Node.js',
    percentage: 90,
  },
  {
    id: 5,
    name: 'ASP.NET',
    percentage: 30,
  },
  {
    id: 6,
    name: 'Spring Boot',
    percentage: 80,
  },
  {
    id: 7,
    name: 'Docker',
    percentage: 70,
  },
  {
    id: 8,
    name: 'PostgreSQL',
    percentage: 80,
  },
  {
    id: 9,
    name: 'MongoDB',
    percentage: 80,
  },
  {
    id: 10,
    name: 'JavaScript',
    percentage: 90,
  },
  {
    id: 11,
    name: 'Java',
    percentage: 90,
  },
  {
    id: 12,
    name: 'C#',
    percentage: 40,
  },
  {
    id: 13,
    name: 'Git',
    percentage: 80,
  },
  {
    id: 14,
    name: 'Express',
    percentage: 70,
  },
  {
    id: 15,
    name: 'HTML',
    percentage: 90,
  },
  {
    id: 16,
    name: 'CSS',
    percentage: 90,
  },
]

export const socialLinks = [
  {
    id: 1,
    label: 'GitHub',
    href: 'https://github.com/DevJosL',
  },
]
