import React from "react";
import Layout from "../Layout/Layout";
import heroImg from "../../assets/heroContact.jpg";
import Hero from "../../components/Hero";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import Form from "./Form";
import SectionBreak from "../../components/SectionBreak";
import Swal from "sweetalert2";

const Contact = () => {
  const submitFn = (values) => {
    Swal.fire({
      icon: "success",
      title: "Thank you!!",
      text: "We recieved your enquiry. One of our executives will contact you soon!!",
      confirmButtonColor: "#C53A50",
    }).then((res) => {
      if (res.isConfirmed || res.isDismissed) {
        window.location.reload();
      }
    });
  };
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
              <Form submit={submitFn} />
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Contact;
