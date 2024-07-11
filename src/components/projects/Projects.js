import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title=""
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectsCard
          title=" Open Source PDF Chatbot"
          des="Developed a full stack RAG-based web application using NextJs and Cloudflare Workers with secured authentication. The application allows users to create multiple PDF chats and ask questions from them. Leveraging LLAMA3 for the language model and BGE-LARGE for the embedding model, it utilizes Pinecone as the vector database. The tech stack includes NextJs, TypeScript, MongoDB, Pinecone, and Cloudflare Workers to ensure robust performance and scalability."
          src={projectFive}
          githubLink="https://github.com/Govind-Jangra/open-source-pdf-chat"
          websiteLink="https://open-source-pdf-chat.vercel.app/"

        />
        <ProjectsCard
          title="Talkative-A Chatting App"
          des="Chatting App with Real-Time Communication | MERN Stack with Socket.io | React.js . 

I independently designed and developed a sophisticated chatting application leveraging the MERN (MongoDB, Express.js, React.js, Node.js) stack, bolstered by real-time communication capabilities powered by Socket.io.

"
          src={projectOne}
          githubLink="https://github.com/Govind-Jangra/talkative"
          websiteLink="https://talkative-jbe7.onrender.com/login"

        />
        <ProjectsCard
          title="My Ecommerce"
          des="
E-commerce Website | MERN Stack | Tailwind CSS | Stripe Payment.
I spearheaded the end-to-end development of a feature-rich E-commerce website leveraging the MERN (MongoDB, Express.js, React 18, Node.js) stack, delivering a seamless shopping experience for users and robust management tools for administrators."
          src={projectTwo}
          githubLink="https://github.com/Govind-Jangra/myecommerce"
          websiteLink="https://govindecommerce.onrender.com/"
        />
        <ProjectsCard
          title="Real-Time-Taxi-pooling-system-based-on-Locality-scaling"
          des="EcoPool is an innovative cab pooling application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The primary aim of this application is to encourage eco-friendly commuting practices by facilitating users to find nearby individuals heading to the same or nearby destinations and share a cab together. By doing so, EcoPool aims to reduce fuel consumption and contribute to the ecological balance of our planet."
          src={projectThree}
          githubLink="https://github.com/Govind-Jangra/Real-Time-Taxi-pooling-system-based-on-Locality-scaling"
          websiteLink="https://real-time-taxi-pooling-system-based-on-locality-scaling.vercel.app/"
        />
        <ProjectsCard
          title="ReviveMart-A bidding Website for products"
          des="ReviveMart is a dynamic auction platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The platform serves as a marketplace where users can sell their refurbished goods at their desired prices, and other users can bid on these products. The application provides a seamless and user-friendly experience, allowing individuals to buy and sell items through an auction-style format."
          src={projectFour}
          githubLink="https://github.com/Govind-Jangra/Yours-Bidding-Home"
          websiteLink="https://revivemart.onrender.com/"
        />
       
      </div>
    </section>
  );
}

export default Projects