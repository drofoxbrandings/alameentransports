import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Navigate, useNavigate } from "react-router-dom";

const Footer = ({
  logo,
  address,
  phone1,
  phone2,
  mail,
  socialMedia,
  copyright,
  links,
}) => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ padding: "3rem 1rem" }}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={8}
              sx={{ "& img": { marginBottom: "1rem" } }}
            >
              <img src={logo} alt="logo" width="40%" />
              <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
                {address}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  marginBottom: "1rem",
                }}
              >
                <Typography variant="body1">{phone1}</Typography>
                <HorizontalRuleIcon sx={{ transform: "rotate(90deg)" }} />
                <Typography variant="body1">{phone2}</Typography>
              </Box>

              <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
                {mail}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                Important Links
              </Typography>
              <List>
                {links?.map((item, index) => (
                  <ListItemButton
                    key={index}
                    component="a"
                    href={`${item.link}`}
                    dense={true}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {" "}
              <Box>
                <Typography
                  variant="body1"
                  sx={{ textDecoration: "underline" }}
                >
                  Abu Dhabi:
                </Typography>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.57156904762!2d54.5335069!3d24.326574899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e47fb280f01a1%3A0x2ef6250379469584!2sAAT%20Transport%20%26%20Limousine%20-%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1719040316924!5m2!1sen!2sae"
                  width="100%"
                  height="100"
                  style={{ padding: "1rem 0 0 0", border: "none" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Typography
                  variant="body1"
                  sx={{ textDecoration: "underline" }}
                >
                  Dubai:
                </Typography>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.6500015867236!2d55.3749355!3d25.215023099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67c6f9611b29%3A0x934ce3af96a67c67!2sAAT%20Transport%20%26%20Limousine%20-%20Dubai!5e0!3m2!1sen!2sae!4v1698051061651!5m2!1sen!2sae"
                  width="100%"
                  height="100"
                  style={{ padding: "1rem 0 0 0", border: "none" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Typography
                  variant="body1"
                  sx={{ textDecoration: "underline" }}
                >
                  Technical Center:
                </Typography>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.27184793721!2d54.4943545!3d24.371844799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6768076a8e5f%3A0x42a07fda43de199!2sAAT%20Auto%20Garage%20-%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1720254816904!5m2!1sen!2sae"
                  width="100%"
                  height="100"
                  style={{ padding: "1rem 0 0 0", border: "none" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </Box>
            </Grid>
            <Grid item xs={6}>
              {" "}
              <Box>
                <Typography
                  variant="body1"
                  sx={{ textDecoration: "underline" }}
                >
                  Car Rental:
                </Typography>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3635.0232119019856!2d54.4760513753544!3d24.3456840782689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDIwJzQ0LjUiTiA1NMKwMjgnNDMuMSJF!5e0!3m2!1sen!2sae!4v1737216555560!5m2!1sen!2sae"
                  width="100%"
                  height="100"
                  style={{ padding: "1rem 0 0 0", border: "none" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ margin: "1rem 0" }} />
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            {socialMedia?.map((item, index) => (
              <IconButton
                color="primary"
                size="large"
                component={Link}
                key={index}
                href={item.link}
                target="_blank"
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>
          <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
            &copy; {copyright}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
