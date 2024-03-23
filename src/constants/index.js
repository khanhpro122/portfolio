import {
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
  git,
  qi,
  antsomi,
  reduxSaga,
  reactQuery,
  sass,
  nextjs,
  facebook,
  youtube,
  github,
  bookingcare,
  spotify,
  shop,
  nexle,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "SCSS",
    icon: sass,
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Redux Saga",
    icon: reduxSaga,
  },
  {
    name: "React Query",
    icon: reactQuery,
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
    name: "git",
    icon: git,
  },
];

const socials = [
  {
    name: "Facebook",
    icon: facebook,
    link: "https://www.facebook.com/profile.php?id=100029948120158",
  },
  {
    name: "Github",
    icon: github,
    link: "https://github.com/khanhpro122",
  },
  // {
  //   name: "Youtube",
  //   icon: youtube,
  //   link: "https://www.youtube.com/@laptrinhthatde",
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Qi technology",
    icon: qi,
    iconBg: "#ffffff",
    date: "June 2021 - Sep 2021",
    points: [
      "Manage departments, draw departmental diagrams in PX1",
      "Draw a chart of employee attendance, being late, taking leave,...",
    ],
    link: "https://qi.com.vn/",
  },
  {
    title: "Fullstack Developer",
    company_name: "Antsomi",
    icon: antsomi,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - July 2023",
    points: [
      "Develop view/edit mode feature  for attribute node and fix bug in JOURNEY(CDP 365).",
      "Use image-unsplash library create list image for Image block in MEDIA-TEMPLATE(CDP 365).",
      "Add block, button, custom field video for MEDIA-TEMPLATE(CDP 365).",
      "Build UI in predictive app(RFM) in CDP 365.",
      "Build Ticket app (chat app in CDP 365).",
      "Build catalogs of (admin app in CDP 365)",
    ],
    link: "https://www.antsomi.com/",
  },
  {
    title: "Fullstack Developer",
    company_name: "Nexle soft",
    icon: nexle,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - now",
    points: [
      "Project: CMS-HTQT-THACO",
      "Description:CMS-HTQT-THACO is a project used internally within the company MY THACO.As a Frontend Developer, I played a key role in the team, contributing significantly to the development of the landing page and content management system (CMS). The technology stack I utilized included NextJS, MaterialUI, ReactJS, TypeScript, Redux Toolkit,YUP and more.",
      "Project: Reactjs-core-client:",
      "Description: Reactjs-core-client is core project that can be used for the company to build future projects could be a framework for lang:",
      "Project: Reactjs-core-admin:",
      "Description: Reactjs-core-admin is core project that can be used for the company to build future projects could be a framework for admin page",
    ],
    link: "https://www.nexlesoft.com/1",
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
    name: "Booking care clone",
    description:
      "Web-based platform that allows users to view clinic or doctor appointments according to available time frames, send mail when booked,...",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "react-thunk",
        color: "violet-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: bookingcare,
    source_code_link: "https://github.com/khanhpro122/bookingcare",
  },
  {
    name: "Shop",
    description:
      "Web ecommerce allows for user to view, filter, search, view product, payment with paypal, chat messsenger and manager products,...",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "style-component",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "orange-text-gradient",
      },
      {
        name: "react-query",
        color: "violet-text-gradient",
      },
      {
        name: "ant-design",
        color: "green-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "blue-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://shop-lttd.vercel.app/",
  },
  {
    name: "Sportify clone",
    description:
      "Inspired by spotify, the website allows users can view tracks, add music and favorites, and manager list of musics...",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://github.com/khanhpro122/spotify",
  },
];

export { services, technologies, experiences, testimonials, projects, socials };
