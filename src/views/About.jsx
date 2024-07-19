import React from "react";
import { techStack } from "../resume_content/skills";
import { motion } from "framer-motion";
import { skillTypes } from "../resume_content/skills";

const About = () => {
  return (
    <div id="about" className={"bg-white"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2 className={"text-5xl font-bold px-4 md:px-0 text-center"}>
          About Me
        </h2>
        <div>
          <motion.div>
            <p className={"mt-4 text-lg text-justify text-black-300"}>
              I am a dedicated computer science professional with a Master of Science in Computer Science from Stony Brook University. Passionate about driving innovation through technology, I am eager to apply my skills in software development and data analysis to projects that can shape the future and improve lives globally. Currently, I am actively seeking Software Engineering opportunities to tackle new challenges and contribute to impactful solutions.
            </p>
            <h4 className="mt-12 text-2xl font-semibold text-blue-500">
              Education and Experience
            </h4>
            <p className={"mt-4 text-lg text-justify text-black-300"}>
              I am a highly motivated and skilled Software Engineer with a strong academic foundation and extensive hands-on experience in both research and industry settings. I hold a Master of Science in Computer Science from Stony Brook University, with a commendable CGPA of 3.7/4, and a Bachelor of Engineering in Computer Engineering from Pune Institute of Computer Technology, where I graduated with an outstanding CGPA of 9.8/10. My technical expertise spans multiple programming languages, web development frameworks, DBMS, and cloud technologies, including C++, Python, Java, Node.js, React.js, AWS, SQL, and MongoDB.
              <br /><br />
              In my professional journey, I've undertaken impactful roles such as managing a seamless content migration for Stony Brook University's HR website, enhancing UI and UX, which led to a 45% improvement in the site's Silktide score. At IMATMI, I developed a full-stack application that increased user satisfaction by 30% and reduced latency by 50% through innovative algorithms and efficient data structures. As a Graduate Research Assistant, I extracted and analyzed over 5GB of CDC data using Python and Flask, providing valuable insights into opioid-related deaths in the US.
              <br /><br />
              Beyond internships, I have led and contributed to several significant projects, including creating a vulnerability detection system for pickle file deserialization, developing an interactive Airbnb analysis dashboard, and building an image de-duplicating architecture for NFTs. My role as a Graduate Teaching Assistant further showcased my leadership and communication skills, as I supervised exams and graded assignments for a large class. I am passionate about leveraging my diverse skill set to drive innovative solutions in technology and am actively seeking Software Engineering opportunities to contribute my expertise and continue growing in the field.
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
                          alt={skill.alt}
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
