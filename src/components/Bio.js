import { useRef } from "react";
import { useGsapBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);

  useGsapBioReveal(bioRef, 2);
  return (
    <div className="bio mt-6 md:mt-10 lg:mt-20 container mx-auto overflow-hidden">
      <p
        ref={bioRef}
        className="text-base md:text-lg lg:text-xl leading-normal md:leading-relaxed"
        style={{
          fontSize: "1.5rem",
          color: "rgb(255, 255, 255, 0.75)",
          lineHeight: "1.5",
        }}
      >
        I am a Full-Stack Developer specialized in building responsive web
        applications using React, Redux, SCSS, TypeScript, and JavaScript. My
        expertise in UI design and animation allows me to create visually
        appealing and functional solutions. I am dedicated to delivering
        high-quality work and staying up-to-date with the latest web development
        trends.
      </p>
    </div>
  );
};

export default Bio;
