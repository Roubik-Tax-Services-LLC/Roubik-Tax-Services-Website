/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import phone from "../assets/phone.svg";
import { useEffect, useRef } from "react";

const MobileNavbar = ({ setShowMenu, openModal }) => {
  const mobileNavbarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Check if the clicked element has the "menu-icon" label
      const isMenuIconClicked = e.target.dataset.label === "menu-icon";

      // If the clicked element is the menu icon button, don't close the mobile navbar
      if (
        !isMenuIconClicked &&
        mobileNavbarRef.current &&
        !mobileNavbarRef.current.contains(e.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setShowMenu]);

  return (
    <div className="absolute z-20 h-[calc(100vh_-_100px)] w-full border bg-black bg-opacity-50 md:hidden">
      <div
        ref={mobileNavbarRef}
        className="z-20 w-full border-t-2 border-gray-400 bg-slate-100"
      >
        <ul className="mx-4 pb-2 text-xl">
          <Link to="/about">
            <li
              onClick={() => setShowMenu(false)}
              className="border-b border-gray-300 py-4 transition-all hover:text-logoBlue"
            >
              About Us
            </li>
          </Link>

          <Link to="/services">
            <li
              onClick={() => setShowMenu(false)}
              className="border-b border-gray-300 py-4 transition-all hover:text-logoBlue"
            >
              Services
            </li>
          </Link>

          <Link to="/questionnaire">
            <li
              onClick={() => setShowMenu(false)}
              className="border-b border-gray-300 py-4 transition-all hover:text-logoBlue"
            >
              Questionnaire
            </li>
          </Link>
          {/* <Link to="/Reviews">
            <li
              onClick={() => setShowMenu(false)}
              className="border-b border-gray-300 py-4 transition-all hover:text-logoBlue"
            >
              Follow Us
            </li>
          </Link> */}
          {/* <Link> */}
          <div
            onClick={() => setShowMenu(false)}
            className="m-2 flex justify-center"
          >
            <button
              onClick={openModal}
              className="mb-3 w-full rounded border-2 border-white bg-logoBlue px-8 py-2 text-center text-lg font-bold text-white transition-all hover:bg-logoHover"
            >
              Contact Us
            </button>
          </div>
          {/* </Link> */}
          <li className="flex justify-center gap-2 border-b border-gray-300 pb-4 text-slate-500">
            <img src={phone} alt="Phone icon" className="w-6" />
            <a
              href="tel:4536780978"
              className="transition-all hover:text-logoBlue"
            >
              (453)678-0978
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
