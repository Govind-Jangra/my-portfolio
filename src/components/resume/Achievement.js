import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <section id="Achievements" className="w-full py-20 border-b-[1px] border-b-black">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          
          <h2 className="text-6xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Winner of CodeRun: The Reignition"
            subTitle="A coding Contest organised by the TechnoByte Of NIT kurukshetra"
            result="1st Rank"
            des="Bagged a  1st Rank in the contest."
          />
          <ResumeCard
            title="5th Rank in GFG Weekly Coding Contest - 111"
            subTitle="Weekly Coding Contest organised by the GFG."
            result="5th Rank"
            des="Solved all questions of the Contest and achieved 5th Rank in the Contest."
          />
          <ResumeCard
            title="9th Rank in CodeRush AlgoQuiz and coding
Challange 2K23"
            subTitle="Coding Contest organised by the AlgoUniversity."
            result="9th Rank "
            des="Achieved 9th rank in the competition."
          />
            <ResumeCard
            title="Global  Rank 80 in Codechef Starters 79 Division "
            subTitle="Codechef Starters 79 Division."
            result="80th Rank "
            des="Achieved 80th rank in the competition."
          />
<ResumeCard
            title="Solved More than 2000 Problems in all Online Judges."
            subTitle="Online Judges- Leetcode , GFG , Codechef , Codeforces , CodeStudio ."
            result="2000+ Problems Solved "
            des="2000+ Problems Solved"
          />

<ResumeCard
            title="3 Star at Codechef."
            subTitle="Codechef"
            result="1635 Rating"
            des=""
          />



        </div>
      </div>
     
        

    </motion.div>
    </section>
  );
};

export default Achievement;
