import React from "react";
import Hero from "../../components/Hero";
import Layout from "../Layout/Layout";
import homeHero from "../../assets/home-hero.jpg";
import { useDispatch } from "react-redux";
import { openForm } from "../Slices/HomepageSlice";
import FeaturedVehicles from "../../components/FeaturedVehicles";
import { Container, Grid, Typography } from "@mui/material";
import { featuredCars } from "../../constants/featuredCars";
import BannerWithText from "../../components/BannerWithText";
import aboutUsBanner from "../../assets/aboutusbannerhp.jpg";
import SectionBreak from "../../components/SectionBreak";
import { features } from "../../constants/features";
import Features from "../../components/Cards/Features";

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <Layout>
      <Hero
        image={homeHero}
        altTxt="luxury transportation services - abu dhabi"
        isFullWidthHero={true}
        title="Redefining Mobility"
        description="Embrace a new era of transportation with innovative solutions that transcend the ordinary. At Al Ameen Group, we're dedicated to revolutionizing how you move from point A to point B"
        btnLabel="Enquire now"
        btnFn={() => dispatch(openForm(""))}
      />
      <SectionBreak />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ marginBottom: "2rem" }}>
            <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
              Why choose us
            </Typography>
          </Grid>
          {features?.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Features
                key={index}
                image={item.image}
                label={item.title}
                description={item.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <SectionBreak />
      <BannerWithText
        minHeight={450}
        banner={aboutUsBanner}
        textOnly={false}
        title="About us"
        description1="At Al Ameen Group, we cater our services with quality, safety and
            affordability. With a boundless experience in the field of ground
            transportation, and with our well experienced chauffeurs, we are
            committed to serve the community a comfortable and reliable travel
            experience."
        description2="Whether you are on a business trip, or on a leisure trip, or even
        you are out for an evening sight-seeing anywhere around the UAE, we
        at Al Ameen Group serves the best for your needs. Excellence in all
        the departments is our motto and we never fall short of our vision.
        We have a clear vision that relates to a high class standard of
        respect, self-esteem and hard work to its very best."
      />

      <SectionBreak />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{ textTransform: "uppercase", marginBottom: "2rem" }}
            >
              Customer preference
            </Typography>
          </Grid>
        </Grid>
        {featuredCars.map((item, index) => (
          <FeaturedVehicles
            key={index}
            imageSide={item.imageSide}
            vehiclesList={item.images}
            vehicleName={item.vName}
            model={item.model}
            company={item.company}
            rating={item.rating}
          />
        ))}
      </Container>
    </Layout>
  );
};

export default HomePage;
