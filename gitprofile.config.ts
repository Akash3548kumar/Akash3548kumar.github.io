// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Akash3548kumar', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 10,
        exclude: {
          forks: true,
          projects: ["Akash3548kumar/Akash3548kumar.github.io","Akash3548kumar/Akash3548kumar"],
        },
      },
      manual: {
        projects: [
          'Akash3548kumar/Image-Search',
          'Akash3548kumar/Weather-Forecasting-App'
        ],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Weather Forecasting App',
          description: 'A React.js and Node.js web application for real-time weather forecasting using REST APIs and modern JavaScript. Built with a mobile-first responsive UI and clean backend integration. Keywords: web development, full-stack, JavaScript, backend, frontend, APIs.',
          imageUrl: 'https://img.freepik.com/free-vector/forecast-concept-illustration_114360-1236.jpg',
          link: 'https://github.com/Akash3548kumar/Weather-Forecasting-App',
        },
        {
          title: 'Image Search Engine',
          description: 'A powerful and fast image search engine that allows users to search for images using keywords. Built using advanced JavaScript and asynchronous API handling for rapid retrieval and display. Keywords: JavaScript, web development, image search, REST APIs, frontend, UX.',
          imageUrl: 'https://img.freepik.com/free-vector/image-search-concept-illustration_114360-5296.jpg',
          link: 'https://github.com/Akash3548kumar/Image-Search',
        }
        // Add new projects or open source contributions here if needed
      ],
    },
  },
  seo: {
    title: 'Portfolio of Akash Kumar',
    description:
      'Akash Kumar | B.Tech CSE (AI) | Web & Full-Stack Developer specializing in React.js, Node.js, and JavaScript.',
    imageURL: '',
  },
  social: {
    linkedin: 'akash-kumar-073a32238',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'akashkumarumpur@gmail.com',
  },
  resume: {
    fileUrl: '', // Replace with real resume PDF if available
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'Express',
    'Spring Boot',
    'Python',
    'Java',
    'SQL',
    'MySQL',
    'MongoDB',
    'PostgreSQL',
    'HTML5',
    'CSS3',
    'Git',
    'VS Code',
    'Postman',
    'GitHub'
  ],
  experiences: [
    {
      company: 'IdentityPro Pvt. Ltd.',
      position: 'Web Developer Intern',
      from: 'April 2024', // Add date if available
      to: 'Nov 2024',   // Add date if available
      companyLink: '', // Add company URL if available
      description:
        'Contributed to developing a Loan Management System, optimizing backend processes, and integrating APIs to improve workflow efficiency.'
    }
  ],
  certifications: [
    {
      name: 'Data Analysis with Pandas and Python',
      body: 'Infosys Springboard',
      year: '',
      link: '', // Add verifiable link if available
    },
    {
      name: 'Python Programming Fundamentals',
      body: 'Infosys Springboard',
      year: '',
      link: '',
    },
    {
      name: 'Machine Learning for All',
      body: 'Coursera',
      year: '',
      link: '',
    },
    {
      name: 'Spring Boot & React Stack',
      body: 'Infosys Springboard',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Your University/Institute Name',
      degree: 'B.Tech CSE (AI)',
      from: 'Nov 2021', // Add your start year
      to: 'May 2025',   // Add your end year (or 'Present')
    },
    // Add more educations if desired
  ],
  publications: [
    // No real publications in README, left blank (remove if not needed)
  ],
  blog: {
    source: '', // No dev/medium username found, left blank
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light','dark','cupcake','bumblebee','emerald','corporate','synthwave','retro','cyberpunk','valentine','halloween','garden','forest','aqua','lofi','pastel','fantasy','wireframe','black','luxury','dracula','cmyk','autumn','business','acid','lemonade','night','coffee','winter','dim','nord','sunset','caramellatte','abyss','silk','procyon',
    ],
  },
  footer: `Made with <a class="text-primary" href="https://github.com/Akash3548kumar/Akash3548kumar.github.io" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
