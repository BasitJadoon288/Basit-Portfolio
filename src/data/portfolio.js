export const profile = {
  name: 'Muhammad Basit Khan',
  shortName: 'Basit',
  role: 'Software Engineer',
  location: 'Karachi, Pakistan',
  email: 'engr.basit288@gmail.com',
  phone: '+92 314 2510817',
  phoneHref: '+923142510817',
  linkedin: 'https://linkedin.com/in/muhammad-basit-khan-4252b1231',
  linkedinLabel: 'muhammad-basit-khan',
  formEndpoint: 'https://formspree.io/f/xaeqpagr',
  photo: '/profile.jpg',
  cv: '/basit.pdf',
  degree: 'BS Software Engineering',
  github: 'https://github.com/BasitJadoon288',
  summary:
    'Software Engineer with hands-on experience in backend, web, and mobile development. I focus on building clean, scalable, and production-ready applications with C#, ASP.NET Core, Angular, React.js, and Flutter.',
  about: [
    "I'm a Software Engineer from Karachi with experience across the full stack: backend systems, web interfaces, and cross-platform mobile apps. I enjoy turning complex requirements into clean, maintainable code.",
    'On the backend I work with C# and ASP.NET Core using Clean Architecture and CQRS (MediatR), design well-documented RESTful APIs, and tune SQL Server performance with Dapper, indexing, and SQL Server Profiler.',
    'On the frontend and mobile side I build responsive Angular and React.js interfaces and Flutter apps, and I handle the full deployment lifecycle on IIS.',
  ],
  typedWords: [
    'scalable backends.',
    'responsive web apps.',
    'cross-platform mobile apps.',
    'clean, maintainable code.',
  ],
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  { value: 3, label: 'Companies worked with' },
  { value: 3, label: 'Major projects' },
  { value: 3, label: 'Tech stacks: Backend, Web, Mobile' },
];

export const skills = [
  {
    icon: '🎨',
    title: 'Frontend',
    items: ['React.js', 'Angular', 'Flutter', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    items: ['C#', 'ASP.NET Core', 'Dart', 'Clean Architecture', 'RESTful API Design'],
  },
  {
    icon: '🗄️',
    title: 'Database',
    items: ['SQL Server', 'MongoDB', 'MySQL', 'Entity Framework Core', 'Dapper', 'Data Base Migration', 'Query Optimization'],
  },
  {
    icon: '🛠️',
    title: 'Tools',
    items: ['IIS', 'Swagger', 'Postman', 'SQL Server Profiler', 'SQL Server Management Studio', 'Git', 'Visual Studio', 'VS Code', 'Android Studio'],
  },
];

export const experience = [
  {
    role: 'Associate Software Engineer',
    company: 'AgiloSoft Pvt Ltd.',
    period: 'Oct 2025 – Jul 2026',
    points: [
      'Architected and delivered scalable backend systems in C# and ASP.NET Core using Clean Architecture (Domain, Application, Infrastructure, Presentation) across multiple production projects.',
      'Designed, built, and documented RESTful APIs; validated endpoints via Swagger and Postman, reducing integration errors during handoff to frontend and mobile teams.',
      'Improved data access performance with Dapper and SQL Server through optimized queries and indexing strategies that measurably reduced query execution times.',
      'Built responsive React.js web interfaces and cross-platform Flutter mobile screens, integrating third-party APIs.',
      'Managed the full deployment lifecycle on IIS: application pools, production debugging, and server performance tuning.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Bosch Pharmaceutical Pvt Ltd',
    period: 'Feb 2025 – Apr 2025',
    points: [
      'Developed and maintained production-grade Flutter (Dart) mobile applications across the full feature lifecycle.',
      'Implemented Provider architecture for state management, keeping UI and business logic cleanly separated.',
      'Worked with UI/UX designers to turn Figma designs into pixel-accurate, responsive Flutter screens.',
      'Integrated RESTful APIs and third-party services for seamless frontend-to-backend data flow.',
      'Resolved performance bottlenecks through systematic debugging and profiling, improving app stability.',
    ],
  },
  {
    role: 'Software Engineering Trainee',
    company: 'iPlexSoft Software House',
    period: 'Jul 2023 – Jan 2024',
    points: [
      'Built and maintained full-stack web apps using Laravel, Bootstrap, CSS, and JavaScript.',
      'Developed and integrated RESTful APIs with third-party services.',
      'Designed and optimized MySQL schemas and queries for performance and data integrity.',
      'Tested and debugged web modules, identifying root causes for a stable user experience.',
    ],
  },
];

export const projects = [
  {
    type: 'Backend · Enterprise',
    title: 'Agha Khan University Examination Board (AKUEB)',
    description:
      'Owned the EPL (Examination Paper Layout) module end-to-end: design, development, and maintenance of backend services.',
    points: [
      'Clean Architecture backend in C# and ASP.NET Core',
      'RESTful APIs documented and validated with Swagger and Postman',
      'Dapper + SQL Server data layer; bottlenecks fixed with SQL Server Profiler and indexing',
      'Data migration scripts for dev, staging, and production with zero data loss',
      'End-to-end IIS deployment and release management',
    ],
    tech: ['C#', 'ASP.NET Core', 'Dapper', 'SQL Server', 'IIS', 'SQL Server Profiler', 'Query Optimization'],
  },
  {
    type: 'Full Stack · Company Project',
    title: 'Accounts For Me (Invoice4me)',
    description:
      'A live cross-platform invoicing and accounting application. I worked across the backend, admin portal, payment portal, and mobile app.',
    points: [
      'Angular Admin Portal for company accounts, payments, and subscriptions',
      'Angular Payment Portal so customers can pay via mobile',
      'ASP.NET Core APIs for invoice generation and financial workflows',
      'Flutter (Dart) Android app with consistent UI and smooth UX',
    ],
    tech: ['Angular', 'ASP.NET Core', 'Flutter', 'Dart', 'MongoDB', 'SQL Management Studio'],
  },
  {
    type: 'Mobile · Final Year Project',
    title: 'E-Cattle Mobile App',
    description:
      'A marketplace app connecting cattle buyers and sellers, with microfinance integration for seamless transactions and transparent trading.',
    points: [
      'Built with Flutter and Dart',
      'Microfinance integration for easier payments',
      'Efficient, transparent trading platform for the cattle market',
    ],
    tech: ['Flutter', 'Dart'],
  },
];

export const education = [
  {
    title: 'Bachelors in Software Engineering',
    place: 'Sir Syed University of Engineering & Technology',
    date: 'Nov 2024 · Karachi, Pakistan',
  },
  {
    title: 'Intermediate in Pre Engineering',
    place: 'Aisha Bawani Govt. College',
    date: 'Aug 2020 · Karachi, Pakistan',
  },
  {
    title: 'Matric in Pre Engineering',
    place: 'The Citizen Foundation School',
    date: 'Sep 2018 · Karachi, Pakistan',
  },
];

export const certifications = [
  {
    title: 'Cloud Native Computing',
    place: 'PIAIC',
    date: 'Jun 2024 · Karachi, Pakistan',
  },
  {
    title: 'Mobile Application Development',
    place: 'Innovador Solution, Aptech Metro Star Gate',
    date: 'Oct 2024 · Karachi, Pakistan',
  },
  {
    title: 'Mobile Application Development',
    place: 'NED Academy, NED University',
    date: 'Feb 2025 · Karachi, Pakistan',
  },
  {
    title: 'Multi Cloud Data Engineering',
    place: 'SMIT, Karachi',
    date: 'In Process · Karachi, Pakistan',
  },
];
