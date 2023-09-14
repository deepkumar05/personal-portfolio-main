import React from "react";
import Project from "./Project";
import SectionTitle from "./SectionTitle";
import img1 from "../assets/images/2.png"; // Import image 1
import img2 from "../assets/images/1.png"; // Import image 2
import img3 from "../assets/images/4.png"; // Import image 3
import img4 from "../assets/images/3.png"; // Import image 4

const data = [
  {
    id: 1,
    title: "Pokedex - a Pokemon website",
    img1: img1, // Use the imported image 1
    img2: img2, // Use the imported image 2
    description:
      "Apokemon website built with TypeScript, React, Firebase, SASS, Redux Thunk and Redux Toolkit. Features pokemon listing, searching, curating your very own list of pokemons. Async actions handled by Redux Thunk and state management made easy with Redux Toolkit.",
    tools: [
      "TypeScript",
      "React",
      "Firebase",
      "Redux Thunk",
      "SASS",
      "Redux Toolkit",
    ],
    liveLink: "https://pokedex-xi-nine.vercel.app/",
    frontEndLink: "https://github.com/deepkumar05/pokemon_webapp",
  },
  {
    id: 2,
    title: "Tindog - A website to meet dogs",
    img1: img3, // Use the imported image 3
    img2: img4, // Use the imported image 4
    description:
      "Discover canine companions and forge paw-some connections with Tindog, your go-to platform for meeting charming dogs in your vicinity. Using HTML, CSS, Bootstrap, and JavaScript, we've crafted a delightful experience for dog lovers everywhere.",
    tools: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
    ],
    liveLink: "https://tindog-orcin.vercel.app/",
    frontEndLink: "https://github.com/deepkumar05/tindog",
  },
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <SectionTitle title={"My Projects"} />
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
