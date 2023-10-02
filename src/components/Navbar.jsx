/* eslint-disable react/prop-types */
import "../App.css";
import menuIcon from "../assets/menuIcon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/Logo.png";
import MobileNavbar from "./MobileNavbar";

function Navbar({ openModal }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-white drop-shadow-sm">
      <nav className="top-0 z-10 flex items-center justify-between px-3 py-6 sm:px-9 md:px-4">
        <Link to="/">
          <div
            className="flex items-center gap-2"
            onClick={() => setShowMenu(false)}
          >
            <img
              src={Logo}
              alt="Roubik Tax Services logo"
              className="h-8 lg:h-12"
            />
            {/*    */}
          </div>
        </Link>
        {/* Menu icon Button */}
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="block lg:hidden"
        >
          <img
            src={menuIcon}
            alt="menu dropdown icon"
            data-label="menu-icon"
            className="w-10"
          />
        </button>
        {/* Nav links */}
        <div className="ml-auto hidden items-center gap-8 lg:flex">
          <Link to="/">
            <li className="list-none font-medium transition-all hover:text-logoBlue">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="list-none font-medium transition-all hover:text-logoBlue">
              About
            </li>
          </Link>
          <Link to="/taxplanning">
            <li className="list-none font-medium transition-all hover:text-logoBlue">
              Tax Planning
            </li>
          </Link>
          <Link to="/taxprep">
            <li className="list-none font-medium transition-all hover:text-logoBlue">
              Tax Preparation
            </li>
          </Link>
          {/* <Link to="/questionnaire">
            <li className="list-none font-medium transition-all hover:text-logoBlue">
              Questionnaire
            </li>
          </Link> */}
          <Link to="/resources">
            <li className="list-none font-medium transition-all hover:text-logoBlue">
              Resources
            </li>
          </Link>
          <a
            href="https://login2.atomanager.com/ATOM_FTSFRANCHISE/WebInfo.aspx"
            target="_blank"
            rel="noreferrer"
            className="rounded-sm bg-logoBlue hover:bg-logoHover p-2 px-5 font-medium text-white transition-all"
          >
            Client Portal
          </a>
        </div>
      </nav>
      {/* Mobile Nav */}
      {showMenu && (
        <MobileNavbar openModal={openModal} setShowMenu={setShowMenu} />
      )}
    </header>
  );
}

export default Navbar;
