import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-center fixed top-0 w-full text-white shadow-lg font-serif">
      <ul className="flex justify-center space-x-8 py-4">
        <li className="relative group">
          <Link to="/" className="px-4 py-2 text-lg tracking-wide transition-colors duration-300 group-hover:text-cyan-400">
            Home
          </Link>
          <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-90 transition-transform duration-300"></span>
        </li>
        <li className="relative group">
          <Link to="/about" className="px-4 py-2 text-lg tracking-wide transition-colors duration-300 group-hover:text-cyan-400">
            About
          </Link>
          <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-90 transition-transform duration-300"></span>
        </li>
        <li className="relative group">
          <Link to="/article" className="px-4 py-2 text-lg tracking-wide transition-colors duration-300 group-hover:text-cyan-400">
            Article
          </Link>
          <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-90 transition-transform duration-300"></span>
        </li>
        <li className="relative group">
          <Link to="/articles-list" className="px-4 py-2 text-lg tracking-wide transition-colors duration-300 group-hover:text-cyan-400">
            Articles List
          </Link>
          <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-90 transition-transform duration-300"></span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
