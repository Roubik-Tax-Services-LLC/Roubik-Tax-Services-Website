/* eslint-disable react/prop-types */
import ContactInfo from "./components/ContactInfo";
import { useEffect, useState } from "react";
import heroImage from "./assets/HeroImage.png";
import heroImageLandscape from "./assets/LandscapeHero.png";
import HomePageHero from "./components/HomePage/HomePageHero";
import HomePageAbout from "./components/HomePage/HomePageAbout";
import aboutImage from "./assets/JoePic.jpg";
import HomePageWelcome from "./components/HomePage/HomePageWelcome";
import HomePagePlanning from "./components/HomePage/HomePagePlanning";
import HomePageServices from "./components/HomePage/HomePageServices";
import { HashLoader } from "react-spinners";
import { scrollToTop } from "./utils/scrollToTop";

const HomePage = ({ openModal }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = () => {
      const imagePromises = [
        new Promise((resolve) => {
          const img1 = new Image();
          img1.src = aboutImage;
          img1.onload = resolve;
        }),
        new Promise((resolve) => {
          const img2 = new Image();
          img2.src = heroImage;
          img2.onload = resolve;
        }),
        new Promise((resolve) => {
          const img3 = new Image();
          img3.src = heroImageLandscape;
          img3.onload = resolve;
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
          <HashLoader size={"100px"} color={"#61C3EB"} />
        </div>
      ) : (
        <>
          <ContactInfo />
          <HomePageHero
            heroImage={heroImage}
            heroImageLandscape={heroImageLandscape}
            openModal={openModal}
          />
          <HomePageWelcome />
          <HomePagePlanning />
          <HomePageServices />
          <HomePageAbout aboutImage={aboutImage} />
        </>
      )}
    </>
  );
};

export default HomePage;
