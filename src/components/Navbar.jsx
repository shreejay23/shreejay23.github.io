import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const links = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About Me",
      route: "about",
    },
    {
      name: "Educations",
      route: "educations",
    },
    {
      name: "Experience",
      route: "experience",
    },
    {
      name: "Projects",
      route: "projects",
    },
  ];

  return (
    <>
      <nav
        className={
          "bg-white border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0"
        }
      >
        <div className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto">
          <div className="flex items-center cursor-pointer">
            <a
              href="/"
              className={
                "text-xl font-medium text-decoration-none whitespace-nowrap text-black"
              }
            >
              {`SVJ`}
            </a>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto ">
            <ul
              className={
                "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium"
              }
            >
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    key={index}
                    to={link.route}
                    activeClass={"text-white bg-[#02cc99]"}
                    className={
                      "hover:bg-[#02cc99] text-black block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white cursor-pointer"
                    }
                    spy={true}
                    smooth={true}
                    onClick={() => setToggle(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex md:hidden items-center">
            <Hamburger
              toggled={toggle}
              size={22}
              duration={0.4}
              distance={"lg"}
              toggle={setToggle}
              color={"#000000"}
            />
          </div>
        </div>
        {/* Mobile view nav bar */}
      </nav>
      {toggle && (
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0, transition: { type: "spring" } }}
          exit={{ x: 200, transition: { type: "spring" } }}
          className={
            "bg-white py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
          }
        >
          <ul className="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.route}
                activeClass={"text-white bg-[#02cc99]"}
                className={
                  "hover:bg-[#02cc99] text-black block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white cursor-pointer"
                }
                spy={true}
                smooth={true}
                onClick={() => setToggle(false)}
              >
                <li key={index}>{link.name}</li>
              </Link>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
