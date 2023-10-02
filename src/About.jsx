import ContactInfo from "./components/ContactInfo";
import { useEffect, useState } from "react";
import diana from "./assets/Diana.png";
import joe from "./assets/Joe.png";
import { HashLoader } from "react-spinners";
import { scrollToTop } from "./utils/scrollToTop";
const circleDimensions = 350;

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = () => {
      const imagePromises = [
        new Promise((resolve) => {
          const img1 = new Image();
          img1.src = diana;
          img1.onload = resolve;
        }),
        new Promise((resolve) => {
          const img2 = new Image();
          img2.src = joe;
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
        <div className="pb-16">
          <ContactInfo />
          <div className="px-9 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
                Meet the Team
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Our{" "}
                <span className="uppercase text-logoHover font-semibold ">
                  mission
                </span>{" "}
                is to significantly improve our clients, community, and
                ourselves by constantly striving to achieve beyond caring
                relationships, excellence in knowledge and education, and
                service beyond expectations.
              </p>
              <p className="text-base text-gray-700 md:text-lg py-4">
                Our{" "}
                <span className="uppercase text-logoHover font-semibold ">
                  vision
                </span>{" "}
                is to significantly improve our clients, community, and
                ourselves through becoming the most trusted for our vision,
                education, and service.
              </p>
            </div>
          </div>
          <div>
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-9 py-10 sm:px-16 md:flex-row md:pb-24 lg:pb-32 lg:py-10">
              <div className="relative flex h-64 justify-center md:w-1/2">
                <svg
                  className="absolute -left-44 -top-24 hidden scale-75 md:-left-8 md:-top-0 md:block md:scale-75 lg:left-20 lg:scale-90"
                  height={`${circleDimensions}`}
                  width={`${circleDimensions}`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0"
                    y="0"
                    width={`${circleDimensions}`}
                    height={`${circleDimensions}`}
                    rx="10" // Adjust the value to control the roundness of the edges
                    ry="10" // Adjust the value to control the roundness of the edges
                    fill="#61C3EB"
                  />
                </svg>

                {/* PLACEHOLDER IMAGE CHANGE LATER */}
                <img
                  className="absolute bottom-10 w-60 max-w-xs md:-left-10 md:-top-0 md:w-72 md:rounded lg:left-12 lg:w-80"
                  src={joe}
                  alt="Joe Roubik Picture"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex flex-col gap-6">
                  <h3 className="text-center text-4xl font-semibold md:text-left">
                    Joseph Roubik
                  </h3>
                  <h4 className="text-center text-lg font-semibold md:text-left">
                    Tax Advisor
                  </h4>
                  <p className="font-light">
                    Joe holds a Masters degree in Business Administration from
                    Cardinal Stritch University and a Bachelors of Arts degree
                    in Sociology and Interpersonal Communications from
                    Marquette.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-9 py-10 sm:px-16 md:flex-row lg:pb-32 lg:py-10">
              <div className="relative flex h-64 justify-center md:w-1/2">
                <svg
                  className="absolute -left-44 -top-24 hidden scale-75 md:-left-8 md:-top-0 md:block md:scale-75 lg:left-20 lg:scale-90"
                  height={`${circleDimensions}`}
                  width={`${circleDimensions}`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0"
                    y="0"
                    width={`${circleDimensions}`}
                    height={`${circleDimensions}`}
                    rx="10" // Adjust the value to control the roundness of the edges
                    ry="10" // Adjust the value to control the roundness of the edges
                    fill="#61C3EB"
                  />
                </svg>

                {/* PLACEHOLDER IMAGE CHANGE LATER */}
                <img
                  className="absolute bottom-10 w-60 max-w-xs md:-left-10 md:-top-0 md:w-72 md:rounded lg:left-12 lg:w-80"
                  src={diana}
                  alt="Diana picture"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex flex-col gap-6">
                  <h3 className="text-center text-4xl font-semibold md:text-left">
                    Diana Nuñez
                  </h3>
                  <h4 className="text-center text-lg font-semibold md:text-left">
                    Administrative Assistant
                  </h4>
                  <p className="font-light">
                    Diana received her Bachelor’s Degree in International
                    Business and Communications from Cardinal Stritch
                    University.
                  </p>
                </div>
              </div>
            </div>
            {/* <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={joe}
                    alt="Person"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-1 text-lg font-bold text-gray-100">
                      Joe Roubik
                    </p>
                    <p className="mb-4 text-xs text-gray-100">Tax Advisor</p>
                    <p className="mb-4 text-s tracking-wide text-gray-400">
                      Joe holds a Masters degree in Business Administration from
                      Cardinal Stritch University and a Bachelors of Arts degree
                      in Sociology and Interpersonal Communications from
                      Marquette.
                    </p>
                  </div>
                </div>
              </div> */}

            {/* <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={diana}
                    alt="Person"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-1 text-lg font-bold text-gray-100">
                      Diana Nuñez
                    </p>
                    <p className="mb-4 text-xs text-gray-100">
                      Administrative Assistant
                    </p>
                    <p className="mb-4 text-s tracking-wide text-gray-400">
                      Diana received her Bachelor’s Degree in International
                      Business and Communications from Cardinal Stritch
                      University.
                    </p>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default About;
