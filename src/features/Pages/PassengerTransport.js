import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../../components/Hero";
import heroImg from "../../assets/heroPassengerTransportation.jpg";

const PassengerTransport = () => {
  return (
    <Layout>
      <Hero
        image={heroImg}
        altTxt="Passenger transportation in UAE"
        isFullWidthHero={false}
        title="Passenger transports"
        description="Whether for daily commuting, travel, or special events, we plays a crucial role in connecting communities, and cities, making it possible for individuals to access work, education, leisure, and other essential activities. With a focus on safety, convenience, and efficiency, our services ensure that people can reach their destinations comfortably and on time."
      />
    </Layout>
  );
};

export default PassengerTransport;
