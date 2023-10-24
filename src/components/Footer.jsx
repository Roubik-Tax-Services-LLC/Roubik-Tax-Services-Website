import linkedin from "../assets/linkedin.png";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-200">
      {/* <div className="px-4 py4 mx-auto max-w-full "> */}

      <div className="mx-auto flex max-w-full flex-col items-center justify-around px-16 py-8 md:flex-row md:px-8">
        <div className="sm:col-span-2 basis-1/2">
          <Link to="/">
            <div className="justify-center gap-2 pb-4 md:flex">
              <img src={Logo} alt="Roubik Tax Services icon" className="h-16" />
            </div>
          </Link>
        </div>
        <div className="space-y-2 text-sm basis-1/2">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="text-xs mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:(453) 678-0978"
              aria-label="Our phone"
              title="Our phone"
              className="text-xs transition-colors duration-300 text-logoHover"
            >
              414-316-6006
            </a>
          </div>
          <div className="flex">
            <p className="text-xs mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:joe@roubiktaxservices.com"
              aria-label="Our email"
              title="Our email"
              className="text-xs transition-colors duration-300 text-logoHover"
            >
              info@roubiktax.com
            </a>
          </div>
          <div className="flex">
            <p className="text-xs mr-1 text-gray-800">Address:</p>
            <a
              href="https://maps.app.goo.gl/rNaAYmVgKRtTC8gp6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="text-xs transition-colors duration-300 text-logoHover"
            >
              7111 W. Edgerton Ave., Suite 302 Greenfield, WI 53220
            </a>
          </div>
          <div className="flex">
            <p className="text-xs mr-1 text-gray-800">LinkedIn:</p>
            <a
              href="https://linkedin.com/company/roubik-tax-services"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our LinkedIn"
              title="Our LinkedIn"
              className="text-xs transition-colors duration-300 text-logoHover"
            >
              Roubik Tax Services LLC
            </a>
          </div>
        </div>
        {/* <div className="basis-1/4">
          <span className="text-base font-bold tracking-wide text-gray-900">
            Follow Us
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a href="" target="_blank" rel="noreferrer">
              <div className="ml-7 py-1">
                <img src={linkedin} alt="Linkedin icon" className="w-6" />
              </div>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
