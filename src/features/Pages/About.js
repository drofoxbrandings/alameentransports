import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../../components/Hero";
import hero from '../../assets/aboutHero.png'

const About = () => {
  return (
    <Layout>
      <Hero
        image={hero}
        altTxt="luxury transportation services - abu dhabi"
        isFullWidthHero={false}
        title="Travel in peace"
        description="At AAT, we cater our services with quality, safety and affordability. With a boundless experience in the field of ground transportation, and with our well experienced chauffeurs, we are committed to serve the community a comfortable and reliable travel experience.
        Whether you are on a business trip, or on a leisure trip, or even you are out for an evening sight-seeing anywhere around the UAE, we at AAT Limousine serves the best for your needs. Excellence in all the departments is our motto and we never fall short of our vision. We have a clear vision that relates to a high class standard of respect, self-esteem and hard work to its very best."
        btnLabel="Enquire now"
        // btnFn={() => dispatch(openForm())}
      />
    </Layout>
  );
};

export default About;
