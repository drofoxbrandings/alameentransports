import React from "react";
import Layout from "../Layout/Layout";
import heroImg from "../../assets/heroContact.jpg";
import Hero from "../../components/Hero";
import { Container, Grid } from "@mui/material";
import Form from "./Form";

const Contact = () => {
  return (
    <Layout>
      <Hero
        image={heroImg}
        altTxt="luxury limousine services - uae"
        isFullWidthHero={false}
        title="Get in touch"
        description="Thank you for considering Al Ameen for your premier luxury transportation needs. Our dedicated team is here to assist you with any inquiries or booking requests."
      />
      <Container maxWidth="lg">
        <Grid container xs={12}>
          
        </Grid>
        <Form />
      </Container>
    </Layout>
  );
};

export default Contact;
