import React from "react";
import Layout from "../Layout/Layout";
import heroImg from '../../assets/heroLimousine.jpg'
import Hero from "../../components/Hero";

const Limousine = () => {
  return (
    <Layout>
      <Hero
        image={heroImg}
        altTxt="luxury transportation services - abu dhabi"
        isFullWidthHero={false}
        title="Luxury Limousine"
        description="With a fleet of meticulously maintained, high-end vehicles and professional chauffeurs, our limousine services ensure seamless transportation for various occasions, including weddings, corporate events, airport transfers, and special celebrations"
      />
    </Layout>
  );
};

export default Limousine;
