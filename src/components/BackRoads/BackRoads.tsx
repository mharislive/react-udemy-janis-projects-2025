import AboutSection from "./AboutSection";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import ToursSection from "./ToursSection";

const BackRoads = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ToursSection />
      </main>
      <Footer />
    </>
  );
};
export default BackRoads;
