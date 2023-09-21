import ContactInfo from "./components/ContactInfo";
import heroImage from "./assets/HeroImage.png";
import heroImageLandscape from "./assets/LandscapeHero.png";
import HomePageHero from "./components/HomePageHero";
import HomePageAbout from "./components/HomePageAbout";
import aboutImage from "./assets/JoePic.jpg";

const HomePage = () => {
  return (
    <>
      <ContactInfo />
      <HomePageHero
        heroImage={heroImage}
        heroImageLandscape={heroImageLandscape}
      />
      <HomePageAbout aboutImage={aboutImage} />
    </>
  );
};

export default HomePage;
