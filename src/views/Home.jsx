import React from "react";
import { contactLinks } from "../resume_content/contactLinks";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div>
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              <motion.span className={"text-black"}>
                Hi, I am Shreejay Jahagirdar
              </motion.span>
            </h1>
            <p
              className={
                "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              I am a Software Engineer currently working at Google.
            </p>
            <div className="flex md:justify-start ">
              {contactLinks.map((contactLink, index) => (
                <a
                  target="_blank"
                  key={index}
                  href={contactLink.link}
                  title={"My " + contactLink.name}
                  className="mr-5 cursor-pointer mt-8 hover:scale-125" rel="noreferrer"
                >
                  <img alt={contactLink.alt} src={contactLink.url} width="40" height="40" />
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                {/* <Link className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                  Resume
                </Link> */}
              </div>
            </div>
          </div>
          <motion.img
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
            src={
              "https://cdn.prod.website-files.com/659f77ad8e06050cc27ed531/65ef63f6bd30ab838939a4ae_Developer%20productivity%20tools%202024.webp"
            }
            alt=""
            className="md:w-3/6 hidden sm:block"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
