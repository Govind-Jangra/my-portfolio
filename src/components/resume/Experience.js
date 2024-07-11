import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Experience = () => {
  return (
    <section id="Experience" className="w-full py-20 border-b-[1px] border-b-black">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      
      <div>
        <div className=" font-titleFont flex flex-col gap-4">
          
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer Intern"
            subTitle="Fundwave (Jan 2024 - July 2024)"
            des="Worked on the microservices, fine tuned feature extractin model and worked on the Fundabot i.e. RAG based chatbot for the Fundwave Products."
          />
          <ResumeCard
            title="Backend Developer Intern"
            subTitle="ONE AM IT SERVICES (Jan 2023 - July 2023)"
            des="Worked on the REST API for the super Admin User for GDBROS App (Fantasy Sports App)"
          />
         
        </div>
      </div>
     

      
    </motion.div>
    </section>
  );
}

export default Experience