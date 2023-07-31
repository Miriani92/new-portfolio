import beauty from "../assets/projects_images/beautyline.jpg";
import userBase from "../assets/projects_images/userBase.png";
import book from "../assets/projects_images/book.jpg";

export const projects = [
  {
    name: "User Management System",
    description:
      "Full-stack app, user management service, provides end-to-end management of user accounts, including user registration, login, authentication and permissions management.",
    image1: userBase,
    technologies: "Technologies: Angular ExpressJs MongoDB",
    reverse: true,
    link: "https://github.com/Miriani92/user-base",
  },
  {
    name: "Ecommerce Website",
    description:
      "Front-end application for e-commerce website, allows users to buy and sell physical goods, services, and digital products over the internet.",
    image1: beauty,
    technologies: "Technologies: React",
    link: "https://github.com/Miriani92/store_app",
  },
  {
    name: "E-Books",
    description:
      "An app for reading ebooks on your phone or tablet, with authentication service, users can upload books and can read  using a built-in pdf reader with note-taking capabilities.",
    image1: book,
    reverse: true,
    technologies: "Technologies: React, Redux, firebase, Tailwindcss",
    link: "https://github.com/Miriani92/e-books",
  },
];
export const moreProjects = [
  {
    name: "User Dashboard",
    description:
      "App supports common user management operations such as adding new users, viewing and editing existing users roles permissions.",
    stack: ["React", "Zustand", "Express", "Ant-Design"],
    link: "https://github.com/Miriani92/capp",
  },
  {
    name: "Typetrainer ",
    description: "Minimalistic and customizable typing testing application.",
    stack: ["React", "Redux"],
    link: "https://github.com/Miriani92/type-trainer",
  },
  {
    name: "Google Doc Clone",
    description:
      "A lightweight google doc clone application that has every essential feature that google doc has.",
    stack: ["React", "Redux"],
    link: "https://github.com/Miriani92/googledoc",
  },
  {
    name: "Food Order Application",
    description:
      "One of my first project. this is app that adds the desired food in the   cart, has the list of meals where user can choose from.",
    stack: ["React", "Redux"],
    link: "https://github.com/Miriani92/food_app",
  },
  {
    name: "Typeahead",
    description:
      "Used Github Api, created app that searches users on the github.",
    stack: ["React"],
    link: "https://github.com/Miriani92/Typeahead",
  },
  {
    name: "Beautyline",
    description:
      "One of My first project, Front-end for e-commerce app, that  displays new technologies in beauty business.",
    stack: ["React"],
    link: "https://github.com/Miriani92/Beautyline",
  },
];
