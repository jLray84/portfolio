import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  brewlabs,
  tofunft,
  fanbase,
  pixudi,
  bmp,
  tomb,
  staking,
  metaseep,
  sprite,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Smart Contract Developement",
    icon: web,
  },
  {
    title: "DApp  Developement",
    icon: mobile,
  },
  {
    title: "Design Development",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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

const experiences: TExperience[] = [
  {
    title: "Frontend  Developer",
    companyName: "ZigZagExchange",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2022 - March 2024",
    points: [
      "Optimized the frontend user interface for improved UX/UI, resulting in a 80% in user engagement.",
      "Developed and deployed APIs to integrate the front-end application with back-end services.",
      "Developed frontend architecture that improved the scalability and performance of the website.",
      "Developed a secure, interactive web application with a modern frontend framework and an intuitive user interface.",
    ],
  },
  {
    title: "Frontend Developer",
    companyName: "Dataunion",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Apr 2023",
    points: [
      "Developed a custom UI library that increased developer productivity and code reuse.",
      "Developed a RESTful API that allowed for secure and efficient data transfer between the frontend and backend application with services",
      "Developed and deployed APIs to integrate the frontend application with back-end services.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack Developer",
    companyName: "Rekeepit",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2022 - Apr 2023",
    points: [
      "Developed a secure, API-driven web application wit a modern, responsive user interface.",
      "Built a RESTful API that enabled the integration of third-party services with the web application.",
      "Improved database performance by X% through query optimization and indexing",
    ],
  },
  {
    title: "Frontend Developer",
    companyName: "Ratio Finance",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Dec 2022",
    points: [
      "Prepared and presented financial reports to senior management and external stakeholders",
      "Optimized the frontend user interface for improved UX/UI, resulting in a X% increase in user engagement.",
      "Developed and deployed APIs to integrate the frontend application with back-end services.",
      "Developed frontend architecture that improved scalability and performance of the website.",
      "Developed a secure, interactive web application with modern frontend framework and an intuitive user interface.",
    ],
  },
  {
    title: "Frontend Developer",
    companyName: "Callisto Enterprise",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Jul 2022",
    points: [
      "Developed smart contracts that enabled automated execution of business processes with minimal manual intervention.",
      "Built a blockchain network that enabled secure data sharing between multiple organizations.",
      "Utilized cryptography algorithms to ensure secure authentication and authorization of users.",
    ],
  },
  {
    title: "Electron Developer",
    companyName: "MASQ",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Jun 2022",
    points: [
      "Implemented a responsive design that allowed the application to be used across multiple devices with minimal modifications.",
      "Optimized the application for performance, resulting in a 100% reduction in loading time.",
      "Implemented authentication and authorization using JWT tokens",
      "Developed a single-page web application using React, Redux and Typescript that enabled users to access the company's resources with ease",
    ],
  },
  {
    title: "Fullstack Developer",
    companyName: "Soniclean",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Apr 2021 - Jun 2022",
    points: [
      "Built a RESTful API that enabled the integration of third-party services with the web application.",
      "Improved database performance by 80% through query optimization and indexing.",
      "Developed an automated system for deploying and managing changes across multiple environments.",
    ],
  },
  {
    title: "Frontend Developer",
    companyName: "Talkdoc",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Oct 2019 - Mar 2020",
    points: [
      "Created reusable components to reduce code duplication and ease future maintenance.",
      "Implemented a responsive design that allowed the application to be used across multiple devices with minimal modifications.",
      "Utilized CSS-in-JS to style components and create a consistent UI look and feel.",
    ],
  },
  {
    title: "Frontend Developer",
    companyName: "FAST.io",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Feb 2019 - Jun 2019",
    points: [
      "Wrote unit tests for components and services to ensure code stability and reduce bugs.",
      "Leveraged the Context API to improve application state management.",
      "Employed modern Javascript features such as async / await and Promises to write code in an asynchronous manner.",
    ],
  },
  {
    title: "Frontend Developer",
    companyName: "AAVE",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Dec 2018",
    points: [
      "Prepared and presented financial reports to senior management and external stakeholders.",
      "Generated reports and provided analytics on accounts payable to senor management, resulting in improved budget forecasting.",
      "Developed a distributed computing platform that enabled users to access computing resources on the blockchain.",
      "Built a secure messaging system that enabled encrypted communication between users on the blockchain.",
    ],
  },
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "PIXUDI",
    description:
      "Pixudi is a race board game built with Avalanche blockchain. Players compete with each other to collect more treasures than others by overcoming obstacles that come their way and completing missions. Pixudi combines 2 business models: Free2Play and Play2Collect.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "ethers.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pixudi,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Fanbase",
    description:
      "Fanbase is a blockchain ecosystem for media networks and technology start-ups. Fanbase is the first blockchain ecosystem built specifically for media creators like game developer, record labels, film companies, amd news organizations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "microservice",
        color: "pink-text-gradient",
      },
      {
        name: "ethers.js",
        color: "pink-text-gradient",
      },
    ],
    image: fanbase,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Brewlabs",
    description:
      "Brewlabs is made up of core foundations powering the future vision and growth of this proejct. The business is led by professionals with significant commercial experience, who aim to create an ecosystem of cutting-edge and unique offerings that give the Brelabs token infinite growth potential.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "ethers.js",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: brewlabs,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Tofu NFT",
    description:
      "tofuNFT is designed to be easy to use, yet highly optimized for efficient trading. It is a succesor of SCV's NFT Marketplace, which started as a side proeject of SCV.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "ethers.js",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tofunft,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "BMP Token Airdrp",
    description:
      "BmpBrc is a BMP Token Airdrp (Bitcoin BRC-20) platform in Bitcoin Network. I get user's taproot address and check user is bitmap ordinal owner or not. Integrate Unisat, Leader, XVerse wallets in Frontend and used PSBT, bitcoinjs lib for deploy, mint and send BRC20 tokens to user's taproot address.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "bitcoinjs",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: bmp,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "TombStoned Lootbox(Solana)",
    description:
      "This is a Lootbox game for TombStoned. There are 4 coffins in the game. 2 for SOL, 1 for $JOINTS. And the last coffins is a free one that TombStone HighSociety holders can open once in a day. I built backend & smart contract as well as supported web3 integration to front-end.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "rust",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: tomb,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Basic NFT Stakiing(Solana)",
    description:
      "A member will have 3 options to choose from for staking: (1) stake a Baby Ape, (2) stake a Baby Tiger and (3) stake a matching pair.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "rust",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: staking,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Sprite Box",
    description:
      "Gift for pixel artists. Spritebox is a minting platform that pixel artists can send there arts every week and users can mint the seleted great arts among them.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "rust",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: sprite,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "MetaSeep Protocol",
    description:
      "A kind of NFT & ETH Raffle project. Users enter raffle and buy tickets on Etheruem network. They can get Eth or NFT for reward when they win Raffle.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: metaseep,
    sourceCodeLink: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
