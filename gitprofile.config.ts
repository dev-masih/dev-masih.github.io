// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'dev-masih', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['dev-masih/defarmy', 'dev-masih/defgraph', 'dev-masih/cafebazaar-iap'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'External Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        /*{
          title: 'Filmnet.ir',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },*/
      ],
    },
  },
  seo: { title: 'Portfolio of Masih Akbari', description: 'Software Development Team Lead', imageURL: 'https://raw.githubusercontent.com/dev-masih/my-media-bin/refs/heads/master/dev-masih.github.io/avatar-circle.png' },
  social: {
    linkedin: 'masih-akbari-dev',
    //x: 'arif_szn',
    //mastodon: 'arifszn@mastodon.social',
    //researchGate: '',
    //facebook: '',
    //instagram: '',
    //reddit: '',
    //threads: '',
    //youtube: '', // example: 'pewdiepie'
    //udemy: '',
    //dribbble: '',
    //behance: '',
    //medium: 'arifszn',
    //dev: 'arifszn',
    //stackoverflow: '2514250/dev-masih', // example: '1/jeff-atwood'
    //discord: '',
    //telegram: '',
    //website: 'https://www.arifszn.com',
    //phone: '',
    email: 'akbari.masih@gmail.com',
  },
  resume: {
    fileUrl:
      'https://raw.githubusercontent.com/dev-masih/my-media-bin/refs/heads/master/dev-masih.github.io/Masih-Akbari-Resume-20251220.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Technology Leadership',
    '.NET',
    'ASP.NET',
    'C#',
    'SQL',
    'RabbitMQ',
    'Elasticsearch',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Redis',
    'MongoDB',
    'GoLang',
    'C++',
    'Lua',
    'Python',
    'KYC Verification',
    'Customer Onboarding',
    'PKCS',
  ],
  experiences: [
    {
      company: 'EghtesadNovin Bank',
      position: 'Senior Backend Developer & E-Payments',
      from: '2020',
      to: '2023',
      companyLink: 'https://enbank.ir/',
    },
    {
      company: 'Sima Co.',
      position: 'Senior Backend Developer & Expert on Digital Signature',
      from: '2018',
      to: '2020',
      companyLink: '',
    },
    {
      company: 'Amnafzar Co.',
      position: 'Junior Backend Developer & Trainee on Digital Signature',
      from: '2015',
      to: '2018',
      companyLink: 'https://amnafzar.ir',
    },
  ],
  certifications: [
    /*{
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },*/
  ],
  educations: [
    {
      institution: 'Kharazmi University',
      degree: 'M.Sc. in Artificial Intelligence',
      from: '2014',
      to: '2017',
    },
    {
      institution: 'Kharazmi University',
      degree: 'B.Sc. in Computer Engineering (Software)',
      from: '2011',
      to: '2014',
    },
  ],
  publications: [
    /*{
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },*/
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'custom', // medium | dev
    username: 'masih', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
