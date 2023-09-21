const circleDimensions = 350;
import Button from "../components/Button";

const HomePageAbout = ({ aboutImage }) => {
  return (
    <section>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-9 py-16 sm:px-16 md:flex-row lg:pb-32">
        <div className="relative flex h-64 justify-center md:w-1/2">
          <svg
            className="absolute -left-44 -top-24 hidden scale-75 md:-left-8 md:-top-0 md:block md:scale-90 lg:left-20 lg:scale-100"
            height={`${circleDimensions}`}
            width={`${circleDimensions}`}
          >
            <circle
              cx={`${circleDimensions / 2}`}
              cy={`${circleDimensions / 2}`}
              r={`${circleDimensions / 2}`}
              strokeWidth="0"
              fill="#61C3EB"
            />
          </svg>
          {/* PLACEHOLDER IMAGE CHANGE LATER */}
          <img
            className="absolute bottom-10 w-60 max-w-xs md:-left-10 md:-top-0 md:w-72 md:rounded lg:left-12 lg:w-80"
            src={aboutImage}
            alt="Woman cleaning a table, blue bucket on table"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-6">
            <h3 className="text-center text-5xl font-bold md:text-left">
              About Us
            </h3>
            <h4 className="text-center text-lg font-bold md:text-left">
              Serving Greenfield, WI for over 10 years
            </h4>
            <p className="font-light">
              If you’re like most Individuals or Small Businesses, you probably
              think you pay too much tax. And you’re probably right! So perhaps
              you’re considering a new tax pro this year. Most tax professionals
              do a fine job putting the "right" numbers in the "right" boxes on
              the "right" forms, but then they call it a day. It doesn’t matter
              how good your tax preparer is with a stack of receipts on April
              15. The real secret to reducing your tax bill is planning.
            </p>
            <div className="mx-auto md:mx-0">
              <Button to={"about"}>Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageAbout;
