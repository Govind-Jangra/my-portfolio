import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [ "Software Engineer","Full Stack Developer.", "Competitive Coder."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        
        <h1 className="text-6xl font-bold text-white">
          Hey, I'm <span className="text-blue-400 capitalize">Govind </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Motivated Fresher with excellent problem-solving skills and the ability to perform well in a team. Passionate about coding and I am currently looking to secure a responsible position to utilize my skills
and get actual experience of tech
        </p>
      </div>
    
     <Media />
    </div>
  );
}

export default LeftBanner