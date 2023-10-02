import ContactInfo from "./components/ContactInfo";
import ClientPortal from "./components/ClientPortal";
import ClientQuestionnaire from "./components/ClientQuestionnaire";
import taxPreparation from "./assets/taxplanning2.jpg";
import taxPlanning from "./assets/taxplanning.jpg";
import lightBulb from "./assets/light-bulb.png";
import like from "./assets/like.png";
import { HashLoader } from "react-spinners";
import { scrollToTop } from "./utils/scrollToTop";
import { useEffect, useState } from "react";

const TaxPlanning = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = () => {
      const imagePromises = [
        new Promise((resolve) => {
          const img1 = new Image();
          img1.src = lightBulb;
          img1.onload = resolve;
        }),
        new Promise((resolve) => {
          const img2 = new Image();
          img2.src = like;
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
          <div className="max-w-4xl flex flex-col gap-10 lg:mx-auto mx-10 py-16">
            <h1 className="font-semibold text-4xl text-center">
              Tax Plannning
            </h1>
            <div>
              <div className="flex flex-col gap-4">
                <h5 className="font-semibold flex items-center gap-2">
                  <img className="w-12" src={like} alt="like button" />
                  THE ADVANTAGE:
                </h5>
                <p>
                  If you're like most individuals or Small Businesses, you
                  probably think you pay too much tax. And you're probably
                  right! So perhaps you're considering a new tax pro this year.
                </p>
                <p>
                  Most tax professionals do a fine job putting the "right"
                  numbers in the "right" boxes on the "right" forms, but then
                  they call it a day.
                </p>
                <p>
                  It doesn't matter how good your tax preparer is with a stack
                  of receipts on April 15. The real secret to reducing your tax
                  bill is{" "}
                  <span className="text-logoBlue italic">planning.</span>
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-4">
                <h5 className="font-semibold flex items-center gap-2">
                  <img className="w-12" src={lightBulb} alt="lightbulb" />
                  WHY WE'RE DIFFERENT:
                </h5>
                <p>
                  <span className="italic text-logoBlue">
                    At <span className="underline">Roubik Tax Services</span>,
                    we're different.
                  </span>{" "}
                  We don't just record history. We help you write it, with a
                  complete lineup of concepts and strategies to give you the
                  savings you really want. This year, don't settle for just
                  "filing" your return. we'll find the mistakes and missed
                  opportunities that may be costing you thousands, and show you
                  how proactive planning can save those dollars. We guarantee
                  you'll leave with new information.
                </p>
                <ul className="list-disc flex flex-col gap-1 pl-5">
                  <li>Comprehensive Tax Analysis for your Situation</li>
                  <li>Written Plan outlining specific action steps</li>
                  <li>Consultation with Tax Planner to review Analysis</li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <div className="max-w-xl mb-6">
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    Tax Planning
                  </h2>
                  <p className="text-base text-gray-700 md:text-lg">
                    So perhaps you're considering a new tax pro this year. Most
                    tax professionals do a fine job putting the "right" numbers
                    in the "right" boxes on the "right" forms, but then they
                    call it a day. It doesn't matter how good your tax preparer
                    is with a stack of receipts on April 15. The real secret to
                    reducing your tax bill is planning.
                  </p>
                </div>
                <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                  <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                    <div className="h-full p-5 border border-l-0 rounded-r">
                      <h6 className="mb-2 font-semibold leading-5">
                        At Roubik Tax Services, we're different.
                      </h6>
                      <p className="text-sm text-gray-900">
                        We don't just record history. We help you write it with
                        a complete lineup of concepts and strategies to give you
                        the savings you really want.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                    <div className="h-full p-5 border border-l-0 rounded-r">
                      <h6 className="mb-2 font-semibold leading-5">
                        This year, don't settle for just "filing" your return.
                      </h6>
                      <p className="text-sm text-gray-900">
                        We'll find the mistakes and missed opportunities that
                        may be costing you thousands and show you how proactive
                        tax planning can save those dollars.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                  src={taxPreparation}
                  alt=""
                />
              </div>
            </div>

            <div className="mt-12 justify-center md:flex lg:gap-10 md:gap-4 md:flex-row">
              <ClientQuestionnaire />
              <ClientPortal />
            </div>
          </div> */}
        </>
      )}
    </>
  );
};

export default TaxPlanning;
