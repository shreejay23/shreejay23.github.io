import React from "react";
import { contactLinks } from "../constants";
import { motion } from "framer-motion";
import bgImg from "../assets/bg-img.png";

const Home = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url('${bgImg}')`, backgroundSize: "cover" }}
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <h3 className="text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              <motion.span className={"text-black"}>
                Hi, I am Shreejay Jahagirdar
              </motion.span>
            </h3>
            <p
              className={
                "mt-3 text-justify text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              I am currently pursuing a Master's degree in Computer Science at
              Stony Brook University and actively seeking full-time positions
              beginning in May 2024.
            </p>
            <div className="flex md:justify-start ">
              {contactLinks.map((contactLink, index) => (
                <a
                  href={contactLink.link}
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                >
                  <img alt="" src={contactLink.url} width="40" height="40" />
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
              "https://www.bdigital.co.nz/wp-content/uploads/2019/07/Graphic-workstation.gif"
            }
            // src={
            //   "https://i.pinimg.com/originals/9c/fb/09/9cfb09f0c029e1f8c938208a7e278d76.gif"
            // }
            alt=""
            className="md:w-3/6 hidden sm:block"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
