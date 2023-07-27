import React from 'react'
import {  FaLinkedinIn } from "react-icons/fa";
import { SiGithub,SiGmail } from "react-icons/si";


const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center">
     
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-white">Govind</h3>
        <p className="text-lg font-normal text-gray-400">
          Software Engineer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Motivated Fresher with excellent problem-solving skills and the ability to perform well in a team. Passionate about coding and I am currently looking to secure a responsible position to utilize my skills and get actual experience of tech 
        </p>
        
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">govind70821@gmail.com</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Github: <span className="text-lightText">https://github.com/Govind-Jangra</span>
        </p>
      </div>
      <div className="flex flex-col gap-0">
        <br />
        <div className="flex gap-4">
          <span className="bannerIcon">
          <a href="https://github.com/Govind-Jangra" target="_blank" rel="noopener noreferrer">
            <SiGithub /></a>
          </span>
          <span className="bannerIcon">
          <a href="mailto:govind70821@gmail.com">
            <SiGmail /></a>
          </span>
          <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/govind-jangra-a03788252/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn /></a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft