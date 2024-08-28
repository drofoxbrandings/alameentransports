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
        // title="Redefining Mobility"
        title="Discover the height of luxury with Al Ameen Group of Transportation and Limousine. "
        // description="Embrace a new era of transportation with innovative solutions that transcend the ordinary. At Al Ameen Group, we're dedicated to revolutionizing how you move from point A to point B"
        description="Specializing in luxury limousine and bus transportation, we offer premier airport transfers and staff transfers across Abu Dhabi and Dubai for an unparalleled travel experience."
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
        description1="At Al Ameen Luxury Limousine Service, we redefine the standards of elegance and comfort in Abu Dhabi and Dubai. Our premier limousine service offers an unparalleled transportation experience, ensuring every journey is marked by sophistication and ease. Whether you’re attending a high-profile event or simply need reliable transportation, our limousine service guarantees a seamless and luxurious ride."
        description2="We pride ourselves on delivering exceptional service tailored to your needs. Our fleet of high-end vehicles is meticulously maintained to provide the ultimate in luxury and safety. With Al Ameen Luxury Limousine Service, you can expect not just a ride, but an experience where every detail is handled with care and professionalism."
        description3="Our commitment to excellence in transportation ensures that you arrive at your destination on time and in style. From airport transfers to corporate events, our limousine service in Abu Dhabi and Dubai is designed to meet the highest standards of quality. Choose Al Ameen for your next journey and discover why our transportation services are the epitome of luxury and reliability."
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
