import { Container } from "@mui/material";
import React from "react";
import AddressBar from "../../components/AddressBar";
import MainNav from "../../components/MainNav";

const Layout = ({ children }) => {
  return (
    <Container maxWidth="100%" sx={{ padding: "0 !important" }}>
      <AddressBar />
      <MainNav />
      {children}
    </Container>
  );
};

export default Layout;
