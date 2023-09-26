import ContactInfo from "./components/ContactInfo";

const Services = () => {
  return (
    <>
      <ContactInfo />
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-logoHover uppercase rounded-full">
              Our Services
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              
              <span className="relative">Tax</span>
            </span>{' '}
            Planning and Preparation
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          We can prepare and file your State and Federal Income Tax Returns regardless of your location within the continental USA.
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-8 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">Tax Planning</h6>
              <p className="mb-3 text-sm text-gray-900">
              Reduce the amount of taxes owed by leveraging deductions, credits, and exemptions provided by tax laws.
              </p>
              <p className="mb-3 text-sm text-gray-900">
              Improve cash flow by minimizing tax expenses. This additional cash can be directed towards fostering financial growth.
              </p>
              <p className="mb-3 text-sm text-gray-900">
              Achieve long-term financial objectives and becomes a valuable tool for retirement planning and wealth preservation.
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-8 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Tax Preparation
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                We ensure that individuals and businesses adhere to tax laws and regulations while optimizing their financial outcomes.
              </p>
              <p className="mb-3 text-sm text-gray-900">
                Accurate tax preparation helps prevent costly penalties, audits, and legal issues, promoting financial stability and peace of mind.
              </p>
              <p className="mb-3 text-sm text-gray-900">
                With us, idividuals and businesses maximize deductions and credits, leading to lower tax bills and greater savings.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
