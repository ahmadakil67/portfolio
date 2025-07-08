import React, { useState } from "react";
import { Link } from "react-scroll";
import "./global.css"; // Ensure global styles are imported
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClasses =
    "relative cursor-pointer transition-all duration-300 hover:text-cyan-500 before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px] before:bg-cyan-500 before:transition-all before:duration-300 hover:before:w-full";
  const activeClass = "text-cyan-500 before:w-full";

  return (
    <nav className="fixed left-1/2 top-4 transform -translate-x-1/2 w-full sm:w-1/2 max-w-6xl mx-auto rounded-full z-100 bg-opacity-20 backdrop-blur-lg shadow-lg">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Hamburger Icon for Mobile */}
        <div className="sm:hidden flex justify-between items-center w-full">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <p className="text-white text-xl style-script-regular font-semibold tracking-wider">
            Ahmad Akil
          </p>
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden sm:flex space-x-8 text-white justify-center w-full">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            className={`${linkClasses}`}
          >
            Home
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            className={`${linkClasses}`}
          >
            Experience
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            className={`${linkClasses}`}
          >
            Projects
          </Link>
          <Link
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            className={`${linkClasses}`}
          >
            Education
          </Link>
          <Link
            to="research"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            className={`${linkClasses}`}
          >
            Research
          </Link>
          <Link
            to="achievements"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            className={`${linkClasses}`}
          >
            Achievements
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden bg-[#000319] text-white px-6 py-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="space-y-4 flex flex-col items-center">
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
              activeClass="active"
              className={`${linkClasses}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
              activeClass="active"
              className={`${linkClasses}`}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
              activeClass="active"
              className={`${linkClasses}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
              activeClass="active"
              className={`${linkClasses}`}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="research"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
              activeClass="active"
              className={`${linkClasses}`}
            >
              Research
            </Link>
          </li>
          <li>
            <Link
              to="achievements"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
              activeClass="active"
              className={`${linkClasses}`}
            >
              Achievements
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
