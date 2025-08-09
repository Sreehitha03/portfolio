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
  mysql,
  git,
  figma,
  docker,
  meta,
  starbucks,
  franklin,
  tesla,
  shopify,
  carrent,
  tripguide,
  threejs,
  jobit,
  project1,
  project2,
  project3,
  project4,
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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Tech Explorer",
    icon: mobile,
  },
  {
    title: "AI/ML Enthusiast",
    icon: backend,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Student Intern",
    company_name: "Franklin Templeton",
    icon: franklin,
    iconBg: "#383E56",
    date: "June 2024 - July 2024",
    points: [
      "Worked on a guided mentorship project involving the development of a responsive Vulnerability Dashboard",
      "Practiced implementing secure user interfaces and backend services using React, Node.js, Express.js, JWT, OAuth, and MySQL.",
      "Collaborated with a senior engineer to learn secure architecture principles and real-world development workflows.",
      "Gained hands-on experience in secure coding practices and vulnerability management.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Vulfix - false vulnerability detection",
    description:
      "Automated a secure coding pipeline that scans for vulnerabilities with Trivy, analyzes them using the Ollama Gemma-3-1B LLM, and automatically generates pull requests with validated fixes via the Git API.",
    tags: [
      {
        name: "Trivy",
        color: "blue-text-gradient",
      },
      {
        name: "Ollama",
        color: "green-text-gradient",
      },
      {
        name: "Git Api",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "orange-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Sreehitha03/Vulfix",
  },
  {
    name: "Mental Health Chatbot",
    description:
      "Built a context-aware AI chatbot using the Gemma-2b-4bit model fine-tuned on a conversational mental health dataset. Backend via ngrok and Flask, with a React frontend.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "LLM",
        color: "pink-text-gradient",
      },

    ],
    image: project2,
    source_code_link: "https://github.com/Sreehitha03/Mental-health-chatbot",
  },
  {
    name: "Sentimental Analysis",
    description:
      "Developed a full-stack news classifier that uses a fine-tuned BART model to categorize headlines into Political, Regional, or Sports. The application features user authentication with JWT, a Node.js/Express RESTful API, and a MySQL database for user management.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Bart",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Sreehitha03/Sentiment-Analysis",
  },
  {
    name: "Chat Application",
    description:
      "Built a real-time chat application with a modern user interface. The platform supports instant messaging and user authentication, leveraging Socket.IO for real-time communication, React for a responsive frontend, and Node.js for a robust backend.",
    tags: [
    {
      "name": "React",
      "color": "blue-text-gradient"
    },
    {
      "name": "Socket.io",
      "color": "green-text-gradient"
    },
    {
      "name": "Node.js",
      "color": "pink-text-gradient"
    }
    ],
    image: project4,
    source_code_link: "https://github.com/Sreehitha03/Chat-application",
  },
];

export { services, technologies, experiences, projects };