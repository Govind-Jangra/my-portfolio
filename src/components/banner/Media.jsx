import React from 'react';
import gmail from "../../assets/tech/gmail.png"
import linkedin from "../../assets/tech/linkedin.png"
import c from '../../assets/tech/c.png'
import cplusplus from '../../assets/tech/cplusplus.png'
import html5 from '../../assets/tech/html5.png'
import css3 from '../../assets/tech/css3.png'
import tailwind from '../../assets/tech/tailwind.png'
import reactjs from '../../assets/tech/reactjs.png'
import nextjs from '../../assets/tech/nextjs.png'
import nodejs from '../../assets/tech/nodejs.png'
import expressjs from '../../assets/tech/expressjs.png'
import mongodb from '../../assets/tech/mongodb.png'
import git from '../../assets/tech/git.png'
import github from '../../assets/tech/github.png'
import postman from '../../assets/tech/postman.png'
import python from '../../assets/tech/python.png'
import java from '../../assets/tech/java.png'
import javascript from '../../assets/tech/javascript.png'

const Media = () => {
  return (
    <div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Contact Me On
        </h2>
        <div className="flex gap-7">
          <span className="bannerIcon">
            <a href="https://github.com/Govind-Jangra" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="" />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="mailto:govind70821@gmail.com">
            <img src={gmail} alt="" />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/govind-jangra-a03788252/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="" />
            </a>
          </span>
        </div>
      </div>

      <div>
      <br />
        <h2 className="text-base uppercase font-titleFont mb-4">
        Frontend Tech Stack
        </h2>
        <div className="flex gap-7">
        <span className="bannerIcon">
            <img src={html5} alt="" />
         </span>
         <span className="bannerIcon">
            <img src={css3} alt="" />
         </span>
         <span className="bannerIcon">
            <img src={tailwind} alt="" />
         </span>
         <span className="bannerIcon">
            <img src={reactjs} alt="" />
         </span>
         <span className="bannerIcon">
            <img src={nextjs} alt="" />
         </span>
         
        </div>
      </div>


      <div>
      <br />
        <h2 className="text-base uppercase font-titleFont mb-4">
        Backend Tech Stack
        </h2>
        <div className="flex gap-7">
        <span className="bannerIcon">
            <img src={nodejs} alt="" />
         </span>
         <span className="bannerIcon">
            <img src={expressjs} alt="" />
         </span>
         <span className="bannerIcon">
            <img src={mongodb} alt="" />
         </span>
         
         
        </div>
      </div>



      <div>
      <br />
        <h2 className="text-base uppercase font-titleFont mb-4">
        Tools
        </h2>
        <div className="flex gap-7">
        <span className="bannerIcon">
            <img src={git} alt="" />
         </span>
         <span className="bannerIcon">
            <img src={github} alt="" />
         </span>
         <span className="bannerIcon">
            <img src={postman} alt="" />
         </span>
        
         
        </div>
      </div>


      <div>
      <br />
        <h2 className=" uppercase font-titleFont mb-4 text-base">
        Programming Languages
        </h2>
        <div className="flex gap-7">
        <span className="bannerIcon">
            <img src={c} alt="" />
         </span>
         <span className="bannerIcon">
            <img src={cplusplus} alt="" />
         </span>
         <span className="bannerIcon">
            <img src={python} alt="" />
         </span>
         <span className="bannerIcon">
            <img src={java} alt="" />
         </span>
         <span className="bannerIcon">
            <img src={javascript} alt="" />
         </span>
         
        </div>
      </div>

    </div>
  );
}

export default Media;
