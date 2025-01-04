import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  const isActive = (path) =>
    location.pathname === path ? 'text-black font-bold ' : 'text-black';

  return (
    <nav className="bg-[#FFFFF7] p-4 shadow-lg h-auto fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between w-[100%]">
        {/* Logo */}
        <div>
          <a href='https://adhyaapankaksh.com/'>
            <img
              className="w-[256.168px] h-[43.58px] lg:w-[250px] sm:w-[300px] sm:h-[50px] 3xl:w-[100%]"
              src="/main-logo.png"
              alt="Coaching Center Logo"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden font-montserrat text-[18px] lg:flex p-1 font-bold space-x-5 lg:w-[30vw] justify-center xl:gap-[3rem] xl:text-[20px] 2xl:gap-[5rem] w-auto 2xl:text-[22px] 3xl:text-[25px] 3xl:w-auto">
          <HashLink smooth to="/#home" className={isActive('/#home')}>
            Home
          </HashLink>
          <HashLink smooth to="/#about" className={isActive('/#about')}>
            About
          </HashLink>
          <HashLink smooth to="/#courses" className={isActive('/#courses')}>
            Courses
          </HashLink>
          <Link to="/gallery" className={isActive('/gallery')}>
            Gallery
          </Link>
          <Link to="/notes" className={isActive('/notes')}>
            Notes
          </Link>
          <Link to="/assignment" className={isActive('/assignment')}>
            Assignment
          </Link>
        </div>

        {/* Contact Button */}
        <div>
          <Link
            to="/contact"
            className={`lg:bg-[#F70004] font-montserrat font-semibold text-[20px] text-white px-4 py-2 rounded-[10px] w-[163px] h-[43px] 3xl:text-[23px] ${isActive(
              '/contact'
            )}`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="flex items-center lg:hidden">
          <button onClick={toggleMenu} className="text-black" aria-label="Toggle menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#FFFFF7] font-bold font-montserrat py-4 px-6">
          <HashLink smooth to="/#home" onClick={handleLinkClick} className="block py-2 text-black text-right">
            Home
          </HashLink>
          <HashLink smooth to="/#about" onClick={handleLinkClick} className="block py-2 text-black text-right">
            About
          </HashLink>
          <HashLink smooth to="/#courses" onClick={handleLinkClick} className="block py-2 text-black text-right">
            Courses
          </HashLink>
          <Link to="/gallery" onClick={handleLinkClick} className="block py-2 text-black text-right">
            Gallery
          </Link>
          <Link to="/notes" onClick={handleLinkClick} className="block py-2 text-black text-right">
            Notes
          </Link>
          <Link to="/assignment" onClick={handleLinkClick} className="block py-2 text-black text-right">
            Assignment
          </Link>
          <div className="flex justify-end">
            <Link
              to="/contact"   onClick={handleLinkClick}
              className="bg-[#F70004] font-montserrat font-semibold text-[18px] text-white px-4 py-2 rounded-[10px] w-[143px] h-[43px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
