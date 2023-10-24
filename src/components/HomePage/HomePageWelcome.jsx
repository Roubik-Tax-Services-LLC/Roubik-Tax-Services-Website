const HomePageWelcome = () => {
  return (
    <>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-9 py-16 sm:px-16 gap-5 lg:py-20 ">
        <h1 className="font-semibold text-3xl text-center">
          WELCOME TO ROUBIK TAX SERVICES LLC
        </h1>
        <p className="text-base text-gray-700 md:text-lg">
          Our{" "}
          <span className="uppercase text-logoHover font-semibold ">
            mission
          </span>{" "}
          is to significantly improve our clients, community, and ourselves by
          constantly striving to achieve beyond caring relationships, excellence
          in knowledge and education, and service beyond expectations.
        </p>
        <p className="text-base text-gray-700 md:text-lg py-4">
          Our{" "}
          <span className="uppercase text-logoHover font-semibold ">
            vision
          </span>{" "}
          is to significantly improve our clients, community, and ourselves by
          becoming the most trusted for our service, knowledge, and performance.
        </p>
      </div>
    </>
  );
};

export default HomePageWelcome;
