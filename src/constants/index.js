import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    spotify,
    threejs,
    carshowroom,
    travelNext,
    coin,
    iconSpotify,
    carLogo,
    coinLogo,
    travelNextLogo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Data Analytics",
      icon: mobile,
    },
    {
      title: "Database Engineer",
      icon: backend,
    },
    {
      title: "Full stack developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Music Streaming",
      company_name: "Spotify Clone",
      icon: iconSpotify,
      iconBg: "#383E56",
      date: "Database",
      points: [
        'User authentication for account management.',
        'Browsing, searching, and playback of music tracks.',
        'Playlist creation, customization, and management.',
        'Responsive design for seamless mobile and desktop experience.',
        'Persistent "Now Playing" bar for track control.',
        'With special mobile interface.',
        'Stripe intergation'
      ],
    },
    {
      title: "Car Details Website",
      company_name: "Car Dekho",
      icon: carLogo,
      iconBg: "#E6DEDD",
      date: "Rapid api",
      points: [
        'Car catalog with images, specifications, and pricing.',
        'Advanced search and filtering options.',
        'Side-by-side car comparison functionality.',
        'Responsive design for seamless browsing on all devices.',
        'Dynamic loading of car details for optimal performance.',
        'User-friendly navigation and intuitive interface.',
      ],
    },
    {
      title: "Cryptocurrency details Site",
      company_name: "CoinXplorer",
      icon: coinLogo,
      iconBg: "#383E56",
      date: "Coingecko",
      points: [
        'Live cryptocurrency prices, market capitalization, and trends.',
        'Interactive charts and graphs to visualize price changes.',
        'Currency conversion tool for multiple fiat currencies.',
        'User-friendly design for easy data interpretation.',
        'Responsive layout for access on various devices.',
      ],
    },
    {
      title: "Room Booking services",
      company_name: "Travel Next",
      icon: travelNextLogo,
      iconBg: "#383E56",
      date: "Monogo db",
      points: [
        'User-friendly property search and booking system.',
        'Secure reservation booking and cancellation functionality.',
        'Interactive maps using Leaflet for property location visualization.',
        'Hosts can create and list their properties with details.',
        'Guest count, room count, and bathroom count for property listings.',
        'GitHub repository for version control and collaboration.',
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Spotify Clone",
      description:
        "Developed a Spotify clone website to exhibit web development skills. The site emulates key Spotify features while adding personal touches, demonstrating proficiency in frontend and backend development.",
      tags: [
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "Supabase",
          color: "green-text-gradient",
        },
        {
          name: "Stripe",
          color: "pink-text-gradient",
        },
      ],
      image: spotify,
      url : 'https://spotify-app-six-mu.vercel.app/',
      source_code_link: "https://github.com/devkunalgaikwad/spotify_app",
    },
    {
      name: "Cropyto Currency Site ",
      description:
        "Developed a Cryptocurrency API Website that leverages real-time cryptocurrency data to provide users with essential market insights. The site showcases skills in working with APIs, data visualization.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "coinGeco.api",
          color: "green-text-gradient",
        },
        {
          name: "Chakra ui",
          color: "pink-text-gradient",
        },
      ],
      image: coin,
      url : 'https://coinxplorer.vercel.app/',
      source_code_link: "https://github.com/devkunalgaikwad/coinxplorer",
    },
    {
      name: "Car Dekho",
      description:
        "Designed and developed a Car Details Website showcasing an array of cars. The site offers users a user-friendly interface to explore car models, view specifications, and compare features",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Rapid api",
          color: "green-text-gradient",
        },
        {
          name: "Chakra ui",
          color: "pink-text-gradient",
        },
      ],
      image: carshowroom,
      url : 'https://spotify-app-six-mu.vercel.app/',
      source_code_link: "https://github.com/devkunalgaikwad/spotify_app",
    },
    {
      name: "Travel Next",
      description:
        "Built a feature-rich Airbnb clone website that offers a seamless booking experience for travelers and property owners. This project showcases expertise in web development, user authentication, interactive maps, and payment processing.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb atlas",
          color: "green-text-gradient",
        },
        {
          name: "prisma",
          color: "pink-text-gradient",
        },
      ],
      image: travelNext,
      url : 'https://travel-next-ten.vercel.app/',
      source_code_link: "https://github.com/devkunalgaikwad/travel_next",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };