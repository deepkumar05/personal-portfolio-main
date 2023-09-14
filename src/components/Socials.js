import { useRef } from "react";
import { useGsapSocialReveal } from "../hooks/gsap";

const data = [
  { id: 1, title: "Instagram", url: "https://www.instagram.com/deep_ds_14/" },
  { id: 2, title: "GitHub", url: "https://github.com/deepkumar05" },
  { id: 3, title: "LinkedIn", url: "https://www.linkedin.com/in/krdeepanshu/" },
  { id: 4, title: "Twitter", url: "https://twitter.com/Deepans07930899" },
];

const Socials = () => {
  const socialRef = useRef(null);

  useGsapSocialReveal(socialRef, 2);

  return (
    <div
      className="socials flex gap-3 uppercase text-sm fixed left-1/2 transform -translate-x-1/2 bottom-4 text-black bg-white p-3 backdrop-blur-lg z-50"
      ref={socialRef}
    >
      {data.map((social) => (
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          key={social.id}
          className="hover:text-cyan-400 duration-500 font-semibold rounded-full px-3 py-1"
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
