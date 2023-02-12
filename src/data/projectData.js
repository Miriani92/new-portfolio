import beauty from "../assets/projects_images/beautyline.jpg";
import beautyphone from "../assets/projects_images/beautyline_phone.jpg";
import countries from "../assets/projects_images/countries.jpg";
import trainer from "../assets/projects_images/typetrainer.jpg";
import trainerphone from "../assets/projects_images/typetrainer_results.jpg";
import countryphone from "../assets/projects_images/countries_phone.jpg";

export const projects = [
  {
    name: "Ecommerce Website",
    description:
      "A minimal eCommerce web-site, application has all functinality that those type of application needs,  it displays different products, products can be added or removed from the cart,shows which products are in stock and which are not.",
    image1: beauty,
    technologies: "Technologies: React Css GraphQL Apollo",
  },
  {
    name: "User Management System",
    description:
      "A user management app, which is created to organize user data, it  has a user registration form through which a new user can be added,The application has a new user search functionality based on entered data, user can edit and delete account and change their status.",
    image1: countries,
    technologies: "Technologies: Angular Css ExpressJs MongoDB",
    reverse: true,
  },
  {
    name: "Typetrainer",
    description:
      "I'm a big fan typing practice websites like 10 fast finger, mokeytype, and thought it would be great  to create my own typing app, typetrainer displays random generated words and after finishing typing it gives us result.",
    image1: trainer,
    technologies: "Technologies: React Css Redux",
  },
];
export const moreProjects = [
  {
    name: "Beautyline",
    description:
      "eCommerece app that  displays new technologies in beauty business. ",
    stack: ["React", "Css", "Express"],
  },
  {
    name: "Countryfinder",
    description:
      "Used Countries Api, it shows all Countries in the world, project has light and dark mode, users can search country by region, name.",
    stack: ["React", "Css"],
  },
  {
    name: "Google Doc Clone",
    description:
      "A lightweight google doc clone application that has every essential feature that google doc has.",
    stack: ["React", "Css", "Redux"],
  },
  {
    name: "Typeahead",
    description:
      "Used Github Api, created app that searches users on the github.",
    stack: ["React", "Css"],
  },
  {
    name: "Food Order Application",
    description:
      "One of my first project. this is app that adds the desired food in the cart, has the list of meals where user can choose from.",
    stack: ["React", "Css", "Redux"],
  },
  {
    name: "Web Scraper",
    description:
      "I did not finished the project yet, this would be the app that scrapes the web (online store) permanently  and sends the message to the user when new product is added to the store.",
    stack: ["Express", "Puppetier", "Cherrio"],
  },
];
