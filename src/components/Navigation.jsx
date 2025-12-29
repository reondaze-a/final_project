import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `text-white inline-block origin-left transition-all duration-200 ${isActive ? "font-bold scale-105" : "scale-100"}`;

  return (
    <nav className="text-lg">
      {/* Hamburger menu for small screens */}
      <button
        className="text-white sm:hidden focus:outline-none z-50 hover:cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Desktop menu */}
      <div className="hidden sm:flex gap-10">
        <NavLink to="/" className={linkClasses}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClasses}>
          About
        </NavLink>
      </div>

      {/* Mobile menu */}
      <div
        className={
          `sm:hidden absolute top-11/12 bg-gray-800 w-full
          left-0 right-0 overflow-hidden
          shadow-lg py-4 px-10 flex flex-col gap-4 transition-all duration-300 ease-out transform
          ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 origin-top pointer-events-none"
        }`}
      >
        <NavLink 
          to="/" 
          className={linkClasses}
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={linkClasses}
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}