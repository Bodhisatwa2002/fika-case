import React from "react";
import  Link  from "next/link";


interface AnimatedLinkProps {
  to: string;
  text: string;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ to, text }) => {
  // Split text into individual characters for animation
  const characters = text.split("");

  return (
    <Link
      href={to}
      title={`Go to ${text}`}
      className="group relative overflow-hidden block font-extrabold text-lg"
    >
      <span className="flex">
        {characters.map((char, index) => (
          <span
            key={`top-${index}`}
            className="transition-transform duration-300 transform group-hover:-translate-y-full"
            style={{ transitionDelay: `${index * 30}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
      <span className="flex text-amber-600 absolute top-full left-0">
        {characters.map((char, index) => (
          <span
            key={`bottom-${index}`}
            className="transition-transform duration-300 transform group-hover:-translate-y-full"
            style={{ transitionDelay: `${index * 30}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </Link>
  );
};

export default AnimatedLink;