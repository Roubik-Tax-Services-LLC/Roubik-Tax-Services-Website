import checkIcon from "../../assets/checkIcon.svg";
import { Link } from "react-router-dom";
import Button from "../Button";
import ClientPortal from "../ClientPortal";
import ClientQuestionnaire from "../ClientQuestionnaire";

const HomePageServices = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-9 py-8 sm:px-16 gap-5 lg:py-20">
        <h3 className="font-semibold text-center text-3xl">Our Services</h3>
        <div className="flex gap-8 md:gap-16 flex-col md:flex-row">
          <div className="md:w-1/2 w-full">
            <Link to="/services">
              <h4 className="font-semibold text-lg underline text-logoBlue hover:text-logoHover text-center pb-4 transition-all">
                Tax Planning
              </h4>
            </Link>
            <p className="flex gap-4 pb-4">
              <img className="w-8" src={checkIcon} alt="check mark icon" />
              Leverage deductions, credits, and exemptions to reduce the amount
              of taxes owed
            </p>
            <p className="flex gap-4 pb-4">
              <img className="w-8" src={checkIcon} alt="check mark icon" />
              Maximize cash flow
            </p>
            <p className="flex gap-4">
              <img className="w-8" src={checkIcon} alt="check mark icon" />
              Achieve long-term financial goals for wealth preservation and
              retirement
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <Link to="/services">
              <h4 className="font-semibold text-lg underline text-logoBlue hover:text-logoHover text-center pb-4 transition-all">
                Tax Preparation
              </h4>
            </Link>
            <p className="flex gap-4 pb-4">
              <img className="w-8" src={checkIcon} alt="check mark icon" />
              We adhere to tax laws and regulations while optimizing your
              financial outcomes
            </p>
            <p className="flex gap-4 pb-4">
              <img className="w-8" src={checkIcon} alt="check mark icon" />
              Maximize deductions and credits
            </p>
            <p className="flex gap-4 pb-4">
              <img className="w-8" src={checkIcon} alt="check mark icon" />
              Quick and easy, E-filing, direct redeposit refunds and tax
              deduction review
            </p>
          </div>
        </div>
        <div className="md:flex lg:gap-10 md:gap-4 md:flex-row hidden lg:py-5">
          <ClientQuestionnaire />
          <Button to={"services"}>Learn More</Button>
          <ClientPortal />
        </div>
        <div className="flex flex-col gap-4 items-center md:hidden lg:py-5">
          <ClientQuestionnaire />
          <ClientPortal />
          <Button to={"services"}>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePageServices;
