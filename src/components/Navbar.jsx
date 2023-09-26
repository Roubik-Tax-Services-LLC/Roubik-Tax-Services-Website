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
          className="block md:hidden"
        >
          <img
            src={menuIcon}
            alt="menu dropdown icon"
            data-label="menu-icon"
            className="w-10"
          />
        </button>
        {/* Nav links */}
        <div className="ml-auto hidden items-center gap-8 md:flex">
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
          <Link to="/services">
            <li className="list-none font-medium transition-all hover:text-logoBlue">
              Services
            </li>
          </Link>
          <Link to="/questionaire">
            <li className="list-none font-medium transition-all hover:text-logoBlue">
              Questionaire
            </li>
          </Link>
          {/* <Link to="/reviews">
            <li className="list-none font-medium transition-all hover:text-logoBlue">
              Follow Us
            </li>
          </Link> */}
          <button
            onClick={openModal}
            className="rounded-sm bg-logoBlue hover:bg-logoHover p-2 px-5 font-medium text-white transition-all"
          >
            Contact Us
          </button>
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
