import React from "react";
import Layout from "../Layout/Layout";
import heroImg from "../../assets/heroSchoolTransportation.jpg";
import Hero from "../../components/Hero";
import { Container, Grid, Typography } from "@mui/material";
import ServiceSection from "../../components/ServiceSection";
import { schoolTransports } from "../../constants/schoolTransports";
import FleetCard from "../../components/Cards/FleetCard";

const SchoolTransportation = () => {
  return (
    <Layout>
      <Hero
        image={heroImg}
        altTxt="School transportation in UAE"
        isFullWidthHero={false}
        title="School transports"
        description="Experience safe and reliable school transportation services with us. We prioritize the well-being of students by offering secure and comfortable rides to and from school. Our team of professional and experienced chauffeurs ensures timely pickups and drop-offs, providing parents and schools with peace of mind."
      />
      <Container maxWidth="lg">
        {schoolTransports?.services?.map((item, index) => (
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
        <Grid container spacing={2}>
          {schoolTransports?.fleet?.map((item, idx) => (
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

export default SchoolTransportation;
