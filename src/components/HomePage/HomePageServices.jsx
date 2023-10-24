import checkIcon from "../../assets/checkIcon.svg";
import { Link } from "react-router-dom";
import Button from "../Button";
import ClientPortal from "../ClientPortal";
import ClientQuestionnaire from "../ClientQuestionnaire";

const HomePageServices = ({ taxPlanning, taxPrep }) => {
  return (
    <div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-9 py-8 sm:px-16 gap-5 lg:py-20">
        <h3 className="font-semibold text-center text-3xl">Our Services</h3>
        <div className="mt-5 flex gap-8 md:gap-16 flex-col md:flex-row">
          <div className="my-3 lg:w-1/2 w-full">
            <h4 className="font-semibold text-lg text-center pb-4 transition-all">
              Tax Planning
            </h4>

            <p className="flex gap-4 pb-4">
              <img
                className="w-6 sm:w-8"
                src={checkIcon}
                alt="check mark icon"
              />
              Leverage deductions, credits, and exemptions to reduce the amount
              of taxes owed
            </p>
            <p className="flex gap-4 pb-4">
              <img
                className="w-6 sm:w-8"
                src={checkIcon}
                alt="check mark icon"
              />
              Maximize cash flow
            </p>
            <p className="flex gap-4 pb-4">
              <img
                className="w-6 sm:w-8"
                src={checkIcon}
                alt="check mark icon"
              />
              Achieve long-term financial goals for wealth preservation and
              retirement
            </p>
            <div className="flex justify-center m-5">
              <Button to={"taxplanning"}>Tax Planning</Button>
            </div>
          </div>
          <div className="my-3 lg:w-1/2 w-full">
            <h4 className="font-semibold text-lg text-center pb-4 transition-all">
              Tax Preparation
            </h4>
            <p className="flex gap-4 pb-4">
              <img
                className="w-6 sm:w-8"
                src={checkIcon}
                alt="check mark icon"
              />
              We adhere to tax laws and regulations while optimizing your
              financial outcomes
            </p>
            <p className="flex gap-4 pb-4">
              <img
                className="w-6 sm:w-8"
                src={checkIcon}
                alt="check mark icon"
              />
              Maximize deductions and credits
            </p>
            <p className="flex gap-4 pb-4">
              <img
                className="w-6 sm:w-8"
                src={checkIcon}
                alt="check mark icon"
              />
              Quick and easy, E-filing, direct redeposit refunds and tax
              deduction review
            </p>
            <div className="flex justify-center m-5">
              <Button to={"taxprep"}>Tax Preparation</Button>
            </div>
          </div>
        </div>

        {/* <div className="md:flex lg:gap-10 md:gap-4 md:flex-row hidden lg:py-5"> */}
        {/* <ClientQuestionnaire /> */}
        {/* <Button to={"services"}>Tax Planning</Button> */}
        {/* <ClientPortal /> */}
        {/* <Button to={"services"}>Tax Preparation</Button> */}

        {/* </div> */}
        {/* <div className="flex flex-col gap-4 items-center md:hidden lg:py-5"> */}
        {/* <ClientQuestionnaire /> */}
        {/* <ClientPortal /> */}
        {/* <Button to={"services"}>Tax Planning</Button> */}
        {/* <Button to={"services"}>Tax Preparation</Button> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default HomePageServices;
