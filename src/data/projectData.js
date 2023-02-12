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
      "this is startup page it displays new technologies in beaty business I am working on the startup with my friend   used React and Figma for design. ",
    stack: ["css", "react", "express"],
  },
  {
    name: "Countryfinder",
    description:
      " used Countries API, project has light and dark mode, users can search country by region, name",
    stack: ["css", "react", "express"],
  },
  {
    name: "Typetrainer",
    description:
      "it displays random generated words and based on the type is speed it shows the result, I love 10 fast fingers so I though it would be good project idea.",
    stack: ["css", "react", "express"],
  },
  {
    name: "Beautyline",
    description:
      "this is startup page it displays new technologies in beaty business I am working on the startup with my friend   used React and Figma for design. ",
    stack: ["css", "react", "express"],
  },
  {
    name: "Countryfinder",
    description:
      " used Countries API, project has light and dark mode, users can search country by region, name",

    stack: ["css", "react", "express"],
  },
  {
    name: "Typetrainer",
    description:
      "it displays random generated words and based on the type is speed it shows the result, I love 10 fast fingers so I though it would be good project idea.",

    stack: ["css", "react", "express"],
  },
];
