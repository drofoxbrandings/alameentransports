import React from "react";
import Hero from "../../components/Hero";
import Layout from "../Layout/Layout";
import homeHero from "../../assets/home-hero.jpg";
import { useDispatch } from "react-redux";
import { openForm } from "../Slices/HomepageSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <Layout>
      <Hero
        image={homeHero}
        altTxt="luxury transportation services - abu dhabi"
        isFullWidthHero={true}
        title="Redefining Mobility"
        description="Embrace a new era of transportation with innovative solutions that transcend the ordinary. At AAT, we're dedicated to revolutionizing how you move from point A to point B"
        btnLabel="Enquire now"
        btnFn={() => dispatch(openForm())}
      />
    </Layout>
  );
};

export default HomePage;
