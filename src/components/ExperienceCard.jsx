// import React from "react";
// import { motion } from "framer-motion";

// export const Card = (props) => {
//   return (
//     <motion.div
//       initial={"hidden"}
//       whileInView={"visible"}
//       variants={{
//         visible: { opacity: 1 },
//         hidden: { opacity: 0 },
//       }}
//       className="w-1/2 bg-white rounded-lg"
//     >
//       <div className="p-5">
//         <img
//           alt={props.experience.imgAlt}
//           height={props.experience.imgHeight}
//           width={props.experience.imgWidth}
//           className="inline mr-1"
//           src={props.experience.imgSrc}
//         />
//         <h4 className="mb-2 align-middle inline-block font-bold text-xl tracking-tight text-gray-900">
//           {props.experience.title}
//         </h4>
//         <br />
//         <h4 className="mt-1 mb-2 w-auto inline-block font-medium text-xl tracking-tight text-gray-900">
//           {props.experience.employerName}
//         </h4>
//         <div className="flex items-center justify-between">
//           <p className="font-medium inline-block text-l tracking-tight text-gray-900">
//             {props.experience.location}
//           </p>
//           <p className="inline-block">
//             {props.experience.startDate} - {props.experience.endDate}
//           </p>
//         </div>
//         <div className="mb-3 font-normal text-gray-800">
//           <ul className="list-disc ml-4">
//             {props.experience.jobDuties.map((jobDuty, index) => (
//               <li key={index} className="text-black my-2">
//                 {jobDuty}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

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
      className="w-full md:w-1/2 bg-white rounded-lg p-5 flex flex-col"
    >
      <div className="flex items-center mb-3">
        <img
          alt={props.experience.imgAlt}
          height={props.experience.imgHeight}
          width={props.experience.imgWidth}
          className="inline mr-3"
          src={props.experience.imgSrc}
        />
        <div>
          <h4 className="font-bold text-xl tracking-tight text-gray-900">
            {props.experience.title}
          </h4>
          <h5 className="font-medium text-lg tracking-tight text-gray-700">
            {props.experience.employerName}
          </h5>
        </div>
      </div>
      <div className="flex justify-between items-center mb-3">
        <p className="font-medium text-gray-600">{props.experience.location}</p>
        <p className="text-gray-600">
          {props.experience.startDate} - {props.experience.endDate}
        </p>
      </div>
      <div className="text-gray-800">
        <ul className="list-disc ml-5">
          {props.experience.jobDuties.map((jobDuty, index) => (
            <li key={index} className="mb-2">
              {jobDuty}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
