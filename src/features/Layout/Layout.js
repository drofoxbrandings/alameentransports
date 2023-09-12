import { Container } from "@mui/material";
import React from "react";
import AddressBar from "../../components/AddressBar";
import MainNav from "../../components/MainNav";

const Layout = ({ children }) => {
  return (
    <Container maxWidth="100%" sx={{ padding: "0 !important" }}>
      <AddressBar />
      <MainNav  navMenu={["HOME","ABOUT US","COMPANY","CONTACT US"]}
      address ={ [
        ' Abu Dhabi, UAE',
        'Dubai,UAE',
        ' +971 50 505 8724',
        '+971 2 555 0509',
        'info@alameenlimousine.com'
      ]}/>
      {children}
    </Container>
  );
};

export default Layout;
