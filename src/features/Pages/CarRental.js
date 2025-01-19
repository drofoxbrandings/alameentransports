import React from "react";
import hero from "../../assets/car-rent.jpg";
import Hero from "../../components/Hero";
import SectionBreak from "../../components/SectionBreak";
import Layout from "../Layout/Layout";
import RentalCard from "../../components/Cards/RentalCard";
import { Box, Container, Grid, Typography } from "@mui/material";
import patrol from "../../assets/rental/rental-patrol.png";
import tesla from "../../assets/rental/rental-tesla.png";
import fortuner from "../../assets/rental/rental-fortuner.png";
import carnival from "../../assets/rental/rental-carnival.png";
import sunny from "../../assets/rental/rental-sunny.png";
import changan from "../../assets/rental/rental-chagan.png";
import outlander from "../../assets/rental/rental-outlander.png";
import innova from "../../assets/rental/rental-innova.png";
import highlander from "../../assets/rental/rental-highlander.png";

const CarRental = () => {
  const carsList = [
    {
      id: 1,
      image: `${patrol}`,
      title: "Nissan Patrol",
      transmission: "Automatic",
      engine: "275 hp",
      seats: "8",
      startPrice: 100,
    },
    {
      id: 2,
      image: `${tesla}`,
      title: "Tesla Model Y",
      transmission: "Automatic",
      engine: "384 hp",
      seats: "5",
      startPrice: 300,
    },
    {
      id: 3,
      image: `${fortuner}`,
      title: "Toyota Fortuner",
      transmission: "Automatic",
      engine: "164 hp",
      seats: "8",
      startPrice: 300,
    },
    {
      id: 4,
      image: `${carnival}`,
      title: "Kia Carnival",
      transmission: "Automatic",
      engine: "287 hp",
      seats: "8",
      startPrice: 300,
    },
    {
      id: 5,
      image: `${sunny}`,
      title: "Nissan Sunny",
      transmission: "Automatic",
      engine: "118 hp",
      seats: "5",
      startPrice: 300,
    },
    {
      id: 6,
      image: `${changan}`,
      title: "Changan Alsvin",
      transmission: "Automatic",
      engine: "105 hp",
      seats: "5",
      startPrice: 300,
    },
    {
      id: 7,
      image: `${outlander}`,
      title: "Mitsubishi Outlander",
      transmission: "Automatic",
      engine: "181 hp",
      seats: "7",
      startPrice: 300,
    },
    {
      id: 8,
      image: `${innova}`,
      title: "Toyota Innova",
      transmission: "Automatic",
      engine: "172 hp",
      seats: "7",
      startPrice: 300,
    },
    {
      id: 9,
      image: `${highlander}`,
      title: "Toyota Highlander",
      transmission: "Automatic",
      engine: "265 hp",
      seats: "8",
      startPrice: 300,
    },
  ];

  return (
    <Layout>
      <Hero
        image={hero}
        altTxt="rent a car - abu dhabi"
        isFullWidthHero={false}
        title="Car Rentals"
        description="Discover the perfect ride with our premium car rental service. Choose from a diverse fleet, including budget-friendly cars, luxury vehicles, and spacious SUVs. With competitive pricing, flexible rentals, and a hassle-free booking process, we’re here to make every journey comfortable and convenient."
        btnLabel="Enquire now"
        // btnFn={() => dispatch(openForm())}
      />
      <SectionBreak />
      <Container maxWidth="lg" sx={{ padding: "5rem 1rem" }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          About the service
        </Typography>
        <Typography variant="body1" sx={{ my: 2 }}>
          Our car rental service is designed to offer seamless travel solutions
          for all your needs. Whether you’re planning a quick trip, a family
          getaway, or need a luxury car for a special event, we provide a
          variety of well-maintained vehicles to suit every occasion.
        </Typography>
        <Typography variant="body1" sx={{ my: 1 }}>
          We prioritize affordability, comfort, and reliability, ensuring our
          customers enjoy a stress-free experience. With flexible rental
          periods, competitive pricing, and an easy booking process, our service
          is tailored to provide maximum convenience. From economy cars to
          luxury SUVs, we’re committed to delivering quality and satisfaction in
          every ride.
        </Typography>
      </Container>
      <Container maxWidth="lg" sx={{ padding: "3rem 1rem" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {carsList?.map((item) => (
              <Grid item xs={12} md={4} key={item.id} sx={{ display: "flex" }}>
                <RentalCard
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  transmissionTxt={item.transmission}
                  engineTxt={item.engine}
                  seatsTxt={item.seats}
                  price={item.startPrice}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default CarRental;
