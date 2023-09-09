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
      className="max-w-xl bg-gray-100 rounded-lg border border-gray-200 shadow-lg my-8 flex flex-col" // Add flex and flex-col classes here
    >
      <div className="p-5 flex-grow">
        {" "}
        {/* Add flex-grow to make it expand */}
        <h5 className="mb-3 text-center rounded-lg text-2xl font-medium tracking-tight text-black">
          {props.project.title}
        </h5>
        <div className="mb-3 font-normal text-gray-700">
          <ul className="ml-4 list-disc">
            {props.project.description.map((description, index) => (
              <li key={index} className="text-justify my-1">
                {description}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="ml-5 mb-2 mt-auto">
        {" "}
        {/* Add mt-auto to push the button to the bottom */}
        <a
          className=""
          href={props.project.githubLink}
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            data-te-tooltip="Tooltip text"
            title="Github Link"
            className="mb-2 bg-[#333] inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </button>
        </a>
        {props.project.onYouTube && (
          <a
            className=""
            href={props.project.youtubeLink}
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              data-te-tooltip="Tooltip text"
              title="Video Link"
              className="mb-2 ml-2 inline-block bg-[#ff0000] rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </button>
          </a>
        )}
      </div>
    </motion.div>
  );
};
