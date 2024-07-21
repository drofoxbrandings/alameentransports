import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../../components/Hero";
import SectionBreak from "../../components/SectionBreak";
import hero from "../../assets/motor.jpg";
import GarageService from "../../components/GarageService";
import { Box, Container, Grid } from "@mui/material";
import mechanicService from "../../assets/mechanic.jpg";
import electricalService from "../../assets/electrical.jpg";
import acService from "../../assets/acservice.jpg";
import tyreService from "../../assets/tyreservice.jpg";
import paintService from "../../assets/paintservice.jpg";

const Garage = () => {
  const garageServices = [
    {
      id: 1,
      image: `${mechanicService}`,
      title: "Mechanic Service",
      subtitle: "",
      desc: "Al Ameen Auto Garage provides expert vehicle maintenance, repair, and diagnostics. Our skilled mechanics resolve mechanical and electrical issues, ensuring top performance, safety, and longevity. With advanced tools and quality parts, we deliver reliable solutions for smooth-running vehicles trusted by drivers.",
      serviceList: [
        "General Service",
        "Oil Change",
        "Brake Repairs",
        "Tire Replacements",
        "Engine Tune-ups",
      ],
    },
    {
      id: 2,
      image: `${electricalService}`,
      title: "Electrical Service",
      subtitle: "",
      desc: "We specialize in diagnosing and repairing vehicle electrical issues. Our skilled technicians use advanced tools to resolve problems with wiring, batteries, starters, alternators, and electronic components. With precision and reliability, we ensure your vehicle's electrical system operates efficiently and safely, keeping you confident on the road.",
      serviceList: [
        "Computer Fault Scanning And Diagnosis",
        "Starter Motor Repairs Or Replacing",
        "Charging System Testing",
        "Small Wiring Repairs",
        "Ignition Testing",
        "Head Light & Tail Light Repairs",
        "Car Battery Testing & Replacing",
      ],
    },
    {
      id: 3,
      image: `${acService}`,
      title: "AC Service",
      subtitle: "",
      desc: "We offers comprehensive solutions for all your vehicle's air conditioning needs. From refrigerant recharges to component replacements, we utilize advanced techniques and quality parts to keep your car's AC running efficiently. Trust us to provide timely and reliable service, keeping you comfortable on the road all year round.",
      serviceList: [
        "Visual Inspection",
        "Gas Refil",
        "Performance Test​",
        "Fan Replacement",
        "Filters",
        "Condenser Replacement",
        "Evaporator Replacement",
      ],
    },
    {
      id: 4,
      image: `${tyreService}`,
      title: "Tyre Service",
      subtitle: "",
      desc: "We offers expert solutions for all your tire needs. Our skilled technicians provide services such as tire inspection, repair, replacement, and alignment. With state-of-the-art equipment and quality products, we ensure your tires are in optimal condition for safety and performance on the road. ",
      serviceList: [
        "Tyre Check",
        "Tyre Change & Replacement",
        "Tyre Pressure​",
        "Tyre Wear and Condition",
      ],
    },
    {
      id: 5,
      image: `${paintService}`,
      title: "Body Paint & Dent",
      subtitle: "",
      desc: "Our expert technicians excel in repairing dents and scratches, and applying high-quality paint finishes to restore your vehicle's appearance. Using advanced techniques and premium materials, we ensure precise color matching and flawless results. Trust us to rejuvenate your vehicle's exterior, enhancing its beauty and value.",
      serviceList: [
        "Inspection",
        "Dent Removal",
        "Painting​",
        "Dulling and Polishing",
      ],
    },
  ];
  return (
    <Layout>
      <Hero
        image={hero}
        altTxt="Vehicle service & Maintenance- abu dhabi"
        isFullWidthHero={false}
        title="Regain your ride"
        description="Discover unparalleled care for your vehicle at our garage. From routine maintenance to intricate repairs, our team of skilled technicians ensures your vehicle runs smoothly and efficiently. Trust us to breathe new life into your ride, providing top-notch service and attention to detail every step of the way."
        btnLabel="Enquire now"
        // btnFn={() => dispatch(openForm())}
      />
      <SectionBreak />

      <Container maxWidth="lg" sx={{ padding: "5rem 1rem" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {garageServices?.map((item) => (
              <Grid item xs={12} md={4} key={item.id} sx={{ display: "flex" }}>
                <GarageService
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  desc={item.desc}
                  serviceList={item.serviceList}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default Garage;
