import ContactInfo from "./components/ContactInfo";
import { useEffect, useState } from "react";
import diana from "./assets/diana1.png";
import joe from "./assets/joe1.png";
import { HashLoader } from "react-spinners";
import { scrollToTop } from "./utils/scrollToTop";

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
        <div>
          <ContactInfo />
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-logoHover uppercase rounded-full">
                  Core Team
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <span className="relative">Welcome</span>
                </span>{" "}
                our talented team of professionals
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
            <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-3">
              <div>
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
              </div>

              <div>
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
              </div>

              {/* Mobile */}
              <div>
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={joe}
                  alt="Person"
                />
                <div className="flex flex-col justify-center mt-2">
                  <p className="text-lg font-bold">Joe Roubik</p>
                  <p className="mb-4 text-xs text-gray-800">Tax Advisor</p>
                  <p className="text-sm tracking-wide text-gray-800">
                    Joe holds a Masters degree in Business Administration from
                    Cardinal Stritch University and a Bachelors of Arts degree
                    in Sociology and Interpersonal Communications from
                    Marquette.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
