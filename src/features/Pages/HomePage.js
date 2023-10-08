import React from "react";
import Hero from "../../components/Hero";
import Layout from "../Layout/Layout";
import homeHero from "../../assets/home-hero.jpg";
import { useDispatch } from "react-redux";
import { openForm } from "../Slices/HomepageSlice";
import Featuress from "../../components/Featuress";
import { Container } from "@mui/material";

const HomePage = () => {
  const dispatch = useDispatch();
  const features = [
    {
      title: "SAFETY",
      image:
        "https://alameentransportuae.com/static/media/safeIcon.b137857f.svg",
      description: `Offering passangers peace of mind with meticulously trained and
    experienced drivers,top-of-the-line vehicles equipped with advanced
    safety features, and rigorous adherence to strict safety protocols.`,
    },
    {
      title: "RELIABILITY",
      image:
        "https://alameentransportuae.com/static/media/reliableIcon.b32b4f53.svg",
      description: `Ensuring punctuality,seamless coordination, and consistence 
      highr-quality service,allowing clients to confidently rely on their 
      chauffeur for all their transportation needs.`,
    },
    {
      title: "AFFORDABLE",
      image:
        "https://alameentransportuae.com/static/media/afforIcon.690f2956.svg",
      description: `With competitive pricing,offering value for money while
       maintaining the highest standards of comfort,elegance,and personalised service.`,
    },
  ];
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
     
      <Container maxWidth="lg" sx={{margin: '3rem auto'}}>
        <Featuress 
         features={features}/>
      </Container>
    </Layout>
  );
};

export default HomePage;
