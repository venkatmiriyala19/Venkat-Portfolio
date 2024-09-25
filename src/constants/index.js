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
  iic,
  vishnu,
  nexus,
  express,
  firebase,
  dsatracker,
  medislot,
  commUnity,
  shivam,
  streamflick,
  newssphere,
  ideasprout,
  hireahand,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Firebase",
    icon: firebase,
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
];

const experiences = [
  {
    title: "Teaching Aid",
    company_name:
      "StudyOwl in collaboration with Vishnu Institute of Technology",
    icon: vishnu,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present",
    points: [
      "Assisting peers and juniors in mastering full stack development, focusing on technologies like React.js, Node.js, and Express.",
      "Providing mentorship and guidance through coding exercises, project-based learning, and hands-on labs to solidify understanding of front-end and back-end concepts.",
      "Organizing and conducting workshops and study sessions to help students grasp full stack development concepts and best practices.",
    ],
  },

  {
    title: "Community Manager and React Developer",
    company_name: "Nexus Sparks",
    icon: nexus,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Assisting team members and community members in learning and mastering React.js through workshops, tutorials, and one-on-one mentoring.",
      "Engaging with the community to provide technical support, answer questions, and foster a positive learning environment.",
      "Providing feedback on React projects and helping others troubleshoot issues and improve their code.",
      "Organizing React learning sessions and promoting a culture of continuous learning and skill development.",
    ],
  },
  {
    title: "Student Member",
    company_name: "IIC (Institute's Innovation Council)",
    icon: iic,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and mobile applications using React Native.",
      "Collaborating with cross-functional teams, including designers and product managers, to build and enhance innovative solutions for various projects.",
      "Attending events and representing the IIC, fostering innovation and networking with industry leaders and experts.",
      "Participating in hackathons, innovation challenges, and workshops to promote creativity and technological advancements within the student community.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lead a team of four and won the special appreciation prize at Demux- a national level 24 hour hackathon conducted by BVRIT.",
    name: "Demux Hackathon",
    designation: "Sept 2024",
    company: "B V Raju Institute of Technology",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Led my team to a top 10 finish among 100+ teams at Hack-A-Tron, a 24-hour hackathon conducted by GDSC of Vishnu Institute of Technology.",
    name: "Hack-A-Tron",
    designation: "Feb 2024",
    company: "Google Developer Student Clubs",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Qualified for the SIH Internal Hackathon in both the 2023 and 2024 editions. Demonstrated consistency and problem-solving skills across competitions.",
    name: "SIH Internal Hackathon",
    designation: "2023 & 2024",
    company: "Vishnu Institute of Technology",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Led a team of four, including juniors and peers from other branches, to secure a top 5 finish in the Pivot Make-a-thon.",
    name: "Pivot (Make-a-thon)",
    designation: "July 2024",
    company: "VISWA TBI",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "Conducted a workshop -'Commit to Success:Git & GitHub' for juniors which helped them grasp the fundamentals of Git & GitHub",
    name: "Commit to Success:Git & GitHub",
    designation: "Aug 2024",
    company: "CSE Dept, VITB",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "Solved over 700 Data Structures and Algorithms (DSA) problems on GeeksForGeeks, LeetCode and Coding Ninjas.",
    name: "DSA Problems",
    designation: "2024",
    company: "GFG, Leetcode, Coding Ninjas",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "DSA Tracker",
    description:
      "Web-based platform that allows users to track their progress of DSA problems implemented with Leaderboard, AlgoVisualizer and a specialized Stats section.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: dsatracker,
    source_code_link: "https://github.com/skill2040/dsa-tracker-website",
  },
  {
    name: "Medi-Slot",
    description:
      "A Project that is further divided into 3 more applications, two being mobile applications and one web application. The core idea revolves on efficient Slot Management of OPDs and a better inventory management for Hospitals. ",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: medislot,
    source_code_link: "https://github.com/Medi-Slot",
  },
  {
    name: "commUnity",
    description:
      "A vibrant platform designed for city residents to connect, share local experiences, discover events, and engage in meaningful conversations.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "vanta",
        color: "pink-text-gradient",
      },
    ],
    image: commUnity,
    source_code_link: "https://github.com/commUnity-ExpressJs",
  },
  {
    name: "Shivam_AI",
    description:
      "A web application that is developed for students to tailorize content generation based on their personal preferences, also contains additional features like code editor, peer-to-peer communication and speech analyzer.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },
    ],
    image: shivam,
    source_code_link:
      "https://github.com/orgs/NullPointers-hackathon/repositories",
  },
  {
    name: "StreamFlick",
    description:
      "A  web application that provides comprehensive details of any TV show, including full episode guides and cast information. It also features a robust search functionality and a real-time guide to today's streaming TV shows, helping users easily find what to watch.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "TVmaze API",
        color: "pink-text-gradient",
      },
    ],
    image: streamflick,
    source_code_link: "https://github.com/venkatmiriyala19/tv-shows-expressjs",
  },
  {
    name: "NewsSphere",
    description:
      "A fully responsive website that dynamically fetches and displays the latest news articles using the GuardianAPI. The platform is optimized for seamless user experience across devices, with features like category filtering, real-time updates, and intuitive navigation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Guardian API",
        color: "pink-text-gradient",
      },
    ],
    image: newssphere,
    source_code_link: "https://github.com/venkatmiriyala19/NewsSphere",
  },
  {
    name: "IdeaSprout",
    description:
      "IdeaSprout is a platform that empowers users to share, develop, and collaborate on innovative ideas. It fosters creativity by providing tools for brainstorming, project management, and community feedback to turn ideas into reality.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: ideasprout,
    source_code_link: "https://github.com/venkatmiriyala19/ideasprout",
  },
  {
    name: "Hire-A-Hand",
    description:
      "Hire-A-Hand is a platform connecting freelancers with clients, allowing users to bid on a wide range of freelance projects. It offers a seamless experience for finding, posting, and securing freelance work across various industries.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: hireahand,
    source_code_link: "https://github.com/venkatmiriyala19/Hack-A-Tron",
  },
];

export { services, technologies, experiences, testimonials, projects };
