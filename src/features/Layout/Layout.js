import { Container } from "@mui/material";
import React from "react";
import AddressBar from "../../components/AddressBar";
import Features from "../../components/Features";
import MainNav from "../../components/MainNav";

const Layout = ({ children }) => {
  const features = [
    {
      title: "SAFETY",
      image:
        "https://alameentransportuae.com/static/media/safeIcon.b137857f.svg",
      description: `Offering passangers peace of mind with meticulously trained and
    experienced drivers,top-of-the-line vehicles equipped with advanced
    safety features, and rigorous adherence to strict safety protocols.`,
    },
    {
      title: "RELIABILITY",
      image:
        "https://alameentransportuae.com/static/media/reliableIcon.b32b4f53.svg",
      description: `Ensuring punctuality,seamless coordination, and consistence 
      highr-quality service,allowing clients to confidently rely on their 
      chauffeur for all their transportation needs.`,
    },
    {
      title: "AFFORDABLE",
      image:
        "https://alameentransportuae.com/static/media/afforIcon.690f2956.svg",
      description: `With competitive pricing,offering value for money while
       maintaining the highest standards of comfort,elegance,and personalised service.`,
    },
  ];
  return (
    <Container maxWidth="100%" sx={{ padding: "0 !important" }}>
      <AddressBar />
      <MainNav
        navMenu={["HOME", "ABOUT US", "COMPANY", "CONTACT US"]}
        address={[
          " Abu Dhabi, UAE",
          "Dubai,UAE",
          " +971 50 505 8724",
          "+971 2 555 0509",
          "info@alameenlimousine.com",
        ]}
      />

      {children}
      <Features
        features={features}
        backgroundColor={{ backgroundColor: "white.light" }}
        boxShadow={{boxShadow:"0"}}
        margin={{margin:"0"}}
        imageWidth={{width:"50px"}}
        imageBorderRadius={{borderRadius: "50px"}}
        imageBackground={{backgroundColor:"brown"}}
      />
    </Container>
  );
};

export default Layout;
