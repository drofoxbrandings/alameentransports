"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "../assets/logo.png";
import {
  AppBar,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  Toolbar,
  useMediaQuery,
  Grid,
  Box,
  Link,
  Divider,
} from "@mui/material";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const MainNav = ({ navItems, address }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState("");
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const mobile = (
    <Container maxWidth="100%" sx={{ backgroundColor: "white.main" }}>
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography>
              <img src={Image} alt="logo" width={150} />
            </Typography>
          </Grid>
          <Grid item>
            <IconButton edge="start" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>

        <React.Fragment>
          <Drawer
            anchor="top"
            open={openDrawer}
            onClose={toggleDrawer}
            sx={{
              "& .MuiDrawer-paper": {
                height: 1500,
              },
            }}
          >
            <Grid container>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                padding={2}
              >
                <Grid item>
                  <Typography>
                    <img src={Image} alt="logo" width={150} />
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton onClick={toggleDrawer}>
                    <CloseIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                {navItems.map((item, index) => (
                  <Grid item key={index} xs={12}>
                    <ListItem>
                      <ListItemIcon>
                        {index === 2 ? (
                          <Accordion
                            sx={{
                              boxShadow: "0px 0px 0px 0px",
                              translate: "-15px",
                            }}
                          >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography sx={{ fontWeight: "bold" }}>
                                {item.label}
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Link
                                href="/limousine-service"
                                color="secondary.main"
                                underline="none"
                                variant="body1"
                              >
                                <MenuItem>Limousine</MenuItem>
                              </Link>

                              <Link
                                href="/tour-by-luxury-bus"
                                color="secondary.main"
                                underline="none"
                                variant="body1"
                              >
                                <MenuItem>Tour by Luxury Bus</MenuItem>
                              </Link>
                              <Link
                                href="/passenger-transportation"
                                color="secondary.main"
                                underline="none"
                                variant="body1"
                              >
                                <MenuItem>Passenger Transport</MenuItem>
                              </Link>
                              <Link
                                href="/school-transportation"
                                color="secondary.main"
                                underline="none"
                                variant="body1"
                              >
                                <MenuItem>School Transport</MenuItem>
                              </Link>
                            </AccordionDetails>
                          </Accordion>
                        ) : (
                          <Typography
                            sx={{
                              color: "secondary.light",
                              fontWeight: "bold",
                            }}
                            disablePadding
                            onClick={() => navigate(item.url)}
                          >
                            {item.label}
                          </Typography>
                        )}
                      </ListItemIcon>
                    </ListItem>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Divider sx={{ margin: "1rem 0" }} />
            <Grid item xs={12}>
              {address.map((item, index) => (
                <ListItem>
                  {index === 0 && (
                    <ListItemIcon sx={{ color: "primary.main" }}>
                      <LocationOnIcon />
                    </ListItemIcon>
                  )}
                  {index === 1 && (
                    <ListItemIcon sx={{ color: "primary.main" }}>
                      <LocationOnIcon />
                    </ListItemIcon>
                  )}
                  {index === 2 && (
                    <ListItemIcon sx={{ color: "primary.main" }}>
                      <LocalPhoneIcon />
                    </ListItemIcon>
                  )}
                  {index === 3 && (
                    <ListItemIcon sx={{ color: "primary.main" }}>
                      <LocalPhoneIcon />
                    </ListItemIcon>
                  )}
                  {index === 4 && (
                    <ListItemIcon sx={{ color: "primary.main" }}>
                      <MailIcon />
                    </ListItemIcon>
                  )}
                  <ListItemText
                    sx={{
                      color: "#A81D34",
                    }}
                  >
                    {item}
                  </ListItemText>
                </ListItem>
              ))}
            </Grid>
          </Drawer>
        </React.Fragment>
      </Toolbar>
    </Container>
  );

  const desktop = (
    <Container maxWidth="100%" sx={{ backgroundColor: "primary.dark" }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Grid
            container
            sx={{ justifyContent: "flex-end", alignItems: "center" }}
          >
            {navItems.map((item, index) => (
              <Grid item key={index}>
                {index === 2 ? (
                  <div>
                    <Button
                      aria-controls="dropdown-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                      color="white"
                    >
                      {item.label}
                    </Button>
                    <Menu
                      id="dropdown-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      <Box sx={{ width: "200px" }}>
                        <Link
                          href={"/limousine-service"}
                          color="secondary.main"
                          underline="none"
                          variant="body1"
                          sx={{
                            margin: "2rem 0",
                          }}
                        >
                          <MenuItem>Limousine</MenuItem>
                        </Link>

                        <Link
                          href={"/tour-by-luxury-bus"}
                          color="secondary.main"
                          underline="none"
                          variant="body1"
                          sx={{
                            margin: "2rem 0",
                          }}
                        >
                          <MenuItem>Tour by Luxury Bus</MenuItem>
                        </Link>
                        <Link
                          href={"/passenger-transportation"}
                          color="secondary.main"
                          underline="none"
                          variant="body1"
                          sx={{
                            margin: "2rem 0",
                          }}
                        >
                          <MenuItem>Passenger Transport</MenuItem>
                        </Link>
                        <Link
                          href={"/school-transportation"}
                          color="secondary.main"
                          underline="none"
                          variant="body1"
                          sx={{
                            margin: "2rem 0",
                          }}
                        >
                          {" "}
                          <MenuItem>School Transport</MenuItem>
                        </Link>
                      </Box>
                    </Menu>
                  </div>
                ) : (
                  <Link
                    href={item.url}
                    color="white.main"
                    underline="none"
                    variant="button"
                    sx={{
                      margin: "0 2rem",
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </Container>
    </Container>
  );
  return <AppBar position="static">{isMobile ? mobile : desktop}</AppBar>;
};

export default MainNav;
