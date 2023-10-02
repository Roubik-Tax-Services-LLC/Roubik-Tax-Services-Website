const HomePageHero = ({ heroImage, heroImageLandscape, openModal }) => {
  return (
    <>
      <main>
        <section className="
        bg-[url('/src/assets/HeroImage.png')] 
        md:bg-[url('/src/assets/LandscapeHero.png')]
        h-[calc(100vh-304px)]
        lg:h-[calc(100vh-184px)]
        xl:h-[calc(100vh-192px)] 
        relative 
        bg-cover bg-center 
        ">
        <div className="
        w-full
        h-full
        absolute
        bg-black
        bg-cover
        opacity-50
        md:opacity-30
        z-10
        ">
        </div>
          {/* Div of text that overlays hero image */}
          <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col gap-4 text-center text-white sm:left-0 sm:mx-16 sm:w-auto sm:-translate-x-0 sm:text-left xl:mx-40 2xl:mx-48 z-20">
            <h2 className="text-xl font-light">
              Professional tax services at a fair price.
            </h2>
            <h1 className="text-3xl font-bold sm:text-5xl">
              Best in the industry <br /> Tax Services
            </h1>

            <div className="flex justify-center sm:block">
              <button
                onClick={() => {
                  window.open(
                    "https://go.oncehub.com/RoubikTaxServicesLLC",
                    "_blank"
                  );
                }}
                className="mx-auto inline-block border-2 border-white px-8 py-2 text-center text-lg font-bold transition-all hover:bg-[#4e5553]"
              >
                Schedule an Appointment
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePageHero;
