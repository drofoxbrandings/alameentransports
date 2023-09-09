"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "../assets/logo.svg";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  Grid,
  Box,
} from "@mui/material";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import ArrowDropUpSharpIcon from "@mui/icons-material/ArrowDropUpSharp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

const pages = ["HOME", "ABOUT US", "COMPANY", "CONTACT US"];
const address = [
  " Abu Dhabi, UAE",
  "Dubai,UAE",
  " +971 50 505 8724",
  "+971 2 555 0509",
  "info@alameenlimousine.com",
];

const MainNav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState("");
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const mobile = (
    <Container
      maxWidth="100%"
      sx={{ backgroundColor: "#ffffff", padding: "10px" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 540,
            fontSize: ".9rem",
          }}
        >
          <Grid item xs={12} md={6} sx={{ img: { width: "150px" } }}>
            <Box sx={{ position: "absolute", left: "10px", top: "-33px" }}>
              <img width={400} height={120} src={Image} alt="logo" />
            </Box>
          </Grid>
        </Typography>
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
            <List>
              {/* <ListItemButton> */}
              <ListItemIcon
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "15px",
                  marginTop: "100px",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                  <IconButton
                    sx={{
                      position: "absolute",
                      right: "33px",
                      top: "15px",
                    }}
                    onClick={toggleDrawer}
                  >
                    <CloseIcon sx={{ fontSize: { md: "25px", sm: "40px" } }} />
                  </IconButton>
                  <ListItemText
                    sx={{
                      position: "absolute",
                      left: "33px",
                      top: "-23px",
                    }}
                  >
                    <img width={150} height={120} src={Image} alt="hello" />
                  </ListItemText>
                </Box>

                {pages.map((item, index) => (
                  <ListItemIcon
                    sx={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      marginRight: "250px",
                    }}
                  >
                    {index === 2 &&
                      (anchorEl ? (
                        <ArrowDropUpSharpIcon onClick={handleClose} />
                      ) : (
                        <ArrowDropDownSharpIcon
                          aria-controls="simple-menu"
                          aria-haspopup="true"
                          onClick={handleOpen}
                          variant="outlined"
                        />
                      ))}
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      sx={{ marginTop: "200px", border: "none" }}
                    >
                      <MenuItem>Limousine</MenuItem>
                      <MenuItem>Passenger transport</MenuItem>
                      <MenuItem>Tour by luxury bus</MenuItem>
                      <MenuItem>School bus</MenuItem>
                    </Menu>
                    <ListItemText sx={{ color: "#1c1c1c", marginLeft: "33px" }}>
                      {item}
                    </ListItemText>
                  </ListItemIcon>
                ))}
                <ListItemIcon
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "27px",
                    marginTop: "220px",
                  }}
                >
                  {address.map((item, index) => (
                    <ListItemIcon sx={{ color: "#A81D34", marginTop: "10px" }}>
                      {index === 0 && (
                        <LocationOnIcon sx={{ marginTop: "2px" }} />
                      )}
                      {index === 1 && (
                        <LocationOnIcon sx={{ marginTop: "2px" }} />
                      )}
                      {index === 2 && (
                        <SmartphoneIcon sx={{ marginTop: "2px" }} />
                      )}
                      {index === 3 && (
                        <LocalPhoneIcon sx={{ marginTop: "2px" }} />
                      )}
                      {index === 4 && <MailIcon sx={{ marginTop: "3px" }} />}

                      <ListItemText
                        sx={{
                          color: "#A81D34",
                          marginLeft: "20px",
                        }}
                      >
                        {item}
                      </ListItemText>
                    </ListItemIcon>
                  ))}
                </ListItemIcon>
              </ListItemIcon>
            </List>
          </Drawer>
          <IconButton
            sx={{ position: "absolute", right: "10px", top: "4px" }}
            onClick={toggleDrawer}
          >
            <MenuIcon sx={{ fontSize: { md: "25px", sm: "40px" } }} />
          </IconButton>
        </React.Fragment>
      </Toolbar>
    </Container>
  );

  const desktop = (
    <Container maxWidth="100%" sx={{ backgroundColor: "#A81D34" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 540,
            fontSize: ".9rem",
          }}
        >
          {/* Associated by Al Ameen Transports */}
        </Typography>

        {pages.map((page, index) => (
          <div key={index}>
            {index === 2 ? (
              <div>
                <Button
                  aria-controls="dropdown-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  sx={{ color: "#ffffff", fontWeight: "bold" }}
                >
                  {page}
                </Button>
                <Menu
                  id="dropdown-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                 
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  
                  sx={{marginTop:"20px",marginLeft:"-70px"}}
                >
                  <Box sx={{width:"200px"}}>
                  <MenuItem >Limousine</MenuItem>
                  <MenuItem>Passenger transport</MenuItem>
                  <MenuItem>Tour by luxury bus</MenuItem>
                  <MenuItem>School bus</MenuItem>
                  </Box>
                </Menu>
              </div>
            ) : (
              <Typography
                key={page}
                sx={{
                  margin: ".6rem",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: ".9rem",
                }}
              >
                {page}
              </Typography>
            )}
          </div>
        ))}
      </Toolbar>
    </Container>
  );
  return <AppBar position="static">{isMobile ? mobile : desktop} </AppBar>;
};

export default MainNav;
