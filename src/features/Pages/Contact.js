import React from "react";
import Layout from "../Layout/Layout";
import heroImg from "../../assets/heroContact.jpg";
import Hero from "../../components/Hero";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import Form from "./Form";
import SectionBreak from "../../components/SectionBreak";

const Contact = () => {
  const submitFn = (values) => {
    alert(JSON.stringify(values))
  }
  return (
    <Layout>
      <Hero
        image={heroImg}
        altTxt="luxury limousine services - uae"
        isFullWidthHero={false}
        title="Get in touch"
        description="Thank you for considering Al Ameen for your premier luxury transportation needs. Our dedicated team is here to assist you with any inquiries or booking requests."
      />
      <SectionBreak />
      <Container maxWidth="lg">
        <Grid container xs={12}>
          <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
            Write to us
          </Typography>
        </Grid>
        <Grid container xs={12} md={8} sx={{ margin: "2rem 0" }}>
          <Card>
            <CardContent>
              <Form submit={submitFn}/>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Contact;
