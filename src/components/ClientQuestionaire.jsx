/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to={`/questionaire`}>
      <p className="w-60 rounded bg-logoBlue py-3 text-center text-xl font-bold text-white transition-all hover:bg-logoHover lg:inline-block">
        Client Questionaire
      </p>
    </Link>
  );
};

export default Button;
