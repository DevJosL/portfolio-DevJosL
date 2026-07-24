export const defaultLanguage = 'es'

export const supportedLanguages = [
  {
    id: 'es',
    shortLabel: 'ES',
    label: 'Español',
  },
  {
    id: 'en',
    shortLabel: 'EN',
    label: 'English',
  },
]

export const translations = {
  es: {
    header: {
      welcome: 'Bienvenido a mi portafolio de desarrollador.',
      splashes: [
        { id: 'well-done', text: 'El trabajo bien hecho', weight: 100 },
        { id: 'kinal', text: '¡Ánimo Kinal!', weight: 100 },
        { id: 'code', text: '¡A tirar código!', weight: 100 },
        { id: 'works', text: 'Si funciona no se toca', weight: 100 },
        { id: 'hello-world', text: '¡Hola, Mundo!', weight: 100 },
        { id: 'generating', text: 'Generando proyectos...', weight: 100 },
        { id: 'dev-mode', text: 'Modo desarrollador encendido.', weight: 100 },
        { id: 'infinity', text: '¡Al infinito y más allá!', weight: 8 },
        { id: 'serious', text: '¿Por qué tan serio?', weight: 4 },
        { id: 'hakuna', text: '¡Hakuna Matata!', weight: 2 },
        { id: 'achievement', text: '¡Logro desbloqueado!', weight: 1, variant: 'special' },
      ],
    },
    footer: {
      main: 'Portfolio dev',
    },
    menu: {
      ariaLabel: 'Menú principal del portfolio',
      contact: 'Contacto',
      cv: 'CV',
      cvUnavailable: 'Agrega tu CV en portfolio.js',
      languageButtonLabel: 'Cambiar idioma',
      quickLinksLabel: 'Enlaces rápidos',
      options: [
        {
          id: 'worlds',
          label: 'Tecnologías',
          helper: 'Mundos en solitario',
        },
        {
          id: 'servers',
          label: 'Proyectos',
          helper: 'Lista de proyectos',
        },
        {
          id: 'options',
          label: 'Sobre mi',
          helper: 'Datos del jugador',
        },
      ],
    },
    screens: {
      main: {
        helper: 'Menú principal',
        title: 'Selecciona una opción',
      },
      worlds: {
        helper: 'Mundos en solitario',
        title: 'Tecnologías',
      },
      servers: {
        helper: 'Lista de proyectos',
        title: 'Proyectos',
      },
      options: {
        helper: 'Datos del jugador',
        title: 'Sobre mi',
      },
      back: 'Volver',
    },
    projects: {
      searchLabel: 'Buscar proyecto',
      searchPlaceholder: 'Buscar por nombre o tecnología...',
      listLabel: 'Lista de proyectos',
      empty: 'Ningún proyecto coincide con esa búsqueda.',
      viewAll: 'Ver perfil completo en GitHub',
      repoLabel: 'Repositorio',
      activeLabel: 'Proyecto activo',
      active: 'Activo',
      techAriaPrefix: 'Tecnologías usadas en',
      learningLabel: 'Aprendizajes',
      previewLabel: 'Vista general',
      previewAriaPrefix: 'Vista general de',
      screenshotsLabel: 'Capturas',
      items: {
        1: {
          type: 'Servicio de autenticación',
          description:
            'API de autenticación construida con .NET 8, ASP.NET Core, JWT, Entity Framework Core y PostgreSQL.',
          learning: ['Autenticacion con JWT', 'Arquitectura de servicios', 'Persistencia con PostgreSQL'],
          preview: {
            title: 'Flujo de acceso',
            lines: ['Login seguro', 'Tokens JWT', 'Usuarios y roles'],
          },
        },
        2: {
          type: 'Gestión de proyectos',
          description:
            'Sistema de gestion y manejo de tareas desarrollado con Java, Spring Boot, JPA, Spring Security y PrimeFaces.',
          learning: ['Gestión de tareas', 'Seguridad con Spring', 'Interfaces con PrimeFaces'],
          preview: {
            title: 'Panel de gestion',
            lines: ['Proyectos', 'Tareas', 'Usuarios'],
          },
        },
        3: {
          type: 'API de opiniones',
          description:
            'Backend para gestion de opiniones con Node.js, Express, MongoDB, JWT, Cloudinary y manejo de archivos.',
          learning: ['APIs REST', 'Subida de archivos', 'Modelado con MongoDB'],
          preview: {
            title: 'Moderacion de opiniones',
            lines: ['Opiniones', 'Categorias', 'Archivos'],
          },
        },
        4: {
          type: 'Agenda web',
          description:
            'Aplicación web para contactos y tareas creada con JavaScript, HTML, CSS y almacenamiento local.',
          learning: ['Manejo del DOM', 'Almacenamiento local', 'Organizacion de tareas'],
          preview: {
            title: 'Vista de agenda',
            lines: ['Contactos', 'Tareas', 'Recordatorios'],
          },
          screenshots: [
            { id: 'agendaweb-1', label: 'Captura 1', src: '' },
            { id: 'agendaweb-2', label: 'Captura 2', src: '' },
          ],
        },
        5: {
          type: 'Página estática',
          description: 'Sitio web estático con páginas HTML, estilos CSS y recursos visuales.',
          learning: ['Estructura HTML', 'Estilos CSS', 'Organizacion visual'],
          preview: {
            title: 'Sitio informativo',
            lines: ['Secciones', 'Estilos', 'Recursos'],
          },
          screenshots: [
            { id: 'paginaweb-1', label: 'Captura 1', src: '' },
            { id: 'paginaweb-2', label: 'Captura 2', src: '' },
          ],
        },
      },
    },
    skills: {
      searchLabel: 'Buscar tecnología',
      searchPlaceholder: 'Buscar tecnología...',
      listLabel: 'Lista de tecnologías',
      empty: 'Ninguna tecnología coincide con esa búsqueda.',
      mode: 'Modo creativo',
      level: 'Nivel',
      levels: {
        advanced: 'Avanzado',
        intermediate: 'Intermedio',
        basic: 'Básico',
      },
    },
    about: {
      summary:
        'Soy desarrollador Full Stack con experiencia en la creación de aplicaciones web y móviles. Trabajo principalmente con JavaScript, Java, HTML y CSS, además de tecnologías como React, React Native, Node.js, Express, MongoDB, PostgreSQL, Git y Docker. También cuento con conocimientos básicos de C# y continúo aprendiendo nuevas herramientas para mejorar mis habilidades. Me considero una persona responsable, creativa y enfocada en resolver problemas mediante soluciones funcionales, organizadas y fáciles de usar.',
      clickHint: 'Clíkeame',
      personalDataLabel: 'Datos personales',
      socialProfilesLabel: 'Perfiles sociales',
      details: [
        {
          id: 'name',
          label: 'Nombre',
          value: 'Jose Lisandro Moran Mendoza',
        },
        {
          id: 'role',
          label: 'Rol',
          value: 'Full stack Developer',
        },
        {
          id: 'location',
          label: 'Ubicacion',
          value: 'Guatemala',
        },
        {
          id: 'education',
          label: 'Educación',
          value: 'Kinal desde 2022 - Informática',
        },
        {
          id: 'experience',
          label: 'Experiencia',
          value: 'Proyectos académicos y prácticas próximamente',
        },
        {
          id: 'years',
          label: 'Años desarrollando',
          value: 'Desde 2024',
        },
      ],
    },
    educationTimeline: {
      eyebrow: 'Estudios',
      title: 'Educación',
      close: 'Cerrar',
      listLabel: 'Línea del tiempo de educación',
      items: [
        {
          id: 1,
          year: '2022 - Actualidad',
          institution: 'Centro Educativo Tecnico Laboral Kinal',
          description: 'Estudios en Informática, con enfoque en desarrollo de software y tecnologías web.',
        },
      ],
    },
    experienceTimeline: {
      eyebrow: 'Experiencia',
      title: 'Experiencia y práctica',
      close: 'Cerrar',
      listLabel: 'Línea del tiempo de experiencia',
      items: [
        {
          id: 1,
          year: '2024 - Actualidad',
          institution: 'Proyectos académicos en Kinal',
          description:
            'Desarrollo de aplicaciones web, APIs y proyectos prácticos aplicando React, Java, Node.js, bases de datos y control de versiones.',
        },
        {
          id: 2,
          year: 'Próximamente',
          institution: 'Prácticas profesionales',
          description:
            'Prácticas profesionales próximamente, con inicio aproximado en un mes.',
        },
      ],
    },
    contact: {
      eyebrow: 'Datos de contacto',
      title: 'Contacto',
      close: 'Cerrar',
      emailLabel: 'Correo',
      phoneLabel: 'Teléfono',
      phoneEmpty: '55655375',
      linkedinLabel: 'LinkedIn',
      linkedinEmpty: 'Agrega tu LinkedIn en portfolio.js',
    },
  },
  en: {
    header: {
      welcome: 'Welcome to my developer portfolio.',
      splashes: [
        { id: 'well-done', text: 'A job well done', weight: 100 },
        { id: 'kinal', text: 'Keep going, Kinal!', weight: 100 },
        { id: 'code', text: 'Time to code!', weight: 100 },
        { id: 'works', text: 'If it works, do not touch it', weight: 100 },
        { id: 'hello-world', text: 'Hello, World!', weight: 100 },
        { id: 'generating', text: 'Generating projects...', weight: 100 },
        { id: 'dev-mode', text: 'Developer mode enabled.', weight: 100 },
        { id: 'infinity', text: 'To infinity and beyond!', weight: 8 },
        { id: 'serious', text: 'Why so serious?', weight: 4 },
        { id: 'hakuna', text: 'Hakuna Matata!', weight: 2 },
        { id: 'achievement', text: 'Achievement unlocked!', weight: 1, variant: 'special' },
      ],
    },
    footer: {
      main: 'Developer portfolio',
    },
    menu: {
      ariaLabel: 'Portfolio main menu',
      contact: 'Contact',
      cv: 'CV',
      cvUnavailable: 'Add your CV in portfolio.js',
      languageButtonLabel: 'Change language',
      quickLinksLabel: 'Quick links',
      options: [
        {
          id: 'worlds',
          label: 'Technologies',
          helper: 'Solo worlds',
        },
        {
          id: 'servers',
          label: 'Projects',
          helper: 'Project list',
        },
        {
          id: 'options',
          label: 'About me',
          helper: 'Player data',
        },
      ],
    },
    screens: {
      main: {
        helper: 'Main menu',
        title: 'Select an option',
      },
      worlds: {
        helper: 'Solo worlds',
        title: 'Technologies',
      },
      servers: {
        helper: 'Project list',
        title: 'Projects',
      },
      options: {
        helper: 'Player data',
        title: 'About me',
      },
      back: 'Back',
    },
    projects: {
      searchLabel: 'Search project',
      searchPlaceholder: 'Search by name or technology...',
      listLabel: 'Project list',
      empty: 'No project matches that search.',
      viewAll: 'View full GitHub profile',
      repoLabel: 'Repository',
      activeLabel: 'Active project',
      active: 'Active',
      techAriaPrefix: 'Technologies used in',
      learningLabel: 'Learnings',
      previewLabel: 'General view',
      previewAriaPrefix: 'General view of',
      screenshotsLabel: 'Screenshots',
      items: {
        1: {
          type: 'Authentication service',
          description:
            'Authentication API built with .NET 8, ASP.NET Core, JWT, Entity Framework Core, and PostgreSQL.',
          learning: ['JWT authentication', 'Service architecture', 'Persistence with PostgreSQL'],
          preview: {
            title: 'Access flow',
            lines: ['Secure login', 'JWT tokens', 'Users and roles'],
          },
        },
        2: {
          type: 'Project management',
          description:
            'Task and project management system built with Java, Spring Boot, JPA, Spring Security, and PrimeFaces.',
          learning: ['Task management', 'Spring security', 'PrimeFaces interfaces'],
          preview: {
            title: 'Management panel',
            lines: ['Projects', 'Tasks', 'Users'],
          },
        },
        3: {
          type: 'Opinions API',
          description:
            'Backend for opinion management with Node.js, Express, MongoDB, JWT, Cloudinary, and file handling.',
          learning: ['REST APIs', 'File uploads', 'MongoDB modeling'],
          preview: {
            title: 'Opinion moderation',
            lines: ['Opinions', 'Categories', 'Files'],
          },
        },
        4: {
          type: 'Web agenda',
          description:
            'Web app for contacts and tasks built with JavaScript, HTML, CSS, and local storage.',
          learning: ['DOM handling', 'Local storage', 'Task organization'],
          preview: {
            title: 'Agenda view',
            lines: ['Contacts', 'Tasks', 'Reminders'],
          },
          screenshots: [
            { id: 'agendaweb-1', label: 'Screenshot 1', src: '' },
            { id: 'agendaweb-2', label: 'Screenshot 2', src: '' },
          ],
        },
        5: {
          type: 'Static website',
          description: 'Static website with HTML pages, CSS styles, and visual assets.',
          learning: ['HTML structure', 'CSS styling', 'Visual organization'],
          preview: {
            title: 'Informational site',
            lines: ['Sections', 'Styles', 'Assets'],
          },
          screenshots: [
            { id: 'paginaweb-1', label: 'Screenshot 1', src: '' },
            { id: 'paginaweb-2', label: 'Screenshot 2', src: '' },
          ],
        },
      },
    },
    skills: {
      searchLabel: 'Search technology',
      searchPlaceholder: 'Search technology...',
      listLabel: 'Technology list',
      empty: 'No technology matches that search.',
      mode: 'Creative mode',
      level: 'Level',
      levels: {
        advanced: 'Advanced',
        intermediate: 'Intermediate',
        basic: 'Basic',
      },
    },
    about: {
      summary:
        'I am a Full Stack developer with experience creating web and mobile applications. I mainly work with JavaScript, Java, HTML, and CSS, as well as technologies such as React, React Native, Node.js, Express, MongoDB, PostgreSQL, Git, and Docker. I also have basic C# knowledge and I continue learning new tools to improve my skills. I consider myself responsible, creative, and focused on solving problems through functional, organized, and easy-to-use solutions.',
      clickHint: 'Click me',
      personalDataLabel: 'Personal data',
      socialProfilesLabel: 'Social profiles',
      details: [
        {
          id: 'name',
          label: 'Name',
          value: 'Jose Lisandro Moran Mendoza',
        },
        {
          id: 'role',
          label: 'Role',
          value: 'Full stack Developer',
        },
        {
          id: 'location',
          label: 'Location',
          value: 'Guatemala',
        },
        {
          id: 'education',
          label: 'Education',
          value: 'Kinal since 2022 - Computer Science',
        },
        {
          id: 'experience',
          label: 'Experience',
          value: 'Academic projects and internships coming soon',
        },
        {
          id: 'years',
          label: 'Years coding',
          value: 'Since 2024',
        },
      ],
    },
    educationTimeline: {
      eyebrow: 'Studies',
      title: 'Education',
      close: 'Close',
      listLabel: 'Education timeline',
      items: [
        {
          id: 1,
          year: '2022 - Present',
          institution: 'Centro Educativo Tecnico Laboral Kinal',
          description: 'Computer Science studies focused on software development and web technologies.',
        },
      ],
    },
    experienceTimeline: {
      eyebrow: 'Experience',
      title: 'Experience and Practice',
      close: 'Close',
      listLabel: 'Experience timeline',
      items: [
        {
          id: 1,
          year: '2024 - Present',
          institution: 'Academic projects at Kinal',
          description:
            'Development of web applications, APIs, and practical projects using React, Java, Node.js, databases, and version control.',
        },
        {
          id: 2,
          year: 'Coming soon',
          institution: 'Professional practice',
          description:
            'Professional internships coming soon, expected to start in about one month.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact data',
      title: 'Contact',
      close: 'Close',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      phoneEmpty: 'Add your number in portfolio.js',
      linkedinLabel: 'LinkedIn',
      linkedinEmpty: 'Add your LinkedIn in portfolio.js',
    },
  },
}
