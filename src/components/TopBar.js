import {
  Box,
  Container,
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const TopBar = ({ logo }) => {
  return (
    <Container maxWidth="xl">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6} sm={4} md={2}>
          <img width="70%" src={logo} alt="Al Ameen transport" />
        </Grid>
        <Grid
          item
          md={10}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "start",
            }}
          >
            <ListItem sx={{ color: "primary.main", padding: '.25rem .5rem' }}>
              <ListItemIcon sx={{ color: "primary.main", justifyContent: 'center' }}>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText>Abu Dhabi, UAE</ListItemText>
            </ListItem>
            <ListItem sx={{ color: "primary.main", padding: '.25rem .5rem' }}>
              <ListItemIcon sx={{ color: "primary.main", justifyContent: 'center' }}>
                <LocalPhoneIcon />
              </ListItemIcon>
              <ListItemText primary="+971 2 555 0509"/>
            </ListItem>
          </Box>

          <Divider
            orientation="vertical"
            sx={{ borderColor: "primary.main" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "start",
            }}
          >
            <ListItem sx={{ color: "primary.main", padding: '.25rem .5rem' }}>
              <ListItemIcon sx={{ color: "primary.main", justifyContent: 'center' }}>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText>Dubai, UAE</ListItemText>
            </ListItem>
            <ListItem sx={{ color: "primary.main", padding: '.25rem .5rem' }}>
              <ListItemIcon sx={{ color: "primary.main", justifyContent: 'center' }}>
                <LocalPhoneIcon />
              </ListItemIcon>
              <ListItemText>+971 4 884 7003</ListItemText>
            </ListItem>
          </Box>
          <Divider
            orientation="vertical"
            sx={{ borderColor: "primary.main" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            <ListItem sx={{ color: "primary.main", padding: '.25rem .5rem' }}>
              <ListItemIcon sx={{ color: "primary.main", justifyContent: 'center' }}>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText>info@alameentransportuae.com</ListItemText>
            </ListItem>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TopBar;
