import ContactInfo from "./components/ContactInfo";
import ClientPortal from "./components/ClientPortal";
import ClientQuestionnaire from "./components/ClientQuestionnaire";
import taxPreparation from "./assets/taxplanning2.jpg";
import taxPlanning from "./assets/taxplanning.jpg";
import { HashLoader } from "react-spinners";
import { scrollToTop } from "./utils/scrollToTop";
import { useEffect, useState } from "react";

const TaxPreparation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = () => {
      const imagePromises = [
        // new Promise((resolve) => {
        //   const img1 = new Image();
        //   img1.src = taxPreparation;
        //   img1.onload = resolve;
        // }),
        new Promise((resolve) => {
          const img2 = new Image();
          img2.src = taxPlanning;
          img2.onload = resolve;
        }),
      ];

      Promise.all(imagePromises).then(() => {
        setIsLoading(false);
        scrollToTop();
      });
    };

    // Set the loading state to true initially
    setIsLoading(true);

    // Call the function to load the images
    loadImages();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="mt-40 flex h-screen items-start justify-center">
          <HashLoader size={"100"} color={"#61C3EB"} />
        </div>
      ) : (
        <>
          <ContactInfo />
          <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
            <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
              <div className="relative hidden md:block">
                <img
                  className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
                  src={taxPlanning}
                  alt="tax forms picture"
                />
              </div>
              <div className="lg:py-3 lg:pr-16">
                <div className="max-w-xl mb-5 md:mx-auto lg:max-w-2xl">
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    Tax Preparation
                  </h2>
                  <p className="text-base text-gray-700 md:text-lg">
                    We can prepare and file your State and Federal Income Tax
                    Returns regardless of your location within the continental
                    USA.
                  </p>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-4 text-gray-600"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-4">
                    <p className="mb-2 text-lg font-bold">Step 1</p>
                    <p className="text-gray-700">
                      Complete our online{" "}
                      <a
                        className="underline hover:text-logoHover font-semibold"
                        href="./components/ClientQuestionnaire.jsx"
                      >
                        Client Questionnaire
                      </a>
                      .
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-4 text-gray-600"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-4">
                    <p className="mb-2 text-lg font-bold">Step 2</p>
                    <p className="text-gray-700">
                      Create an account and login to our secure{" "}
                      <a
                        className="underline hover:text-logoHover font-semibold"
                        href="https://login.atomanager.com/ATOM_RBK/WebInfo.aspx"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Client Portal
                      </a>
                      . Submit this year's important tax documents (or US Mail,
                      fax, or locally by appointment).
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-4 text-gray-600"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-4">
                    <p className="mb-2 text-lg font-bold">Step 3</p>
                    <p className="text-gray-700">
                      Call (414) 316-6006 to schedule FREE client consultation
                      and review of documents.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-4 text-gray-600"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-4">
                    <p className="mb-2 text-lg font-bold">Step 4</p>
                    <p className="text-gray-700">
                      We prepare and review your tax return (Direct calls to you
                      for clarification, if necessary).
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-4 text-gray-600"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-4">
                    <p className="mb-2 text-lg font-bold">Step 5</p>
                    <p className="text-gray-700">
                      We deliver and review your completed tax returns (Secure
                      Portal, Mail, or locally by appointment)
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-6 text-gray-600"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <polyline
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            points="6,12 10,16 18,8"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="mb-2 text-lg font-bold">Success</p>
                    <p className="text-gray-700" />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="mt-12 justify-center md:flex lg:gap-10 md:gap-4 md:flex-row">
              <ClientQuestionnaire />
              <ClientPortal />
            </div> */}
          </div>
        </>
      )}
    </>
  );
};

export default TaxPreparation;
