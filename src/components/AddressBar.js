"use client";
import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "../assets/logo.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

const AddressBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const desktopAddress = (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "18px",
      }}
    >
      <Grid item xs={12} md={6} sx={{ img: { width: "200px" } }}>
        <Box sx={{ marginLeft: "100px", marginTop: "-10px" }}>
          <img width={400} height={120} src={Image} alt="logo" />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          gap={3}
          sx={{
            display: "flex",
            marginTop: "15px",
            justifyContent: "right",
            marginRight:"35px"
          }}
        >
          <Box sx={{ margin: "0px" }}>
            <Box
              sx={{
                svg: { fontSize: "24px" },
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: ".5rem 0",
              }}
            >
              <LocationOnIcon sx={{ color: "#A81D34" }} />
              <Typography sx={{ fontSize: "16px", width: "150px" }}>
                {" "}
                Abu Dhabi,UAE
              </Typography>
            </Box>
            <Box
              sx={{
                svg: { fontSize: "24px" },
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: ".5rem 0",
              }}
            >
              <LocationOnIcon sx={{ color: "#A81D34" }} />
              <Typography sx={{ fontSize: "16px" }}> Dubai,UAE</Typography>
            </Box>
          </Box>
          <Divider
            orientation="vertical"
            sx={{
              height: "auto",
              borderRightWidth: "2px",
              borderColor: "#a81d34",
            }}
          />
          <Box sx={{ margin: "0px" }}>
            <Box
              sx={{
                svg: { fontSize: "24px" },
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: ".5rem 0",
              }}
            >
              <SmartphoneIcon sx={{ color: "#A81D34" }} />
              <Typography
                sx={{ fontSize: "16px", width:  "150px"  }}
              >
                {" "}
                +971 50 505 8724
              </Typography>
            </Box>
            <Box
              sx={{
                svg: { fontSize: "24px" },
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: ".5rem 0",
              }}
            >
              <LocalPhoneIcon sx={{ color: "#A81D34" }} />
              <Typography sx={{ fontSize: "16px" }}>
                {" "}
                +971 2 555 0509
              </Typography>
            </Box>
          </Box>
          <Divider
            orientation="vertical"
            sx={{
              height: "auto",
              borderRightWidth: "2px",
              borderColor: "#a81d34",
            }}
          />
          <Box
            sx={{
              svg: { fontSize: "24px" },
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              margin: ".5rem 0",
            }}
          >
            <MailIcon sx={{ color: "#A81D34" }} />
            <Typography sx={{ fontSize: "16px" }}>
              info@alameenlimousine.com
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );

  return (
    <Container maxWidth="100%" sx={{ background: "#fff", color: "#A81D34" }}>
      {isMobile ? null : desktopAddress}
    </Container>
  );
};

export default AddressBar;
