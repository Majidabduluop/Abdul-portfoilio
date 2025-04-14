import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="font-bold font-mono text-base sm:text-lg">
          <span className="text-white">Abdul</span>
          <span className="text-blue-700">.portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 text-base lg:text-lg text-gray-300">
          <Link
            to="/"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="about"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="projects"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            to="contact"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Contacts
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-900/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={toggleMenu}
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <Link
              to="/"
              className="text-white hover:text-blue-400 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              className="text-white hover:text-blue-400 transition-colors duration-200"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="projects"
              className="text-white hover:text-blue-400 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="contact"
              className="text-white hover:text-blue-400 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Contacts
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
