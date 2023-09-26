/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Button = ({ to, children }) => {
  return (
    <Link to={`/${to}`}>
      <p className="w-52 sm:my-0 rounded bg-logoBlue py-3 text-center text-xl font-bold text-white transition-all hover:bg-logoHover lg:inline-block">
        {children}
      </p>
    </Link>
  );
};

export default Button;
