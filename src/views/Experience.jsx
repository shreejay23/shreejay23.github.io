import React from "react";
import { motion } from "framer-motion";
import { Card } from "../components/ExperienceCard";
import { experienceContents } from "../resume_content/experience";

const Experience = () => {
  return (
    <div id="experience" className="bg-white text-black">
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Experience
        </h2>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {experienceContents.map((experienceContent) => (
            <Card experience={experienceContent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
