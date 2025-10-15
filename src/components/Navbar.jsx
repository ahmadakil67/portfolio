import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./global.css"; // Ensure global styles are imported

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Effect to handle body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  const linkClasses =
    "relative cursor-pointer transition-all duration-300 hover:text-cyan-500 before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px] before:bg-cyan-500 before:transition-all before:duration-300 hover:before:w-full";
  const activeClass = "text-cyan-500 before:w-full";

  const navLinks = (
    <>
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={linkClasses}
        activeClass={activeClass}
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>

      <Link
        to="experience"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={linkClasses}
        activeClass={activeClass}
        onClick={() => setIsOpen(false)}
      >
        Experience
      </Link>

      {/* 🔹 NEW: Skills link after Experience */}
      <Link
        to="skills"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={linkClasses}
        activeClass={activeClass}
        onClick={() => setIsOpen(false)}
      >
        Skills
      </Link>

      <Link
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={linkClasses}
        activeClass={activeClass}
        onClick={() => setIsOpen(false)}
      >
        Projects
      </Link>
      <Link
        to="education"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={linkClasses}
        activeClass={activeClass}
        onClick={() => setIsOpen(false)}
      >
        Education
      </Link>
      <Link
        to="research"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={linkClasses}
        activeClass={activeClass}
        onClick={() => setIsOpen(false)}
      >
        Research
      </Link>
      <Link
        to="achievements"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={linkClasses}
        activeClass={activeClass}
        onClick={() => setIsOpen(false)}
      >
        Achievements
      </Link>
    </>
  );

  return (
    <>
      <nav className="fixed left-1/2 top-4 transform -translate-x-1/2 w-11/12 sm:w-1/2 max-w-6xl mx-auto rounded-full z-50 bg-opacity-20 backdrop-blur-lg shadow-lg">
        <div className="px-6 py-4 flex justify-between items-center">
          {/* Hamburger Icon for Mobile */}
          <div className="sm:hidden flex justify-between items-center w-full">
            <p className="text-white text-xl style-script-regular font-semibold tracking-wider">
              Ahmad Akil
            </p>
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none z-50"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
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
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16"}
                />
              </svg>
            </button>
          </div>

          {/* Navbar Links for Desktop */}
          <div className="hidden sm:flex space-x-8 text-white justify-center">
            {navLinks}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`sm:hidden fixed top-0 right-0 h-full w-1/2 z-40 bg-[#000319] bg-opacity-95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-end justify-center h-3/4">
          <ul className="space-y-8 text-white flex flex-col text-sm text-right mr-7">
            {navLinks}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
