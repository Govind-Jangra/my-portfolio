import React from "react";
import html from "../../../assets/tech-stack/html.png";
import css from "../../../assets/tech-stack/css.png";
import javascript from "../../../assets/tech-stack/javascript.png";
import reactImage from "../../../assets/tech-stack/react.png";
import node from "../../../assets/tech-stack/node.png"
import express from "../../../assets/tech-stack/express.jpg";
import github from "../../../assets/tech-stack/github.png";
import tailwind from "../../../assets/tech-stack/tailwind.png";
import mongo from "../../../assets/tech-stack/mongo.png"
import post from "../../../assets/tech-stack/post.png"
import cpp from "../../../assets/tech-stack/cpp.png"
import python from "../../../assets/tech-stack/python.jpg"
import java from "../../../assets/tech-stack/java.png"
import git from "../../../assets/tech-stack/git.png"
import nextjs from "../../../assets/tech-stack/nextjs.png"
import mysql from "../../../assets/tech-stack/mysql.png"
import typescript from "../../../assets/tech-stack/typescript.png"
import linux from "../../../assets/tech-stack/linux.png"
import docker from "../../../assets/tech-stack/docker.jpg"
import aws from "../../../assets/tech-stack/aws.png";
import c from "../../../assets/tech-stack/c.png";
import openAPI from "../../../assets/tech-stack/openAPI.png";
import lit from "../../../assets/tech-stack/lit.webp";
const TechStack = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML5",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id:17,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-400",
    },
    {
      id:21,
      src: c,
      title: "C",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      src: cpp,
      title: "C++",
      style: "shadow-blue-400",
    },
    {
      id: 11,
      src: java,
      title: "Java",
      style: "shadow-sky-400",
    },
    {
      id: 12,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 4,
      src: reactImage,
      title: "ReactJs",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: node,
      title: "Node JS",
      style: "shadow-green-300",
    },
    {
      id: 7,
      src: express,
      title: "Express JS",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: mongo,
      title: "Mongo DB",
      style: "shadow-green-800",
    },
    {
      id: 9,
      src: post,
      title: "Postman",
      style: "shadow-orange-400",
    },
    
   
    {
      id: 13,
      src: git,
      title: "Git",
      style: "shadow-red-400",
    },
    {
      id: 14,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id:15,
      src: nextjs,
      title: "NextJs",
      style: "shadow-white-400",
    },
    {
     id:16,
     src: mysql,
      title: "MySQL",
      style: "shadow-orange-400", 
    },
    
    {
      id:18,
      src: linux,
      title: "Linux",
      style: "shadow-yellow-400",
    },
    {
      id:19,
      src: docker,
      title: "Docker",
      style: "shadow-blue-400",
    },
    {
      id:20,
      src: aws,
      title: "AWS",
      style: "shadow-orange-400",
    },
    
    {
      id:22,
      src: openAPI,
      title: "OpenAPI Specification",
      style: "shadow-yellow-400",
    },
    {
      id:23,
      src: lit,
      title: "Lit",
      style: "shadow-blue-400",
    }
    
  ];
  return (
    <div
      name="Skills"
      className="bg-gradient-to-b py-10 w-full h-auto"
    >
  
      <div className="max-w-screen-lg  mx-auto py-auto flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold  border-gray-500 p-2 inline">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
