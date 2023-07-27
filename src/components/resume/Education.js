import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <section id="Education" className="w-full py-20 border-b-[1px] border-b-black">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Computer Engineering"
            subTitle="National Institute of Technology Kurukshetra (2021 - Present)"
            result="9.11 CGPA"
            des="Studied CS related subjects like  Data Structures And Algorithms, Operating Systems, DBMS, OOPS,Computer Networks, Web Development, etc."
          />
          <ResumeCard
            title="12th in Non-Medical (CBSE)"
            subTitle="MDU Campus School Rohtak (2019 - 2021)"
            result="94.6%"
            des="Studied subjects like Physics , Chemistry ,Maths ,English and Physical Education. "
          />
           <ResumeCard
            title=" 10th  (CBSE)"
            subTitle="M R PUB HIGH School (2019)"
            result="96.2%"
            des=""
          />
         
        </div>
      </div>
     

      
    </motion.div>
    </section>
  );
}

export default Education