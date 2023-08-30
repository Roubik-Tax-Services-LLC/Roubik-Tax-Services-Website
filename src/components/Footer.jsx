// import twitter from "../assets/twitter-sign.png";
// import facebook from "../assets/facebook.png";
// import linkedin from "../assets/linkedin.png";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between px-16 py-8 md:flex-row md:px-8">
        <Link to="/">
          <div className="md: flex items-center gap-2 pb-4">
            <img
              src={Logo}
              alt="Roubik Service Logo"
              className="w-36 sm:w-40 md:w-44"
            />
          </div>
        </Link>
        <div>
          <ul className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:gap-6 md:text-left">
            <Link to="/about">
              <li className="text-md w-20 font-bold transition-all hover:text-logoBlue md:w-20 lg:w-32 lg:text-lg">
                About
              </li>
            </Link>
            <Link to="/services">
              <li className="text-md w-20 font-bold transition-all hover:text-logoBlue md:w-20 lg:w-32 lg:text-lg">
                Services
              </li>
            </Link>
            <Link to="/reviews">
              <li className="text-md w-20 font-bold transition-all hover:text-logoBlue md:w-20 lg:w-32 lg:text-lg">
                Reviews
              </li>
            </Link>
            <div>
              <li
                // onClick={openModal}
                className="text-md text-center font-bold transition-all hover:cursor-pointer hover:text-logoBlue md:w-24 md:text-left lg:w-32 lg:text-lg"
              >
                Contact Us
              </li>
              <div>
                <ul className="flex flex-col items-center text-xs md:block md:text-sm">
                  <a
                    href="tel:+14536780978"
                    className="transition-all hover:text-logoBlue"
                  >
                    <li>(453) 678-0978</li>
                  </a>
                  <a
                    href="mailto:joe@roubiktaxservices.com"
                    className="transition-all hover:text-logoBlue"
                  >
                    <li>joe@roubiktaxservices.com</li>
                  </a>
                </ul>
              </div>
            </div>
            {/* <ul className="flex md:hidden">
              <li className="px-1">
                <a
                  href="https://twitter.com/CleanChoiceWI"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitter} alt="Twitter icon" className="w-6" />
                </a>
              </li>
              <li className="px-1">
                <a
                  href="https://www.facebook.com/profile.php?id=100063456492630"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={facebook} alt="Facebook icon" className="w-6" />
                </a>
              </li>
              <li className="px-1">
                <a
                  href="https://www.linkedin.com/in/michelle-roubik-lee/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="Linkedin icon" className="w-6" />
                </a>
              </li>
            </ul> */}
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
