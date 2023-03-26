import beauty from "../assets/projects_images/beautyline.jpg";
import userBase from "../assets/projects_images/userBase.png";
import trainer from "../assets/projects_images/typetrainer.png";

export const projects = [
  {
    name: "Ecommerce Website",
    description:
      "It is a full-stack app that displays various products by category,It has price conversion functionality, as well as the ability to add products to the cart according to different variations (color, size).",
    image1: beauty,
    technologies: "Technologies: React GraphQL Apollo",
    link: "https://github.com/Miriani92/store_app",
  },
  {
    name: "User Management System",
    description:
      "Another full-stack app, created to organize user data, it  has a user registration form through which a new user can be added,The application has a new user search functionality, user can edit and delete account and change their status.",
    image1: userBase,
    technologies: "Technologies: Angular ExpressJs MongoDB",
    reverse: true,
    link: "https://github.com/Miriani92/user-base",
  },
  {
    name: "Typetrainer",
    description:
      "I'm a big fan of typing practice websites like 10 fast finger, monkeytype, and thought it would be great to create my own typing app, typetrainer displays random generated words and gives us statistics after the session is over.",
    image1: trainer,
    technologies: "Technologies: React Redux",
    link: "https://github.com/Miriani92/type-trainer",
  },
];
export const moreProjects = [
  {
    name: "Beautyline",
    description:
      "eCommerece app that  displays new technologies in beauty business. ",
    stack: ["React", "Css", "Express"],
    link: "https://github.com/Miriani92/Beautyline",
  },
  {
    name: "Countryfinder",
    description:
      "Used Countries Api, it shows all Countries in the world, project has light and dark mode, users can search country by region, name.",
    stack: ["React", "Css"],
    link: "https://github.com/Miriani92/Searchforcountry",
  },
  {
    name: "Google Doc Clone",
    description:
      "A lightweight google doc clone application that has every essential feature that google doc has.",
    stack: ["React", "Css", "Redux"],
    link: "https://github.com/Miriani92/googledoc",
  },
  {
    name: "Typeahead",
    description:
      "Used Github Api, created app that searches users on the github.",
    stack: ["React", "Css"],
    link: "https://github.com/Miriani92/Typeahead",
  },
  {
    name: "Food Order Application",
    description:
      "One of my first project. this is app that adds the desired food in the cart, has the list of meals where user can choose from.",
    stack: ["React", "Css", "Redux"],
    link: "https://github.com/Miriani92/food_app",
  },
  {
    name: "Web Scraper",
    description:
      "App that scrapes the website permanently and notifies us when a new product is uploaded at an acceptable price.The price is calculated by the average price of several similar products.",
    stack: ["Express", "Puppetier", "Cherrio"],
    link: "https://github.com/Miriani92/web-scraping",
  },
];
