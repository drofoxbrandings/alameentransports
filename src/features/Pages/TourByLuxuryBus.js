import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../../components/Hero";
import heroImg from "../../assets/tousbyluxurybusHero.jpg";
import { Container, Grid, Typography } from "@mui/material";
import ServiceSection from "../../components/ServiceSection";
import { tourByBus } from "../../constants/tourByBus";
import FleetCard from "../../components/Cards/FleetCard";

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
      <Container maxWidth="lg">
        {tourByBus?.services?.map((item, index) => (
          <ServiceSection
            isTextleft={index % 2 === 0 ? false : true}
            key={index}
            description={item.description}
            title={item.title}
            image1={item.image1}
            image2={item.image2}
          />
        ))}

        <Grid container sx={{ margin: "2rem 0" }}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{ textTransform: "uppercase", marginBottom: "1rem" }}
            >
              Fleet
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} >
          {tourByBus?.fleet?.map((item, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <FleetCard
                image={item.image}
                title={item.title}
                rating={item.rating}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default TourByLuxuryBus;
