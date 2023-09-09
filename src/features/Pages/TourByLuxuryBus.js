import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../../components/Hero";
import heroImg from "../../assets/tousbyluxurybusHero.jpg";

const TourByLuxuryBus = () => {
  return (
    <Layout>
      <Hero
        image={heroImg}
        altTxt="Luxury bus tours in oman and UAE"
        isFullWidthHero={false}
        title="Tour by luxury bus"
        description="Experience the pinnacle of luxury and comfort with our exclusive tour by luxury bus service. Embark on a captivating journey, where every detail is meticulously crafted to provide you with an unforgettable travel experience. Our fleet of opulent buses, accompanied by professional chauffeurs, ensures a seamless and elegant adventure through the most scenic destinations."
      />
    </Layout>
  );
};

export default TourByLuxuryBus;
