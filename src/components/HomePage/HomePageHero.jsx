const HomePageHero = ({ heroImage, heroImageLandscape, openModal }) => {
  return (
    <>
      <main>
        <section className="relative w-full">
          <img
            className="block w-full brightness-[60%] sm:hidden"
            src={heroImage}
            alt="Woman wiping down a table"
          />
          <img
            className="hidden w-full h-auto brightness-50 sm:block sm:brightness-[60%]"
            src={heroImageLandscape}
            alt="Woman wiping down a table"
          />
          {/* Div of text that overlays hero image */}
          <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col gap-4 text-center text-white sm:left-0 sm:mx-16 sm:w-auto sm:-translate-x-0 sm:text-left xl:mx-40 2xl:mx-48">
            <h2 className="text-xl font-light">
              Professional tax services at a fair price.
            </h2>
            <h1 className="text-3xl font-bold sm:text-5xl">
              Best in the industry <br /> Tax Services
            </h1>

            <div className="flex justify-center sm:block">
              <button
                onClick={openModal}
                className="mx-auto inline-block border-2 border-white px-8 py-2 text-center text-lg font-bold transition-all hover:bg-[#4e5553]"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePageHero;
