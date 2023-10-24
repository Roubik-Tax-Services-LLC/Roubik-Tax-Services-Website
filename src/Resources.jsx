import ContactInfo from "./components/ContactInfo";
import state from "./assets/state.png";
import federal from "./assets/federal.png";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import { scrollToTop } from "./utils/scrollToTop";

const Resources = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = () => {
      const imagePromises = [
        new Promise((resolve) => {
          const img1 = new Image();
          img1.src = state;
          img1.onload = resolve;
        }),
        new Promise((resolve) => {
          const img2 = new Image();
          img2.src = federal;
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
    <div>
      {isLoading ? (
        <div className="mt-40 flex h-screen items-start justify-center">
          <HashLoader size={"100"} color={"#61C3EB"} />
        </div>
      ) : (
        <div>
          <ContactInfo />
          <h1 className="font-semibold text-2xl sm:text-4xl text-center pt-6 sm:pt-16">
            Where is my refund?
          </h1>
          <div className="px-4 pt-6 pb-16 sm:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
              <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                <div className="relative">
                  <img
                    className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                    src={federal}
                    alt="Federal tax return picture"
                  />
                  <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                </div>
                <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                  <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                    Federal
                  </h5>
                  <p className="mb-5 text-gray-700">
                    Click the button below to track your federal refund.
                  </p>
                  <a
                    href="https://www.irs.gov/refunds"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-logoBlue hover:bg-logoHover focus:shadow-outline focus:outline-none"
                    >
                      Federal
                    </button>
                  </a>
                </div>
              </div>
              <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                <div className="relative">
                  <img
                    className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                    src={state}
                    alt="State tax return picture"
                  />
                  <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                </div>
                <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                  <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                    State
                  </h5>
                  <p className="mb-5 text-gray-700">
                    Click one of the buttons below to track your state refund.
                  </p>
                  <a
                    href="https://tap.revenue.wi.gov/RefundStatus/_/#2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="inline-flex items-center justify-center h-12 px-9 mr-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-logoBlue hover:bg-logoHover focus:shadow-outline focus:outline-none">
                      WI
                    </button>
                  </a>
                  <a
                    href="https://taxadmin.org/fta-members/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="inline-flex items-center justify-center ml-3 h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-logoBlue hover:bg-logoHover focus:shadow-outline focus:outline-none">
                      State
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resources;
