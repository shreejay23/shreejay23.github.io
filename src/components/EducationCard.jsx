import React from "react";
import { motion } from "framer-motion";

export const Card = (props) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="max-w-xl bg-white rounded-lg dark:bg-gray-800 dark:my-8"
    >
      {/* <a href="hello">
        <img
          className="rounded-t-lg w-full"
          src="https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg"
          alt=""
        />
      </a> */}
      <div className="p-5">
        <img
          alt={props.education.imgAlt}
          height={props.education.imgHeight}
          width={props.education.imgWidth}
          className="inline mr-1"
          src={props.education.imgSrc}
        />
        <h4 className="mb-2 inline-block font-bold text-xl tracking-tight text-gray-900 dark:text-white">
          {props.education.universityName}
        </h4>
        <h4 className="mt-2 mb-2 font-medium text-xl tracking-tight text-gray-900 dark:text-white">
          {props.education.degree}
        </h4>

        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <ul>
            <li className="text-gray flex mb-2 justify-between">
              <p className="mt-2 font-medium inline-block text-l tracking-tight text-gray-900 dark:text-white">
                {props.education.location}
              </p>
              <p className="inline-block">
                {props.education.startDate} - {props.education.endDate}
              </p>
            </li>
            <li className="text-black mb-2 text-justify">
              <h4>
                <b>{"Relevant Coursework: "}</b>
                {props.education.relevantCoursework}
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
