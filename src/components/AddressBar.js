"use client";
import React from "react";
import Image from "../assets/logo.svg";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

const AddressBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const desktopAddress = (
    // <Container>
    <Grid container alignItems="center" justifyContent="space-between"  >
      <Grid
        item
        md={2}
        lg={2}
        sx={{
          img: { width: { lg: "200px", md: "150px" },
        paddingLeft:".5rem" },
        }}
      >
        <img width={400} height={120} src={Image} alt="logo" />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          padding:"0 2rem"
        }}
      >
        <Box>
          <Box
            sx={{
              svg: { fontSize: "24px" },
              display: "flex",
              flexDirection: "row",
              margin: ".5rem 0",
              padding: "5px",
            }}
          >
            <LocationOnIcon sx={{ color: "primary.dark" }} />
            <Typography sx={{ fontSize: "17px", width: "150px" }}>
              {" "}
              Abu Dhabi,UAE
            </Typography>
          </Box>
          <Box
            sx={{
              svg: { fontSize: "24px" },
              display: "flex",
              flexDirection: "row",
              margin: ".5rem 0",
              padding: "5px",
            }}
          >
            <LocationOnIcon sx={{ color: "primary.dark" }} />
            <Typography sx={{ fontSize: "17px" }}> Dubai,UAE</Typography>
          </Box>
        </Box>
        <Divider
          orientation="vertical"
          sx={{
            height: "auto",
            borderRightWidth: "2px",
            borderColor: "primary.dark",
          }}
        />
        <Box>
          <Box
            sx={{
              svg: { fontSize: "24px" },
              display: "flex",
              flexDirection: "row",
              // translate:"5px",
              margin: ".5rem 0",
              padding: "5px",
            }}
          >
            <SmartphoneIcon sx={{ color: "primary.dark" }} />
            <Typography sx={{ fontSize: "17px", width: "150px" }}>
              {" "}
              +971 50 505 8724
            </Typography>
          </Box>
          <Box
            sx={{
              svg: { fontSize: "24px" },
              display: "flex",
              flexDirection: "row",
              // translate:"5px",
              margin: ".5rem 0",
              padding: "5px",
            }}
          >
            <LocalPhoneIcon sx={{ color: "primary.dark" }} />
            <Typography sx={{ fontSize: "17px" }}> +971 2 555 0509</Typography>
          </Box>
        </Box>
        <Divider
          orientation="vertical"
          sx={{
            height: "auto",
            borderRightWidth: "2px",
            borderColor: "primary.dark",
            // translate:"-5px"
          }}
        />
        <Box
          sx={{
            svg: { fontSize: "24px" },
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: ".5rem 0",
            padding: "2px",
          }}
        >
          <MailIcon sx={{ color: "primary.dark" }} />
          <Typography sx={{ fontSize: "17px" }}>
            info@alameenlimousine.com
          </Typography>
        </Box>
      </Grid>
    </Grid>
   
  );

  return (
    <Container
      maxWidth="100%"
      sx={{ background: "white.main", color: "primary.dark" }}
    >
      {isMobile ? null : desktopAddress}
    </Container>
  );
};

export default AddressBar;
