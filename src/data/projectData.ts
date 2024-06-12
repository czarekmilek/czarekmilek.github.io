import { Project } from "../types/Project";

const projects: Project[] = [
  {
    title: "UWR",
    description:
      "A collection of projects completed during studies at the University of Wrocław.",
    githubLink: "https://github.com/czarekmilek/UWR",
    technologies: ["Python", "C++", "JavaScript, TypeScript", "Racket, Java"],
    showcaseImage: "./python.png",
  },
  {
    title: "GreenVeggies",
    description:
      "A simple online shop built using React and Node.js, showcasing a basic implementation of an e-commerce platform with essential features and functionalities.",
    githubLink: "https://github.com/czarekmilek/GreenVeggies",
    technologies: ["React", "Node.js", "Express", "Google Cloud"],
    showcaseImage: "./react.png",
  },
  {
    title: "NIFS3",
    description:
      "Recreating an image with NIFS3. Includes features for statistical analysis, data manipulation, and graphical representation.",
    githubLink: "https://github.com/czarekmilek/NIFS3",
    technologies: ["Python"],
    showcaseImage: "./python.png",
  },
  {
    title: "URL Shortener",
    description:
      "An URL Shortener App made in HTML, CSS, JavaScript, Node.js, and MySQL. App creates short links  urls and keeps count of visits.",
    githubLink: "https://github.com/czarekmilek/URL-Shortener",
    technologies: ["JavaScript", "CSS", "HTML", "Node.js", "MySQL"],
    showcaseImage: "./js.png",
  },
  {
    title: "Ben 10 - Adventure Text Game",
    description:
      "Ben 10 text-based adventure game inspired by the Ben 10 universe, final project for course OOP on University. Made in Java.",
    githubLink: "https://github.com/czarekmilek/Ben10_TextGame",
    technologies: ["Java"],
    showcaseImage: "./java.png",
  },
  {
    title: "Calculator",
    description:
      "A simple calculator made in HTML, CSS, and JavaScript. Provides various mathematical functions.",
    githubLink: "https://github.com/czarekmilek/Calculator",
    technologies: ["HTML", "CSS", "JavaScript"],
    showcaseImage: "./js.png",
  },
];

export default projects;
