import Content from "../components/LandingPage/HeroSection";
import Vehicles from "../components/LandingPage/Vehicles";

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section with ID */}
      <section id="overview">
        <Content />
      </section>

      {/* Vehicles Section with ID */}
      <section id="vehicles">
        <Vehicles />
      </section>

      {/* Add more sections as needed */}
      {/* <section id="map">
        <Map />
      </section>

      <section id="contact">
        <Contact />
      </section> */}
    </div>
  );
};

export default LandingPage;
