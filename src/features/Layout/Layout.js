import { Container } from "@mui/material";
import React from "react";
import AddressBar from "../../components/AddressBar";
import MainNav from "../../components/MainNav";
import BannerWithText from "../../components/BannerWithText";
import footerBanner from "../../assets/bannerFooter.jpg";
import ClientsSection from "../../components/ClientsSection";
import { clients } from "../../constants/clients";
import { socialLinks } from "../../constants/socialLinks";
import { footerLinks } from "../../constants/footerLinks";
import Footer from "../../components/Footer";
import logo from "../../assets/logo.svg";

const Layout = ({ children }) => {
  
    const navItems = [
      { label: 'HOME', url: "/" },
      { label: 'ABOUT US', url: "/about" },
      { label: 'COMPANY', url: "/contact" },
      { label: 'CONTACT US', url: "/contact" },
    ];
  
  return (
    <Container maxWidth="100%" sx={{ padding: "0 !important" }}>
      <AddressBar />
      <MainNav
         const navItems ={navItems}
        address={[
          " Abu Dhabi, UAE",
          "Dubai,UAE",
          " +971 50 505 8724",
          "+971 2 555 0509",
          "info@alameenlimousine.com",
        ]}
      />

      {children}
      <Container maxWidth="lg">
        <ClientsSection clientImages={clients} />
      </Container>

      <BannerWithText
        minHeight={350}
        banner={footerBanner}
        textOnly={true}
        description1="It's not the destination matters, but moving the way with comfort.
        Book a ride with us to feel the harmony"
      />
      <Footer
        logo={logo}
        address="P.O.BOX: 37693, Abu Dhabi, Dubai, UAE"
        phone1="+971 2 555 0509"
        phone2="+971 50 505 8724"
        mail={"info@alameentransports.com"}
        socialMedia={socialLinks}
        copyright={"2023 - Al Ameen Transports L.L.C"}
        links={footerLinks}
      />
    </Container>
  );
};

export default Layout;
