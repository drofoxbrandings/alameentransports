import { Container, useMediaQuery } from "@mui/material";
import React from "react";
import MainNav from "../../components/MainNav";
import BannerWithText from "../../components/BannerWithText";
import footerBanner from "../../assets/bannerFooter.jpg";
import ClientsSection from "../../components/ClientsSection";
import { clients } from "../../constants/clients";
import { socialLinks } from "../../constants/socialLinks";
import { footerLinks } from "../../constants/footerLinks";
import Footer from "../../components/Footer";
// import logo from "../../assets/logo.png";
import logo from "../../assets/logogroup.png";
import logoFooter from "../../assets/logoGroup.svg";
import SectionBreak from "../../components/SectionBreak";
import TopBar from "../../components/TopBar";
import { useTheme } from "@emotion/react";

const Layout = ({ children }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const navItems = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about" },
    { label: "Companies", url: "" },
    { label: "Contact Us", url: "/contact" },
  ];

  return (
    <Container maxWidth="100%" sx={{ padding: "0 !important" }}>
      {!matches && <TopBar logo={logo} />}
      <MainNav
        const
        navItems={navItems}
        address={[
          " Abu Dhabi, UAE",
          "Dubai,UAE",
          "+971 2 555 0509",
          " +971 4 884 7003",
          "info@alameentransportuae.com",
        ]}
      />

      {children}
      <SectionBreak />
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
        logo={logoFooter}
        address="P.O.BOX: 37693, Abu Dhabi, Dubai, UAE"
        phone1="+971 2 555 0509"
        phone2="+971 4 884 7003"
        mail={"info@alameentransportuae.com"}
        socialMedia={socialLinks}
        copyright={"2023 - Al Ameen transport L.L.C"}
        links={footerLinks}
      />
    </Container>
  );
};

export default Layout;
