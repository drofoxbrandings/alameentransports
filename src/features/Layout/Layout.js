import { Container } from "@mui/material";
import React from "react";
import AddressBar from "../../components/AddressBar";
import MainNav from "../../components/MainNav";

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
    </Container>
  );
};

export default Layout;
