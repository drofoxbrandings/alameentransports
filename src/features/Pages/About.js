import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../../components/Hero";
import hero from "../../assets/aboutHero.png";
import { Container, Grid } from "@mui/material";
import BasicCard from "../../components/Cards/BasicCard";
import { vmv } from "../../constants/visionMissionValues";
import BannerWithText from "../../components/BannerWithText";
import socialResponsibility from "../../assets/socialResponsibility.jpg";
import SectionBreak from "../../components/SectionBreak";

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
      <SectionBreak />
      <Container maxWidth="lg">
        <Grid container sx={{ justifyContent: "space-around" }}>
          {vmv?.map((item, index) => (
            <Grid
              item
              xs={12}
              md={3}
              key={index}
              sx={{ margin: { xs: "1rem 0" }, display: "flex" }}
            >
              <BasicCard
                cardImage={item.image}
                title={item.title}
                description={item.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <SectionBreak />
      <Grid container sx={{ margin: "8rem 0" }}>
        <Grid item xs={12}>
          <BannerWithText
            minHeight={350}
            banner={socialResponsibility}
            textOnly={false}
            title=""
            description1="At AAT Limousine, we cater our services with quality, safety and
            affordability. With a boundless experience in the field of ground
            transportation, and with our well experienced chauffeurs, we are
            committed to serve the community a comfortable and reliable travel
            experience."
            description2=""
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default About;
