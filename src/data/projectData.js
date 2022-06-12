import beauty from "../assets/projects_images/beautyline.jpg";
import beautyphone from "../assets/projects_images/beautyline_phone.jpg";
import countries from "../assets/projects_images/countries.jpg";
import trainer from "../assets/projects_images/typetrainer.jpg";
import trainerphone from "../assets/projects_images/typetrainer_results.jpg";

export const projects = [
  {
    name: "Beautyline",
    description:
      "this is startup page it displays new technologies in beaty business I am working on the startup with my friend   used React and Figma for design. ",
    image1: beauty,
    image2: beautyphone,
  },
  {
    name: "Countryfinder",
    description:
      " used Countries API, project has light and dark mode, users can search country by region, name",
    image1: countries,
    image2: countries,
  },
  {
    name: "Typetrainer",
    description:
      "it displays random generated words and based on the type is speed it shows the result, I love 10 fast fingers so I though it would be good project idea.",
    image1: trainer,
    image2: trainerphone,
  },
];
