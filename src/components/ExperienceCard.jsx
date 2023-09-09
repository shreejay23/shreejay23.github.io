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
      className="max-w-xl bg-white rounded-lg"
    >
      <div className="p-5">
        <img
          alt={props.experience.imgAlt}
          height={props.experience.imgHeight}
          width={props.experience.imgWidth}
          className="inline mr-1"
          src={props.experience.imgSrc}
        />
        <h4 className="mb-2 align-middle inline-block font-bold text-xl tracking-tight text-gray-900">
          {props.experience.title}
        </h4>
        <br />
        <h4 className="mt-1 mb-2 w-auto inline-block font-medium text-xl tracking-tight text-gray-900">
          {props.experience.employerName}
        </h4>
        <div className="mb-3 flex justify-between">
          <p className="mt-1 font-medium inline-block text-l tracking-tight text-gray-900">
            {props.experience.location}
          </p>
          <p className="inline-block">
            {props.experience.startDate} - {props.experience.endDate}
          </p>
        </div>
        <div className="mb-3 font-normal text-gray-800">
          <ul className="list-disc ml-4">
            {props.experience.jobDuties.map((jobDuty, index) => (
              <li key={index} className="text-justify text-black my-2">
                {jobDuty}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
