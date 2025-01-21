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
            <p className={"mt-4 text-lg text-black-300"}>
            I am a dedicated computer science professional with a Master of Science in Computer Science from Stony Brook University. Passionate about driving innovation through technology, I currently contribute to impactful solutions as a Software Development Engineer at AWS. Leveraging my expertise in software development and data analysis, I am committed to delivering cutting-edge projects that shape the future and improve lives globally.            </p>
            <h4 className="mt-12 text-2xl font-semibold text-blue-500">
              Education and Experience
            </h4>
            <p className={"mt-4 text-lg text-black-300"}>
            I am a highly motivated and skilled Software Engineer with a strong academic foundation and extensive hands-on experience in both research and industry settings. I hold a Master of Science in Computer Science from Stony Brook University, with a commendable CGPA of 3.7/4, and a Bachelor of Engineering in Computer Engineering from Pune Institute of Computer Technology, where I graduated with an outstanding CGPA of 9.8/10. My technical expertise spans multiple programming languages, web development frameworks, DBMS, and cloud technologies, including C++, Python, Java, Node.js, React.js, AWS, SQL, and MongoDB.
              <br /><br />
              In my professional journey, At Stony Brook University, I have made significant contributions, such as collaborating with a team to develop an application in React.js that visualizes and analyzes the impact of laws and socioeconomic factors on opioid-related deaths. I also led a cross-functional team in API development, creating endpoints in Python to merge datasets from different teams, and facilitating the aggregation of over 500,000 records. I managed a smooth content migration from the legacy website to the new one, enhancing the User Interface Design and ensuring accessibility for 20,000+ users, which resulted in a 45% improvement in the site's Silktide score. Additionally, I automated the generation of website performance reports for 30 web pages, streamlining performance tracking.
              <br /><br/>
              During my internship IMATMI, I spearheaded the design and development of a product in the MERN stack for assessing personality traits through an automated testing approach, hosted on AWS EC2. I enhanced the user experience by implementing lazy loading and static Shimmer UI in React.js, improving the First Contentful Paint (FCP) by 20%. Furthermore, I implemented an efficient algorithm using Graph and Queue data structures, reducing database query latency by 50%, and optimized MongoDB queries with field indexing, resulting in a 20% reduction in response time. I also coordinated with a team to integrate back-end security measures and added new features like search and filtering, leading to a 30% increase in user satisfaction.
              <br /><br />
              Beyond internships, I have led and contributed to several significant projects, including creating a vulnerability detection system for pickle file deserialization, developing an interactive Airbnb analysis dashboard, and building an image de-duplicating architecture for NFTs. My role as a Graduate Teaching Assistant further showcased my leadership and communication skills, as I supervised exams and graded assignments for a large class. I am passionate about leveraging my diverse skill set to drive innovative solutions in technology.
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
                className="my-4 mx-4 font-medium text-lg text-black-100"
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
