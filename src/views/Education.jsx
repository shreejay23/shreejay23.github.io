import React from "react";
// import { motion } from "framer-motion";
import { Card } from "../components/EducationCard";
import { educationsContent } from "../resume_content/education";

const Educations = () => {
  return (
    <div id="educations" className="bg-white text-black">
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Education
        </h2>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {educationsContent.map((educationContent, index) => (
            <Card key={index} education={educationContent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Educations;
