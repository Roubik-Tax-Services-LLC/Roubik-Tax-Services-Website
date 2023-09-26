/* eslint-disable react/prop-types */
import ContactInfo from "./components/ContactInfo";
import heroImage from "./assets/HeroImage.png";
import heroImageLandscape from "./assets/LandscapeHero.png";
import HomePageHero from "./components/HomePage/HomePageHero";
import HomePageAbout from "./components/HomePage/HomePageAbout";
import aboutImage from "./assets/JoePic.jpg";
import HomePageWelcome from "./components/HomePage/HomePageWelcome";
import HomePagePlanning from "./components/HomePage/HomePagePlanning";
import HomePageServices from "./components/HomePage/HomePageServices";

const HomePage = ({ openModal }) => {
  return (
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
  );
};

export default HomePage;
