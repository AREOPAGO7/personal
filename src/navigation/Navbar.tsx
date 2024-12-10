import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Contact from "../components/Contact/Contact";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-zinc-950 h-fit w-[100%] ">
    <nav className="fixed top-0 2xl:left-[10%] left-0 bg-zinc-950 border-b border-neutral-800 z-50 w-[100%] 2xl:w-[80%] p-1 ">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Section: Navigation Links */}
        <ul
          className={`absolute top-16 left-0 -ml-10 w-full bg-zinc-950 origin-top transform transition-all duration-300 ease-in-out md:static md:flex md:items-center md:space-x-6 md:bg-transparent md:top-0 ${
            isMenuOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 md:opacity-100 md:scale-y-100"
          } text-sm font-inter text-neutral-300`}
        >
          <li className="block md:inline-block text-center py-2 md:py-0">
            <Link
              to="/home" // Use Link instead of <a> for routing
              className="block md:inline-block transition-colors hover:text-white"
            >
              Home
            </Link>
          </li>
          <li className="block md:inline-block text-center py-2 md:py-0">
            <Link
              to="/about" // Use Link instead of <a> for routing
              className="block md:inline-block transition-colors hover:text-white"
            >
              About
            </Link>
          </li>
          <li className="block md:inline-block text-center py-2 md:py-0">
            <Link
              to="/work" // Use Link instead of <a> for routing
              className="block md:inline-block transition-colors hover:text-white"
            >
              Work
            </Link>
          </li>
        </ul>

        <button
          type="button"
          onClick={toggleMenu}
          className="text-neutral-300 transition-colors hover:text-white md:hidden"
          aria-label="Toggle navigation"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: "pointer" }}
          >
            <rect y="8" width="22" height="2" fill="gray" />
            <rect y="20" width="22" height="2" fill="gray" />
          </svg>
        </button>

        <Contact />
        
        <div className="flex items-center space-x-4 text-neutral-300">
          <a
            href="https://github.com/AREOPAGO7"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            <i
              className="fab fa-github"
              style={{ fontSize: "20px", color: "white" }}
            ></i>
          </a>
          <a
            href="https://x.com/Anas13764089068"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            <i
              className="fab fa-twitter"
              style={{ fontSize: "20px", color: "white" }}
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anass-kalkhi-b994a72b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            <i
              className="fab fa-linkedin"
              style={{ fontSize: "20px", color: "white" }}
            ></i>
          </a>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
