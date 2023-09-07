import React from "react";
import { Card } from "../components/ProjectCard";
import { projectContents } from "../resume_content/project";

const Projects = () => {
  return (
    <div id="projects" className="bg-white text-black">
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {projectContents.map((projectContet, index) => (
            <Card key={index} project={projectContet} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
