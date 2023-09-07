import React from "react";
import { techStack } from "../constants";
import { motion } from "framer-motion";
import { skillTypes } from "../constants";

const About = () => {
  return (
    <div id="about" className={"bg-white"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2 className={"text-5xl font-bold px-4 md:px-0 text-center"}>
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-2xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p className={"mt-4 text-lg text-justify text-black-300"}>
              I am a dedicated and passionate computer science enthusiast
              pursuing a Master of Science in Computer Science at Stony Brook
              University. I am deeply passionate about harnessing technology to
              drive innovation, and I eagerly look forward to contributing my
              skills to projects that can shape the future of technology and
              enhance the lives of individuals worldwide. With a keen interest
              in Software Development and Data Analysis, I am excited about the
              challenges and opportunities that lie ahead in my career.
            </p>
            <h4 className="mt-12 text-2xl font-semibold text-blue-500">
              Education and Experience
            </h4>
            <p className={"mt-4 text-lg text-justify text-black-300"}>
              My academic journey at Pune Institute of Computer Technology,
              where I earned my Bachelor's degree in Computer Engineering, laid
              a strong foundation for my technical skills. My coursework has
              equipped me with a deep understanding of algorithms, programming,
              data management, and various domains within computer science.
              <br />
              As a Software Engineer Intern at Intellect Mind & Talent
              Management Innovations, I had the opportunity to apply my
              knowledge in real-world scenarios.
            </p>
          </motion.div>
          <motion.div>
            <h4 className="mt-12 text-2xl font-semibold text-blue-500">
              Skills
            </h4>
          </motion.div>

          <ul>
            {skillTypes.map((skillType, index) => (
              <li
                key={index}
                className="my-4 mx-4 font-medium text-lg text-justify text-black-100"
              >
                {skillType.name}
                <motion.div key={index} className="flex flex-wrap my-4">
                  {techStack[skillType.key].map((skill, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView={"visible"}
                      variants={{
                        visible: {
                          y: 0,
                          opacity: 1,
                          transition: {
                            type: "spring",
                          },
                        },
                        hidden: { opacity: 1, y: 80 },
                      }}
                      className="items-center mx-6 my-2"
                    >
                      <figure className="relative">
                        <img
                          alt=""
                          src={skill.link}
                          height="48"
                          width="48"
                          className="w-12"
                        />
                        <figcaption className="text-center text-sm text-gray-500 mt-2">
                          {skill.name}
                        </figcaption>
                      </figure>
                    </motion.div>
                  ))}
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
