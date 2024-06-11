import { IoColorPaletteSharp, IoTerminal } from "react-icons/io5";
import { FaServer, FaCode } from "react-icons/fa";
import { getRandomColor } from "../utils/randomColor";

export const skills = [
  {
    name: "Web Development",
    icon: (
      <IoTerminal
        className="text-9xl mr-4"
        style={{ color: getRandomColor() }}
      />
    ),
    description:
      "Learning to create dynamic websites with a focus on performance and compatibility. Gaining proficiency in building responsive websites using HTML, CSS, and JavaScript, and exploring various frameworks and libraries.",
  },
  {
    name: "Web Design",
    icon: (
      <IoColorPaletteSharp
        className="text-9xl mr-4"
        style={{ color: getRandomColor() }}
      />
    ),
    description:
      "Exploring captivating layouts with a user-centric approach. Developing skills in creating visually appealing and user-friendly website layouts.",
  },
  {
    name: "Frontend Development",
    icon: (
      <FaCode className="text-9xl mr-4" style={{ color: getRandomColor() }} />
    ),
    description:
      "Building interactive interfaces with a keen eye on user experience. Experienced in crafting interactive user interfaces and enhancing user experience through frontend technologies such as React and Vue.",
  },
  {
    name: "Backend Development",
    icon: (
      <FaServer className="text-9xl mr-4" style={{ color: getRandomColor() }} />
    ),
    description:
      "Beginning to develop efficient server-side solutions with a security-first mindset. Starting to develop server-side applications and APIs using technologies like Node.js or Express.js, focusing on learning efficient data management and processing.",
  }
];
